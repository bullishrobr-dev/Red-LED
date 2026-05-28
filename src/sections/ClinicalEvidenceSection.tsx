import { useEffect, useRef } from 'react';
import { FlaskConical, TrendingUp, Heart, Shield, Zap, Clock } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '31%',
    label: 'Increase in Collagen Density',
    detail: 'After 8–12 weeks of consistent use. Wunsch & Matuschka 2014, 136 volunteers.',
  },
  {
    icon: Heart,
    value: '97.4%',
    label: 'Patient Satisfaction Rate',
    detail: 'For visible skin improvements across multiple clinical trials.',
  },
  {
    icon: FlaskConical,
    value: '10,000+',
    label: 'Peer-Reviewed Studies',
    detail: 'Published since 1967 — over 60 years of continuous research.',
  },
  {
    icon: Shield,
    value: '81%',
    label: 'Wrinkle Improvement',
    detail: 'Of patients reported visible wrinkle reduction. Goldberg & Russell 2006.',
  },
  {
    icon: Zap,
    value: '200%',
    label: 'ATP Production Boost',
    detail: 'Cellular energy increase via Cytochrome c Oxidase activation.',
  },
  {
    icon: Clock,
    value: '30%',
    label: 'Microcirculation Increase',
    detail: 'Boost in blood flow within 20 minutes of treatment.',
  },
];

export default function ClinicalEvidenceSection() {
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
      id="clinical-evidence"
      className="bg-[#F7F5F2]"
      style={{ padding: '100px 0' }}
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        {/* Label */}
        <div className="reveal flex items-center justify-center gap-2">
          <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
            Clinical Evidence
          </span>
          <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
        </div>

        {/* Headline */}
        <h2
          className="reveal text-center text-black leading-[1.1] tracking-[-0.02em] mt-5"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 400 }}
        >
          Backed by Decades of Research
        </h2>
        <p className="reveal text-center text-[17px] text-[#4B5563] leading-[1.65] mt-5 max-w-[640px] mx-auto">
          LED light therapy isn&apos;t a trend — it&apos;s a clinically validated technology with thousands of peer-reviewed studies supporting its effectiveness for skin rejuvenation and pain relief.
        </p>

        {/* Stats Grid */}
        <div className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0ABAB5]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[#0ABAB5]" />
                  </div>
                  <p
                    className="text-[32px] leading-none tracking-[-0.02em]"
                    style={{ color: '#C9A96E', fontWeight: 400 }}
                  >
                    {stat.value}
                  </p>
                </div>
                <p className="text-[15px] font-semibold text-[#111827] mt-4 leading-snug">
                  {stat.label}
                </p>
                <p className="text-[13px] text-[#4B5563] leading-relaxed mt-2">
                  {stat.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <p className="reveal text-center text-[12px] text-[#4B5563] leading-relaxed mt-10 max-w-[680px] mx-auto">
          Individual results may vary. These statistics are aggregated from published clinical studies and do not guarantee specific outcomes. Consult a healthcare professional for personalized advice.
        </p>
      </div>
    </section>
  );
}
