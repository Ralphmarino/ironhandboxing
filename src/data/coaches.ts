export type Coach = {
  name: string;
  role: string;
  roleEs: string;
  instagram?: string;
  handle?: string;
  /** Whose account it is, for cards that cover more than one person. */
  handleNote?: string;
  /** BoxRec professional record. Adds real credibility for a coach who fought. */
  boxrec?: string;
  image: string;
  bio: string;
  bioEs: string;
  credentials?: string[];
  credentialsEs?: string[];
};

/**
 * Every portrait here was named for its coach by Ian, then cropped to the 4:5
 * frame the cards use. No placeholders left.
 */
export const coaches: Coach[] = [
  {
    name: 'Ian Sampaga',
    role: 'Founder & Head Coach',
    roleEs: 'Fundador y Entrenador Principal',
    image: '/photos/coach-ian.jpg',
    bio: 'Ian founded Ironhand to serve, influence and inspire the Staten Island community through world-class boxing training. He built the gym around a simple idea: everyone gets the same attention, whether it is their first day or their tenth fight. His commitment to the sport is what put Ironhand on the map, and what keeps people coming back.',
    bioEs: 'Ian fundó Ironhand para servir, influir e inspirar a la comunidad de Staten Island con entrenamiento de boxeo de primer nivel. Armó el gimnasio sobre una idea sencilla: todos reciben la misma atención, sea su primer día o su décima pelea. Su compromiso con el deporte es lo que puso a Ironhand en el mapa, y lo que hace que la gente vuelva.',
  },
  {
    name: 'Carlos Cartagena',
    role: 'Coach',
    roleEs: 'Entrenador',
    instagram: 'https://www.instagram.com/cartagena3325',
    handle: '@cartagena3325',
    // Supplied by the client. I could not reach boxrec.com from the build
    // environment to confirm the record it points to, so give it a look before
    // launch.
    boxrec: 'https://boxrec.com/en/box-pro/10828',
    // An archive shot from Carlos's fighting days, sent by Ian to replace the
    // photo that turned out to be somebody else. It is a scan, so it is smaller
    // and softer than the other portraits, but the card desaturates at rest and
    // the age of it suits a coach whose record goes back that far.
    image: '/photos/coach-carlos.jpg',
    bio: 'A professional record of his own behind him, Carlos brings his own roster and his own approach to the Ironhand floor, coaching members one-on-one and in small groups out of the Castleton Avenue gym.',
    bioEs: 'Con un récord profesional propio a sus espaldas, Carlos trae su propia cartera de alumnos y su propia forma de trabajar al piso de Ironhand, entrenando uno a uno y en grupos pequeños desde el gimnasio de Castleton Avenue.',
  },
  {
    name: 'Arianne Elshawarby',
    role: 'Coach · USA Boxing Silver',
    roleEs: 'Entrenadora · USA Boxing Nivel Plata',
    instagram: 'https://www.instagram.com/arianneelshawarby',
    handle: '@arianneelshawarby',
    image: '/photos/coach-arianne.jpg',
    bio: 'An active open-class amateur and a certified coach who works corners as well as she works mitts. Arianne coaches from inside the sport, not beside it.',
    bioEs: 'Boxeadora amateur activa en clase abierta y entrenadora certificada, tan buena en la esquina como con las manoplas. Arianne entrena desde dentro del deporte, no desde afuera.',
    credentials: [
      'Silver Level USA Boxing Coach',
      '3+ years of cornerman experience',
      'Open Class Female Amateur Boxer',
      'Ringmasters Semi-Finalist, 2023 & 2024',
      'NJ Masters Champion, 2024',
      'Athlete Representative, USA Boxing Metro Board of Directors',
    ],
    credentialsEs: [
      'Entrenadora de USA Boxing, Nivel Plata',
      'Más de 3 años de experiencia en la esquina',
      'Boxeadora amateur femenina de clase abierta',
      'Semifinalista de Ringmasters, 2023 y 2024',
      'Campeona NJ Masters, 2024',
      'Representante de atletas, junta directiva de USA Boxing Metro',
    ],
  },
  {
    name: 'Mark Molina',
    role: 'Coach',
    roleEs: 'Entrenador',
    instagram: 'https://www.instagram.com/the_prodigy581',
    handle: '@the_prodigy581',
    image: '/photos/coach-mark.jpg',
    bio: 'Ian’s protégé. Mark came up through Ironhand as a student and now coaches on the same floor he learned on, which is exactly why newer members gravitate to him.',
    bioEs: 'El pupilo de Ian. Mark se formó en Ironhand como alumno y hoy entrena en el mismo piso donde aprendió, que es justo por lo que los miembros nuevos se acercan a él.',
  },
  {
    // Father and son share one card at Ian's request. The Instagram handle is
    // Manny's, which is why the link is labelled with his name.
    name: 'Manny & Raul Sandoval',
    role: 'Coaches',
    roleEs: 'Entrenadores',
    instagram: 'https://www.instagram.com/popeyes_emma13',
    handle: '@popeyes_emma13',
    handleNote: 'Manny',
    image: '/photos/coach-manny-raul.jpg',
    bio: 'Emmanuel “Manny” Sandoval is another product of the Ironhand program, helping run the floor and working with members building their fundamentals. His father Raul coaches alongside him. Between the two of them there is almost always a Sandoval in somebody’s corner.',
    bioEs: 'Emmanuel “Manny” Sandoval es otro producto del programa de Ironhand: ayuda a llevar el piso y trabaja con los miembros que están armando sus fundamentos. Su padre, Raul, entrena junto a él. Entre los dos, casi siempre hay un Sandoval en la esquina de alguien.',
  },
];
