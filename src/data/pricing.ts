/**
 * Prices are language-neutral, the words around them are not. Each entry keeps
 * its Spanish alongside the English so a translation can never drift away from
 * the number it belongs to.
 */
export type Plan = {
  name: string;
  nameEs: string;
  price: string;
  unit: string;
  unitEs: string;
  note?: string;
  noteEs?: string;
  featured?: boolean;
};

/** Monthly memberships, the main offer. */
export const monthlyPlans: Plan[] = [
  { name: '1 Day / Week', nameEs: '1 Día / Semana', price: '125', unit: 'per month', unitEs: 'al mes' },
  { name: '2 Days / Week', nameEs: '2 Días / Semana', price: '150', unit: 'per month', unitEs: 'al mes' },
  {
    name: '3 Days / Week',
    nameEs: '3 Días / Semana',
    price: '180',
    unit: 'per month',
    unitEs: 'al mes',
    featured: true,
  },
  {
    name: '4 Days / Week',
    nameEs: '4 Días / Semana',
    price: '220',
    unit: 'per month',
    unitEs: 'al mes',
    note: 'Includes 1 personal session / month',
    noteEs: 'Incluye 1 sesión personal al mes',
  },
  {
    name: '5 Days / Week',
    nameEs: '5 Días / Semana',
    price: '250',
    unit: 'per month',
    unitEs: 'al mes',
    note: 'Includes 3 personal sessions / month',
    noteEs: 'Incluye 3 sesiones personales al mes',
  },
  {
    name: 'Family Package',
    nameEs: 'Paquete Familiar',
    price: '150',
    unit: 'per student',
    unitEs: 'por estudiante',
    note: '2+ kids',
    noteEs: '2 niños o más',
  },
];

/**
 * One-off and add-on options.
 *
 * ⚠️ PERSONAL SESSIONS ARE SOLD IN PAIRS ONLY. Ian does not do single sessions,
 * and he cut the pair from $250 to $180 as a deliberate discount for committing
 * to two. The "two sessions minimum" wording is the point of the offer, not
 * small print, so it appears on the pricing card, the offer card and the FAQ.
 * If the number ever changes, change it in all four places at once, in BOTH
 * languages. The site must never quote two different prices.
 *
 * The $30 add-on class line was removed on his instruction.
 */
export const sessionPlans: Plan[] = [
  {
    name: 'Personal Sessions',
    nameEs: 'Sesiones Personales',
    price: '180',
    unit: 'for two sessions',
    unitEs: 'por dos sesiones',
    note: 'One-on-one with Coach Ian. Two session minimum, no singles.',
    noteEs: 'Uno a uno con el Coach Ian. Mínimo dos sesiones, no se venden sueltas.',
    featured: true,
  },
  {
    name: 'Virtual Small Group',
    nameEs: 'Grupo Pequeño Virtual',
    price: '25',
    unit: 'per session',
    unitEs: 'por sesión',
  },
  {
    name: 'Virtual 1-on-1',
    nameEs: 'Virtual Uno a Uno',
    price: '45',
    unit: 'per session',
    unitEs: 'por sesión',
  },
  {
    name: 'Custom Plan',
    nameEs: 'Plan a Medida',
    price: 'TBD',
    unit: 'built around you',
    unitEs: 'armado para ti',
    note: 'Contact us',
    noteEs: 'Escríbenos',
  },
];

/**
 * The Fighters Program is a separate track from the open membership:
 * Mon/Tue/Wed/Fri at 7pm, competitors only, USA Boxing book required.
 */
export const fightersProgram = {
  name: 'Fighters Program',
  nameEs: 'Programa de Competidores',
  price: '150',
  unit: 'per month',
  unitEs: 'al mes',
  days: 'Monday · Tuesday · Wednesday · Friday at 7:00 PM',
  daysEs: 'Lunes · Martes · Miércoles · Viernes a las 7:00 PM',
  requirement: 'Registered competitors only. You must have your book.',
  requirementEs: 'Solo para competidores registrados. Tienes que tener tu libro.',
  blurb:
    'The competition track. Four nights a week of rounds, ring work and corner-ready preparation for athletes actively campaigning as amateurs.',
  blurbEs:
    'El camino de la competencia. Cuatro noches por semana de rounds, trabajo de ring y preparación de esquina para atletas que están compitiendo como amateurs.',
};

/**
 * Training with a coach other than Ian is billed in two parts: the gym
 * membership fee below, plus that coach's own rate paid to them directly.
 */
export const coachTrainingFee = {
  price: '125',
  unit: 'per month',
  unitEs: 'al mes',
  blurb:
    'Gym fee for members training under one of our coaching staff. The coach’s training rate is arranged with them directly.',
  blurbEs:
    'Cuota del gimnasio para quienes entrenan con uno de nuestros entrenadores. La tarifa del entrenador se acuerda directamente con él.',
};
