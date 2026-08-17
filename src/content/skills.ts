import type { L10n } from '../i18n/LanguageProvider';

export type SkillGroup = {
  title: L10n;
  /** Иконка группы — эмодзи или короткий символ */
  icon: string;
  items: string[];
};


export const skillGroups: SkillGroup[] = [
  {
    title: { ru: 'Frontend — ядро', en: 'Frontend core' },
    icon: '{ }',
    items: ['JavaScript', 'TypeScript', 'React', 'HTML5', 'CSS3'],
  },
  {
    title: { ru: 'Вёрстка и браузер', en: 'Layout & browser' },
    icon: '◑',
    items: [
      'Responsive Web Design',
      'DOM & Event Handling',
      'Async JavaScript',
      'REST API',
      'Flexbox / Grid',
    ],
  },
  {
    title: { ru: 'Инструменты разработки', en: 'Development tools' },
    icon: '⚙',
    items: ['Git / GitHub', 'Docker', 'Jira / Confluence', 'SonarQube'],
  },
  {
    title: { ru: 'AI в разработке', en: 'AI-assisted development' },
    icon: '✦',
    items: [
      'AI & LLM tools',
      'Разбор сгенерированного кода',
      'Отладка и доработка логики',
    ],
  },
  {
    title: { ru: 'Базы данных', en: 'Databases' },
    icon: '▤',
    items: ['SQL', 'PostgreSQL', 'SQLite'],
  },
  {
    title: { ru: 'Дополнительно', en: 'Also' },
    icon: '＋',
    items: ['Python', 'Java fundamentals', 'ООП', 'Алгоритмы и структуры данных'],
  },
];
