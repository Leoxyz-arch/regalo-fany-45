import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame } from 'lucide-react';

export default function CandleHotspot({
  candle,
  isActive = false,
  isLit = false,
  onLight,
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (!isActive || isLit) {
      return;
    }

    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, [isActive, isLit]);

  const isTooltipVisible = showTooltip && isActive && !isLit;

  const handleClick = (e) => {
    e.stopPropagation();
    if (isActive && !isLit) {
      setShowTooltip(false);
      onLight(candle.id);
    }
  };

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
      style={{
        left: `${candle.x}%`,
        top: `${candle.y}%`,
      }}
    >
      {/* Interactive Hitbox */}
      <button
        onClick={handleClick}
        disabled={!isActive || isLit}
        aria-label={candle.name}
        title={
          isLit
            ? `${candle.name} (Encendida)`
            : isActive
            ? `${candle.name} - Toca para encender`
            : `${candle.name} (Inactiva)`
        }
        className={`relative w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center select-none outline-none focus:outline-none transition-transform active:scale-95 ${
          isActive && !isLit
            ? 'cursor-pointer hover:scale-110'
            : isLit
            ? 'cursor-default pointer-events-none'
            : 'cursor-not-allowed pointer-events-none'
        }`}
      >
        {/* Pulsing circular wave when active & unlit */}
        {isActive && !isLit && (
          <>
            {/* Outer expanding ripple 1 */}
            <motion.span
              className="absolute inset-0 rounded-full border-2 border-white/80 pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.8)]"
              animate={{
                scale: [0.8, 1.8, 2.5],
                opacity: [0.95, 0.45, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />

            {/* Outer expanding ripple 2 (delayed) */}
            <motion.span
              className="absolute inset-0 rounded-full border border-amber-300/80 pointer-events-none shadow-[0_0_15px_rgba(251,191,36,0.6)]"
              animate={{
                scale: [0.8, 1.8, 2.5],
                opacity: [0.95, 0.45, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: 'easeOut',
                delay: 1.1,
              }}
            />

            {/* Glowing core indicator */}
            <motion.span
              className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/90 shadow-[0_0_18px_#ffffff,0_0_30px_#f59e0b] flex items-center justify-center text-amber-900"
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-400" />
            </motion.span>
          </>
        )}

        {/* Lit Candle flame subtle shimmer */}
        {isLit && (
          <motion.div
            className="w-4 h-4 rounded-full bg-amber-400/30 blur-xs pointer-events-none"
            animate={{
              scale: [1, 1.15, 0.95, 1],
              opacity: [0.6, 0.9, 0.7, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        )}
      </button>

      {/* Floating Help Speech Bubble (Globo de Ayuda tras 4 segundos) */}
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.85 }}
            animate={{
              opacity: 1,
              y: [-6, -14, -6],
              scale: 1,
            }}
            exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 2,
                ease: 'easeInOut',
              },
              opacity: { duration: 0.35 },
            }}
            className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap z-30 pointer-events-none"
          >
            <div className="relative bg-gradient-to-r from-amber-500 to-amber-600 text-stone-950 font-bold text-[11px] sm:text-xs px-3 py-1.5 rounded-full shadow-[0_4px_20px_rgba(245,158,11,0.6)] border border-amber-200/60 flex items-center gap-1.5">
              <span className="text-sm">👆</span>
              <span>Toca aquí para prender la vela</span>
              <Flame className="w-3.5 h-3.5 fill-stone-950 text-stone-950 inline" />

              {/* Triangle Tail pointing down */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-amber-600" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
