import { useEffect, useRef } from 'react';
import { HeartPulse, Activity } from 'lucide-react';

export default function PainAndCancerSection() {
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
    <section ref={sectionRef} id="pain-cancer" className="bg-[#FAFAFA]" style={{ padding: '100px 0' }}>
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        {/* Label */}
        <div className="reveal flex items-center justify-center gap-2">
          <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
            THE ORIGINAL PURPOSE
          </span>
        </div>

        {/* Headline */}
        <h2 className="reveal text-center font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 400 }}>
          First Developed for Pain & Recovery
        </h2>

        {/* Intro Text */}
        <p className="reveal text-center text-[17px] text-[#4B5563] leading-[1.65] mt-6 max-w-[720px] mx-auto">
          LED therapy was first developed to help cancer patients recover from treatment side effects and to provide drug-free pain relief.
        </p>

        {/* Clinically Tested Badge */}
        <img
          src="/badges/clinically-tested.png"
          alt="Clinically Tested"
          className="reveal h-16 w-auto mx-auto mt-6"
        />

        {/* Two-Column Cards - Mobile: horizontal scroll */}
        <div className="reveal mt-14">
          <div className="flex md:grid md:grid-cols-2 gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 px-5 md:px-0 scrollbar-hide">
            {/* Left Card — Cancer Recovery Support */}
            <div className="flex-shrink-0 w-[300px] md:w-auto snap-center p-8 sm:p-10 bg-white rounded-3xl border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <div className="w-14 h-14 rounded-2xl bg-[#0ABAB5]/10 flex items-center justify-center">
                <HeartPulse className="w-7 h-7 text-[#0ABAB5]" />
              </div>
              <h3 className="text-xl font-semibold text-[#111827] mt-6">Cancer Recovery Support</h3>
              <ul className="mt-5 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5] mt-2 flex-shrink-0" />
                  <span className="text-[15px] text-[#4B5563] leading-relaxed">
                    Helps tissue recover from radiation side effects
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5] mt-2 flex-shrink-0" />
                  <span className="text-[15px] text-[#4B5563] leading-relaxed">
                    Supports natural healing during treatment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5] mt-2 flex-shrink-0" />
                  <span className="text-[15px] text-[#4B5563] leading-relaxed">
                    May improve quality of life for patients
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5] mt-2 flex-shrink-0" />
                  <span className="text-[15px] text-[#4B5563] leading-relaxed">
                    Non-invasive, use alongside conventional care
                  </span>
                </li>
              </ul>
              <p className="text-xs text-[#4B5563] mt-6 leading-relaxed italic border-t border-[#E5E7EB]/60 pt-4">
                Used as a complementary supportive therapy, not a cancer treatment
              </p>
            </div>

            {/* Right Card — Pain Relief */}
            <div className="flex-shrink-0 w-[300px] md:w-auto snap-center p-8 sm:p-10 bg-white rounded-3xl border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <div className="w-14 h-14 rounded-2xl bg-[#0ABAB5]/10 flex items-center justify-center">
                <Activity className="w-7 h-7 text-[#0ABAB5]" />
              </div>
              <h3 className="text-xl font-semibold text-[#111827] mt-6">Pain Relief</h3>
              <ul className="mt-5 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5] mt-2 flex-shrink-0" />
                  <span className="text-[15px] text-[#4B5563] leading-relaxed">
                    Up to 90% improvement in arthritis pain
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5] mt-2 flex-shrink-0" />
                  <span className="text-[15px] text-[#4B5563] leading-relaxed">
                    Eases back pain, stiffness, muscle soreness
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5] mt-2 flex-shrink-0" />
                  <span className="text-[15px] text-[#4B5563] leading-relaxed">
                    Reduces cellular inflammation by up to 95%
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5] mt-2 flex-shrink-0" />
                  <span className="text-[15px] text-[#4B5563] leading-relaxed">
                    Trusted by pro athletes and sports medicine
                  </span>
                </li>
              </ul>
              <p className="text-xs text-[#4B5563] mt-6 leading-relaxed italic border-t border-[#E5E7EB]/60 pt-4">
                Used by NFL, NBA teams and Olympic training facilities
              </p>
            </div>
          </div>
        </div>

        {/* Stats Row - Mobile: horizontal scroll */}
        <div className="reveal mt-10">
          <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 px-5 md:px-0 scrollbar-hide">
            <div className="flex-shrink-0 w-[280px] md:w-auto snap-center text-center p-8 sm:p-10 bg-white rounded-3xl border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <p className="text-[40px] sm:text-[48px] font-bold leading-none tracking-[-0.02em]" style={{ color: '#C9A96E' }}>90%</p>
              <p className="text-base font-semibold text-[#111827] mt-4">Arthritis Pain Improvement</p>
              <p className="text-sm text-[#4B5563] mt-2 leading-relaxed">Reported in clinical studies</p>
            </div>
            <div className="flex-shrink-0 w-[280px] md:w-auto snap-center text-center p-8 sm:p-10 bg-white rounded-3xl border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <p className="text-[40px] sm:text-[48px] font-bold leading-none tracking-[-0.02em]" style={{ color: '#C9A96E' }}>95%</p>
              <p className="text-base font-semibold text-[#111827] mt-4">Inflammation Reduction</p>
              <p className="text-sm text-[#4B5563] mt-2 leading-relaxed">In inflammatory cytokine markers</p>
            </div>
            <div className="flex-shrink-0 w-[280px] md:w-auto snap-center text-center p-8 sm:p-10 bg-white rounded-3xl border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <p className="text-[40px] sm:text-[48px] font-bold leading-none tracking-[-0.02em]" style={{ color: '#C9A96E' }}>80%</p>
              <p className="text-base font-semibold text-[#111827] mt-4">Faster Recovery</p>
              <p className="text-sm text-[#4B5563] mt-2 leading-relaxed">For professional athletes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
