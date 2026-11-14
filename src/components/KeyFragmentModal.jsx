import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Key, Sparkles, Heart, Compass, Check, X } from 'lucide-react';

export default function KeyFragmentModal({
  door,
  isOpen = false,
  isAlreadyCollected = false,
  onCollectAndClose,
}) {
  if (!isOpen || !door) return null;

  const isLeft = door.id === 'viajes';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm select-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-md bg-stone-900 border-2 border-amber-500/40 rounded-2xl p-5 sm:p-7 shadow-[0_0_50px_rgba(245,158,11,0.25)] text-stone-100 overflow-hidden"
        >
          {/* Subtle Ambient Background Flare */}
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-amber-500/15 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-rose-500/15 rounded-full blur-2xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onCollectAndClose}
            className="absolute top-3.5 right-3.5 text-stone-400 hover:text-stone-100 p-1.5 rounded-full bg-stone-800/60 hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Key Piece Graphic */}
          <div className="flex flex-col items-center text-center mt-1 mb-4">
            <div className="relative mb-3">
              {/* Outer Golden Halo */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute inset-0 rounded-full bg-amber-400/25 blur-md"
              />

              {/* Fragment Disc */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-300 p-0.5 shadow-xl flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-stone-950 flex items-center justify-center relative overflow-hidden">
                  <Key
                    className={`w-10 h-10 sm:w-12 sm:h-12 text-amber-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.8)] ${
                      isLeft ? 'rotate-[-30deg]' : 'rotate-[30deg]'
                    }`}
                  />
                  <div className="absolute bottom-1.5 text-[10px] font-bold text-amber-400/90 tracking-widest uppercase">
                    {isLeft ? 'Parte 1/2' : 'Parte 2/2'}
                  </div>
                </div>
              </div>

              {/* Badge Icon (Compass for travel, Heart for family) */}
              <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center shadow-md">
                {isLeft ? (
                  <Compass className="w-4 h-4" />
                ) : (
                  <Heart className="w-4 h-4 fill-stone-950" />
                )}
              </div>
            </div>

            {/* Title & Subtitle */}
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded-full mb-1.5">
              <Sparkles className="w-3 h-3" />
              {door.badgeText}
            </span>

            <h3 className="text-lg sm:text-xl font-bold text-amber-100">
              {door.modal.title}
            </h3>
            <p className="text-xs sm:text-sm font-medium text-amber-300/80 mt-0.5">
              {door.modal.subtitle}
            </p>
          </div>

          {/* Emotional Message Card */}
          <div className="bg-stone-950/70 border border-amber-500/20 rounded-xl p-3.5 sm:p-4 mb-5 text-xs sm:text-sm text-stone-300 leading-relaxed shadow-inner">
            <p className="mb-2.5">{door.modal.description}</p>
            <p className="italic text-amber-200/90 font-serif text-center my-2">
              {door.modal.quote}
            </p>
            <p className="text-[11px] sm:text-xs text-stone-400 text-right font-medium">
              — {door.modal.childrenNote}
            </p>
          </div>

          {/* Action / Return Button */}
          <button
            onClick={onCollectAndClose}
            className="w-full py-3 px-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm sm:text-base rounded-xl shadow-[0_4px_20px_rgba(245,158,11,0.4)] transition-all transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>
              {isAlreadyCollected
                ? 'Regresar a la habitación'
                : 'Guardar fragmento en inventario'}
            </span>
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
