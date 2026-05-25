import { useEffect, useRef } from 'react';
import { Microscope, Sparkles, TrendingUp } from 'lucide-react';

export default function SkinDiscoverySection() {
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
    <section ref={sectionRef} id="discovery" className="bg-[#FAFAFA]" style={{ padding: '100px 0' }}>
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        {/* Label */}
        <div className="reveal flex items-center justify-center gap-2">
          <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
            THE HAPPY ACCIDENT
          </span>
        </div>

        {/* Headline */}
        <h2 className="reveal text-center text-[36px] sm:text-[42px] lg:text-[48px] font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4">
          From Pain Relief to Skin Transformation
        </h2>

        {/* Single short intro paragraph */}
        <p className="reveal text-center text-[17px] text-[#4B5563] leading-[1.65] max-w-[720px] mx-auto mt-8">
          While studying LED therapy for pain relief, researchers noticed patients' skin was dramatically improving — softer wrinkles, brighter tone, smoother texture. This accidental discovery sparked a skincare revolution.
        </p>

        {/* Timeline / Story Cards - Mobile: horizontal scroll */}
        <div className="mt-16">
          <div className="flex md:grid md:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 px-5 md:px-0 scrollbar-hide">
            {/* Card 1 */}
            <div className="reveal flex-shrink-0 w-[280px] md:w-auto snap-center bg-white rounded-3xl border border-[#E5E7EB]/60 p-8 sm:p-10 text-center shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <div className="w-14 h-14 rounded-2xl bg-[#0ABAB5]/10 flex items-center justify-center mx-auto">
                <Microscope className="w-7 h-7 text-[#0ABAB5]" strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-semibold text-[#111827] mt-6">The Research</h3>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0ABAB5] mt-2">
                PAIN STUDIES
              </p>
              <p className="text-[15px] text-[#4B5563] leading-relaxed mt-4">
                LED therapy tested for pain and wound healing
              </p>
            </div>

            {/* Card 2 */}
            <div className="reveal flex-shrink-0 w-[280px] md:w-auto snap-center bg-white rounded-3xl border border-[#E5E7EB]/60 p-8 sm:p-10 text-center shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <div className="w-14 h-14 rounded-2xl bg-[#0ABAB5]/10 flex items-center justify-center mx-auto">
                <Sparkles className="w-7 h-7 text-[#0ABAB5]" strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-semibold text-[#111827] mt-6">The Surprise</h3>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0ABAB5] mt-2">
                UNEXPECTED DISCOVERY
              </p>
              <p className="text-[15px] text-[#4B5563] leading-relaxed mt-4">
                Researchers noticed skin improving as a side effect
              </p>
            </div>

            {/* Card 3 */}
            <div className="reveal flex-shrink-0 w-[280px] md:w-auto snap-center bg-white rounded-3xl border border-[#E5E7EB]/60 p-8 sm:p-10 text-center shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <div className="w-14 h-14 rounded-2xl bg-[#0ABAB5]/10 flex items-center justify-center mx-auto">
                <TrendingUp className="w-7 h-7 text-[#0ABAB5]" strokeWidth={1.8} />
              </div>
              <h3 className="text-xl font-semibold text-[#111827] mt-6">The Revolution</h3>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#0ABAB5] mt-2">
                SKIN TRANSFORMATION
              </p>
              <p className="text-[15px] text-[#4B5563] leading-relaxed mt-4">
                Millions now use LED therapy for younger-looking skin
              </p>
            </div>
          </div>
        </div>

        {/* Key Stat Callout */}
        <div className="reveal mt-16 text-center">
          <p className="text-[40px] sm:text-[48px] lg:text-[56px] font-bold leading-none tracking-[-0.02em]" style={{ color: '#C9A96E' }}>
            6,600+
          </p>
          <p className="text-base sm:text-[17px] text-[#4B5563] max-w-[720px] mx-auto mt-4">
            Studies confirm the remarkable skin benefits
          </p>
        </div>
      </div>
    </section>
  );
}
