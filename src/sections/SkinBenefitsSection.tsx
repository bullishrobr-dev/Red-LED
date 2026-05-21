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
    stat: '81%',
    label: 'Visible Wrinkle Improvement',
    detail: 'Of patients reported visible improvement in wrinkles — Goldberg & Russell clinical study',
    isGold: true,
  },
  {
    stat: '76%',
    label: 'Reduction in Acne Lesions',
    detail: 'Decrease in inflammatory acne lesions after 12 weeks of treatment',
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
  { num: '69%', label: 'Users Showed Improvement' },
];

const benefitPills = ['Wrinkle Reduction', 'Collagen Stimulation', 'Skin Lifting', 'Tone Correction', 'Pore Refinement'];

const bulletPoints = [
  'Stimulates collagen & elastin production for firmer, lifted skin',
  'Reduces fine lines and wrinkles with up to 81% of users seeing visible improvement',
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
            Science-Backed Skin Transformation
          </h2>
          <p className="reveal text-lg text-[#4B5563] max-w-[560px] mx-auto mt-3">
            Clinically measurable results from Red &amp; Infrared LED therapy — no surgery, no downtime.
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

        {/* NEW: Face Treatment Diagram */}
        <div className="reveal mt-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5]" />
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
              TREATMENT AREAS
            </p>
          </div>
          <h3 className="text-xl font-semibold text-black text-center mb-6">
            Where to Use It on Your Face
          </h3>
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB]/60">
            <img
              src="/face-antiaging-diagram.png"
              alt="Facial treatment areas for LED anti-aging therapy"
              className="w-full max-w-[700px] mx-auto h-auto rounded-xl"
            />
          </div>
          <p className="text-sm text-[#4B5563] mt-4 text-center leading-relaxed max-w-[600px] mx-auto">
            Target forehead lines, cheeks, smile lines, jawline, chin, and neck for comprehensive facial rejuvenation. Eye area excluded — see our dedicated eye care products.
          </p>
        </div>

        {/* NEW: Anti-Aging Usage Protocol */}
        <div className="reveal mt-14 bg-white rounded-2xl p-8 sm:p-10 border border-[#E5E7EB]/60">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5]" />
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
              RECOMMENDED PROTOCOL
            </p>
          </div>
          <h3 className="text-xl font-semibold text-black text-center mb-8">
            Anti-Aging Treatment Protocol
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-[#FAFAFA] rounded-2xl p-6 text-center">
              <p className="text-[36px] font-bold text-[#0ABAB5] leading-none">3×</p>
              <p className="text-sm font-semibold text-[#111827] mt-3">Per Week</p>
              <p className="text-xs text-[#4B5563] mt-2 leading-relaxed">
                For the first month — this kick-starts collagen production and gets your skin renewal process going
              </p>
            </div>
            <div className="bg-[#FAFAFA] rounded-2xl p-6 text-center">
              <p className="text-[36px] font-bold text-[#0ABAB5] leading-none">1×</p>
              <p className="text-sm font-semibold text-[#111827] mt-3">Every 2 Weeks</p>
              <p className="text-xs text-[#4B5563] mt-2 leading-relaxed">
                After the first month — maintenance sessions to keep improving and preserving your results
              </p>
            </div>
            <div className="bg-[#FAFAFA] rounded-2xl p-6 text-center">
              <p className="text-[36px] font-bold text-[#0ABAB5] leading-none">10–15</p>
              <p className="text-sm font-semibold text-[#111827] mt-3">Minutes Per Session</p>
              <p className="text-xs text-[#4B5563] mt-2 leading-relaxed">
                Place the device directly on clean, dry skin for optimal light absorption
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
