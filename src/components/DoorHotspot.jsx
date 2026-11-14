import React from 'react';
import { motion } from 'framer-motion';
import { Key, Lock, CheckCircle2, Sparkles } from 'lucide-react';

export default function DoorHotspot({
  door,
  isCandleLit = false,
  isCollected = false,
  keyPiecesCount = 0,
  celebrating = false,
  onOpenDoor,
  onLockedClick,
}) {
  const isCenterDoor = door.id === 'cumple';
  const canUnlockCenter = isCenterDoor && keyPiecesCount === 2 && isCandleLit;

  const handleClick = (e) => {
    e.stopPropagation();

    if (!isCandleLit) {
      onLockedClick(
        isCenterDoor
          ? 'Enciende primero la vela central para iluminar la puerta principal.'
          : `Enciende primero la ${door.title.replace('Puerta', 'vela')} para poder explorar esta puerta.`
      );
      return;
    }

    if (isCenterDoor) {
      if (keyPiecesCount < 2) {
        onLockedClick(
          'Necesitas reunir los 2 fragmentos de la llave en las puertas laterales para abrirla.'
        );
      } else {
        onOpenDoor(door.id);
      }
    } else {
      onOpenDoor(door.id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`absolute z-10 transition-all select-none ${
        isCandleLit ? 'cursor-pointer' : 'cursor-pointer opacity-70'
      }`}
      style={{
        left: `${door.x}%`,
        top: `${door.y}%`,
        width: `${door.width}%`,
        height: `${door.height}%`,
      }}
      aria-label={door.title}
      title={
        !isCandleLit
          ? `${door.title} (A oscuras)`
          : isCenterDoor
          ? canUnlockCenter
            ? '¡Puerta de Cumpleaños lista para abrir!'
            : 'Puerta de Cumpleaños (Cerrada con llave doble)'
          : isCollected
          ? `${door.title} (Fragmento ya recolectado)`
          : `${door.title} - Toca para investigar`
      }
    >
      {/* Side Door: Active & Uncollected Golden Invitation Glow */}
      {!isCenterDoor && isCandleLit && !isCollected && (
        <div className="w-full h-full relative rounded-lg border-2 border-amber-400/50 hover:border-amber-300 bg-amber-500/10 hover:bg-amber-400/20 transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] flex flex-col items-center justify-center group">
          <motion.div
            animate={{
              y: [-4, 4, -4],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="bg-amber-500/90 text-stone-950 px-2.5 py-1 rounded-full shadow-lg border border-amber-200 text-[10px] sm:text-xs font-bold flex items-center gap-1"
          >
            <Key className="w-3 h-3 fill-stone-950" />
            <span>Investigar</span>
          </motion.div>
        </div>
      )}

      {/* Side Door: Already Collected State */}
      {!isCenterDoor && isCandleLit && isCollected && (
        <div className="w-full h-full relative rounded-lg border border-amber-500/20 hover:bg-amber-500/5 transition-all flex flex-col items-center justify-center">
          <div className="bg-stone-900/80 backdrop-blur-xs border border-amber-500/30 text-amber-300/80 px-2 py-0.5 rounded-full text-[9px] sm:text-[11px] font-medium flex items-center gap-1 shadow">
            <CheckCircle2 className="w-3 h-3 text-amber-400" />
            <span className="hidden xs:inline">Llave obtenida</span>
          </div>
        </div>
      )}

      {/* Center Door: Ready to Unlock (2/2 keys + lit candle) */}
      {isCenterDoor && canUnlockCenter && !celebrating && (
        <div className="w-full h-full relative rounded-xl border-2 border-amber-300/80 bg-amber-400/15 hover:bg-amber-400/25 transition-all shadow-[0_0_35px_rgba(251,191,36,0.6)] flex flex-col items-center justify-center">
          {/* Pulsing golden aura around lock */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-stone-950 font-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-[0_0_20px_#f59e0b] border-2 border-amber-100 text-xs sm:text-sm flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-stone-950 animate-spin" style={{ animationDuration: '4s' }} />
            <span>¡Abrir Gran Puerta!</span>
            <Key className="w-4 h-4 fill-stone-950" />
          </motion.div>
        </div>
      )}

      {/* Center Door: Celebrated & Open - Reopen letter */}
      {isCenterDoor && celebrating && (
        <div className="w-full h-full relative rounded-xl border border-amber-400/30 hover:bg-amber-400/10 transition-all flex flex-col items-center justify-center cursor-pointer group">
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="bg-amber-500/90 hover:bg-amber-400 text-stone-950 font-bold px-3 py-1.5 rounded-full shadow-lg border border-amber-200 text-xs sm:text-sm flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>🎉 Carta de Cumpleaños</span>
          </motion.div>
        </div>
      )}

      {/* Center Door: Still Locked (< 2 keys or not lit) */}
      {isCenterDoor && (!canUnlockCenter || !isCandleLit) && !celebrating && (
        <div className="w-full h-full relative rounded-xl border border-transparent hover:border-amber-500/30 hover:bg-stone-900/20 transition-all flex flex-col items-center justify-center group">
          <div className="bg-stone-950/80 border border-stone-700/80 group-hover:border-amber-500/40 text-stone-300 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium flex items-center gap-1.5 shadow-md">
            <Lock className="w-3 h-3 text-amber-500" />
            <span className="hidden xs:inline">
              {keyPiecesCount}/2 Fragmentos
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
