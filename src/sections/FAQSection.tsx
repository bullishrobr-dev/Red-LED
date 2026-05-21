import { useEffect, useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const skinFaqItems = [
  {
    q: 'How does LED light therapy reduce wrinkles?',
    a: 'Red and near-infrared light penetrates the skin\'s layers, stimulating fibroblasts to produce more collagen and elastin. Clinical studies show a 31% increase in collagen density after 8-12 weeks, resulting in visibly smoother skin with fewer fine lines.',
  },
  {
    q: 'How long until I see results?',
    a: 'Most users notice improved skin texture and radiance within 2-4 weeks. Significant wrinkle reduction and lifting effects typically appear after 8-12 weeks of consistent treatment. Results are cumulative and improve with ongoing maintenance.',
  },
  {
    q: 'Is LED therapy safe for all skin types?',
    a: 'Yes — LED light therapy is non-invasive, non-thermal, and contains no UV light. It is safe for all skin types and tones. As FDA Class 2 Medical Devices, our systems meet strict safety and performance standards.',
  },
  {
    q: 'Can it help with acne?',
    a: 'Absolutely. Red light reduces inflammation while specific wavelengths target acne-causing bacteria. Studies show 76-81% reduction in acne lesions, with 81% of patients reporting visible improvement after 12 weeks.',
  },
  {
    q: 'Does it help with loose skin on the body?',
    a: 'Yes — LED therapy stimulates collagen production throughout the body, not just the face. It helps tighten loose skin on arms, abdomen, and thighs, improves body contours, and can reduce the appearance of cellulite and stretch marks.',
  },
  {
    q: 'Can I use LED therapy with my existing skincare routine?',
    a: 'Yes — LED therapy complements your existing skincare routine. Use it on clean, dry skin before applying serums and moisturizers. The light penetrates better without product barriers. After your session, continue with your normal skincare routine. Many users find their products absorb better after LED treatment.',
  },
  {
    q: 'What about pregnancy?',
    a: 'LED light therapy should NOT be used during pregnancy. While there is no conclusive evidence of harm, there have not been enough studies to guarantee safety. We recommend waiting until after pregnancy and breastfeeding to begin LED therapy.',
  },
];

const painFaqItems = [
  {
    q: 'How does LED therapy relieve pain?',
    a: 'Red and near-infrared light increases cellular ATP production by up to 200%, which reduces inflammation at the cellular level. It also stimulates beta-endorphin release and improves blood flow to damaged tissues. Studies show up to 90% pain reduction for arthritis patients.',
  },
  {
    q: 'Is it effective for chronic pain?',
    a: 'Yes — clinical studies demonstrate significant relief for chronic low back pain (13.57-point reduction on VAS scale), arthritis (up to 90% pain attenuation), and fibromyalgia. It addresses pain at its source by reducing inflammatory cytokines.',
  },
  {
    q: 'Can athletes use this for recovery?',
    a: 'Absolutely — LED therapy is used by NFL, NBA, and Olympic athletes. It reduces DOMS by up to 50%, helps athletes return to play 50% faster (9.6 vs 19.23 days), and is WADA-approved for use in all professional sports.',
  },
  {
    q: 'How does it compare to pain medication?',
    a: 'LED therapy is a non-invasive, drug-free alternative to NSAIDs and opioids. Unlike medication, there are no side effects, no dependency risk, and it addresses the root cause of pain (inflammation and tissue damage) rather than just masking symptoms.',
  },
  {
    q: 'Is it FDA cleared for pain relief?',
    a: 'Yes — our devices are FDA Class 2 Medical Devices, cleared for temporary relief of minor muscle and joint pain, arthritis, muscle spasms, and for increasing local blood circulation.',
  },
  {
    q: 'How long do these devices last?',
    a: 'Quality LED therapy devices are built to last 50,000+ hours of use — that is decades of regular sessions. The LEDs themselves do not burn out like traditional bulbs. With proper care and storage, your device will remain effective for many years of daily use.',
  },
];

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-[#E5E7EB]">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-5 text-left group"
      >
        <span className="text-[17px] font-medium text-[#111827] pr-4">{question}</span>
        <span className="flex-shrink-0 text-[#0ABAB5] transition-transform duration-300">
          {isOpen ? (
            <Minus className="w-5 h-5" />
          ) : (
            <Plus className="w-5 h-5" />
          )}
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: isOpen ? '500px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <p className="text-base text-[#4B5563] leading-[1.65] pb-5">
          {answer}
        </p>
      </div>
    </div>
  );
}

function FAQGroup({
  items,
  label,
  defaultOpen = 0,
}: {
  items: { q: string; a: string }[];
  label: string;
  defaultOpen?: number;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  return (
    <div>
      <div className="flex items-center justify-center gap-2 mb-8">
        <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5]" />
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
          {label}
        </span>
      </div>
      <div>
        {items.map((item, i) => (
          <AccordionItem
            key={i}
            question={item.q}
            answer={item.a}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </div>
  );
}

export default function FAQSection() {
  const skinRef = useRef<HTMLElement>(null);
  const painRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const animateSection = (section: HTMLElement | null) => {
      if (!section) return;

      const elements = section.querySelectorAll('.reveal');
      elements.forEach((el, i) => {
        const htmlEl = el as HTMLElement;
        htmlEl.style.opacity = '0';
        htmlEl.style.transform = 'translateY(20px)';
        htmlEl.style.transition = `opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.08}s, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.08}s`;
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
    };

    animateSection(skinRef.current);
    animateSection(painRef.current);
  }, []);

  return (
    <>
      {/* Part 1: FAQ — Skin & Anti-Aging */}
      <section ref={skinRef} id="faq" className="bg-white section-padding">
        <div className="max-w-[720px] mx-auto">
          <div className="reveal text-center">
            <h2 className="text-[36px] sm:text-[42px] lg:text-[48px] font-medium text-black leading-[1.15] tracking-[-0.01em]">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="reveal mt-12">
            <FAQGroup items={skinFaqItems} label="FAQ — SKIN &amp; ANTI-AGING" defaultOpen={0} />
          </div>
        </div>
      </section>

      {/* Part 2: FAQ — Pain & Recovery */}
      <section ref={painRef} className="bg-[#FAFAFA] section-padding">
        <div className="max-w-[720px] mx-auto">
          <div className="reveal mt-4">
            <FAQGroup items={painFaqItems} label="FAQ — PAIN RELIEF" />
          </div>
        </div>
      </section>
    </>
  );
}
