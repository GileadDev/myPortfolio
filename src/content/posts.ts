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

/**
 * ⚠️ ЭТО ЧЕРНОВИКИ, А НЕ ГОТОВЫЕ ТЕКСТЫ.
 *
 * Темы взяты из вашего резюме (работа с AI-сгенерированным кодом,
 * адаптивная вёрстка), но написаны не вами. Перед публикацией
 * перепишите своими словами и добавьте конкретику из своих задач —
 * иначе блог сработает против вас на собеседовании.
 *
 * Не хотите блог — очистите массив: `export const posts: Post[] = [];`
 * Секция исчезнет из сайта и из меню автоматически.
 */
export const posts: Post[] = [
  {
    id: 'ai-generated-code',
    title: {
      ru: 'Что я проверяю в коде, который написал AI',
      en: 'What I check in code an AI wrote',
    },
    date: '2026-07-18',
    excerpt: {
      ru: 'Генератор выдаёт работающий на вид код за секунды. Разбираю, на что я смотрю прежде, чем принять его в проект.',
      en: 'A generator produces plausible-looking code in seconds. Here is what I look at before letting it into a project.',
    },
    body: {
      ru: [
        'Работая над агентом для звонков и SMS, я много раз получал от модели код, который запускался с первого раза и делал не совсем то, что нужно. Со временем сложился короткий список проверок.',
        'Первое — граничные случаи. Сгенерированный код обычно отлично обрабатывает счастливый сценарий и молчит о том, что будет при пустом ответе, обрыве соединения или неожиданном формате данных.',
        'Второе — лишние зависимости. Модель охотно тянет библиотеку ради одной функции. Часто эту функцию быстрее написать самому, чем объяснять команде, зачем в проекте появился новый пакет.',
        'Третье — совпадает ли логика с задачей. Код может быть корректным сам по себе и при этом решать чуть другую задачу: не тот приоритет условий, не та ветка эскалации. Это ловится только чтением, тесты тут не помогут.',
        'Вывод, к которому я пришёл: AI хорошо экономит время на рутине, но ответственность за логику остаётся на разработчике. Если я не могу объяснить строку — она не идёт в проект.',
      ],
      en: [
        'While working on the calls and SMS agent I repeatedly got code from the model that ran on the first try and did not quite do what was needed. Over time a short checklist emerged.',
        'First: edge cases. Generated code usually handles the happy path well and says nothing about an empty response, a dropped connection or an unexpected data format.',
        'Second: unnecessary dependencies. A model will happily pull in a library for a single function. Often that function is faster to write yourself than to explain to the team why a new package appeared in the project.',
        'Third: does the logic match the task. Code can be correct in itself and still solve a slightly different problem — the wrong condition order, the wrong escalation branch. Only reading catches this; tests will not.',
        'The conclusion I reached: AI saves real time on routine work, but responsibility for the logic stays with the developer. If I cannot explain a line, it does not go into the project.',
      ],
    },
    tags: ['AI', 'Code Review'],
  },
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
