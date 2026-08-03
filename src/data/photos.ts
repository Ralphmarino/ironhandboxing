/**
 * Photo catalogue.
 *
 * Every entry is a real gym photo, optimized from the originals in Google Drive
 * (2000px max, jpg + webp) via `npm run photos`. Width/height are the actual
 * output dimensions, they're set on the <img> tags to reserve space and stop
 * layout shift while images load.
 *
 * ⚠️ ALT TEXT: written from what is visible in each photo. Where people are
 * recognisable they are described, not named, except Coach Ian, whose photo
 * came named. If you want members or coaches named in the alt text, tell me who
 * is who and I'll update it. Alt text is what image search reads, so it is
 * worth getting right.
 */

export type Photo = {
  src: string;
  alt: string;
  /**
   * Spanish alt text. Not optional in practice: an image with English alt text
   * on a Spanish page is a worse experience for exactly the people the page is
   * for, and it is what Google reads for image search.
   */
  altEs?: string;
  width: number;
  height: number;
  /** Mosaic sizing on the gallery page. */
  span?: 'wide' | 'tall';
  /**
   * `object-position` for the fixed-ratio cards that crop this photo. Tall
   * portraits forced into a 16:10 card default to a centre crop, which on a
   * standing shot lands on torsos and cuts the faces off.
   */
  focal?: string;
};

export const photos = {
  coachIan: {
    src: '/photos/coach-ian.jpg',
    alt: 'Coach Ian Sampaga working the pads at Ironhand Boxing in Staten Island',
    altEs: 'El Coach Ian Sampaga trabajando las manoplas en Ironhand Boxing, Staten Island',
    width: 642,
    height: 802,
  },
  ringPortrait: {
    src: '/photos/boxer-ring-portrait.jpg',
    alt: 'An Ironhand fighter in the ring between rounds during an amateur bout',
    altEs: 'Un boxeador de Ironhand en el ring entre rounds durante una pelea amateur',
    width: 1122,
    height: 1402,
  },
  amateurBout: {
    src: '/photos/amateur-bout-headgear.jpg',
    alt: 'Two amateur boxers in headgear trading punches during a sanctioned bout',
    altEs: 'Dos boxeadores amateur con casco intercambiando golpes en una pelea oficial',
    width: 1290,
    height: 940,
    span: 'wide',
  },
  fighterPortrait: {
    src: '/photos/fighter-portrait-red-singlet.jpg',
    alt: 'An Ironhand amateur boxer in a red competition singlet with wrapped hands',
    altEs: 'Un boxeador amateur de Ironhand con camiseta roja de competencia y las manos vendadas',
    width: 1290,
    height: 2536,
    span: 'tall',
  },
  coachMittWork: {
    src: '/photos/coach-mitt-work-youth.jpg',
    alt: 'A coach holding mitts for a young boxer in competition kit at Ironhand Boxing',
    altEs: 'Un entrenador sosteniendo las manoplas para un joven boxeador con uniforme de competencia en Ironhand Boxing',
    width: 768,
    height: 960,
  },
  youthMittWork: {
    src: '/photos/youth-mitt-work.jpg',
    alt: 'A young Ironhand boxer throwing a straight right on the mitts with his coach',
    altEs: 'Un joven boxeador de Ironhand tirando una derecha recta en las manoplas con su entrenador',
    width: 768,
    height: 960,
  },
  gloveCloseup: {
    src: '/photos/glove-work-closeup.jpg',
    alt: 'Close-up of boxing gloves during pad work on the mats at Ironhand Boxing',
    altEs: 'Primer plano de unos guantes de boxeo durante el trabajo de manoplas sobre las colchonetas de Ironhand Boxing',
    width: 720,
    height: 1078,
  },
  memberTraining: {
    src: '/photos/member-training-gloves.jpg',
    alt: 'An Ironhand member gloved up and ready to train on the gym floor',
    altEs: 'Un miembro de Ironhand con los guantes puestos, listo para entrenar en el piso del gimnasio',
    width: 720,
    height: 1078,
  },
  bagPortrait: {
    src: '/photos/boxer-heavy-bag-portrait.jpg',
    alt: 'A boxer squaring up to the heavy bag during an evening class',
    altEs: 'Un boxeador frente al saco pesado durante una clase de la tarde',
    width: 720,
    height: 1078,
  },
  gymFloor: {
    src: '/photos/gym-floor-wide.jpg',
    alt: 'The main training floor at Ironhand Boxing, 1230 Castleton Avenue, Staten Island',
    altEs: 'El piso principal de entrenamiento de Ironhand Boxing, 1230 Castleton Avenue, Staten Island',
    width: 2000,
    height: 1500,
    span: 'wide',
  },
  heavyBags: {
    src: '/photos/heavy-bags-and-double-end.jpg',
    alt: 'Heavy bags and a double-end bag on the training floor at Ironhand Boxing',
    altEs: 'Sacos pesados y un saco de doble extremo en el piso de entrenamiento de Ironhand Boxing',
    width: 2000,
    height: 2667,
    span: 'tall',
  },
  bagRow: {
    src: '/photos/heavy-bag-row.jpg',
    alt: 'The row of heavy bags along the wall at Ironhand Boxing in Staten Island',
    altEs: 'La fila de sacos pesados a lo largo de la pared en Ironhand Boxing, Staten Island',
    width: 2000,
    height: 2667,
    span: 'tall',
  },
  bagsWall: {
    src: '/photos/gym-bags-wall.jpg',
    alt: 'Heavy bags and fight photographs lining the wall at Ironhand Boxing',
    altEs: 'Sacos pesados y fotografías de peleas cubriendo la pared de Ironhand Boxing',
    width: 2000,
    height: 2667,
  },
  cage: {
    src: '/photos/training-cage.jpg',
    alt: 'The training cage at Ironhand Boxing in Staten Island',
    altEs: 'La jaula de entrenamiento de Ironhand Boxing en Staten Island',
    width: 2000,
    height: 1500,
    span: 'wide',
  },
  guests: {
    src: '/photos/joey-diaz-frankie-edgar-mark.jpg',
    alt: 'Ironhand coach Mark Molina with comedian Joey Diaz and UFC Hall of Famer Frankie Edgar',
    altEs: 'Mark Molina, entrenador de Ironhand, junto al comediante Joey Diaz y a Frankie Edgar, miembro del Salón de la Fama de UFC',
    width: 1440,
    height: 1914,
  },
  featured: {
    src: '/photos/as-featured-on-joey-diaz-instagram.jpg',
    alt: 'Joey Diaz sharing Ironhand Boxing’s post to his Instagram story',
    altEs: 'Joey Diaz compartiendo la publicación de Ironhand Boxing en su historia de Instagram',
    width: 640,
    height: 1153,
  },

  /* ---- Second batch ---- */
  teamAtMSG: {
    src: '/photos/team-at-madison-square-garden.jpg',
    alt: 'Ironhand fighters and families at Madison Square Garden',
    altEs: 'Boxeadores y familias de Ironhand en el Madison Square Garden',
    width: 642,
    height: 802,
  },
  teenGuardUp: {
    src: '/photos/teen-guard-up.jpg',
    alt: 'A teenage boxer holding his guard during a class at Ironhand Boxing',
    altEs: 'Un boxeador adolescente manteniendo la guardia durante una clase en Ironhand Boxing',
    width: 720,
    height: 1078,
  },
  youthBag: {
    src: '/photos/youth-heavy-bag.jpg',
    alt: 'A young Ironhand member working the heavy bag',
    altEs: 'Un joven miembro de Ironhand trabajando el saco pesado',
    width: 1512,
    height: 1890,
    span: 'tall',
  },
  jumpRope: {
    src: '/photos/jump-rope-conditioning.jpg',
    alt: 'Members skipping rope during conditioning at Ironhand Boxing',
    altEs: 'Miembros saltando la cuerda durante el acondicionamiento en Ironhand Boxing',
    width: 720,
    height: 1078,
  },
  speedBag: {
    src: '/photos/speed-bag-work.jpg',
    alt: 'Speed bag work on the gym floor at Ironhand Boxing',
    altEs: 'Trabajo de pera veloz en el piso del gimnasio de Ironhand Boxing',
    width: 720,
    height: 1078,
  },
  coachPadWork: {
    src: '/photos/coach-pad-work.jpg',
    alt: 'A coach gloved up and working pads at Ironhand Boxing',
    altEs: 'Un entrenador con los guantes puestos trabajando las manoplas en Ironhand Boxing',
    width: 642,
    height: 802,
  },
  /**
   * Photos removed at the client's request, do not restore without asking:
   * ringside-corner, corner-between-rounds, fighters-in-the-ring,
   * amateur-show-ringside, kids-class-group.
   */
  fightersProgram: {
    src: '/photos/fighters-program.jpg',
    alt: 'An Ironhand fighter with his championship belt alongside his coach after a bout',
    altEs: 'Un boxeador de Ironhand con su cinturón de campeón junto a su entrenador después de una pelea',
    width: 1320,
    height: 2346,
    span: 'tall',
    // A standing full-length shot. Centred, the card frame lands between chin
    // and knees. This pulls it up to head-and-belt.
    focal: 'center 37%',
  },
  afterTheBout: {
    src: '/photos/fighters-after-the-bout.jpg',
    alt: 'An Ironhand fighter with teammates after a bout',
    altEs: 'Un boxeador de Ironhand con sus compañeros de equipo después de una pelea',
    width: 1020,
    height: 1020,
  },
  /* ---- Uploaded directly (too large for the Drive connector) ---- */
  teamPhoto: {
    src: '/photos/group-photo-ironhand-gym.jpg',
    alt: 'The Ironhand Boxing community, adults and kids together on the gym floor in Staten Island',
    altEs: 'La comunidad de Ironhand Boxing, adultos y niños juntos en el piso del gimnasio en Staten Island',
    width: 2000,
    height: 1500,
    span: 'wide',
  },
  kidsStance: {
    src: '/photos/kids-classes.jpg',
    alt: 'Three young Ironhand members holding their boxing stance during the Kids & Teens class',
    altEs: 'Tres jóvenes miembros de Ironhand manteniendo su guardia durante la clase de Niños y Adolescentes',
    width: 2000,
    height: 2667,
    span: 'tall',
  },
  personalSession: {
    src: '/photos/personal-sessions.jpg',
    alt: 'A one-on-one personal session on the mitts at Ironhand Boxing',
    altEs: 'Una sesión personal uno a uno en las manoplas en Ironhand Boxing',
    width: 768,
    height: 960,
  },

  kidsPunch: {
    src: '/photos/kids-class-punch.jpg',
    alt: 'A young Ironhand member throwing a punch on the pads during the Kids & Teens class',
    altEs: 'Un joven miembro de Ironhand tirando un golpe en las manoplas durante la clase de Niños y Adolescentes',
    width: 1284,
    height: 1593,
  },

  betweenRounds: {
    src: '/photos/boxer-between-rounds.jpg',
    alt: 'An Ironhand boxer catching their breath during training',
    altEs: 'Un boxeador de Ironhand recuperando el aliento durante el entrenamiento',
    width: 720,
    height: 1078,
  },
} as const satisfies Record<string, Photo>;

/**
 * Order shown on /gallery/, deliberately interleaved so the mosaic mixes
 * orientations and subjects rather than clustering all the gym interiors or
 * all the kids' shots together.
 */
export const galleryPhotos: Photo[] = [
  photos.teamPhoto,
  photos.fighterPortrait,
  photos.fightersProgram,
  photos.kidsStance,
  photos.gymFloor,
  photos.coachMittWork,
  photos.heavyBags,
  photos.memberTraining,
  photos.speedBag,
  photos.amateurBout,
  photos.youthMittWork,
  photos.kidsPunch,
  photos.teenGuardUp,
  photos.bagsWall,
  photos.gloveCloseup,
  photos.youthBag,
  photos.cage,
  photos.jumpRope,
  photos.bagPortrait,
  photos.teamAtMSG,
  photos.bagRow,
  photos.afterTheBout,
  photos.ringPortrait,
  photos.coachPadWork,
  photos.betweenRounds,
  photos.guests,
];
