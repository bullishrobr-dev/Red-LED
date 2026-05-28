import { useEffect, useRef } from 'react';

export default function NobelPrizeSection() {
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
    <section ref={sectionRef} id="nobel" className="bg-white section-padding">
      <div className="max-w-[1100px] mx-auto">
        {/* Label */}
        <div className="reveal flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5]" />
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
            NOBEL PRIZE SCIENCE
          </span>
        </div>

        {/* Headline */}
        <h2 className="reveal text-[36px] sm:text-[42px] lg:text-[48px] font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4 text-center">
          The Nobel Discovery That Powers LED Therapy
        </h2>

        {/* Short intro */}
        <p className="reveal text-[17px] text-[#4B5563] leading-[1.65] max-w-[720px] mx-auto text-center mt-6">
          The 1998 Nobel Prize in Medicine was awarded for discovering nitric oxide — the same molecule that LED therapy triggers to improve circulation, reduce inflammation, and activate natural healing.
        </p>

        {/* Nobel Badge */}
        <div className="reveal">
          <img src="./badges/nobel-medal.png" alt="Nobel Prize Medal" className="h-28 sm:h-36 w-auto mx-auto mt-8" />
        </div>

        {/* Stat Cards - Mobile: horizontal scroll */}
        <div className="reveal mt-12">
          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 px-5 md:px-0 scrollbar-hide">
            <div className="flex-shrink-0 w-[280px] md:w-auto snap-center text-center p-8 sm:p-10 bg-[#FAFAFA] rounded-3xl border border-[#E5E7EB]/60">
              <p className="text-[40px] sm:text-[48px] font-bold text-black leading-none tracking-[-0.02em]">1998</p>
              <p className="text-base font-semibold text-[#111827] mt-4">Nobel Prize Awarded</p>
              <p className="text-sm text-[#4B5563] mt-2 leading-relaxed">Furchgott, Ignarro & Murad for nitric oxide.</p>
            </div>
            <div className="flex-shrink-0 w-[280px] md:w-auto snap-center text-center p-8 sm:p-10 bg-[#FAFAFA] rounded-3xl border border-[#E5E7EB]/60">
              <p className="text-[40px] sm:text-[48px] font-bold text-black leading-none tracking-[-0.02em]">NO</p>
              <p className="text-base font-semibold text-[#111827] mt-4">Nitric Oxide Molecule</p>
              <p className="text-sm text-[#4B5563] mt-2 leading-relaxed">Controls healing, circulation, and cell repair.</p>
            </div>
            <div className="flex-shrink-0 w-[280px] md:w-auto snap-center text-center p-8 sm:p-10 bg-[#FAFAFA] rounded-3xl border border-[#E5E7EB]/60">
              <p className="text-[40px] sm:text-[48px] font-bold text-black leading-none tracking-[-0.02em]">6,600+</p>
              <p className="text-base font-semibold text-[#111827] mt-4">Studies Confirming the Link</p>
              <p className="text-sm text-[#4B5563] mt-2 leading-relaxed">Papers on nitric oxide and photobiomodulation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
