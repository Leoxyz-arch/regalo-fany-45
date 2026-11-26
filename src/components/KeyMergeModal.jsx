import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Key, Sparkles, Unlock } from 'lucide-react';

export default function KeyMergeModal({ isOpen = false, onComplete }) {
  const [stage, setStage] = useState('merging'); // 'merging' -> 'joined' -> 'unlocking'

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    // Timeline for cinematic key merge
    const t1 = setTimeout(() => {
      setStage('joined');
    }, 1200);

    const t2 = setTimeout(() => {
      setStage('unlocking');
    }, 2400);

    const t3 = setTimeout(() => {
      onComplete();
    }, 3600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      setStage('merging');
    };
  }, [isOpen, onComplete]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md select-none">
      <div className="flex flex-col items-center text-center max-w-sm">
        {/* Key merging visual area */}
        <div className="relative w-64 h-48 flex items-center justify-center">
          {/* Central Flash Burst on Join */}
          {stage !== 'merging' && (
            <motion.div
              initial={{ scale: 0, opacity: 1 }}
              animate={{ scale: [0, 2.5, 3], opacity: [1, 0.8, 0] }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 blur-lg"
            />
          )}

          {stage === 'merging' ? (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Left Fragment flying in */}
              <motion.div
                initial={{ x: -100, opacity: 0, rotate: -40 }}
                animate={{ x: -14, opacity: 1, rotate: -15 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
                className="w-16 h-16 rounded-full bg-stone-900 border-2 border-amber-400 p-2 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.6)]"
              >
                <Key className="w-10 h-10 text-amber-300 -rotate-45" />
              </motion.div>

              {/* Right Fragment flying in */}
              <motion.div
                initial={{ x: 100, opacity: 0, rotate: 40 }}
                animate={{ x: 14, opacity: 1, rotate: 15 }}
                transition={{ duration: 1.1, ease: 'easeOut' }}
                className="w-16 h-16 rounded-full bg-stone-900 border-2 border-amber-400 p-2 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.6)]"
              >
                <Key className="w-10 h-10 text-amber-300 rotate-45" />
              </motion.div>
            </div>
          ) : (
            /* Unified Full Key */
            <motion.div
              initial={{ scale: 0.8, rotate: 0 }}
              animate={
                stage === 'unlocking'
                  ? { scale: [1, 1.25, 0.9], rotate: [0, 90, 90], y: [0, -10, 20], opacity: [1, 1, 0.2] }
                  : { scale: [1, 1.15, 1], rotate: [0, -5, 5, 0] }
              }
              transition={
                stage === 'unlocking'
                  ? { duration: 1.1, ease: 'easeInOut' }
                  : { duration: 1.2, repeat: Infinity, ease: 'easeInOut' }
              }
              className="relative w-28 h-28 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-600 p-1 shadow-[0_0_40px_#f59e0b] flex items-center justify-center"
            >
              <div className="w-full h-full rounded-full bg-stone-950 flex flex-col items-center justify-center">
                <Key className="w-14 h-14 text-yellow-300 drop-shadow-[0_0_12px_rgba(251,191,36,0.9)]" />
                <span className="text-[10px] font-black text-amber-400 tracking-wider">
                  FANY #46
                </span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Dynamic Status Text */}
        <motion.div
          key={stage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="mt-4"
        >
          {stage === 'merging' && (
            <p className="text-amber-200 text-sm font-semibold tracking-wide flex items-center justify-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400 animate-spin" />
              <span>Uniendo los dos fragmentos de la llave...</span>
            </p>
          )}

          {stage === 'joined' && (
            <div>
              <h3 className="text-lg font-bold text-yellow-300 drop-shadow flex items-center justify-center gap-1.5">
                <Sparkles className="w-5 h-5 text-amber-300" />
                <span>¡Llave Dorada Completa!</span>
              </h3>
              <p className="text-xs text-stone-300 mt-1">
                La cerradura de la Gran Puerta está respondiendo...
              </p>
            </div>
          )}

          {stage === 'unlocking' && (
            <div className="flex items-center justify-center gap-2 text-amber-400 font-bold text-base animate-pulse">
              <Unlock className="w-5 h-5 text-amber-400" />
              <span>¡Abriendo la Puerta del Cumpleaños!</span>
            </div>
          )}
        </motion.div>

        {/* Quick Skip button */}
        <button
          onClick={onComplete}
          className="mt-6 text-xs text-stone-500 hover:text-stone-300 underline transition-colors cursor-pointer"
        >
          Saltar animación
        </button>
      </div>
    </div>
  );
}
