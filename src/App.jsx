import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Scenario from './components/Scenario';
import KeyFragmentModal from './components/KeyFragmentModal';
import KeyMergeModal from './components/KeyMergeModal';
import CelebrationModal from './components/CelebrationModal';
import LockedToast from './components/LockedToast';
import ViajesView from './views/ViajesView';
import FamiliaView from './views/FamiliaView';
import { HOTSPOTS } from './data/config';
import { soundManager } from './utils/audio';

export default function App() {
  // Candle lighting state
  const [candle1Lit, setCandle1Lit] = useState(false);
  const [candle2Lit, setCandle2Lit] = useState(false);
  const [candle3Lit, setCandle3Lit] = useState(false);
  const [activeCandle, setActiveCandle] = useState(1);

  // Key fragments inventory
  const [hasLeftKey, setHasLeftKey] = useState(false);
  const [hasRightKey, setHasRightKey] = useState(false);

  // Viajes album: Top 3 chosen by mom (persists while exploring the room)
  const [viajesTop3, setViajesTop3] = useState([null, null, null]);

  // Modal & Flow states
  const [activeDoorModal, setActiveDoorModal] = useState(null); // 'viajes' | 'familia' | null
  const [isMergingKeys, setIsMergingKeys] = useState(false);
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [showCelebrationModal, setShowCelebrationModal] = useState(false);

  // Audio & Toast
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [lockedToast, setLockedToast] = useState(null);
  const toastTimeoutRef = useRef(null);

  const keyPiecesCount = (hasLeftKey ? 1 : 0) + (hasRightKey ? 1 : 0);

  // Helper for displaying gentle warnings
  const showLockedToast = (message) => {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    soundManager.playLocked();
    setLockedToast(message);
    toastTimeoutRef.current = setTimeout(() => {
      setLockedToast(null);
    }, 4000);
  };

  // Toggle Sound
  const handleToggleSound = () => {
    const isMuted = soundManager.toggleMute();
    setSoundEnabled(!isMuted);
  };

  // Handle Candle Lighting
  const handleLightCandle = (candleId) => {
    soundManager.playCandleLight();

    if (candleId === 1) {
      setCandle1Lit(true);
      setActiveCandle(2);
    } else if (candleId === 2) {
      setCandle2Lit(true);
      setActiveCandle(3);
    } else if (candleId === 3) {
      setCandle3Lit(true);
      setActiveCandle(null);
    }
  };

  // Handle Opening a Door
  const handleOpenDoor = (doorId) => {
    soundManager.playClick();

    if (doorId === 'viajes') {
      setActiveDoorModal('viajes');
    } else if (doorId === 'familia') {
      setActiveDoorModal('familia');
    } else if (doorId === 'cumple') {
      if (isCelebrating) {
        setShowCelebrationModal(true);
      } else if (keyPiecesCount === 2) {
        // Start cinematic key merge
        soundManager.playKeyMerge();
        setIsMergingKeys(true);
      }
    }
  };

  // Handle Collecting a Key Fragment
  const handleCollectKey = (doorId) => {
    soundManager.playKeyFound();

    if (doorId === 'viajes') {
      setHasLeftKey(true);
    } else if (doorId === 'familia') {
      setHasRightKey(true);
    }
    setActiveDoorModal(null);
  };

  // Award the first fragment when the Viajes Top 3 is confirmed
  const handleAwardViajesKey = () => {
    if (!hasLeftKey) {
      soundManager.playKeyFound();
      setHasLeftKey(true);
    }
  };

  // Close the Viajes room and return to the candle room
  const handleCloseViajes = () => {
    soundManager.playClick();
    setActiveDoorModal(null);
  };

  // Award the second fragment when the Familia safe is unlocked
  const handleAwardFamiliaKey = () => {
    if (!hasRightKey) {
      soundManager.playKeyFound();
      setHasRightKey(true);
    }
  };

  // Close the Familia room and return to the candle room
  const handleCloseFamilia = () => {
    soundManager.playClick();
    setActiveDoorModal(null);
  };

  // Complete Key Merge & Transition to Celebration
  const handleCompleteMerge = () => {
    setIsMergingKeys(false);
    setIsCelebrating(true);
    setShowCelebrationModal(true);
    soundManager.playCelebration();
  };

  // Reset the Adventure
  const handleReset = () => {
    soundManager.playClick();
    setCandle1Lit(false);
    setCandle2Lit(false);
    setCandle3Lit(false);
    setActiveCandle(1);
    setHasLeftKey(false);
    setHasRightKey(false);
    setViajesTop3([null, null, null]);
    setActiveDoorModal(null);
    setIsMergingKeys(false);
    setIsCelebrating(false);
    setShowCelebrationModal(false);
    setLockedToast(null);
  };

  return (
    <div className="w-screen h-[100dvh] bg-stone-950 text-stone-100 flex flex-col overflow-hidden select-none">
      {/* Top Minimal HUD */}
      <Navbar
        keyPiecesCount={keyPiecesCount}
        hasLeftKey={hasLeftKey}
        hasRightKey={hasRightKey}
        soundEnabled={soundEnabled}
        celebrating={isCelebrating}
        onOpenCelebration={() => setShowCelebrationModal(true)}
        onToggleSound={handleToggleSound}
        onReset={handleReset}
      />

      {/* Main Interactive Scenario */}
      <main className="flex-1 w-full h-full relative overflow-hidden flex items-center justify-center">
        <Scenario
          candle1Lit={candle1Lit}
          candle2Lit={candle2Lit}
          candle3Lit={candle3Lit}
          activeCandle={activeCandle}
          hasLeftKey={hasLeftKey}
          hasRightKey={hasRightKey}
          keyPiecesCount={keyPiecesCount}
          celebrating={isCelebrating}
          onLightCandle={handleLightCandle}
          onOpenDoor={handleOpenDoor}
          onLockedClick={showLockedToast}
        />
      </main>

      {/* Door 1: Viajes Album Experience */}
      {activeDoorModal === 'viajes' && (
        <ViajesView
          top3={viajesTop3}
          onTop3Change={setViajesTop3}
          hasKey={hasLeftKey}
          onAwardKey={handleAwardViajesKey}
          onBack={handleCloseViajes}
        />
      )}

      {/* Door 2: Familia Wardrobe Minigame */}
      {activeDoorModal === 'familia' && (
        <FamiliaView
          hasKey={hasRightKey}
          onAwardKey={handleAwardFamiliaKey}
          onBack={handleCloseFamilia}
        />
      )}

      {/* Fallback Key Fragment Modal */}
      {activeDoorModal && activeDoorModal !== 'viajes' && activeDoorModal !== 'familia' && (
        <KeyFragmentModal
          door={HOTSPOTS.doors[activeDoorModal]}
          isOpen={!!activeDoorModal}
          isAlreadyCollected={hasRightKey}
          onCollectAndClose={() => handleCollectKey(activeDoorModal)}
        />
      )}

      {/* Key Merging Cinematic Modal */}
      <KeyMergeModal
        isOpen={isMergingKeys}
        onComplete={handleCompleteMerge}
      />

      {/* Celebration Festive Modal */}
      <CelebrationModal
        isOpen={showCelebrationModal}
        onClose={() => setShowCelebrationModal(false)}
        onReset={handleReset}
      />

      {/* Locked / Warning Toast Alert */}
      <LockedToast
        message={lockedToast}
        onClose={() => setLockedToast(null)}
      />
    </div>
  );
}
