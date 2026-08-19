import type { L10n, L10nList } from '../i18n/LanguageProvider';

export type Job = {
  company: L10n;
  position: L10n;
  start: L10n;
  end: L10n;
  location: L10n;
  highlights: L10nList;
  tech: string[];
};

export type Education = {
  institution: L10n;
  title: L10n;
  period: L10n;
  certificateUrl?: string;
};

export const jobs: Job[] = [
  {
    company: { ru: 'Фриланс (Fiverr)', en: 'Freelance (Fiverr)' },
    position: {
      ru: 'Junior-инженер — голосовой и SMS-агент на LLM',
      en: 'Junior Engineer — LLM Voice & SMS Agent',
    },
    start: { ru: '15.01.2026', en: '15.01.2026' },
    end: { ru: '12.07.2026', en: '12.07.2026' },
    location: { ru: 'Удалённо', en: 'Remote' },
    highlights: {
      ru: [
        'Участвовал в разработке и настройке LLM-агента для обработки звонков и SMS, включая серверную логику диалогов и эскалации.',
        'Разрабатывал и интегрировал обработку данных, связывающую распознавание намерений, контекст и автоматическую эскалацию оператору.',
        'Работал в распределённой команде через Git; проверял и дорабатывал сгенерированный ИИ бэкенд-код на корректность и поддерживаемость.',
      ],
      en: [
        'Supported development and configuration of an LLM-based agent handling incoming calls and SMS, including backend logic for dialogue flow and escalation.',
        'Built and integrated data-processing routines connecting intent recognition, context handling and automated escalation to a live operator.',
        'Collaborated with a distributed technical team using Git; reviewed and adjusted AI-generated backend logic for correctness and maintainability.',
      ],
    },
    tech: ['LLM / AI tools', 'REST API', 'Git'],
  },
  {
    company: { ru: 'Самостоятельно', en: 'Self-directed' },
    position: {
      ru: 'Личные и учебные проекты — Full Stack разработка',
      en: 'Personal & Educational Projects — Full Stack Development',
    },
    start: { ru: '', en: '' },
    end: { ru: '', en: '' },
    location: { ru: 'Удалённо', en: 'Remote' },
    highlights: {
      ru: [
        'Разрабатывал full stack веб-приложения: фронтенд на React/TypeScript, API на Node.js/Express и хранилище на PostgreSQL.',
        'Проектировал и использовал REST API, работал с DOM, обработкой событий и асинхронным JavaScript на клиенте.',
        'Контейнеризировал сервисы с Docker, использовал SQL/SQLite для локального хранения данных при разработке.',
      ],
      en: [
        'Built full stack web applications pairing React/TypeScript front ends with Node.js/Express APIs and PostgreSQL data stores.',
        'Designed and consumed REST APIs, handled DOM manipulation, event handling and asynchronous JavaScript on the client.',
        'Containerized services with Docker and used SQL/SQLite for local data persistence during development.',
      ],
    },
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
  },
];

export const education: Education[] = [
  {
    institution: {
      ru: 'Одесский политехнический национальный университет',
      en: 'Odesa Polytechnic National University',
    },
    title: {
      ru: 'Компьютерные науки и программная инженерия — Java, ООП, структуры данных, алгоритмы, SQL, Git, основы проектирования ПО',
      en: 'Computer Science & Software Engineering — Java, OOP, data structures, algorithms, SQL, Git, software design fundamentals',
    },
    period: { ru: '2017 — 2022', en: '2017 — 2022' },
  },
  {
    institution: { ru: 'STEP IT Academy', en: 'STEP IT Academy' },
    title: {
      ru: 'Java-разработка — основы, ООП, алгоритмы, структуры данных',
      en: 'Java Development — fundamentals, OOP, algorithms, data structures',
    },
    period: { ru: 'Сентябрь 2015 — февраль 2016', en: 'Sep 2015 — Feb 2016' },
  },
];
