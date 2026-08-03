export type Faq = {
  q: string;
  a: string;
  /** Grouping used by the FAQ page filter chips. */
  group: 'Getting Started' | 'Classes' | 'Membership' | 'Kids & Teens' | 'Competing' | 'Visiting';
};

/**
 * The first six entries are carried over from the live WordPress FAQ page and
 * keep their original question wording, which is what ranks. The rest are new,
 * written to capture the questions people actually search locally ("boxing gym
 * near me", "do I need to spar", "how much are boxing classes") and the kind of
 * direct, factual answers AI search engines quote.
 *
 * ⚠️ PRICING RECONCILED: the live FAQ still quoted the old rates ($120/week
 * tier, $250 including two personal sessions, sessions with "Coach Ian & Gary").
 * Those answers have been updated to the current pricing in src/data/pricing.ts.
 * If any of the current numbers are wrong, fix pricing.ts and these answers
 * together, never let the two disagree on a live page.
 */
export const faqs: Faq[] = [
  {
    group: 'Getting Started',
    q: 'What Makes Ironhand Boxing Stand Out Among Staten Island Boxing Gyms?',
    a: 'Ironhand Boxing is unique on Staten Island for its comprehensive boxing training tailored to all levels, from beginners to professional fighters. Founded by Ian Sampaga, a passionate advocate for boxing, Ironhand offers a mix of proper technique training, personalized mitt work, bag work, and fitness exercises designed for optimal results. Our diverse class schedule and personal session options with experienced coaches ensure that every member receives world-class training tailored to their needs.',
  },
  {
    group: 'Getting Started',
    q: 'Can Beginners Join Ironhand Boxing, and What Should They Expect?',
    a: 'Absolutely! Ironhand Boxing welcomes individuals of all skill levels. Beginners can expect an inviting and supportive environment where they’ll learn the fundamentals of boxing, including stance, movement, punches, and defense. Our structured classes also incorporate fitness exercises to build the physical conditioning necessary for boxing, ensuring a well-rounded introduction to the sport.',
  },
  {
    group: 'Competing',
    q: 'How Does Ironhand Boxing Accommodate Experienced Fighters?',
    a: 'Experienced fighters will find Ironhand Boxing’s training sessions both challenging and rewarding. We offer advanced techniques, sparring sessions, and personalized feedback to refine your skills and strategy. Our Fighters Program runs Monday, Tuesday and Wednesday at 7:00 PM for registered competitors, and our coaches provide targeted preparation for amateur competition, technique, strategy and physical conditioning.',
  },
  {
    group: 'Membership',
    q: 'What Are the Personal Session Options at Ironhand Boxing?',
    a: 'Ironhand Boxing offers a variety of personal session options to meet different needs and schedules. One-on-one sessions with Coach Ian are $115 per hour, and Wednesdays and Thursdays are set aside for them. We also offer virtual training, $45 for a 1-on-1 virtual session and $25 for a small group virtual session, so there are options for every budget and goal.',
  },
  {
    group: 'Membership',
    q: 'What Membership Options Does Ironhand Boxing Provide?',
    a: 'Our membership packages are designed to accommodate varying training needs and schedules. From 1 day per week at $125 to 5 days per week at $250, which includes three personal sessions per month, we offer flexible pricing to fit your lifestyle. There is also a family rate of $150 per student for two or more kids. Each package provides access to our full range of classes.',
  },
  {
    group: 'Getting Started',
    q: 'How Can I Start Training at Ironhand Boxing?',
    a: 'Getting started is easy! You can visit us at our location at 1230 Castleton Ave, Staten Island, NY 10310, or contact us at 347.499.4133 to speak with our team. Whether you’re interested in joining a class, booking a personal session, or just have more questions, we’re here to help you begin your boxing journey.',
  },

  /* ---- Added for search and AI answer coverage ---- */
  {
    group: 'Visiting',
    q: 'Where is Ironhand Boxing located on Staten Island?',
    a: 'Ironhand Boxing is at 1230 Castleton Avenue, Staten Island, NY 10310, in Port Richmond. There is street parking on Castleton Avenue, and we are reachable by the S46 and S48 bus routes. Call 347.499.4133 if you need directions.',
  },
  {
    group: 'Visiting',
    q: 'What are your class times?',
    a: 'Group classes run seven days a week: Sunday, Monday and Tuesday at 6:00 PM, Wednesday at 4:00 PM, Thursday at 11:00 AM, Friday at 5:00 PM for Kids & Teens and 6:00 PM for adults, and Saturday at 12:00 PM. The Fighters Program runs Monday, Tuesday and Wednesday at 7:00 PM.',
  },
  {
    group: 'Getting Started',
    q: 'Do I need any experience to start boxing?',
    a: 'No. A large share of our members had never thrown a punch before walking in. Classes are structured so beginners drill fundamentals while experienced boxers work at their own level, on the same floor, at the same time.',
  },
  {
    group: 'Getting Started',
    q: 'What should I bring to my first boxing class?',
    a: 'Athletic clothes you can move in, sneakers, water and a towel. We will get you set up with gloves and wraps for your first session. Do not buy equipment before you come. Once you know you are staying, a coach will tell you what is actually worth spending money on.',
  },
  {
    group: 'Getting Started',
    q: 'Is boxing hard?',
    a: 'Boxing is demanding, but it is not out of reach. The footwork and the punches are simple movements taught in a specific order, and every class is scaled to the person doing it. What is hard is the conditioning, and that arrives on its own once you show up consistently. Most people find the first two weeks humbling and the third week addictive.',
  },
  {
    group: 'Getting Started',
    q: 'Am I too old to start boxing?',
    a: 'No. We train members well into their fifties and sixties. Boxing is one of the few sports where technique compounds faster than athleticism, which is exactly why it rewards adults who start later.',
  },
  {
    group: 'Classes',
    q: 'What happens in a boxing class at Ironhand?',
    a: 'Every class covers proper boxing technique, one-on-one mitt work with a coach, bag work, and conditioning. The mitt work is where the actual coaching happens, no one leaves a class without hands-on time with a coach. Group classes run about an hour.',
  },
  {
    group: 'Classes',
    q: 'Will I have to spar or get hit?',
    a: 'Not unless you choose to. Sparring is entirely optional, it only happens with a coach supervising, and it is never a prerequisite for anything. Plenty of our members train for years and never spar a round.',
  },
  {
    group: 'Classes',
    q: 'Is boxing a good workout for weight loss?',
    a: 'It is one of the best. Boxing works in rounds, which trains your body to go hard, recover fast and go again. Members have lost anywhere from 20 to 88 pounds training here, and unlike a treadmill, you are learning a skill the whole time, which is why people actually keep showing up.',
  },
  {
    group: 'Classes',
    q: 'Do you offer women’s boxing classes?',
    a: 'Women train in every class we run, and one of our coaches, Arianne Elshawarby, is an active open-class female amateur competitor and a Silver Level USA Boxing coach. There is no separate track, everyone trains on the same floor at their own level.',
  },
  {
    group: 'Membership',
    q: 'How much are boxing classes in Staten Island?',
    a: 'At Ironhand, memberships run from $125 per month for one day a week to $250 per month for five days, which includes three personal sessions. Two days a week is $150, three days is $180, and four days is $220 with one personal session included. Personal training with Coach Ian is $115 per hour.',
  },
  {
    group: 'Membership',
    q: 'Is there a contract or joining fee?',
    a: 'Memberships are month to month. Come talk to us about what you are trying to accomplish and we will put you on the plan that fits, including a custom one if none of the standard tiers do.',
  },
  {
    group: 'Membership',
    q: 'Can I train with a specific coach?',
    a: 'Yes. Members training under one of our coaching staff pay a $125 per month gym fee and arrange the coach’s training rate with that coach directly.',
  },
  {
    group: 'Kids & Teens',
    q: 'What age can kids start boxing?',
    a: 'Our Kids & Teens class runs Fridays at 5:00 PM and we have had children start as young as seven. At that age the focus is coordination, discipline and confidence far more than fighting.',
  },
  {
    group: 'Kids & Teens',
    q: 'Is boxing safe for my child?',
    a: 'The youth class is technique and conditioning, pads, bags and footwork. Contact is not part of the program unless a young athlete moves toward competing, and that only happens with a parent involved in the decision.',
  },
  {
    group: 'Kids & Teens',
    q: 'Do you offer a family discount?',
    a: 'Yes. The family package is $150 per student per month for two or more kids.',
  },
  {
    group: 'Competing',
    q: 'Can I compete as an amateur out of Ironhand?',
    a: 'Yes. Our Fighters Program runs Monday, Tuesday and Wednesday at 7:00 PM for registered competitors and costs $150 per month. You need your USA Boxing passbook to train in it, and a coach will walk you through registering and getting one.',
  },
  {
    group: 'Competing',
    q: 'How do I get into the Fighters Program?',
    a: 'Train in the regular classes first. When a coach thinks you are ready, they will tell you, and then we will walk you through registering with USA Boxing and getting your book.',
  },
];
