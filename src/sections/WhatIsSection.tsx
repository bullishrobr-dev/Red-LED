import { useEffect, useRef } from 'react';
import { Lightbulb, Zap } from 'lucide-react';

const stats = [
  { value: 10000, suffix: '+', label: 'Peer-Reviewed Studies' },
  { value: 60, suffix: '+', label: 'Years Research History' },
  { value: null, suffix: '', label: 'FDA Cleared Class 2 Medical Device', isText: true },
];

function AnimatedCounter({ value, suffix, isText }: { value: number | null; suffix: string; isText?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (isText) {
      el.textContent = 'FDA Cleared';
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const target = value ?? 0;
          const duration = 1200;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            el.textContent = current.toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix, isText]);

  if (isText) return <span ref={ref}>FDA Cleared</span>;
  return <span ref={ref}>0{suffix}</span>;
}

export default function WhatIsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('.reveal');
    elements.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(30px)';
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

  return (
    <section
      ref={sectionRef}
      id="science"
      className="bg-[#FAFAFA] section-padding"
    >
      <div className="max-w-[720px] mx-auto">
        {/* Section Label */}
        <p className="reveal text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
          A DIFFERENT CATEGORY
        </p>

        {/* Headline */}
        <h2 className="reveal text-[32px] sm:text-[38px] lg:text-[42px] font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4">
          What is LED Light Therapy?
        </h2>

        {/* Intro */}
        <p className="reveal text-[17px] text-[#111827] leading-[1.65] mt-6">
          LED Light Therapy — also known as Low-Level Light Therapy (LLLT) or Photobiomodulation — is a non-invasive treatment that uses specific wavelengths of red and near-infrared light to trigger natural cellular processes. Backed by over 10,000 peer-reviewed studies since 1967, it is one of the most researched therapeutic technologies in modern medicine.
        </p>

        {/* Two Cards */}
        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {/* Cosmetic Science Card */}
          <div className="reveal bg-white rounded-3xl border border-[#E5E7EB] shadow-card p-8 hover:-translate-y-1 hover:shadow-lg hover:border-[#0ABAB5]/20 transition-all duration-300">
            <Lightbulb className="w-8 h-8 text-[#0ABAB5]" />
            <h3 className="text-xl font-semibold text-black mt-4">Cosmetic Science</h3>
            <p className="text-[15px] text-[#6B7280] leading-relaxed mt-3">
              Red light (630–700nm) targets the epidermis and upper dermis to stimulate collagen, reduce wrinkles, and improve skin tone. Near-infrared (700–1100nm) penetrates deeper to support tissue repair and cellular renewal.
            </p>
          </div>

          {/* Therapeutic Science Card */}
          <div className="reveal bg-white rounded-3xl border border-[#E5E7EB] shadow-card p-8 hover:-translate-y-1 hover:shadow-lg hover:border-[#0ABAB5]/20 transition-all duration-300">
            <Zap className="w-8 h-8 text-[#0ABAB5]" />
            <h3 className="text-xl font-semibold text-black mt-4">Therapeutic Science</h3>
            <p className="text-[15px] text-[#6B7280] leading-relaxed mt-3">
              Near-infrared light reaches muscles, joints, and bone to reduce inflammation, accelerate healing, and provide clinically significant pain relief — without drugs or downtime.
            </p>
          </div>
        </div>

        {/* Stat Bar */}
        <div className="reveal flex flex-col sm:flex-row items-center justify-between gap-8 mt-14 pt-8 border-t border-[#E5E7EB]">
          {stats.map((stat, i) => (
            <div key={i} className="text-center flex-1">
              <p className="text-2xl font-bold text-black">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} isText={stat.isText} />
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6B7280] mt-1">
                {stat.isText ? 'Class 2 Medical Device' : stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
