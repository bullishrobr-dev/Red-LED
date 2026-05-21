import { useEffect, useRef } from 'react';

const statCards = [
  {
    stat: '2000s',
    label: 'NASA Research Era',
    detail: 'Pioneering LED wound healing studies in space',
  },
  {
    stat: '12,000+',
    label: 'Peer-Reviewed Studies',
    detail: "Building on NASA's foundational research",
  },
  {
    stat: '70+',
    label: 'Years of Research History',
    detail: 'Of continuous photobiomodulation science',
  },
];

export default function NASASection() {
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
    <section ref={sectionRef} className="bg-[#FAFAFA] section-padding">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="reveal flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5]" />
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
              RESEARCH HISTORY
            </span>
          </div>
          <h2 className="reveal text-[36px] sm:text-[42px] lg:text-[48px] font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4">
            From Space to Your Skin — NASA Research
          </h2>
          <p className="reveal text-[17px] text-[#4B5563] leading-[1.65] max-w-[720px] mx-auto mt-5">
            In the early 2000s, NASA conducted groundbreaking research on red and near-infrared LED light for wound healing in space. Their studies demonstrated that specific wavelengths of light could significantly accelerate tissue repair and cell growth in microgravity environments — research that laid the foundation for modern LED light therapy devices used in clinics and medical spas worldwide today.
          </p>
        </div>

        {/* Stat Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mt-14">
          {statCards.map((card, i) => (
            <div
              key={i}
              className="reveal text-center p-8 sm:p-10 bg-white rounded-3xl border border-[#E5E7EB]/60"
            >
              <p className="text-[40px] sm:text-[48px] font-bold text-black leading-none tracking-[-0.02em]">
                {card.stat}
              </p>
              <p className="text-base font-semibold text-[#111827] mt-4">{card.label}</p>
              <p className="text-sm text-[#4B5563] mt-2 leading-relaxed">{card.detail}</p>
            </div>
          ))}
        </div>

        {/* Research Note */}
        <div className="reveal mt-10 bg-white rounded-2xl p-6 sm:p-8 border-l-[3px] border-[#0ABAB5]">
          <p className="text-[15px] text-[#374151] leading-relaxed">
            NASA&apos;s research on LED light therapy has been published in multiple peer-reviewed journals and forms the scientific basis for today&apos;s Class 2 Medical Device LED systems.
          </p>
        </div>
      </div>
    </section>
  );
}
