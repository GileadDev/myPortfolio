import type { L10n } from '../i18n/LanguageProvider';

export type Project = {
  id: string;
  title: L10n;
  summary: L10n;
  description: L10n;
  tech: string[];
  video: string;
  demoUrl: string;
  codeUrl: string;
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 'form-builder',
    title: { ru: 'Form Builder — конструктор форм', en: 'Form Builder' },
    summary: {
      ru: 'Next.js и TypeScript: редактор форм с живым превью и AI-помощником',
      en: 'Next.js and TypeScript: a form editor with live preview and an AI assistant',
    },
    description: {
      ru: 'Конструктор форм: CRUD в админке, редактор с превью и сайдбаром настроек поля, публичные формы с модалкой подтверждения. Zod-схемы общие для API, редактора и ответов AI — публичные формы собирают валидацию на лету из настроек поля (required, длина, min / max / step). Бэкенд на Next.js Route Handlers с MongoDB и JWT в httpOnly cookie, сессия проверяется на каждой странице админки и в каждом эндпоинте. AI-помощник на LangChain.js и OpenAI меняет поля по сообщению в чате.',
      en: 'A form builder: admin CRUD, an editor with live preview and a field settings sidebar, public forms with a confirmation modal. Zod schemas are shared between the API, the editor and AI output — public forms assemble validation at runtime from field settings (required, length, min / max / step). The backend runs on Next.js Route Handlers with MongoDB and JWT in httpOnly cookies, and the session is checked on every admin page and endpoint. An AI assistant built on LangChain.js and OpenAI edits fields straight from chat.',
    },
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Zod', 'MongoDB', 'Docker'],
    video: '',
    demoUrl: 'https://tesct-task-remix-js.vercel.app/',
    codeUrl: 'https://github.com/GileadDev/Tesct-task-RemixJS',
    image: './projects/form-builder.webp',
    featured: true,
  },
  {
    id: 'ai-coach',
    title: {
      ru: 'AI-ассистент для анализа техники',
      en: 'AI assistant for technique analysis',
    },
    summary: {
      ru: 'Разбор прыжка фигуриста по видео: тип, обороты, недокрут',
      en: 'Figure-skating jump analysis from video: type, rotations, under-rotation',
    },
    description: {
      ru: 'Ассистент разбирает прыжок по видеозаписи: отслеживает скелет спортсмена по кадрам, считает обороты в воздухе и определяет тип прыжка. Каждый вывод объясняется — какие признаки его подтверждают, с какой уверенностью и на каких кадрах. В спорных случаях, когда ракурс съёмки не позволяет различить Lutz и Flip по ребру конька, ассистент отвечает «невозможно определить» вместо догадки.',
      en: 'The assistant analyzes a jump from video: frame-by-frame skeleton tracking of the athlete, rotation counting and jump type identification. Every conclusion is explained — which cues support it, with what confidence and on which frames. In ambiguous cases, when the camera angle cannot separate a Lutz from a Flip by the blade edge, the assistant answers “not determinable” instead of guessing.',
    },
    tech: ['Computer Vision', 'Pose Estimation', 'Video Analysis'],
    video: './projects/ai-coach.mp4',
    demoUrl: '',
    codeUrl: '',
    image: './projects/ai-coach-poster.webp',
    featured: true,
  },
  {
    id: 'llm-agent',
    title: {
      ru: 'Голосовой и SMS-агент на LLM',
      en: 'LLM Voice & SMS Agent',
    },
    summary: {
      ru: 'Обработка входящих звонков и сообщений без оператора',
      en: 'Handling inbound calls and messages without an operator',
    },
    description: {
      ru: 'Коммерческий проект на фрилансе: агент на базе LLM принимает входящие звонки и SMS. Отвечал за бэкенд-логику диалога — распознавание намерений, работу с контекстом разговора и автоматическую передачу живому оператору, когда модель не справляется.',
      en: 'A commercial freelance project: an LLM-based agent that answers inbound calls and SMS. I worked on the backend dialogue logic — intent recognition, conversation context handling and automated handover to a live operator when the model falls short.',
    },
    tech: ['LLM / AI tools', 'REST API', 'Git'],
    video: '',
    demoUrl: '',
    codeUrl: '',
    image: './projects/LLM-bot.webp',
    featured: false,
  },
  {
    id: 'portfolio',
    title: { ru: 'Этот сайт-портфолио', en: 'This portfolio site' },
    summary: {
      ru: 'SPA на React 19 и TypeScript с двумя языками и двумя темами',
      en: 'A React 19 + TypeScript SPA with two languages and two themes',
    },
    description: {
      ru: 'Одностраничный сайт-резюме без бэкенда. Контент вынесен в типизированные файлы и хранится сразу на двух языках, переключение RU/EN мгновенное. Тёмная тема применяется до первой отрисовки, поэтому нет вспышки белым. Доступность — скип-линк, :focus-visible, aria-подписи и поддержка prefers-reduced-motion. Сборка и публикация автоматизированы через GitHub Actions.',
      en: 'A single-page CV site with no backend. Content lives in typed files in both languages, so RU/EN switching is instant. The dark theme is applied before first paint, so there is no white flash. Accessibility covers a skip link, :focus-visible, aria labels and prefers-reduced-motion support. Build and deployment are automated with GitHub Actions.',
    },
    tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'GitHub Actions'],
    video: '',
    demoUrl: 'https://gileaddev.github.io/myPortfolio',
    codeUrl: 'https://github.com/GileadDev/myPortfolio',
    image: './projects/myPortfolio.webp',
    featured: false,
  },
];
