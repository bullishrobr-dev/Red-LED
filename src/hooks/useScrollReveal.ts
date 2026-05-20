import { useEffect, useRef } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const ref = useRef<T>(null);
  const { threshold = 0.15, triggerOnce = true, rootMargin = '0px 0px -50px 0px' } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1), transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          if (triggerOnce) observer.unobserve(el);
        } else if (!triggerOnce) {
          el.style.opacity = '0';
          el.style.transform = 'translateY(30px)';
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, triggerOnce, rootMargin]);

  return ref;
}

export function useStaggerReveal<T extends HTMLElement>(
  options: ScrollRevealOptions & { staggerDelay?: number; childSelector?: string } = {}
) {
  const containerRef = useRef<T>(null);
  const { 
    threshold = 0.15, 
    triggerOnce = true, 
    rootMargin = '0px 0px -50px 0px',
    staggerDelay = 0.1,
    childSelector = '.reveal-child'
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.querySelectorAll(childSelector);
    if (children.length === 0) return;

    children.forEach((child) => {
      const el = child as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child, i) => {
            const el = child as HTMLElement;
            setTimeout(() => {
              el.style.opacity = '1';
              el.style.transform = 'translateY(0)';
            }, i * staggerDelay * 1000);
          });
          if (triggerOnce) observer.unobserve(container);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [threshold, triggerOnce, rootMargin, staggerDelay, childSelector]);

  return containerRef;
}
