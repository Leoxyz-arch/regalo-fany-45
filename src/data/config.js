export const projectMeta = {
  recipient: 'Fany',
  milestone: 45,
  creators: {
    son: 'Hijo mayor (20 años)',
    daughter: 'Hija menor',
  },
};

export const HOTSPOTS = {
  candles: {
    1: {
      id: 1,
      name: 'Vela de los Viajes',
      area: 'viajes',
      // Coordinates in percentage relative to 2752x1536 illustration
      x: 18.6,
      y: 80.6,
      svgCx: 512,
      svgCy: 1238,
      lightRadius: 960,
    },
    2: {
      id: 2,
      name: 'Vela de la Familia',
      area: 'familia',
      x: 81.6,
      y: 80.6,
      svgCx: 2246,
      svgCy: 1238,
      lightRadius: 960,
    },
    3: {
      id: 3,
      name: 'Vela del Cumpleaños',
      area: 'cumple',
      x: 50.1,
      y: 72.3,
      svgCx: 1380,
      svgCy: 1110,
      lightRadius: 920,
    },
  },
  doors: {
    viajes: {
      id: 'viajes',
      title: 'Puerta de los Viajes',
      candleRequired: 1,
      keyPieceIndex: 1, // First fragment
      x: 4.5,
      y: 14.0,
      width: 12.5,
      height: 62.0,
      badgeText: 'Viajes',
      modal: {
        title: '¡Encontraste el primer fragmento de la llave!',
        subtitle: 'Fragmento de la Aventura 🧭',
        description:
          'Mamá, gracias por cada viaje, cada paseo y cada aventura que hemos compartido. Eres nuestra mejor compañera de ruta y la que siempre llena el camino de risas y alegría.',
        quote: '«El mundo es más brillante cuando lo recorremos contigo.»',
        childrenNote: 'Con amor de tus dos hijos para tus 45 años ✨',
      },
    },
    familia: {
      id: 'familia',
      title: 'Puerta de la Familia',
      candleRequired: 2,
      keyPieceIndex: 2, // Second fragment
      x: 83.0,
      y: 14.0,
      width: 12.5,
      height: 70.0,
      badgeText: 'Familia',
      modal: {
        title: '¡Encontraste el segundo fragmento de la llave!',
        subtitle: 'Fragmento del Amor Familiar 💖',
        description:
          'Para la mamá más hermosa, amorosa y comprensiva de todas. Gracias por cuidar de nosotros, por tu paciencia infinita y por hacer de nuestro hogar el lugar más seguro y cálido del mundo.',
        quote: '«Donde tú estás, siempre es hogar.»',
        childrenNote: 'De tu hijo mayor (20 años) y tu princesa consentida 🌸',
      },
    },
    cumple: {
      id: 'cumple',
      title: 'Puerta Principal del Cumpleaños',
      candleRequired: 3,
      x: 40.0,
      y: 26.0,
      width: 20.0,
      height: 48.0,
      lockX: 50.0,
      lockY: 56.5,
      badgeText: 'CUMPLE',
    },
  },
};
