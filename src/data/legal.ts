import type { Lang } from '../i18n/config';
import { site } from './site';

/**
 * Privacy policy and terms, in both languages.
 *
 * ⚠️ NOT LEGAL ADVICE. These were written from what this site actually does,
 * not from a template: every third party named here is one the site really
 * contacts, and every form field listed is one the form really has. That makes
 * them accurate, which is the part most boilerplate policies get wrong. It does
 * not make them lawyer-reviewed. Have someone qualified read them before
 * relying on them, particularly the Terms.
 *
 * ⚠️ KEEP THESE HONEST. They describe the site as it is today:
 *   - Google Analytics 4 runs (src/data/site.ts → ANALYTICS.ga4)
 *   - Google Fonts are loaded from Google's servers
 *   - A Google Maps iframe is embedded on the contact pages
 *   - Instagram is LINKED, not embedded. If IG_EMBED.beholdFeedId is ever set,
 *     a third-party script starts running and the cookie section needs a line
 *     about Behold and Instagram.
 * Change what the site does and change these the same day.
 */

export type LegalSection = {
  h: string;
  /** Paragraphs. Simple strings, no markup, so nothing can be injected. */
  p: string[];
  /** Optional bullet list rendered under the paragraphs. */
  list?: string[];
};

export type LegalDoc = {
  title: string;
  description: string;
  h1: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
};

/** Last substantive review of this text. Bump it when the wording changes. */
const UPDATED_EN = 'August 4, 2026';
const UPDATED_ES = '4 de agosto de 2026';

export const privacy = (lang: Lang): LegalDoc =>
  lang === 'es'
    ? {
        title: 'Política de Privacidad – Ironhand Boxing',
        description:
          'Qué información recoge Ironhand Boxing a través de este sitio, quién la ve, qué cookies se usan y cómo pedir que borremos tus datos.',
        h1: 'Política de privacidad',
        updated: UPDATED_ES,
        intro:
          'Somos un gimnasio de boxeo, no una empresa de datos. Esta página explica en lenguaje claro qué recoge este sitio, quién lo ve y qué puedes pedirnos que hagamos con ello.',
        sections: [
          {
            h: 'Quiénes somos',
            p: [
              `${site.legalName}, ${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}. Puedes llamarnos al ${site.phone}, o al ${site.phoneEs.number} si prefieres hablar en español.`,
            ],
          },
          {
            h: 'Lo que nos das tú',
            p: [
              'La forma principal en que este sitio te pide información es el formulario de contacto. Cuando lo envías, recibimos exactamente lo que escribiste:',
            ],
            list: [
              'Nombre y apellido',
              'Correo electrónico',
              'Teléfono, si lo pones (es opcional)',
              'El tipo de consulta y cómo prefieres que te contactemos',
              'Tu mensaje',
              'Cómo nos conociste, si lo eliges',
            ],
          },
          {
            h: 'La tabla del saco pesado',
            p: [
              'Si juegas con el saco pesado y decides publicar tu marca, guardamos el nombre de seis caracteres que escribas, tu puntuación y la hora en que la enviaste. Ese es todo el registro. Se muestra públicamente en la página de inicio.',
              'Publicar tu marca es completamente opcional. El juego funciona sin eso, y tu récord personal se guarda en tu propio navegador lo publiques o no.',
              'No uses tu nombre completo real. Seis caracteres son para iniciales o un apodo, y lo que escribas queda a la vista de todos.',
              'La tabla se reinicia al empezar cada mes. También guardamos por poco tiempo una nota de tu dirección IP para que una misma persona no llene la tabla en cuestión de segundos; no queda ligada a tu entrada ni se usa para nada más.',
              '¿Quieres que borremos tu entrada? Dinos qué nombre usaste y la quitamos.',
            ],
          },
          {
            h: 'Qué hacemos con eso',
            p: [
              'Te respondemos. Eso es todo. Lo usamos para contestar tu consulta y, si te haces miembro, para lo normal de administrar tu membresía.',
              'No vendemos tu información. No la alquilamos. No la pasamos a nadie para que te haga publicidad.',
              'Los envíos del formulario los procesa Netlify, la empresa que aloja este sitio, y llegan por correo a Ironhand y a Growth Local, la agencia que construyó y mantiene el sitio. Nadie más los ve.',
            ],
          },
          {
            h: 'Lo que se recoge solo, sin que lo escribas',
            p: [
              'Como casi cualquier sitio web, este usa un par de servicios de terceros. Cada uno recibe tu dirección IP por el hecho de que tu navegador les pide algo:',
            ],
            list: [
              'Google Analytics, para saber cuántas personas visitan el sitio y qué páginas leen. Guarda cookies en tu navegador (las llamadas _ga y _ga_HEMSNSRL0P) que registran si has estado antes, sin decirnos quién eres.',
              'Google Fonts, que sirve las tipografías del sitio desde los servidores de Google.',
              'Google Maps, solo en la página de Contacto, donde está el mapa que muestra dónde queda el gimnasio.',
              'Netlify, que aloja el sitio y guarda registros de servidor como cualquier hosting.',
            ],
          },
          {
            h: 'Cookies',
            p: [
              'Las únicas cookies que pone este sitio son las de Google Analytics descritas arriba. No hay cookies de publicidad, ni de seguimiento entre sitios, ni píxeles de redes sociales.',
              'Si prefieres no ser contado, puedes bloquear cookies en la configuración de tu navegador, usar el complemento de inhabilitación de Google Analytics, o activar la opción de no rastrear. El sitio funciona igual de bien en cualquiera de esos casos: nada de lo que ofrecemos depende de aceptar cookies.',
              'El juego del saco pesado guarda tu récord de golpes en tu propio navegador, con almacenamiento local. Eso no es una cookie, nunca sale de tu dispositivo, y si borras los datos del navegador desaparece.',
            ],
          },
          {
            h: 'Instagram y otros enlaces',
            p: [
              'La sección "En Vivo Desde el Gimnasio" son fotos nuestras alojadas en este sitio, con enlaces a nuestro Instagram. No hay un widget de Instagram incrustado, así que Instagram no sabe que estuviste aquí a menos que hagas clic.',
              'Cuando sales del sitio hacia Instagram, BoxRec, Google Maps o Growth Local, pasas a la política de privacidad de ellos, no a la nuestra.',
            ],
          },
          {
            h: 'Cuánto lo guardamos',
            p: [
              'Los mensajes del formulario quedan en nuestro correo y en el panel de Netlify mientras nos sirvan para atenderte. Si quieres que borremos el tuyo, escríbenos y lo hacemos.',
              'Google Analytics conserva sus datos según su propia configuración de retención, que hoy está en el máximo de 14 meses para datos a nivel de usuario.',
            ],
          },
          {
            h: 'Niños',
            p: [
              'Damos clases para niños y adolescentes, pero este sitio está dirigido a adultos. Si eres menor de 13 años, no nos mandes tus datos por el formulario: pídele a tu padre, madre o tutor que escriba por ti.',
              'Si nos enteramos de que recibimos datos de un menor de 13 años sin permiso de un adulto responsable, los borramos.',
            ],
          },
          {
            h: 'Tus derechos',
            p: [
              'Pídenos ver lo que tenemos tuyo, corregirlo o borrarlo, y lo hacemos. No hace falta que cites ninguna ley ni que expliques por qué. Escríbenos y ya.',
              'Si vives en un lugar con leyes específicas de privacidad, como California o la Unión Europea, esos derechos también te amparan aquí.',
            ],
          },
          {
            h: 'Cambios',
            p: [
              'Si cambiamos lo que este sitio recoge, cambiamos esta página el mismo día y actualizamos la fecha de arriba.',
            ],
          },
          {
            h: 'Contacto',
            p: [
              `Para cualquier cosa de esta página, llama al ${site.phone}, al ${site.phoneEs.number} en español, o usa el formulario de contacto.`,
            ],
          },
        ],
      }
    : {
        title: 'Privacy Policy – Ironhand Boxing',
        description:
          'What information Ironhand Boxing collects through this site, who sees it, which cookies are used, and how to ask us to delete your data.',
        h1: 'Privacy policy',
        updated: UPDATED_EN,
        intro:
          'We are a boxing gym, not a data company. This page explains in plain language what this site collects, who sees it, and what you can ask us to do about it.',
        sections: [
          {
            h: 'Who we are',
            p: [
              `${site.legalName}, ${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}. You can reach us on ${site.phone}, or ${site.phoneEs.number} if you would rather speak Spanish.`,
            ],
          },
          {
            h: 'What you give us',
            p: [
              'The main place this site asks you for anything is the contact form. When you send it, we receive exactly what you typed:',
            ],
            list: [
              'First and last name',
              'Email address',
              'Phone number, if you enter one (it is optional)',
              'The type of inquiry and how you would prefer to be contacted',
              'Your message',
              'How you heard about us, if you pick an option',
            ],
          },
          {
            h: 'The heavy bag leaderboard',
            p: [
              'If you play the heavy bag game and choose to post a score, we store the six-character name you type, your score, and the time you submitted it. That is the whole record. It is shown publicly on the homepage.',
              'Posting a score is entirely optional. The game works without it, and your personal best is kept in your own browser whether you post or not.',
              'Please do not use your real full name. Six characters is meant for initials or a nickname, and anything you enter is visible to everyone.',
              'The board resets at the start of each calendar month. We also keep a short-lived note of your IP address to stop the same person flooding the board within a few seconds of themselves; it is not linked to your entry and is not used for anything else.',
              'Want your entry removed? Tell us the name you used and we will delete it.',
            ],
          },
          {
            h: 'What we do with it',
            p: [
              'We reply to you. That is it. We use it to answer your question and, if you join, for the ordinary business of running your membership.',
              'We do not sell your information. We do not rent it. We do not hand it to anyone to advertise at you.',
              'Form submissions are processed by Netlify, the company that hosts this site, and emailed to Ironhand and to Growth Local, the agency that built and maintains the site. Nobody else sees them.',
            ],
          },
          {
            h: 'What gets collected without you typing anything',
            p: [
              'Like most websites, this one uses a few third-party services. Each receives your IP address simply because your browser requests something from them:',
            ],
            list: [
              'Google Analytics, so we can see how many people visit and which pages they read. It stores cookies in your browser (named _ga and _ga_HEMSNSRL0P) that record whether you have been here before, without telling us who you are.',
              'Google Fonts, which serves the site’s typefaces from Google’s servers.',
              'Google Maps, on the Contact page only, for the map showing where the gym is.',
              'Netlify, which hosts the site and keeps server logs the way any host does.',
            ],
          },
          {
            h: 'Cookies',
            p: [
              'The only cookies this site sets are the Google Analytics ones described above. There are no advertising cookies, no cross-site tracking, and no social media pixels.',
              'If you would rather not be counted, you can block cookies in your browser settings, install Google’s Analytics opt-out add-on, or turn on Do Not Track. The site works exactly the same either way: nothing we offer depends on you accepting cookies.',
              'The heavy bag game saves your punch record in your own browser using local storage. That is not a cookie, it never leaves your device, and clearing your browser data removes it.',
            ],
          },
          {
            h: 'Instagram and other links',
            p: [
              'The "Live From the Gym" section is our own photos hosted on this site, with links out to our Instagram. There is no embedded Instagram widget, so Instagram does not know you were here unless you click through.',
              'When you leave this site for Instagram, BoxRec, Google Maps or Growth Local, you are covered by their privacy policies, not ours.',
            ],
          },
          {
            h: 'How long we keep it',
            p: [
              'Form messages sit in our email and in the Netlify dashboard for as long as they are useful for helping you. If you want yours deleted, ask us and we will delete it.',
              'Google Analytics keeps its data according to its own retention setting, currently the maximum of 14 months for user-level data.',
            ],
          },
          {
            h: 'Children',
            p: [
              'We run classes for kids and teens, but this website is aimed at adults. If you are under 13, please do not send us your details through the form. Ask a parent or guardian to write on your behalf.',
              'If we learn we have received information from a child under 13 without a responsible adult’s involvement, we delete it.',
            ],
          },
          {
            h: 'Your rights',
            p: [
              'Ask us what we hold about you, ask us to correct it, or ask us to delete it, and we will. You do not need to cite a law or explain why. Just get in touch.',
              'If you live somewhere with specific privacy legislation, such as California or the European Union, those rights apply to you here as well.',
            ],
          },
          {
            h: 'Changes',
            p: [
              'If we change what this site collects, we change this page the same day and update the date at the top.',
            ],
          },
          {
            h: 'Contact',
            p: [
              `For anything on this page, call ${site.phone}, ${site.phoneEs.number} in Spanish, or use the contact form.`,
            ],
          },
        ],
      };

export const terms = (lang: Lang): LegalDoc =>
  lang === 'es'
    ? {
        title: 'Términos y Condiciones – Ironhand Boxing',
        description:
          'Las condiciones de uso del sitio de Ironhand Boxing: precios y horarios, riesgo del deporte, contenido y enlaces.',
        h1: 'Términos y condiciones',
        updated: UPDATED_ES,
        intro:
          'Las reglas de este sitio web. Son cortas porque este es un sitio informativo: no vendemos nada aquí ni procesamos pagos en línea.',
        sections: [
          {
            h: 'Uso del sitio',
            p: [
              'Puedes usar este sitio para conocer el gimnasio y para escribirnos. Al usarlo aceptas estos términos.',
              'Te pedimos que no intentes dañarlo, sobrecargarlo, ni usar el formulario para mandar publicidad o abusos.',
            ],
          },
          {
            h: 'Precios y horarios',
            p: [
              'Los precios y los horarios de clase que ves aquí son los vigentes cuando se publicó esta página, y pueden cambiar. Los mantenemos al día lo mejor que podemos, pero lo que confirma un entrenador en el gimnasio es lo que vale.',
              'Nada en este sitio es una oferta contractual. Tu membresía se acuerda con nosotros en persona.',
            ],
          },
          {
            h: 'El boxeo tiene riesgos',
            p: [
              'El boxeo es un deporte de contacto y entrenarlo implica riesgo de lesión. La información de este sitio es general y no es consejo médico.',
              'Si tienes una condición de salud, o dudas de si puedes entrenar, habla con tu médico antes de empezar.',
              'Entrenar en Ironhand requiere firmar nuestra exoneración de responsabilidad en el gimnasio. Ese documento, y no esta página, es el que rige tu participación en las clases.',
            ],
          },
          {
            h: 'La tabla de puntuaciones',
            p: [
              'El juego del saco pesado tiene una tabla pública. Mantén limpio el nombre que pongas. Quitamos cualquier cosa ofensiva, cualquier suplantación de identidad y cualquier marca que creamos falsa, sin aviso y a nuestro criterio.',
              'Es un juego en la web de un gimnasio. Nada de lo que aparece ahí es un premio, un concurso con inscripción, ni una promesa de nada.',
            ],
          },
          {
            h: 'Contenido',
            p: [
              'El texto, las fotos, el logotipo y el diseño de este sitio son de Ironhand Boxing o se usan con permiso. No los reutilices sin preguntarnos primero.',
              'Las reseñas que aparecen en el sitio son de Google y se muestran tal como las escribieron sus autores.',
            ],
          },
          {
            h: 'Enlaces a otros sitios',
            p: [
              'Enlazamos a Instagram, BoxRec, Google Maps y a la agencia que hizo el sitio. No controlamos esos sitios y no respondemos por su contenido.',
            ],
          },
          {
            h: 'Sin garantías',
            p: [
              'Hacemos lo posible por que la información aquí sea correcta y por que el sitio esté disponible, pero se ofrece tal cual. Si algo está mal o el sitio se cae un rato, avísanos y lo arreglamos.',
              'Los resultados de entrenamiento dependen de la persona. Nada aquí promete un resultado concreto.',
            ],
          },
          {
            h: 'Ley aplicable',
            p: [
              'Estos términos se rigen por las leyes del Estado de Nueva York.',
            ],
          },
          {
            h: 'Contacto',
            p: [
              `¿Dudas sobre esta página? Llama al ${site.phone}, al ${site.phoneEs.number} en español, o usa el formulario de contacto.`,
            ],
          },
        ],
      }
    : {
        title: 'Terms & Conditions – Ironhand Boxing',
        description:
          'The terms for using the Ironhand Boxing website: pricing and schedules, the risks of the sport, content and links.',
        h1: 'Terms & conditions',
        updated: UPDATED_EN,
        intro:
          'The rules for this website. They are short because this is an informational site: we do not sell anything here or process payments online.',
        sections: [
          {
            h: 'Using this site',
            p: [
              'You are welcome to use this site to learn about the gym and to get in touch. By using it, you agree to these terms.',
              'Please do not try to damage it, overload it, or use the contact form to send advertising or abuse.',
            ],
          },
          {
            h: 'Prices and schedules',
            p: [
              'The prices and class times shown here are the ones current when this page was published, and they can change. We keep them up to date as best we can, but what a coach confirms at the gym is what counts.',
              'Nothing on this site is a contractual offer. Your membership is agreed with us in person.',
            ],
          },
          {
            h: 'Boxing carries risk',
            p: [
              'Boxing is a contact sport and training for it carries a risk of injury. The information on this site is general and is not medical advice.',
              'If you have a health condition, or you are unsure whether you should be training, speak to your doctor before you start.',
              'Training at Ironhand requires signing our waiver at the gym. That document, not this page, governs your participation in classes.',
            ],
          },
          {
            h: 'The leaderboard',
            p: [
              'The heavy bag game has a public leaderboard. Keep the name you enter clean. We remove anything offensive, anything impersonating someone, and any score we believe was faked, without notice and at our discretion.',
              'It is a bit of fun on a gym website. Nothing on it is a prize, a competition with an entry, or a promise of anything.',
            ],
          },
          {
            h: 'Content',
            p: [
              'The text, photographs, logo and design on this site belong to Ironhand Boxing or are used with permission. Please do not reuse them without asking first.',
              'Reviews shown on the site come from Google and appear as their authors wrote them.',
            ],
          },
          {
            h: 'Links to other sites',
            p: [
              'We link out to Instagram, BoxRec, Google Maps and the agency that built the site. We do not control those sites and are not responsible for their content.',
            ],
          },
          {
            h: 'No warranties',
            p: [
              'We work to keep the information here accurate and the site available, but it is provided as is. If something is wrong or the site goes down for a while, tell us and we will fix it.',
              'Training results vary from person to person. Nothing here promises a particular outcome.',
            ],
          },
          {
            h: 'Governing law',
            p: ['These terms are governed by the laws of the State of New York.'],
          },
          {
            h: 'Contact',
            p: [
              `Questions about this page? Call ${site.phone}, ${site.phoneEs.number} in Spanish, or use the contact form.`,
            ],
          },
        ],
      };
