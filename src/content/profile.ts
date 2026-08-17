import type { L10n, L10nList } from '../i18n/LanguageProvider';

/**
 * ╔═════════════════════════╗
 * ║  ГЛАВНЫЙ ФАЙЛ С ДАННЫМИ.║
 * ╚═════════════════════════╝
 */

export const profile = {
  name: {
    ru: 'Сергей Малискевич',
    en: 'Serhii Malyskevych',
  } satisfies L10n,

  role: {
    ru: 'Junior Frontend-разработчик',
    en: 'Junior Frontend Developer',
  } satisfies L10n,

  tagline: {
    ru: 'Собираю адаптивные интерфейсы на React и TypeScript. Работаю с REST API, Git',
    en: 'I build responsive interfaces with React and TypeScript. I work with REST APIs, Git',
  } satisfies L10n,

  about: {
    ru: [
      'Junior Frontend-разработчик с базой в JavaScript, TypeScript и React. Делаю адаптивные интерфейсы: семантическая вёрстка на HTML и CSS, работа с DOM и событиями, асинхронный JavaScript, интеграция с REST API.',
      'На фрилансе участвовал в разработке голосового и SMS-агента на LLM — диалоговая логика, распознавание намерений, работа с контекстом и эскалация на живого оператора.',
      'Окончил Одесский политехнический национальный университет по направлению «Компьютерные науки и программная инженерия». Сейчас живу в Севилье и ищу удалённую работу в команде, где есть код-ревью и наставничество.',
    ],
    en: [
      'Junior Frontend Developer with a solid foundation in JavaScript, TypeScript and React. I build responsive interfaces: semantic HTML and CSS, DOM and event handling, asynchronous JavaScript, REST API integration.',
      'On freelance work I helped build an LLM-based voice and SMS agent — dialogue logic, intent recognition, context handling and escalation to a live operator.',
      'I graduated from Odesa Polytechnic National University in Computer Science and Software Engineering. I am based in Seville and looking for remote work on a team with code review and mentorship.',
    ],
  } satisfies L10nList,

  facts: {
    location: { ru: 'Севилья, Испания', en: 'Seville, Spain' } satisfies L10n,
    level: { ru: 'Junior Frontend', en: 'Junior Frontend' } satisfies L10n,
    employment: { ru: 'Удалённая работа', en: 'Open to remote work' } satisfies L10n,
    languages: {
      ru: 'Украинский — родной, English — B1, Español — A2',
      en: 'Ukrainian — native, English — B1, Spanish — A2',
    } satisfies L10n,
  },

  email: 'maliskevich@gmail.com',
  phone: '+34 644 705 898',
  telegram: 'https://t.me/Gileadq',

 // Пока строка пустая - иконка просто не показывается.
  github: 'https://github.com/GileadDev',
  linkedin: 'https://www.linkedin.com/in/serhii-malyskevych-135a8737a/', 
  hh: '',

  // Резюме
  resume: {
    ru: './Serhii_Malyskevych_CV_RU.pdf',
    en: './Serhii_Malyskevych_CV_ENG.pdf',
  } satisfies L10n,

  /** Форма обратной связи работает через Formspree (без своего бэкенда):*/
   
  formspreeId: 'xwlenbvk',

  /** Ссылка на репозиторий самого сайта */
  siteRepo: 'https://github.com/GileadDev/myPortfolio',

  /** Бейдж «Открыт к предложениям» в первом экране. */
  openToWork: true,
};
