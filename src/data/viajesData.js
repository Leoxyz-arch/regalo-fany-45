// Álbum de la Puerta 1: Viajes
// ---------------------------------
// Cambia los textos, fechas, portadas y fotos por los recuerdos reales.
// Las imágenes actuales son marcadores de posición temporales que están en
// public/images/viajes/ y se cargan con import.meta.env.BASE_URL.
// Si prefieres usar una URL externa, reemplaza viajeAsset('...') por la URL.

const viajeAsset = (fileName) => `${import.meta.env.BASE_URL}images/viajes/${fileName}`;

export const destinosViajes = [
  {
    id: 'destino-1',
    titulo: 'Destino 1',
    fecha: 'Fecha especial por escribir',
    portada: viajeAsset('destino-1-portada.svg'),
    fotos: [
      {
        url: viajeAsset('destino-1-foto-1.svg'),
        descripcion:
          'Descripción de la foto 1 del Destino 1. Aquí puedes contar lo que vivimos, lo que sentimos y por qué este momento es especial.',
      },
      {
        url: viajeAsset('destino-1-foto-2.svg'),
        descripcion:
          'Descripción de la foto 2 del Destino 1. Cambia este texto por un recuerdo real para que mamá lo reviva al abrir el libro.',
      },
      {
        url: viajeAsset('destino-1-foto-3.svg'),
        descripcion:
          'Descripción de la foto 3 del Destino 1. Cada foto tiene su propia historia; escribe aquí la que quieras guardar.',
      },
    ],
  },
  {
    id: 'destino-2',
    titulo: 'Destino 2',
    fecha: 'Fecha especial por escribir',
    portada: viajeAsset('destino-2-portada.svg'),
    fotos: [
      {
        url: viajeAsset('destino-2-foto-1.svg'),
        descripcion:
          'Descripción de la foto 1 del Destino 2. Reemplaza este texto por el recuerdo que quieres revivir en esta página.',
      },
      {
        url: viajeAsset('destino-2-foto-2.svg'),
        descripcion:
          'Descripción de la foto 2 del Destino 2. Una pequeña historia para acompañar esta imagen del viaje.',
      },
      {
        url: viajeAsset('destino-2-foto-3.svg'),
        descripcion:
          'Descripción de la foto 3 del Destino 2. Escribe aquí la anécdota o el sentimiento que hace único este momento.',
      },
    ],
  },
  {
    id: 'destino-3',
    titulo: 'Destino 3',
    fecha: 'Fecha especial por escribir',
    portada: viajeAsset('destino-3-portada.svg'),
    fotos: [
      {
        url: viajeAsset('destino-3-foto-1.svg'),
        descripcion:
          'Descripción de la foto 1 del Destino 3. Este es un espacio de prueba listo para tu recuerdo real.',
      },
      {
        url: viajeAsset('destino-3-foto-2.svg'),
        descripcion:
          'Descripción de la foto 2 del Destino 3. Cuenta aquí lo que pasó justo antes o después de esta foto.',
      },
      {
        url: viajeAsset('destino-3-foto-3.svg'),
        descripcion:
          'Descripción de la foto 3 del Destino 3. Un detalle, una risa o una frase que quieras recordar para siempre.',
      },
    ],
  },
  {
    id: 'destino-4',
    titulo: 'Destino 4',
    fecha: 'Fecha especial por escribir',
    portada: viajeAsset('destino-4-portada.svg'),
    fotos: [
      {
        url: viajeAsset('destino-4-foto-1.svg'),
        descripcion:
          'Descripción de la foto 1 del Destino 4. Sustituye este texto por la historia que acompaña a esta imagen.',
      },
      {
        url: viajeAsset('destino-4-foto-2.svg'),
        descripcion:
          'Descripción de la foto 2 del Destino 4. Un recuerdo pequeño también puede merecer una página entera.',
      },
      {
        url: viajeAsset('destino-4-foto-3.svg'),
        descripcion:
          'Descripción de la foto 3 del Destino 4. Escribe el momento exacto que quieres que ella vuelva a sentir.',
      },
    ],
  },
  {
    id: 'destino-5',
    titulo: 'Destino 5',
    fecha: 'Fecha especial por escribir',
    portada: viajeAsset('destino-5-portada.svg'),
    fotos: [
      {
        url: viajeAsset('destino-5-foto-1.svg'),
        descripcion:
          'Descripción de la foto 1 del Destino 5. Cambia este marcador por un recuerdo que te haga sonreír.',
      },
      {
        url: viajeAsset('destino-5-foto-2.svg'),
        descripcion:
          'Descripción de la foto 2 del Destino 5. Aquí puedes describir el paisaje, la compañía o lo que sintieron ese día.',
      },
      {
        url: viajeAsset('destino-5-foto-3.svg'),
        descripcion:
          'Descripción de la foto 3 del Destino 5. Deja escrita la parte de la historia que no debe olvidarse.',
      },
    ],
  },
  {
    id: 'destino-6',
    titulo: 'Destino 6',
    fecha: 'Fecha especial por escribir',
    portada: viajeAsset('destino-6-portada.svg'),
    fotos: [
      {
        url: viajeAsset('destino-6-foto-1.svg'),
        descripcion:
          'Descripción de la foto 1 del Destino 6. Reemplaza este texto por el recuerdo real de este viaje.',
      },
      {
        url: viajeAsset('destino-6-foto-2.svg'),
        descripcion:
          'Descripción de la foto 2 del Destino 6. Una frase, un lugar o una anécdota para acompañar la imagen.',
      },
      {
        url: viajeAsset('destino-6-foto-3.svg'),
        descripcion:
          'Descripción de la foto 3 del Destino 6. Este es el último espacio de prueba del álbum; hazlo completamente tuyo.',
      },
    ],
  },
];
