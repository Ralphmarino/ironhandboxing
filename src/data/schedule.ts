export type ClassSlot = {
  day: string;
  short: string;
  time: string;
  label: string;
  note?: string;
  track: 'group' | 'fighters' | 'youth' | 'womens';
};

/**
 * Weekly schedule.
 *
 * Two tracks run in parallel most evenings: the open group class earlier, and
 * the invite-only Fighters Program at 7pm, which needs a USA Boxing book.
 *
 * ⚠️ Saturday: Ian added an 11:00 AM women's class. It is listed here ALONGSIDE
 * the existing 12:00 PM group class, because his note said "Saturday 11am is
 * womens boxing" without saying whether it replaced the noon slot. If the noon
 * class is gone, delete that row.
 */
export const schedule: ClassSlot[] = [
  { day: 'Monday', short: 'Mon', time: '6:00 PM', label: 'Group Class', track: 'group' },
  { day: 'Monday', short: 'Mon', time: '7:00 PM', label: 'Fighters Only', note: 'Book required', track: 'fighters' },
  { day: 'Tuesday', short: 'Tue', time: '6:00 PM', label: 'Group Class', track: 'group' },
  { day: 'Tuesday', short: 'Tue', time: '7:00 PM', label: 'Fighters Only', note: 'Book required', track: 'fighters' },
  { day: 'Wednesday', short: 'Wed', time: '4:00 PM', label: 'Kids & Teens', track: 'youth' },
  { day: 'Wednesday', short: 'Wed', time: '7:00 PM', label: 'Fighters Only', note: 'Book required', track: 'fighters' },
  { day: 'Thursday', short: 'Thu', time: '11:00 AM', label: 'Group Class', track: 'group' },
  { day: 'Friday', short: 'Fri', time: '5:00 PM', label: 'Kids & Teens', track: 'youth' },
  { day: 'Friday', short: 'Fri', time: '6:00 PM', label: 'Group Class', track: 'group' },
  { day: 'Friday', short: 'Fri', time: '7:00 PM', label: 'Fighters Only', note: 'Book required', track: 'fighters' },
  { day: 'Saturday', short: 'Sat', time: '11:00 AM', label: 'Women’s Boxing', track: 'womens' },
  { day: 'Saturday', short: 'Sat', time: '12:00 PM', label: 'Group Class', track: 'group' },
  { day: 'Sunday', short: 'Sun', time: '6:00 PM', label: 'Group Class', track: 'group' },
];

export const dayOrder = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const;

export const personalSessionNote =
  'Wednesdays & Thursdays are open for Personal Sessions at times to be determined.';
