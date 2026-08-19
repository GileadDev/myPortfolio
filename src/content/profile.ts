import type { L10n, L10nList } from '../i18n/LanguageProvider';

export const profile = {
  name: {
    ru: 'Сергей Малискевич',
    en: 'Serhii Malyskevych',
  } satisfies L10n,

  role: {
    ru: 'Full Stack разработчик (React / Node)',
    en: 'Full Stack Developer (React / Node)',
  } satisfies L10n,

  tagline: {
    ru: 'Делаю веб-приложения целиком: интерфейсы на React и TypeScript, API на Node.js и Express, данные в PostgreSQL, сервисы в Docker.',
    en: 'I build web applications end to end: React and TypeScript interfaces, Node.js and Express APIs, PostgreSQL data, services in Docker.',
  } satisfies L10n,

  about: {
    ru: [
      'Full stack разработчик с равным вниманием к фронтенду на React/TypeScript и бэкенду на Node.js/Express, Java (Spring) и SQL. Проектирую REST API, моделирую данные в PostgreSQL и контейнеризирую сервисы с Docker.',
      'На клиентской стороне делаю адаптивные и доступные интерфейсы: семантическая вёрстка, работа с DOM и событиями, асинхронный JavaScript.',
      'Есть опыт командной работы через Git и с AI-инструментами разработки — читаю, оцениваю и дорабатываю сгенерированный код, понимая логику реализации. Живу в Севилье, открыт к удалённой работе.',
    ],
    en: [
      'Full stack developer with a balanced foundation across the React/TypeScript front end and Node.js/Express, Java (Spring) and SQL on the back end. I design REST APIs, model data in PostgreSQL and containerize services with Docker.',
      'On the client side I build responsive, accessible interfaces: semantic markup, DOM and event handling, asynchronous JavaScript.',
      'I have experience with Git-based team workflows and AI-assisted development — I read, evaluate and adapt generated code with a clear grasp of the underlying implementation. Based in Seville, open to remote work.',
    ],
  } satisfies L10nList,

  facts: {
    location: { ru: 'Севилья, Испания', en: 'Seville, Spain' } satisfies L10n,
    level: { ru: 'Full Stack (React / Node)', en: 'Full Stack (React / Node)' } satisfies L10n,
    employment: { ru: 'Удалённая работа', en: 'Open to remote work' } satisfies L10n,
    languages: {
      ru: 'Украинский — родной, English — B1, Español — A2',
      en: 'Ukrainian — native, English — B1, Spanish — A2',
    } satisfies L10n,
  },

  email: 'maliskevich@gmail.com',
  phone: '+34 644 705 898',
  telegram: 'https://t.me/Gileadq',

  github: 'https://github.com/GileadDev',
  linkedin: 'https://www.linkedin.com/in/serhii-malyskevych-135a8737a/',
  hh: '',

  resume: {
    ru: './Serhii_Malyskevych_CV_RU.pdf',
    en: './Serhii_Malyskevych_CV_ENG.pdf',
  } satisfies L10n,

  formspreeId: 'xwlenbvk',

  siteRepo: 'https://github.com/GileadDev/myPortfolio',

  openToWork: true,
};
