import { useEffect, useRef } from 'react';
import { Sparkles, ArrowDownFromLine, Sun, Palette, Calendar, Clock, RefreshCw } from 'lucide-react';

const featureCards = [
  {
    icon: Sparkles,
    title: 'Wrinkle Reduction',
    description:
      'Red light stimulates collagen for softer, smoother skin. Up to 300% collagen increase.',
    stat: 'Up to 300%',
    statLabel: 'Collagen Increase',
  },
  {
    icon: ArrowDownFromLine,
    title: 'Skin Lifting & Firming',
    description:
      'Activates fibroblasts to tighten sagging skin. Up to 95% see improvement.',
    stat: 'Up to 95%',
    statLabel: 'Users See Improvement',
  },
  {
    icon: Sun,
    title: 'Sunspot & Age Spot Fading',
    description:
      'Breaks down excess melanin to fade sunspots and age spots.',
    stat: 'Visible',
    statLabel: 'Spot Reduction',
  },
  {
    icon: Palette,
    title: 'Melanin Balancing',
    description:
      'Regulates melanin production for a more even, radiant complexion.',
    stat: 'Brighter',
    statLabel: 'Even Skin Tone',
  },
];

const protocolItems = [
  {
    icon: Calendar,
    title: '3x Per Week',
    description: 'For the first 4 weeks to kickstart collagen production',
  },
  {
    icon: Clock,
    title: '10-15 Minutes',
    description: 'Per session on clean, dry skin',
  },
  {
    icon: RefreshCw,
    title: '1x Per Week',
    description: 'Maintenance after the first month to preserve results',
  },
];

export default function ModernSkinSection() {
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
    <section ref={sectionRef} id="modern-skin" className="bg-[#FAFAFA]" style={{ padding: '100px 0' }}>
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="reveal flex items-center justify-center gap-2">
            <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
              MODERN SKIN APPLICATIONS
            </span>
          </div>
          <h2 className="reveal text-[36px] sm:text-[42px] lg:text-[48px] font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4">
            What Red &amp; Infrared LED Therapy Helps With Today
          </h2>
          <p className="reveal text-[17px] text-[#4B5563] leading-[1.65] max-w-[720px] mx-auto mt-5">
            Red and infrared LED therapy helps address a wide range of skin concerns — without surgery, chemicals, or downtime.
          </p>

          {/* Badge */}
          <div className="reveal flex items-center justify-center mt-6">
            <img src="./badges/dermatologist-recommended.png" alt="Dermatologist Recommended" className="h-16 w-auto" />
          </div>
        </div>

        {/* Feature Cards Grid - Mobile: horizontal scroll */}
        <div className="reveal mt-14">
          <div className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 px-5 md:px-0 scrollbar-hide">
            {featureCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="flex-shrink-0 w-[300px] md:w-auto snap-center bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0ABAB5]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#0ABAB5]" />
                    </div>
                    <h3 className="text-lg font-semibold text-[#111827]">{card.title}</h3>
                  </div>
                  <p className="text-[15px] text-[#4B5563] leading-relaxed mt-4">
                    {card.description}
                  </p>
                  <div className="mt-6 pt-6 border-t border-[#E5E7EB]/60">
                    <p className="text-[32px] font-bold leading-none tracking-[-0.02em]" style={{ color: '#C9A96E' }}>
                      {card.stat}
                    </p>
                    <p className="text-sm font-semibold text-[#0ABAB5] mt-2">{card.statLabel}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Face Treatment Areas Diagram */}
        <div className="reveal mt-14">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
                WHERE TO USE IT
              </span>
            </div>
            <img
              src="./face-antiaging-diagram.png"
              alt="Face treatment areas — forehead, cheeks, jawline, neck"
              className="w-full h-auto rounded-2xl"
            />
            <p className="text-sm text-[#4B5563] italic mt-4 text-center leading-relaxed">
              Target key facial areas — forehead wrinkles, crow&apos;s feet, cheeks, jawline, and neck.
            </p>
          </div>
        </div>

        {/* Protocol Reminder */}
        <div className="reveal mt-14 bg-white rounded-2xl p-8 sm:p-10 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
              RECOMMENDED PROTOCOL
            </span>
          </div>
          <h3 className="reveal text-xl font-semibold text-black text-center mb-8">
            For Best Skin Results
          </h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {protocolItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="bg-[#FAFAFA] rounded-2xl p-6 text-center shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                  <div className="w-10 h-10 rounded-xl bg-[#0ABAB5]/10 flex items-center justify-center mx-auto">
                    <Icon className="w-5 h-5 text-[#0ABAB5]" />
                  </div>
                  <p className="text-sm font-semibold text-[#111827] mt-4">{item.title}</p>
                  <p className="text-xs text-[#4B5563] mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
