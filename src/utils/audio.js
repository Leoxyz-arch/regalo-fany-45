// Audio synthesizer and sound manager using Web Audio API + HTML5 Audio
// Provides background music loop (musica.mp3) with mute toggle,
// plus zero-dependency sound effects for candles, keys, doors, and celebration.

class SoundManager {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.bgAudio = null;
    this.bgOscillators = [];
    this.isMusicPlaying = false;
    this.hasUserInteracted = false;

    if (typeof window !== 'undefined') {
      this.initBgAudio();
      this.setupAutoplayUnlock();
    }
  }

  // Inicializa el reproductor de musica.mp3
  initBgAudio() {
    try {
      const audioUrl = `${import.meta.env.BASE_URL}audio/musica.mp3`;
      this.bgAudio = new Audio(audioUrl);
      this.bgAudio.loop = true;
      this.bgAudio.volume = 0.38; // Volumen agradable que permite escuchar los efectos
      this.bgAudio.preload = 'auto';

      // Garantía de bucle infinito en navegadores móviles
      this.bgAudio.addEventListener('ended', () => {
        if (!this.isMuted && this.bgAudio) {
          this.bgAudio.currentTime = 0;
          this.bgAudio.play().catch(() => {});
        }
      });
    } catch (e) {
      console.warn('No se pudo inicializar Audio de fondo:', e);
      this.bgAudio = null;
    }
  }

  // Desbloqueo automático al primer clic o toque en pantalla (política de navegadores)
  setupAutoplayUnlock() {
    const unlock = () => {
      this.hasUserInteracted = true;
      this.initContext();
      if (!this.isMuted && !this.isMusicPlaying) {
        this.startBgMusic();
      }
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('touchstart', unlock);
      window.removeEventListener('click', unlock);
      window.removeEventListener('keydown', unlock);
    };

    window.addEventListener('pointerdown', unlock, { passive: true });
    window.addEventListener('touchstart', unlock, { passive: true });
    window.addEventListener('click', unlock, { passive: true });
    window.addEventListener('keydown', unlock, { passive: true });
  }

  initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) {
      this.stopBgMusic();
    } else {
      this.initContext();
      this.startBgMusic();
    }
    return this.isMuted;
  }

  setMuted(muted) {
    this.isMuted = muted;
    if (this.isMuted) {
      this.stopBgMusic();
    } else {
      this.initContext();
      this.startBgMusic();
    }
  }

  // Reproduce musica.mp3 en bucle continuo
  startBgMusic() {
    if (this.isMuted) return;

    if (this.bgAudio) {
      this.bgAudio
        .play()
        .then(() => {
          this.isMusicPlaying = true;
        })
        .catch(() => {
          // Si el navegador requiere interacción previa, se activará en el primer clic
        });
      return;
    }

    // Fallback sintetizado si el archivo de audio no existiera
    this.startSynthDrone();
  }

  // Pausa la música de fondo
  stopBgMusic() {
    this.isMusicPlaying = false;
    if (this.bgAudio) {
      try {
        this.bgAudio.pause();
      } catch {
        // Ignorar
      }
    }
    this.stopSynthDrone();
  }

  // Drone sintetizado de respaldo
  startSynthDrone() {
    if (this.isMuted || this.bgOscillators.length > 0) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      this.isMusicPlaying = true;
      const baseFreqs = [196.0, 293.66, 392.0];
      this.bgOscillators = baseFreqs.map((freq) => {
        const osc = this.ctx.createOscillator();
        const filter = this.ctx.createBiquadFilter();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(600, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.02, this.ctx.currentTime);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        return { osc, gain };
      });
    } catch {
      this.isMusicPlaying = false;
    }
  }

  stopSynthDrone() {
    if (!this.bgOscillators.length) return;
    try {
      this.bgOscillators.forEach(({ osc, gain }) => {
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.3);
        setTimeout(() => {
          try {
            osc.stop();
          } catch {
            // Ya detenido
          }
        }, 300);
      });
      this.bgOscillators = [];
    } catch {
      // Ignorar
    }
  }

  // Efectos de sonido (SFX)
  playCandleLight() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.4;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (this.ctx.sampleRate * 0.08));
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, now);
      filter.frequency.exponentialRampToValueAtTime(1200, now + 0.15);
      filter.frequency.exponentialRampToValueAtTime(200, now + 0.4);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.2, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

      whiteNoise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);
      whiteNoise.start(now);

      const osc = this.ctx.createOscillator();
      const oscGain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.3);

      oscGain.gain.setValueAtTime(0.12, now);
      oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

      osc.connect(oscGain);
      oscGain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.6);
    } catch {
      // Fallback silencioso
    }
  }

  playKeyFound() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [587.33, 739.99, 880.0, 1174.66];

      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0, now + idx * 0.08);
        gain.gain.linearRampToValueAtTime(0.18, now + idx * 0.08 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.8);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.8);
      });
    } catch {
      // Fallback silencioso
    }
  }

  playLocked() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      [0, 0.09].forEach((delay) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(140, now + delay);
        osc.frequency.exponentialRampToValueAtTime(70, now + delay + 0.06);

        gain.gain.setValueAtTime(0.2, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.01, now + delay + 0.06);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + delay);
        osc.stop(now + delay + 0.06);
      });
    } catch {
      // Fallback silencioso
    }
  }

  playKeyMerge() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51, 1760];

      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.06);

        gain.gain.setValueAtTime(0, now + idx * 0.06);
        gain.gain.linearRampToValueAtTime(0.15, now + idx * 0.06 + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.06 + 1.2);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + idx * 0.06);
        osc.stop(now + idx * 0.06 + 1.2);
      });
    } catch {
      // Fallback silencioso
    }
  }

  playCelebration() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const chord = [523.25, 659.25, 783.99, 1046.5];

      chord.forEach((freq) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0, now);
        gain.gain.linearRampToValueAtTime(0.2, now + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 2.5);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 2.5);
      });
    } catch {
      // Fallback silencioso
    }
  }

  playClick() {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(400, now + 0.04);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.04);
    } catch {
      // Fallback silencioso
    }
  }
}

export const soundManager = new SoundManager();
