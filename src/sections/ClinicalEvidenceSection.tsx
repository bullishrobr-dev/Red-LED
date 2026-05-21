import { useEffect, useRef } from 'react';
import { Shield, Star, Check } from 'lucide-react';

const evidenceStats = [
  {
    icon: Shield,
    stat: '6,600+',
    label: 'Published Studies',
    detail: 'Peer-reviewed research papers documenting efficacy across cosmetic and therapeutic applications',
    isGold: false,
  },
  {
    icon: Star,
    stat: '50+',
    label: 'Systematic Reviews',
    detail: 'Meta-analyses and systematic reviews synthesizing decades of clinical evidence',
    isGold: false,
  },
  {
    icon: Check,
    stat: '97.4%',
    label: 'Patient Satisfaction',
    detail: 'Overall patient satisfaction rate across cosmetic LED therapy treatments',
    isGold: true,
  },
];

const adoptionItems = [
  'Dermatology & Aesthetic Clinics',
  'Medical Spas & Wellness Centers',
  'Plastic Surgery Practices',
  'Physical Therapy & Sports Medicine',
  'Professional Athletic Training Facilities',
];

export default function ClinicalEvidenceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const goldStrokeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('.reveal');
    elements.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(50px)';
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
          observer.unobserve(section);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // AmberGoldStroke for 100% stat
  useEffect(() => {
    const goldStroke = goldStrokeRef.current;
    if (!goldStroke) return;

    goldStroke.style.width = '0%';
    goldStroke.style.transition = 'none';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            goldStroke.style.transition = 'width 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            goldStroke.style.width = '100%';
          }, 600);
          observer.unobserve(goldStroke);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(goldStroke);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="evidence" className="bg-white section-padding relative overflow-hidden">
      {/* Subtle glow orb */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full"
          style={{
            width: '30vw',
            height: '30vw',
            background: 'radial-gradient(circle, rgba(10,186,181,0.03) 0%, transparent 70%)',
            filter: 'blur(80px)',
            top: '30%',
            left: '5%',
          }}
        />
      </div>

      <div className="max-w-[1100px] mx-auto relative z-10">
        {/* Header */}
        <div className="text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
            CLINICAL EVIDENCE
          </p>
          <h2 className="reveal text-[36px] sm:text-[42px] lg:text-[48px] font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4">
            A Body of Evidence — 60 Years in the Making
          </h2>
        </div>

        {/* FDA Badge Block */}
        <div className="reveal text-center mt-10">
          <span className="inline-flex items-center bg-[#0ABAB5] text-white text-sm font-semibold uppercase tracking-[0.12em] rounded-full px-8 py-3">
            FDA CLASS 2 MEDICAL DEVICE
          </span>
          <p className="text-sm text-[#4B5563] mt-3">
            21 CFR 878.4810 — Light Therapy Device
          </p>
          <p className="text-[17px] text-[#111827] max-w-[640px] mx-auto mt-4 leading-relaxed">
            LED therapy devices are regulated by the FDA as Class 2 Medical Devices, requiring documented safety and efficacy data. This classification places them alongside ultrasound equipment and surgical lasers in the FDA&apos;s medical device framework.
          </p>
        </div>

        {/* Evidence Stats Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mt-14">
          {evidenceStats.map((card, i) => {
            const IconComp = card.icon;
            return (
              <div
                key={i}
                className={`reveal text-center p-8 rounded-3xl ${
                  card.isGold ? 'bg-[#FAFAFA] border border-[#C9A961]/30' : 'bg-[#FAFAFA]'
                }`}
              >
                <IconComp className="w-9 h-9 text-[#0ABAB5] mx-auto" />
                <p className={`text-[28px] font-bold mt-4 ${card.isGold ? 'text-[#C9A961]' : 'text-black'}`}>
                  {card.stat}
                </p>
                {card.isGold && (
                  <div
                    ref={goldStrokeRef}
                    className="h-[3px] bg-[#C9A961] rounded-full mx-auto mt-1"
                    style={{ width: '0%', maxWidth: '120px' }}
                  />
                )}
                <p className="text-base font-medium text-[#111827] mt-3">{card.label}</p>
                <p className="text-sm text-[#4B5563] mt-2 leading-relaxed">{card.detail}</p>
              </div>
            );
          })}
        </div>

        {/* Adoption List */}
        <div className="reveal mt-12 max-w-md mx-auto">
          <h3 className="text-xl font-semibold text-black mb-4">Professional Adoption</h3>
          <ul className="space-y-0">
            {adoptionItems.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 py-3 border-b border-[#E5E7EB] last:border-0"
              >
                <Check className="w-5 h-5 text-[#0ABAB5] flex-shrink-0" />
                <span className="text-base text-[#111827]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Device Image */}
        <div className="reveal mt-12 text-center">
          <img
            src="/clinical-device.png"
            alt="Professional LED therapy device"
            className="w-full max-w-[600px] mx-auto h-auto rounded-3xl shadow-lg"
          />
          <p className="text-sm text-[#4B5563] mt-4">
            Professional-grade LED therapy panels deliver precise wavelengths at therapeutic intensities.
          </p>
        </div>
      </div>
    </section>
  );
}
