// Datos y Configuración del Minijuego de la Puerta "Familia" (El Armario)
// -------------------------------------------------------------------------

const armarioAsset = (fileName) => `${import.meta.env.BASE_URL}images/armario/${fileName}`;

export const DOLL_CONFIG = {
  leo: {
    id: 'leo',
    name: 'Leo',
    role: 'Hijo mayor',
    age: '20 años',
    number: '0',
    // Posición porcentual sobre amario.png (fácilmente ajustable)
    position: {
      left: '21%',
      top: '50%',
    },
    size: {
      width: '18%',
      minWidth: '100px',
      maxWidth: '170px',
    },
    images: {
      initial: armarioAsset('LeoIncial.png'),
      question: armarioAsset('LeoPregunta.png'),
      answer: armarioAsset('LeoRespuesta.png'),
    },
    badgeColor: 'from-sky-500 to-blue-600',
    glowColor: 'rgba(56, 189, 248, 0.4)',
  },
  papa: {
    id: 'papa',
    name: 'Papá',
    role: 'El rey de la casa',
    number: '4',
    position: {
      left: '36%',
      top: '71%',
    },
    size: {
      width: '20%',
      minWidth: '115px',
      maxWidth: '185px',
    },
    images: {
      initial: armarioAsset('PapaIncial.png'),
      question: armarioAsset('PapaPregunta.png'),
      answer: armarioAsset('PapaRespuesta.png'),
    },
    badgeColor: 'from-amber-500 to-yellow-600',
    glowColor: 'rgba(251, 191, 36, 0.4)',
  },
  naty: {
    id: 'naty',
    name: 'Naty',
    role: 'Hija menor',
    number: '5',
    position: {
      left: '77%',
      top: '55%',
    },
    size: {
      width: '18%',
      minWidth: '100px',
      maxWidth: '170px',
    },
    images: {
      initial: armarioAsset('NatyIncial.png'),
      question: armarioAsset('NatyPregunta.png'),
      answer: armarioAsset('NatyRespuesta.png'),
    },
    badgeColor: 'from-rose-500 to-pink-600',
    glowColor: 'rgba(244, 114, 182, 0.4)',
  },
};

export const CAJA_FUERTE_CONFIG = {
  // Código secreto que abre la caja fuerte: 0 (Leo), 4 (Papá), 5 (Naty)
  targetCode: '045',
  backgroundImage: armarioAsset('PanelDeCaja.jpg'),
  // Coordenadas porcentuales exactas de los 3 recuadros blancos en PanelDeCaja.jpg (2752x1536)
  boxes: [
    { id: 0, left: '33.8%', top: '30.6%', width: '8.2%', height: '13.7%', label: 'Leo' },
    { id: 1, left: '46.5%', top: '30.6%', width: '8.0%', height: '13.7%', label: 'Papá' },
    { id: 2, left: '59.2%', top: '30.6%', width: '8.0%', height: '13.7%', label: 'Naty' },
  ],
  // Zona interactiva de la caja fuerte en el armario
  hotspot: {
    left: '52%',
    top: '36%',
    width: '18%',
    height: '18%',
  },
};

export const PREGUNTAS_FAMILIA = {
  leo: [
    {
      id: 'leo-1',
      pregunta: '¿Cuál es mi comida favorita?',
      opciones: ['Tallarín con atún', 'Lomo saltado', 'Chaufa'],
      correcta: 0,
      comentarioExito: '¡Exacto mamá! Tallarín con atún, clásico insuperable.',
    },
    {
      id: 'leo-2',
      pregunta: '¿Cuál es mi deporte favorito?',
      opciones: ['Vóley', 'Básquet', 'Fútbol'],
      correcta: 0,
      comentarioExito: '¡Muy bien! El vóley siempre en primer lugar.',
    },
    {
      id: 'leo-3',
      pregunta: '¿Cuál es mi estilo y gusto al vestir?',
      opciones: ['Skater', 'Urbano', 'Informal'],
      correcta: 0,
      comentarioExito: '¡Totalmente! Estilo skater siempre cómodo.',
    },
    {
      id: 'leo-4',
      pregunta: '¿Dónde estuvo mi primera enamorada?',
      opciones: [
        'Innova Schools (Primaria)',
        'Universidad',
        'Inicial/Primaria (La Asunción)',
      ],
      correcta: 2,
      comentarioExito: '¡Memoria de mamá! En La Asunción desde pequeños.',
    },
    {
      id: 'leo-5',
      pregunta: '¿En qué lugar me gustaría vivir en el futuro?',
      opciones: ['Playa', 'Ciudad', 'Campo'],
      correcta: 1,
      comentarioExito: '¡Acertaste! Soy 100% citadino.',
    },
  ],

  naty: [
    {
      id: 'naty-1',
      pregunta: '¿Cuál es mi color favorito?',
      opciones: ['A) Negro', 'B) Azul', 'C) Beige'],
      correcta: 2,
      comentarioExito: '¡Sí mamá, el beige es mi favorito de siempre!',
    },
    {
      id: 'naty-2',
      pregunta: '¿Cuál es mi animal favorito?',
      opciones: ['A) Conejo', 'B) Perro', 'C) Gato'],
      correcta: 1,
      comentarioExito: '¡Los perritos siempre son mis favoritos!',
    },
    {
      id: 'naty-3',
      pregunta: '¿Cuál es mi comida favorita?',
      opciones: ['A) Zapallo', 'B) Menestra marrón', 'C) Ninguna de las anteriores'],
      correcta: 2,
      comentarioExito: '¡Jaja obvio, ninguna de esas dos me gusta!',
    },
    {
      id: 'naty-4',
      pregunta: '¿Cuál es mi película favorita?',
      opciones: ['A) High School Musical', 'B) Buscando a Nemo', 'C) Coco'],
      correcta: 0,
      comentarioExito: '¡High School Musical por siempre!',
    },
    {
      id: 'naty-5',
      pregunta: '¿Cuál es mi actividad favorita?',
      opciones: ['A) Leer', 'B) Caminar', 'C) Cocinar'],
      correcta: 2,
      comentarioExito: '¡Cocinar postres y cosas ricas para ustedes!',
    },
  ],

  papa: [
    {
      id: 'papa-1',
      pregunta: '¿Qué comida me gusta más?',
      opciones: [
        '1. Patita en fiambre',
        '2. Olluco',
        '3. Zapallo',
        '4. Arroz con pollo',
      ],
      correcta: 0,
      comentarioExito: '¡Su patita en fiambre con buen sazón norteño!',
    },
    {
      id: 'papa-2',
      pregunta: '¿Qué música o grupo me gusta escuchar?',
      opciones: ['1. Los Méndez', '2. Tongo', '3. Rock metálico'],
      correcta: 0,
      comentarioExito: '¡Los Méndez sonando a todo volumen!',
    },
    {
      id: 'papa-3',
      pregunta: '¿Qué marca de ropa me gusta más?',
      opciones: ['1. Columbia', '2. Adidas', '3. Diadora'],
      correcta: 0,
      comentarioExito: '¡Columbia para la comodidad y el abrigo!',
    },
    {
      id: 'papa-4',
      pregunta: '¿Qué color de polo es el que más me gusta?',
      opciones: ['1. Rojo', '2. Azul', '3. Verde', '4. Negro'],
      correcta: 3,
      comentarioExito: '¡Polo negro clásico, nunca falla!',
    },
    {
      id: 'papa-5',
      pregunta: '¿Cuál es mi lugar favorito en el mundo?',
      opciones: ['1. El parque', '2. La playa', '3. El bosque', '4. Mi casa'],
      correcta: 3,
      comentarioExito: '¡Mi casa, descansando junto a mi familia!',
    },
  ],
};
