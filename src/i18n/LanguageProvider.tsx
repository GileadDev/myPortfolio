import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { ui, type UiKey } from './ui';

export type Locale = 'ru' | 'en';

/** Любая строка контента хранится сразу на двух языках. */
export type L10n = Record<Locale, string>;

/** Массив строк на двух языках (списки достижений, абзацы и т.п.). */
export type L10nList = Record<Locale, string[]>;

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  /** Строка интерфейса по ключу из src/i18n/ui.ts */
  t: (key: UiKey) => string;
  /** Значение из контента: tr(profile.role) */
  tr: (value: L10n) => string;
  /** Список из контента: trl(job.highlights) */
  trl: (value: L10nList) => string[];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = 'locale';

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'ru';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'ru' || stored === 'en') return stored;
  return navigator.language.toLowerCase().startsWith('ru') ? 'ru' : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const toggleLocale = useCallback(() => {
    setLocale((current) => (current === 'ru' ? 'en' : 'ru'));
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: (key) => ui[key][locale],
      tr: (item) => item[locale],
      trl: (item) => item[locale],
    }),
    [locale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage должен вызываться внутри LanguageProvider');
  return context;
}
