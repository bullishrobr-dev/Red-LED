import { useEffect, useRef } from 'react';
import { Camera } from 'lucide-react';

export default function BeforeAfterSection() {
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
    <section ref={sectionRef} id="before-after" className="bg-white" style={{ padding: '100px 0' }}>
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        {/* Label */}
        <div className="reveal flex items-center justify-center gap-2">
          <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
            REAL RESULTS
          </span>
        </div>

        {/* Headline */}
        <h2 className="reveal text-center font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4" style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 400 }}>
          See the Transformation
        </h2>

        {/* Subheadline */}
        <p className="reveal text-center text-[17px] text-[#4B5563] leading-[1.65] max-w-[720px] mx-auto mt-6">
          Consistent LED therapy helps achieve visible improvements. Results may vary.
        </p>

        {/* 2x2 Grid of Before/After Cards - Mobile: horizontal scroll */}
        <div className="reveal mt-12">
          <div className="flex md:grid md:grid-cols-2 gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 px-5 md:px-0 scrollbar-hide">
            {/* Card 1: Wrinkle Reduction */}
            <div className="flex-shrink-0 w-[300px] md:w-auto snap-center bg-[#FAFAFA] rounded-3xl border border-[#E5E7EB]/60 p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <div className="h-[200px] bg-[#F3F4F6] rounded-2xl flex items-center justify-center">
                <Camera className="w-10 h-10 text-[#9CA3AF]" strokeWidth={1.5} />
              </div>
              <div className="flex items-center justify-center gap-6 mt-5">
                <span className="text-sm font-semibold text-[#111827]">Before</span>
                <span className="w-6 h-px bg-[#E5E7EB]" />
                <span className="text-sm font-semibold text-[#0ABAB5]">After</span>
              </div>
              <p className="text-center text-base font-semibold text-[#111827] mt-4">Wrinkle Reduction</p>
              <p className="text-center text-sm text-[#4B5563] mt-1">Forehead lines and crow&apos;s feet</p>
              <p className="text-center text-xs text-[#9CA3AF] mt-3">Results after 12 weeks of treatment</p>
            </div>

            {/* Card 2: Skin Tone & Texture */}
            <div className="flex-shrink-0 w-[300px] md:w-auto snap-center bg-[#FAFAFA] rounded-3xl border border-[#E5E7EB]/60 p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <div className="h-[200px] bg-[#F3F4F6] rounded-2xl flex items-center justify-center">
                <Camera className="w-10 h-10 text-[#9CA3AF]" strokeWidth={1.5} />
              </div>
              <div className="flex items-center justify-center gap-6 mt-5">
                <span className="text-sm font-semibold text-[#111827]">Before</span>
                <span className="w-6 h-px bg-[#E5E7EB]" />
                <span className="text-sm font-semibold text-[#0ABAB5]">After</span>
              </div>
              <p className="text-center text-base font-semibold text-[#111827] mt-4">Skin Tone &amp; Texture</p>
              <p className="text-center text-sm text-[#4B5563] mt-1">Even skin tone and smoother texture</p>
              <p className="text-center text-xs text-[#9CA3AF] mt-3">Results after 8 weeks of treatment</p>
            </div>

            {/* Card 3: Acne Improvement */}
            <div className="flex-shrink-0 w-[300px] md:w-auto snap-center bg-[#FAFAFA] rounded-3xl border border-[#E5E7EB]/60 p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <div className="h-[200px] bg-[#F3F4F6] rounded-2xl flex items-center justify-center">
                <Camera className="w-10 h-10 text-[#9CA3AF]" strokeWidth={1.5} />
              </div>
              <div className="flex items-center justify-center gap-6 mt-5">
                <span className="text-sm font-semibold text-[#111827]">Before</span>
                <span className="w-6 h-px bg-[#E5E7EB]" />
                <span className="text-sm font-semibold text-[#0ABAB5]">After</span>
              </div>
              <p className="text-center text-base font-semibold text-[#111827] mt-4">Acne Improvement</p>
              <p className="text-center text-sm text-[#4B5563] mt-1">Reduced inflammation and clearer skin</p>
              <p className="text-center text-xs text-[#9CA3AF] mt-3">Results after 10 weeks of treatment</p>
            </div>

            {/* Card 4: Overall Rejuvenation */}
            <div className="flex-shrink-0 w-[300px] md:w-auto snap-center bg-[#FAFAFA] rounded-3xl border border-[#E5E7EB]/60 p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
              <div className="h-[200px] bg-[#F3F4F6] rounded-2xl flex items-center justify-center">
                <Camera className="w-10 h-10 text-[#9CA3AF]" strokeWidth={1.5} />
              </div>
              <div className="flex items-center justify-center gap-6 mt-5">
                <span className="text-sm font-semibold text-[#111827]">Before</span>
                <span className="w-6 h-px bg-[#E5E7EB]" />
                <span className="text-sm font-semibold text-[#0ABAB5]">After</span>
              </div>
              <p className="text-center text-base font-semibold text-[#111827] mt-4">Overall Rejuvenation</p>
              <p className="text-center text-sm text-[#4B5563] mt-1">Firmer, more youthful appearance</p>
              <p className="text-center text-xs text-[#9CA3AF] mt-3">Results after 16 weeks of treatment</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="reveal text-center text-sm text-[#9CA3AF] leading-relaxed max-w-[720px] mx-auto mt-10">
          Individual results may vary. Most users notice improvements from the very first session,
          with peak results appearing after 8-12 weeks of regular treatment.
        </p>
      </div>
    </section>
  );
}
