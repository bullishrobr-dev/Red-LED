import { useEffect, useRef } from 'react';

const costStats = [
  { num: '$75–$150', label: 'Per Spa Session', detail: 'What clinics and spas typically charge for a single LED therapy treatment' },
  { num: '$600–$1,800', label: 'Annual Spa Cost', detail: 'Yearly spend for regular LED treatments at a professional facility' },
  { num: '8–12', label: 'Sessions Per Year', detail: 'Recommended treatment course for optimal, lasting results' },
  { num: '$0', label: 'Cost Per Session at Home', detail: 'Once you own your Zero Lines device — unlimited treatments, zero ongoing cost' },
];

export default function ROISection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const elements = section.querySelectorAll('.reveal');
    elements.forEach((el, i) => {
      const h = el as HTMLElement;
      h.style.opacity = '0';
      h.style.transform = 'translateY(30px)';
      h.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
    });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          elements.forEach((el) => {
            const h = el as HTMLElement;
            h.style.opacity = '1';
            h.style.transform = 'translateY(0)';
          });
          observer.unobserve(section);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white section-padding">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center">
          <div className="reveal flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5]" />
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
              SMART INVESTMENT
            </p>
          </div>
          <h2 className="reveal text-[36px] sm:text-[42px] lg:text-[48px] font-medium text-[#111827] leading-[1.15] tracking-[-0.01em] mt-3">
            Spa Results at Home — Without the Spa Bill
          </h2>
          <p className="reveal text-lg text-[#4B5563] max-w-[600px] mx-auto mt-3">
            Why keep paying for expensive spa sessions when you can achieve the same professional-grade results in the comfort of your own home?
          </p>
        </div>

        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {costStats.map((stat, i) => (
            <div key={i} className="bg-[#FAFAFA] rounded-2xl p-6 border border-[#F3F4F6] text-center">
              <p className="text-[32px] font-semibold text-[#111827] leading-none">{stat.num}</p>
              <p className="text-sm font-medium text-[#374151] mt-3">{stat.label}</p>
              <p className="text-xs text-[#4B5563] mt-1">{stat.detail}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-8 bg-[#FAFAFA] rounded-2xl p-6 border border-[#F3F4F6]">
          <p className="text-sm text-[#4B5563] leading-relaxed text-center">
            <strong className="text-[#374151]">The math is simple:</strong> A year of spa treatments can easily cost $1,000 or more — and you're on their schedule. With Zero Lines, you invest once and enjoy unlimited treatments whenever you want, for years to come. Professional-grade results. Zero ongoing cost. Total convenience.
          </p>
        </div>
      </div>
    </section>
  );
}
