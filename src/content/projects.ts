import type { L10n } from '../i18n/LanguageProvider';

export type Project = {
  id: string;
  title: L10n;
  /** Одно предложение: что это и для кого */
  summary: L10n;
  /** 2–4 предложения: какую задачу решали и что сделали именно вы */
  description: L10n;
  tech: string[];
  /** Ссылка на живое демо. Пустая строка — кнопка не показывается. */
  demoUrl: string;
  /** Ссылка на репозиторий. Пустая строка — кнопка не показывается. */
  codeUrl: string;
  /** Скриншот 16:10 в public/projects/. Пустая строка — рисуется градиентная заглушка. */
  image: string;
  /** Ключевые проекты показываются первыми и крупнее */
  featured: boolean;
};

/**
 * Первые два проекта восстановлены по резюме, последние два — пустые слоты.
 *
 * Что реально смотрят на ревью портфолио:
 *  — рабочее демо (важнее любого описания);
 *  — ссылка на код с внятными коммитами и README;
 *  — какую задачу решал проект, а не только список технологий.
 * Три хорошо описанных проекта сильнее восьми брошенных.
 */
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
    demoUrl: '', // ЗАПОЛНИТЕ после публикации на GitHub Pages
    codeUrl: '', // ЗАПОЛНИТЕ ссылкой на репозиторий
    image: '',
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
    image: '',
    featured: true,
  },
  {
    id: 'slot-1',
    // ЗАМЕНИТЕ на свой фронтенд-проект. Лучше всего — тот, у которого есть живое демо.
    title: { ru: 'Ваш проект на React', en: 'Your React project' },
    summary: {
      ru: 'Одно предложение: что это и для кого',
      en: 'One sentence: what it is and who it is for',
    },
    description: {
      ru: 'Опишите задачу, что сделали именно вы и что получилось в результате. Два-четыре предложения. Если есть цифры — время загрузки, количество экранов, оценка Lighthouse — приведите их: они убеждают сильнее прилагательных.',
      en: 'Describe the task, what you personally did and what came out of it. Two to four sentences. If you have numbers — load time, number of screens, Lighthouse score — include them: they persuade better than adjectives.',
    },
    tech: ['React', 'TypeScript', 'CSS'],
    demoUrl: '',
    codeUrl: '',
    image: '',
    featured: false,
  },
  {
    id: 'slot-2',
    // ЗАМЕНИТЕ или удалите весь этот объект, если третьего проекта пока нет.
    title: { ru: 'Ещё один проект', en: 'One more project' },
    summary: {
      ru: 'Учебный или пет-проект тоже считается',
      en: 'An educational or pet project counts too',
    },
    description: {
      ru: 'Пустых слотов лучше не оставлять: два проекта с рабочими ссылками смотрятся сильнее четырёх с описаниями и без демо. Если заполнить нечем — просто удалите этот объект из массива.',
      en: 'Do not leave empty slots: two projects with working links look stronger than four with descriptions and no demo. If you have nothing to put here, just delete this object from the array.',
    },
    tech: ['JavaScript', 'HTML', 'CSS'],
    demoUrl: '',
    codeUrl: '',
    image: '',
    featured: false,
  },
];
