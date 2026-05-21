import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';

const bulletPoints = [
  'Tightens loose skin on arms, abdomen, and thighs',
  'Improves body contours by stimulating collagen throughout',
  'Reduces cellulite appearance through enhanced circulation',
  'Smooths stretch marks by promoting tissue regeneration',
  'Non-invasive alternative to surgical body procedures',
];

export default function BodySection() {
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
          observer.unobserve(section);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="body" className="bg-white section-padding">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="reveal flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5]" />
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
              BODY SCIENCE
            </span>
          </div>
          <h2 className="reveal text-[36px] sm:text-[42px] lg:text-[48px] font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4">
            Beyond the Face — Body Contouring &amp; Skin Tightening
          </h2>
          <p className="reveal text-[17px] text-[#4B5563] leading-[1.65] max-w-[720px] mx-auto mt-5">
            Red and Near-Infrared LED therapy isn&apos;t just for facial rejuvenation. The same mechanisms that stimulate collagen in the face work across the entire body — tightening loose skin, improving body contours, and reducing the appearance of cellulite by enhancing circulation and cellular metabolism.
          </p>
        </div>

        {/* Bullet Points */}
        <div className="reveal mt-12 bg-[#FAFAFA] rounded-2xl p-8 sm:p-10">
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {bulletPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#0ABAB5] mt-1 flex-shrink-0" />
                <span className="text-[15px] text-[#374151] leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Device Image */}
        <div className="reveal mt-12 text-center">
          <img
            src="/clinical-device.png"
            alt="Full-body LED therapy panel for body contouring"
            className="w-full max-w-[600px] mx-auto h-auto rounded-3xl shadow-lg"
          />
          <p className="text-sm text-[#4B5563] mt-4">
            Full-body LED panels deliver precise wavelengths at therapeutic intensities for comprehensive body treatments.
          </p>
        </div>
      </div>
    </section>
  );
}
