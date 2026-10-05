import type { L10n, L10nList } from '../i18n/LanguageProvider';

export const profile = {
  name: {
    ru: 'Сергей Малискевич',
    en: 'Serhii Malyskevych',
  } satisfies L10n,

  role: {
    ru: 'Frontend-разработчик (React / Next.js)',
    en: 'Frontend Developer (React / Next.js)',
  } satisfies L10n,

  tagline: {
    ru: 'Делаю типизированные интерфейсы с валидацией — от админок до публичных страниц — вместе с API и слоем данных за ними.',
    en: 'I build typed, validated interfaces — from form-heavy admin panels to public pages — with the API and data layer behind them.',
  } satisfies L10n,

  about: {
    ru: [
      'Frontend-разработчик: React, Next.js и TypeScript. Собираю интерфейсы, где типы и схемы валидации общие для фронтенда и API, — ошибки ловятся на этапе сборки, а не в проде.',
      'Есть практический опыт бэкенда: Node.js, REST API, MongoDB / Mongoose и PostgreSQL, JWT-авторизация в httpOnly cookie. Это позволяет вести фичу целиком — от формы на экране до эндпоинта и схемы данных.',
      'Упаковываю проекты в Docker и выкладываю на Vercel. Живу в Севилье, работаю удалённо.',
    ],
    en: [
      'Frontend developer working with React, Next.js and TypeScript. I build interfaces where types and validation schemas are shared between the client and the API, so mistakes surface at build time rather than in production.',
      'I have hands-on backend experience: Node.js, REST APIs, MongoDB / Mongoose and PostgreSQL, JWT auth in httpOnly cookies. That lets me take a feature end to end — from the form on screen to the endpoint and the data schema.',
      'I package projects with Docker and ship them to Vercel. Based in Seville, working remotely.',
    ],
  } satisfies L10nList,

  facts: {
    location: { ru: 'Севилья, Испания', en: 'Seville, Spain' } satisfies L10n,
    level: {
      ru: 'Frontend — React / Next.js',
      en: 'Frontend — React / Next.js',
    } satisfies L10n,
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

  resume: {
    ru: './Serhii_Malyskevych_CV_RU.pdf',
    en: './Serhii_Malyskevych_CV_ENG.pdf',
  } satisfies L10n,

  formspreeId: 'xwlenbvk',

  siteRepo: 'https://github.com/GileadDev/myPortfolio',

  openToWork: true,
};
