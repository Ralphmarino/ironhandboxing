/**
 * Photo catalogue.
 *
 * Every entry is a real gym photo, optimized from the originals in Google Drive
 * (2000px max, jpg + webp) via `npm run photos`. Width/height are the actual
 * output dimensions — they're set on the <img> tags to reserve space and stop
 * layout shift while images load.
 *
 * ⚠️ ALT TEXT: written from what is visible in each photo. Where people are
 * recognisable they are described, not named — except Coach Ian, whose photo
 * came named. If you want members or coaches named in the alt text, tell me who
 * is who and I'll update it. Alt text is what image search reads, so it is
 * worth getting right.
 */

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Mosaic sizing on the gallery page. */
  span?: 'wide' | 'tall';
};

export const photos = {
  coachIan: {
    src: '/photos/coach-ian.jpg',
    alt: 'Coach Ian Sampaga working the pads at Ironhand Boxing in Staten Island',
    width: 642,
    height: 802,
  },
  ringPortrait: {
    src: '/photos/boxer-ring-portrait.jpg',
    alt: 'An Ironhand fighter in the ring between rounds during an amateur bout',
    width: 1122,
    height: 1402,
  },
  amateurBout: {
    src: '/photos/amateur-bout-headgear.jpg',
    alt: 'Two amateur boxers in headgear trading punches during a sanctioned bout',
    width: 1290,
    height: 940,
    span: 'wide',
  },
  fightersInRing: {
    src: '/photos/fighters-in-the-ring.jpg',
    alt: 'Three Ironhand boxers with gloves up in the ring after a fight night',
    width: 1358,
    height: 1358,
  },
  fighterPortrait: {
    src: '/photos/fighter-portrait-red-singlet.jpg',
    alt: 'An Ironhand amateur boxer in a red competition singlet with wrapped hands',
    width: 1290,
    height: 2536,
    span: 'tall',
  },
  ringside: {
    src: '/photos/amateur-show-ringside.jpg',
    alt: 'Ringside at an amateur boxing show with Ironhand fighters and their corner',
    width: 2000,
    height: 3556,
    span: 'tall',
  },
  coachMittWork: {
    src: '/photos/coach-mitt-work-youth.jpg',
    alt: 'A coach holding mitts for a young boxer in competition kit at Ironhand Boxing',
    width: 768,
    height: 960,
  },
  youthMittWork: {
    src: '/photos/youth-mitt-work.jpg',
    alt: 'A young Ironhand boxer throwing a straight right on the mitts with his coach',
    width: 768,
    height: 960,
  },
  gloveCloseup: {
    src: '/photos/glove-work-closeup.jpg',
    alt: 'Close-up of boxing gloves during pad work on the mats at Ironhand Boxing',
    width: 720,
    height: 1078,
  },
  memberTraining: {
    src: '/photos/member-training-gloves.jpg',
    alt: 'An Ironhand member gloved up and ready to train on the gym floor',
    width: 720,
    height: 1078,
  },
  bagPortrait: {
    src: '/photos/boxer-heavy-bag-portrait.jpg',
    alt: 'A boxer squaring up to the heavy bag during an evening class',
    width: 720,
    height: 1078,
  },
  gymFloor: {
    src: '/photos/gym-floor-wide.jpg',
    alt: 'The main training floor at Ironhand Boxing, 1230 Castleton Avenue, Staten Island',
    width: 2000,
    height: 1500,
    span: 'wide',
  },
  heavyBags: {
    src: '/photos/heavy-bags-and-double-end.jpg',
    alt: 'Heavy bags and a double-end bag on the training floor at Ironhand Boxing',
    width: 2000,
    height: 2667,
    span: 'tall',
  },
  bagRow: {
    src: '/photos/heavy-bag-row.jpg',
    alt: 'The row of heavy bags along the wall at Ironhand Boxing in Staten Island',
    width: 2000,
    height: 2667,
    span: 'tall',
  },
  bagsWall: {
    src: '/photos/gym-bags-wall.jpg',
    alt: 'Heavy bags and fight photographs lining the wall at Ironhand Boxing',
    width: 2000,
    height: 2667,
  },
  cage: {
    src: '/photos/training-cage.jpg',
    alt: 'The training cage at Ironhand Boxing in Staten Island',
    width: 2000,
    height: 1500,
    span: 'wide',
  },
  guests: {
    src: '/photos/joey-diaz-frankie-edgar-manny.jpg',
    alt: 'Ironhand fighters with comedian Joey Diaz and UFC Hall of Famer Frankie Edgar',
    width: 1440,
    height: 1914,
  },
  featured: {
    src: '/photos/as-featured-on-joey-diaz-instagram.jpg',
    alt: 'Joey Diaz sharing Ironhand Boxing’s post to his Instagram story',
    width: 640,
    height: 1153,
  },
} as const satisfies Record<string, Photo>;

/** Order shown on /gallery/ — mixed orientations so the mosaic stays irregular. */
export const galleryPhotos: Photo[] = [
  photos.gymFloor,
  photos.fighterPortrait,
  photos.coachMittWork,
  photos.fightersInRing,
  photos.heavyBags,
  photos.memberTraining,
  photos.amateurBout,
  photos.ringside,
  photos.youthMittWork,
  photos.bagsWall,
  photos.gloveCloseup,
  photos.cage,
  photos.bagPortrait,
  photos.bagRow,
  photos.ringPortrait,
  photos.guests,
];
