import type { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

/** Обёртка секции: единый заголовок, отступы и появление при скролле. */
export function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
  const { ref, isVisible } = useReveal<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`container-page scroll-mt-20 py-14 transition-all duration-700 sm:scroll-mt-24 sm:py-20 lg:py-28 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      } ${className}`}
    >
      <header className="mb-8 sm:mb-12">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl dark:text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2.5 max-w-2xl text-sm text-slate-600 sm:mt-3 sm:text-base dark:text-slate-400">
            {subtitle}
          </p>
        )}
        <div className="from-brand-500 mt-4 h-1 w-16 rounded-full bg-gradient-to-r to-transparent sm:mt-5" />
      </header>
      {children}
    </section>
  );
}
