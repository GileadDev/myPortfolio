import type { L10n } from '../i18n/LanguageProvider';

export type SkillGroup = {
  title: L10n;
  icon: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: { ru: 'Python', en: 'Python' },
    icon: '🐍',
    items: ['Python', 'ООП', 'Django', 'Requests', 'asyncio'],
  },
  {
    title: { ru: 'Парсинг данных', en: 'Web scraping' },
    icon: '⛏',
    items: ['Selenium', 'Playwright', 'BeautifulSoup', 'Scrapy'],
  },
  {
    title: { ru: 'Боты и интеграции', en: 'Bots & integrations' },
    icon: '⇄',
    items: ['Telegram Bot API', 'REST API', 'Webhooks', 'LLM / AI tools'],
  },
  {
    title: { ru: 'Frontend', en: 'Frontend' },
    icon: '{ }',
    items: ['JavaScript', 'TypeScript', 'React', 'HTML5', 'CSS3'],
  },
  {
    title: { ru: 'Backend и базы данных', en: 'Backend & databases' },
    icon: '▤',
    items: ['Node.js', 'Express', 'Java (Spring)', 'PostgreSQL', 'SQL', 'SQLite'],
  },
  {
    title: { ru: 'Инфраструктура', en: 'Infrastructure' },
    icon: '⚙',
    items: ['Docker', 'Git / GitHub', 'GitHub Actions', 'Jira / Confluence'],
  },
];
