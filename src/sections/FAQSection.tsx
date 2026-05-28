import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does LED light therapy actually work?',
    answer:
      'LED light therapy uses specific wavelengths of red and near-infrared light to penetrate the skin and stimulate cellular activity. The light is absorbed by mitochondria — the power plants inside your cells — which increases ATP (cellular energy) production. This boost in energy helps cells repair, regenerate, and function more efficiently, leading to visible improvements in skin texture, tone, and firmness.',
  },
  {
    question: 'Is LED light therapy safe? Are there any side effects?',
    answer:
      'Yes, LED light therapy is FDA-cleared as a Class 2 Medical Device and is widely recognized as safe. It is non-invasive, non-thermal, and does not contain UV rays. Side effects are rare and typically limited to mild, temporary redness in sensitive individuals. It is safe for all skin types and tones.',
  },
  {
    question: 'How long does it take to see results?',
    answer:
      'Most users begin to notice subtle improvements after 2–4 weeks of consistent use. More significant results — such as visible wrinkle reduction and improved skin texture — are typically seen after 8–12 weeks of regular treatments. Individual results vary based on skin condition, age, and consistency of use.',
  },
  {
    question: 'How often should I use my LED device?',
    answer:
      'For optimal results, most clinical studies recommend 3–5 sessions per week, with each session lasting 10–20 minutes depending on the treatment area. Consistency is key — regular, ongoing use delivers the best long-term outcomes. Always follow the specific guidelines provided with your device.',
  },
  {
    question: 'Can I use LED therapy alongside my existing skincare routine?',
    answer:
      'Absolutely. LED therapy complements most skincare routines. For best results, use the device on clean, dry skin before applying serums or moisturizers. After your session, you can apply your regular products — the increased microcirculation may even enhance product absorption.',
  },
  {
    question: 'What is the difference between Red and Near-Infrared light?',
    answer:
      'Red light (630–700 nm) targets the upper layers of the skin — the epidermis and superficial dermis — making it ideal for addressing fine lines, uneven tone, and surface-level concerns. Near-Infrared light (700–1100 nm) penetrates much deeper — up to 4–5 cm — reaching muscle, bone, and deep tissue for pain relief and recovery. Most effective devices combine both wavelengths.',
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const elements = section.querySelectorAll('.reveal');
    elements.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = 'translateY(40px)';
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
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="bg-[#F7F5F2]"
      style={{ padding: '100px 0' }}
    >
      <div className="max-w-[760px] mx-auto px-6 sm:px-8">
        {/* Label */}
        <div className="reveal flex items-center justify-center gap-2">
          <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
            FAQ
          </span>
          <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
        </div>

        {/* Headline */}
        <h2
          className="reveal text-center text-black leading-[1.1] tracking-[-0.02em] mt-5"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 400 }}
        >
          Questions? Answered.
        </h2>
        <p className="reveal text-center text-[17px] text-[#4B5563] leading-[1.65] mt-5 max-w-[56ch] mx-auto">
          Everything you need to know about LED light therapy — from how it works to what results you can expect.
        </p>

        {/* FAQ Items */}
        <div className="reveal mt-14 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-[#E5E7EB]/60 overflow-hidden transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-5 sm:px-8 sm:py-6 text-left"
                >
                  <span className="text-[15px] font-semibold text-[#111827] leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#4B5563] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-out"
                  style={{
                    maxHeight: isOpen ? '500px' : '0px',
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <div className="px-5 pb-5 sm:px-8 sm:pb-6">
                    <p className="text-[15px] text-[#4B5563] leading-[1.7]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
