import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const benefitPills = ['Anti-Aging', 'Pain Relief', 'FDA Class 2'];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animateElements = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      const label = section.querySelector('.hero-label');
      const tagline = section.querySelector('.hero-tagline');
      const headline = section.querySelector('.hero-headline');
      const subheadline = section.querySelector('.hero-subheadline');
      const pills = section.querySelectorAll('.hero-pill');
      const scrollInd = section.querySelector('.hero-scroll');

      const els = [label, tagline, headline, subheadline, ...pills, scrollInd];
      els.forEach((el, i) => {
        if (!el) return;
        const htmlEl = el as HTMLElement;
        htmlEl.style.opacity = '0';
        htmlEl.style.transform = i < 4 ? 'translateY(10px)' : 'translateY(15px)';
        if (i === 2) htmlEl.style.transform = 'translateY(30px)';
        htmlEl.style.transition = `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.2 + i * 0.15}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.2 + i * 0.15}s`;
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

  useEffect(() => {
    const headline = headlineRef.current;
    if (!headline) return;

    const text = headline.textContent || '';
    headline.innerHTML = '';
    
    const chars: HTMLSpanElement[] = [];
    for (let i = 0; i < text.length; i++) {
      const span = document.createElement('span');
      span.textContent = text[i] === ' ' ? '\u00A0' : text[i];
      span.style.display = 'inline-block';
      span.style.transition = 'transform 0.3s ease-out';
      headline.appendChild(span);
      chars.push(span);
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const amplitude = 15;
      const frequency = 0.3;
      chars.forEach((char, i) => {
        const offset = Math.sin((i * frequency) + (scrollY * 0.01)) * amplitude;
        char.style.transform = `translateY(${offset}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center bg-white overflow-hidden"
      style={{ paddingTop: '120px', paddingBottom: '100px' }}
    >
      {/* Lissajous Glow Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full animate-glow-1"
          style={{
            width: '40vw',
            height: '40vw',
            background: 'radial-gradient(circle, rgba(10,186,181,0.03) 0%, transparent 70%)',
            filter: 'blur(80px)',
            top: '10%',
            left: '15%',
          }}
        />
        <div
          className="absolute rounded-full animate-glow-2"
          style={{
            width: '50vw',
            height: '50vw',
            background: 'radial-gradient(circle, rgba(10,186,181,0.05) 0%, transparent 70%)',
            filter: 'blur(80px)',
            top: '30%',
            right: '10%',
          }}
        />
        <div
          className="absolute rounded-full animate-glow-3"
          style={{
            width: '45vw',
            height: '45vw',
            background: 'radial-gradient(circle, rgba(10,186,181,0.04) 0%, transparent 70%)',
            filter: 'blur(80px)',
            bottom: '5%',
            left: '30%',
          }}
        />
      </div>

      {/* Hero Glow Orb Image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="/hero-glow-orb.png"
          alt=""
          className="w-[600px] h-[600px] object-contain opacity-30"
          aria-hidden="true"
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-[600px] mx-auto px-6">
        {/* Brand Label */}
        <div className="hero-label flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
            ZERO LINES
          </span>
        </div>

        {/* Tagline */}
        <p className="hero-tagline text-lg font-normal text-[#6B7280] mt-2">
          Advanced Skin Solutions
        </p>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="hero-headline text-[48px] sm:text-[52px] lg:text-[56px] font-normal text-black leading-[1.05] tracking-[-0.02em] mt-4"
        >
          The Science of Light
        </h1>

        {/* Sub-headline */}
        <p className="hero-subheadline text-lg text-[#6B7280] mt-5 max-w-[520px] leading-relaxed">
          Red &amp; Infrared LED Light Therapy — clinically proven, FDA-cleared technology for skin rejuvenation and pain relief.
        </p>

        {/* Benefit Pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {benefitPills.map((pill) => (
            <span
              key={pill}
              className="hero-pill inline-flex items-center bg-[#0ABAB5] text-white text-xs font-semibold uppercase tracking-[0.12em] rounded-full px-6 py-2.5"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll mt-16">
          <ChevronDown className="w-6 h-6 text-[#0ABAB5]/40 animate-bounce-gentle" />
        </div>
      </div>
    </section>
  );
}
