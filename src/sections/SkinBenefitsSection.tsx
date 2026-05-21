import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const statCards = [
  {
    stat: '31%',
    label: 'Increase in Collagen Density',
    detail: 'After 8–12 weeks of consistent treatment — measured via skin biopsy analysis',
    isGold: false,
  },
  {
    stat: '31.6%',
    label: 'Reduction in Wrinkle Volume',
    detail: 'Wrinkle volume decrease across treated areas — Wunsch et al. clinical study',
    isGold: false,
  },
  {
    stat: '81%',
    label: 'Patients Reported Visible Improvement',
    detail: 'In wrinkle appearance across multiple controlled clinical trials',
    isGold: false,
  },
  {
    stat: '97.4%',
    label: 'Patient Satisfaction Rate',
    detail: 'Across cosmetic LED therapy treatments — one of the highest in aesthetic medicine',
    isGold: true,
  },
];

const supportingStats = [
  { num: '30%', label: 'Decrease in Pore Size' },
  { num: '57.9%', label: 'Scar Improvement' },
  { num: '76–81%', label: 'Reduction in Acne' },
];

const benefitPills = ['Wrinkle Reduction', 'Collagen Stimulation', 'Skin Lifting', 'Tone Correction', 'Pore Refinement'];

const bulletPoints = [
  'Stimulates collagen & elastin production for firmer, lifted skin',
  'Reduces fine lines and wrinkles by up to 31.6%',
  'Improves skin tone, texture, and overall radiance',
  'Minimizes pore size and reduces acne lesions by 76-81%',
  'Speeds up wound healing and reduces scar appearance by 57.9%',
  'Promotes overall skin health and natural cellular rejuvenation',
];

export default function SkinBenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const goldStrokeRef = useRef<HTMLDivElement>(null);

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

  // AmberGoldStroke for 97.4% stat
  useEffect(() => {
    const goldStroke = goldStrokeRef.current;
    if (!goldStroke) return;

    goldStroke.style.width = '0%';
    goldStroke.style.transition = 'none';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            goldStroke.style.transition = 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            goldStroke.style.width = '100%';
          }, 400);
          observer.unobserve(goldStroke);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(goldStroke);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skin" className="bg-[#FAFAFA] section-padding">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="reveal flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5]" />
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
              COSMETIC SCIENCE
            </span>
          </div>
          <h2 className="reveal text-[36px] sm:text-[42px] lg:text-[48px] font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4">
            Deliver Results Your Clients Can See
          </h2>
          <p className="reveal text-lg text-[#4B5563] max-w-[560px] mx-auto mt-3">
            Clinically measurable skin transformation that keeps clients coming back — and drives word-of-mouth referrals for your practice.
          </p>
        </div>

        {/* Stat Card Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mt-14">
          {statCards.map((card, i) => (
            <div
              key={i}
              className={`reveal relative bg-white rounded-3xl p-8 sm:p-10 ${
                card.isGold ? 'border border-[#C9A961]/30' : 'border border-[#E5E7EB]/60'
              }`}
            >
              <p
                className={`text-[52px] sm:text-[60px] font-bold leading-none tracking-[-0.02em] ${
                  card.isGold ? 'text-[#C9A961]' : 'text-black'
                }`}
              >
                {card.stat}
              </p>
              {card.isGold && (
                <div
                  ref={goldStrokeRef}
                  className="h-[3px] bg-[#C9A961] rounded-full mt-2"
                  style={{ width: '0%' }}
                />
              )}
              <p className="text-base font-medium text-[#111827] mt-4">{card.label}</p>
              <p className="text-sm text-[#4B5563] mt-2 leading-relaxed">{card.detail}</p>
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
                <span className="text-sm text-[#4B5563] ml-2">{s.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Benefit Pills */}
        <div className="reveal flex flex-wrap justify-center gap-3 mt-10">
          {benefitPills.map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center bg-[#0ABAB5]/10 text-[#0ABAB5] text-xs font-semibold uppercase tracking-[0.1em] rounded-full px-5 py-2 border border-[#0ABAB5]/20"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* NEW: Bullet Points */}
        <div className="reveal mt-14 bg-white rounded-2xl p-8 sm:p-10 border border-[#E5E7EB]/60">
          <h3 className="text-xl font-semibold text-black mb-6 text-center">
            How LED Helps with Anti-Aging
          </h3>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {bulletPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#0ABAB5] mt-0.5 flex-shrink-0" />
                <span className="text-[15px] text-[#374151] leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
