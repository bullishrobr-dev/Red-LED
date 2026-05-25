import { useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

const experts = [
  {
    name: 'Dr. Sarah Mitchell',
    title: 'Board-Certified Dermatologist',
    institution: 'NYU Langone Health',
    quote:
      'Red and infrared LED therapy is one of the most exciting non-invasive modalities I recommend. The clinical evidence is compelling — my patients notice improvements from the very first session, with optimal results typically appearing after 8-12 weeks of consistent use.',
    stat: '300%',
    statLabel: 'Collagen Increase',
  },
  {
    name: 'Dr. James Whitfield',
    title: 'Sports Medicine Physician',
    institution: 'Johns Hopkins Medicine',
    quote:
      'We use LED therapy in our practice for both acute injury recovery and chronic pain management. The nitric oxide release mechanism is well-documented — it improves circulation and reduces inflammation at the cellular level without drugs.',
    stat: '90%',
    statLabel: 'Pain Reduction',
  },
  {
    name: 'Elena Rodriguez',
    title: 'Lead Aesthetician',
    institution: 'The Skin Clinic, Beverly Hills',
    quote:
      'Among all the light therapies I have worked with, medical-grade LED devices deliver the most consistent results. My clients see firmer skin, reduced pigmentation, and a noticeable glow — all without any downtime or irritation.',
    stat: '95%',
    statLabel: 'Client Satisfaction',
  },
];

export default function ExpertQuotesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('.reveal');
    elements.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(40px)';
      htmlEl.style.transition = `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.15}s, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.15}s`;
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
      { threshold: 0.12 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experts"
      className="bg-[#F5F0E8]"
      style={{ padding: '120px 0' }}
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        {/* Label */}
        <div className="reveal flex items-center justify-center gap-2">
          <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
            TRUSTED BY PROFESSIONALS
          </span>
        </div>

        {/* Headline */}
        <h2
          className="reveal text-center text-black leading-[1.1] tracking-[-0.02em] mt-5"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 400 }}
        >
          What the Experts Say
        </h2>
        <p className="reveal text-center text-[17px] text-[#4B5563] mt-5 max-w-[560px] mx-auto">
          Leading dermatologists, sports physicians, and aestheticians on the power of red and infrared LED therapy.
        </p>

        {/* Expert Cards - Mobile: horizontal scroll */}
        <div className="reveal mt-16">
          <div className="flex lg:grid lg:grid-cols-3 gap-8 overflow-x-auto snap-x snap-mandatory pb-6 lg:pb-0 px-5 lg:px-0 scrollbar-hide">
            {experts.map((expert, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[320px] lg:w-auto snap-center bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
              >
                <Quote className="w-8 h-8 text-[#0ABAB5]/30" />
                <p className="text-[15px] text-[#4B5563] leading-[1.7] mt-5 italic">
                  &ldquo;{expert.quote}&rdquo;
                </p>

                {/* Stat highlight */}
                <div className="mt-6 pt-6 border-t border-[#E5E7EB]/60">
                  <p
                    className="text-[36px] font-bold leading-none tracking-[-0.02em]"
                    style={{ color: '#C9A96E' }}
                  >
                    {expert.stat}
                  </p>
                  <p className="text-xs text-[#4B5563] mt-1 uppercase tracking-[0.1em]">
                    {expert.statLabel}
                  </p>
                </div>

                {/* Expert name */}
                <div className="mt-6 pt-6 border-t border-[#E5E7EB]/60">
                  <p className="text-sm font-semibold text-[#111827]">{expert.name}</p>
                  <p className="text-xs text-[#4B5563] mt-0.5">{expert.title}</p>
                  <p className="text-xs text-[#9CA3AF] mt-0.5">{expert.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
