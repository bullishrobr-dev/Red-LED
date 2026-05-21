import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const statCards = [
  {
    stat: '50%',
    label: 'Faster Return to Play',
    detail: 'Athletes recovered in 9.6 days vs 19.23 days — professional sports data',
  },
  {
    stat: '82.5%',
    label: 'IL-6 Reduction',
    detail: 'Inflammatory cytokine decrease — measured in controlled trials',
  },
  {
    stat: '13.57',
    label: 'Point VAS Reduction',
    detail: 'Chronic low back pain improvement on 100-point Visual Analog Scale',
  },
  {
    stat: '50%',
    label: 'DOMS Reduction',
    detail: 'Decrease in delayed-onset muscle soreness after intense training',
  },
];

const bulletPoints = [
  'Up to 90% pain attenuation for Rheumatoid Arthritis',
  'Reduces inflammatory cytokines (IL-6 by 82.5%, TNF-alpha by 82.4%)',
  '50% faster return-to-play for professional athletes',
  'Effective for chronic back pain, joint stiffness, and muscle recovery',
  'Reduces DOMS (Delayed Onset Muscle Soreness) by up to 50%',
  'Used by NFL, NBA teams and US Special Forces for recovery',
  'Non-invasive, drug-free alternative to NSAIDs and opioids',
  'FDA Class 2 cleared for temporary relief of minor muscle and joint pain',
];

export default function PainBenefitsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const goldStrokeRef = useRef<HTMLDivElement>(null);

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
          observer.unobserve(section);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // AmberGoldStroke for 90% stat
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
    <section ref={sectionRef} id="pain" className="bg-white section-padding">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="reveal flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5]" />
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
              THERAPEUTIC SCIENCE
            </span>
          </div>
          <h2 className="reveal text-[32px] sm:text-[38px] lg:text-[42px] font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4">
            Expand Your Service Menu — Enter Pain Management
          </h2>
          <p className="reveal text-lg text-[#6B7280] max-w-[600px] mx-auto mt-3">
            Near-infrared light penetrates deep into muscle and joint tissue — opening a whole new revenue stream for your practice with zero additional staffing costs.
          </p>
        </div>

        {/* Hero Stat */}
        <div className="reveal text-center mt-12">
          <p className="text-[64px] font-bold leading-none tracking-[-0.02em] text-[#C9A961]">
            90%
          </p>
          <div
            ref={goldStrokeRef}
            className="h-[3px] bg-[#C9A961] rounded-full mx-auto mt-2"
            style={{ width: '0%', maxWidth: '200px' }}
          />
          <p className="text-xl font-semibold text-[#111827] mt-4">
            Pain Attenuation for Rheumatoid Arthritis
          </p>
          <p className="text-sm text-[#6B7280] mt-2">
            170-patient clinical study demonstrating up to 90% pain reduction
          </p>
        </div>

        {/* Stat Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mt-14">
          {statCards.map((card, i) => (
            <div
              key={i}
              className="reveal bg-[#FAFAFA] rounded-3xl p-8 sm:p-10 border border-[#E5E7EB]/60"
            >
              <p className="text-[48px] sm:text-[56px] font-bold text-black leading-none tracking-[-0.02em]">
                {card.stat}
              </p>
              <p className="text-base font-medium text-[#111827] mt-4">{card.label}</p>
              <p className="text-sm text-[#6B7280] mt-2 leading-relaxed">{card.detail}</p>
            </div>
          ))}
        </div>

        {/* Professional Adoption Bar */}
        <div className="reveal mt-12 bg-[#FAFAFA] rounded-2xl px-6 sm:px-8 py-6 text-center">
          <p className="text-sm uppercase tracking-[0.1em] text-[#6B7280]">
            Trusted by Professional Sports
          </p>
          <p className="text-base font-medium text-[#111827] mt-2">
            NFL &bull; NBA &bull; US Special Forces &bull; Olympic Training Centers
          </p>
          <p className="text-sm font-semibold text-[#0ABAB5] mt-2">
            WADA approved — NOT prohibited in any professional sport
          </p>
        </div>

        {/* NEW: Bullet Points */}
        <div className="reveal mt-12 bg-[#FAFAFA] rounded-2xl p-8 sm:p-10">
          <h3 className="text-xl font-semibold text-black mb-6 text-center">
            How LED Helps with Pain Relief
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

        {/* Deep Tissue Callout */}
        <div className="reveal grid md:grid-cols-[40%_60%] gap-8 items-center mt-12">
          <img
            src="/team-sports.png"
            alt="Professional athletes using LED therapy"
            className="w-full h-auto rounded-[20px] object-cover"
          />
          <div className="md:pl-4">
            <p className="text-[17px] text-[#111827] leading-[1.65]">
              Near-infrared light (810–850nm) penetrates up to{' '}
              <span className="text-[#0ABAB5] font-bold">4–5cm</span> — reaching muscle, bone, and nerve tissue. NFL teams including the Buffalo Bills, Arizona Cardinals, and Carolina Panthers integrate LED therapy into player recovery protocols.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
