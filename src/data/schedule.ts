export type ClassSlot = {
  day: string;
  dayEs: string;
  short: string;
  shortEs: string;
  time: string;
  label: string;
  labelEs: string;
  note?: string;
  noteEs?: string;
  track: 'group' | 'fighters' | 'youth' | 'womens' | 'run';
  /**
   * Set when a session does not happen at the gym. Offsite sessions are shown
   * with their location and are excluded from the opening hours in the
   * structured data, so the schema never claims the Castleton Avenue address is
   * open for something happening in a park.
   */
  offsite?: string;
};

/**
 * Weekly schedule.
 *
 * Two tracks run in parallel most evenings: the open group class earlier, and
 * the invite-only Fighters Program at 7pm, which needs a USA Boxing book.
 *
 * Times stay in 12-hour format in both languages. Spanish speakers in New York
 * read "7:00 PM" on every other local listing, so switching to 19:00 here would
 * make the schedule harder to scan, not easier.
 *
 * ⚠️ Saturday: Ian added an 11:00 AM women's class. It is listed here ALONGSIDE
 * the existing 12:00 PM group class, because his note said "Saturday 11am is
 * womens boxing" without saying whether it replaced the noon slot. If the noon
 * class is gone, delete that row.
 */
export const schedule: ClassSlot[] = [
  { day: 'Monday', dayEs: 'Lunes', short: 'Mon', shortEs: 'Lun', time: '6:00 PM', label: 'Group Class', labelEs: 'Clase Grupal', track: 'group' },
  { day: 'Monday', dayEs: 'Lunes', short: 'Mon', shortEs: 'Lun', time: '7:00 PM', label: 'Fighters Only', labelEs: 'Solo Competidores', note: 'Book required', noteEs: 'Libro obligatorio', track: 'fighters' },
  { day: 'Tuesday', dayEs: 'Martes', short: 'Tue', shortEs: 'Mar', time: '6:00 PM', label: 'Group Class', labelEs: 'Clase Grupal', track: 'group' },
  { day: 'Tuesday', dayEs: 'Martes', short: 'Tue', shortEs: 'Mar', time: '7:00 PM', label: 'Fighters Only', labelEs: 'Solo Competidores', note: 'Book required', noteEs: 'Libro obligatorio', track: 'fighters' },
  { day: 'Wednesday', dayEs: 'Miércoles', short: 'Wed', shortEs: 'Mié', time: '4:00 PM', label: 'Kids & Teens', labelEs: 'Niños y Adolescentes', track: 'youth' },
  { day: 'Wednesday', dayEs: 'Miércoles', short: 'Wed', shortEs: 'Mié', time: '7:00 PM', label: 'Fighters Only', labelEs: 'Solo Competidores', note: 'Book required', noteEs: 'Libro obligatorio', track: 'fighters' },
  { day: 'Thursday', dayEs: 'Jueves', short: 'Thu', shortEs: 'Jue', time: '11:00 AM', label: 'Group Class', labelEs: 'Clase Grupal', track: 'group' },
  {
    day: 'Thursday',
    dayEs: 'Jueves',
    short: 'Thu',
    shortEs: 'Jue',
    time: '8:00 PM',
    label: 'Group Run',
    labelEs: 'Carrera Grupal',
    track: 'run',
    offsite: 'Clove Lakes Park',
  },
  { day: 'Friday', dayEs: 'Viernes', short: 'Fri', shortEs: 'Vie', time: '5:00 PM', label: 'Kids & Teens', labelEs: 'Niños y Adolescentes', track: 'youth' },
  { day: 'Friday', dayEs: 'Viernes', short: 'Fri', shortEs: 'Vie', time: '6:00 PM', label: 'Group Class', labelEs: 'Clase Grupal', track: 'group' },
  { day: 'Friday', dayEs: 'Viernes', short: 'Fri', shortEs: 'Vie', time: '7:00 PM', label: 'Fighters Only', labelEs: 'Solo Competidores', note: 'Book required', noteEs: 'Libro obligatorio', track: 'fighters' },
  { day: 'Saturday', dayEs: 'Sábado', short: 'Sat', shortEs: 'Sáb', time: '11:00 AM', label: 'Women’s Boxing', labelEs: 'Boxeo para Mujeres', track: 'womens' },
  { day: 'Saturday', dayEs: 'Sábado', short: 'Sat', shortEs: 'Sáb', time: '12:00 PM', label: 'Group Class', labelEs: 'Clase Grupal', track: 'group' },
  { day: 'Sunday', dayEs: 'Domingo', short: 'Sun', shortEs: 'Dom', time: '6:00 PM', label: 'Group Class', labelEs: 'Clase Grupal', track: 'group' },
];

export const dayOrder = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] as const;

export const personalSessionNote =
  'Wednesdays & Thursdays are open for Personal Sessions at times to be determined.';

export const personalSessionNoteEs =
  'Los miércoles y jueves quedan libres para Sesiones Personales, en horarios por definir.';
