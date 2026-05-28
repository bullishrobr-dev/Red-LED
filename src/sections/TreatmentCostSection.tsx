import { useEffect, useRef } from 'react';
import { DollarSign, Calculator, TrendingDown } from 'lucide-react';

const costItems = [
  { label: 'Single LED facial at a clinic', cost: '$150 – $350', detail: 'Per session' },
  { label: 'Course of 10 professional treatments', cost: '$1,500 – $3,500', detail: 'Recommended starter course' },
  { label: 'Monthly maintenance (12 sessions/yr)', cost: '$1,800 – $4,200', detail: 'Yearly cost to maintain results' },
];

const yearlyComparison = [
  { label: 'Year 1 (clinic visits)', amount: '$3,300', color: '#EF4444' },
  { label: 'Year 2 (clinic visits)', amount: '$3,000', color: '#EF4444' },
  { label: 'Year 3 (clinic visits)', amount: '$3,000', color: '#EF4444' },
  { label: '3 Years with Zero Lines', amount: 'One-Time Investment', color: '#0ABAB5' },
];

export default function TreatmentCostSection() {
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
      id="cost-comparison"
      className="bg-[#F7F5F2]"
      style={{ padding: '100px 0' }}
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        {/* Label */}
        <div className="reveal flex items-center justify-center gap-2">
          <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
            THE REAL COST
          </span>
        </div>

        {/* Headline */}
        <h2
          className="reveal text-center text-black leading-[1.1] tracking-[-0.02em] mt-5"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 400 }}
        >
          What Clinic Treatments Actually Cost
        </h2>
        <p className="reveal text-center text-[17px] text-[#4B5563] leading-[1.65] mt-5 max-w-[640px] mx-auto">
          Professional LED facials deliver excellent results — but the cost adds up quickly. Here&apos;s what you&apos;re really paying when you go the clinic route.
        </p>

        {/* Cost Items - Mobile: horizontal scroll */}
        <div className="reveal mt-12">
          <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 px-5 md:px-0 scrollbar-hide">
            {costItems.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[85vw] max-w-[320px] md:w-auto md:max-w-none snap-center bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)] text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0ABAB5]/10 flex items-center justify-center mx-auto">
                  <DollarSign className="w-7 h-7 text-[#0ABAB5]" />
                </div>
                <p className="text-[15px] text-[#4B5563] leading-relaxed mt-5">{item.label}</p>
                <p className="text-[28px] sm:text-[32px] font-bold text-black leading-none tracking-[-0.02em] mt-4">
                  {item.cost}
                </p>
                <p className="text-xs text-[#4B5563] mt-2 uppercase tracking-[0.1em]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3-Year Comparison */}
        <div className="reveal mt-12 bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-[#0ABAB5]/10 flex items-center justify-center">
              <Calculator className="w-6 h-6 text-[#0ABAB5]" />
            </div>
          </div>
          <h3 className="text-center text-xl font-semibold text-[#111827]">3-Year Cost Comparison</h3>

          <div className="mt-8 space-y-4">
            {yearlyComparison.map((item, i) => (
              <div key={i} className="flex items-center justify-between py-4 border-b border-[#E5E7EB]/60 last:border-0">
                <span className="text-[15px] text-[#4B5563]">{item.label}</span>
                <span
                  className="text-lg font-bold"
                  style={{ color: item.color }}
                >
                  {item.amount}
                </span>
              </div>
            ))}
          </div>

          {/* Total savings callout */}
          <div className="mt-8 bg-[#FAFAFA] rounded-2xl p-6 text-center border border-[#E5E7EB]/40">
            <div className="flex items-center justify-center gap-2 mb-2">
              <TrendingDown className="w-5 h-5 text-[#0ABAB5]" />
              <span className="text-sm font-semibold text-[#111827]">Potential Savings Over 3 Years</span>
            </div>
            <p className="text-[40px] sm:text-[48px] font-bold leading-none tracking-[-0.02em]" style={{ color: '#C9A96E' }}>
              $9,300+
            </p>
            <p className="text-sm text-[#4B5563] mt-2">
              Based on average clinic pricing. Individual results and clinic rates may vary.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
