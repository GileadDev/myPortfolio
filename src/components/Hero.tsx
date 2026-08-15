import { useLanguage } from '../i18n/LanguageProvider';
import { profile } from '../content/profile';
import {
  ArrowDownIcon,
  DocumentIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  TelegramIcon,
} from './Icons';

export function Hero() {
  const { t, tr } = useLanguage();

  const socials = [
    { href: profile.github, label: 'GitHub', Icon: GitHubIcon },
    { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedInIcon },
    { href: profile.telegram, label: 'Telegram', Icon: TelegramIcon },
    { href: profile.email ? `mailto:${profile.email}` : '', label: 'Email', Icon: MailIcon },
  ].filter((social) => social.href);

  return (
    <section
      id="top"
      /* На телефоне высота чуть меньше экрана: край следующей секции
         выглядывает из-под сгиба и подсказывает, что сайт продолжается. */
      className="relative flex min-h-[88svh] items-center overflow-hidden pt-24 pb-16 sm:min-h-svh sm:pt-16 sm:pb-20"
    >
      {/* Декоративный фон: сетка + два размытых пятна акцентного цвета */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-slate-200)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-slate-200)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)] dark:bg-[linear-gradient(to_right,var(--color-slate-800)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-slate-800)_1px,transparent_1px)]" />
        <div className="bg-brand-500/20 animate-float absolute -top-24 -left-24 h-64 w-64 rounded-full blur-3xl sm:h-96 sm:w-96" />
        <div className="bg-brand-700/20 absolute top-1/3 -right-24 h-72 w-72 rounded-full blur-3xl sm:-right-32 sm:h-[28rem] sm:w-[28rem]" />
      </div>

      <div className="container-page">
        {profile.openToWork && (
          <p className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-sm font-medium text-emerald-700 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t('hero.available')}
          </p>
        )}

        <h1
          className="animate-fade-up text-[2rem] leading-[1.1] font-extrabold tracking-tight text-balance text-slate-900 sm:text-6xl lg:text-7xl dark:text-white"
          style={{ animationDelay: '80ms' }}
        >
          {tr(profile.name)}
        </h1>

        <p
          className="animate-fade-up from-brand-500 to-brand-700 mt-3 bg-gradient-to-r bg-clip-text font-mono text-base font-semibold text-transparent sm:text-2xl"
          style={{ animationDelay: '160ms' }}
        >
          {tr(profile.role)}
        </p>

        <p
          className="animate-fade-up mt-5 max-w-2xl leading-relaxed text-pretty text-slate-600 sm:mt-7 sm:text-lg dark:text-slate-400"
          style={{ animationDelay: '240ms' }}
        >
          {tr(profile.tagline)}
        </p>

        {/* На узком экране кнопки занимают всю ширину — так их проще нажать
            и не остаётся рваного правого края. */}
        <div
          className="animate-fade-up mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center"
          style={{ animationDelay: '320ms' }}
        >
          <a
            href="#projects"
            className="bg-brand-600 hover:bg-brand-500 shadow-brand-600/20 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 sm:w-auto sm:py-3"
          >
            {t('hero.viewProjects')}
          </a>

          <a
            href={tr(profile.resume)}
            download
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white/60 px-6 py-3.5 text-sm font-semibold text-slate-800 transition-all hover:-translate-y-0.5 hover:border-slate-400 sm:w-auto sm:py-3 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:border-slate-600"
          >
            <DocumentIcon className="h-4 w-4" />
            {t('hero.downloadCv')}
          </a>

          {socials.length > 0 && (
            <div className="mt-1 flex items-center gap-1 sm:mt-0 sm:ml-1">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noreferrer noopener"
                  aria-label={label}
                  title={label}
                  className="hover:text-brand-600 dark:hover:text-brand-400 grid h-11 w-11 place-items-center rounded-xl text-slate-500 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800/60"
                >
                  <Icon />
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Подсказка о прокрутке нужна прежде всего на телефоне, где первый
          экран легко принять за весь сайт */}
      <a
        href="#about"
        aria-label={t('hero.scroll')}
        className="absolute bottom-5 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 text-slate-400 transition-colors hover:text-slate-600 sm:bottom-8 sm:gap-2 dark:hover:text-slate-200"
      >
        <span className="font-mono text-[0.65rem] tracking-wider uppercase sm:text-xs">
          {t('hero.scroll')}
        </span>
        <ArrowDownIcon className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
