import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ArrowRight,
  Star,
} from 'lucide-react';
import { PREGUNTAS_FAMILIA } from '../../data/familiaData';
import { soundManager } from '../../utils/audio';

export default function TriviaModal({
  doll,
  isOpen,
  onClose,
  onComplete,
  isAlreadyCompleted = false,
}) {
  const preguntas = PREGUNTAS_FAMILIA[doll.id] || [];

  // Estado del juego
  const [preguntaIndex, setPreguntaIndex] = useState(0);
  const [aciertos, setAciertos] = useState(isAlreadyCompleted ? 3 : 0);
  const [opcionSeleccionada, setOpcionSeleccionada] = useState(null);
  const [feedback, setFeedback] = useState(null); // 'correct' | 'wrong' | null
  const [victoria, setVictoria] = useState(isAlreadyCompleted);
  const [preguntasVistas, setPreguntasVistas] = useState(new Set());

  if (!isOpen || !doll) return null;

  const currentPregunta = preguntas[preguntaIndex % preguntas.length];

  const handleSelectOption = (idx) => {
    if (feedback !== null) return; // Bloqueado mientras muestra animación
    soundManager.playClick();
    setOpcionSeleccionada(idx);
  };

  const handleConfirmar = () => {
    if (opcionSeleccionada === null || feedback !== null) return;

    const esCorrecta = opcionSeleccionada === currentPregunta.correcta;

    if (esCorrecta) {
      soundManager.playCandleLight();
      setFeedback('correct');
      const nuevosAciertos = aciertos + 1;
      setAciertos(nuevosAciertos);

      setTimeout(() => {
        if (nuevosAciertos >= 3) {
          soundManager.playKeyFound();
          setVictoria(true);
          onComplete(doll.id);
        } else {
          avanzarPregunta();
        }
      }, 1200);
    } else {
      soundManager.playLocked();
      setFeedback('wrong');

      setTimeout(() => {
        avanzarPregunta();
      }, 1400);
    }
  };

  const avanzarPregunta = () => {
    setFeedback(null);
    setOpcionSeleccionada(null);
    setPreguntasVistas((prev) => new Set(prev).add(preguntaIndex));
    setPreguntaIndex((prev) => (prev + 1) % preguntas.length);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md select-none overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 15 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-2xl bg-stone-900 border-2 border-amber-500/35 rounded-3xl p-4 sm:p-7 shadow-[0_0_60px_rgba(245,158,11,0.2)] text-amber-50 overflow-hidden my-auto"
        >
          {/* Brillos ambientales */}
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Botón cerrar */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3.5 right-3.5 text-stone-400 hover:text-stone-100 p-2 rounded-full bg-stone-800/60 hover:bg-stone-800 transition-colors cursor-pointer z-10"
            aria-label="Cerrar trivia"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Encabezado */}
          <header className="flex items-center justify-between gap-3 border-b border-amber-500/20 pb-3 sm:pb-4 mb-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3" />
                Puerta Familia · Armario
              </span>
              <h2 className="text-xl sm:text-2xl font-bold font-serif text-amber-100 mt-1">
                Preguntas de {doll.name}
              </h2>
              <p className="text-xs text-amber-200/70">{doll.role}</p>
            </div>

            {/* Contador de Aciertos */}
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300/80 mb-1">
                Aciertos
              </span>
              <div className="flex items-center gap-1 bg-stone-950/70 border border-amber-500/30 px-3 py-1.5 rounded-full shadow-inner">
                {[0, 1, 2].map((i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < aciertos
                        ? 'text-amber-400 fill-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.8)]'
                        : 'text-stone-600'
                    }`}
                  />
                ))}
                <span className="ml-1 text-xs font-black text-amber-200">
                  {aciertos}/3
                </span>
              </div>
            </div>
          </header>

          {/* Contenido: Si ya ganó o si está respondiendo */}
          {!victoria ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
              {/* Muñeco preguntando */}
              <div className="md:col-span-4 flex flex-col items-center text-center">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1], rotate: [-1, 1, -1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <img
                      src={doll.images.question}
                      alt={`${doll.name} preguntando`}
                      className="max-h-full max-w-full object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
                    />
                  </motion.div>
                </div>
                <p className="text-[11px] sm:text-xs font-medium text-amber-200/80 mt-1 italic">
                  «Acierta 3 de mis preguntas para que te dé mi número secreto»
                </p>
              </div>

              {/* Panel de Preguntas y Opciones */}
              <div className="md:col-span-8 flex flex-col">
                <div className="bg-stone-950/80 border border-amber-500/25 rounded-2xl p-4 sm:p-5 shadow-inner">
                  {/* Pregunta actual */}
                  <div className="mb-4">
                    <span className="text-[10px] font-bold text-amber-400/80 uppercase tracking-widest">
                      Pregunta {(preguntaIndex % preguntas.length) + 1} de {preguntas.length}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-amber-50 mt-1 leading-snug">
                      {currentPregunta.pregunta}
                    </h3>
                  </div>

                  {/* Opciones */}
                  <div className="space-y-2.5">
                    {currentPregunta.opciones.map((opcion, idx) => {
                      const isSelected = opcionSeleccionada === idx;
                      let optionStyle =
                        'border-amber-500/20 bg-stone-900/70 hover:border-amber-400 hover:bg-stone-800/80 text-stone-200';

                      if (feedback === 'correct' && isSelected) {
                        optionStyle =
                          'border-emerald-400 bg-emerald-700/90 text-white font-bold shadow-[0_0_15px_rgba(52,211,153,0.5)]';
                      } else if (feedback === 'wrong' && isSelected) {
                        optionStyle =
                          'border-rose-400 bg-rose-700/90 text-white font-bold shadow-[0_0_15px_rgba(244,63,94,0.5)] animate-shake';
                      } else if (isSelected) {
                        optionStyle =
                          'border-amber-400 bg-amber-500/20 text-amber-100 shadow-[0_0_12px_rgba(251,191,36,0.3)] ring-1 ring-amber-400';
                      }

                      return (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSelectOption(idx)}
                          disabled={feedback !== null}
                          className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between gap-3 cursor-pointer ${optionStyle}`}
                        >
                          <span>{opcion}</span>
                          {feedback === 'correct' && isSelected && (
                            <CheckCircle2 className="w-4 h-4 text-emerald-200 shrink-0" />
                          )}
                          {feedback === 'wrong' && isSelected && (
                            <AlertCircle className="w-4 h-4 text-rose-200 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Mensaje de feedback */}
                  {feedback === 'correct' && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 text-xs font-bold text-emerald-300 text-center flex items-center justify-center gap-1.5"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      {currentPregunta.comentarioExito || '¡Correcto! Sumas +1 acierto.'}
                    </motion.p>
                  )}

                  {feedback === 'wrong' && (
                    <motion.p
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 text-xs font-bold text-rose-300 text-center flex items-center justify-center gap-1.5"
                    >
                      <AlertCircle className="w-4 h-4" />
                      ¡Ups, esa no era! Pasemos a la siguiente pregunta...
                    </motion.p>
                  )}
                </div>

                {/* Botones inferiores */}
                <div className="flex items-center justify-between gap-3 mt-4">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 rounded-xl border border-stone-700 bg-stone-800/80 hover:bg-stone-800 text-xs font-semibold text-stone-300 transition-colors cursor-pointer"
                  >
                    Regresar al armario
                  </button>

                  <button
                    type="button"
                    onClick={handleConfirmar}
                    disabled={opcionSeleccionada === null || feedback !== null}
                    className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
                      opcionSeleccionada !== null && feedback === null
                        ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-stone-950 shadow-[0_0_20px_rgba(251,191,36,0.4)] hover:brightness-110 active:scale-95'
                        : 'bg-stone-800 text-stone-500 border border-stone-700 cursor-not-allowed'
                    }`}
                  >
                    <span>Confirmar respuesta</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Pantalla de Victoria del Muñeco */
            <div className="flex flex-col items-center text-center py-3 sm:py-5">
              <motion.div
                initial={{ scale: 0, rotate: -15 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', damping: 15 }}
                className="relative w-36 h-36 sm:w-48 sm:h-48 mb-4 flex items-center justify-center"
              >
                <div className="absolute inset-0 rounded-full bg-amber-400/20 blur-xl animate-pulse" />
                <img
                  src={doll.images.answer}
                  alt={`${doll.name} con número`}
                  className="max-h-full max-w-full object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)]"
                />
              </motion.div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-2">
                <CheckCircle2 className="w-4 h-4" />
                ¡3 de 3 aciertos logrados!
              </span>

              <h3 className="text-xl sm:text-2xl font-bold font-serif text-amber-100">
                ¡{doll.name} te ha revelado su número!
              </h3>

              <div className="my-4 p-4 rounded-2xl bg-gradient-to-r from-amber-500/20 via-yellow-500/30 to-amber-500/20 border border-amber-300/40 max-w-sm w-full">
                <span className="text-[11px] uppercase tracking-widest text-amber-200/80 font-bold block mb-1">
                  Número Secreto de {doll.name}
                </span>
                <span className="text-5xl sm:text-6xl font-black text-amber-300 drop-shadow-[0_0_20px_rgba(251,191,36,0.8)] font-mono">
                  {doll.number}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-amber-100/75 max-w-md mb-6 leading-relaxed">
                Ahora el muñeco de {doll.name} sostendrá este número en el armario.
                Reúne los números de los 3 integrantes para abrir la caja fuerte.
              </p>

              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-stone-950 font-black text-sm shadow-[0_0_25px_rgba(251,191,36,0.5)] hover:brightness-110 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Volver al armario</span>
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
