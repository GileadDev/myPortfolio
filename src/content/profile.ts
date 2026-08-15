import type { L10n, L10nList } from '../i18n/LanguageProvider';

/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║  ГЛАВНЫЙ ФАЙЛ С ВАШИМИ ДАННЫМИ.                                  ║
 * ║  Заполнен по резюме Serhii_Malyskevych_CV.pdf.                   ║
 * ║  Всё, что помечено «ЗАПОЛНИТЕ», в резюме отсутствовало.          ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

export const profile = {
  name: {
    ru: 'Сергей Малискевич',
    en: 'Serhii Malyskevych',
  } satisfies L10n,

  role: {
    ru: 'Junior Frontend-разработчик',
    en: 'Junior Frontend Developer',
  } satisfies L10n,

  tagline: {
    ru: 'Собираю адаптивные интерфейсы на React и TypeScript. Работаю с REST API, Git',
    en: 'I build responsive interfaces with React and TypeScript. I work with REST APIs, Git',
  } satisfies L10n,

  about: {
    ru: [
      'Junior Frontend-разработчик с базой в JavaScript, TypeScript и React. Делаю адаптивные интерфейсы: семантическая вёрстка на HTML и CSS, работа с DOM и событиями, асинхронный JavaScript, интеграция с REST API.',
      'На фрилансе участвовал в разработке голосового и SMS-агента на LLM — диалоговая логика, распознавание намерений, работа с контекстом и эскалация на живого оператора.',
      'Окончил Одесский политехнический национальный университет по направлению «Компьютерные науки и программная инженерия». Сейчас живу в Севилье и ищу удалённую работу в команде, где есть код-ревью и наставничество.',
    ],
    en: [
      'Junior Frontend Developer with a solid foundation in JavaScript, TypeScript and React. I build responsive interfaces: semantic HTML and CSS, DOM and event handling, asynchronous JavaScript, REST API integration.',
      'On freelance work I helped build an LLM-based voice and SMS agent — dialogue logic, intent recognition, context handling and escalation to a live operator.',
      'I graduated from Odesa Polytechnic National University in Computer Science and Software Engineering. I am based in Seville and looking for remote work on a team with code review and mentorship.',
    ],
  } satisfies L10nList,

  facts: {
    location: { ru: 'Севилья, Испания', en: 'Seville, Spain' } satisfies L10n,
    level: { ru: 'Junior Frontend', en: 'Junior Frontend' } satisfies L10n,
    employment: { ru: 'Удалённая работа', en: 'Open to remote work' } satisfies L10n,
    languages: {
      ru: 'Украинский — родной, English — B1, Español — A2',
      en: 'Ukrainian — native, English — B1, Spanish — A2',
    } satisfies L10n,
  },

  email: 'maliskevich@gmail.com',
  phone: '+34 644 705 898',
  telegram: 'https://t.me/Gileadq',

  // ЗАПОЛНИТЕ: в резюме нет ссылки на GitHub, а для фронтенда это первое,
  // куда смотрит рекрутер. Пока строка пустая — иконка просто не показывается.
  github: 'https://github.com/GileadDev',
  linkedin: 'https://www.linkedin.com/in/serhii-malyskevych-135a8737a/', // ЗАПОЛНИТЕ, если есть профиль
  hh: '',

  // Резюме скопировано в public/. Английская версия одна на оба языка —
  // если сделаете русскую, положите её рядом и поменяйте путь в ru.
  resume: {
    ru: './Serhii_Malyskevych_CV.pdf',
    en: './Serhii_Malyskevych_CV.pdf',
  } satisfies L10n,

  /**
   * Форма обратной связи работает через Formspree (без своего бэкенда):
   *  1. Зарегистрируйтесь на formspree.io и создайте форму;
   *  2. Скопируйте ID из адреса вида https://formspree.io/f/xyzabcd;
   *  3. Вставьте его сюда — форма сразу заработает.
   * Пока строка пустая, форма показывает подсказку и не отправляется.
   */
  formspreeId: 'xwlenbvk',

  /** Ссылка на репозиторий самого сайта — приятный штрих в футере. */
  siteRepo: 'https://github.com/GileadDev/myPortfolio',

  /** Бейдж «Открыт к предложениям» в первом экране. */
  openToWork: true,
};
