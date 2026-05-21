import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const benefitPills = ['Anti-Aging', 'Pain Relief'];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animateElements = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      const selectors = [
        '.hero-logo', '.hero-headline',
        '.hero-subheadline', '.hero-pill', '.hero-scroll'
      ];
      const els = selectors.flatMap(s =>
        s === '.hero-pill'
          ? Array.from(section.querySelectorAll(s))
          : [section.querySelector(s)]
      ).filter(Boolean);

      els.forEach((el, i) => {
        if (!el) return;
        const htmlEl = el as HTMLElement;
        htmlEl.style.opacity = '0';
        htmlEl.style.transform = 'translateY(25px)';
        htmlEl.style.transition = `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${0.3 + i * 0.12}s, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${0.3 + i * 0.12}s`;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            htmlEl.style.opacity = '1';
            htmlEl.style.transform = 'translateY(0)';
          });
        });
      });
    };

    requestAnimationFrame(() => setTimeout(animateElements, 150));
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/hero-red-led.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '100px',
        paddingBottom: '80px'
      }}
    >
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-[640px] mx-auto px-6">
        <div className="hero-logo mb-6">
          <img
            src="/zl-logo-hero.png"
            alt="Zero Lines"
            className="h-20 sm:h-24 w-auto"
            style={{ filter: 'drop-shadow(0 0 24px rgba(255,255,255,0.2)) brightness(1.15)' }}
          />
        </div>

        <h1
          className="hero-headline text-[40px] sm:text-[48px] lg:text-[54px] font-light text-white leading-[1.1] tracking-[-0.02em]"
          style={{ wordBreak: 'keep-all' }}
        >
          The Science of Light
        </h1>

        <p className="hero-subheadline text-base sm:text-lg mt-5 max-w-[500px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
          Red &amp; Infrared LED Light Therapy activates your body's own natural repair systems — stimulating collagen, reducing inflammation, and helping your skin and body heal from within.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {benefitPills.map((pill) => (
            <span
              key={pill}
              className="hero-pill inline-flex items-center text-xs font-semibold uppercase tracking-[0.12em] rounded-full px-6 py-2.5 border"
              style={{
                background: 'rgba(255, 255, 255, 0.12)',
                borderColor: 'rgba(255, 255, 255, 0.25)',
                color: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="hero-scroll mt-16">
          <ChevronDown className="w-5 h-5 animate-bounce" style={{ color: 'rgba(255, 255, 255, 0.4)' }} />
        </div>
      </div>
    </section>
  );
}
