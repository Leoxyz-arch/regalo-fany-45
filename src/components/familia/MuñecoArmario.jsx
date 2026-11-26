import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle2, Sparkles } from 'lucide-react';

export default function MuñecoArmario({ doll, isCompleted, onClick }) {
  const currentImage = isCompleted ? doll.images.answer : doll.images.initial;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      style={{
        left: doll.position.left,
        top: doll.position.top,
        width: doll.size.width,
        minWidth: doll.size.minWidth,
        maxWidth: doll.size.maxWidth,
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer select-none group focus:outline-none z-20"
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.95 }}
      animate={
        isCompleted
          ? { y: [0, -4, 0] }
          : { y: [0, -6, 0] }
      }
      transition={{
        duration: isCompleted ? 3.5 : 2.2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      aria-label={
        isCompleted
          ? `${doll.name} (Número ${doll.number} revelado)`
          : `Hablar con ${doll.name}`
      }
    >
      {/* Halo de luz de fondo */}
      <div
        className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-75 transition-opacity duration-300 pointer-events-none"
        style={{ backgroundColor: doll.glowColor }}
      />

      {/* Muñeco renderizado */}
      <div className="relative">
        <img
          src={currentImage}
          alt={`Muñeco de ${doll.name}`}
          className="w-full h-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.65)] filter transition-all duration-300 group-hover:brightness-110"
          draggable={false}
        />

        {/* Letrero / Globo flotante según estado */}
        {!isCompleted ? (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap bg-stone-900/90 text-amber-200 border border-amber-300/40 rounded-full px-2.5 py-0.5 text-[10px] sm:text-xs font-bold shadow-lg backdrop-blur-sm flex items-center gap-1 group-hover:border-amber-300 group-hover:bg-stone-900"
          >
            <MessageCircle className="w-3 h-3 text-amber-400 animate-pulse" />
            <span>{doll.name}</span>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gradient-to-r from-amber-400 to-yellow-300 text-stone-950 font-black rounded-full px-3 py-1 text-xs shadow-[0_0_20px_rgba(251,191,36,0.6)] flex items-center gap-1 border border-amber-200"
          >
            <Sparkles className="w-3 h-3 text-amber-900" />
            <span>{doll.name}: {doll.number}</span>
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-800" />
          </motion.div>
        )}
      </div>
    </motion.button>
  );
}
