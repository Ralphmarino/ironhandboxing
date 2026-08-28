export type Faq = {
  q: string;
  a: string;
  qEs: string;
  aEs: string;
  /** Grouping used by the FAQ page filter chips. */
  group: FaqGroup;
};

export type FaqGroup =
  | 'Getting Started'
  | 'Classes'
  | 'Membership'
  | 'Kids & Teens'
  | 'Competing'
  | 'Visiting';

/** Filter chip labels on the FAQ page. */
export const groupLabelEs: Record<FaqGroup, string> = {
  'Getting Started': 'Para Empezar',
  Classes: 'Clases',
  Membership: 'Membresías',
  'Kids & Teens': 'Niños y Adolescentes',
  Competing: 'Competencia',
  Visiting: 'Visítanos',
};

/**
 * The first six entries are carried over from the live WordPress FAQ page and
 * keep their original question wording, which is what ranks. The rest are new,
 * written to capture the questions people actually search locally ("boxing gym
 * near me", "do I need to spar", "how much are boxing classes") and the kind of
 * direct, factual answers AI search engines quote.
 *
 * ⚠️ PRICING RECONCILED: the live FAQ still quoted the old rates ($120/week
 * tier, sessions with "Coach Ian & Gary"). Those answers have been updated to
 * the current pricing in src/data/pricing.ts.
 * If any of the current numbers are wrong, fix pricing.ts and these answers
 * together, never let the two disagree on a live page.
 */
export const faqs: Faq[] = [
  {
    group: 'Getting Started',
    q: 'What Makes Ironhand Boxing Stand Out Among Staten Island Boxing Gyms?',
    a: 'Ironhand Boxing is unique on Staten Island for its comprehensive boxing training tailored to all levels, from beginners to professional fighters. Founded by Ian Sampaga, a passionate advocate for boxing, Ironhand offers a mix of proper technique training, personalized mitt work, bag work, and fitness exercises designed for optimal results. Our diverse class schedule and personal session options with experienced coaches ensure that every member receives world-class training tailored to their needs.',
    qEs: '¿Qué hace diferente a Ironhand Boxing entre los gimnasios de boxeo de Staten Island?',
    aEs: 'Ironhand Boxing es único en Staten Island por su entrenamiento de boxeo completo y adaptado a todos los niveles, desde principiantes hasta peleadores profesionales. Fundado por Ian Sampaga, un apasionado del boxeo, Ironhand combina entrenamiento de técnica correcta, trabajo de manoplas personalizado, saco y ejercicios de acondicionamiento diseñados para dar resultados. Nuestro horario variado de clases y las opciones de sesiones personales con entrenadores con experiencia aseguran que cada miembro reciba entrenamiento de primer nivel hecho a su medida.',
  },
  {
    group: 'Getting Started',
    q: 'Can Beginners Join Ironhand Boxing, and What Should They Expect?',
    a: 'Absolutely! Ironhand Boxing welcomes individuals of all skill levels. Beginners can expect an inviting and supportive environment where they’ll learn the fundamentals of boxing, including stance, movement, punches, and defense. Our structured classes also incorporate fitness exercises to build the physical conditioning necessary for boxing, ensuring a well-rounded introduction to the sport.',
    qEs: '¿Pueden entrar principiantes a Ironhand Boxing, y qué pueden esperar?',
    aEs: 'Por supuesto. Ironhand Boxing recibe a personas de todos los niveles. Un principiante puede esperar un ambiente acogedor y de apoyo donde aprenderá los fundamentos del boxeo: la guardia, el desplazamiento, los golpes y la defensa. Nuestras clases estructuradas también incluyen ejercicios de acondicionamiento para construir la condición física que el boxeo pide, así que la introducción al deporte es completa.',
  },
  {
    group: 'Competing',
    q: 'How Does Ironhand Boxing Accommodate Experienced Fighters?',
    a: 'Experienced fighters will find Ironhand Boxing’s training sessions both challenging and rewarding. We offer advanced techniques, sparring sessions, and personalized feedback to refine your skills and strategy. Our Fighters Program runs Monday, Tuesday, Wednesday and Friday at 7:00 PM for registered competitors, and our coaches provide targeted preparation for amateur competition, technique, strategy and physical conditioning.',
    qEs: '¿Cómo trabaja Ironhand Boxing con peleadores con experiencia?',
    aEs: 'Un peleador con experiencia encontrará en Ironhand Boxing sesiones exigentes y que valen la pena. Ofrecemos técnicas avanzadas, sesiones de sparring y correcciones personalizadas para afinar tu nivel y tu estrategia. Nuestro Programa de Competidores corre lunes, martes, miércoles y viernes a las 7:00 PM para competidores registrados, y nuestros entrenadores preparan de forma específica para la competencia amateur: técnica, estrategia y condición física.',
  },
  {
    group: 'Membership',
    q: 'What Are the Personal Session Options at Ironhand Boxing?',
    a: 'Ironhand Boxing offers a variety of personal session options to meet different needs and schedules. One-on-one training with Coach Ian is $180 for two sessions, and Wednesdays and Thursdays are set aside for them. Coach Ian books personal sessions in pairs only, he does not run single sessions, so the two session block is the entry point. We also offer virtual training, $45 for a 1-on-1 virtual session and $25 for a small group virtual session, so there are options for every budget and goal.',
    qEs: '¿Qué opciones de sesiones personales hay en Ironhand Boxing?',
    aEs: 'Ironhand Boxing ofrece varias opciones de sesiones personales para distintas necesidades y horarios. El entrenamiento uno a uno con el Coach Ian cuesta $180 por dos sesiones, y los miércoles y jueves quedan reservados para ellas. El Coach Ian solo agenda sesiones personales en pares, no da sesiones sueltas, así que el bloque de dos sesiones es el punto de entrada. También ofrecemos entrenamiento virtual: $45 la sesión uno a uno y $25 la sesión en grupo pequeño, para que haya opciones para cada presupuesto y cada objetivo.',
  },
  {
    group: 'Membership',
    q: 'What Membership Options Does Ironhand Boxing Provide?',
    a: 'Our membership packages are designed to accommodate varying training needs and schedules. From 1 day per week at $125 to 5 days per week at $250, which includes two personal sessions per month, we offer flexible pricing to fit your lifestyle. There is also a family rate of $150 per student for two or more kids. Each package provides access to our full range of classes.',
    qEs: '¿Qué opciones de membresía ofrece Ironhand Boxing?',
    aEs: 'Nuestros paquetes de membresía están armados para distintas necesidades y horarios. Van desde 1 día por semana a $125 hasta 5 días por semana a $250, que incluye dos sesiones personales al mes. También hay una tarifa familiar de $150 por estudiante para dos o más niños. Cada paquete da acceso a toda nuestra oferta de clases.',
  },
  {
    group: 'Getting Started',
    q: 'How Can I Start Training at Ironhand Boxing?',
    a: 'Getting started is easy! You can visit us at our location at 1230 Castleton Ave, Staten Island, NY 10310, or contact us at 347.499.4133 to speak with our team. Whether you’re interested in joining a class, booking a personal session, or just have more questions, we’re here to help you begin your boxing journey.',
    qEs: '¿Cómo puedo empezar a entrenar en Ironhand Boxing?',
    aEs: 'Empezar es fácil. Puedes visitarnos en 1230 Castleton Ave, Staten Island, NY 10310, o llamarnos al 347.499.4133 para hablar con nuestro equipo. Si prefieres español, llama al 718.619.0468 y te atendemos en tu idioma. Ya sea que quieras unirte a una clase, reservar una sesión personal o simplemente tengas más preguntas, estamos aquí para ayudarte a empezar.',
  },

  /* ---- Added for search and AI answer coverage ---- */
  {
    group: 'Visiting',
    q: 'Where is Ironhand Boxing located on Staten Island?',
    a: 'Ironhand Boxing is at 1230 Castleton Avenue, Staten Island, NY 10310, in Port Richmond. There is street parking on Castleton Avenue, and we are reachable by the S46 and S48 bus routes. Call 347.499.4133 if you need directions.',
    qEs: '¿Dónde queda Ironhand Boxing en Staten Island?',
    aEs: 'Ironhand Boxing está en 1230 Castleton Avenue, Staten Island, NY 10310, en Port Richmond. Hay estacionamiento en la calle sobre Castleton Avenue, y se llega en las rutas de autobús S46 y S48. Llama al 347.499.4133 si necesitas indicaciones, o al 718.619.0468 si prefieres hablar en español.',
  },
  {
    group: 'Visiting',
    q: 'What are your class times?',
    a: 'Group classes run seven days a week: Sunday, Monday and Tuesday at 6:00 PM, Thursday at 11:00 AM, Friday at 6:00 PM, and Saturday at 12:00 PM. Kids & Teens run Wednesday at 4:00 PM and Friday at 5:00 PM. Women’s Boxing is Saturday at 11:00 AM. The Fighters Program runs Monday, Tuesday, Wednesday and Friday at 7:00 PM. We also run a group run on Thursdays at 8:00 PM, which meets at Clove Lakes Park rather than the gym.',
    qEs: '¿Cuáles son los horarios de las clases?',
    aEs: 'Las clases grupales corren los siete días de la semana: domingo, lunes y martes a las 6:00 PM, jueves a las 11:00 AM, viernes a las 6:00 PM y sábado a las 12:00 PM. Niños y Adolescentes es miércoles a las 4:00 PM y viernes a las 5:00 PM. Boxeo para Mujeres es sábado a las 11:00 AM. El Programa de Competidores corre lunes, martes, miércoles y viernes a las 7:00 PM. También tenemos una carrera grupal los jueves a las 8:00 PM, que se reúne en Clove Lakes Park y no en el gimnasio.',
  },
  {
    group: 'Getting Started',
    q: 'Do I need any experience to start boxing?',
    a: 'No. A large share of our members had never thrown a punch before walking in. Classes are structured so beginners drill fundamentals while experienced boxers work at their own level, on the same floor, at the same time.',
    qEs: '¿Necesito experiencia para empezar a boxear?',
    aEs: 'No. Buena parte de nuestros miembros nunca había tirado un golpe antes de entrar. Las clases están armadas para que los principiantes trabajen los fundamentos mientras los boxeadores con experiencia trabajan a su propio nivel, en el mismo piso y al mismo tiempo.',
  },
  {
    group: 'Getting Started',
    q: 'What should I bring to my first boxing class?',
    a: 'Athletic clothes you can move in, boxing shoes, water and a towel. We will get you set up with gloves and wraps for your first session, so do not go buying equipment before you come. Once you know you are staying, a coach will tell you what is actually worth spending money on.',
    qEs: '¿Qué llevo a mi primera clase de boxeo?',
    aEs: 'Ropa deportiva con la que puedas moverte, zapatillas de boxeo, agua y una toalla. Nosotros te prestamos guantes y vendas para tu primera sesión, así que no compres equipo antes de venir. Cuando ya sepas que te vas a quedar, un entrenador te dirá en qué vale la pena gastar.',
  },
  {
    group: 'Getting Started',
    q: 'Is boxing hard?',
    a: 'Boxing is demanding, but it is not out of reach. The footwork and the punches are simple movements taught in a specific order, and every class is scaled to the person doing it. What is hard is the conditioning, and that arrives on its own once you show up consistently. Most people find the first two weeks humbling and the third week addictive.',
    qEs: '¿Es difícil el boxeo?',
    aEs: 'El boxeo es exigente, pero no está fuera de tu alcance. El juego de piernas y los golpes son movimientos sencillos que se enseñan en un orden específico, y cada clase se ajusta a la persona que la está haciendo. Lo duro es la condición física, y esa llega sola en cuanto vienes con constancia. A la mayoría las primeras dos semanas la humillan y la tercera la engancha.',
  },
  {
    group: 'Getting Started',
    q: 'Am I too old to start boxing?',
    a: 'No. We train members well into their fifties and sixties. Boxing is one of the few sports where technique compounds faster than athleticism, which is exactly why it rewards adults who start later.',
    qEs: '¿Estoy muy viejo para empezar a boxear?',
    aEs: 'No. Entrenamos a miembros que pasan de los cincuenta y de los sesenta. El boxeo es uno de los pocos deportes donde la técnica suma más rápido que el atletismo, que es justo por lo que premia a los adultos que empiezan tarde.',
  },
  {
    group: 'Classes',
    q: 'What happens in a boxing class at Ironhand?',
    a: 'Every class covers proper boxing technique, one-on-one mitt work with a coach, bag work, and conditioning. The mitt work is where the actual coaching happens, no one leaves a class without hands-on time with a coach. Group classes run about an hour.',
    qEs: '¿Qué pasa en una clase de boxeo en Ironhand?',
    aEs: 'Cada clase cubre técnica de boxeo correcta, trabajo de manoplas uno a uno con un entrenador, saco y acondicionamiento. Las manoplas son donde de verdad ocurre la enseñanza: nadie sale de una clase sin haber tenido tiempo directo con un entrenador. Las clases grupales duran alrededor de una hora.',
  },
  {
    group: 'Classes',
    q: 'Will I have to spar or get hit?',
    a: 'Not unless you choose to. Sparring is entirely optional, it only happens with a coach supervising, and it is never a prerequisite for anything. Plenty of our members train for years and never spar a round.',
    qEs: '¿Voy a tener que hacer sparring o recibir golpes?',
    aEs: 'Solo si tú quieres. El sparring es totalmente opcional, siempre se hace con un entrenador supervisando, y nunca es requisito para nada. Muchos de nuestros miembros entrenan durante años y jamás hacen un round de sparring.',
  },
  {
    group: 'Classes',
    q: 'Is boxing a good workout for weight loss?',
    a: 'It is one of the best. Boxing works in rounds, which trains your body to go hard, recover fast and go again. Members have lost anywhere from 20 to 88 pounds training here, and unlike a treadmill, you are learning a skill the whole time, which is why people actually keep showing up.',
    qEs: '¿El boxeo sirve para bajar de peso?',
    aEs: 'Es de los mejores. El boxeo trabaja por rounds, lo que enseña al cuerpo a darlo todo, recuperarse rápido y volver a empezar. Hay miembros que han bajado entre 20 y 88 libras entrenando aquí y, a diferencia de una caminadora, todo el tiempo estás aprendiendo algo, que es la razón real por la que la gente sigue viniendo.',
  },
  {
    group: 'Classes',
    q: 'Do you offer women’s boxing classes?',
    a: 'Yes. Women’s Boxing runs Saturdays at 11:00 AM. Women also train in every other class we run, and one of our coaches, Arianne Elshawarby, is an active open-class female amateur competitor and a Silver Level USA Boxing coach. The Saturday class is a dedicated space to start in; every other session on the schedule is open to everyone at their own level.',
    qEs: '¿Tienen clases de boxeo para mujeres?',
    aEs: 'Sí. Boxeo para Mujeres corre los sábados a las 11:00 AM. Las mujeres además entrenan en todas las demás clases que damos, y una de nuestras entrenadoras, Arianne Elshawarby, es competidora amateur activa en clase abierta y entrenadora de USA Boxing de Nivel Plata. La clase del sábado es un espacio dedicado para empezar; el resto del horario está abierto a todos, cada quien a su nivel.',
  },
  {
    group: 'Membership',
    q: 'How much are boxing classes in Staten Island?',
    a: 'At Ironhand, memberships run from $125 per month for one day a week to $250 per month for five days, which includes two personal sessions. Two days a week is $150, three days is $180, and four days is $220 with one personal session included. Personal training with Coach Ian is $180 for two sessions, booked in pairs rather than as single sessions.',
    qEs: '¿Cuánto cuestan las clases de boxeo en Staten Island?',
    aEs: 'En Ironhand, las membresías van de $125 al mes por un día por semana hasta $250 al mes por cinco días, que incluye dos sesiones personales. Dos días por semana son $150, tres días $180, y cuatro días $220 con una sesión personal incluida. El entrenamiento personal con el Coach Ian es $180 por dos sesiones, que se reservan en pares y no como sesiones sueltas.',
  },
  {
    group: 'Membership',
    q: 'Is there a contract or joining fee?',
    a: 'Memberships are month to month. Come talk to us about what you are trying to accomplish and we will put you on the plan that fits, including a custom one if none of the standard tiers do.',
    qEs: '¿Hay contrato o cuota de inscripción?',
    aEs: 'Las membresías son mes a mes. Ven a contarnos qué quieres lograr y te ponemos en el plan que te sirva, incluido uno hecho a la medida si ninguno de los planes estándar encaja.',
  },
  {
    group: 'Membership',
    q: 'Can I train with a specific coach?',
    a: 'Yes. Members training under one of our coaching staff pay a $125 per month gym fee and arrange the coach’s training rate with that coach directly.',
    qEs: '¿Puedo entrenar con un entrenador en específico?',
    aEs: 'Sí. Quienes entrenan con uno de nuestros entrenadores pagan una cuota de gimnasio de $125 al mes y acuerdan la tarifa del entrenador directamente con él.',
  },
  {
    group: 'Kids & Teens',
    q: 'What age can kids start boxing?',
    a: 'Our Kids & Teens class runs Fridays at 5:00 PM and we have had children start as young as seven. At that age the focus is coordination, discipline and confidence far more than fighting.',
    qEs: '¿Desde qué edad pueden empezar los niños a boxear?',
    aEs: 'Nuestra clase de Niños y Adolescentes corre los viernes a las 5:00 PM y hemos tenido niños que empiezan desde los siete años. A esa edad el enfoque está mucho más en la coordinación, la disciplina y la confianza que en pelear.',
  },
  {
    group: 'Kids & Teens',
    q: 'Is boxing safe for my child?',
    a: 'The youth class is technique and conditioning, pads, bags and footwork. Contact is not part of the program unless a young athlete moves toward competing, and that only happens with a parent involved in the decision.',
    qEs: '¿El boxeo es seguro para mi hijo?',
    aEs: 'La clase juvenil es técnica y acondicionamiento: manoplas, sacos y juego de piernas. El contacto no es parte del programa, salvo que un joven atleta decida ir hacia la competencia, y eso solo pasa con el padre o la madre involucrados en la decisión.',
  },
  {
    group: 'Kids & Teens',
    q: 'Do you offer a family discount?',
    a: 'Yes. The family package is $150 per student per month for two or more kids.',
    qEs: '¿Tienen descuento familiar?',
    aEs: 'Sí. El paquete familiar es de $150 por estudiante al mes para dos o más niños.',
  },
  {
    group: 'Competing',
    q: 'Can I compete as an amateur out of Ironhand?',
    a: 'Yes. Our Fighters Program runs Monday, Tuesday, Wednesday and Friday at 7:00 PM for registered competitors and costs $150 per month. You need your USA Boxing passbook to train in it, and a coach will walk you through registering and getting one.',
    qEs: '¿Puedo competir como amateur representando a Ironhand?',
    aEs: 'Sí. Nuestro Programa de Competidores corre lunes, martes, miércoles y viernes a las 7:00 PM para competidores registrados y cuesta $150 al mes. Necesitas tu libro de USA Boxing para entrenar en él, y un entrenador te guía para registrarte y sacarlo.',
  },
  {
    group: 'Competing',
    q: 'How do I get into the Fighters Program?',
    a: 'Train in the regular classes first. When a coach thinks you are ready, they will tell you, and then we will walk you through registering with USA Boxing and getting your book.',
    qEs: '¿Cómo entro al Programa de Competidores?',
    aEs: 'Primero entrena en las clases regulares. Cuando un entrenador considere que estás listo, te lo va a decir, y de ahí te guiamos para registrarte con USA Boxing y sacar tu libro.',
  },
];
