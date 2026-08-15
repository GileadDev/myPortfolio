/**
 * Строки интерфейса (кнопки, заголовки секций, состояния формы).
 * Личные данные сюда НЕ пишем — они лежат в src/content/.
 */
export const ui = {
  'nav.about': { ru: 'Обо мне', en: 'About' },
  'nav.skills': { ru: 'Навыки', en: 'Skills' },
  'nav.projects': { ru: 'Проекты', en: 'Projects' },
  'nav.experience': { ru: 'Опыт', en: 'Experience' },
  'nav.blog': { ru: 'Блог', en: 'Blog' },
  'nav.contact': { ru: 'Контакты', en: 'Contact' },
  'nav.open': { ru: 'Открыть меню', en: 'Open menu' },
  'nav.close': { ru: 'Закрыть меню', en: 'Close menu' },

  'hero.available': { ru: 'Открыт к предложениям', en: 'Open to work' },
  'hero.viewProjects': { ru: 'Смотреть проекты', en: 'View projects' },
  'hero.downloadCv': { ru: 'Скачать резюме', en: 'Download CV' },
  'hero.scroll': { ru: 'Листайте вниз', en: 'Scroll down' },

  'about.title': { ru: 'Обо мне', en: 'About me' },
  'about.subtitle': { ru: 'Коротко о том, что я делаю', en: 'A short introduction' },
  'about.factsTitle': { ru: 'Факты', en: 'Quick facts' },
  'about.location': { ru: 'Локация', en: 'Location' },
  'about.level': { ru: 'Уровень', en: 'Level' },
  'about.employment': { ru: 'Формат', en: 'Employment' },
  'about.languages': { ru: 'Языки', en: 'Languages' },

  'skills.title': { ru: 'Навыки', en: 'Skills' },
  'skills.subtitle': {
    ru: 'Технологии, с которыми я работаю каждый день',
    en: 'Technologies I work with day to day',
  },

  'projects.title': { ru: 'Проекты', en: 'Projects' },
  'projects.subtitle': {
    ru: 'Работы, которые лучше всего показывают, что я умею',
    en: 'The work that best shows what I can do',
  },
  'projects.demo': { ru: 'Демо', en: 'Live demo' },
  'projects.code': { ru: 'Код', en: 'Source' },
  'projects.featured': { ru: 'Ключевой проект', en: 'Featured' },
  'projects.showAll': { ru: 'Показать все проекты', en: 'Show all projects' },
  'projects.showLess': { ru: 'Свернуть', en: 'Show less' },

  'experience.title': { ru: 'Опыт работы', en: 'Experience' },
  'experience.subtitle': { ru: 'Где и над чем я работал', en: 'Where I worked and on what' },
  'experience.present': { ru: 'по настоящее время', en: 'Present' },
  'experience.educationTitle': { ru: 'Образование и курсы', en: 'Education & courses' },

  'blog.title': { ru: 'Блог', en: 'Blog' },
  'blog.subtitle': {
    ru: 'Разбираю задачи, с которыми столкнулся сам',
    en: 'Notes on problems I ran into myself',
  },
  'blog.read': { ru: 'Читать', en: 'Read' },
  'blog.collapse': { ru: 'Свернуть', en: 'Collapse' },
  'blog.readingTime': { ru: 'мин чтения', en: 'min read' },

  'contact.title': { ru: 'Связаться со мной', en: 'Get in touch' },
  'contact.subtitle': {
    ru: 'Отвечаю в течение суток. Открыт к обсуждению вакансий и проектов.',
    en: 'I reply within a day. Happy to discuss roles and projects.',
  },
  'contact.name': { ru: 'Ваше имя', en: 'Your name' },
  'contact.email': { ru: 'Email для ответа', en: 'Email to reply to' },
  'contact.message': { ru: 'Сообщение', en: 'Message' },
  'contact.messagePlaceholder': {
    ru: 'Расскажите о вакансии или задаче…',
    en: 'Tell me about the role or the task…',
  },
  'contact.send': { ru: 'Отправить', en: 'Send message' },
  'contact.sending': { ru: 'Отправляю…', en: 'Sending…' },
  'contact.success': {
    ru: 'Сообщение отправлено. Спасибо, скоро отвечу!',
    en: 'Message sent. Thanks, I will reply soon!',
  },
  'contact.error': {
    ru: 'Не удалось отправить. Напишите мне на почту напрямую.',
    en: 'Sending failed. Please email me directly.',
  },
  'contact.notConfigured': {
    ru: 'Форма ещё не подключена: укажите formspreeId в src/content/profile.ts',
    en: 'Form is not connected yet: set formspreeId in src/content/profile.ts',
  },
  'contact.required': { ru: 'Заполните это поле', en: 'This field is required' },
  'contact.invalidEmail': { ru: 'Проверьте формат email', en: 'Check the email format' },
  'contact.orDirect': { ru: 'Или напрямую', en: 'Or reach me directly' },
  'contact.phone': { ru: 'Телефон', en: 'Phone' },
  'contact.copy': { ru: 'Скопировать', en: 'Copy' },
  'contact.copied': { ru: 'Скопировано', en: 'Copied' },

  'footer.builtWith': { ru: 'Собрано на', en: 'Built with' },
  'footer.sourceCode': { ru: 'Исходный код сайта', en: 'Source code of this site' },
  'footer.rights': { ru: 'Все права защищены', en: 'All rights reserved' },

  'theme.toLight': { ru: 'Включить светлую тему', en: 'Switch to light theme' },
  'theme.toDark': { ru: 'Включить тёмную тему', en: 'Switch to dark theme' },
  'lang.switch': { ru: 'Switch to English', en: 'Переключить на русский' },
  'common.toTop': { ru: 'Наверх', en: 'Back to top' },
} as const satisfies Record<string, { ru: string; en: string }>;

export type UiKey = keyof typeof ui;
