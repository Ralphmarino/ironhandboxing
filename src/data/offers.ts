import { photos } from './photos';
import type { Lang } from '../i18n/config';

/**
 * The four cards in the "what we offer" grid.
 *
 * ⚠️ Prices quoted in these blurbs must match src/data/pricing.ts. The tag on
 * the personal sessions card is the one people read fastest, so it is the one
 * most likely to be missed when a price changes.
 */
export const offerCopy = (lang: Lang) => {
  const es = lang === 'es';

  return [
    {
      n: '01',
      photo: photos.teamPhoto,
      title: es ? 'Clases Grupales' : 'Group Classes',
      body: es
        ? 'El corazón del gimnasio. Técnica, manoplas uno a uno con un entrenador, saco y acondicionamiento. En cada sesión, los siete días de la semana. Principiantes y boxeadores con experiencia entrenan en el mismo piso, cada quien a su nivel.'
        : 'The core of the gym. Technique, one-on-one mitt work with a coach, bag work and conditioning. Every session, seven days a week. Beginners and experienced boxers train on the same floor at their own level.',
      tag: es ? 'Todos los niveles' : 'All levels',
    },
    {
      n: '02',
      photo: photos.personalSession,
      title: es ? 'Sesiones Personales' : 'Personal Sessions',
      body: es
        ? 'Horas uno a uno con el Coach Ian, reservadas los miércoles y jueves. Aquí es donde la técnica se corrige de verdad, y donde quien va tras un objetivo concreto avanza más rápido. Se reservan en pares, nunca como sesiones sueltas.'
        : 'One-on-one hours with Coach Ian, set aside Wednesdays and Thursdays. This is where technique gets fixed properly, and where members chasing a specific goal make the fastest progress. Booked in pairs, never as single sessions.',
      tag: es ? '2 por $180' : '2 for $180',
    },
    {
      n: '03',
      photo: photos.kidsStance,
      title: es ? 'Niños y Adolescentes' : 'Kids & Teens',
      body: es
        ? 'Viernes a las 5pm. Coordinación, disciplina y confianza primero; boxeo después. Los padres nos dicen siempre lo mismo: su hijo llega a casa queriendo enseñarles lo que aprendió.'
        : 'Fridays at 5pm. Coordination, discipline and confidence first; boxing second. Parents keep telling us the same thing: their kid comes home wanting to show them what they learned.',
      tag: es ? 'Viernes 5PM' : 'Fridays 5PM',
    },
    {
      n: '04',
      photo: photos.fightersProgram,
      title: es ? 'Programa de Competidores' : 'Fighters Program',
      body: es
        ? 'El camino de la competencia. Lunes, martes, miércoles y viernes a las 7pm para amateurs registrados que están compitiendo. Rounds, trabajo de ring y preparación de esquina.'
        : 'The competition track. Monday, Tuesday, Wednesday and Friday at 7pm for registered amateurs actively campaigning. Rounds, ring work and corner-ready preparation.',
      tag: es ? 'Libro obligatorio' : 'Book required',
    },
  ];
};
