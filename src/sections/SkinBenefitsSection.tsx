import { useEffect, useRef } from 'react';

const statCards = [
  {
    stat: '31%',
    label: 'Increase in Collagen Density',
    detail: 'After 8–12 weeks of consistent treatment — measured via skin biopsy analysis',
    isHighlight: false,
  },
  {
    stat: '31.6%',
    label: 'Reduction in Wrinkle Volume',
    detail: 'Periocular (around the eyes) wrinkle volume decrease — Wunsch et al. clinical study',
    isHighlight: false,
  },
  {
    stat: '81%',
    label: 'Patients Reported Visible Improvement',
    detail: 'In wrinkle appearance across multiple controlled clinical trials',
    isHighlight: false,
  },
  {
    stat: '97.4%',
    label: 'Patient Satisfaction Rate',
    detail: 'Across cosmetic LED therapy treatments — one of the highest in aesthetic medicine',
    isHighlight: true,
  },
];

const supportingStats = [
  { num: '30%', label: 'Decrease in Pore Size' },
  { num: '57.9%', label: 'Scar Improvement' },
  { num: '76–81%', label: 'Reduction in Acne' },
];

const benefitPills = ['Wrinkle Reduction', 'Collagen Stimulation', 'Skin Lifting', 'Tone Correction', 'Pore Refinement'];

export default function SkinBenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const redStrokeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('.reveal');
    elements.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(50px)';
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
          observer.unobserve(section);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // Red stroke animation for 97.4% stat
  useEffect(() => {
    const redStroke = redStrokeRef.current;
    if (!redStroke) return;

    redStroke.style.width = '0%';
    redStroke.style.transition = 'none';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            redStroke.style.transition = 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            redStroke.style.width = '100%';
          }, 400);
          observer.unobserve(redStroke);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(redStroke);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skin" className="bg-[#FAFAFA] section-padding relative overflow-hidden">
      {/* Subtle red LED glow behind stat cards */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '80%',
          height: '60%',
          top: '20%',
          left: '10%',
          background: 'radial-gradient(ellipse, rgba(220, 38, 38, 0.05) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center">
          <p className="reveal flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
            COSMETIC SCIENCE
          </p>
          <h2 className="reveal text-[32px] sm:text-[38px] lg:text-[42px] font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4">
            Science-Backed Skin Transformation
          </h2>
          <p className="reveal text-lg text-[#6B7280] max-w-[560px] mx-auto mt-3">
            Clinically measurable results from Red &amp; Infrared LED therapy — no surgery, no downtime.
          </p>
        </div>

        {/* Stat Card Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mt-14">
          {statCards.map((card, i) => (
            <div
              key={i}
              className={`reveal relative bg-white rounded-3xl p-8 sm:p-10 ${
                card.isHighlight ? 'border border-red-500/20' : 'border border-[#E5E7EB]/60'
              }`}
            >
              <p
                className={`text-[52px] sm:text-[60px] font-bold leading-none tracking-[-0.02em] ${
                  card.isHighlight ? 'text-[#DC2626]' : 'text-black'
                }`}
              >
                {card.stat}
              </p>
              {card.isHighlight && (
                <div
                  ref={redStrokeRef}
                  className="h-[3px] bg-[#DC2626] rounded-full mt-2"
                  style={{ width: '0%' }}
                />
              )}
              <p className="text-base font-medium text-[#111827] mt-4">{card.label}</p>
              <p className="text-sm text-[#6B7280] mt-2 leading-relaxed">{card.detail}</p>
            </div>
          ))}
        </div>

        {/* Supporting Stats */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mt-12">
          {supportingStats.map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              {i > 0 && <div className="hidden sm:block w-px h-8 bg-[#E5E7EB]" />}
              <div className="text-center">
                <span className="text-2xl font-bold text-[#0ABAB5]">{s.num}</span>
                <span className="text-sm text-[#6B7280] ml-2">{s.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Benefit Pills */}
        <div className="reveal flex flex-wrap justify-center gap-3 mt-10">
          {benefitPills.map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center bg-red-500/10 text-red-500 border border-red-500/20 text-xs font-semibold uppercase tracking-[0.1em] rounded-full px-5 py-2"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
