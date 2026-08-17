import type { L10n, L10nList } from '../i18n/LanguageProvider';

export type Job = {
  company: L10n;
  position: L10n;
  /**
   * Формат: 'Март 2024' / 'Mar 2024'.
   * Если start пустой — строка с датами не выводится вообще.
   */
  start: L10n;
  /** Пустой при непустом start = «по настоящее время» */
  end: L10n;
  location: L10n;
  highlights: L10nList;
  tech: string[];
};

export type Education = {
  institution: L10n;
  title: L10n;
  period: L10n;
  /** Ссылка на сертификат, если есть */
  certificateUrl?: string;
};


export const jobs: Job[] = [
  {
    company: { ru: 'Фриланс (Fiverr)', en: 'Freelance (Fiverr)' },
    position: {
      ru: 'Junior Engineer — голосовой и SMS-агент на LLM',
      en: 'Junior Engineer — LLM Voice & SMS Agent',
    },
    start: { ru: '15.01.2026', en: '15.01.2026' }, 
    end: { ru: '12.07.2026', en: '12.07.2026' }, 
    location: { ru: 'Удалённо', en: 'Remote' },
    highlights: {
      ru: [
        'Участвовал в разработке и настройке агента на базе LLM для входящих звонков и SMS.',
        'Работал с диалоговой логикой, распознаванием намерений, обработкой контекста, автоматической обработкой данных и эскалацией на живого оператора.',
        'Использовал Git и рабочие инструменты в распределённой технической команде.',
        'Разбирал решения, сгенерированные AI, и корректировал логику системы под задачу.',
      ],
      en: [
        'Supported the development and configuration of an LLM-based agent for incoming calls and SMS.',
        'Worked with dialogue logic, intent recognition, context handling, automated data processing and escalation to a live operator.',
        'Used Git and development tooling within a distributed technical team.',
        'Reviewed AI-generated solutions and adjusted the system logic to fit the task.',
      ],
    },
    tech: ['LLM / AI tools', 'Python', 'REST API', 'Git'],
  },

];

/** Раздел EDUCATION из резюме. */
export const education: Education[] = [
  {
    institution: {
      ru: 'Одесский политехнический национальный университет',
      en: 'Odesa Polytechnic National University',
    },
    title: {
      ru: 'Институт компьютерных систем — компьютерные науки и программная инженерия',
      en: 'Institute of Computer Systems — Computer Science and Software Engineering',
    },
    period: { ru: '2017 — 2022', en: '2017 — 2022' },
  },
  {
    institution: { ru: 'STEP IT Academy', en: 'STEP IT Academy' },
    title: {
      ru: 'Java-разработка: основы Java, ООП, алгоритмы и структуры данных',
      en: 'Java Development: Java fundamentals, OOP, algorithms and data structures',
    },
    period: { ru: 'Сентябрь 2015 — февраль 2016', en: 'Sep 2015 — Feb 2016' },
  },
];
