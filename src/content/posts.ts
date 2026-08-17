import type { L10n, L10nList } from '../i18n/LanguageProvider';

export type Post = {
  id: string;
  title: L10n;
  /** Дата в формате ISO: '2026-03-14'. По ней идёт сортировка. */
  date: string;
  /** Анонс на карточке — 1–2 предложения */
  excerpt: L10n;
  /** Текст статьи: массив абзацев. Разворачивается прямо на странице. */
  body: L10nList;
  tags: string[];
};

export const posts: Post[] = [
  {
    id: 'responsive-basics',
    title: {
      ru: 'Адаптивность: что я перестал делать после первых проектов',
      en: 'Responsive layout: what I stopped doing after my first projects',
    },
    date: '2026-06-05',
    excerpt: {
      ru: 'Несколько привычек из начала пути, от которых пришлось отказаться, и что я делаю вместо них.',
      en: 'A few habits from the beginning that had to go, and what I do instead.',
    },
    body: {
      ru: [
        'Первые макеты я верстал от десктопа: делал широкую версию, а потом медиазапросами «чинил» её под телефон. Каждый брейкпойнт добавлял правил, которые отменяли предыдущие.',
        'Переход к mobile-first убрал большую часть этих правил. Базовые стили описывают узкий экран, а медиазапросы только добавляют — ничего не приходится перекрывать.',
        'Второе, от чего отказался, — фиксированные высоты у блоков с текстом. Они выглядят точно по макету ровно до момента, когда текст оказывается длиннее ожидаемого или пользователь увеличил шрифт в браузере.',
        'Третье — привычка проверять только на трёх «стандартных» ширинах. Реальные экраны бывают любыми, поэтому теперь я просто медленно тяну край окна и смотрю, где вёрстка ломается. Обычно ломается не на 768 пикселях, а где-то между.',
      ],
      en: [
        'I used to build layouts desktop-first: make the wide version, then "fix" it for phones with media queries. Every breakpoint added rules that cancelled the previous ones.',
        'Moving to mobile-first removed most of those rules. Base styles describe the narrow screen and media queries only add to them — nothing has to be overridden.',
        'The second habit I dropped was fixed heights on text blocks. They match the mockup exactly, right up until the text runs longer than expected or the user increases their browser font size.',
        'The third was testing only at three "standard" widths. Real screens are any size, so now I simply drag the window edge slowly and watch where the layout breaks. It usually breaks somewhere between the breakpoints, not at 768 pixels.',
      ],
    },
    tags: ['CSS', 'Responsive'],
  },
];
