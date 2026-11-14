import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, RotateCcw, Eye, Cake } from 'lucide-react';

export default function CelebrationModal({
  isOpen = false,
  onClose,
  onReset,
}) {
  const triggerConfetti = () => {
    // Center big burst
    confetti({
      particleCount: 90,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#ec4899', '#8b5cf6', '#10b981', '#3b82f6', '#fbbf24'],
    });

    // Left cannon
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 60,
        origin: { x: 0.05, y: 0.75 },
      });
    }, 250);

    // Right cannon
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 60,
        origin: { x: 0.95, y: 0.75 },
      });
    }, 450);
  };

  useEffect(() => {
    if (isOpen) {
      triggerConfetti();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-md select-none overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 30 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative w-full max-w-lg bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 border-2 border-amber-400/60 rounded-3xl p-5 sm:p-8 shadow-[0_0_60px_rgba(251,191,36,0.35)] text-stone-100 my-auto"
        >
          {/* Top celebratory confetti button */}
          <div className="flex justify-center -mt-10 sm:-mt-12 mb-3">
            <button
              onClick={triggerConfetti}
              title="¡Lanzar más confeti!"
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-amber-300 p-1 shadow-2xl flex items-center justify-center cursor-pointer hover:scale-105 active:scale-95 transition-transform"
            >
              <div className="w-full h-full rounded-full bg-stone-950 flex items-center justify-center text-2xl sm:text-3xl">
                🎉
              </div>
            </button>
          </div>

          {/* Heading */}
          <div className="text-center mb-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '3s' }} />
              <span>¡La Gran Puerta ha sido abierta!</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-300">
              ¡Feliz Cumpleaños #45, Fany!
            </h2>
            <p className="text-xs sm:text-sm text-amber-300/80 font-medium mt-1">
              De tus dos hijos que te aman con todo el corazón 💖
            </p>
          </div>

          {/* Heartfelt Letter Card */}
          <div className="space-y-3.5 bg-stone-950/80 border border-amber-500/25 rounded-2xl p-4 sm:p-5 text-xs sm:text-sm text-stone-300 leading-relaxed shadow-inner">
            <div className="border-b border-stone-800 pb-3">
              <p className="text-amber-200 font-semibold mb-1 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                <span>De tu hijo mayor (20 años):</span>
              </p>
              <p className="text-stone-300 italic">
                «Mamá, llegar a mis 20 años y tenerte como mi mayor guía y ejemplo de vida es el regalo más grande. Gracias por tu esfuerzo incansable, por enseñarme a ser fuerte y por quererme tanto.»
              </p>
            </div>

            <div className="border-b border-stone-800 pb-3">
              <p className="text-amber-200 font-semibold mb-1 flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                <span>De tu hija menor:</span>
              </p>
              <p className="text-stone-300 italic">
                «Mami linda, eres mi persona favorita en todo el universo. Gracias por tus abrazos cálidos, tus palabras de aliento y por iluminar siempre cada rincón de nuestra casa.»
              </p>
            </div>

            <p className="text-center font-bold text-amber-300 text-xs sm:text-sm pt-1">
              ✨ ¡Que este cumpleaños #45 esté lleno de bendiciones, salud y mucha felicidad! ✨
            </p>
          </div>

          {/* Placeholder for future party room / next stage */}
          <div className="mt-4 p-3.5 rounded-xl border border-dashed border-amber-500/40 bg-amber-500/5 text-center">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 font-bold text-xs sm:text-sm">
              <Cake className="w-4 h-4" />
              <span>Sala de Fiesta Desbloqueada</span>
            </div>
            <p className="text-[11px] sm:text-xs text-stone-400 mt-1">
              La habitación ahora está completamente iluminada y las puertas abiertas. Espacio listo para la siguiente sorpresa.
            </p>
          </div>

          {/* Buttons: View Room / Reset */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              onClick={onClose}
              className="w-full py-2.5 px-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs sm:text-sm rounded-xl shadow-[0_4px_15px_rgba(245,158,11,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <Eye className="w-4 h-4" />
              <span>Ver habitación iluminada</span>
            </button>

            <button
              onClick={onReset}
              className="w-full py-2.5 px-4 bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-stone-100 font-medium text-xs sm:text-sm rounded-xl border border-stone-700 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <RotateCcw className="w-3.5 h-3.5 text-stone-400" />
              <span>Reiniciar aventura</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
