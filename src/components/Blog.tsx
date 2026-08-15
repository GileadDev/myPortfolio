import { useMemo, useState } from 'react';
import { useLanguage } from '../i18n/LanguageProvider';
import { posts, type Post } from '../content/posts';
import { Section } from './Section';
import { ChevronDownIcon } from './Icons';

/** Примерная оценка времени чтения: 180 слов в минуту. */
function readingTime(paragraphs: string[]) {
  const words = paragraphs.join(' ').trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 180));
}

function PostCard({ post }: { post: Post }) {
  const { t, tr, trl, locale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const body = trl(post.body);
  const formattedDate = new Date(post.date).toLocaleDateString(
    locale === 'ru' ? 'ru-RU' : 'en-GB',
    { day: 'numeric', month: 'long', year: 'numeric' },
  );

  return (
    <article className="card overflow-hidden p-6">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-slate-500 dark:text-slate-500">
        <time dateTime={post.date}>{formattedDate}</time>
        <span aria-hidden="true">·</span>
        <span>
          {readingTime(body)} {t('blog.readingTime')}
        </span>
      </div>

      <h3 className="mt-2.5 text-xl font-bold text-balance text-slate-900 dark:text-white">
        {tr(post.title)}
      </h3>

      <p className="mt-2.5 text-pretty text-slate-600 dark:text-slate-400">{tr(post.excerpt)}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <li key={tag} className="chip">
            #{tag}
          </li>
        ))}
      </ul>

      {isOpen && (
        <div className="mt-6 space-y-4 border-t border-slate-200 pt-6 dark:border-slate-800">
          {body.map((paragraph, index) => (
            <p key={index} className="leading-relaxed text-pretty">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        className="text-brand-600 dark:text-brand-400 mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors hover:opacity-80"
      >
        {isOpen ? t('blog.collapse') : t('blog.read')}
        <ChevronDownIcon
          className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
    </article>
  );
}

export function Blog() {
  const { t } = useLanguage();

  // Свежие записи сверху
  const sorted = useMemo(
    () => [...posts].sort((a, b) => b.date.localeCompare(a.date)),
    [],
  );

  if (sorted.length === 0) return null;

  return (
    <Section id="blog" title={t('blog.title')} subtitle={t('blog.subtitle')}>
      <div className="grid gap-6 md:grid-cols-2">
        {sorted.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </Section>
  );
}
