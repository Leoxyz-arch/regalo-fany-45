import React from 'react';
import { motion } from 'framer-motion';

export default function DarknessOverlay({
  candle1Lit = false,
  candle2Lit = false,
  candle3Lit = false,
  activeCandle = 1,
  celebrating = false,
}) {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
      {/* SVG Darkness Mask */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 2752 1536"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Candle 1 (Left - Viajes) Light Hole */}
          <radialGradient id="light-hole-1" cx="512" cy="1238" r="980" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#000000" stopOpacity="1" />
            <stop offset="35%" stopColor="#000000" stopOpacity="0.95" />
            <stop offset="65%" stopColor="#000000" stopOpacity="0.7" />
            <stop offset="85%" stopColor="#000000" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Candle 2 (Right - Familia) Light Hole */}
          <radialGradient id="light-hole-2" cx="2246" cy="1238" r="980" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#000000" stopOpacity="1" />
            <stop offset="35%" stopColor="#000000" stopOpacity="0.95" />
            <stop offset="65%" stopColor="#000000" stopOpacity="0.7" />
            <stop offset="85%" stopColor="#000000" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Candle 3 (Center - Cumple) Light Hole */}
          <radialGradient id="light-hole-3" cx="1380" cy="1110" r="950" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#000000" stopOpacity="1" />
            <stop offset="35%" stopColor="#000000" stopOpacity="0.95" />
            <stop offset="65%" stopColor="#000000" stopOpacity="0.75" />
            <stop offset="85%" stopColor="#000000" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Subtle Peephole for Unlit Active Candle 1 */}
          <radialGradient id="hint-hole-1" cx="512" cy="1238" r="190" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#000000" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Subtle Peephole for Unlit Active Candle 2 */}
          <radialGradient id="hint-hole-2" cx="2246" cy="1238" r="190" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#000000" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Subtle Peephole for Unlit Active Candle 3 */}
          <radialGradient id="hint-hole-3" cx="1380" cy="1110" r="190" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#000000" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* The Composite Mask */}
          <mask id="room-darkness-mask">
            {/* Base: Solid White (Darkness is 100% opaque everywhere) */}
            <rect width="2752" height="1536" fill="#ffffff" />

            {/* Hint peepholes when active but not yet lit */}
            {activeCandle === 1 && !candle1Lit && (
              <circle cx="512" cy="1238" r="190" fill="url(#hint-hole-1)" />
            )}
            {activeCandle === 2 && !candle2Lit && (
              <circle cx="2246" cy="1238" r="190" fill="url(#hint-hole-2)" />
            )}
            {activeCandle === 3 && !candle3Lit && (
              <circle cx="1380" cy="1110" r="190" fill="url(#hint-hole-3)" />
            )}

            {/* Lit Candle 1 cutout */}
            {candle1Lit && (
              <motion.circle
                cx="512"
                cy="1238"
                initial={{ r: 180, opacity: 0.3 }}
                animate={{ r: 980, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                fill="url(#light-hole-1)"
              />
            )}

            {/* Lit Candle 2 cutout */}
            {candle2Lit && (
              <motion.circle
                cx="2246"
                cy="1238"
                initial={{ r: 180, opacity: 0.3 }}
                animate={{ r: 980, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                fill="url(#light-hole-2)"
              />
            )}

            {/* Lit Candle 3 cutout */}
            {candle3Lit && (
              <motion.circle
                cx="1380"
                cy="1110"
                initial={{ r: 180, opacity: 0.3 }}
                animate={{ r: 950, opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                fill="url(#light-hole-3)"
              />
            )}
          </mask>
        </defs>

        {/* The Dark Overlay Rectangle with feathered mask */}
        <motion.rect
          width="2752"
          height="1536"
          fill="#060609"
          mask="url(#room-darkness-mask)"
          animate={{ opacity: celebrating ? 0 : 0.94 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />
      </svg>

      {/* Warm Ambient Glow Layer 1: Candle Left (Viajes) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
          candle1Lit ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background:
            'radial-gradient(circle at 18.6% 80.6%, rgba(251, 191, 36, 0.35) 0%, rgba(245, 158, 11, 0.18) 28%, rgba(217, 119, 6, 0.06) 55%, transparent 75%)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Warm Ambient Glow Layer 2: Candle Right (Familia) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
          candle2Lit ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background:
            'radial-gradient(circle at 81.6% 80.6%, rgba(251, 191, 36, 0.35) 0%, rgba(245, 158, 11, 0.18) 28%, rgba(217, 119, 6, 0.06) 55%, transparent 75%)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Warm Ambient Glow Layer 3: Candle Center (Cumple) */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 pointer-events-none ${
          candle3Lit ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background:
            'radial-gradient(circle at 50.1% 72.3%, rgba(251, 191, 36, 0.38) 0%, rgba(245, 158, 11, 0.20) 25%, rgba(217, 119, 6, 0.06) 50%, transparent 70%)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Golden Celebration Illumination Layer */}
      <div
        className={`absolute inset-0 transition-opacity duration-1500 pointer-events-none ${
          celebrating ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(254, 243, 199, 0.25) 0%, rgba(251, 191, 36, 0.18) 45%, rgba(244, 63, 94, 0.08) 80%, transparent 100%)',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
}
