import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, Unlock, Key, CheckCircle2, AlertCircle, HelpCircle } from 'lucide-react';
import { CAJA_FUERTE_CONFIG, DOLL_CONFIG } from '../../data/familiaData';
import { soundManager } from '../../utils/audio';

export default function CajaFuerteModal({
  isOpen,
  onClose,
  onUnlockSuccess,
  dollsStatus = { leo: false, papa: false, naty: false },
}) {
  const [digits, setDigits] = useState(['', '', '']);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [shake, setShake] = useState(false);
  const inputsRef = useRef([]);

  useEffect(() => {
    if (isOpen) {
      setDigits(['', '', '']);
      setErrorMsg(null);
      setIsSuccess(false);
      setShake(false);
      setTimeout(() => {
        if (inputsRef.current[0]) inputsRef.current[0].focus();
      }, 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (index, value) => {
    // Solo permitir dígitos numéricos
    const cleanValue = value.replace(/\D/g, '');
    if (!cleanValue) {
      const nextDigits = [...digits];
      nextDigits[index] = '';
      setDigits(nextDigits);
      return;
    }

    // Si pega más de 1 dígito
    if (cleanValue.length > 1) {
      const pasted = cleanValue.slice(0, 3).split('');
      const nextDigits = [...digits];
      pasted.forEach((d, i) => {
        if (i < 3) nextDigits[i] = d;
      });
      setDigits(nextDigits);
      const nextFocus = Math.min(pasted.length, 2);
      inputsRef.current[nextFocus]?.focus();
      return;
    }

    // 1 solo dígito
    const nextDigits = [...digits];
    nextDigits[index] = cleanValue;
    setDigits(nextDigits);
    setErrorMsg(null);

    // Auto-avance al siguiente casillero
    if (index < 2) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === 'Enter') {
      handleConfirmCode();
    }
  };

  const handleConfirmCode = () => {
    const enteredCode = digits.join('');

    if (enteredCode.length < 3) {
      setErrorMsg('Por favor ingresa los 3 dígitos de la combinación.');
      setShake(true);
      setTimeout(() => setShake(false), 500);
      soundManager.playLocked();
      return;
    }

    if (enteredCode === CAJA_FUERTE_CONFIG.targetCode) {
      soundManager.playKeyFound();
      setIsSuccess(true);
      setErrorMsg(null);
      setTimeout(() => {
        onUnlockSuccess();
      }, 1300);
    } else {
      soundManager.playLocked();
      setErrorMsg('Código incorrecto. ¡Revisa los números que te dieron los muñecos!');
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md select-none overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-stone-900 border-2 border-amber-500/40 rounded-3xl p-3 sm:p-6 shadow-[0_0_60px_rgba(245,158,11,0.25)] text-amber-50 overflow-hidden my-auto"
        >
          {/* Botón cerrar */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3.5 right-3.5 text-stone-400 hover:text-stone-100 p-2 rounded-full bg-stone-800/70 hover:bg-stone-800 transition-colors cursor-pointer z-20"
            aria-label="Cerrar caja fuerte"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Encabezado */}
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3 py-0.5 rounded-full mb-1">
              <Lock className="w-3.5 h-3.5" />
              Caja Fuerte de la Familia
            </span>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-100">
              Ingresa el Código de Seguridad
            </h2>
            <p className="text-xs text-amber-200/75 mt-0.5">
              Descifra las 3 cifras secretas respondiendo a las preguntas de cada integrante.
            </p>
          </div>

          {/* PANEL DE LA CAJA FUERTE CON LOS 3 RECUADROS */}
          <motion.div
            animate={shake ? { x: [-8, 8, -6, 6, -3, 3, 0] } : {}}
            transition={{ duration: 0.45 }}
            className="relative w-full aspect-[2752/1536] rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl bg-stone-950 sm:shadow-2xl shadow-[0_0_40px_rgba(245,158,11,0.3),0_8px_32px_rgba(0,0,0,0.9)]"
          >
            {/* Imagen de fondo original con los 3 recuadros */}
            <img
              src={CAJA_FUERTE_CONFIG.backgroundImage}
              alt="Panel de la caja fuerte"
              className="absolute inset-0 w-full h-full object-cover sm:object-cover object-contain sm:[filter:none] [filter:brightness(1.12)_contrast(1.1)_saturate(1.15)]"
              draggable={false}
            />

            {/* Inputs superpuestos exactamente en cada uno de los 3 recuadros blancos */}
            {CAJA_FUERTE_CONFIG.boxes.map((box, index) => {
              return (
                <div
                  key={box.id}
                  style={{
                    left: box.left,
                    top: box.top,
                    width: box.width,
                    height: box.height,
                  }}
                  className="absolute flex items-center justify-center p-1"
                >
                  <input
                    ref={(el) => (inputsRef.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={1}
                    value={digits[index]}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    disabled={isSuccess}
                    className={`w-full h-full text-center font-mono font-black text-4xl sm:text-5xl md:text-6xl text-stone-900 bg-white/90 rounded-lg sm:rounded-xl border-2 transition-all focus:outline-none focus:ring-4 focus:ring-amber-400 focus:bg-white ${
                      isSuccess
                        ? 'border-emerald-500 bg-emerald-100 text-emerald-900 ring-4 ring-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.8)]'
                        : errorMsg
                          ? 'border-rose-500 bg-rose-50 text-rose-900'
                          : 'border-amber-400/60 shadow-inner'
                    }`}
                    aria-label={`Dígito ${index + 1} de la caja fuerte`}
                  />
                </div>
              );
            })}
          </motion.div>

          {/* Mensajes de Estado */}
          <div className="mt-3 min-h-[1.5rem] text-center">
            {isSuccess && (
              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xs sm:text-sm font-black text-emerald-300 flex items-center justify-center gap-1.5"
              >
                <Unlock className="w-4 h-4 text-emerald-400" />
                ¡CÓDIGO CORRECTO! La caja fuerte se ha desbloqueado...
              </motion.p>
            )}

            {errorMsg && (
              <motion.p
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-xs font-bold text-rose-300 flex items-center justify-center gap-1.5"
              >
                <AlertCircle className="w-4 h-4 text-rose-400" />
                {errorMsg}
              </motion.p>
            )}
          </div>

          {/* Pista de Números Descubiertos */}
          <div className="bg-stone-950/70 border border-amber-500/20 rounded-2xl p-3 sm:p-4 my-3">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-bold text-amber-200 flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                Pista del Armario (Orden Izquierda → Derecha):
              </span>
              <span className="text-[10px] uppercase font-bold text-amber-300/70">
                Leo · Papá · Naty
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div
                className={`p-2 rounded-xl border ${
                  dollsStatus.leo
                    ? 'border-emerald-400/50 bg-emerald-950/40 text-emerald-200'
                    : 'border-stone-800 bg-stone-900/60 text-stone-400'
                }`}
              >
                <p className="text-[10px] uppercase tracking-wider font-bold">1.º Leo</p>
                <p className="text-base sm:text-lg font-black font-mono mt-0.5">
                  {dollsStatus.leo ? '0' : '?'}
                </p>
              </div>

              <div
                className={`p-2 rounded-xl border ${
                  dollsStatus.papa
                    ? 'border-emerald-400/50 bg-emerald-950/40 text-emerald-200'
                    : 'border-stone-800 bg-stone-900/60 text-stone-400'
                }`}
              >
                <p className="text-[10px] uppercase tracking-wider font-bold">2.º Papá</p>
                <p className="text-base sm:text-lg font-black font-mono mt-0.5">
                  {dollsStatus.papa ? '4' : '?'}
                </p>
              </div>

              <div
                className={`p-2 rounded-xl border ${
                  dollsStatus.naty
                    ? 'border-emerald-400/50 bg-emerald-950/40 text-emerald-200'
                    : 'border-stone-800 bg-stone-900/60 text-stone-400'
                }`}
              >
                <p className="text-[10px] uppercase tracking-wider font-bold">3.º Naty</p>
                <p className="text-base sm:text-lg font-black font-mono mt-0.5">
                  {dollsStatus.naty ? '5' : '?'}
                </p>
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex items-center justify-between gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-stone-700 bg-stone-800/80 hover:bg-stone-800 text-xs sm:text-sm font-semibold text-stone-300 transition-colors cursor-pointer"
            >
              Regresar al armario
            </button>

            <button
              type="button"
              onClick={handleConfirmCode}
              disabled={isSuccess}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-stone-950 font-black text-xs sm:text-sm shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center gap-2"
            >
              <Key className="w-4 h-4" />
              <span>Confirmar código</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
