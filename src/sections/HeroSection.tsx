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
        '.hero-logo', '.hero-headline', '.hero-sub',
        '.hero-desc', '.hero-pill', '.hero-trust', '.hero-scroll'
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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Bottom gradient for smooth transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px]"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, #0A1628 100%)'
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-[720px] mx-auto px-6">
        {/* Logo */}
        <div className="hero-logo mb-6">
          <img
            src="/zl-logo-hero.png"
            alt="Zero Lines"
            className="h-20 sm:h-24 w-auto"
            style={{ filter: 'drop-shadow(0 0 24px rgba(255,255,255,0.2)) brightness(1.15)' }}
          />
        </div>

        {/* Headline — Larger, dramatic */}
        <h1
          className="hero-headline font-light text-white leading-[1.05] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', wordBreak: 'keep-all' }}
        >
          The Science of Light
        </h1>

        {/* Sub-line with key trust stats */}
        <p
          className="hero-sub mt-5 text-sm sm:text-base font-medium tracking-[0.02em]"
          style={{ color: '#C9A96E' }}
        >
          NASA-Engineered &middot; Nobel-Backed &middot; FDA-Cleared
        </p>

        {/* Description */}
        <p
          className="hero-desc text-base sm:text-lg mt-4 max-w-[520px] leading-relaxed"
          style={{ color: 'rgba(255,255,255,0.72)' }}
        >
          Red &amp; Infrared LED Light Therapy activates your body's own natural repair systems — stimulating collagen, reducing inflammation, and helping your skin and body heal from within.
        </p>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
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

        {/* Trust Bar — below hero content */}
        <div
          className="hero-trust mt-12 flex flex-wrap items-center justify-center gap-5 sm:gap-7 px-6 py-4 rounded-full"
          style={{ background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
        >
          <img src="/badges/fda-cleared.png" alt="FDA" className="h-8 sm:h-10 w-auto opacity-70" />
          <img src="/badges/nasa-logo.png" alt="NASA" className="h-8 sm:h-10 w-auto opacity-70" />
          <img src="/badges/nobel-medal.png" alt="Nobel" className="h-8 sm:h-10 w-auto opacity-70" />
          <img src="/badges/patented-approved.png" alt="Patented" className="h-8 sm:h-10 w-auto opacity-70" />
          <img src="/badges/clinically-tested.png" alt="Clinically Tested" className="h-8 sm:h-10 w-auto opacity-70" />
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll mt-14">
          <ChevronDown className="w-5 h-5 animate-bounce" style={{ color: 'rgba(255, 255, 255, 0.4)' }} />
        </div>
      </div>
    </section>
  );
}
