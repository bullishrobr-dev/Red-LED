import { useEffect, useRef } from 'react';

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
      htmlEl.style.transition = `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.1}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.1}s`;
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
      { threshold: 0.1 }
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
      <div className="max-w-[1100px] mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="reveal text-center mb-10">
          <div className="flex items-center justify-center gap-2">
            <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
              THE REAL COST
            </span>
          </div>
          <h2
            className="leading-[1.1] tracking-[-0.02em] mt-4 text-[#111827]"
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 3.25rem)', fontWeight: 400 }}
          >
            Clinic Visits Add Up — Fast.
          </h2>
          <p className="text-[16px] text-[#4B5563] leading-[1.65] max-w-[560px] mx-auto mt-3">
            Professional LED facials work wonders. But at $150–$350 per session, the numbers get real — quickly.
          </p>
        </div>

        {/* Cost Cards */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-3xl p-7 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            <p className="text-[13px] text-[#4B5563] uppercase tracking-[0.1em] mb-3">Single Session</p>
            <p className="text-[32px] font-bold text-[#111827] tracking-[-0.02em]">$150 – $350</p>
            <p className="text-[13px] text-[#4B5563] mt-2">Per facial at a professional clinic</p>
          </div>
          <div className="bg-white rounded-3xl p-7 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            <p className="text-[13px] text-[#4B5563] uppercase tracking-[0.1em] mb-3">Starter Course</p>
            <p className="text-[32px] font-bold text-[#111827] tracking-[-0.02em]">$1,500 – $3,500</p>
            <p className="text-[13px] text-[#4B5563] mt-2">Typical 10-treatment package</p>
          </div>
          <div className="bg-white rounded-3xl p-7 text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
            <p className="text-[13px] text-[#4B5563] uppercase tracking-[0.1em] mb-3">Every Year</p>
            <p className="text-[32px] font-bold text-[#111827] tracking-[-0.02em]">$1,800 – $4,200</p>
            <p className="text-[13px] text-[#4B5563] mt-2">Maintenance: 12 sessions annually</p>
          </div>
        </div>

        {/* 3-Year Reality Table */}
        <div className="reveal bg-white rounded-3xl p-7 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
          <h3 className="text-[17px] font-semibold text-[#111827] text-center mb-5 tracking-[0.02em]">
            THE 3-YEAR REALITY
          </h3>
          <div className="max-w-[480px] mx-auto">
            <div className="flex justify-between items-center py-3 border-b border-[#E5E7EB]/60">
              <span className="text-[15px] text-[#4B5563]">Year 1 — Clinic visits</span>
              <span className="text-[17px] font-bold text-[#EF4444]">~$3,300</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-[#E5E7EB]/60">
              <span className="text-[15px] text-[#4B5563]">Year 2 — Clinic visits</span>
              <span className="text-[17px] font-bold text-[#EF4444]">~$3,000</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-[#E5E7EB]/60">
              <span className="text-[15px] text-[#4B5563]">Year 3 — Clinic visits</span>
              <span className="text-[17px] font-bold text-[#EF4444]">~$3,000</span>
            </div>
            <div className="flex justify-between items-center pt-4">
              <span className="text-[15px] text-[#111827] font-semibold">3 Years with Zero Lines</span>
              <span className="text-[16px] font-bold text-[#0ABAB5]">One Device</span>
            </div>
          </div>
          <div
            className="rounded-2xl p-6 text-center mt-6 border border-[#0ABAB5]/10"
            style={{ background: 'linear-gradient(135deg, #F0F9F8 0%, #FAFAFA 100%)' }}
          >
            <p className="text-[13px] font-semibold text-[#111827] uppercase tracking-[0.12em] mb-1">
              Total Savings Over 3 Years
            </p>
            <p className="text-[42px] font-bold text-[#C9A96E] leading-none tracking-[-0.02em] my-2">
              $9,300+
            </p>
            <p className="text-[12px] text-[#4B5563] max-w-[400px] mx-auto">
              Based on average clinic pricing. Your actual savings depend on treatment frequency and local rates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
