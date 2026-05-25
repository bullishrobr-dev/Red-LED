import { useEffect, useRef } from 'react';
import { ExternalLink, Rocket, Microscope, Globe } from 'lucide-react';

export default function NasaDetailSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const elements = section.querySelectorAll('.reveal');
    elements.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(40px)';
      htmlEl.style.transition = `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.12}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.12}s`;
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
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="nasa-detail"
      className="bg-[#FAFAFA] relative overflow-hidden"
      style={{ padding: '100px 0' }}
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        {/* Label */}
        <div className="reveal flex items-center gap-2">
          <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
            NASA ORIGINS
          </span>
        </div>

        {/* Headline */}
        <h2
          className="reveal text-black leading-[1.1] tracking-[-0.02em] mt-5"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 400 }}
        >
          From Space to Your Home
        </h2>
        <p className="reveal text-[17px] text-[#4B5563] leading-[1.65] mt-5 max-w-[640px]">
          In the 1990s, NASA faced a critical challenge: wounds heal slowly in space due to microgravity.
          To solve this, NASA&apos;s Marshall Space Flight Center funded groundbreaking LED research led by
          Dr. Harry Whelan at the Medical College of Wisconsin — research that proved specific light
          wavelengths could dramatically accelerate cell growth and tissue repair.
        </p>

        {/* Feature cards - horizontal scroll on mobile */}
        <div className="reveal mt-12">
          <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 px-5 md:px-0 scrollbar-hide">
            <div className="flex-shrink-0 w-[85vw] max-w-[320px] md:w-auto md:max-w-none snap-center bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <div className="w-14 h-14 rounded-2xl bg-[#0ABAB5]/10 flex items-center justify-center">
                <Rocket className="w-7 h-7 text-[#0ABAB5]" />
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mt-5">The Problem</h3>
              <p className="text-[15px] text-[#4B5563] leading-relaxed mt-3">
                Astronauts in microgravity experience delayed wound healing. NASA needed a drug-free,
                non-invasive solution that could work in the harshest environment known to humans.
              </p>
            </div>
            <div className="flex-shrink-0 w-[85vw] max-w-[320px] md:w-auto md:max-w-none snap-center bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <div className="w-14 h-14 rounded-2xl bg-[#0ABAB5]/10 flex items-center justify-center">
                <Microscope className="w-7 h-7 text-[#0ABAB5]" />
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mt-5">The Research</h3>
              <p className="text-[15px] text-[#4B5563] leading-relaxed mt-3">
                From 1995 to 2003, NASA SBIR contracts produced peer-reviewed studies showing LED
                therapy stimulated wound healing by up to 300% faster than untreated wounds.
              </p>
            </div>
            <div className="flex-shrink-0 w-[85vw] max-w-[320px] md:w-auto md:max-w-none snap-center bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <div className="w-14 h-14 rounded-2xl bg-[#0ABAB5]/10 flex items-center justify-center">
                <Globe className="w-7 h-7 text-[#0ABAB5]" />
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mt-5">The Legacy</h3>
              <p className="text-[15px] text-[#4B5563] leading-relaxed mt-3">
                NASA&apos;s breakthrough became the scientific foundation for all modern LED therapy
                devices — from clinical settings to the device you use at home.
              </p>
            </div>
          </div>
        </div>

        {/* Stat callout */}
        <div className="reveal mt-10 bg-white rounded-2xl p-8 border-l-[3px] border-[#0ABAB5] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div>
              <p className="text-[48px] font-bold leading-none tracking-[-0.02em]" style={{ color: '#C9A96E' }}>300%</p>
              <p className="text-sm text-[#4B5563] mt-2">Faster wound healing demonstrated in clinical studies</p>
            </div>
            <div className="sm:ml-auto">
              <a
                href="https://spinoff.nasa.gov/NASA-Research-Illuminates-Medical-Uses-of-Light"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#0ABAB5] text-sm font-semibold hover:underline"
              >
                Read the official NASA Spinoff article <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
