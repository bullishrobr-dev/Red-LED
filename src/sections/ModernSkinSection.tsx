import { useEffect, useRef } from 'react';

const skinStats = [
  {
    stat: '31%',
    label: 'Increase in Collagen Density',
    detail: 'After 8–12 weeks of consistent treatment — measured via skin biopsy analysis',
    gold: false,
  },
  {
    stat: '31.6%',
    label: 'Reduction in Wrinkle Volume',
    detail: 'Periocular (around the eyes) wrinkle volume decrease — Wunsch et al. clinical study',
    gold: false,
  },
  {
    stat: '81%',
    label: 'Patients Reported Visible Improvement',
    detail: 'In wrinkle appearance across multiple controlled clinical trials',
    gold: false,
  },
  {
    stat: '97.4%',
    label: 'Patient Satisfaction Rate',
    detail: 'Across cosmetic LED therapy treatments — one of the highest in aesthetic medicine',
    gold: true,
  },
];

const supportingStats = [
  { number: '30%', label: 'Decrease in Pore Size' },
  { number: '57.9%', label: 'Scar Improvement' },
  { number: '76–81%', label: 'Reduction in Acne' },
];

export default function ModernSkinSection() {
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
      id="skin-benefits"
      className="bg-[#F7F5F2]"
      style={{ padding: '100px 0' }}
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        {/* Label */}
        <div className="reveal flex items-center justify-center gap-2">
          <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
            COSMETIC SCIENCE
          </span>
        </div>

        {/* Headline */}
        <h2
          className="reveal text-center text-black leading-[1.1] tracking-[-0.02em] mt-5"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 400 }}
        >
          Science-Backed Skin Transformation
        </h2>
        <p className="reveal text-center text-[17px] text-[#4B5563] leading-[1.65] mt-5 max-w-[640px] mx-auto">
          Clinically measurable results from Red & Infrared LED therapy — no surgery, no downtime.
        </p>

        {/* Stat Card Grid - 2x2 */}
        <div className="reveal mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {skinStats.map((item, i) => (
            <div
              key={i}
              className={`bg-white rounded-3xl p-8 sm:p-10 border text-center shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 ${
                item.gold ? 'border-[#C9A96E]/30' : 'border-[#E5E7EB]/60'
              }`}
            >
              <p
                className="leading-none tracking-[-0.02em]"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                  fontWeight: 700,
                  color: item.gold ? '#C9A96E' : '#000000',
                }}
              >
                {item.stat}
              </p>
              <p className="text-base text-[#111827] font-semibold mt-4">{item.label}</p>
              <p className="text-sm text-[#4B5563] leading-relaxed mt-2">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Supporting Stats Row */}
        <div className="reveal mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-0">
          {supportingStats.map((item, i) => (
            <div key={i} className="flex items-center">
              <div className="text-center px-6 sm:px-10">
                <p className="text-2xl font-bold text-[#0ABAB5]">{item.number}</p>
                <p className="text-sm text-[#4B5563] mt-1">{item.label}</p>
              </div>
              {i < supportingStats.length - 1 && (
                <div className="hidden sm:block w-px h-12 bg-[#E5E7EB]" />
              )}
            </div>
          ))}
        </div>

        {/* Benefit Pills */}
        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-3">
          {['Wrinkle Reduction', 'Collagen Stimulation', 'Skin Lifting', 'Tone Correction', 'Pore Refinement'].map(
            (pill, i) => (
              <span
                key={i}
                className="bg-[#0ABAB5]/10 text-[#0ABAB5] text-xs font-semibold uppercase tracking-[0.1em] px-5 py-2.5 rounded-full"
              >
                {pill}
              </span>
            )
          )}
        </div>

        {/* Protocol CTA Section */}
        <div className="reveal mt-14 bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)] text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
            TREATMENT PROTOCOL
          </p>
          <h3
            className="text-black leading-[1.15] tracking-[-0.01em] mt-4"
            style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 500 }}
          >
            The Optimal Routine for Visible Results
          </h3>
          <p className="text-[17px] text-[#4B5563] leading-[1.65] mt-4 max-w-[640px] mx-auto">
            Consistency is the key to unlocking the full potential of LED therapy. Follow this proven protocol for clinically measurable improvements in skin texture, tone, and wrinkle depth.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { step: '1', title: 'Cleanse', desc: 'Start with clean, dry skin. Remove all makeup, sunscreen, and oils for maximum light absorption.' },
              { step: '2', title: 'Treat', desc: 'Position the device 10–30cm from your face. Treat for 10–20 minutes per session, 3–5 times per week.' },
              { step: '3', title: 'Maintain', desc: 'After 8–12 weeks, reduce to 2–3 maintenance sessions per week to preserve and build results.' },
            ].map((protocol, i) => (
              <div key={i} className="bg-[#FAFAFA] rounded-2xl p-6 text-center">
                <div className="w-10 h-10 rounded-full bg-[#0ABAB5] flex items-center justify-center mx-auto">
                  <span className="text-white text-sm font-bold">{protocol.step}</span>
                </div>
                <p className="text-base font-semibold text-[#111827] mt-4">{protocol.title}</p>
                <p className="text-sm text-[#4B5563] leading-relaxed mt-2">{protocol.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
