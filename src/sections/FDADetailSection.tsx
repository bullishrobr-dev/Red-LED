import { useEffect, useRef } from 'react';
import { Shield, FileCheck, Stethoscope, Check } from 'lucide-react';

const requirements = [
  'Rigorous safety testing and performance validation',
  'Documented clinical evidence supporting intended use',
  'Stringent manufacturing and quality control standards',
  'Consistent therapeutic wavelength output',
  'Verified light intensity at therapeutic levels',
  'Long-term reliability and device safety',
];

export default function FDADetailSection() {
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
      id="fda-detail"
      className="bg-[#FAFAFA] relative overflow-hidden"
      style={{ padding: '100px 0' }}
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        {/* Label */}
        <div className="reveal flex items-center gap-2">
          <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
            FDA MEDICAL DEVICE
          </span>
        </div>

        {/* Headline */}
        <h2
          className="reveal text-black leading-[1.1] tracking-[-0.02em] mt-5"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 400 }}
        >
          What Class 2 Really Means
        </h2>
        <p className="reveal text-[17px] text-[#4B5563] leading-[1.65] mt-5 max-w-[640px]">
          Zero Lines devices are officially classified as FDA Class 2 Medical Devices. This is not a
          marketing label — it is a rigorous regulatory classification that requires documented clinical
          evidence, safety testing, and compliance with strict manufacturing standards.
        </p>

        {/* Feature cards - horizontal scroll on mobile */}
        <div className="reveal mt-12">
          <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 px-5 md:px-0 scrollbar-hide">
            <div className="flex-shrink-0 w-[85vw] max-w-[320px] md:w-auto md:max-w-none snap-center bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <div className="w-14 h-14 rounded-2xl bg-[#0ABAB5]/10 flex items-center justify-center">
                <Shield className="w-7 h-7 text-[#0ABAB5]" />
              </div>
              <h3 className="text-xl font-semibold text-[#111827] mt-6">Safety Verified</h3>
              <p className="text-[15px] text-[#4B5563] leading-relaxed mt-4">
                Class 2 devices undergo rigorous safety testing at therapeutic intensity levels — not too weak, not too strong.
              </p>
            </div>
            <div className="flex-shrink-0 w-[85vw] max-w-[320px] md:w-auto md:max-w-none snap-center bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <div className="w-14 h-14 rounded-2xl bg-[#0ABAB5]/10 flex items-center justify-center">
                <FileCheck className="w-7 h-7 text-[#0ABAB5]" />
              </div>
              <h3 className="text-xl font-semibold text-[#111827] mt-6">Proven Efficacy</h3>
              <p className="text-[15px] text-[#4B5563] leading-relaxed mt-4">
                Documented clinical evidence required — peer-reviewed studies on skin, pain relief, and tissue recovery.
              </p>
            </div>
            <div className="flex-shrink-0 w-[85vw] max-w-[320px] md:w-auto md:max-w-none snap-center bg-white rounded-3xl p-8 sm:p-10 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <div className="w-14 h-14 rounded-2xl bg-[#0ABAB5]/10 flex items-center justify-center">
                <Stethoscope className="w-7 h-7 text-[#0ABAB5]" />
              </div>
              <h3 className="text-xl font-semibold text-[#111827] mt-6">Medical-Grade Quality</h3>
              <p className="text-[15px] text-[#4B5563] leading-relaxed mt-4">
                Consistent wavelength output guaranteed — unlike unregulated consumer gadgets.
              </p>
            </div>
          </div>
        </div>

        {/* Requirements checklist */}
        <div className="reveal mt-10 bg-white rounded-2xl p-8 sm:p-10 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <p className="text-[32px] font-bold leading-none tracking-[-0.02em]" style={{ color: '#C9A96E' }}>Class 2</p>
              <p className="text-base font-semibold text-[#111827] mt-3">Medical Device Classification</p>
              <p className="text-[15px] text-[#4B5563] leading-relaxed mt-3">
                To earn Class 2 status, a device must meet all of these requirements. Zero Lines checks every box.
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-4 mt-6">
                <img src="./badges/fda-cleared.png" alt="FDA Cleared" className="h-14 sm:h-16 w-auto" />
                <img src="./badges/patented-approved.png" alt="Patented" className="h-11 sm:h-12 w-auto opacity-70" />
                <img src="./badges/clinically-tested.png" alt="Clinically Tested" className="h-11 sm:h-12 w-auto opacity-70" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <ul className="space-y-3">
                {requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0ABAB5] mt-0.5 flex-shrink-0" />
                    <span className="text-[15px] text-[#374151] leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
