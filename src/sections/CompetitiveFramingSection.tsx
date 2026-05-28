import { useEffect, useRef } from 'react';
import { Clock, DollarSign, FlaskConical, Shield } from 'lucide-react';

const differences = [
  {
    icon: FlaskConical,
    title: 'Clinically Proven Wavelengths',
    body: 'Dual-wave precision at 630nm (red) and 850nm (near-infrared) — the exact wavelengths with the strongest clinical evidence across 10,000+ peer-reviewed studies.',
  },
  {
    icon: Shield,
    title: 'FDA Class 2 Medical Device',
    body: 'Regulated under 21 CFR 878.4810 with documented safety and efficacy data. The same classification as professional clinic equipment.',
  },
  {
    icon: DollarSign,
    title: 'Clinic-Grade at Home',
    body: 'Professional LED panels cost clinics $15,000–$30,000. Zero Lines delivers the same wavelengths and intensity at a fraction of the investment.',
  },
  {
    icon: Clock,
    title: '60+ Years of Research',
    body: 'From NASA experiments in the 1990s to today\'s dermatology protocols — LED therapy is one of the most researched technologies in modern medicine.',
  },
];

export default function CompetitiveFramingSection() {
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
      id="difference"
      className="bg-[#F7F5F2]"
      style={{ padding: '100px 0' }}
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        {/* Label */}
        <div className="reveal flex items-center justify-center gap-2 mb-4">
          <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">THE ZERO LINES DIFFERENCE</span>
        </div>

        {/* Headline */}
        <h2
          className="reveal text-center text-black leading-[1.1] tracking-[-0.02em] mt-5"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 400 }}
        >
          Why Zero Lines Stands Apart
        </h2>
        <p className="reveal text-center text-[17px] text-[#4B5563] leading-[1.65] mt-5 max-w-[640px] mx-auto">
          Not all LED therapy is created equal. Here is what separates clinic-grade science from consumer-grade marketing.
        </p>

        {/* Difference Cards */}
        <div className="reveal mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {differences.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)]"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#0ABAB5]/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[#0ABAB5]" />
                </div>
                <h3 className="text-lg font-semibold text-[#111827] mt-5">{item.title}</h3>
                <p className="text-[15px] text-[#4B5563] leading-relaxed mt-3">{item.body}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div className="reveal mt-12 bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)] text-center">
          <p className="text-[15px] text-[#4B5563] leading-relaxed max-w-[640px] mx-auto">
            The difference is in the science. Zero Lines is built on the same clinical research,
            wavelengths, and protocols trusted by dermatologists, professional sports teams,
            and medical spas worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}
