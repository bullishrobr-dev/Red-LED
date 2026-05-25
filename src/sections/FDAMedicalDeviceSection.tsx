import { useEffect, useRef } from 'react';
import { Shield, FileCheck, Stethoscope } from 'lucide-react';

export default function FDAMedicalDeviceSection() {
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
    <section ref={sectionRef} id="fda" className="bg-white section-padding">
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        {/* Label */}
        <div className="reveal flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5]" />
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
            OFFICIALLY RECOGNIZED
          </span>
        </div>

        {/* Headline */}
        <h2 className="reveal text-center text-[36px] sm:text-[42px] lg:text-[48px] font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4">
          FDA Class 2 Medical Device
        </h2>

        {/* Intro Text - No specific code */}
        <p className="reveal text-center text-[17px] text-[#4B5563] leading-[1.65] mt-6 max-w-[720px] mx-auto">
          Zero Lines devices are officially classified as FDA Class 2 Medical Devices — reviewed for safety and efficacy.
        </p>

        {/* Certification Badges Row */}
        <div className="reveal flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-8">
          <img src="/badges/fda-cleared.png" alt="FDA Cleared" className="h-20 w-auto" />
          <img src="/badges/patented-approved.png" alt="Patented" className="h-16 w-auto" />
          <img src="/badges/clinically-tested.png" alt="Clinically Tested" className="h-16 w-auto" />
          <img src="/badges/ukas-quality.png" alt="UKAS Quality" className="h-16 w-auto" />
        </div>

        {/* Feature Cards - Mobile: horizontal scroll */}
        <div className="reveal mt-14">
          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 px-5 md:px-0 scrollbar-hide">
            <div className="flex-shrink-0 w-[280px] md:w-auto snap-center text-center p-8 sm:p-10 bg-[#FAFAFA] rounded-3xl border border-[#E5E7EB]/60">
              <div className="w-14 h-14 rounded-2xl bg-[#0ABAB5]/10 flex items-center justify-center mx-auto">
                <Shield className="w-7 h-7 text-[#0ABAB5]" />
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mt-6">Safety Verified</h3>
              <p className="text-[15px] text-[#4B5563] leading-relaxed mt-3">
                Rigorous safety testing at therapeutic intensity
              </p>
            </div>
            <div className="flex-shrink-0 w-[280px] md:w-auto snap-center text-center p-8 sm:p-10 bg-[#FAFAFA] rounded-3xl border border-[#E5E7EB]/60">
              <div className="w-14 h-14 rounded-2xl bg-[#0ABAB5]/10 flex items-center justify-center mx-auto">
                <FileCheck className="w-7 h-7 text-[#0ABAB5]" />
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mt-6">Proven Efficacy</h3>
              <p className="text-[15px] text-[#4B5563] leading-relaxed mt-3">
                Documented clinical evidence required
              </p>
            </div>
            <div className="flex-shrink-0 w-[280px] md:w-auto snap-center text-center p-8 sm:p-10 bg-[#FAFAFA] rounded-3xl border border-[#E5E7EB]/60">
              <div className="w-14 h-14 rounded-2xl bg-[#0ABAB5]/10 flex items-center justify-center mx-auto">
                <Stethoscope className="w-7 h-7 text-[#0ABAB5]" />
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mt-6">Medical-Grade Quality</h3>
              <p className="text-[15px] text-[#4B5563] leading-relaxed mt-3">
                Consistent wavelength output guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
