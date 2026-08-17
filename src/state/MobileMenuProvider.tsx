import {
  createContext,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';

/**
 * Состояние мобильного меню вынесено из Header, потому что о нём должны знать
 * и другие части страницы: пока панель опущена, поверх неё не должно быть
 * ничего постороннего — например, кнопки «наверх» из футера.
 */
type MobileMenuContextValue = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileMenuContext = createContext<MobileMenuContextValue | null>(null);

export function MobileMenuProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // setIsMenuOpen из useState стабилен, поэтому в зависимостях только флаг
  const value = useMemo(() => ({ isMenuOpen, setIsMenuOpen }), [isMenuOpen]);

  return <MobileMenuContext.Provider value={value}>{children}</MobileMenuContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useMobileMenu() {
  const context = useContext(MobileMenuContext);
  if (!context) throw new Error('useMobileMenu должен вызываться внутри MobileMenuProvider');
  return context;
}
