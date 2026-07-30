export type Faq = {
  q: string;
  a: string;
  /** Grouping used by the FAQ page filter chips. */
  group: 'Getting Started' | 'Classes' | 'Membership' | 'Kids & Teens' | 'Competing';
};

/**
 * ⚠️ REPLACE WITH THE LIVE ANSWERS.
 *
 * These questions mirror the structure of /frequently-asked-questions/ on the
 * WordPress site, but the answers below were written fresh — the live copy
 * could not be fetched during the build. Swap each `a` for the real answer
 * before launch and the page needs no other changes.
 *
 * Keep the "Is boxing hard?" entry. The current site ranks #1 nationally for
 * that query, so the question wording is worth preserving exactly.
 */
export const faqs: Faq[] = [
  {
    group: 'Getting Started',
    q: 'Is boxing hard?',
    a: 'Boxing is demanding, but it is not out of reach. The footwork and the punches are simple movements taught in a specific order, and every class is scaled to the person doing it. What is hard is the conditioning — and that arrives on its own once you show up consistently. Most people find the first two weeks humbling and the third week addictive.',
  },
  {
    group: 'Getting Started',
    q: 'Do I need any experience to start?',
    a: 'None. A large share of our members had never thrown a punch before walking in. Classes are structured so beginners drill fundamentals while experienced members work at their own level, on the same floor, at the same time.',
  },
  {
    group: 'Getting Started',
    q: 'What should I bring to my first class?',
    a: 'Athletic clothes you can move in, sneakers, water, and a towel. We will get you set up with gloves and wraps for your first session — once you know you are staying, we will point you at the right gear to buy rather than letting you overspend on day one.',
  },
  {
    group: 'Getting Started',
    q: 'Am I too old to start boxing?',
    a: 'No. We train members well into their fifties and sixties. Boxing is one of the few sports where technique compounds faster than athleticism, which is exactly why it rewards adults who start later.',
  },
  {
    group: 'Classes',
    q: 'What happens in a class?',
    a: 'Every class covers proper boxing technique, one-on-one mitt work with a coach, bag work, and conditioning. That combination is deliberate — the mitt work is where the coaching actually happens, and no one leaves a class without getting hands-on time.',
  },
  {
    group: 'Classes',
    q: 'How long is a class?',
    a: 'Group classes run about an hour. Personal sessions are a full hour one-on-one.',
  },
  {
    group: 'Classes',
    q: 'Will I get hit?',
    a: 'Not unless you choose to. Sparring is entirely optional, it happens only with a coach supervising, and it is never a prerequisite for anything. Plenty of our members train for years and never spar a round.',
  },
  {
    group: 'Classes',
    q: 'Do you offer one-on-one training?',
    a: 'Yes. Personal sessions with Coach Ian run $115 per hour, and Wednesdays and Thursdays are set aside for them. Members on the 4- and 5-day plans get personal sessions included each month.',
  },
  {
    group: 'Membership',
    q: 'How much does it cost?',
    a: 'Memberships run from $125 per month for one day a week up to $250 per month for five days, which includes three personal sessions. There is a family rate of $150 per student for two or more kids. Full pricing is on the homepage.',
  },
  {
    group: 'Membership',
    q: 'Is there a contract?',
    a: 'Memberships are month to month. Come talk to us about what you are trying to accomplish and we will put you on the plan that fits — including a custom one if none of the standard tiers do.',
  },
  {
    group: 'Membership',
    q: 'Can I train with a specific coach?',
    a: 'Yes. Members training under one of our coaching staff pay a $125 per month gym fee, and arrange the coach’s training rate with that coach directly.',
  },
  {
    group: 'Kids & Teens',
    q: 'What age do you start kids?',
    a: 'Our Kids & Teens class runs Fridays at 5:00 PM. We have had children start as young as seven or eight. The focus at that age is coordination, discipline and confidence far more than it is fighting.',
  },
  {
    group: 'Kids & Teens',
    q: 'Is boxing safe for my child?',
    a: 'The youth class is technique and conditioning — pads, bags and footwork. Contact is not part of the program unless a young athlete moves toward competing, and that only happens with a parent involved in the decision.',
  },
  {
    group: 'Competing',
    q: 'Can I compete out of Ironhand?',
    a: 'Yes. Our Fighters Program runs Monday, Tuesday and Wednesday at 7:00 PM for registered competitors and costs $150 per month. You need your USA Boxing book to train in it.',
  },
  {
    group: 'Competing',
    q: 'How do I get into the Fighters Program?',
    a: 'Train in the regular classes first. When a coach thinks you are ready, they will tell you — and then we will walk you through registering with USA Boxing and getting your book.',
  },
];
