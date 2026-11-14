import React from 'react';
import { motion } from 'framer-motion';
import { HOTSPOTS } from '../data/config';
import DarknessOverlay from './DarknessOverlay';
import CandleHotspot from './CandleHotspot';
import DoorHotspot from './DoorHotspot';

export default function Scenario({
  candle1Lit = false,
  candle2Lit = false,
  candle3Lit = false,
  activeCandle = 1,
  hasLeftKey = false,
  hasRightKey = false,
  keyPiecesCount = 0,
  celebrating = false,
  onLightCandle,
  onOpenDoor,
  onLockedClick,
}) {
  const bgImageUrl = `${import.meta.env.BASE_URL}images/escenario.jpg`;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-1 sm:p-3 overflow-hidden select-none">
      {/* Aspect-Ratio Preserving Scenario Canvas */}
      <motion.div
        animate={celebrating ? { scale: [1, 1.025, 1.015] } : { scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="relative shadow-2xl rounded-xl overflow-hidden bg-stone-950 border border-stone-800"
        style={{
          aspectRatio: '2752 / 1536',
          width: 'min(100%, calc((100dvh - 5rem) * (2752 / 1536)))',
          height: 'min(calc(100vw * (1536 / 2752)), calc(100dvh - 5rem))',
          maxWidth: '100%',
          maxHeight: 'calc(100dvh - 4.5rem)',
        }}
      >
        {/* Scenario Graphic Image */}
        <img
          src={bgImageUrl}
          alt="Escenario Habitación Cumpleaños Fany 45"
          className="w-full h-full object-contain block pointer-events-none select-none"
          draggable={false}
        />

        {/* Darkness & Progressive Lighting Layer */}
        <DarknessOverlay
          candle1Lit={candle1Lit}
          candle2Lit={candle2Lit}
          candle3Lit={candle3Lit}
          activeCandle={activeCandle}
          celebrating={celebrating}
        />

        {/* Doors Interactive Hotspots */}
        {/* Door 1: Viajes (Left) */}
        <DoorHotspot
          door={HOTSPOTS.doors.viajes}
          isCandleLit={candle1Lit}
          isCollected={hasLeftKey}
          keyPiecesCount={keyPiecesCount}
          celebrating={celebrating}
          onOpenDoor={onOpenDoor}
          onLockedClick={onLockedClick}
        />

        {/* Door 2: Familia (Right) */}
        <DoorHotspot
          door={HOTSPOTS.doors.familia}
          isCandleLit={candle2Lit}
          isCollected={hasRightKey}
          keyPiecesCount={keyPiecesCount}
          celebrating={celebrating}
          onOpenDoor={onOpenDoor}
          onLockedClick={onLockedClick}
        />

        {/* Door 3: Cumpleaños (Center) */}
        <DoorHotspot
          door={HOTSPOTS.doors.cumple}
          isCandleLit={candle3Lit}
          isCollected={celebrating}
          keyPiecesCount={keyPiecesCount}
          celebrating={celebrating}
          onOpenDoor={onOpenDoor}
          onLockedClick={onLockedClick}
        />

        {/* Candle Hotspots */}
        {/* Candle 1 (Left - Viajes) */}
        <CandleHotspot
          candle={HOTSPOTS.candles[1]}
          isActive={activeCandle === 1}
          isLit={candle1Lit}
          onLight={onLightCandle}
        />

        {/* Candle 2 (Right - Familia) */}
        <CandleHotspot
          candle={HOTSPOTS.candles[2]}
          isActive={activeCandle === 2}
          isLit={candle2Lit}
          onLight={onLightCandle}
        />

        {/* Candle 3 (Center - Cumple) */}
        <CandleHotspot
          candle={HOTSPOTS.candles[3]}
          isActive={activeCandle === 3}
          isLit={candle3Lit}
          onLight={onLightCandle}
        />
      </motion.div>

      {/* Discreet orientation tip for mobile users */}
      <div className="mt-1 text-[10px] text-stone-500 font-medium tracking-wide text-center sm:hidden">
        💡 Tip: Puedes rotar tu teléfono en horizontal para mayor inmersión
      </div>
    </div>
  );
}
