import {
  createContext,
  useContext,
  useMemo,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
} from 'react';

type MobileMenuContextValue = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

const MobileMenuContext = createContext<MobileMenuContextValue | null>(null);

export function MobileMenuProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const value = useMemo(() => ({ isMenuOpen, setIsMenuOpen }), [isMenuOpen]);

  return <MobileMenuContext.Provider value={value}>{children}</MobileMenuContext.Provider>;
}

export function useMobileMenu() {
  const context = useContext(MobileMenuContext);
  if (!context) throw new Error('useMobileMenu должен вызываться внутри MobileMenuProvider');
  return context;
}
