import { useEffect, useRef } from 'react';

const beforeAfterSteps = [
  { num: '1', label: 'Before', desc: 'Reduced collagen, visible wrinkles' },
  { num: '2', label: 'Treatment', desc: 'LED light stimulates fibroblasts' },
  { num: '3', label: 'After', desc: 'Firmer, smoother, lifted skin' },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('.reveal');
    elements.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = i < 3 ? 'translateY(30px)' : 'translateY(30px)';
      htmlEl.style.transition = `opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.15}s, transform 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.15}s`;
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
    <section ref={sectionRef} id="how-it-works" className="bg-white relative overflow-hidden" style={{ padding: '120px 0' }}>
      {/* Subtle glow orb behind */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: '35vw',
            height: '35vw',
            background: 'radial-gradient(circle, rgba(10,186,181,0.02) 0%, transparent 70%)',
            filter: 'blur(80px)',
            top: '20%',
            right: '5%',
          }}
        />
      </div>

      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="reveal flex items-center justify-center gap-2">
            <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
              THE MECHANISM
            </span>
          </div>
          <h2
            className="reveal font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 400 }}
          >
            How Light Becomes Healing
          </h2>
          <p className="reveal text-[17px] text-[#4B5563] leading-[1.65] max-w-[720px] mx-auto mt-5">
            Red and near-infrared photons are absorbed by mitochondria, releasing nitric oxide and restoring cellular energy production — triggering repair, reducing inflammation, and boosting collagen.
          </p>

          {/* Badges - FDA + Clinically Tested */}
          <div className="reveal flex items-center justify-center gap-4 mt-6">
            <img src="/badges/fda-cleared.png" alt="FDA Cleared" className="h-14 w-auto opacity-80" />
            <img src="/badges/clinically-tested.png" alt="Clinically Tested" className="h-14 w-auto opacity-80" />
          </div>
        </div>

        {/* Skin Cross-Section */}
        <div className="reveal">
          <div className="bg-[#FAFAFA] rounded-[28px] p-6 sm:p-10 overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <img
              src="/skin-cross-section.png"
              alt="Skin cross-section showing light penetration"
              className="w-full h-auto rounded-xl"
            />
          </div>
          <p className="text-sm text-[#4B5563] italic mt-4 leading-relaxed text-center">
            Light penetration at different wavelengths — red light targets surface layers, near-infrared reaches deep tissue.
          </p>
        </div>

        {/* Key Callout Box */}
        <div className="reveal mt-10 bg-[#FAFAFA] rounded-2xl p-6 border-l-[3px] border-[#0ABAB5] shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
          <p className="text-base font-medium text-[#111827] leading-relaxed">
            ATP production increases by up to{' '}
            <span className="text-[#0ABAB5] font-bold">300%</span> — fueling the cellular repair processes that reverse skin aging and reduce chronic pain.
          </p>
        </div>

        {/* Body Activation Philosophy Callout */}
        <div className="reveal mt-8 bg-[#0ABAB5]/5 rounded-2xl p-8 border border-[#0ABAB5]/20 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
          <div className="flex items-center gap-2 mb-3">
            <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
              THE ZERO LINES PHILOSOPHY
            </span>
          </div>
          <h3 className="text-xl font-semibold text-[#111827] mb-3">
            Activate Your Body. Let Nature Do the Rest.
          </h3>
          <p className="text-[15px] text-[#374151] leading-relaxed">
            LED therapy activates your body&apos;s own healing systems — stimulating collagen, repairing damage, and triggering anti-inflammatory response. No injections, no chemicals, no downtime. Your body knows how to heal. We give it the right light.
          </p>
        </div>

        {/* Before/After Diagram */}
        <div className="reveal mt-12">
          <div className="bg-[#FAFAFA] rounded-[28px] p-6 sm:p-10 overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
            <img
              src="/skin-before-after.png"
              alt="Skin before and after LED treatment"
              className="w-full h-auto rounded-xl"
            />
          </div>
          {/* 3-step captions */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {beforeAfterSteps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div className="w-8 h-8 rounded-full bg-[#0ABAB5] flex items-center justify-center text-white text-sm font-semibold">
                  {step.num}
                </div>
                <p className="text-sm font-medium text-[#111827] mt-2">{step.label}</p>
                <p className="text-xs text-[#4B5563] mt-0.5">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
