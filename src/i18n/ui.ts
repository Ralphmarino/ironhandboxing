import type { Lang } from './config';

/**
 * Every string of site chrome, in both languages.
 *
 * ⚠️ TRANSLATION NOTE: the Spanish is written to sound like the English does,
 * short, direct, spoken. It is not a word-for-word rendering, because the
 * English leans on clipped fragments that read as broken Spanish if carried
 * over literally. Where a line could not survive the trip it was rewritten to
 * make the same point.
 *
 * Have a native speaker read this file before launch. It is the whole site's
 * voice in a language the author does not speak natively.
 *
 * Adding a key: add it to BOTH objects. TypeScript will fail the build if the
 * shapes drift, which is deliberate, a missing Spanish string should stop a
 * deploy rather than silently render English inside a Spanish page.
 */

const en = {
  // ---- Chrome ----
  'nav.about': 'About',
  'nav.newClients': 'New Clients',
  'nav.schedule': 'Schedule',
  'nav.pricing': 'Pricing',
  'nav.gallery': 'Gallery',
  'nav.blog': 'Blog',
  'nav.faq': 'FAQ',
  'nav.contact': 'Contact Us',
  'nav.cta': 'Start Training',
  'nav.home': 'Ironhand Boxing, home',
  'nav.openMenu': 'Open menu',
  'nav.closeMenu': 'Close menu',
  'nav.primary': 'Primary',
  'nav.mobile': 'Mobile',
  'nav.langSwitch': 'Ver esta página en español',
  'nav.langLabel': 'ES',

  'skip.content': 'Skip to content',
  'footer.visit': 'Visit',
  'footer.explore': 'Explore',
  'footer.train': 'Train',
  'footer.emailUs': 'Email us',
  'footer.rights': 'All rights reserved.',
  'footer.sitemap': 'Sitemap',
  'footer.tagline':
    'A boxing gym in Port Richmond, Staten Island. Beginners, kids and teens, and registered amateurs, all on the same floor.',

  'toTop.label': 'Back to top',
  'toTop.short': 'Top',

  // ---- Homepage ----
  'ann.text': "Welcome to Ironhand Boxing - Staten Island's Premier Boxing Training & Gym",

  'hero.eyebrow': '1230 Castleton Ave · Staten Island',
  'hero.lede':
    'Founded by Ian Sampaga to serve, influence and inspire our community through world-class boxing training. Proper technique, one-on-one mitt work, bag work and conditioning. Every class, every level.',
  'hero.cta': 'Book your first class',
  'hero.ctaAlt': 'See the schedule',
  'hero.reviews': 'Google reviews',
  'hero.from': 'from',

  'ticker.1': 'Proper Technique',
  'ticker.2': '1-on-1 Mitt Work',
  'ticker.3': 'Bag Work',
  'ticker.4': 'Conditioning',
  'ticker.5': 'All Levels Welcome',
  'ticker.6': 'Kids & Teens',
  'ticker.7': 'Amateur Fighters',
  'ticker.8': 'Staten Island',

  'stats.rating': 'Google rating',
  'stats.ratingSub': 'Across 66+ reviews',
  'stats.reviews': 'Five-star reviews',
  'stats.reviewsSub': 'And still climbing',
  'stats.classes': 'Classes a week',
  'stats.classesSub': 'Seven days, all levels',
  'stats.coaches': 'Coaches on the floor',
  'stats.coachesSub': 'Nobody trains alone',

  'offer.eyebrow': 'What We Offer',
  'offer.title': 'Four ways in.',
  'offer.lede':
    'Whether you have never thrown a punch or you are three fights into an amateur career, there is a lane here, and a coach in it with you.',

  'sched.eyebrow': 'Weekly Schedule',
  'sched.title': 'Seven days.<br />No wasted rounds.',
  'sched.lede':
    'Every class covers proper boxing technique, one-on-one mitt work, bag work and conditioning. Show up to one a week or all of them.',

  'pricing.eyebrow': 'Membership',
  'pricing.title': 'Pick your rounds.',
  'pricing.lede':
    'Month-to-month memberships built around how often you can actually get in. Train more, pay less per session, and the heavier plans include one-on-one time with Coach Ian.',
  'pricing.monthly': 'Monthly Memberships',
  'pricing.sessions': 'Sessions & Add-Ons',
  'pricing.popular': 'Most popular',

  'coaches.eyebrow': 'The Corner',
  'coaches.title': 'Coaches who<br />actually coach.',
  'coaches.lede':
    'Ironhand is not a one-man gym anymore. The whole corner works the floor: active competitors, certified cornermen, and fighters who came up through this program themselves.',

  'revs.eyebrow': 'From the Neighborhood',
  'revs.onGoogle': 'on Google',
  'revs.review': 'Google Review',
  'revs.original': 'Google reviews, shown in the language they were written in.',

  'ig.eyebrow': 'Live From the Gym',
  'ig.title': 'Inside Ironhand.',
  'ig.follow': 'Follow',

  'cosign.eyebrow': 'The Cosign',
  'cosign.title': 'Word<br />travels.',
  'cosign.lede':
    'Joey Diaz put Ironhand on his Instagram story: a straight reshare of the gym’s own post, out to his whole following. No agency, no campaign. That is Ironhand coach Mark Molina in the photo with him and Frankie Edgar.',
  'cosign.cta': 'See it on Instagram',
  'cosign.comedian': 'Comedian',
  'cosign.hof': 'UFC Hall of Famer',
  'cosign.coach': 'Ironhand Coach',

  'latest.eyebrow': 'From the Blog',
  'latest.title': 'Read the corner.',
  'latest.lede':
    'Straight answers on technique, gear and getting started, written by the coaches who teach it.',
  'latest.all': 'All posts',
  'latest.more': 'Read the post',

  'cta.title': 'Your first class is the hard one.',
  'cta.body':
    'After that it is just showing up. Tell us what you are after and we will put you in the right class: beginner, competitor, or somewhere in between.',
  'cta.button': 'Get started',

  'bag.eyebrow': 'Take a Swing',
  'bag.title': 'Go on. Hit it.',
  'bag.lede':
    'The real thing hits back harder. Click the bag, or tap it on your phone.',
  'bag.punches': 'Punches',
  'bag.best': 'Your best',
  'bag.hint': 'Click to punch',
  'bag.hintTouch': 'Tap to punch',
  'bag.newRecord': 'New record',

  // ---- Contact ----
  'contact.eyebrow': 'Contact Us',
  'contact.title': 'Let’s get you<br />in the gym.',
  'contact.lede':
    'Whatever your question, we’re here to help. Fill out the form and a member of our team will get back to you shortly.',
  'contact.address': 'Address',
  'contact.phone': 'Phone',
  'contact.email': 'Email',
  'contact.instagram': 'Instagram',
  'form.name': 'Name',
  'form.first': 'First',
  'form.last': 'Last',
  'form.phone': 'Phone #',
  'form.email': 'Email',
  'form.inquiry': 'Type of Inquiry',
  'form.choose': 'Choose one',
  'form.method': 'Preferred Contact Method',
  'form.call': 'Call',
  'form.text': 'Text',
  'form.emailOpt': 'Email',
  'form.message': 'Message / Question',
  'form.messagePlaceholder': 'Tell us your experience level and what you’re training for.',
  'form.referral': 'How Did You Hear About Us?',
  'form.submit': 'Submit',
  'form.honeypot': 'Don’t fill this out if you’re human:',
  'form.fineA': 'We reply to everything. If you don’t hear back within a day, call',
  'form.fineB': 'or message us on Instagram.',
  'form.inquiry.membership': 'Membership Inquiry',
  'form.inquiry.schedule': 'Class Schedule',
  'form.inquiry.personal': 'Personal Training Inquiry',
  'form.inquiry.general': 'General Question',
  'form.ref.friend': 'Friend or Family Referral',
  'form.ref.social': 'Social Media',
  'form.ref.search': 'Search Engine (Google, Bing...)',
  'form.ref.ad': 'Local Advertisement',
  'form.ref.other': 'Other',
  'map.title': 'Map showing Ironhand Boxing at 1230 Castleton Avenue, Staten Island',

  // ---- Thank you ----
  'thanks.title': 'Message received.',
  'thanks.body':
    'Thanks for reaching out. We read everything and we will get back to you shortly, usually the same day. If it is urgent, call us.',
  'thanks.home': 'Back to the homepage',

  // ---- 404 ----
  '404.title': 'Slipped that one.',
  '404.body': 'That page is not here. It may have moved, or the link may be wrong.',
  '404.home': 'Back to the homepage',

  // ---- Gallery ----
  'gallery.eyebrow': 'Gallery',
  'gallery.title': 'Inside the gym.',
  'gallery.lede':
    'Real classes, real members, real work. This is what a night at Ironhand actually looks like.',

  // ---- FAQ ----
  'faq.eyebrow': 'FAQ',
  'faq.title': 'Questions,<br />answered.',
  'faq.lede':
    'Everything people ask before their first class. If yours is not here, ask us directly.',
  'faq.all': 'All',
  'faq.stillTitle': 'Still have a question?',
  'faq.stillBody': 'Ask us directly and we will answer it properly.',
  'faq.stillCta': 'Get in touch',

  // ---- Blog ----
  'blog.eyebrow': 'Blog',
  'blog.title': 'Notes from<br />the gym.',
  'blog.lede':
    'Training, technique and what actually happens on the floor, written by the coaches.',
  'blog.read': 'Read',
  'blog.back': 'All posts',
  'blog.by': 'By',
  'blog.updated': 'Updated',

  // ---- New clients ----
  'nc.eyebrow': 'New Clients',
  'nc.howEyebrow': 'How It Works',
  'nc.howTitle': 'Four steps in.',
  'nc.bringTitle': 'What to bring',
  'nc.pricingTitle': 'What it costs',

  // ---- About ----
  'about.eyebrow': 'About Us',
} as const;

type UiKey = keyof typeof en;

const es: Record<UiKey, string> = {
  // ---- Chrome ----
  'nav.about': 'Nosotros',
  'nav.newClients': 'Nuevos Clientes',
  'nav.schedule': 'Horarios',
  'nav.pricing': 'Precios',
  'nav.gallery': 'Galería',
  'nav.blog': 'Blog',
  'nav.faq': 'Preguntas',
  'nav.contact': 'Contacto',
  'nav.cta': 'Empieza a Entrenar',
  'nav.home': 'Ironhand Boxing, inicio',
  'nav.openMenu': 'Abrir menú',
  'nav.closeMenu': 'Cerrar menú',
  'nav.primary': 'Principal',
  'nav.mobile': 'Móvil',
  'nav.langSwitch': 'View this page in English',
  'nav.langLabel': 'EN',

  'skip.content': 'Saltar al contenido',
  'footer.visit': 'Visítanos',
  'footer.explore': 'Explora',
  'footer.train': 'Entrena',
  'footer.emailUs': 'Escríbenos',
  'footer.rights': 'Todos los derechos reservados.',
  'footer.sitemap': 'Mapa del sitio',
  'footer.tagline':
    'Un gimnasio de boxeo en Port Richmond, Staten Island. Principiantes, niños y adolescentes, y amateurs registrados, todos en el mismo piso.',

  'toTop.label': 'Volver arriba',
  'toTop.short': 'Arriba',

  // ---- Homepage ----
  'ann.text':
    'Bienvenido a Ironhand Boxing - El gimnasio de boxeo número uno de Staten Island',

  'hero.eyebrow': '1230 Castleton Ave · Staten Island',
  'hero.lede':
    'Fundado por Ian Sampaga para servir, influir e inspirar a nuestra comunidad con entrenamiento de boxeo de primer nivel. Técnica correcta, trabajo de manoplas uno a uno, saco y acondicionamiento físico. En cada clase, para cada nivel.',
  'hero.cta': 'Reserva tu primera clase',
  'hero.ctaAlt': 'Ver los horarios',
  'hero.reviews': 'reseñas de Google',
  'hero.from': 'de',

  'ticker.1': 'Técnica Correcta',
  'ticker.2': 'Manoplas Uno a Uno',
  'ticker.3': 'Trabajo de Saco',
  'ticker.4': 'Acondicionamiento',
  'ticker.5': 'Todos los Niveles',
  'ticker.6': 'Niños y Adolescentes',
  'ticker.7': 'Boxeadores Amateur',
  'ticker.8': 'Staten Island',

  'stats.rating': 'Calificación en Google',
  'stats.ratingSub': 'De más de 66 reseñas',
  'stats.reviews': 'Reseñas de cinco estrellas',
  'stats.reviewsSub': 'Y siguen llegando',
  'stats.classes': 'Clases por semana',
  'stats.classesSub': 'Siete días, todos los niveles',
  'stats.coaches': 'Entrenadores en el piso',
  'stats.coachesSub': 'Nadie entrena solo',

  'offer.eyebrow': 'Lo Que Ofrecemos',
  'offer.title': 'Cuatro formas de entrar.',
  'offer.lede':
    'Si nunca has tirado un golpe, o si ya llevas tres peleas como amateur, aquí hay un camino para ti y un entrenador que lo recorre contigo.',

  'sched.eyebrow': 'Horario Semanal',
  'sched.title': 'Siete días.<br />Ni un round de más.',
  'sched.lede':
    'Cada clase cubre técnica de boxeo, trabajo de manoplas uno a uno, saco y acondicionamiento. Ven una vez por semana o ven a todas.',

  'pricing.eyebrow': 'Membresías',
  'pricing.title': 'Elige tus rounds.',
  'pricing.lede':
    'Membresías mes a mes, armadas según los días que de verdad puedas venir. Entrena más y pagas menos por sesión, y los planes más completos incluyen tiempo uno a uno con el Coach Ian.',
  'pricing.monthly': 'Membresías Mensuales',
  'pricing.sessions': 'Sesiones y Extras',
  'pricing.popular': 'La más popular',

  'coaches.eyebrow': 'La Esquina',
  'coaches.title': 'Entrenadores que<br />de verdad entrenan.',
  'coaches.lede':
    'Ironhand ya no es el gimnasio de una sola persona. Toda la esquina trabaja el piso: competidores activos, entrenadores certificados y boxeadores que se formaron dentro de este mismo programa.',

  'revs.eyebrow': 'Del Barrio',
  'revs.onGoogle': 'en Google',
  'revs.review': 'Reseña de Google',
  'revs.original': 'Reseñas de Google, en el idioma en que fueron escritas.',

  'ig.eyebrow': 'En Vivo Desde el Gimnasio',
  'ig.title': 'Por dentro.',
  'ig.follow': 'Síguenos en',

  'cosign.eyebrow': 'El Respaldo',
  'cosign.title': 'La voz<br />corre.',
  'cosign.lede':
    'Joey Diaz publicó a Ironhand en su historia de Instagram: compartió la propia publicación del gimnasio, tal cual, con todos sus seguidores. Sin agencia y sin campaña. El de la foto, junto a él y a Frankie Edgar, es Mark Molina, entrenador de Ironhand.',
  'cosign.cta': 'Míralo en Instagram',
  'cosign.comedian': 'Comediante',
  'cosign.hof': 'Salón de la Fama de UFC',
  'cosign.coach': 'Entrenador de Ironhand',

  'latest.eyebrow': 'Del Blog',
  'latest.title': 'Lee la esquina.',
  'latest.lede':
    'Respuestas directas sobre técnica, equipo y cómo empezar, escritas por los entrenadores que las enseñan.',
  'latest.all': 'Todas las notas',
  'latest.more': 'Leer la nota',

  'cta.title': 'La primera clase es la difícil.',
  'cta.body':
    'Después de esa, solo se trata de presentarse. Cuéntanos qué buscas y te ponemos en la clase correcta: principiante, competidor, o algo entre las dos.',
  'cta.button': 'Empezar',

  'bag.eyebrow': 'Tira un Golpe',
  'bag.title': 'Anda. Pégale.',
  'bag.lede':
    'El de verdad pega más duro. Haz clic en el saco, o tócalo desde tu teléfono.',
  'bag.punches': 'Golpes',
  'bag.best': 'Tu récord',
  'bag.hint': 'Haz clic para golpear',
  'bag.hintTouch': 'Toca para golpear',
  'bag.newRecord': 'Nuevo récord',

  // ---- Contact ----
  'contact.eyebrow': 'Contacto',
  'contact.title': 'Te llevamos<br />al gimnasio.',
  'contact.lede':
    'Sea cual sea tu pregunta, estamos para ayudarte. Llena el formulario y alguien de nuestro equipo te responde en poco tiempo.',
  'contact.address': 'Dirección',
  'contact.phone': 'Teléfono',
  'contact.email': 'Correo',
  'contact.instagram': 'Instagram',
  'form.name': 'Nombre',
  'form.first': 'Nombre',
  'form.last': 'Apellido',
  'form.phone': 'Teléfono',
  'form.email': 'Correo electrónico',
  'form.inquiry': 'Tipo de Consulta',
  'form.choose': 'Elige una opción',
  'form.method': 'Cómo Prefieres que te Contactemos',
  'form.call': 'Llamada',
  'form.text': 'Mensaje',
  'form.emailOpt': 'Correo',
  'form.message': 'Mensaje / Pregunta',
  'form.messagePlaceholder': 'Cuéntanos tu nivel de experiencia y para qué quieres entrenar.',
  'form.referral': '¿Cómo Nos Conociste?',
  'form.submit': 'Enviar',
  'form.honeypot': 'No llenes esto si eres una persona:',
  'form.fineA': 'Respondemos todo. Si no tienes noticias en un día, llama al',
  'form.fineB': 'o escríbenos por Instagram.',
  'form.inquiry.membership': 'Consulta sobre membresías',
  'form.inquiry.schedule': 'Horario de clases',
  'form.inquiry.personal': 'Consulta sobre entrenamiento personal',
  'form.inquiry.general': 'Pregunta general',
  'form.ref.friend': 'Un amigo o familiar',
  'form.ref.social': 'Redes sociales',
  'form.ref.search': 'Buscador (Google, Bing...)',
  'form.ref.ad': 'Publicidad local',
  'form.ref.other': 'Otro',
  'map.title': 'Mapa que muestra Ironhand Boxing en 1230 Castleton Avenue, Staten Island',

  // ---- Thank you ----
  'thanks.title': 'Mensaje recibido.',
  'thanks.body':
    'Gracias por escribirnos. Leemos todo y te respondemos pronto, normalmente el mismo día. Si es urgente, llámanos.',
  'thanks.home': 'Volver al inicio',

  // ---- 404 ----
  '404.title': 'Ese lo esquivamos.',
  '404.body': 'Esta página no está aquí. Puede que se haya movido, o que el enlace esté mal.',
  '404.home': 'Volver al inicio',

  // ---- Gallery ----
  'gallery.eyebrow': 'Galería',
  'gallery.title': 'Por dentro.',
  'gallery.lede':
    'Clases reales, miembros reales, trabajo real. Así se ve de verdad una noche en Ironhand.',

  // ---- FAQ ----
  'faq.eyebrow': 'Preguntas Frecuentes',
  'faq.title': 'Preguntas,<br />respondidas.',
  'faq.lede':
    'Todo lo que la gente pregunta antes de su primera clase. Si la tuya no está aquí, pregúntanos directamente.',
  'faq.all': 'Todas',
  'faq.stillTitle': '¿Te quedó una pregunta?',
  'faq.stillBody': 'Pregúntanos directamente y te respondemos como se debe.',
  'faq.stillCta': 'Escríbenos',

  // ---- Blog ----
  'blog.eyebrow': 'Blog',
  'blog.title': 'Apuntes desde<br />el gimnasio.',
  'blog.lede':
    'Entrenamiento, técnica y lo que de verdad pasa en el piso, escrito por los entrenadores.',
  'blog.read': 'Leer',
  'blog.back': 'Todas las entradas',
  'blog.by': 'Por',
  'blog.updated': 'Actualizado',

  // ---- New clients ----
  'nc.eyebrow': 'Nuevos Clientes',
  'nc.howEyebrow': 'Cómo Funciona',
  'nc.howTitle': 'Cuatro pasos.',
  'nc.bringTitle': 'Qué traer',
  'nc.pricingTitle': 'Cuánto cuesta',

  // ---- About ----
  'about.eyebrow': 'Nosotros',
};

const dict = { en, es } as const;

/** Translator for a language: `const t = useTranslations(lang)` then `t('nav.about')`. */
export const useTranslations = (lang: Lang) => (key: UiKey) => dict[lang][key];
