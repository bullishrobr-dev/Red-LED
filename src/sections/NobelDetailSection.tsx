import { useEffect, useRef } from 'react';
import { Award, Zap, HeartPulse } from 'lucide-react';

export default function NobelDetailSection() {
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
      id="nobel-detail"
      className="bg-white relative overflow-hidden"
      style={{ padding: '100px 0' }}
    >
      <div className="max-w-[1100px] mx-auto px-5 sm:px-8">
        {/* Label */}
        <div className="reveal flex items-center gap-2">
          <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
            NOBEL PRIZE SCIENCE
          </span>
        </div>

        {/* Headline */}
        <h2
          className="reveal text-black leading-[1.1] tracking-[-0.02em] mt-5"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 400 }}
        >
          The Molecule That Heals
        </h2>
        <p className="reveal text-[17px] text-[#4B5563] leading-[1.65] mt-5 max-w-[640px]">
          In 1998, three scientists — Robert Furchgott, Louis Ignarro, and Ferid Murad — were awarded
          the Nobel Prize in Medicine for discovering that nitric oxide (NO) acts as a signaling
          molecule in the cardiovascular system. Their work revealed that this simple molecule controls
          blood flow, oxygen delivery, and cellular communication throughout the body.
        </p>

        {/* Connection cards - horizontal scroll on mobile */}
        <div className="reveal mt-12">
          <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 px-5 md:px-0 scrollbar-hide">
            <div className="flex-shrink-0 w-[85vw] max-w-[320px] md:w-auto md:max-w-none snap-center bg-[#FAFAFA] rounded-3xl p-8 sm:p-10 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <div className="w-14 h-14 rounded-2xl bg-[#0ABAB5]/10 flex items-center justify-center">
                <Award className="w-7 h-7 text-[#0ABAB5]" />
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mt-5">The Discovery</h3>
              <p className="text-[15px] text-[#4B5563] leading-relaxed mt-3">
                The 1998 Nobel Prize revealed nitric oxide is not just a gas — it is a powerful
                signaling molecule that tells blood vessels to relax and triggers the body&apos;s healing cascade.
              </p>
            </div>
            <div className="flex-shrink-0 w-[85vw] max-w-[320px] md:w-auto md:max-w-none snap-center bg-[#FAFAFA] rounded-3xl p-8 sm:p-10 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <div className="w-14 h-14 rounded-2xl bg-[#0ABAB5]/10 flex items-center justify-center">
                <Zap className="w-7 h-7 text-[#0ABAB5]" />
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mt-5">The Connection</h3>
              <p className="text-[15px] text-[#4B5563] leading-relaxed mt-3">
                LED light therapy triggers the exact same nitric oxide release mechanism the Nobel
                laureates discovered — improving circulation and reducing inflammation.
              </p>
            </div>
            <div className="flex-shrink-0 w-[85vw] max-w-[320px] md:w-auto md:max-w-none snap-center bg-[#FAFAFA] rounded-3xl p-8 sm:p-10 border border-[#E5E7EB]/60 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
              <div className="w-14 h-14 rounded-2xl bg-[#0ABAB5]/10 flex items-center justify-center">
                <HeartPulse className="w-7 h-7 text-[#0ABAB5]" />
              </div>
              <h3 className="text-lg font-semibold text-[#111827] mt-5">The Result</h3>
              <p className="text-[15px] text-[#4B5563] leading-relaxed mt-3">
                Every time you use LED therapy, you harness Nobel Prize-winning science. The nitric
                oxide released controls healing, circulation, and cellular regeneration.
              </p>
            </div>
          </div>
        </div>

        {/* Stat callout */}
        <div className="reveal mt-10 bg-[#FAFAFA] rounded-2xl p-8 border-l-[3px] border-[#0ABAB5]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div>
              <p className="text-[48px] font-bold leading-none tracking-[-0.02em]" style={{ color: '#C9A96E' }}>6,600+</p>
              <p className="text-sm text-[#4B5563] mt-2">Peer-reviewed studies building on the Nobel Prize-winning nitric oxide discovery</p>
            </div>
            <div className="sm:ml-auto flex items-center gap-3">
              <img src="/badges/nobel-medal.png" alt="Nobel Prize" className="h-14 w-auto" />
              <div>
                <p className="text-sm font-semibold text-[#111827]">1998 Nobel Prize</p>
                <p className="text-xs text-[#4B5563]">Furchgott, Ignarro & Murad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
