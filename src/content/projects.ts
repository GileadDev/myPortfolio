import type { L10n } from '../i18n/LanguageProvider';

export type Project = {
  id: string;
  title: L10n;
  summary: L10n;
  description: L10n;
  tech: string[];
  demoUrl: string;
  codeUrl: string;
  image: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: 'llm-agent',
    title: {
      ru: 'Голосовой и SMS-агент на LLM',
      en: 'LLM Voice & SMS Agent',
    },
    summary: {
      ru: 'Серверная логика диалогов и эскалации на оператора',
      en: 'Backend dialogue flow and escalation to a live operator',
    },
    description: {
      ru: 'Коммерческий проект на фрилансе: агент на базе LLM принимает входящие звонки и SMS. Отвечал за серверную логику диалогов — распознавание намерений, работу с контекстом разговора и автоматическую эскалацию на живого оператора, когда модель не справляется. Проверял и дорабатывал сгенерированный ИИ бэкенд-код на корректность и поддерживаемость.',
      en: 'A commercial freelance project: an LLM-based agent that answers inbound calls and SMS. I worked on the backend dialogue logic — intent recognition, conversation context handling and automated escalation to a live operator when the model falls short. I reviewed and adjusted AI-generated backend code for correctness and maintainability.',
    },
    tech: ['LLM / AI tools', 'REST API', 'Git'],
    demoUrl: '',
    codeUrl: '',
    image: './projects/LLM-bot.webp',
    featured: true,
  },
  {
    id: 'portfolio',
    title: { ru: 'Этот сайт-портфолио', en: 'This portfolio site' },
    summary: {
      ru: 'SPA на React 19 и TypeScript с двумя языками и двумя темами',
      en: 'A React 19 + TypeScript SPA with two languages and two themes',
    },
    description: {
      ru: 'Одностраничный сайт-резюме без бэкенда. Весь контент вынесен в типизированные файлы и хранится сразу на двух языках, переключение RU/EN мгновенное. Тёмная тема применяется до первой отрисовки, поэтому нет вспышки белым. Анимации появления сделаны на Intersection Observer, доступность — скип-линк, :focus-visible, aria-подписи и поддержка prefers-reduced-motion. Сборка и публикация автоматизированы через GitHub Actions.',
      en: 'A single-page CV site with no backend. All content lives in typed files in both languages, so RU/EN switching is instant. The dark theme is applied before first paint, so there is no white flash. Reveal animations run on Intersection Observer; accessibility covers a skip link, :focus-visible, aria labels and prefers-reduced-motion support. Build and deployment are automated with GitHub Actions.',
    },
    tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'GitHub Actions'],
    demoUrl: 'https://gileaddev.github.io/myPortfolio',
    codeUrl: 'https://github.com/GileadDev/myPortfolio',
    image: './projects/myPortfolio.webp',
    featured: true,
  },
];
