import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const painFaqs = [
  {
    question: 'How does LED therapy relieve pain?',
    answer:
      'Red and near-infrared light increases cellular ATP production by up to 200%, which reduces inflammation at the cellular level. It also stimulates beta-endorphin release and improves blood flow to damaged tissues. Studies show up to 90% pain reduction for arthritis patients.',
  },
  {
    question: 'Is it effective for chronic pain?',
    answer:
      'Yes — clinical studies demonstrate significant relief for chronic low back pain, arthritis (up to 90% pain attenuation), and fibromyalgia. It addresses pain at its source by reducing inflammatory cytokines (IL-6 by up to 95%, TNF-alpha by up to 90%).',
  },
  {
    question: 'Can athletes use this for recovery?',
    answer:
      'Absolutely — LED therapy is used by NFL, NBA, and Olympic athletes. It reduces DOMS (Delayed Onset Muscle Soreness) by up to 75%, helps athletes return to play up to 80% faster, and is WADA-approved for use in all professional sports.',
  },
  {
    question: 'How does it compare to pain medication?',
    answer:
      'LED therapy is a non-invasive, drug-free alternative to NSAIDs and opioids. Unlike medication, there are no side effects, no dependency risk, and it addresses the root cause of pain — inflammation and tissue damage — rather than just masking symptoms.',
  },
  {
    question: 'Is it FDA cleared for pain relief?',
    answer:
      'Yes — our devices are FDA Class 2 Medical Devices, cleared for temporary relief of minor muscle and joint pain, arthritis, muscle spasms, and for increasing local blood circulation.',
  },
  {
    question: 'How long does a pain relief session take?',
    answer:
      'Most pain relief sessions last 15–25 minutes per treatment area. For chronic conditions, daily sessions for the first 2–4 weeks are recommended, followed by 3–5 sessions per week for maintenance. Consistency is key for lasting results.',
  },
];

export default function PainFAQSection() {
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
      id="faq-pain"
      className="bg-[#FAFAFA]"
      style={{ padding: '100px 0' }}
    >
      <div className="max-w-[760px] mx-auto px-6 sm:px-8">
        {/* Label */}
        <div className="reveal flex items-center justify-center gap-2">
          <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
            PAIN RELIEF FAQ
          </span>
          <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
        </div>

        {/* Headline */}
        <h2
          className="reveal text-center text-black leading-[1.1] tracking-[-0.02em] mt-5"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 400 }}
        >
          Pain Relief Questions
        </h2>
        <p className="reveal text-center text-[17px] text-[#4B5563] leading-[1.65] mt-5 max-w-[56ch] mx-auto">
          Everything you need to know about LED light therapy for pain management, athletic recovery, and chronic pain relief.
        </p>

        {/* FAQ Items */}
        <div className="reveal mt-14 space-y-3">
          {painFaqs.map((faq, i) => {
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
