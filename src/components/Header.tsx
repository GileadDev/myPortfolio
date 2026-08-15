import { useEffect, useMemo, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageProvider';
import { useTheme } from '../theme/ThemeProvider';
import { useActiveSection } from '../hooks/useReveal';
import { profile } from '../content/profile';
import { posts } from '../content/posts';
import type { UiKey } from '../i18n/ui';
import { DocumentIcon, MoonIcon, SunIcon } from './Icons';

type NavItem = { id: string; labelKey: UiKey };

/** Три полоски, складывающиеся в крестик при открытии. */
function BurgerIcon({ isOpen }: { isOpen: boolean }) {
  const bar = 'absolute left-0 h-0.5 w-[18px] rounded-sm bg-current';
  const motion = 'transition-[translate,rotate,opacity] duration-300';

  return (
    <span aria-hidden="true" className="relative block h-3 w-[18px]">
      <i
        className={`${bar} ${motion} top-0`}
        style={isOpen ? { translate: '0 5px', rotate: '45deg' } : undefined}
      />
      <i
        className={`${bar} ${motion} top-[5px]`}
        style={isOpen ? { opacity: 0 } : undefined}
      />
      <i
        className={`${bar} ${motion} top-[10px]`}
        style={isOpen ? { translate: '0 -5px', rotate: '-45deg' } : undefined}
      />
    </span>
  );
}

export function Header() {
  const { t, tr, locale, toggleLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  /** true, пока панель едет. Нужен, чтобы не включать фон шапки раньше времени. */
  const [isPanelMoving, setIsPanelMoving] = useState(false);
  const isFirstRender = useRef(true);

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

  // Открытое меню: блокируем прокрутку фона и закрываем по Escape
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

  // При закрытии isMenuOpen сбрасывается сразу, а панель едет ещё 0.5с.
  // Без этой задержки шапка мгновенно возвращает полупрозрачный фон
  // с backdrop-blur и «режет» уезжающую панель по своей нижней границе.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setIsPanelMoving(true);
    const timer = window.setTimeout(() => setIsPanelMoving(false), 520);
    return () => window.clearTimeout(timer);
  }, [isMenuOpen]);

  // Панель живёт только до md. Если экран расширился при открытом меню,
  // она пропадает — состояние надо сбросить, иначе прокрутка останется
  // заблокированной, а кнопка «Закрыть» уедет из вида.
  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)');
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false);
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  const initials = tr(profile.name)
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  // Пока панель открыта, она тёмная в любой теме — поэтому содержимое
  // шапки на это время принудительно светлое.
  const barControl = isMenuOpen
    ? 'text-slate-300 hover:bg-white/10 hover:text-white'
    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white';

  // Фон и блюр шапки выключены не только пока меню открыто, но и всё время,
  // пока панель движется — иначе она «обрезается» по границе шапки.
  const showBarSurface = isScrolled && !isMenuOpen && !isPanelMoving;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          showBarSurface
            ? 'border-b border-slate-200/80 bg-slate-50/80 backdrop-blur-lg dark:border-slate-800/80 dark:bg-slate-950/80'
            : 'border-b border-transparent'
        }`}
      >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <a
          href="#top"
          onClick={() => setIsMenuOpen(false)}
          className="group flex min-w-0 shrink items-center gap-2.5"
          aria-label={tr(profile.name)}
        >
          <span className="from-brand-500 to-brand-700 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br font-mono text-sm font-bold text-white shadow-sm transition-transform group-hover:scale-105">
            {initials}
          </span>
          {/* На узком экране имя обычно скрыто, но при открытом меню
              показывается — оно становится заголовком панели. */}
          <span
            className={`truncate text-sm font-semibold transition-colors ${
              isMenuOpen ? 'block text-white' : 'hidden text-slate-900 sm:block dark:text-white'
            }`}
          >
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

        <div className="flex shrink-0 items-center gap-1.5">
          <button
            type="button"
            onClick={toggleLocale}
            aria-label={t('lang.switch')}
            title={t('lang.switch')}
            className={`h-10 rounded-lg px-3 font-mono text-xs font-semibold transition-colors sm:h-9 sm:px-2.5 ${barControl}`}
          >
            {locale === 'ru' ? 'RU' : 'EN'}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t('theme.toLight') : t('theme.toDark')}
            title={theme === 'dark' ? t('theme.toLight') : t('theme.toDark')}
            className={`grid h-10 w-10 place-items-center rounded-lg transition-colors sm:h-9 sm:w-9 ${barControl}`}
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? t('nav.close') : t('nav.open')}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className={`ml-0.5 inline-flex min-h-11 items-center gap-2.5 rounded-full border-[1.5px] px-3.5 text-[0.7rem] font-bold tracking-[0.08em] uppercase transition-colors select-none md:hidden ${
              isMenuOpen
                ? 'border-slate-300 text-white hover:bg-white hover:text-slate-900'
                : 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-slate-50 dark:border-slate-200 dark:text-slate-100 dark:hover:bg-slate-100 dark:hover:text-slate-900'
            }`}
          >
            <BurgerIcon isOpen={isMenuOpen} />
            {isMenuOpen ? t('nav.closeWord') : t('nav.menuWord')}
          </button>
        </div>
        </div>
      </header>

      {/* Панель — сосед шапки, а не её потомок: внутри <header> она попадала
          в его контекст наложения и перекрывалась фоном с backdrop-blur.
          Своим z-40 она лежит под строкой шапки (z-50), но над контентом,
          поэтому имя остаётся наверху, а ссылки идут под ним.
          visibility переключается с задержкой, чтобы уезжающая панель
          не исчезала до конца анимации. */}
      <div
        id="mobile-menu"
        className="fixed inset-0 z-40 md:hidden"
        style={{
          translate: isMenuOpen ? '0 0' : '0 -105%',
          visibility: isMenuOpen ? 'visible' : 'hidden',
          transition: isMenuOpen
            ? 'translate .5s cubic-bezier(.7,0,.25,1), visibility 0s 0s'
            : 'translate .5s cubic-bezier(.7,0,.25,1), visibility 0s .5s',
        }}
      >
        <div className="absolute inset-0 bg-slate-950" />
        <div
          aria-hidden="true"
          className="bg-brand-600/25 absolute -top-24 -right-20 h-72 w-72 rounded-full blur-3xl"
        />

        <nav
          aria-label="mobile"
          className="relative flex h-full flex-col overflow-y-auto px-6 pt-24 pb-10"
        >
          {navItems.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsMenuOpen(false)}
              className={`border-b border-white/12 py-3.5 text-[1.7rem] leading-tight font-bold tracking-tight transition-[opacity,translate,color] duration-[350ms] ${
                activeSection === item.id ? 'text-brand-400' : 'text-slate-100'
              }`}
              style={{
                opacity: isMenuOpen ? 1 : 0,
                translate: isMenuOpen ? '0 0' : '0 -14px',
                transitionDelay: isMenuOpen ? `${160 + index * 50}ms` : '0ms',
              }}
            >
              {t(item.labelKey)}
            </a>
          ))}

          <a
            href={tr(profile.resume)}
            download
            onClick={() => setIsMenuOpen(false)}
            className="text-brand-400 mt-6 inline-flex items-center gap-2 self-start text-base font-semibold transition-[opacity,translate] duration-[350ms]"
            style={{
              opacity: isMenuOpen ? 1 : 0,
              translate: isMenuOpen ? '0 0' : '0 -14px',
              transitionDelay: isMenuOpen ? `${160 + navItems.length * 50}ms` : '0ms',
            }}
          >
            <DocumentIcon className="h-4 w-4" />
            {t('hero.downloadCv')} →
          </a>
        </nav>
      </div>
    </>
  );
}
