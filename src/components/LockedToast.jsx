import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, X } from 'lucide-react';

export default function LockedToast({ message, onClose }) {
  if (!message) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        className="fixed top-16 sm:top-20 left-1/2 -translate-x-1/2 z-40 max-w-[92vw] sm:max-w-md pointer-events-auto"
      >
        <div className="bg-stone-900/95 border border-amber-500/40 text-stone-200 px-4 py-2.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-md flex items-center gap-2.5 text-xs sm:text-sm">
          <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
            <Lock className="w-3.5 h-3.5" />
          </div>
          <p className="font-medium text-stone-200 flex-1 leading-snug">
            {message}
          </p>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-200 p-1 rounded-full cursor-pointer transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
