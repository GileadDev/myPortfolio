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
    company: { ru: 'Тестовое задание', en: 'Test assignment' },
    position: {
      ru: 'Frontend-разработчик — Form Builder',
      en: 'Frontend Developer — Form Builder',
    },
    start: { ru: 'Октябрь 2026', en: 'Oct 2026' },
    end: { ru: 'Октябрь 2026', en: 'Oct 2026' },
    location: { ru: 'Удалённо', en: 'Remote' },
    highlights: {
      ru: [
        'Конструктор форм на Next.js / React / TypeScript: CRUD в админке, редактор с превью и сайдбаром настроек, модалка подтверждения.',
        'Общие Zod-схемы для API, редактора и ответов AI; публичные формы строят валидацию на лету из настроек полей (required, длина, min / max / step).',
        'Бэкенд на Next.js Route Handlers с MongoDB / Mongoose и JWT в httpOnly cookie; сессия проверяется на каждой странице админки и в каждом эндпоинте.',
        'Добавил AI-помощника (LangChain.js + OpenAI), который меняет поля по сообщению в чате; упаковал в Docker Compose и выложил на Vercel.',
      ],
      en: [
        'Built a Next.js / React / TypeScript form builder: admin CRUD, an editor with live preview and a field settings sidebar, public forms with a confirmation modal.',
        'Shared Zod schemas between the API, the editor and AI output; public forms build validation at runtime from field settings (required, length, min / max / step).',
        'Backend on Next.js Route Handlers with MongoDB / Mongoose and JWT auth in httpOnly cookies; the session is checked on every admin page and endpoint.',
        'Added an AI assistant (LangChain.js + OpenAI) that edits fields from chat; packaged with Docker Compose and deployed to Vercel.',
      ],
    },
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Zod', 'MongoDB', 'Docker'],
  },
  {
    company: { ru: 'Фриланс (Fiverr)', en: 'Freelance (Fiverr)' },
    position: {
      ru: 'Инженер — голосовой и SMS-агент на LLM',
      en: 'Engineer — LLM Voice & SMS Agent',
    },
    start: { ru: 'Январь 2026', en: 'Jan 2026' },
    end: { ru: 'Июль 2026', en: 'Jul 2026' },
    location: { ru: 'Удалённо', en: 'Remote' },
    highlights: {
      ru: [
        'Участвовал в разработке и настройке LLM-агента, который обрабатывает входящие звонки и SMS, включая бэкенд-логику диалога и эскалации.',
        'Разработал и интегрировал обработку данных: распознавание намерений, работа с контекстом и автоматическая передача живому оператору.',
        'Работал с распределённой командой через Git; проверял и дорабатывал сгенерированную AI бэкенд-логику на корректность и поддерживаемость.',
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
        'Создавал full stack веб-приложения: фронтенд на React / TypeScript, API на Node.js / Express, данные в PostgreSQL.',
        'Проектировал и использовал REST API; работал с DOM, событиями и асинхронным JavaScript на клиенте; контейнеризировал сервисы в Docker.',
      ],
      en: [
        'Built full stack web applications with React / TypeScript front ends, Node.js / Express APIs and PostgreSQL data stores.',
        'Designed and consumed REST APIs; handled DOM manipulation, events and asynchronous JavaScript on the client; containerized services with Docker.',
      ],
    },
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
  },
  {
    company: { ru: 'Собственный R&D · демо-версия', en: 'Own R&D · demo version' },
    position: {
      ru: 'Разработчик — AI-ассистент для анализа техники',
      en: 'Developer — AI assistant for technique analysis',
    },
    start: { ru: '', en: '' },
    end: { ru: '', en: '' },
    location: { ru: 'Удалённо', en: 'Remote' },
    highlights: {
      ru: [
        'Создал AI-ассистента, который разбирает прыжок фигуриста по видео: отслеживает скелет по кадрам, считает обороты и определяет тип прыжка.',
        'Каждый вывод объясняется признаками, уверенностью и кадрами; в спорных случаях ассистент отвечает «невозможно определить», а не угадывает.',
      ],
      en: [
        'Built an AI assistant that analyzes a figure-skating jump from video: frame-by-frame skeleton tracking, rotation measurement and jump type identification.',
        'Designed explainable output: every conclusion lists its cues, confidence level and source frames, and the assistant answers “not determinable” instead of guessing.',
      ],
    },
    tech: ['Computer Vision', 'Pose Estimation', 'Video Analysis'],
  },
];

export const education: Education[] = [
  {
    institution: {
      ru: 'Национальный университет «Одесская политехника»',
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
      ru: 'Разработка на Java — основы, ООП, алгоритмы, структуры данных',
      en: 'Java Development — fundamentals, OOP, algorithms, data structures',
    },
    period: { ru: 'сен 2015 — фев 2016', en: 'Sep 2015 — Feb 2016' },
  },
];
