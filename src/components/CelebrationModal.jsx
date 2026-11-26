import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  Heart,
  RotateCcw,
  Eye,
  X,
  Cake,
  UtensilsCrossed,
  Sparkle,
  PartyPopper,
  Camera,
} from 'lucide-react';

const granPuertaAsset = (fileName) => `${import.meta.env.BASE_URL}images/GranPuerta/${fileName}`;

const FOTOS_GRAN_PUERTA = [
  {
    id: 1,
    url: granPuertaAsset('imagen1.jpg'),
    titulo: 'Recuerdos inolvidables ✨',
    rotacion: -6,
    desktopPos: 'left-3 top-10 xl:left-8 xl:top-14',
    duracion: 3.2,
  },
  {
    id: 2,
    url: granPuertaAsset('imagen2.jpg'),
    titulo: 'Momentos en familia ❤️',
    rotacion: 7,
    desktopPos: 'right-3 top-12 xl:right-8 xl:top-16',
    duracion: 3.8,
  },
  {
    id: 3,
    url: granPuertaAsset('imagen3.jpg'),
    titulo: 'Risas que alegran la casa 😊',
    rotacion: -5,
    desktopPos: 'left-4 bottom-16 xl:left-10 xl:bottom-20',
    duracion: 3.5,
  },
  {
    id: 4,
    url: granPuertaAsset('imagen4.jpg'),
    titulo: 'Mamá hermosa y consentida 👑',
    rotacion: 6,
    desktopPos: 'right-4 bottom-18 xl:right-10 xl:bottom-22',
    duracion: 4.1,
  },
  {
    id: 5,
    url: granPuertaAsset('imagen5.jpg'),
    titulo: '45 años llenos de amor 🎂',
    rotacion: -3,
    desktopPos: 'left-1/2 -translate-x-1/2 bottom-10 xl:bottom-14',
    duracion: 3.6,
  },
];

export default function CelebrationModal({
  isOpen = false,
  onClose,
  onReset,
}) {
  const [fotoAmpliada, setFotoAmpliada] = useState(null);

  const triggerConfetti = () => {
    // Explosión central
    confetti({
      particleCount: 110,
      spread: 110,
      origin: { y: 0.55 },
      colors: ['#f59e0b', '#ec4899', '#8b5cf6', '#10b981', '#3b82f6', '#fbbf24', '#f43f5e'],
    });

    // Cañón izquierdo
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 65,
        origin: { x: 0.05, y: 0.7 },
      });
    }, 200);

    // Cañón derecho
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 65,
        origin: { x: 0.95, y: 0.7 },
      });
    }, 400);

    // Lluvia de estrellas doradas
    setTimeout(() => {
      confetti({
        particleCount: 40,
        spread: 120,
        origin: { y: 0.3 },
        shapes: ['circle'],
        colors: ['#fbbf24', '#fef08a', '#f59e0b'],
      });
    }, 600);
  };

  useEffect(() => {
    if (isOpen) {
      triggerConfetti();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md select-none overflow-y-auto">
        {/* ============================================================== */}
        {/* FOTOS FLOTANTES EN PANTALLAS MEDIANAS Y GRANDES (DESKTOP)     */}
        {/* ============================================================== */}
        <div className="hidden lg:block pointer-events-none fixed inset-0 z-10 overflow-hidden">
          {FOTOS_GRAN_PUERTA.map((foto) => (
            <motion.div
              key={foto.id}
              className={`absolute pointer-events-auto ${foto.desktopPos}`}
              animate={{
                y: [0, -10, 0],
                rotate: [foto.rotacion, foto.rotacion + 2, foto.rotacion],
              }}
              transition={{
                duration: foto.duracion,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.15, rotate: 0, zIndex: 40 }}
            >
              <button
                type="button"
                onClick={() => setFotoAmpliada(foto)}
                className="group relative block bg-stone-900/90 border-2 border-amber-400/50 rounded-2xl p-2 pb-3 shadow-[0_15px_35px_rgba(0,0,0,0.7)] backdrop-blur-sm cursor-pointer transition-all hover:border-amber-300 hover:shadow-[0_0_25px_rgba(251,191,36,0.5)] max-w-[150px] xl:max-w-[175px]"
                title="Toca para ampliar foto"
              >
                <div className="overflow-hidden rounded-xl aspect-[4/3] bg-stone-950 flex items-center justify-center">
                  <img
                    src={foto.url}
                    alt={foto.titulo}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    draggable={false}
                  />
                </div>
                <p className="mt-1.5 text-[10px] font-bold text-amber-200/90 text-center truncate">
                  {foto.titulo}
                </p>
                <span className="absolute -top-1.5 -right-1.5 bg-amber-400 text-stone-950 p-1 rounded-full text-[9px] shadow-md group-hover:scale-110 transition-transform">
                  ✨
                </span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* ============================================================== */}
        {/* MODAL CENTRAL CELEBRATORIO                                     */}
        {/* ============================================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.88, y: 25 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative z-20 w-full max-w-xl sm:max-w-2xl bg-gradient-to-b from-stone-900 via-stone-900/95 to-stone-950 border-2 border-amber-400/60 rounded-3xl p-4 sm:p-7 shadow-[0_0_80px_rgba(251,191,36,0.35)] text-stone-100 my-auto max-h-[92vh] overflow-y-auto"
        >
          {/* Botón superior de confeti */}
          <div className="flex justify-center -mt-9 sm:-mt-11 mb-2">
            <button
              type="button"
              onClick={triggerConfetti}
              title="¡Lanzar más confeti!"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-amber-300 p-1 shadow-2xl flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-transform"
            >
              <div className="w-full h-full rounded-full bg-stone-950 flex items-center justify-center text-2xl sm:text-3xl">
                🎉
              </div>
            </button>
          </div>

          {/* Encabezado Principal */}
          <header className="text-center mb-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[11px] sm:text-xs font-bold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '3s' }} />
              <span>¡La Gran Puerta ha sido abierta!</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-300 to-pink-400 [text-shadow:none] drop-shadow-[0_0_20px_rgba(251,191,36,0.9)] animate-pulse" style={{ animationDuration: '2.5s' }}>
              ¡Feliz Cumpleaños #45, Fany!
            </h2>
            <p className="text-xs sm:text-sm text-amber-300/90 font-medium mt-1">
              De tus dos hijos y toda tu familia que te ama con el alma 💖
            </p>
          </header>

          {/* ============================================================ */}
          {/* FOTOS FLOTANTES / CARRUSEL EN MÓVILES (Para que se vean en celular) */}
          {/* ============================================================ */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-xs text-amber-300/80 mb-2 px-1">
              <span className="font-bold flex items-center gap-1.5 text-[11px] uppercase tracking-wider">
                <Camera className="w-3.5 h-3.5 text-amber-400" />
                Nuestros momentos favoritos juntos:
              </span>
              <span className="text-[10px] text-amber-400/70">Toca para ampliar</span>
            </div>

            <div className="flex gap-2.5 overflow-x-auto pb-2 pt-1 no-scrollbar overscroll-contain snap-x">
              {FOTOS_GRAN_PUERTA.map((foto, index) => (
                <motion.button
                  key={foto.id}
                  type="button"
                  onClick={() => setFotoAmpliada(foto)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="shrink-0 snap-start bg-stone-950/90 border border-amber-400/40 rounded-xl p-1.5 pb-2 shadow-lg cursor-pointer text-left transition-all hover:border-amber-300 w-24 sm:w-28"
                >
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-stone-900">
                    <img
                      src={foto.url}
                      alt={foto.titulo}
                      className="w-full h-full object-cover"
                      draggable={false}
                    />
                  </div>
                  <p className="text-[9px] font-bold text-amber-200/80 mt-1 truncate">
                    Foto {index + 1}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>

          {/* ============================================================ */}
          {/* CARTA GENERAL DE AGRADECIMIENTO Y AMOR FAMILIAR              */}
          {/* ============================================================ */}
          <div className="bg-stone-950/85 border border-amber-500/30 rounded-2xl p-4 sm:p-6 text-xs sm:text-sm text-stone-200 leading-relaxed shadow-inner space-y-3.5">
            {/* Saludo inicial */}
            <p className="text-amber-200 font-serif font-bold text-sm sm:text-base flex items-center gap-2">
              <CrownIcon className="w-4 h-4 text-amber-400 shrink-0" />
              <span>¡Para la mujer más especial y el pilar de nuestra vida!</span>
            </p>

            <p className="text-stone-300">
              Hoy que cumples tus <strong>45 años</strong>, queremos unir nuestras voces en un solo mensaje
              gigante para decirte lo inmensamente agradecidos y orgullosos que estamos de ti. Eres, sin ninguna
              duda ni comparación alguna, <strong>¡la mejor madre que el mundo nos pudo haber dado!</strong> 👑❤️
            </p>

            {/* Agradecimiento: Comida y Sazón */}
            <div className="flex items-start gap-2.5 bg-stone-900/60 p-2.5 rounded-xl border border-amber-500/20">
              <span className="text-base sm:text-lg">🍲</span>
              <p className="text-[11px] sm:text-xs text-stone-300">
                <strong className="text-amber-200">Tu rica comida:</strong> Gracias infinitas por cada plato
                delicioso que nos preparas todos los días con tanto amor y dedicación. Esa sazón tuya es única,
                reconforta el corazón y no la iguala absolutamente ningún restaurante del mundo. 😋🍳
              </p>
            </div>

            {/* Agradecimiento: Limpieza y Hogar */}
            <div className="flex items-start gap-2.5 bg-stone-900/60 p-2.5 rounded-xl border border-amber-500/20">
              <span className="text-base sm:text-lg">✨</span>
              <p className="text-[11px] sm:text-xs text-stone-300">
                <strong className="text-amber-200">Tu esfuerzo y limpieza:</strong> Por tu energía incansable
                para que nuestra casa siempre esté impecable, fresca, limpia y acogedora. Haces que cualquier
                lugar donde estemos se sienta como un verdadero hogar cálido y seguro. 🏡🧹
              </p>
            </div>

            {/* Agradecimiento: Paciencia y Buenas Vibras */}
            <div className="flex items-start gap-2.5 bg-stone-900/60 p-2.5 rounded-xl border border-amber-500/20">
              <span className="text-base sm:text-lg">💖</span>
              <p className="text-[11px] sm:text-xs text-stone-300">
                <strong className="text-amber-200">Por soportarnos con tanto amor:</strong> Gracias por tener
                esa paciencia infinita con nosotros, por aguantar nuestras ocurrencias, manías y días difíciles,
                y por darnos siempre las mejores vibras y levantarnos el ánimo con tu alegría contagiosa. 😊🌈
              </p>
            </div>

            {/* Agradecimiento: La memoria de la casa */}
            <div className="flex items-start gap-2.5 bg-stone-900/60 p-2.5 rounded-xl border border-amber-500/20">
              <span className="text-base sm:text-lg">🧠</span>
              <p className="text-[11px] sm:text-xs text-stone-300">
                <strong className="text-amber-200">Nuestra memoria oficial:</strong> Por estar pendiente
                de absolutamente todo, por recordarnos las fechas, las cosas que se nos olvidan y cuidar cada
                detalle para que a ninguno de nosotros nos falte nada. ¡Sin ti seríamos un caos completo! 📝⏰
              </p>
            </div>

            {/* Cierre emotivo */}
            <p className="text-center font-serif italic text-amber-200/90 text-xs sm:text-sm pt-1">
              «Que la vida te devuelva multiplicado todo el amor inmenso que nos entregas a diario.
              ¡Te amamos infinitamente, mamita linda!»
            </p>

            <div className="border-t border-amber-500/20 pt-2 text-right">
              <p className="text-[11px] sm:text-xs font-bold text-amber-300">
                — Con todo el amor de tus dos hijos y de toda tu familia que te adora al máximo ❤️🎉
              </p>
            </div>
          </div>

          {/* Botones de Acción */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 px-4 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-black text-xs sm:text-sm rounded-xl shadow-[0_4px_20px_rgba(245,158,11,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <Eye className="w-4 h-4" />
              <span>Ver habitación iluminada</span>
            </button>

            <button
              type="button"
              onClick={onReset}
              className="w-full py-2.5 px-4 bg-stone-800/90 hover:bg-stone-700 text-stone-300 hover:text-stone-100 font-bold text-xs sm:text-sm rounded-xl border border-stone-700 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <RotateCcw className="w-3.5 h-3.5 text-stone-400" />
              <span>Reiniciar aventura</span>
            </button>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* MODAL LIGHTBOX / ZOOM DE FOTO SELECCIONADA                     */}
        {/* ============================================================== */}
        <AnimatePresence>
          {fotoAmpliada && (
            <div
              className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg cursor-pointer"
              onClick={() => setFotoAmpliada(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.25 }}
                className="relative max-w-lg w-full bg-stone-900 border border-amber-400/50 rounded-2xl p-3 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setFotoAmpliada(null)}
                  className="absolute -top-3 -right-3 bg-amber-400 text-stone-950 p-1.5 rounded-full shadow-lg hover:scale-110 transition-transform cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="rounded-xl overflow-hidden bg-stone-950 max-h-[70vh] flex items-center justify-center">
                  <img
                    src={fotoAmpliada.url}
                    alt={fotoAmpliada.titulo}
                    className="max-h-[70vh] w-auto object-contain"
                  />
                </div>

                <p className="mt-3 text-center text-xs sm:text-sm font-bold text-amber-200">
                  {fotoAmpliada.titulo}
                </p>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
}

function CrownIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M2 19h20v2H2v-2zm1-8.5 4.5 3 4.5-6 4.5 6 4.5-3v6H3v-6zm3.5-3.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm6-3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm6 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
    </svg>
  );
}
