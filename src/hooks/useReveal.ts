import { useEffect, useRef, useState } from 'react';

/**
 * Появление блока при попадании в вьюпорт.
 * Intersection Observer вместо слушателя scroll — не дёргает главный поток.
 *
 * threshold обязан быть 0. Доля пересечения считается от площади самого
 * элемента, а секции здесь в разы выше экрана: «Проекты» ~2700px против
 * ~400px вьюпорта в альбомной ориентации телефона. Любой ненулевой порог
 * там недостижим в принципе — секция навсегда осталась бы прозрачной.
 * Момент появления задаём через rootMargin, а не через порог.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Если пользователь просил уменьшить анимации — показываем сразу
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // анимация одноразовая
        }
      },
      // Отрицательный нижний отступ: блок проявляется, когда его верхняя
      // кромка поднялась на 60px выше нижнего края экрана.
      { threshold, rootMargin: '0px 0px -60px 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

/**
 * Отслеживает, какая секция сейчас на экране, — для подсветки пункта меню.
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
