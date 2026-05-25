import { useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';

const medicalGradeFeatures = [
  'FDA Class 2 Medical Device classification',
  'Clinically validated wavelengths (630\u2013850nm)',
  'Therapeutic light intensity (>100mW/cm\u00B2)',
  'Patent-protected technology',
  'Safety-tested for home use',
  'Backed by thousands of peer-reviewed studies',
  'Used in clinical and professional settings',
];

const consumerGradeFeatures = [
  'No medical classification',
  'Often uses generic, ineffective wavelengths',
  'Insufficient light intensity for therapeutic effect',
  'No clinical validation',
  'Unregulated safety standards',
  'Marketed with misleading claims',
  'Often disappoints users',
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
      htmlEl.style.transform = 'translateY(30px)';
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
    <section ref={sectionRef} id="quality" className="bg-white relative overflow-hidden" style={{ padding: '100px 0' }}>
      {/* Subtle glow orb */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: '30vw',
            height: '30vw',
            background: 'radial-gradient(circle, rgba(10,186,181,0.03) 0%, transparent 70%)',
            filter: 'blur(80px)',
            top: '25%',
            left: '10%',
          }}
        />
      </div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="reveal flex items-center justify-center gap-2">
            <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
              DEVICE QUALITY
            </span>
          </div>
          <h2 className="reveal font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 400 }}>
            Medical Grade vs. Consumer Grade
          </h2>
          <p className="reveal text-[17px] text-[#4B5563] leading-[1.65] max-w-[640px] mx-auto mt-5">
            Not all LED devices are created equal. Here's what separates medical-grade from consumer-grade.
          </p>
          <div className="reveal flex items-center justify-center gap-4 mt-6">
            <img src="/badges/fda-cleared.png" alt="FDA Cleared" className="h-12 w-auto opacity-80" />
            <img src="/badges/patented-approved.png" alt="Patented" className="h-12 w-auto opacity-80" />
            <img src="/badges/clinically-tested.png" alt="Clinically Tested" className="h-12 w-auto opacity-80" />
            <img src="/badges/dermatologist-recommended.png" alt="Dermatologist Recommended" className="h-12 w-auto opacity-80" />
          </div>
        </div>

        {/* Comparison Columns - Mobile: horizontal scroll */}
        <div className="reveal flex md:grid md:grid-cols-2 gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 px-5 md:px-0 scrollbar-hide">
          {/* Medical Grade Column */}
          <div className="flex-shrink-0 w-[300px] md:w-auto snap-center bg-[#FAFAFA] rounded-3xl p-6 sm:p-8 border-l-[4px] border-[#0ABAB5] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#0ABAB5]/10 flex items-center justify-center">
                <Check className="w-5 h-5 text-[#0ABAB5]" />
              </div>
              <h3 className="text-xl font-semibold text-[#111827]">Medical Grade</h3>
            </div>
            <ul className="space-y-0">
              {medicalGradeFeatures.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 py-3 border-b border-[#E5E7EB] last:border-0"
                >
                  <Check className="w-5 h-5 text-[#0ABAB5] flex-shrink-0 mt-0.5" />
                  <span className="text-[15px] text-[#374151] leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Consumer/Toy Grade Column */}
          <div className="flex-shrink-0 w-[300px] md:w-auto snap-center bg-white rounded-3xl p-6 sm:p-8 border border-[#E5E7EB] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#9CA3AF]/10 flex items-center justify-center">
                <X className="w-5 h-5 text-[#9CA3AF]" />
              </div>
              <h3 className="text-xl font-semibold text-[#6B7280]">Consumer / Toy Grade</h3>
            </div>
            <ul className="space-y-0">
              {consumerGradeFeatures.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 py-3 border-b border-[#E5E7EB] last:border-0"
                >
                  <X className="w-5 h-5 text-[#9CA3AF] flex-shrink-0 mt-0.5" />
                  <span className="text-[15px] text-[#6B7280] leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Zero Lines Philosophy Callout */}
        <div className="reveal mt-10 bg-[#0ABAB5]/5 rounded-2xl p-6 sm:p-8 border border-[#0ABAB5]/20 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-2 mb-3">
            <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
              THE ZERO LINES DIFFERENCE
            </span>
          </div>
          <p className="text-[17px] text-[#374151] leading-[1.65]">
            Zero Lines devices are FDA Class 2 Medical Devices — the only medically graded LED therapy systems patented specifically for home use. When it comes to your health and skin, the difference matters.
          </p>
        </div>
      </div>
    </section>
  );
}
