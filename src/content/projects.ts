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
    id: 'portfolio',
    title: { ru: 'Этот сайт-портфолио', en: 'This portfolio site' },
    summary: {
      ru: 'SPA на React 19 и TypeScript с двумя языками и двумя темами',
      en: 'A React 19 + TypeScript SPA with two languages and two themes',
    },
    description: {
      ru: 'Одностраничный сайт-резюме без бэкенда. Весь контент вынесен в типизированные файлы и хранится сразу на двух языках, переключение RU/EN мгновенное. Тёмная тема применяется до первой отрисовки, поэтому нет вспышки белым. Анимации появления сделаны на Intersection Observer, доступность — скип-линк, :focus-visible, aria-подписи и поддержка prefers-reduced-motion.',
      en: 'A single-page CV site with no backend. All content lives in typed files in both languages, so RU/EN switching is instant. The dark theme is applied before first paint, so there is no white flash. Reveal animations run on Intersection Observer; accessibility covers a skip link, :focus-visible, aria labels and prefers-reduced-motion support.',
    },
    tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'GitHub Actions'],
    demoUrl: 'https://gileaddev.github.io/myPortfolio',
    codeUrl: 'https://github.com/GileadDev/myPortfolio',
    image: './projects/myPortfolio.webp',
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
      ru: 'Коммерческий проект на фрилансе: агент на базе LLM принимает входящие звонки и SMS. Отвечал за диалоговую логику, распознавание намерений и работу с контекстом разговора, а также за сценарий эскалации на живого оператора, когда модель не справляется. Разбирал сгенерированные AI решения и правил логику под реальные сценарии.',
      en: 'A commercial freelance project: an LLM-based agent that answers inbound calls and SMS. I worked on dialogue logic, intent recognition and conversation context handling, plus the escalation path to a live operator when the model falls short. I reviewed AI-generated solutions and adjusted the logic for real-world scenarios.',
    },
    tech: ['LLM / AI tools', 'Python', 'REST API', 'Git'],
    demoUrl: '',
    codeUrl: '',
    image: './projects/LLM-bot.webp',
    featured: true,
  },
];
