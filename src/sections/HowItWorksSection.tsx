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
    <section ref={sectionRef} className="bg-white section-padding relative overflow-hidden">
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
            <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5]" />
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
              THE MECHANISM
            </span>
          </div>
          <h2 className="reveal text-[36px] sm:text-[42px] lg:text-[48px] font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4">
            How Light Becomes Healing
          </h2>
          <p className="reveal text-[17px] text-[#4B5563] leading-[1.65] max-w-[720px] mx-auto mt-5">
            The process begins when red and near-infrared photons are absorbed by Cytochrome c Oxidase (CCO) — a key enzyme inside your cells&apos; mitochondria. This absorption releases inhibitory nitric oxide, which restores the cell&apos;s ability to produce energy. The result: a cascade of cellular repair, reduced inflammation, and renewed collagen production.
          </p>
        </div>

        {/* Skin Cross-Section */}
        <div className="reveal">
          <div className="bg-[#FAFAFA] rounded-[28px] p-6 sm:p-10 overflow-hidden">
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
        <div className="reveal mt-10 bg-[#FAFAFA] rounded-2xl p-6 border-l-[3px] border-[#0ABAB5]">
          <p className="text-base font-medium text-[#111827] leading-relaxed">
            ATP production increases by up to{' '}
            <span className="text-[#0ABAB5] font-bold">200%</span> — fueling the cellular repair processes that reverse skin aging and reduce chronic pain.
          </p>
        </div>

        {/* Body Activation Philosophy Callout */}
        <div className="reveal mt-8 bg-[#0ABAB5]/5 rounded-2xl p-8 border border-[#0ABAB5]/20">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
              THE ZERO LINES PHILOSOPHY
            </span>
          </div>
          <h3 className="text-xl font-semibold text-[#111827] mb-3">
            Activate Your Body. Let Nature Do the Rest.
          </h3>
          <p className="text-[15px] text-[#374151] leading-relaxed">
            At Zero Lines, we believe the most powerful solutions don't force change — they activate your body's own ability to heal. LED Light Therapy works by stimulating fibroblasts to produce collagen, energizing cells to repair damage, and triggering your natural anti-inflammatory response. It doesn't inject, doesn't cut, doesn't mask. It simply switches your body's repair systems back on — the same systems that kept your skin firm and your joints pain-free when you were young. Your body knows how to fix itself. We just give it the right light to remember.
          </p>
        </div>

        {/* Before/After Diagram */}
        <div className="reveal mt-12">
          <div className="bg-[#FAFAFA] rounded-[28px] p-6 sm:p-10 overflow-hidden">
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
