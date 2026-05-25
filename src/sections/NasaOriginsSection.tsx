import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

export default function NasaOriginsSection() {
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
    <section ref={sectionRef} id="nasa" className="bg-[#FAFAFA] section-padding">
      <div className="max-w-[1100px] mx-auto">
        {/* Label */}
        <div className="reveal flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5]" />
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
            BORN FROM SPACE TECHNOLOGY
          </span>
        </div>

        {/* Headline - Sexy & Bold */}
        <h2 className="reveal text-[36px] sm:text-[42px] lg:text-[48px] font-medium text-black leading-[1.15] tracking-[-0.01em] text-center mt-4">
          Engineered by NASA.<br className="hidden sm:block" /> Proven by Science.
        </h2>

        {/* Short intro */}
        <p className="reveal text-[17px] text-[#4B5563] leading-[1.65] max-w-[720px] mx-auto text-center mt-6">
          NASA funded groundbreaking research into LED light therapy to help astronauts heal wounds in space. This breakthrough became the foundation for all modern LED therapy devices.
        </p>

        {/* NASA Badge */}
        <div className="reveal">
          <img src="/badges/nasa-logo.png" alt="NASA" className="h-24 sm:h-32 w-auto mx-auto mt-8" />
        </div>

        {/* Stat Cards - Mobile: horizontal scroll */}
        <div className="reveal mt-12">
          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 px-5 md:px-0 scrollbar-hide">
            <div className="flex-shrink-0 w-[280px] md:w-auto snap-center text-center p-8 sm:p-10 bg-white rounded-3xl border border-[#E5E7EB]/60">
              <p className="text-[40px] sm:text-[48px] font-bold text-black leading-none tracking-[-0.02em]">1995</p>
              <p className="text-base font-semibold text-[#111827] mt-4">NASA Research Began</p>
              <p className="text-sm text-[#4B5563] mt-2 leading-relaxed">First SBIR contracts for LED wound healing research.</p>
            </div>
            <div className="flex-shrink-0 w-[280px] md:w-auto snap-center text-center p-8 sm:p-10 bg-white rounded-3xl border border-[#E5E7EB]/60">
              <p className="text-[40px] sm:text-[48px] font-bold text-black leading-none tracking-[-0.02em]">300%</p>
              <p className="text-base font-semibold text-[#111827] mt-4">Faster Wound Healing</p>
              <p className="text-sm text-[#4B5563] mt-2 leading-relaxed">Demonstrated acceleration in peer-reviewed studies.</p>
            </div>
            <div className="flex-shrink-0 w-[280px] md:w-auto snap-center text-center p-8 sm:p-10 bg-white rounded-3xl border border-[#E5E7EB]/60">
              <p className="text-[40px] sm:text-[48px] font-bold text-black leading-none tracking-[-0.02em]">6,600+</p>
              <p className="text-base font-semibold text-[#111827] mt-4">Studies Since NASA&apos;s Work</p>
              <p className="text-sm text-[#4B5563] mt-2 leading-relaxed">Papers building on NASA&apos;s foundational breakthrough.</p>
            </div>
          </div>
        </div>

        {/* External Link */}
        <div className="reveal text-center mt-8">
          <a
            href="https://spinoff.nasa.gov/NASA-Research-Illuminates-Medical-Uses-of-Light"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#0ABAB5] text-sm font-semibold hover:underline transition-all duration-200"
          >
            Learn more on the official NASA Spinoff website
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
