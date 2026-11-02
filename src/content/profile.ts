import type { L10n, L10nList } from '../i18n/LanguageProvider';

export const profile = {
  name: {
    ru: 'Сергей Малискевич',
    en: 'Serhii Malyskevych',
  } satisfies L10n,

  role: {
    ru: 'Full-Stack Developer | React · Next.js · TypeScript · Python',
    en: 'Full-Stack Developer | React · Next.js · TypeScript · Python',
  } satisfies L10n,

  tagline: {
    ru: 'Разрабатываю современные веб-приложения - от продуманных интерфейсов до серверной логики, API и AI-интеграций. Создаю масштабируемые решения с акцентом на производительность и качество кода.',
    en: 'I develop modern web applications - from intuitive user interfaces to backend logic, APIs, and AI integrations. I build scalable solutions with a strong focus on performance, code quality, and maintainability.',
  } satisfies L10n,

  about: {
    ru: [
      'Я Full-Stack разработчик, специализирующийся на React, Next.js, TypeScript, Node.js и Python. Создаю современные веб-приложения, объединяя удобные пользовательские интерфейсы, надёжную серверную архитектуру, API и базы данных.',
      'Имею опыт разработки полноценных веб-систем, проектирования REST API, работы с PostgreSQL, MongoDB и Redis. Использую Docker, Git и современные инструменты разработки. Самостоятельно реализую функциональность на всех этапах - от проектирования и написания кода до тестирования и развёртывания.',
      'Активно работаю с AI-технологиями, включая OpenAI API, LangChain и LLM. Разрабатываю интеллектуальных ассистентов, автоматизацию процессов и AI-интеграции. В работе уделяю особое внимание производительности, масштабируемости и качеству архитектурных решений.',
    ],
    en: [
      'I\'m a Full-Stack Developer specializing in React, Next.js, TypeScript, Node.js, and Python. I build modern web applications, combining intuitive user interfaces with reliable backend architecture, APIs, and databases',
      'I have hands-on experience developing complete web systems, designing REST APIs, and working with PostgreSQL, MongoDB, and Redis. I use Docker, Git, and modern development tools. I independently manage the entire development process - from architecture and implementation to testing and deployment.',
      'I actively work with AI technologies, including OpenAI API, LangChain, and LLMs. I develop intelligent assistants, workflow automation solutions, and AI integrations. My focus is on performance, scalability, clean code, and well-structured software architecture.',
    ],
  } satisfies L10nList,

  facts: {
    location: { ru: 'Севилья, Испания', en: 'Seville, Spain' } satisfies L10n,
    level: {
      ru: 'Full-Stack Development',
      en: 'Full-Stack Development',
    } satisfies L10n,
    core: {
      ru: 'React, Next.js, TypeScript, Node.js, Python',
      en: 'React, Next.js, TypeScript, Node.js, Python',
    }satisfies L10n,
    employment: { ru: 'Удалённая работа', en: 'Open to remote work' } satisfies L10n,
    languages: {
      ru: 'Украинский — родной, English — B2, Español — A2',
      en: 'Ukrainian — native, English — B2, Spanish — A2',
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
