import type { L10n, L10nList } from '../i18n/LanguageProvider';

export const profile = {
  name: {
    ru: 'Сергей Малискевич',
    en: 'Serhii Malyskevych',
  } satisfies L10n,

  role: {
    ru: 'Full Stack разработчик (Python / JavaScript)',
    en: 'Full Stack Developer (Python / JavaScript)',
  } satisfies L10n,

  tagline: {
    ru: 'Пишу код, который автоматизирует рутину: парсеры, боты, интеграции с API и веб-сервисы на Python и JavaScript.',
    en: 'I write code that automates the routine: scrapers, bots, API integrations and web services in Python and JavaScript.',
  } satisfies L10n,

  about: {
    ru: [
      'Full stack разработчик: Python на бэкенде и в автоматизации, React и TypeScript на фронтенде. Проектирую REST API, моделирую данные в PostgreSQL и контейнеризирую сервисы в Docker.',
      'Автоматизирую то, что люди делают руками: парсеры для сбора и обработки данных, боты, интеграции с внешними сервисами. Разрабатывал голосового и SMS-агента на LLM — серверную логику диалогов, распознавание намерений и эскалацию на живого оператора.',
      'Работаю в команде через Git, читаю и дорабатываю чужой и сгенерированный код, понимая логику реализации. Живу в Севилье, работаю удалённо.',
    ],
    en: [
      'Full stack developer: Python on the back end and in automation, React and TypeScript on the front end. I design REST APIs, model data in PostgreSQL and containerize services with Docker.',
      'I automate what people do by hand: scrapers for collecting and processing data, bots, integrations with external services. I built an LLM-based voice and SMS agent — backend dialogue logic, intent recognition and escalation to a live operator.',
      'I work in a team through Git and read and adapt both third-party and generated code with a clear grasp of the implementation. Based in Seville, working remotely.',
    ],
  } satisfies L10nList,

  facts: {
    location: { ru: 'Севилья, Испания', en: 'Seville, Spain' } satisfies L10n,
    level: {
      ru: 'Full Stack — Python / JavaScript',
      en: 'Full Stack — Python / JavaScript',
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
  hh: '',

  resume: {
    ru: './Serhii_Malyskevych_CV_RU.pdf',
    en: './Serhii_Malyskevych_CV_ENG.pdf',
  } satisfies L10n,

  formspreeId: 'xwlenbvk',

  siteRepo: 'https://github.com/GileadDev/myPortfolio',

  openToWork: true,
};
