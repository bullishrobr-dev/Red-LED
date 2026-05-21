import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const statCards = [
  {
    stat: 'Up to 80%',
    label: 'Faster Return to Play',
    detail: 'Athletes recovered dramatically faster — professional sports performance data',
  },
  {
    stat: 'Up to 95%',
    label: 'IL-6 Reduction',
    detail: 'Massive inflammatory cytokine decrease — measured in controlled clinical trials',
  },
  {
    stat: '15+',
    label: 'Point VAS Reduction',
    detail: 'Significant chronic low back pain improvement on 100-point Visual Analog Scale',
  },
  {
    stat: 'Up to 75%',
    label: 'DOMS Reduction',
    detail: 'Dramatic decrease in delayed-onset muscle soreness after intense training',
  },
];

const bulletPoints = [
  'Up to 98% pain attenuation for Rheumatoid Arthritis',
  'Reduces inflammatory cytokines (IL-6 by up to 95%, TNF-alpha by up to 90%)',
  'Up to 80% faster return-to-play for professional athletes',
  'Effective for chronic back pain, joint stiffness, and muscle recovery',
  'Reduces DOMS (Delayed Onset Muscle Soreness) by up to 75%',
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
          <h2 className="reveal text-[36px] sm:text-[42px] lg:text-[48px] font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4">
            Beyond Skin — Healing from Within
          </h2>
          <p className="reveal text-lg text-[#4B5563] max-w-[600px] mx-auto mt-3">
            Near-infrared light penetrates up to 5cm into muscle, bone, and deep tissue — delivering clinically significant pain relief and accelerated recovery.
          </p>
        </div>

        {/* Hero Stat */}
        <div className="reveal text-center mt-12">
          <p className="text-[64px] font-bold leading-none tracking-[-0.02em] text-[#C9A961]">
            Up to 98%
          </p>
          <div
            ref={goldStrokeRef}
            className="h-[3px] bg-[#C9A961] rounded-full mx-auto mt-2"
            style={{ width: '0%', maxWidth: '200px' }}
          />
          <p className="text-xl font-semibold text-[#111827] mt-4">
            Pain Attenuation for Rheumatoid Arthritis
          </p>
          <p className="text-sm text-[#4B5563] mt-2">
            Clinical studies demonstrating up to 98% pain reduction
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
              <p className="text-sm text-[#4B5563] mt-2 leading-relaxed">{card.detail}</p>
            </div>
          ))}
        </div>

        {/* Professional Adoption Bar */}
        <div className="reveal mt-12 bg-[#FAFAFA] rounded-2xl px-6 sm:px-8 py-6 text-center">
          <p className="text-sm uppercase tracking-[0.1em] text-[#4B5563]">
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

        {/* NEW: Body Pain Treatment Diagram */}
        <div className="reveal mt-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5]" />
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
              TREATMENT AREAS
            </p>
          </div>
          <h3 className="text-xl font-semibold text-black text-center mb-6">
            Where to Use It on Your Body
          </h3>
          <div className="bg-[#FAFAFA] rounded-3xl p-6 sm:p-8 border border-[#E5E7EB]/60">
            <img
              src="/body-pain-diagram.png"
              alt="Body treatment areas for LED pain relief therapy"
              className="w-full max-w-[800px] mx-auto h-auto rounded-xl"
            />
          </div>
          <p className="text-sm text-[#4B5563] mt-4 text-center leading-relaxed max-w-[600px] mx-auto">
            Target neck, shoulders, back, elbows, wrists, hips, knees, and ankles — anywhere you experience pain, stiffness, or inflammation.
          </p>
        </div>

        {/* NEW: Pain Usage Protocol */}
        <div className="reveal mt-14 bg-[#FAFAFA] rounded-2xl p-8 sm:p-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5]" />
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
              RECOMMENDED PROTOCOL
            </p>
          </div>
          <h3 className="text-xl font-semibold text-black text-center mb-8">
            How Often to Use It for Pain Relief
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center">
              <p className="text-[36px] font-bold text-[#0ABAB5] leading-none">Multiple</p>
              <p className="text-sm font-semibold text-[#111827] mt-3">Times Per Day</p>
              <p className="text-xs text-[#4B5563] mt-2 leading-relaxed">
                Use as often as needed — there is no upper limit for pain relief sessions
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <p className="text-[36px] font-bold text-[#0ABAB5] leading-none">5</p>
              <p className="text-sm font-semibold text-[#111827] mt-3">Minutes Per Session</p>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center">
              <p className="text-[36px] font-bold text-[#0ABAB5] leading-none">Daily</p>
              <p className="text-sm font-semibold text-[#111827] mt-3">For Best Results</p>
              <p className="text-xs text-[#4B5563] mt-2 leading-relaxed">
                Consistent daily use provides the most effective pain management over time
              </p>
            </div>
          </div>
        </div>

        {/* Deep Tissue Callout */}
        <div className="reveal grid md:grid-cols-[40%_60%] gap-8 items-center mt-14">
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
