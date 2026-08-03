export type Coach = {
  name: string;
  role: string;
  instagram?: string;
  handle?: string;
  /** Whose account it is, for cards that cover more than one person. */
  handleNote?: string;
  /** BoxRec professional record. Adds real credibility for a coach who fought. */
  boxrec?: string;
  image: string;
  bio: string;
  credentials?: string[];
};

/**
 * Every portrait here was named for its coach by Ian, then cropped to the 4:5
 * frame the cards use. No placeholders left.
 */
export const coaches: Coach[] = [
  {
    name: 'Ian Sampaga',
    role: 'Founder & Head Coach',
    image: '/photos/coach-ian.jpg',
    bio: 'Ian founded Ironhand to serve, influence and inspire the Staten Island community through world-class boxing training. He built the gym around a simple idea: everyone gets the same attention, whether it is their first day or their tenth fight. His commitment to the sport is what put Ironhand on the map, and what keeps people coming back.',
  },
  {
    name: 'Carlos Cartagena',
    role: 'Coach',
    instagram: 'https://www.instagram.com/cartagena3325',
    handle: '@cartagena3325',
    // Supplied by the client. I could not reach boxrec.com from the build
    // environment to confirm the record it points to, so give it a look before
    // launch.
    boxrec: 'https://boxrec.com/en/box-pro/10828',
    /**
     * ⚠️ AWAITING PHOTO. carlos.png turned out to be someone else, confirmed by
     * Ian, so it has been taken down rather than left captioned with Carlos's
     * name and linked to his professional record. The replacement is
     * IMG_0615.jpeg, which has not reached the repo yet. Drop it in, run it
     * through the same 4:5 treatment as the other portraits, and set this to
     * /photos/coach-carlos.jpg.
     */
    image: '/example.png',
    bio: 'A professional record of his own behind him, Carlos brings his own roster and his own approach to the Ironhand floor, coaching members one-on-one and in small groups out of the Castleton Avenue gym.',
  },
  {
    name: 'Arianne Elshawarby',
    role: 'Coach · USA Boxing Silver',
    instagram: 'https://www.instagram.com/arianneelshawarby',
    handle: '@arianneelshawarby',
    image: '/photos/coach-arianne.jpg',
    bio: 'An active open-class amateur and a certified coach who works corners as well as she works mitts. Arianne coaches from inside the sport, not beside it.',
    credentials: [
      'Silver Level USA Boxing Coach',
      '3+ years of cornerman experience',
      'Open Class Female Amateur Boxer',
      'Ringmasters Semi-Finalist, 2023 & 2024',
      'NJ Masters Champion, 2024',
      'Athlete Representative, USA Boxing Metro Board of Directors',
    ],
  },
  {
    name: 'Mark Molina',
    role: 'Coach',
    instagram: 'https://www.instagram.com/the_prodigy581',
    handle: '@the_prodigy581',
    image: '/photos/coach-mark.jpg',
    bio: 'Ian’s protégé. Mark came up through Ironhand as a student and now coaches on the same floor he learned on, which is exactly why newer members gravitate to him.',
  },
  {
    // Father and son share one card at Ian's request. The Instagram handle is
    // Manny's, which is why the link is labelled with his name.
    name: 'Manny & Raul Sandoval',
    role: 'Coaches',
    instagram: 'https://www.instagram.com/popeyes_emma13',
    handle: '@popeyes_emma13',
    handleNote: 'Manny',
    image: '/photos/coach-manny-raul.jpg',
    bio: 'Emmanuel “Manny” Sandoval is another product of the Ironhand program, helping run the floor and working with members building their fundamentals. His father Raul coaches alongside him. Between the two of them there is almost always a Sandoval in somebody’s corner.',
  },
];
