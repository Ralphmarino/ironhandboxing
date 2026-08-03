export type Plan = {
  name: string;
  price: string;
  unit: string;
  note?: string;
  featured?: boolean;
};

/** Monthly memberships, the main offer. */
export const monthlyPlans: Plan[] = [
  { name: '1 Day / Week', price: '125', unit: 'per month' },
  { name: '2 Days / Week', price: '150', unit: 'per month' },
  { name: '3 Days / Week', price: '180', unit: 'per month', featured: true },
  {
    name: '4 Days / Week',
    price: '220',
    unit: 'per month',
    note: 'Includes 1 personal session / month',
  },
  {
    name: '5 Days / Week',
    price: '250',
    unit: 'per month',
    note: 'Includes 3 personal sessions / month',
  },
  { name: 'Family Package', price: '150', unit: 'per student', note: '2+ kids' },
];

/**
 * One-off and add-on options.
 *
 * ⚠️ PERSONAL SESSIONS: Ian's note read "Personal session are 2 now for 250",
 * which is taken here as a two-session block for $250, replacing the old $115
 * single hour. If he meant something else (a rate rise to $125 per single
 * hour, or two hours in one sitting), change it here AND in the two FAQ
 * answers that quote the figure, so the site never states two prices.
 *
 * The $30 add-on class line was removed on his instruction.
 */
export const sessionPlans: Plan[] = [
  {
    name: 'Personal Sessions',
    price: '250',
    unit: 'for two sessions',
    note: 'One-on-one with Coach Ian',
    featured: true,
  },
  { name: 'Virtual Small Group', price: '25', unit: 'per session' },
  { name: 'Virtual 1-on-1', price: '45', unit: 'per session' },
  { name: 'Custom Plan', price: 'TBD', unit: 'built around you', note: 'Contact us' },
];

/**
 * The Fighters Program is a separate track from the open membership:
 * Mon/Tue/Wed/Fri at 7pm, competitors only, USA Boxing book required.
 */
export const fightersProgram = {
  name: 'Fighters Program',
  price: '150',
  unit: 'per month',
  days: 'Monday · Tuesday · Wednesday · Friday at 7:00 PM',
  requirement: 'Registered competitors only. You must have your book.',
  blurb:
    'The competition track. Four nights a week of rounds, ring work and corner-ready preparation for athletes actively campaigning as amateurs.',
};

/**
 * Training with a coach other than Ian is billed in two parts: the gym
 * membership fee below, plus that coach's own rate paid to them directly.
 */
export const coachTrainingFee = {
  price: '125',
  unit: 'per month',
  blurb:
    'Gym fee for members training under one of our coaching staff. The coach’s training rate is arranged with them directly.',
};
