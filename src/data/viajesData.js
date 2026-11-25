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
const pacasmayo = (fileName) => viajeAsset(`pacasmayo/${fileName}`);
const puntasal = (fileName) => viajeAsset(`puntasal/${fileName}`);
const malabrigo = (fileName) => viajeAsset(`malabrigo/${fileName}`);

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
      {
        tipo: 'foto',
        titulo: 'La familia en el lago',
        url: cajamarca('imagen7.jpg'),
        descripcion:
          'Una foto en familia de hace años, paseando en balsa y con la bandera del Perú de fondo. El tiempo pasa, pero el recuerdo sigue igual de vivo.',
      },
    ],
  },
  {
    id: 'chiclayo',
    titulo: 'Chiclayo',
  },
  {
    id: 'chimbote',
    titulo: 'Chimbote',
  },
  {
    id: 'huaraz',
    titulo: 'Huaraz',
  },
  {
    id: 'lima',
    titulo: 'Lima',
  },
  {
    id: 'pacasmayo',
    titulo: 'Pacasmayo',
    fecha: 'Calma y playa en familia',
    lugar: 'Pacasmayo, La Libertad',
    portada: pacasmayo('portada.webp'),
    fotos: [
      {
        tipo: 'foto',
        titulo: 'El lugar de los gringos',
        url: pacasmayo('imagen1.jpg'),
        descripcion:
          '¡Pacasmayo! El lugar donde siempre vemos pasar a los gringos, un sitio de calma y con una de las playas más activas para pasar el rato. Aquí el plan es simple: mirar el mar, caminar sin apuro y quedarse hasta que el sol se esconda.',
      },
      {
        tipo: 'foto',
        titulo: 'La casa del tío Arturo',
        url: pacasmayo('imagen2.jpg'),
        descripcion:
          'Siempre la pasamos en familia: hacemos actividades de playa y nos atrevemos a todo, ¡hasta mi primo se atreve a pescar! Cada vez que vamos, la casa de mi tío Arturo es más rústica y sorprendente, construida a mano. Es la clase de playa cómoda a la que siempre queremos volver.',
      },
      {
        tipo: 'foto',
        titulo: 'Como una famosa',
        url: pacasmayo('imagen3.jpg'),
        descripcion:
          'Donde fueron muchos famosos: mi hermosa madre posando en una de las casas más grandes que hay, y al lado está el hotel más caro que hemos visto. Ojalá algún día podamos hospedarnos ahí y conocer a los gringos. Mientras tanto, la foto en la escalera sale gratis y queda igual de elegante.',
      },
      {
        tipo: 'foto',
        titulo: 'Color de Pacasmayo',
        url: pacasmayo('imagen4.jpg'),
        descripcion:
          'Colorido, playero, soleado y con más cosas por explorar. Vemos cómo la ciudad crece cada vez más, ¡y todavía nos falta conocer el faro! De vacaciones vamos a pasarlo genial; la próxima prometemos subir al faro y quedarnos hasta el atardecer.',
      },
      {
        tipo: 'foto',
        titulo: 'La sazón de la tía Rosita',
        url: pacasmayo('imagen5.jpg'),
        descripcion:
          'La casa de mi tío Arturo es una de las más sorprendentes que hay. La pasamos tan bien en familia con mi tía Rosita: su sazón es única y tan rústica que cocina a la antigua un pez recién pescado. Todo natural, como debe ser: cero grasa. Y con esa sazón, hasta el que no come pescado repite.',
      },
    ],
  },
  {
    id: 'puntasal',
    titulo: 'Punta Sal',
    fecha: 'El Decameron y sus recuerdos',
    lugar: 'Punta Sal, Tumbes',
    portada: puntasal('portada.jpg'),
    fotos: [
      {
        tipo: 'foto',
        titulo: 'Como buenos pitucos',
        url: puntasal('imagen1.jpg'),
        descripcion:
          '¡El Decameron! Fuimos como buenos pitucos más de dos veces: de las mejores actividades y lugares para pasar el tiempo, con actividades tan finas y experiencias de gente con plata. De las mejores vacaciones que hemos tenido; una lástima que solo hayan sido pocos días. Pero pocos días bien aprovechados valen más que una semana aburrida.',
      },
      {
        tipo: 'foto',
        titulo: 'Las promos y Halloween',
        url: puntasal('imagen2.jpg'),
        descripcion:
          'Pasamos las dos promos: dos mías y una de tu hija. ¿Te imaginas que vayamos a la promo de tu hija para cerrar el año otra vez? Jaja, no nos aburrimos y ya conocemos todo. Pasamos muchos eventos, y Halloween fue el mejor: muy bien ambientado. Ya nos sabemos el recorrido, pero igual caemos con disfraz.',
      },
      {
        tipo: 'foto',
        titulo: 'Ceviche y madrugada',
        url: puntasal('imagen3.jpg'),
        descripcion:
          'Pescamos, comimos ceviche con la propia pesca y disfrutamos hasta la madrugada. ¡Que no falten los zorros que había! De las mejores actividades, donde dormir es la peor opción. El mar, la caña y la paciencia: la combinación perfecta para no querer volver a la habitación.',
      },
      {
        tipo: 'foto',
        titulo: 'Aloha nocturno',
        url: puntasal('imagen4.jpg'),
        descripcion:
          'De noche es espectacular: de los mejores ambientes, ¡aloha! Experiencia hasta con shows. Imagínate ir con tus amigas una noche frente al mar o a la piscina, tomando y disfrutando. Aquí la noche no se duerme, se disfruta.',
      },
      {
        tipo: 'foto',
        titulo: 'Los shampoos de mi hermana',
        url: puntasal('imagen5.jpg'),
        descripcion:
          'Mi hermana y sus shampoos: siempre que puede se lleva miles, algunos con agua de allá y otros con piedritas. ¡Que no falte la esencia! Aquí la vemos recuperando energía después del sol, con la maleta llena de recuerdos (y de botellitas).',
      },
      {
        tipo: 'foto',
        titulo: 'Zona VIP',
        url: puntasal('imagen6.webp'),
        descripcion:
          'Aunque hayamos ido en situaciones especiales y no fuimos a la mera ciudad, es una de las mejores experiencias de pocos días. Me alegra que tus hijos la hayan podido pasar bien; esperemos que la próxima vez la pasemos en familia, ¡y en zona VIP! Con cuatrimoto incluida, el plan ya se veía prometedor.',
      },
    ],
  },
  {
    id: 'malabrigo',
    titulo: 'Puerto Malabrigo',
    fecha: 'Olas largas y buena comida',
    lugar: 'Puerto Malabrigo, La Libertad',
    portada: malabrigo('portada.jpg'),
    fotos: [
      {
        tipo: 'foto',
        titulo: 'Las olas más largas',
        url: malabrigo('imagen1.jpg'),
        descripcion:
          'De las mejores playas, con las olas más largas del norte. ¡Uno de los lugares donde no ir a la playa es ilegal! Hasta nos hospedamos en uno de los mejores hoteles y comimos riquísimo. El sonido del mar apenas deja dormir, pero vale la pena.',
      },
      {
        tipo: 'foto',
        titulo: 'Sol hasta la noche',
        url: malabrigo('imagen2.jpg'),
        descripcion:
          '¡Que el sol no falte! Podemos pasar horas soleándonos, y la playa y el agua están tan frescas que te quedas ahí hasta la noche. Eso sí, el bloqueador es opcional… hasta que arde la piel.',
      },
      {
        tipo: 'foto',
        titulo: 'Ambiente surfista',
        url: malabrigo('imagen3.jpg'),
        descripcion:
          '¡Investigando hasta lo más profundo! No es tan grande, pero está tan bien ambientado para los surfistas que siempre va a haber hasta un hotel dedicado únicamente a ellos. Probando la comida típica del país y su rica Inca Kola. Aquí hasta el que no surfea se siente parte del ambiente.',
      },
      {
        tipo: 'foto',
        titulo: 'Piscina y descanso',
        url: malabrigo('imagen4.jpg'),
        descripcion:
          '¡Vacaciones merecidas! Después de largas jornadas laborales atendiendo la casa, toca hospedarse en un buen hotel. ¿Para qué ir a la playa si tienes piscina? Aunque el mar esté a unos pasos, la piscina gana por comodidad.',
      },
      {
        tipo: 'foto',
        titulo: 'Piel quemada y buenos recuerdos',
        url: malabrigo('imagen5.jpg'),
        descripcion:
          'Desde muy pequeños fuimos y siempre aprovechamos al máximo, como nos encantan las playas. ¡Y luego, porque estamos con la piel quemada! La foto con el barco varado es obligatoria; el color de la piel, opcional.',
      },
    ],
  },
  {
    id: 'tembladera',
    titulo: 'Tembladera',
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
