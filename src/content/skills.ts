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
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5 / CSS3',
      'Tailwind CSS',
      'shadcn/ui',
    ],
  },
  {
    title: { ru: 'Формы и валидация', en: 'Forms & validation' },
    icon: '✓',
    items: ['React Hook Form', 'Zod', 'Runtime validation'],
  },
  {
    title: { ru: 'Backend и данные', en: 'Backend & data' },
    icon: '⇄',
    items: ['Node.js / Express', 'REST API', 'MongoDB / Mongoose', 'PostgreSQL', 'JWT auth'],
  },
  {
    title: { ru: 'Инструменты и деплой', en: 'Tooling & deployment' },
    icon: '⚙',
    items: ['Git / GitHub', 'Docker', 'Vercel', 'GitHub Actions', 'ESLint / Prettier'],
  },
  {
    title: { ru: 'AI в разработке', en: 'AI in development' },
    icon: '✦',
    items: ['AI & LLM tools', 'LangChain.js', 'OpenAI API'],
  },
  {
    title: { ru: 'Процессы и качество', en: 'Process & quality' },
    icon: '▤',
    items: ['Jira / Confluence', 'SonarQube', 'Code review'],
  },
];
