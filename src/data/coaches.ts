export type Coach = {
  name: string;
  role: string;
  instagram?: string;
  handle?: string;
  image: string;
  bio: string;
  credentials?: string[];
};

export const coaches: Coach[] = [
  {
    name: 'Ian Sampaga',
    role: 'Founder & Head Coach',
    image: '/example.png',
    bio: 'Ian founded Ironhand to serve, influence and inspire the Staten Island community through world-class boxing training. He built the gym around a simple idea: everyone gets the same attention, whether it is their first day or their tenth fight. His commitment to the sport is what put Ironhand on the map — and what keeps people coming back.',
  },
  {
    name: 'Carlos Cartagena',
    role: 'Coach',
    instagram: 'https://www.instagram.com/cartagena3325',
    handle: '@cartagena3325',
    image: '/example.png',
    bio: 'Carlos brings his own roster and his own approach to the Ironhand floor, coaching members one-on-one and in small groups out of the Castleton Avenue gym.',
  },
  {
    name: 'Arianne Elshawarby',
    role: 'Coach · USA Boxing Silver',
    instagram: 'https://www.instagram.com/arianneelshawarby',
    handle: '@arianneelshawarby',
    image: '/example.png',
    bio: 'An active open-class amateur and a certified coach who works corners as well as she works mitts — Arianne coaches from inside the sport, not beside it.',
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
    image: '/example.png',
    bio: 'Ian’s protégé. Mark came up through Ironhand as a student and now coaches on the same floor he learned on — which is exactly why newer members gravitate to him.',
  },
  {
    name: 'Emmanuel',
    role: 'Coach',
    instagram: 'https://www.instagram.com/popeyes_emma13',
    handle: '@popeyes_emma13',
    image: '/example.png',
    bio: 'Another product of the Ironhand program, Emmanuel helps run the floor and works with members building their fundamentals.',
  },
];
