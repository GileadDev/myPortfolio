import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../i18n/LanguageProvider';
import { useTheme } from '../theme/ThemeProvider';
import { useActiveSection } from '../hooks/useReveal';
import { profile } from '../content/profile';
import { posts } from '../content/posts';
import type { UiKey } from '../i18n/ui';
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons';

type NavItem = { id: string; labelKey: UiKey };

export function Header() {
  const { t, tr, locale, toggleLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = useMemo<NavItem[]>(() => {
    const items: NavItem[] = [
      { id: 'about', labelKey: 'nav.about' },
      { id: 'skills', labelKey: 'nav.skills' },
      { id: 'projects', labelKey: 'nav.projects' },
      { id: 'experience', labelKey: 'nav.experience' },
    ];
    if (posts.length > 0) items.push({ id: 'blog', labelKey: 'nav.blog' });
    items.push({ id: 'contact', labelKey: 'nav.contact' });
    return items;
  }, []);

  const sectionIds = useMemo(() => navItems.map((item) => item.id), [navItems]);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Мобильное меню: блокируем прокрутку фона и закрываем по Escape
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  const initials = tr(profile.name)
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-slate-200/80 bg-slate-50/80 backdrop-blur-lg dark:border-slate-800/80 dark:bg-slate-950/80'
          : 'border-b border-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          className="group flex shrink-0 items-center gap-2.5"
          aria-label={tr(profile.name)}
        >
          <span className="from-brand-500 to-brand-700 grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br font-mono text-sm font-bold text-white shadow-sm transition-transform group-hover:scale-105">
            {initials}
          </span>
          <span className="hidden text-sm font-semibold text-slate-900 sm:block dark:text-white">
            {tr(profile.name)}
          </span>
        </a>

        <nav className="hidden md:block" aria-label="main">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={activeSection === item.id ? 'true' : undefined}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-brand-600 dark:text-brand-400 bg-slate-100 dark:bg-slate-800/60'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  {t(item.labelKey)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={toggleLocale}
            aria-label={t('lang.switch')}
            title={t('lang.switch')}
            className="h-10 rounded-lg px-3 font-mono text-xs font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 sm:h-9 sm:px-2.5 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            {locale === 'ru' ? 'RU' : 'EN'}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t('theme.toLight') : t('theme.toDark')}
            title={theme === 'dark' ? t('theme.toLight') : t('theme.toDark')}
            className="grid h-10 w-10 place-items-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 sm:h-9 sm:w-9 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? t('nav.close') : t('nav.open')}
            aria-expanded={isMenuOpen}
            className="grid h-10 w-10 place-items-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 md:hidden dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-slate-50 md:hidden dark:border-slate-800 dark:bg-slate-950">
          <nav className="container-page py-4" aria-label="mobile">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                      activeSection === item.id
                        ? 'text-brand-600 dark:text-brand-400 bg-slate-100 dark:bg-slate-800/60'
                        : 'text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    {t(item.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
