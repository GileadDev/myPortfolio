import type { L10n } from '../i18n/LanguageProvider';

export type SkillGroup = {
  title: L10n;
  icon: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: { ru: 'Frontend', en: 'Frontend' },
    icon: '{ }',
    items: ['JavaScript', 'TypeScript', 'React', 'HTML5', 'CSS3', 'Responsive Design'],
  },
  {
    title: { ru: 'Backend', en: 'Backend' },
    icon: '⇄',
    items: ['Node.js', 'Express', 'REST API', 'Java (Spring)', 'Python'],
  },
  {
    title: { ru: 'Базы данных', en: 'Databases' },
    icon: '▤',
    items: ['PostgreSQL', 'SQL', 'SQLite'],
  },
  {
    title: { ru: 'Инфраструктура', en: 'Infrastructure' },
    icon: '⚙',
    items: ['Docker', 'Git / GitHub', 'GitHub Actions'],
  },
  {
    title: { ru: 'AI в разработке', en: 'AI-assisted development' },
    icon: '✦',
    items: ['AI & LLM tools', 'Code review', 'Debugging'],
  },
  {
    title: { ru: 'Процессы и качество', en: 'Process & quality' },
    icon: '✓',
    items: ['Jira / Confluence', 'SonarQube', 'Git workflow'],
  },
];
