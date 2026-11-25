import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Compass,
  Key,
  MapPin,
  Sparkles,
  Trophy,
} from 'lucide-react';
import { soundManager } from '../utils/audio';
import { destinosViajes } from '../data/viajesData';
import PodioTop3 from '../components/viajes/PodioTop3';
import LibroViajeModal from '../components/viajes/LibroViajeModal';
import RecompensaFragmento from '../components/viajes/RecompensaFragmento';

const MEDALLAS = ['🥇', '🥈', '🥉'];

export default function ViajesView({
  top3,
  onTop3Change,
  hasKey = false,
  onAwardKey,
  onBack,
}) {
  const [destinoAbierto, setDestinoAbierto] = useState(null);
  const [mostrarRecompensa, setMostrarRecompensa] = useState(false);

  const backgroundUrl = `${import.meta.env.BASE_URL}images/imagen-3.png`;
  const top3Completo = top3.length === 3 && top3.every(Boolean);

  const abrirDestino = (destino) => {
    soundManager.playClick();
    setDestinoAbierto(destino);
  };

  const asignarPuesto = (destinoId, puesto) => {
    onTop3Change((prev) => {
      const siguiente = [...prev];
      siguiente.forEach((id, index) => {
        if (id === destinoId) siguiente[index] = null;
      });
      siguiente[puesto] = destinoId;
      return siguiente;
    });
  };

  const quitarDelTop3 = (destinoId) => {
    soundManager.playClick();
    onTop3Change((prev) => prev.map((id) => (id === destinoId ? null : id)));
  };

  const confirmarTop3 = () => {
    if (!top3Completo || hasKey) return;
    onAwardKey();
    setDestinoAbierto(null);
    setMostrarRecompensa(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="fixed inset-0 z-40 overflow-hidden bg-stone-950 text-amber-50"
    >
      {/* Fondo del cuarto de viajes */}
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
        role="img"
        aria-label="Habitación junto al mar que representa los viajes"
      />
      <div className="absolute inset-0 bg-stone-950/45 backdrop-blur-md" />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/35 via-amber-950/35 to-stone-950/90" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.1),transparent_58%)]" />

      {/* Contenido desplazable */}
      <div className="relative z-10 h-full overflow-y-auto overscroll-contain">
        {/* Barra superior fija: regreso siempre visible */}
        <div className="sticky top-0 z-30 border-b border-white/5 bg-gradient-to-b from-stone-950/95 via-stone-950/70 to-transparent pb-3 backdrop-blur-sm">
          <div className="mx-auto flex w-full max-w-6xl items-start justify-between gap-3 px-3 pt-3 sm:px-6 sm:pt-5">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-amber-200/30 bg-stone-950/60 px-3 py-2 text-xs font-semibold text-amber-100 shadow-lg backdrop-blur-md transition-all hover:border-amber-200/60 hover:bg-stone-900/80 active:scale-95 sm:px-4 sm:text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sm:hidden">Regresar</span>
              <span className="hidden sm:inline">Regresar al cuarto</span>
            </button>

            <div
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[10px] font-bold shadow-lg backdrop-blur-md sm:text-xs ${
                hasKey
                  ? 'border-emerald-300/40 bg-emerald-950/55 text-emerald-200'
                  : 'border-amber-300/30 bg-stone-950/60 text-amber-200'
              }`}
              title={hasKey ? 'Primer fragmento conseguido' : 'Primer fragmento pendiente'}
            >
              <Key className={`h-3.5 w-3.5 ${hasKey ? 'text-emerald-300' : 'text-amber-300'}`} />
              <span className="hidden sm:inline">Fragmento de Viajes</span>
              <span className="sm:hidden">Fragmento</span>
              <span className={hasKey ? 'text-emerald-200' : 'text-amber-300/80'}>
                {hasKey ? '1/2 · Conseguido' : '1/2 · Pendiente'}
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto flex min-h-[calc(100%-5rem)] w-full max-w-6xl flex-col px-3 pb-14 sm:px-6">
          {/* Encabezado */}
          <header className="mt-2 text-center sm:mt-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/40 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300 backdrop-blur-sm sm:text-xs"
            >
              <Compass className="h-3.5 w-3.5" />
              Puerta 1 · Viajes
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16, duration: 0.45 }}
              className="mt-3 font-serif text-3xl font-bold leading-tight text-amber-50 drop-shadow-[0_4px_24px_rgba(0,0,0,0.65)] sm:text-5xl"
            >
              Los viajes de nuestra vida
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.45 }}
              className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-amber-100/75 sm:text-base"
            >
              Mamá, abre cada recuerdo y elige tus 3 favoritos. Cuando el podio
              esté completo, recibirás el primer fragmento de la llave.
            </motion.p>
          </header>

          {/* PODIO TOP 3 */}
          <section className="mt-8 sm:mt-10" aria-labelledby="podio-titulo">
            <div className="mb-3 flex items-end justify-between gap-3">
              <div>
                <h2
                  id="podio-titulo"
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-300 sm:text-sm"
                >
                  <Trophy className="h-4 w-4" />
                  El podio de Fany
                </h2>
                <p className="mt-1 text-[11px] text-amber-100/55 sm:text-xs">
                  Toca un recuerdo para asignarle un puesto.
                </p>
              </div>
              <span className="rounded-full border border-amber-300/25 bg-stone-950/50 px-2.5 py-1 text-[10px] font-bold text-amber-200/80 sm:text-xs">
                {top3.filter(Boolean).length}/3
              </span>
            </div>

            <div className="rounded-3xl border border-amber-300/20 bg-stone-950/45 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.35)] backdrop-blur-sm sm:p-5">
              <PodioTop3
                top3={top3}
                destinos={destinosViajes}
                onRemove={quitarDelTop3}
                onOpen={abrirDestino}
              />

              <AnimatePresence initial={false}>
                {top3Completo && !hasKey && (
                  <motion.div
                    key="confirmar-top3"
                    initial={{ opacity: 0, height: 0, y: 8 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 border-t border-amber-300/15 pt-4 text-center sm:mt-5">
                      <motion.button
                        type="button"
                        onClick={confirmarTop3}
                        whileHover={{ scale: 1.012 }}
                        whileTap={{ scale: 0.985 }}
                        className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 px-4 py-3.5 text-sm font-black text-stone-950 shadow-[0_0_32px_rgba(251,191,36,0.32)] transition-all hover:from-amber-300 hover:via-yellow-200 hover:to-amber-400 sm:w-auto sm:px-8 sm:text-base"
                      >
                        <Key className="h-4 w-4" />
                        Confirmar mi Top 3
                        <Sparkles className="h-4 w-4" />
                      </motion.button>
                      <p className="mt-2 text-[10px] font-medium text-amber-100/55 sm:text-xs">
                        Al confirmar, el primer fragmento de la llave quedará guardado.
                      </p>
                    </div>
                  </motion.div>
                )}

                {hasKey && (
                  <motion.div
                    key="fragmento-conseguido"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 flex flex-col items-center justify-between gap-2 rounded-xl border border-emerald-300/25 bg-emerald-950/35 px-3 py-2.5 text-center sm:flex-row sm:text-left"
                  >
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-300" />
                      <p className="text-[11px] font-medium text-emerald-100/85 sm:text-xs">
                        Ya conseguiste el primer fragmento. Puedes seguir explorando el álbum.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={onBack}
                      className="shrink-0 cursor-pointer rounded-lg border border-emerald-300/30 bg-emerald-400/10 px-3 py-1.5 text-[10px] font-bold text-emerald-200 transition-colors hover:bg-emerald-400/20 sm:text-xs"
                    >
                      Volver al cuarto
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </section>

          {/* CUADRÍCULA DE DESTINOS */}
          <section className="mt-9 sm:mt-12" aria-labelledby="destinos-titulo">
            <div className="mb-4 flex items-end justify-between gap-3">
              <div>
                <h2
                  id="destinos-titulo"
                  className="flex items-center gap-2 font-serif text-xl font-bold text-amber-50 sm:text-2xl"
                >
                  <MapPin className="h-5 w-5 text-amber-300" />
                  Los recuerdos
                </h2>
                <p className="mt-1 text-[11px] text-amber-100/55 sm:text-xs">
                  Toca una tarjeta para abrir su libro de fotos.
                </p>
              </div>
              <span className="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-200/45 sm:block">
                {destinosViajes.length} destinos
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
              {destinosViajes.map((destino, index) => {
                const puesto = top3.indexOf(destino.id);
                const enPodio = puesto >= 0;

                return (
                  <motion.button
                    key={destino.id}
                    type="button"
                    onClick={() => abrirDestino(destino)}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + index * 0.045, duration: 0.4 }}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.985 }}
                    className={`group relative aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-2xl border text-left shadow-[0_16px_35px_rgba(0,0,0,0.35)] transition-colors ${
                      enPodio
                        ? 'border-amber-300/70 shadow-[0_0_30px_rgba(251,191,36,0.16)]'
                        : 'border-white/10 hover:border-amber-200/45'
                    }`}
                    aria-label={`Abrir el libro de ${destino.titulo}`}
                  >
                    <img
                      src={destino.portada}
                      alt={`Portada de ${destino.titulo}`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-stone-950/5" />

                    <div className="absolute inset-x-0 top-0 flex items-start justify-between p-2.5 sm:p-3">
                      <span className="rounded-full border border-white/15 bg-stone-950/55 px-2 py-0.5 text-[8px] font-bold uppercase tracking-[0.14em] text-amber-100/80 backdrop-blur-sm sm:text-[9px]">
                        Recuerdo {String(index + 1).padStart(2, '0')}
                      </span>

                      <AnimatePresence initial={false}>
                        {enPodio && (
                          <motion.span
                            initial={{ scale: 0, rotate: -18 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ scale: 0 }}
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-200/70 bg-stone-950/75 text-lg shadow-lg backdrop-blur-md sm:h-9 sm:w-9 sm:text-xl"
                            title={`Puesto ${puesto + 1} del Top 3`}
                          >
                            {MEDALLAS[puesto]}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                      <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-amber-200/70 sm:text-[9px]">
                        {destino.fecha}
                      </p>
                      <h3 className="mt-0.5 font-serif text-base font-bold leading-tight text-amber-50 sm:text-xl">
                        {destino.titulo}
                      </h3>
                      <span className="mt-1.5 inline-flex items-center gap-1 text-[9px] font-semibold text-amber-200/65 transition-colors group-hover:text-amber-200 sm:text-[10px]">
                        <BookOpen className="h-3 w-3" />
                        Abrir recuerdo
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </section>

          <footer className="mt-auto pt-10 text-center">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-amber-100/30">
              Un álbum hecho con amor para Fany #45
            </p>
          </footer>
        </div>
      </div>

      {/* Libro de fotos */}
      <AnimatePresence>
        {destinoAbierto && (
          <LibroViajeModal
            key={destinoAbierto.id}
            destino={destinoAbierto}
            top3={top3}
            onAssign={asignarPuesto}
            onRemove={quitarDelTop3}
            onClose={() => setDestinoAbierto(null)}
          />
        )}
      </AnimatePresence>

      {/* Entrega del primer fragmento */}
      <AnimatePresence>
        {mostrarRecompensa && (
          <RecompensaFragmento
            key="recompensa-viajes"
            onReturn={onBack}
            onStay={() => setMostrarRecompensa(false)}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
