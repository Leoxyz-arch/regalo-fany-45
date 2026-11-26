import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Key,
  Lock,
  Unlock,
  Sparkles,
  Users,
} from 'lucide-react';
import { DOLL_CONFIG, CAJA_FUERTE_CONFIG } from '../data/familiaData';
import { HOTSPOTS } from '../data/config';
import { soundManager } from '../utils/audio';
import MuñecoArmario from '../components/familia/MuñecoArmario';
import TriviaModal from '../components/familia/TriviaModal';
import CajaFuerteModal from '../components/familia/CajaFuerteModal';
import KeyFragmentModal from '../components/KeyFragmentModal';

export default function FamiliaView({
  hasKey = false,
  onAwardKey,
  onBack,
}) {
  const [dollsCompleted, setDollsCompleted] = useState({
    leo: false,
    papa: false,
    naty: false,
  });
  const [activeDollId, setActiveDollId] = useState(null);
  const [isSafeOpen, setIsSafeOpen] = useState(false);
  const [showRewardModal, setShowRewardModal] = useState(false);

  const backgroundUrl = `${import.meta.env.BASE_URL}images/armario/amario.png`;

  const completedCount = Object.values(dollsCompleted).filter(Boolean).length;
  const allCompleted = completedCount === 3;

  const handleOpenDoll = (dollId) => {
    soundManager.playClick();
    setActiveDollId(dollId);
  };

  const handleDollComplete = (dollId) => {
    setDollsCompleted((prev) => ({
      ...prev,
      [dollId]: true,
    }));
  };

  const handleOpenSafe = () => {
    soundManager.playClick();
    setIsSafeOpen(true);
  };

  const handleSafeUnlockSuccess = () => {
    setIsSafeOpen(false);
    onAwardKey();
    setShowRewardModal(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="fixed inset-0 z-40 overflow-hidden bg-stone-950 text-amber-50 select-none flex flex-col"
    >
      {/* BARRA SUPERIOR HUD */}
      <div className="relative z-30 border-b border-white/5 bg-stone-950/85 backdrop-blur-md px-3 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between gap-3 shadow-lg">
        {/* Botón regresar */}
        <button
          type="button"
          onClick={onBack}
          className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-amber-200/30 bg-stone-900/80 px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold text-amber-100 shadow-lg transition-all hover:border-amber-200/60 hover:bg-stone-800 active:scale-95"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="sm:hidden">Regresar</span>
          <span className="hidden sm:inline">Regresar a la habitación</span>
        </button>

        {/* Título Central en Desktop */}
        <div className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300/80">
          <Users className="w-4 h-4 text-amber-400" />
          <span>Puerta 2 · El Armario Familiar</span>
        </div>

        {/* Indicadores de Estado */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Contador de muñecos completados */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-amber-500/30 bg-stone-900/80 text-[10px] sm:text-xs font-bold text-amber-200">
            <span>Muñecos:</span>
            <span className="text-amber-400 font-black">{completedCount}/3</span>
          </div>

          {/* Badge del Fragmento */}
          <div
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-bold shadow-lg backdrop-blur-md ${
              hasKey
                ? 'border-emerald-300/40 bg-emerald-950/60 text-emerald-200'
                : 'border-amber-300/30 bg-stone-900/80 text-amber-200'
            }`}
          >
            <Key className={`h-3.5 w-3.5 ${hasKey ? 'text-emerald-300' : 'text-amber-300'}`} />
            <span className="hidden sm:inline">Fragmento de Familia</span>
            <span>{hasKey ? '2/2 · Conseguido' : '2/2 · Pendiente'}</span>
          </div>
        </div>
      </div>

      {/* ÁREA PRINCIPAL DEL ESCENARIO DEL ARMARIO */}
      <div className="relative flex-1 w-full h-full overflow-hidden flex items-center justify-center p-2 sm:p-4">
        {/* Contenedor del escenario que respeta la proporción del armario */}
        <div className="relative w-full h-full max-w-6xl max-h-[85vh] aspect-[1376/768] rounded-2xl sm:rounded-3xl overflow-hidden border border-amber-500/20 shadow-[0_0_80px_rgba(0,0,0,0.85)] bg-stone-900">
          {/* Fondo del armario */}
          <img
            src={backgroundUrl}
            alt="Armario familiar con muñecos interactivos"
            className="absolute inset-0 w-full h-full object-fill pointer-events-none select-none"
            draggable={false}
          />

          {/* Iluminación y viñeta suave */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-stone-950/30 pointer-events-none" />

          {/* LOS 3 MUÑECOS INTERACTIVOS */}
          <MuñecoArmario
            doll={DOLL_CONFIG.leo}
            isCompleted={dollsCompleted.leo}
            onClick={() => handleOpenDoll('leo')}
          />

          <MuñecoArmario
            doll={DOLL_CONFIG.papa}
            isCompleted={dollsCompleted.papa}
            onClick={() => handleOpenDoll('papa')}
          />

          <MuñecoArmario
            doll={DOLL_CONFIG.naty}
            isCompleted={dollsCompleted.naty}
            onClick={() => handleOpenDoll('naty')}
          />

          {/* HOTSPOT INTERACTIVO SOBRE LA CAJA FUERTE EN EL ARMARIO */}
          <button
            type="button"
            onClick={handleOpenSafe}
            style={{
              left: CAJA_FUERTE_CONFIG.hotspot.left,
              top: CAJA_FUERTE_CONFIG.hotspot.top,
              width: CAJA_FUERTE_CONFIG.hotspot.width,
              height: CAJA_FUERTE_CONFIG.hotspot.height,
            }}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl cursor-pointer group focus:outline-none z-10"
            aria-label="Abrir panel de la caja fuerte"
          >
            <div className="w-full h-full rounded-xl border-2 border-dashed border-amber-400/0 group-hover:border-amber-400/60 group-hover:bg-amber-400/10 transition-all flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-stone-950/90 text-amber-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-amber-400/40 shadow-lg flex items-center gap-1">
                <Lock className="w-3 h-3" />
                <span>Caja fuerte</span>
              </div>
            </div>
          </button>

          {/* BOTÓN FLOTANTE DESTACADO PARA ABRIR LA CAJA FUERTE */}
          <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20">
            <motion.button
              type="button"
              onClick={handleOpenSafe}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-black flex items-center gap-2.5 shadow-2xl backdrop-blur-md cursor-pointer transition-all border ${
                allCompleted
                  ? 'bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-stone-950 border-amber-200 shadow-[0_0_35px_rgba(251,191,36,0.6)] animate-pulse'
                  : 'bg-stone-900/90 text-amber-200 border-amber-500/40 hover:border-amber-400 hover:bg-stone-800/95'
              }`}
            >
              {hasKey ? (
                <>
                  <Unlock className="w-4 h-4 text-emerald-400" />
                  <span>Caja Fuerte (Abierta)</span>
                </>
              ) : allCompleted ? (
                <>
                  <Sparkles className="w-4 h-4 text-stone-950" />
                  <span>¡Tienes los 3 números! Abre la Caja Fuerte</span>
                  <Lock className="w-4 h-4 text-stone-950" />
                </>
              ) : (
                <>
                  <Lock className="w-4 h-4 text-amber-400" />
                  <span>Abrir Caja Fuerte (Ingresar Código)</span>
                </>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* MODAL DE TRIVIA DEL MUÑECO SELECCIONADO */}
      <AnimatePresence>
        {activeDollId && (
          <TriviaModal
            doll={DOLL_CONFIG[activeDollId]}
            isOpen={!!activeDollId}
            onClose={() => setActiveDollId(null)}
            onComplete={handleDollComplete}
            isAlreadyCompleted={dollsCompleted[activeDollId]}
          />
        )}
      </AnimatePresence>

      {/* MODAL DE LA CAJA FUERTE */}
      <AnimatePresence>
        {isSafeOpen && (
          <CajaFuerteModal
            isOpen={isSafeOpen}
            onClose={() => setIsSafeOpen(false)}
            onUnlockSuccess={handleSafeUnlockSuccess}
            dollsStatus={dollsCompleted}
          />
        )}
      </AnimatePresence>

      {/* MODAL CELEBRATORIO DE ENTREGA DEL FRAGMENTO 2/2 */}
      <AnimatePresence>
        {showRewardModal && (
          <KeyFragmentModal
            door={HOTSPOTS.doors.familia}
            isOpen={showRewardModal}
            isAlreadyCollected={false}
            onCollectAndClose={() => {
              setShowRewardModal(false);
              onBack();
            }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
