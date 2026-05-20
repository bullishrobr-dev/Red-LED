import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const benefitPills = ['Anti-Aging', 'Pain Relief', 'FDA Class 2'];

// Floating particles config
const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: 4 + Math.random() * 4,
  left: Math.random() * 100,
  delay: Math.random() * 10,
  duration: 10 + Math.random() * 8,
  color: i % 2 === 0 ? '#EF4444' : '#DC2626',
}));

// LED ray config
const ledRays = [
  { id: 1, angle: 45, width: 300, height: 800, top: '10%', left: '-10%', delay: 0, duration: 12 },
  { id: 2, angle: -30, width: 250, height: 700, top: '20%', right: '-5%', delay: 2, duration: 15 },
  { id: 3, angle: 60, width: 200, height: 600, bottom: '10%', left: '20%', delay: 4, duration: 10 },
  { id: 4, angle: -45, width: 350, height: 900, top: '5%', right: '15%', delay: 1, duration: 18 },
  { id: 5, angle: 15, width: 180, height: 500, bottom: '20%', right: '25%', delay: 3, duration: 14 },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const animateElements = () => {
      const elements = section.querySelectorAll('.hero-animate');
      elements.forEach((el, i) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.opacity = '0';
        htmlEl.style.transform = 'translateY(30px)';
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
      style={{ backgroundColor: '#0A0A0F', paddingTop: '120px', paddingBottom: '100px' }}
    >
      {/* LED Light Rays Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {ledRays.map((ray) => (
          <div
            key={ray.id}
            className="absolute"
            style={{
              width: ray.width,
              height: ray.height,
              top: ray.top,
              left: ray.left,
              right: ray.right,
              bottom: ray.bottom,
              background: `linear-gradient(${ray.angle}deg, rgba(220, 38, 38, 0.4) 0%, rgba(220, 38, 38, 0.1) 30%, transparent 70%)`,
              filter: 'blur(40px)',
              transform: `rotate(${ray.angle}deg)`,
              animation: `led-ray ${ray.duration}s ease-in-out infinite`,
              animationDelay: `${ray.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Ambient red glow behind content */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '60vw',
          height: '60vh',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(ellipse, rgba(220, 38, 38, 0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Floating Red Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.left}%`,
              backgroundColor: p.color,
              filter: 'blur(1px)',
              animation: `float-up ${p.duration}s linear infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[640px] mx-auto px-6">
        {/* Zero Lines Logo */}
        <div className="hero-animate">
          <img
            src="/zl-logo.png"
            alt="Zero Lines"
            className="w-20 h-auto mx-auto"
            style={{ filter: 'drop-shadow(0 0 20px rgba(10, 186, 181, 0.3))' }}
          />
        </div>

        {/* Brand Label */}
        <div className="hero-animate flex items-center gap-2 mt-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626] animate-led-pulse" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
            ZERO LINES
          </span>
        </div>

        {/* Headline */}
        <h1
          className="hero-animate text-[48px] sm:text-[52px] lg:text-[56px] font-normal text-white leading-[1.1] tracking-[-0.02em] mt-4"
          style={{ wordBreak: 'keep-all', maxWidth: '100%' }}
        >
          The Science of Light
        </h1>

        {/* Subheadline */}
        <p className="hero-animate text-lg text-[#9CA3AF] mt-5 max-w-[560px] leading-relaxed">
          Red &amp; Infrared LED Light Therapy — clinically proven, FDA Class 2 Medical Device technology for skin rejuvenation and pain relief.
        </p>

        {/* Benefit Pills */}
        <div className="hero-animate flex flex-wrap justify-center gap-3 mt-10">
          {benefitPills.map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-semibold uppercase tracking-[0.12em] rounded-full px-6 py-2.5 backdrop-blur-sm"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="hero-animate mt-16 flex flex-col items-center gap-2">
          <span className="text-[11px] uppercase tracking-[0.15em] text-[#6B7280]">Scroll</span>
          <ChevronDown className="w-5 h-5 text-[#6B7280] animate-bounce-gentle" />
        </div>
      </div>
    </section>
  );
}
