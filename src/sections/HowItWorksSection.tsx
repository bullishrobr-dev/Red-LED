import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { num: '1', label: 'Light Absorbed', desc: 'CCO captures photons' },
  { num: '2', label: 'NO Released', desc: 'Nitric oxide inhibition removed' },
  { num: '3', label: 'ATP Surge', desc: 'Cellular energy increases up to 200%' },
];

export default function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);

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
          observer.unobserve(section);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // GSAP ScrollTrigger for before/after diagram
  useEffect(() => {
    const diagram = diagramRef.current;
    if (!diagram) return;

    gsap.set(diagram, { opacity: 0, y: 50 });

    const trigger = ScrollTrigger.create({
      trigger: diagram,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(diagram, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        });
      },
    });

    return () => {
      trigger.kill();
    };
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Diagram */}
          <div className="reveal">
            <div className="bg-[#FAFAFA] rounded-[28px] p-6 sm:p-10 overflow-hidden">
              <img
                src="/mitochondria-process.png"
                alt="Mitochondrial process of photobiomodulation"
                className="w-full h-auto rounded-xl"
              />
            </div>
            {/* 3-step captions */}
            <div className="grid grid-cols-3 gap-4 mt-6">
              {steps.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <div className="w-8 h-8 rounded-full bg-[#0ABAB5] flex items-center justify-center text-white text-sm font-semibold">
                    {step.num}
                  </div>
                  <p className="text-sm font-medium text-[#111827] mt-2">{step.label}</p>
                  <p className="text-xs text-[#6B7280] mt-0.5">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Text content */}
          <div className="flex flex-col justify-center">
            <p className="reveal text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
              THE MECHANISM
            </p>

            <h2 className="reveal text-[32px] sm:text-[38px] lg:text-[42px] font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4">
              How Light Becomes Healing
            </h2>

            <p className="reveal text-[17px] text-[#111827] leading-[1.65] mt-6">
              The process begins when red and near-infrared photons are absorbed by Cytochrome c Oxidase (CCO) — a key enzyme inside your cells&apos; mitochondria. This absorption releases inhibitory nitric oxide, which restores the cell&apos;s ability to produce energy. The result: a cascade of cellular repair, reduced inflammation, and renewed collagen production.
            </p>

            {/* Key Callout Box */}
            <div className="reveal mt-8 bg-[#FAFAFA] rounded-2xl p-6 border-l-[3px] border-[#0ABAB5]">
              <p className="text-base font-medium text-[#111827] leading-relaxed">
                ATP production increases by up to{' '}
                <span className="text-[#0ABAB5] font-bold">200%</span> — fueling the cellular repair processes that reverse skin aging and reduce chronic pain.
              </p>
            </div>

            {/* Skin Cross-Section */}
            <div className="reveal mt-10">
              <img
                src="/skin-cross-section.png"
                alt="Skin cross-section showing light penetration"
                className="w-full h-auto rounded-xl"
              />
              <p className="text-sm text-[#6B7280] italic mt-4 leading-relaxed">
                Light penetration at different wavelengths — red light targets surface layers, near-infrared reaches deep tissue.
              </p>
            </div>
          </div>
        </div>

        {/* NEW: Skin Before/After Diagram Block */}
        <div
          ref={diagramRef}
          className="mt-20 rounded-[28px] overflow-hidden"
          style={{ backgroundColor: '#FAFAFA' }}
        >
          {/* Red LED light bar divider */}
          <div
            className="w-full h-[2px]"
            style={{
              background: 'linear-gradient(90deg, #DC2626 0%, rgba(220, 38, 38, 0.5) 50%, transparent 100%)',
            }}
          />

          <div className="p-6 sm:p-10">
            {/* Section label */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#DC2626]">
                Deep Skin Penetration
              </span>
            </div>

            {/* Before/After Diagram Image */}
            <img
              src="/skin-before-after.png"
              alt="Red and Infrared LED light penetration through skin layers"
              className="w-full h-auto rounded-xl"
            />

            {/* Caption */}
            <p className="text-base text-[#DC2626] mt-6 leading-relaxed text-center font-medium">
              Red &amp; Infrared LED light penetrates all skin layers — stimulating collagen production and cellular renewal from within.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
