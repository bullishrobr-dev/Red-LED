import { useEffect, useRef } from 'react';

const wavelengths = [
  { nm: '630nm', color: '#FF4444', bg: 'bg-red-500', depth: '~1mm penetration — Epidermis — Surface skin renewal' },
  { nm: '660nm', color: '#E53935', bg: 'bg-red-600', depth: '~2–3mm penetration — Upper Dermis — Collagen stimulation' },
  { nm: '810nm', color: '#C62828', bg: 'bg-red-700', depth: '~2–3cm penetration — Deep Dermis — Tissue repair' },
  { nm: '830nm', color: '#B71C1C', bg: 'bg-red-800', depth: '~3–4cm penetration — Muscle & Joints — Pain relief' },
  { nm: '850nm', color: '#7F0000', bg: 'bg-[#7F0000]', depth: '~4–5cm penetration — Bone & Deep Tissue — Deep healing' },
];

export default function WavelengthSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('.reveal');
    elements.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = i < 3 ? 'translateY(30px)' : 'translateX(-30px)';
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
          observer.unobserve(section);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FAFAFA] section-padding">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
            WAVELENGTH SCIENCE
          </p>
          <h2 className="reveal text-[36px] sm:text-[42px] lg:text-[48px] font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4">
            The Right Light at the Right Depth
          </h2>
          <p className="reveal text-lg text-[#4B5563] max-w-[580px] mx-auto mt-3">
            Different wavelengths penetrate to different tissue depths. The most effective therapeutic range — known as the optical window — spans 600–1000nm.
          </p>
        </div>

        {/* Diagram Card */}
        <div className="reveal mt-12 bg-white rounded-[28px] p-6 sm:p-10 shadow-card">
          <img
            src="/wavelength-penetration.png"
            alt="Wavelength penetration depth diagram"
            className="w-full h-auto rounded-xl"
          />
          <p className="text-sm text-[#4B5563] mt-4 leading-relaxed">
            Penetration depth by wavelength. Red wavelengths (630–660nm) target surface skin. Near-infrared (810–850nm) reaches deep tissue, muscle, and bone.
          </p>
        </div>

        {/* Wavelength Breakdown Rows */}
        <div className="mt-12 space-y-0">
          {wavelengths.map((wl) => (
            <div
              key={wl.nm}
              className="reveal flex items-center gap-4 sm:gap-6 py-4 border-b border-[#E5E7EB] last:border-0"
            >
              {/* Color indicator bar */}
              <div
                className="w-1 h-10 rounded-full flex-shrink-0"
                style={{ backgroundColor: wl.color }}
              />
              {/* Wavelength label */}
              <span className="text-sm font-bold text-[#111827] w-14 flex-shrink-0">
                {wl.nm}
              </span>
              {/* Depth info */}
              <span className="text-[15px] text-[#111827] leading-relaxed">
                {wl.depth}
              </span>
            </div>
          ))}
        </div>

        {/* Optical Window Callout */}
        <div className="reveal text-center mt-10 max-w-[640px] mx-auto">
          <p className="text-base text-[#111827] italic leading-relaxed relative">
            <span className="text-[#0ABAB5] text-2xl leading-none absolute -left-4 -top-2">&ldquo;</span>
            The therapeutic window of 600–1000nm is where photobiomodulation achieves maximum tissue penetration with minimal energy absorption by water and hemoglobin — delivering the highest clinical efficacy.
            <span className="text-[#0ABAB5] text-2xl leading-none absolute -right-4 -bottom-4">&rdquo;</span>
          </p>
        </div>
      </div>
    </section>
  );
}
