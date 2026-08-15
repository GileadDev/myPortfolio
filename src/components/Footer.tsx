import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageProvider';
import { profile } from '../content/profile';
import { ArrowUpIcon } from './Icons';

export function Footer() {
  const { t, tr } = useLanguage();
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTopButton(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <footer className="border-t border-slate-200 py-10 dark:border-slate-800">
        <div className="container-page flex flex-col items-center justify-between gap-4 text-sm text-slate-500 sm:flex-row dark:text-slate-500">
          <p>
            © {new Date().getFullYear()} {tr(profile.name)}. {t('footer.rights')}.
          </p>
          <p className="flex items-center gap-1.5">
            {t('footer.builtWith')} <span className="font-mono">React · TypeScript · Vite</span>
            {profile.siteRepo && (
              <>
                <span aria-hidden="true">·</span>
                <a
                  href={profile.siteRepo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="link-underline"
                >
                  {t('footer.sourceCode')}
                </a>
              </>
            )}
          </p>
        </div>
      </footer>

      <a
        href="#top"
        aria-label={t('common.toTop')}
        title={t('common.toTop')}
        className={`bg-brand-600 hover:bg-brand-500 fixed right-5 bottom-5 z-40 grid h-11 w-11 place-items-center rounded-full text-white shadow-lg transition-all duration-300 ${
          showTopButton ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <ArrowUpIcon className="h-5 w-5" />
      </a>
    </>
  );
}
