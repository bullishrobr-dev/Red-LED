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

      const logo = section.querySelector('.hero-logo');
      const headline = section.querySelector('.hero-headline');
      const subheadline = section.querySelector('.hero-subheadline');
      const pills = section.querySelectorAll('.hero-pill');
      const scrollInd = section.querySelector('.hero-scroll');

      const els = [logo, headline, subheadline, ...pills, scrollInd];
      els.forEach((el, i) => {
        if (!el) return;
        const htmlEl = el as HTMLElement;
        htmlEl.style.opacity = '0';
        htmlEl.style.transform = i === 0 ? 'translateY(10px)' : i === 1 ? 'translateY(30px)' : 'translateY(15px)';
        htmlEl.style.transition = `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${0.3 + i * 0.15}s, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${0.3 + i * 0.15}s`;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            htmlEl.style.opacity = '1';
            htmlEl.style.transform = 'translateY(0)';
          });
        });
      });
    };

    requestAnimationFrame(() => {
      setTimeout(animateElements, 100);
    });

    return () => {};
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(/hero-red-led.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '120px',
        paddingBottom: '100px',
      }}
    >
      <div className="relative z-10 flex flex-col items-center text-center max-w-[600px] mx-auto px-6">
        {/* Logo */}
        <div className="hero-logo">
          <img
            src="/zero-lines-logo.png"
            alt="Zero Lines"
            className="h-16 sm:h-20 w-auto"
            style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.15))' }}
          />
        </div>

        {/* Headline */}
        <h1
          className="hero-headline text-[44px] sm:text-[48px] lg:text-[52px] font-light text-white leading-[1.05] tracking-[-0.02em] mt-8"
          style={{ wordBreak: 'keep-all' }}
        >
          The Science of Light
        </h1>

        {/* Sub-headline */}
        <p className="hero-subheadline text-base sm:text-[17px] text-white/70 mt-5 max-w-[500px] leading-relaxed">
          Red &amp; Infrared LED Light Therapy — clinically proven technology for skin rejuvenation and pain relief.
        </p>

        {/* Benefit Pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {benefitPills.map((pill) => (
            <span
              key={pill}
              className="hero-pill inline-flex items-center text-white text-xs font-semibold uppercase tracking-[0.12em] rounded-full px-6 py-2.5"
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.25)',
              }}
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll mt-16">
          <ChevronDown className="w-6 h-6 text-white/40 animate-bounce-gentle" />
        </div>
      </div>
    </section>
  );
}
