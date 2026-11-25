// Álbum de la Puerta 1: Viajes
// ---------------------------------
// Cambia los textos, fechas, portadas y fotos por los recuerdos reales.
// Cada viaje vive en su carpeta dentro de public/images/viajes/ y se carga
// con import.meta.env.BASE_URL.
// Si prefieres usar una URL externa, reemplaza viajeAsset('...') por la URL.
//
// Cada elemento de `fotos` puede ser una foto o un video:
//   { tipo: 'foto',  url: '...', descripcion: '...' }
//   { tipo: 'video', url: '...', poster: '...', descripcion: '...' }
// Si no pones `tipo`, se detecta por la extensión del archivo.
// El marco del libro se adapta solo a la orientación de cada archivo
// (vertical u horizontal), así que puedes mezclarlos sin problema.

const viajeAsset = (fileName) => `${import.meta.env.BASE_URL}images/viajes/${fileName}`;

const selva = (fileName) => viajeAsset(`selva/${fileName}`);
const ruffo = (fileName) => viajeAsset(`ruffo/${fileName}`);
const trujillo = (fileName) => viajeAsset(`trujillo/${fileName}`);
const ica = (fileName) => viajeAsset(`ica/${fileName}`);
const piura = (fileName) => viajeAsset(`piura/${fileName}`);
const cajamarca = (fileName) => viajeAsset(`cajamarca/${fileName}`);
const chiclayo = (fileName) => viajeAsset(`chiclayo/${fileName}`);
const chimbote = (fileName) => viajeAsset(`chimbote/${fileName}`);
const esep = (fileName) => viajeAsset(`esep/${fileName}`);
const huaraz = (fileName) => viajeAsset(`huaraz/${fileName}`);
const lima = (fileName) => viajeAsset(`lima/${fileName}`);
const malabrigo = (fileName) => viajeAsset(`malabrigo/${fileName}`);
const otros = (fileName) => viajeAsset(`otros/${fileName}`);
const puntasal = (fileName) => viajeAsset(`puntasal/${fileName}`);
const tembladera = (fileName) => viajeAsset(`tembladera/${fileName}`);

export const destinosViajes = [
  {
    id: 'pozuzo',
    titulo: 'Pozuzo',
    fecha: 'Viaje reciente · Selva peruana',
    lugar: 'Pozuzo, Oxapampa',
    portada: selva('Portada.jpg'),
    fotos: [
      {
        tipo: 'foto',
        titulo: 'La llegada a la selva',
        url: selva('imagen1.jpg'),
        descripcion:
          'El viaje a la selva más reciente. Aunque yo no haya estado, vieron paisajes y experiencias únicas.',
      },
      {
        tipo: 'foto',
        titulo: 'Mamá, la más guapa',
        url: selva('imagen2.jpg'),
        descripcion:
          'Mi madre mía, posando y guapa como siempre, demostrando que claramente aún está joven.',
      },
      {
        tipo: 'foto',
        titulo: 'Atrévete a lo extremo',
        url: selva('imagen3.jpg'),
        descripcion:
          'Aunque no te hayas atrevido a las experiencias extremas, algún día vivirás de verdad: las experiencias son únicas y ves que a los demás no les pasa nada… ¡atrévete!',
      },
      {
        tipo: 'foto',
        titulo: 'La boda del año',
        url: selva('imagen4.jpg'),
        descripcion:
          '¡Una boda colada, de papetos y mametas! ¡Qué moderno! Desfile, limusina… por poco y te haces de familia de ellos. Espero que no haya sido solo por la herencia.',
      },
      {
        tipo: 'foto',
        titulo: '¡A comer!',
        url: selva('imagen5.jpg'),
        descripcion:
          '¡La comida! La comida exótica y de todos los sitios: ¡su juane! Su comida tradicional, nuevos sabores de la misma selva. No se compara la comida de la costa con la de la selva.',
      },
      {
        tipo: 'foto',
        titulo: 'Papá en su salsa',
        url: selva('imagen6.jpg'),
        descripcion:
          'Esta foto… ¿? Mi papá haciendo de las suyas. Nada más que decir, jaja.',
      },
      {
        tipo: 'video',
        titulo: 'El resumen del viaje',
        url: selva('video1.mp4'),
        poster: selva('Portada.jpg'),
        descripcion:
          'En fin, un viaje con nuevas experiencias. Hasta te picó un insecto, pero aun así no paraste de disfrutar el viaje y las experiencias.',
      },
    ],
  },
  {
    id: 'trujillo',
    titulo: 'Trujillo',
    fecha: 'Donde empezó la historia',
    lugar: 'La ciudad que nos vio crecer',
    portada: trujillo('portada.jpg'),
    fotos: [
      {
        tipo: 'foto',
        titulo: 'Donde empezó todo',
        url: trujillo('imagen1.jpg'),
        descripcion:
          'El lugar donde iniciamos la historia, el lugar donde empezó todo. Desde que tenemos conocimiento, hicimos miles de recuerdos.',
      },
      {
        tipo: 'foto',
        titulo: 'Siempre volvemos',
        url: trujillo('imagen2.jpg'),
        descripcion:
          'Hasta la fecha regresamos aquí por mis estudios, y agradezco mucho eso: no dejarme solo y siempre apoyarme. Exprimimos todo Trujillo juntos en miles de lugares.',
      },
      {
        tipo: 'foto',
        titulo: 'Rutinas, logros y de todo',
        url: trujillo('imagen3.jpg'),
        descripcion:
          'Hicimos rutinas, eventos, logros personales, el inicio de muchas cosas: medallas, juegos, gym, mercado… hacíamos de todo. Aunque la misma ciudad se haya llenado de criminalidad, es donde superaste hasta el gobierno de Alberto Fujimori.',
      },
      {
        tipo: 'foto',
        titulo: 'Llenos de abejas',
        url: trujillo('imagen4.jpg'),
        descripcion:
          'Hasta los alrededores de Trujillo: experiencias únicas, lugares y experiencias que jamás imaginamos hacer. ¡Todo el cuerpo lleno de abejas!',
      },
      {
        tipo: 'foto',
        titulo: 'El mismísimo Ricolaasss',
        url: trujillo('imagen5.jpg'),
        descripcion:
          'Hasta conocimos al mismísimo Ricolaasss. ¡Qué rico estás! Mira cómo te derretías al lado de él; quizás en otra vida estarías con él y saldrían tus hijos gringos… jaja.',
      },
      {
        tipo: 'foto',
        titulo: 'La doña del mercado',
        url: trujillo('imagen6.jpg'),
        descripcion:
          'La mitiquísima doña del mercado que gritaba «¡Guapo!». El mejor lugar para desayunar en el mercado central: simple, sencillo y con buen trato.',
      },
      {
        tipo: 'video',
        titulo: 'El resumen de una vida',
        url: trujillo('video1.mp4'),
        poster: trujillo('portada.jpg'),
        descripcion:
          'Hicimos de todo: miles de navidades, cumpleaños, primeras cosas de varias… y agradezco mucho que estén en este viaje solo por mí, adaptado a una vida diferente, una vida donde ya conocen el terreno. Muchas gracias, les debo mucho. ¡A seguir formando recuerdos en casa!',
      },
    ],
  },
  {
    id: 'ica',
    titulo: 'Ica',
    fecha: 'Sol, dunas y leyendas',
    lugar: 'Huacachina y sus alrededores',
    portada: ica('portada.jpg'),
    fotos: [
      {
        tipo: 'foto',
        titulo: 'Historia y leyendas',
        url: ica('imagen1.jpg'),
        descripcion:
          'Fuimos muy pocas veces, pero hicimos de todo: conocimos historia y leyendas. Uno de los lugares más soleados a los que fuimos, ¡y con tormenta de arena incluida!',
      },
      {
        tipo: 'foto',
        titulo: 'Vino hecho en casa',
        url: ica('imagen2.jpg'),
        descripcion:
          'La pasamos bien: tomamos vino hecho en casa, fuimos a lugares únicos del Perú, actividades caras pero divertidas. La verdad, ¡sí queda muy lejos de donde vivimos!',
      },
      {
        tipo: 'foto',
        titulo: 'Las dunas',
        url: ica('imagen3.jpg'),
        descripcion:
          'Lo mejor fueron las dunas: hasta mi tía Nena, a su edad, vivió al máximo. ¿Y tú, que tienes miedo…? A la próxima te toca navegar esas arenas y bañarte en ellas. Aquí una foto de nosotros en medio de la arena y el sol, jaja.',
      },
      {
        tipo: 'foto',
        titulo: 'Comida de todo',
        url: ica('imagen4.jpg'),
        descripcion:
          'A los alrededores conocimos muchos lugares donde comimos de todo: desde lo más rico hasta lo más raro. ¿Te acuerdas de esa negra y su sazón? Jaja. Aunque más me gustó la comida del hotel.',
      },
      {
        tipo: 'foto',
        titulo: 'El camello',
        url: ica('imagen5.jpg'),
        descripcion:
          'De lejitos nomás: un camello que, para subirse, costaba unos 50 soles. Por lo menos lo viste, ¡una criatura que solo se ve en el lejano oeste!',
      },
      {
        tipo: 'foto',
        titulo: 'El parque de las brujas',
        url: ica('imagen6.jpg'),
        descripcion:
          'El parque de las brujas, lugares históricos de los amigos del chato: lugares inolvidables y rústicos. La pasamos genial. En un futuro espero que vayamos y la pasemos sin miedo por tu parte, jaja.',
      },
    ],
  },
  {
    id: 'piura',
    titulo: 'Piura',
    fecha: 'Norte, calor y comida',
    lugar: 'Piura y sus alrededores',
    portada: piura('portada.jpg'),
    fotos: [
      {
        tipo: 'foto',
        titulo: 'Un norte distinto',
        url: piura('imagen1.jpg'),
        descripcion:
          'Un lugar al norte donde no fuimos muchas veces. No hicimos gran cosa, pero vimos cosas únicas y construcciones únicas del Perú.',
      },
      {
        tipo: 'foto',
        titulo: 'La casa del personaje',
        url: piura('imagen2.jpg'),
        descripcion:
          'Conocimos la casa de un personaje importante del Perú. Mantenía su pinta de antigüedad… ¿Crees que todo sea original?',
      },
      {
        tipo: 'foto',
        titulo: 'De compras',
        url: piura('imagen3.jpg'),
        descripcion:
          '¡Llegamos a comprar cosas! Un centro comercial impresionante y con la mejor infraestructura que vi: hasta hay Zara, tienda de ropa de lujo. Compramos mucha ropa y es muy moderno. Espero explorar más lugares la próxima vez.',
      },
      {
        tipo: 'foto',
        titulo: '¡Que no falte la comida!',
        url: piura('imagen4.jpg'),
        descripcion:
          '¡Que no falte la comida! Me acuerdo de que hay miles de lugares, pero abundan los cheleros: cada restaurante tenía uno, jaja. Comida típica con su calor rico.',
      },
      {
        tipo: 'foto',
        titulo: 'Puentes y sol',
        url: piura('imagen5.jpg'),
        descripcion:
          'Un lugar especial pero muy soleado: sus miles de puentes y lugares que aún no exploramos. Espero volver para seguir investigando cada actividad posible.',
      },
    ],
  },
  {
    id: 'cajamarca',
    titulo: 'Cajamarca',
    fecha: 'Tierra de carnavales',
    lugar: 'La sierra que llevamos dentro',
    portada: cajamarca('portada.jpg'),
    fotos: [
      {
        tipo: 'foto',
        titulo: 'Sangre serrana',
        url: cajamarca('imagen1.jpg'),
        descripcion:
          'El lugar de los carnavales, el lugar donde fui hecho y por eso tengo sangre serrana. ¡Hasta tenemos el lugar donde siempre comemos! Que no falte el soroche.',
      },
      {
        tipo: 'foto',
        titulo: 'De noche es mejor',
        url: cajamarca('imagen2.jpg'),
        descripcion:
          'De noche es mejor: una ciudad iluminada que, pese a estar en altura, nos fuerza a los pobladores a escalar o hacer actividad física. ¡Miles de escaleras y más altura para una foto!',
      },
      {
        tipo: 'foto',
        titulo: 'Como en casa',
        url: cajamarca('imagen3.jpg'),
        descripcion:
          'Lugares donde siempre te escucho decir que te sientes en casa o que te gustaría vivir en el campo, como buena mameta que eres, jaja. Desde muy pequeños ya íbamos a ese humilde pueblo llamado ciudad.',
      },
      {
        tipo: 'foto',
        titulo: 'El castillo y sus tik toks',
        url: cajamarca('imagen4.jpg'),
        descripcion:
          'Mi madre hermosa: el castillo donde conocimos y donde hicieron miles de tik toks junto a mi papá. Siempre posando y siempre acompañando al paisaje, hermoso y joven como tú, jaja.',
      },
      {
        tipo: 'foto',
        titulo: 'La reserva',
        url: cajamarca('imagen5.png'),
        descripcion:
          'La reserva con miles de animales imponentes: desde osos hasta toros o jaguares. ¿Cómo? Ni idea, pero vimos de todo. Me acuerdo de que mi papá se cansó nada más subir. ¡Una caminata larga para ver todo y encima de subida! Qué desgraciados.',
      },
      {
        tipo: 'foto',
        titulo: 'Naturaleza y raíces',
        url: cajamarca('imagen6.jpg'),
        descripcion:
          'Un lugar donde siempre fortalecemos nuestras raíces serranas, conectando con la naturaleza y hasta con el oxígeno más fresco.',
      },
    ],
  },
  {
    id: 'chiclayo',
    titulo: 'Chiclayo',
    fecha: 'Sabor y paseo norteño',
    lugar: 'Chiclayo, Lambayeque',
    portada: chiclayo('IMG_20221012_135931.jpg'),
    fotos: [
      {
        tipo: 'foto',
        titulo: 'Paseo familiar',
        url: chiclayo('IMG_20221012_135931.jpg'),
        descripcion:
          'Un paseo por Chiclayo con el sol de la costa y la mejor compañía. Viaje corto, pero con foto familiar para el recuerdo.',
      },
      {
        tipo: 'foto',
        titulo: 'Cocina y sabores',
        url: chiclayo('Captura de pantalla 2026-11-24 223350.jpg'),
        descripcion:
          'Una experiencia de cocina con delantales, risas y sabores. Lo mejor de Chiclayo también se disfruta cocinando (y probando).',
      },
    ],
  },
  {
    id: 'chimbote',
    titulo: 'Chimbote',
    fecha: 'Playa, música y familia',
    lugar: 'Nuevo Chimbote, Áncash',
    portada: chimbote('portada.jpg'),
    fotos: [
      {
        tipo: 'foto',
        titulo: 'Cena en familia',
        url: chimbote('Imagen3.jpg'),
        descripcion:
          'Una cena en familia, de esas donde la mesa se llena de conversación y risas.',
      },
      {
        tipo: 'foto',
        titulo: 'Castillos de arena',
        url: chimbote('IMG_20230115_124143.jpg'),
        descripcion:
          'Día de playa y castillos de arena. Trabajo en equipo, palas en mano y el mar de fondo.',
      },
      {
        tipo: 'foto',
        titulo: 'Micrófono abierto',
        url: chimbote('IMG_20230218_105457.jpg'),
        descripcion:
          'Una noche de música y karaoke: sin pena, con micrófono en mano y el público puesto.',
      },
      {
        tipo: 'foto',
        titulo: 'La banda en vivo',
        url: chimbote('IMG_20231207_112022.jpg'),
        descripcion:
          'Música en vivo y una banda que le puso ritmo al recuerdo.',
      },
      {
        tipo: 'foto',
        titulo: 'Bien puestos',
        url: chimbote('IMG_20231209_195222.jpg'),
        descripcion:
          'Todos bien puestos para la foto: la familia completa, mirando a cámara.',
      },
      {
        tipo: 'foto',
        titulo: 'El ceviche',
        url: chimbote('IMG_20240120_142748.jpg'),
        descripcion:
          'Y qué sería de la costa sin su ceviche. Aquí, bien servido y con harto limón.',
      },
    ],
  },
  {
    id: 'huaraz',
    titulo: 'Huaraz',
    fecha: 'Lagunas y nevados',
    lugar: 'Huaraz, Áncash',
    portada: huaraz('portada.jpg'),
    fotos: [
      {
        tipo: 'foto',
        titulo: 'La laguna',
        url: huaraz('IMG_20221010_142148.jpg'),
        descripcion:
          'La laguna y sus colores: agua turquesa, montañas alrededor y una foto que no necesita filtro.',
      },
      {
        tipo: 'foto',
        titulo: 'El nevado',
        url: huaraz('IMG_20240722_120838.jpg'),
        descripcion:
          'El nevado imponente, blanco y enorme, recordándonos lo pequeños que somos.',
      },
      {
        tipo: 'foto',
        titulo: 'Abrazados en la altura',
        url: huaraz('IMG_20240723_111519.jpg'),
        descripcion:
          'Un abrazo con el lago de fondo y el frío de la altura. Abrigo, cariño y paisaje de sobra.',
      },
      {
        tipo: 'foto',
        titulo: 'La caminata',
        url: huaraz('IMG_20240723_154405.jpg'),
        descripcion:
          'La caminata valió la pena: paisajes enormes, aire puro y piernas cansadas (pero felices).',
      },
    ],
  },
  {
    id: 'lima',
    titulo: 'Lima',
    fecha: 'Murales y luces',
    lugar: 'Lima, la capital',
    portada: lima('portada.jpg'),
    fotos: [
      {
        tipo: 'foto',
        titulo: 'El mural de Chabuca',
        url: lima('imagen1.jpg'),
        descripcion:
          'Un mural enorme de Chabuca Granda y una foto familiar a su lado. Lima también canta.',
      },
      {
        tipo: 'foto',
        titulo: 'Barranco',
        url: lima('imagen.webp'),
        descripcion:
          'Callecitas de Barranco, buganvilias y una postal que parece de otro tiempo.',
      },
      {
        tipo: 'foto',
        titulo: 'La atracción',
        url: lima('IMG_20220415_133633.jpg'),
        descripcion:
          'La atracción del parque: arneses, mascarillas y caras de emoción antes de que empiece.',
      },
      {
        tipo: 'foto',
        titulo: 'Luces y agua',
        url: lima('imagen1.webp'),
        descripcion:
          'De noche, el parque se ilumina y el agua se vuelve espejo. Foto obligada con el arbolito de fondo.',
      },
    ],
  },
  {
    id: 'malabrigo',
    titulo: 'Malabrigo',
    fecha: 'El puerto y su playa',
    lugar: 'Puerto Malabrigo, La Libertad',
    portada: malabrigo('20250301_092442.jpg'),
    fotos: [
      {
        tipo: 'foto',
        titulo: 'La playa',
        url: malabrigo('20250228_150357.jpg'),
        descripcion:
          'La costa de Malabrigo, con su mar y ese cielo que parece pintado.',
      },
      {
        tipo: 'foto',
        titulo: 'Bajo la sombrilla',
        url: malabrigo('20250228_170749.jpg'),
        descripcion:
          'Sombrilla, arena y familia. El plan perfecto para no hacer nada.',
      },
      {
        tipo: 'foto',
        titulo: 'La piscina',
        url: malabrigo('20250228_180130.jpg'),
        descripcion:
          'Un chapuzón y piernas al sol: las vacaciones también se disfrutan sin prisa.',
      },
      {
        tipo: 'foto',
        titulo: 'Noche de luces',
        url: malabrigo('Captura de pantalla 2026-11-24 122850.jpg'),
        descripcion:
          'Malabrigo de noche: luces, iglesia y una foto que mezcla playa y ciudad.',
      },
      {
        tipo: 'foto',
        titulo: 'Caminata por la arena',
        url: malabrigo('IMG_20240130_165146.jpg'),
        descripcion:
          'Caminata por la arena, con el mar a un lado y las dunas al otro.',
      },
      {
        tipo: 'foto',
        titulo: 'El barco de Malabrigo',
        url: malabrigo('IMG_20240130_183842.jpg'),
        descripcion:
          'Un barco varado en la arena, listo para la foto. Malabrigo tiene magia hasta en sus barcos.',
      },
    ],
  },
  {
    id: 'puntasal',
    titulo: 'Punta Sal',
    fecha: 'Sol, playa y descanso',
    lugar: 'Punta Sal, Tumbes',
    portada: puntasal('portada.jpg'),
    fotos: [
      {
        tipo: 'foto',
        titulo: 'El mar y la piscina',
        url: puntasal('Captura de pantalla 2026-11-24 122222.jpg'),
        descripcion:
          'Punta Sal: mar, piscina y sol. Un collage de los dos moods del viaje.',
      },
      {
        tipo: 'foto',
        titulo: 'El show',
        url: puntasal('IMG_20231031_202602.jpg'),
        descripcion:
          'El show nocturno: luces, escenario y la familia disfrutando desde primera fila.',
      },
      {
        tipo: 'foto',
        titulo: 'Entre bambalinas',
        url: puntasal('IMG_20231031_221149.jpg'),
        descripcion:
          'Una foto del show desde otro ángulo, con el escenario encendido.',
      },
      {
        tipo: 'foto',
        titulo: 'El cangrejo',
        url: puntasal('IMG_20231101_190445.jpg'),
        descripcion:
          'El cangrejo, servido y listo. En Punta Sal la comida también es protagonista.',
      },
      {
        tipo: 'foto',
        titulo: 'Después del sol',
        url: puntasal('IMG_20231101_223052.jpg'),
        descripcion:
          'Después del sol, el cansancio: siesta profunda y a recuperar energía.',
      },
      {
        tipo: 'foto',
        titulo: 'Cuatrimoto en la playa',
        url: puntasal('IMG_20231102_105442.jpg'),
        descripcion:
          'Cuatrimoto en la arena: adrenalina, viento y una playa entera para nosotros.',
      },
    ],
  },
  {
    id: 'tembladera',
    titulo: 'Tembladera',
    fecha: 'Raíces y paisajes',
    lugar: 'Tembladera, Cajamarca',
    portada: tembladera('IMG_20240525_095238.jpg'),
    fotos: [
      {
        tipo: 'foto',
        titulo: 'En casa',
        url: tembladera('imagen1.jpg'),
        descripcion:
          'En casa, jugando y posando. Los recuerdos más simples también merecen su página.',
      },
      {
        tipo: 'foto',
        titulo: 'La estatua del águila',
        url: tembladera('IMG_20240525_095238.jpg'),
        descripcion:
          'Una foto sobre la estatua del águila, con el lago de fondo. Tembladera también tiene sus lugares únicos.',
      },
    ],
  },
  {
    id: 'esep',
    titulo: 'Esep',
    fecha: 'Casona, malecón y playa',
    lugar: 'Un paseo por la costa',
    portada: esep('portada.jpg'),
    fotos: [
      {
        tipo: 'foto',
        titulo: 'La casona azul',
        url: esep('20250426_134339.jpg'),
        descripcion:
          'La casona azul y su balcón: una postal de pueblo con historia.',
      },
      {
        tipo: 'foto',
        titulo: 'Cristo y malecón',
        url: esep('Captura de pantalla 2026-11-24 140748.jpg'),
        descripcion:
          'Un paseo por el malecón, con el Cristo abrazando la ciudad y el mar de fondo.',
      },
    ],
  },
  {
    id: 'otros',
    titulo: 'Otros recuerdos',
    fecha: 'Momentos en familia',
    lugar: 'Donde sea, juntos',
    portada: otros('20241124_152728.jpg'),
    fotos: [
      {
        tipo: 'foto',
        titulo: 'Una boda',
        url: otros('FB_IMG_1692968619627.jpg'),
        descripcion:
          'Una boda, ropa elegante y una foto de pareja. Los eventos también se guardan.',
      },
      {
        tipo: 'foto',
        titulo: 'Los primeros años',
        url: otros('FB_IMG_1716602717355.jpg'),
        descripcion:
          'Los primeros años: un bebé, un papá y una siesta que no llegó a ser siesta.',
      },
      {
        tipo: 'foto',
        titulo: 'El puente',
        url: otros('FB_IMG_1737760240112.jpg'),
        descripcion:
          'El puente amarillo y una foto juntos. Cualquier paseo es mejor en pareja.',
      },
      {
        tipo: 'foto',
        titulo: 'Comida y risas',
        url: otros('FB_IMG_1737760243764.jpg'),
        descripcion:
          'Comida, risas y una mesa compartida. Lo de siempre, pero siempre bien.',
      },
      {
        tipo: 'foto',
        titulo: 'El pasadizo',
        url: otros('FB_IMG_1737760492568.jpg'),
        descripcion:
          'Corriendo por el pasadizo de madera: energía de sobra y una foto en movimiento.',
      },
      {
        tipo: 'foto',
        titulo: 'Bicicleta',
        url: otros('FB_IMG_1740200560090.jpg'),
        descripcion:
          'Aprender a andar en bicicleta: papá detrás, valentía adelante.',
      },
      {
        tipo: 'foto',
        titulo: 'Con la chompa de mamá',
        url: otros('IMG_15421753211819.jpg'),
        descripcion:
          'Con la chompa de mamá y cara de no querer la foto. Igual quedó hermosa.',
      },
      {
        tipo: 'foto',
        titulo: 'La niña y su osito',
        url: otros('Screenshot_20250413_123229_Facebook.jpg'),
        descripcion:
          'Una tarde al aire libre, un osito y una niña que ya posa como grande.',
      },
    ],
  },
  {
    id: 'ruffo',
    titulo: 'Ruffito ❤️',
    fecha: 'Más de 7 años juntos',
    lugar: 'Un miembro más de la familia',
    portada: ruffo('Portada.jpg'),
    fotos: [
      {
        tipo: 'foto',
        titulo: 'Ruffito, parte de la familia',
        url: ruffo('imagen1.jpg'),
        descripcion:
          'El perro que nos acompañó más de 7 años. Ruffito, como parte de la familia.',
      },
      {
        tipo: 'foto',
        titulo: 'Navidades, cumples y consuelo',
        url: ruffo('imagen2.jpg'),
        descripcion:
          'Pasamos miles de eventos con él: muchas navidades, cumpleaños, peleas… y él fue el consuelo. ¡Un mejor amigo de la familia!',
      },
      {
        tipo: 'foto',
        titulo: 'El mejor perro juguetón',
        url: ruffo('imagen3.jpg'),
        descripcion:
          'Siempre le hacíamos de todo: lo vestíamos, lo ayudábamos, lo curábamos… y él siempre daba a cambio su cariño y acompañamiento. ¡El mejor perro juguetón y de todo!',
      },
      {
        tipo: 'foto',
        titulo: 'Siempre una risita',
        url: ruffo('imagen4.jpg'),
        descripcion:
          'Nos acompañó en los momentos de soledad y en los felices: siempre nos sacaba una risita y siempre era muy agradecido con nosotros.',
      },
      {
        tipo: 'foto',
        titulo: 'El hámster (sí, ese)',
        url: ruffo('imagen5.jpg'),
        descripcion:
          'Pero no olvidemos al hámster que tuvimos: nuestra primera mascota de familia, ¡que comía a sus hijos! Aprendimos que, aunque sea pequeño, ya era una responsabilidad enorme. Menos mal fue cuidado por mejores personas; ¡si no, con nosotros no vivía! Jaja.',
      },
      {
        tipo: 'foto',
        titulo: 'Un miembro más de la familia',
        url: ruffo('imagen7.jpg'),
        descripcion:
          'Ruffo, aunque no haya sido nuestro, era un miembro más de la familia. No fue un viaje en sí, pero sí fue un viaje vivir con él hasta la fecha. Aunque no estemos con él, siempre nos regaló lo mejor.',
      },
    ],
  },
];
