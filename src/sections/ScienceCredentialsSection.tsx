import { useEffect, useRef } from 'react';
import { ExternalLink, ChevronDown } from 'lucide-react';

export default function ScienceCredentialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('.reveal');
    elements.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(40px)';
      htmlEl.style.transition = `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.15}s, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.15}s`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          elements.forEach((el) => {
            const htmlEl = el as HTMLElement;
            htmlEl.style.opacity = '1';
            htmlEl.style.transform = 'translateY(0)';
          });
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      ref={sectionRef}
      id="science"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A1628 0%, #0D1F35 100%)',
        padding: '120px 0 140px',
      }}
    >
      {/* Ambient glow orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(10,186,181,0.08) 0%, transparent 70%)',
            filter: 'blur(100px)',
            top: '-10%',
            left: '10%',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(201,169,110,0.06) 0%, transparent 70%)',
            filter: 'blur(100px)',
            bottom: '-5%',
            right: '5%',
          }}
        />
      </div>

      <div className="max-w-[1100px] mx-auto px-5 sm:px-8 relative z-10">
        {/* Label */}
        <div className="reveal flex items-center justify-center gap-2">
          <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
            THREE PILLARS OF TRUST
          </span>
        </div>

        {/* Headline */}
        <h2
          className="reveal text-center text-white leading-[1.1] tracking-[-0.02em] mt-5"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 300 }}
        >
          NASA. Nobel Prize. FDA.
        </h2>
        <p className="reveal text-center text-[17px] text-white/50 mt-4 max-w-[560px] mx-auto">
          The most powerful credentials in the world — behind one technology.
        </p>

        {/* Three Credential Columns - Mobile: horizontal scroll */}
        <div className="reveal mt-16">
          <div className="flex lg:grid lg:grid-cols-3 gap-8 overflow-x-auto snap-x snap-mandatory pb-6 lg:pb-0 px-5 lg:px-0 scrollbar-hide">
            {/* NASA Column */}
            <div className="flex-shrink-0 w-[310px] lg:w-auto snap-center text-center p-10 rounded-3xl border border-white/10 bg-white/[0.03] flex flex-col">
              <img src="/badges/nasa-logo.png" alt="NASA" className="h-20 w-auto mx-auto" />
              <h3 className="text-xl font-semibold text-white mt-6">Born from Space</h3>
              <p className="text-sm text-white/40 mt-3 leading-relaxed flex-grow">
                NASA funded LED research in 1995 to heal astronaut wounds in space.
              </p>
              <p className="text-[42px] font-bold leading-none tracking-[-0.02em] mt-6" style={{ color: '#C9A96E' }}>
                300%
              </p>
              <p className="text-xs text-white/40 mt-2 uppercase tracking-[0.1em]">
                Faster Wound Healing
              </p>
              <button
                onClick={() => scrollTo('#nasa-detail')}
                className="mt-5 inline-flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] rounded-full px-5 py-2.5 border border-white/20 text-white/80 hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
              >
                Learn More <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://spinoff.nasa.gov/NASA-Research-Illuminates-Medical-Uses-of-Light"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 text-[#0ABAB5] text-xs font-semibold mt-3 hover:underline"
              >
                NASA Spinoff <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Nobel Column */}
            <div className="flex-shrink-0 w-[310px] lg:w-auto snap-center text-center p-10 rounded-3xl border border-white/10 bg-white/[0.03] flex flex-col">
              <img src="/badges/nobel-medal.png" alt="Nobel Prize" className="h-24 w-auto mx-auto" />
              <h3 className="text-xl font-semibold text-white mt-6">Nobel Science</h3>
              <p className="text-sm text-white/40 mt-3 leading-relaxed flex-grow">
                The Nobel Prize discovery of nitric oxide — the molecule LED therapy triggers.
              </p>
              <p className="text-[42px] font-bold leading-none tracking-[-0.02em] mt-6" style={{ color: '#C9A96E' }}>
                6,600+
              </p>
              <p className="text-xs text-white/40 mt-2 uppercase tracking-[0.1em]">
                Studies Since the Discovery
              </p>
              <button
                onClick={() => scrollTo('#nobel-detail')}
                className="mt-5 inline-flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] rounded-full px-5 py-2.5 border border-white/20 text-white/80 hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
              >
                Learn More <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* FDA Column */}
            <div className="flex-shrink-0 w-[310px] lg:w-auto snap-center text-center p-10 rounded-3xl border border-white/10 bg-white/[0.03] flex flex-col">
              <img src="/badges/fda-cleared.png" alt="FDA Cleared" className="h-20 w-auto mx-auto" />
              <h3 className="text-xl font-semibold text-white mt-6">FDA Cleared</h3>
              <p className="text-sm text-white/40 mt-3 leading-relaxed flex-grow">
                Officially classified as a Class 2 Medical Device — reviewed for safety and efficacy.
              </p>
              <p className="text-[42px] font-bold leading-none tracking-[-0.02em] mt-6" style={{ color: '#C9A96E' }}>
                Class 2
              </p>
              <p className="text-xs text-white/40 mt-2 uppercase tracking-[0.1em]">
                Medical Device
              </p>
              <button
                onClick={() => scrollTo('#fda-detail')}
                className="mt-5 inline-flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-[0.1em] rounded-full px-5 py-2.5 border border-white/20 text-white/80 hover:bg-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer"
              >
                Learn More <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="flex items-center justify-center gap-3 mt-3">
                <img src="/badges/patented-approved.png" alt="Patented" className="h-10 w-auto opacity-60" />
                <img src="/badges/clinically-tested.png" alt="Clinically Tested" className="h-10 w-auto opacity-60" />
                <img src="/badges/ukas-quality.png" alt="UKAS" className="h-10 w-auto opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
