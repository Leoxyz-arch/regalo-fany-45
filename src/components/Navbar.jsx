import React from 'react';
import { Key, Volume2, VolumeX, RotateCcw, Sparkles } from 'lucide-react';

export default function Navbar({
  keyPiecesCount = 0,
  hasLeftKey = false,
  hasRightKey = false,
  soundEnabled = false,
  celebrating = false,
  onOpenCelebration,
  onToggleSound,
  onReset,
}) {
  return (
    <header className="h-14 sm:h-16 w-full border-b border-amber-500/20 bg-stone-950/90 backdrop-blur-md px-3 sm:px-6 flex items-center justify-between z-30 select-none shrink-0 shadow-lg shadow-black/40">
      {/* Brand & Recipient */}
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-amber-500 to-rose-400 p-[1.5px] flex items-center justify-center shadow-md shadow-amber-500/20">
          <div className="w-full h-full rounded-full bg-stone-950 flex items-center justify-center text-sm sm:text-base">
            🎂
          </div>
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h1 className="text-sm sm:text-base font-bold tracking-tight text-amber-100 flex items-center gap-1">
              Fany <span className="text-amber-400 font-extrabold">#45</span>
            </h1>
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse hidden xs:inline" />
          </div>
          <p className="text-[10px] sm:text-xs text-stone-400 leading-tight">
            Escape Room de Cumpleaños
          </p>
        </div>
      </div>

      {/* Center: Inventory of Key Fragments */}
      <div className="flex items-center gap-2 bg-stone-900/90 border border-amber-500/30 rounded-full px-2.5 sm:px-4 py-1 sm:py-1.5 shadow-inner">
        <span className="text-[11px] sm:text-xs font-medium text-amber-200/90 hidden md:inline">
          Fragmentos de llave:
        </span>

        {/* Visual Slots */}
        <div className="flex items-center gap-1.5">
          {/* Fragment 1 (Viajes) */}
          <div
            title={hasLeftKey ? 'Fragmento 1: Puerta Viajes (Obtenido)' : 'Fragmento 1: Puerta Viajes (Pendiente)'}
            className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
              hasLeftKey
                ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.5)]'
                : 'bg-stone-800/80 border-stone-700 text-stone-600'
            }`}
          >
            <Key className={`w-3.5 h-3.5 ${hasLeftKey ? 'rotate-[-45deg]' : ''}`} />
          </div>

          {/* Fragment 2 (Familia) */}
          <div
            title={hasRightKey ? 'Fragmento 2: Puerta Familia (Obtenido)' : 'Fragmento 2: Puerta Familia (Pendiente)'}
            className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center border transition-all duration-300 ${
              hasRightKey
                ? 'bg-amber-500/20 border-amber-400 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.5)]'
                : 'bg-stone-800/80 border-stone-700 text-stone-600'
            }`}
          >
            <Key className={`w-3.5 h-3.5 ${hasRightKey ? 'rotate-[45deg]' : ''}`} />
          </div>
        </div>

        {/* Numeric Badge or Celebration Button */}
        {celebrating ? (
          <button
            onClick={onOpenCelebration}
            className="text-[11px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-rose-400 text-stone-950 flex items-center gap-1 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            <span>🎉 Fiesta</span>
          </button>
        ) : (
          <span
            className={`text-xs sm:text-sm font-bold ml-0.5 px-1.5 py-0.5 rounded-full transition-colors ${
              keyPiecesCount === 2
                ? 'bg-amber-400 text-stone-950 font-black animate-pulse'
                : 'text-amber-300'
            }`}
          >
            {keyPiecesCount}/2
          </span>
        )}
      </div>

      {/* Right Controls: Sound & Restart */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Sound Toggle */}
        <button
          onClick={onToggleSound}
          title={soundEnabled ? 'Silenciar sonido' : 'Activar sonido'}
          className={`p-2 sm:px-3 sm:py-1.5 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-all active:scale-95 cursor-pointer ${
            soundEnabled
              ? 'bg-amber-500/15 border-amber-500/40 text-amber-300 hover:bg-amber-500/25'
              : 'bg-stone-900 border-stone-700 text-stone-400 hover:text-stone-200 hover:bg-stone-800'
          }`}
        >
          {soundEnabled ? (
            <>
              <Volume2 className="w-4 h-4 text-amber-400" />
              <span className="hidden sm:inline">Sonido</span>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-stone-400" />
              <span className="hidden sm:inline">Silencio</span>
            </>
          )}
        </button>

        {/* Reset / Reiniciar */}
        <button
          onClick={onReset}
          title="Reiniciar aventura"
          className="p-2 sm:p-2 rounded-lg border border-stone-800 bg-stone-900/80 text-stone-400 hover:text-amber-200 hover:border-amber-500/30 transition-all active:scale-95 cursor-pointer"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
}
