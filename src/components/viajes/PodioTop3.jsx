import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const POSICIONES = [
  {
    index: 1,
    medalla: '🥈',
    etiqueta: '2.º lugar',
    altura: 'min-h-[8rem] sm:min-h-[10rem]',
    borde: 'border-stone-300/25',
    brillo: 'shadow-[0_12px_35px_rgba(0,0,0,0.35)]',
  },
  {
    index: 0,
    medalla: '🥇',
    etiqueta: '1.er lugar',
    altura: 'min-h-[9.75rem] sm:min-h-[12rem]',
    borde: 'border-amber-300/60',
    brillo: 'shadow-[0_0_35px_rgba(251,191,36,0.18)]',
  },
  {
    index: 2,
    medalla: '🥉',
    etiqueta: '3.er lugar',
    altura: 'min-h-[7.25rem] sm:min-h-[9rem]',
    borde: 'border-amber-700/40',
    brillo: 'shadow-[0_12px_35px_rgba(0,0,0,0.35)]',
  },
];

export default function PodioTop3({ top3, destinos, onRemove, onOpen }) {
  return (
    <div className="grid grid-cols-3 items-end gap-2 sm:gap-3">
      {POSICIONES.map(({ index, medalla, etiqueta, altura, borde, brillo }) => {
        const destino = destinos.find((item) => item.id === top3[index]);
        const esPrimero = index === 0;

        return (
          <motion.div
            layout
            key={index}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className={`relative overflow-hidden rounded-2xl border bg-stone-950/55 backdrop-blur-sm ${altura} ${borde} ${brillo}`}
          >
            {destino && (
              <>
                <img
                  src={destino.portada}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-40"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-stone-950/25 via-stone-950/65 to-stone-950/95" />
              </>
            )}

            <div className="relative z-10 flex h-full flex-col items-center justify-center px-1.5 py-3 text-center">
              <motion.span
                layout
                className={`${esPrimero ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'} leading-none drop-shadow-lg`}
                aria-hidden="true"
              >
                {medalla}
              </motion.span>

              <span className="mt-1 text-[8px] font-bold uppercase tracking-[0.16em] text-amber-200/80 sm:text-[10px]">
                {etiqueta}
              </span>

              {destino ? (
                <button
                  type="button"
                  onClick={() => onOpen(destino)}
                  className="group mt-1.5 w-full cursor-pointer rounded-lg px-1 py-1 text-center transition-colors hover:bg-amber-200/10"
                  aria-label={`Abrir el recuerdo ${destino.titulo}`}
                >
                  <span
                    className={`line-clamp-2 block font-bold leading-tight text-amber-50 transition-colors group-hover:text-amber-200 ${
                      esPrimero ? 'text-xs sm:text-sm' : 'text-[10px] sm:text-xs'
                    }`}
                  >
                    {destino.titulo}
                  </span>
                  <span className="mt-0.5 hidden text-[9px] leading-tight text-amber-100/45 sm:block">
                    {destino.fecha}
                  </span>
                </button>
              ) : (
                <span className="mt-1 text-[9px] text-stone-400/80 sm:text-[10px]">
                  Por elegir
                </span>
              )}
            </div>

            {destino && (
              <button
                type="button"
                onClick={() => onRemove(destino.id)}
                title={`Quitar ${destino.titulo} del podio`}
                aria-label={`Quitar ${destino.titulo} del podio`}
                className="absolute right-1 top-1 z-20 flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border border-stone-500/30 bg-stone-950/80 text-stone-400 transition-colors hover:border-rose-300/50 hover:text-rose-200"
              >
                <X className="h-2.5 w-2.5" />
              </button>
            )}

            {esPrimero && (
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-amber-300/90 to-transparent" />
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
