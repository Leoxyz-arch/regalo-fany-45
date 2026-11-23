import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Compass,
  Key,
  Sparkles,
  X,
} from 'lucide-react';

const MEDALLAS = ['🥇', '🥈', '🥉'];

export default function LibroViajeModal({
  destino,
  top3,
  onAssign,
  onRemove,
  onClose,
}) {
  const [fotoIndex, setFotoIndex] = useState(0);

  const fotos = destino.fotos ?? [];
  const foto = fotos[fotoIndex];
  const puestoActual = top3.indexOf(destino.id);
  const ultimaFoto = fotos.length - 1;

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        setFotoIndex((index) => Math.max(0, index - 1));
      } else if (event.key === 'ArrowRight') {
        setFotoIndex((index) => Math.min(ultimaFoto, index + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, ultimaFoto]);

  if (!foto) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-50 overflow-y-auto overscroll-contain bg-stone-950/82 p-3 backdrop-blur-md sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Libro del viaje ${destino.titulo}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 34, scale: 0.94, rotateX: 9 }}
        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
        exit={{ opacity: 0, y: 22, scale: 0.96 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformPerspective: 1400 }}
        className="mx-auto my-auto w-full max-w-5xl"
      >
        {/* Barra superior del libro */}
        <div className="sticky top-0 z-30 mb-2 flex items-center justify-between gap-3 bg-gradient-to-b from-stone-950/85 via-stone-950/45 to-transparent pb-2 pt-0 sm:pt-1">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-amber-200/30 bg-stone-950/65 px-3 py-2 text-xs font-semibold text-amber-100 shadow-lg backdrop-blur-md transition-colors hover:border-amber-200/60 hover:bg-stone-900/80 sm:px-4 sm:text-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Regresar a los viajes</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar el libro"
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-stone-400/25 bg-stone-950/65 text-stone-300 shadow-lg backdrop-blur-md transition-colors hover:border-amber-200/50 hover:text-amber-100"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Libro abierto */}
        <div className="relative rounded-[1.5rem] border border-amber-900/25 bg-gradient-to-br from-[#e6cfa4] via-[#dcc295] to-[#c9a97a] p-1.5 shadow-[0_30px_90px_rgba(0,0,0,0.6)] sm:p-2">
          <div className="overflow-hidden rounded-[1.1rem] border border-[#b58e5f]/40 bg-[#f8ecd6]">
            <div className="relative grid md:grid-cols-2">
              {/* PÁGINA IZQUIERDA: FOTO */}
              <section className="relative flex flex-col bg-[#f8ecd6] p-4 sm:p-6 md:p-7">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9a7447]">
                    <Compass className="h-3.5 w-3.5" />
                    Álbum de viajes
                  </span>
                  <span className="text-[10px] font-semibold text-[#a58256]">
                    {fotoIndex + 1} / {fotos.length} recuerdos
                  </span>
                </div>

                <div className="relative overflow-hidden rounded-xl border-[3px] border-[#dcc39a] bg-stone-900 shadow-[0_12px_28px_rgba(79,48,19,0.22)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <motion.img
                      key={foto.url}
                      src={foto.url}
                      alt={`${destino.titulo}, foto ${fotoIndex + 1}`}
                      initial={{ opacity: 0, scale: 1.035 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="absolute inset-0 h-full w-full object-cover"
                      draggable={false}
                    />

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-stone-950/65 to-transparent" />

                    <button
                      type="button"
                      onClick={() => setFotoIndex((index) => Math.max(0, index - 1))}
                      disabled={fotoIndex === 0}
                      aria-label="Foto anterior"
                      title="Anterior"
                      className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-stone-950/65 text-white shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-stone-950/85 disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:scale-100"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => setFotoIndex((index) => Math.min(ultimaFoto, index + 1))}
                      disabled={fotoIndex === ultimaFoto}
                      aria-label="Foto siguiente"
                      title="Siguiente"
                      className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-stone-950/65 text-white shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-stone-950/85 disabled:cursor-not-allowed disabled:opacity-25 disabled:hover:scale-100"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>

                    <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 rounded-full bg-stone-950/65 px-2.5 py-1 text-[10px] font-semibold tracking-wide text-amber-100 backdrop-blur-sm">
                      Foto {fotoIndex + 1} de {fotos.length}
                    </span>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    {fotos.map((item, index) => (
                      <button
                        key={item.url}
                        type="button"
                        onClick={() => setFotoIndex(index)}
                        aria-label={`Ir a la foto ${index + 1}`}
                        className={`h-1.5 cursor-pointer rounded-full transition-all ${
                          index === fotoIndex
                            ? 'w-6 bg-[#a9783d]'
                            : 'w-2 bg-[#cbb793] hover:bg-[#b89d71]'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="hidden text-[10px] italic text-[#a58256] sm:block">
                    Usa las flechas para recorrer el viaje
                  </span>
                </div>

                <div className="mt-5 border-t border-[#dfcba8] pt-3 text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a58256]">
                    Recuerdo {fotoIndex + 1}
                  </p>
                  <p className="mt-1 font-serif text-lg font-bold italic text-[#5b3f27]">
                    «{destino.titulo}»
                  </p>
                </div>
              </section>

              {/* PÁGINA DERECHA: HISTORIA Y TOP 3 */}
              <section className="relative flex flex-col border-t border-[#dfcba8] bg-[#fbf2e2] p-4 sm:p-6 md:border-l md:border-t-0 md:p-7">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#c7a678]/60 bg-[#f1e1c5] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8e693d]">
                    <Sparkles className="h-3 w-3" />
                    Bitácora de viaje
                  </span>
                  <span className="font-serif text-[11px] italic text-[#ab8454]">Página 2</span>
                </div>

                <h2 className="font-serif text-2xl font-bold leading-tight text-[#4a3320] sm:text-3xl">
                  {destino.titulo}
                </h2>

                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-medium text-[#8b6b44] sm:text-xs">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {destino.fecha}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Compass className="h-3.5 w-3.5" />
                    Un lugar para recordar
                  </span>
                </div>

                <div className="my-4 flex-1 border-y border-[#e4d2b4] py-4">
                  <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#a58256]">
                    Lo que guarda esta foto
                  </p>
                  <motion.p
                    key={foto.url}
                    initial={{ opacity: 0, y: 7 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-serif text-[15px] italic leading-relaxed text-[#5d442d] sm:text-[17px]"
                  >
                    “{foto.descripcion}”
                  </motion.p>
                </div>

                <div className="rounded-xl border border-[#d7bd94] bg-[#f3e5cb]/80 p-3 sm:p-3.5">
                  <div className="mb-2 flex items-center justify-between gap-2">
                    <p className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8e693d]">
                      <Key className="h-3.5 w-3.5" />
                      Asignar al Top 3
                    </p>
                    {puestoActual >= 0 && (
                      <span className="rounded-full bg-amber-500/20 px-2 py-0.5 text-[9px] font-bold text-[#8a5c20]">
                        Puesto {puestoActual + 1}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                    {MEDALLAS.map((medalla, index) => {
                      const activo = puestoActual === index;
                      return (
                        <button
                          key={index}
                          type="button"
                          onClick={() => onAssign(destino.id, index)}
                          aria-pressed={activo}
                          aria-label={`Asignar ${destino.titulo} al puesto ${index + 1}`}
                          className={`flex cursor-pointer flex-col items-center justify-center gap-0.5 rounded-lg border px-1 py-2 text-center transition-all active:scale-95 ${
                            activo
                              ? 'border-amber-700 bg-gradient-to-b from-amber-400 to-amber-500 text-stone-950 shadow-[0_4px_12px_rgba(180,83,9,0.28)]'
                              : 'border-[#d5bc94] bg-[#fff9ed] text-[#65492e] hover:border-[#b68a50] hover:bg-[#f8edda]'
                          }`}
                        >
                          <span className="text-lg leading-none" aria-hidden="true">
                            {medalla}
                          </span>
                          <span className="text-[9px] font-bold uppercase tracking-wide sm:text-[10px]">
                            Puesto {index + 1}
                          </span>
                          {activo && <Check className="h-3 w-3" />}
                        </button>
                      );
                    })}
                  </div>

                  {puestoActual >= 0 && (
                    <button
                      type="button"
                      onClick={() => onRemove(destino.id)}
                      className="mt-2 inline-flex w-full cursor-pointer items-center justify-center gap-1 rounded-lg border border-rose-300/60 bg-rose-50/60 px-2 py-1.5 text-[10px] font-semibold text-rose-800/80 transition-colors hover:border-rose-400 hover:bg-rose-100"
                    >
                      <X className="h-3 w-3" />
                      Quitar del Top 3
                    </button>
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg border border-[#c7a678]/60 bg-[#f1e1c5] px-3 py-2 text-[11px] font-bold text-[#6b4b2b] transition-colors hover:border-[#a9783d] hover:bg-[#ecd9b8] sm:text-xs"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Regresar a los cuadrados
                  </button>
                  <span className="font-serif text-[11px] italic text-[#ab8454]">
                    {destino.titulo}
                  </span>
                </div>
              </section>

              {/* Lomo del libro en escritorio */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-10 -translate-x-1/2 bg-gradient-to-r from-black/0 via-[#6d4b25]/20 to-black/0 md:block"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
