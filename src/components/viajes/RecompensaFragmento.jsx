import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { ArrowLeft, CheckCircle2, Compass, Key, Sparkles } from 'lucide-react';

const GOLD_COLORS = ['#fbbf24', '#f59e0b', '#fde68a', '#fef3c7', '#eab308'];

export default function RecompensaFragmento({ onReturn, onStay }) {
  useEffect(() => {
    confetti({
      particleCount: 80,
      spread: 95,
      startVelocity: 38,
      origin: { y: 0.55 },
      colors: GOLD_COLORS,
      zIndex: 70,
      disableForReducedMotion: true,
    });

    const t1 = setTimeout(() => {
      confetti({
        particleCount: 42,
        angle: 60,
        spread: 65,
        origin: { x: 0.02, y: 0.72 },
        colors: GOLD_COLORS,
        zIndex: 70,
        disableForReducedMotion: true,
      });
    }, 220);

    const t2 = setTimeout(() => {
      confetti({
        particleCount: 42,
        angle: 120,
        spread: 65,
        origin: { x: 0.98, y: 0.72 },
        colors: GOLD_COLORS,
        zIndex: 70,
        disableForReducedMotion: true,
      });
    }, 380);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-stone-950/92 p-4 backdrop-blur-xl sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Primer fragmento de la llave conseguido"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.18),transparent_55%)]" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative my-auto w-full max-w-md text-center"
      >
        <div className="relative mx-auto mb-6 flex h-40 w-40 items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.22, 1], opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-0 rounded-full bg-amber-400/25 blur-2xl"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-2 rounded-full border border-dashed border-amber-300/35"
          />
          <motion.div
            initial={{ scale: 0.4, rotate: -25, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 170, damping: 14 }}
            className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-tr from-amber-600 via-yellow-300 to-amber-500 p-[2px] shadow-[0_0_45px_rgba(251,191,36,0.55)]"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-stone-950">
              <Key className="h-12 w-12 -rotate-12 text-amber-300 drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
              <span className="mt-1 text-[10px] font-black uppercase tracking-[0.2em] text-amber-400">
                Parte 1/2
              </span>
            </div>
          </motion.div>

          <motion.span
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, type: 'spring', stiffness: 260, damping: 16 }}
            className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full bg-amber-400 text-stone-950 shadow-lg"
          >
            <Compass className="h-5 w-5" />
          </motion.span>
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-300">
          <Sparkles className="h-3.5 w-3.5" />
          Recompensa desbloqueada
        </span>

        <h2 className="mt-3 font-serif text-2xl font-bold text-amber-50 sm:text-3xl">
          ¡Primer fragmento conseguido!
        </h2>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-stone-300">
          Tu Top 3 de viajes ya está guardado. Este fragmento de la llave guarda
          cada camino que hemos recorrido juntos y te acerca a la Gran Puerta.
        </p>

        <div className="mx-auto mt-5 flex max-w-xs items-center justify-center gap-3 rounded-2xl border border-amber-400/25 bg-stone-900/75 px-4 py-3 shadow-inner">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-400/15 text-amber-300">
            <CheckCircle2 className="h-5 w-5" />
          </div>
          <div className="text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-amber-300/80">
              Inventario de fragmentos
            </p>
            <p className="text-sm font-bold text-amber-100">1 de 2 conseguido</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onReturn}
          className="mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-600 px-4 py-3.5 text-sm font-bold text-stone-950 shadow-[0_6px_24px_rgba(245,158,11,0.35)] transition-all hover:from-amber-300 hover:to-amber-500 active:scale-[0.98]"
        >
          <ArrowLeft className="h-4 w-4" />
          Guardar fragmento y regresar al cuarto
        </button>

        <button
          type="button"
          onClick={onStay}
          className="mt-2.5 cursor-pointer text-xs font-medium text-stone-400 underline decoration-stone-600 underline-offset-4 transition-colors hover:text-amber-200"
        >
          Quedarme un momento en el álbum
        </button>
      </motion.div>
    </motion.div>
  );
}
