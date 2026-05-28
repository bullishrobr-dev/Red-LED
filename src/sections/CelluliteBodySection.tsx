import { useEffect, useRef } from 'react';
import { Grid3X3, Heart, Check, Layers, ArrowUpRight, Activity } from 'lucide-react';

const celluliteBullets = [
  'Helps stimulate collagen to smooth dimpled skin',
  'Supports skin structure on thighs, hips, and buttocks',
];

const circulationBullets = [
  'Improves blood circulation in the legs',
  'May reduce heaviness and swelling',
];

const stats = [
  {
    icon: Layers,
    stat: 'Full Body',
    label: 'Treatment Areas',
    detail: 'Arms, abdomen, thighs, hips, and legs',
    isGold: false,
  },
  {
    icon: ArrowUpRight,
    stat: '300%',
    label: 'Collagen Boost',
    detail: 'Dramatic increase throughout the entire body',
    isGold: true,
  },
  {
    icon: Activity,
    stat: '95%',
    label: 'Circulation Improvement',
    detail: 'Enhanced blood flow where it matters most',
    isGold: true,
  },
];

export default function CelluliteBodySection() {
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
    <section ref={sectionRef} id="cellulite" className="bg-white" style={{ padding: '100px 0' }}>
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="text-center">
          <div className="reveal flex items-center justify-center gap-2">
            <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
              BODY BENEFITS
            </span>
          </div>
          <h2 className="reveal font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 400 }}>
            Beyond the Face — Body &amp; Cellulite
          </h2>
          <p className="reveal text-[17px] text-[#4B5563] leading-[1.65] max-w-[720px] mx-auto mt-5">
            The same collagen-stimulating and circulation-boosting benefits work across your entire body.
          </p>
        </div>

        {/* Two Column Feature Areas - Mobile: horizontal scroll */}
        <div className="reveal mt-14">
          <div className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 px-5 md:px-0 scrollbar-hide">
            {/* Cellulite Column */}
            <div className="flex-shrink-0 w-[300px] md:w-auto snap-center bg-[#FAFAFA] rounded-3xl p-8 sm:p-10 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0ABAB5]/10 flex items-center justify-center">
                  <Grid3X3 className="w-5 h-5 text-[#0ABAB5]" />
                </div>
                <h3 className="text-lg font-semibold text-[#111827]">Cellulite Improvement</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {celluliteBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#0ABAB5] mt-0.5 flex-shrink-0" />
                    <span className="text-[15px] text-[#374151] leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Circulation Column */}
            <div className="flex-shrink-0 w-[300px] md:w-auto snap-center bg-[#FAFAFA] rounded-3xl p-8 sm:p-10 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0ABAB5]/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[#0ABAB5]" />
                </div>
                <h3 className="text-lg font-semibold text-[#111827]">Circulation &amp; Leg Health</h3>
              </div>
              <ul className="mt-6 space-y-3">
                {circulationBullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[#0ABAB5] mt-0.5 flex-shrink-0" />
                    <span className="text-[15px] text-[#374151] leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Row - Mobile: horizontal scroll */}
        <div className="reveal mt-14">
          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 px-5 md:px-0 scrollbar-hide">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="flex-shrink-0 w-[280px] md:w-auto snap-center text-center p-8 sm:p-10 bg-[#FAFAFA] rounded-3xl border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0ABAB5]/10 flex items-center justify-center mx-auto">
                    <Icon className="w-5 h-5 text-[#0ABAB5]" />
                  </div>
                  <p
                    className="text-[24px] sm:text-[28px] font-bold leading-none tracking-[-0.02em] mt-4"
                    style={{ color: stat.isGold ? '#C9A96E' : '#000000' }}
                  >
                    {stat.stat}
                  </p>
                  <p className="text-sm font-semibold text-[#111827] mt-3">{stat.label}</p>
                  <p className="text-xs text-[#4B5563] mt-2 leading-relaxed">{stat.detail}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Body Treatment Areas Diagram */}
        <div className="reveal mt-14">
          <div className="bg-[#FAFAFA] rounded-3xl p-6 sm:p-10 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
                FULL BODY TREATMENT MAP
              </span>
            </div>
            <img
              src="./body-pain-diagram.png"
              alt="Body treatment areas — arms, abdomen, thighs, hips, legs"
              className="w-full h-auto rounded-2xl"
            />
            <p className="text-sm text-[#4B5563] italic mt-4 text-center leading-relaxed">
              Use across your entire body — arms, abdomen, thighs, hips, and legs for comprehensive results.
            </p>
          </div>
        </div>

        {/* Bottom Callout - Inflated */}
        <div className="reveal mt-14 bg-[#FAFAFA] rounded-2xl p-6 sm:p-8 border-l-[3px] border-[#0ABAB5] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
          <p className="text-base font-medium text-[#111827] leading-relaxed">
            Use for 10-20 minutes per area. Most users notice visible improvements from the very first session.
          </p>
        </div>
      </div>
    </section>
  );
}
