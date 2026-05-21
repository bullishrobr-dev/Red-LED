import { useEffect, useRef } from 'react';
import { Shield, GraduationCap, FileCheck, CreditCard, RotateCcw } from 'lucide-react';

const credentials = [
  { icon: Shield, title: 'FDA Class 2 Medical Device', desc: 'Fully cleared under 21 CFR 878.4810 for wrinkle reduction, acne treatment, and pain relief' },
  { icon: GraduationCap, title: 'Training & Onboarding Included', desc: 'Comprehensive staff training, treatment protocols, and ongoing clinical support at no extra cost' },
  { icon: FileCheck, title: 'No Special Licensing Required', desc: 'Operate under your existing medical or aesthetics license — no additional certifications needed' },
  { icon: CreditCard, title: 'Flexible Financing Available', desc: 'Payment plans designed for practice cash flow — start generating revenue before your first payment' },
  { icon: RotateCcw, title: '30-Day Satisfaction Guarantee', desc: 'Try the device in your practice risk-free. Full support during your trial period' },
];

export default function ProfessionalsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const elements = section.querySelectorAll('.reveal');
    elements.forEach((el, i) => {
      const h = el as HTMLElement;
      h.style.opacity = '0';
      h.style.transform = 'translateY(30px)';
      h.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
    });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          elements.forEach((el) => {
            const h = el as HTMLElement;
            h.style.opacity = '1';
            h.style.transform = 'translateY(0)';
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
    <section ref={sectionRef} id="professionals" className="bg-[#FAFAFA] section-padding">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center">
          <div className="reveal flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5]" />
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
              FOR PROFESSIONALS
            </p>
          </div>
          <h2 className="reveal text-[36px] sm:text-[42px] lg:text-[48px] font-medium text-[#111827] leading-[1.15] tracking-[-0.01em] mt-3">
            Everything You Need to Launch — Included
          </h2>
          <p className="reveal text-lg text-[#4B5563] max-w-[600px] mx-auto mt-3">
            From FDA clearance to staff training, we handle the details so you can focus on delivering results.
          </p>
        </div>

        <div className="reveal grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {credentials.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-[#F3F4F6]">
              <div className="w-10 h-10 rounded-xl bg-[#0ABAB5]/10 flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-[#0ABAB5]" />
              </div>
              <p className="text-base font-medium text-[#111827]">{item.title}</p>
              <p className="text-sm text-[#4B5563] mt-2 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
