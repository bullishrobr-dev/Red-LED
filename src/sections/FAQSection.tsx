import { useEffect, useRef, useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
  {
    q: 'Is LED Light Therapy safe?',
    a: 'Yes. LED Light Therapy is a non-invasive, non-thermal treatment with no UV light exposure. FDA Class 2 Medical Devices undergo rigorous safety testing. Side effects are minimal — some users may experience temporary redness that resolves within hours. Over 10,000 published studies support its safety profile.',
  },
  {
    q: 'How long until I see results?',
    a: 'Cosmetic improvements in skin texture and tone are typically visible within 2–4 weeks of consistent use. Collagen density increases of 31% are measured after 8–12 weeks. For pain relief, many users report improvement after 3–5 sessions, with cumulative benefits over time. Consistency is key to optimal results.',
  },
  {
    q: 'What is the difference between Red and Near-Infrared light?',
    a: 'Red light (630–700nm) penetrates 1–3mm and targets the epidermis and upper dermis — ideal for skin rejuvenation, wrinkle reduction, and collagen stimulation. Near-infrared light (700–1100nm) penetrates 3–5+cm into deep tissue, muscle, and bone — making it optimal for pain relief, inflammation reduction, and athletic recovery. The most effective treatments use both wavelengths together.',
  },
  {
    q: 'Is this technology really used by professional athletes?',
    a: 'Yes. NFL teams including the Buffalo Bills, Arizona Cardinals, Carolina Panthers, Detroit Lions, and Washington Commanders use LED therapy. NBA teams including the Indiana Pacers, LA Clippers, Phoenix Suns, Toronto Raptors, and Utah Jazz integrate it into recovery protocols. The US Special Forces have used this technology since the 1990s, reporting 40%+ improvement in musculoskeletal injuries. It is WADA-approved and legal in all professional sports.',
  },
  {
    q: 'What does FDA Class 2 mean?',
    a: 'FDA Class 2 is a medical device classification requiring manufacturers to demonstrate safety and effectiveness through clinical data. LED therapy devices fall under Regulation 21 CFR 878.4810. This classification means the device has been reviewed by the FDA for its intended therapeutic claims and meets established performance standards.',
  },
  {
    q: 'Can LED Therapy help with chronic conditions like arthritis?',
    a: 'Clinical evidence is strong. Across 18 double-blind trials for Rheumatoid Arthritis, LED therapy showed an 80% success rate. One 170-patient study demonstrated up to 90% pain attenuation. For chronic low back pain, studies show a 13.57-point reduction on the 100-point Visual Analog Scale. While individual results vary, the body of evidence supports significant therapeutic benefit.',
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openValue, setOpenValue] = useState('item-0');

  useEffect(() => {
    const section = sectionRef.current;
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
          observer.unobserve(section);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="faq" className="bg-[#FAFAFA] section-padding">
      <div className="max-w-[720px] mx-auto">
        {/* Header */}
        <div className="text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
            QUESTIONS &amp; ANSWERS
          </p>
          <h2 className="reveal text-[32px] sm:text-[38px] lg:text-[42px] font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="reveal mt-12">
          <Accordion
            type="single"
            collapsible
            value={openValue}
            onValueChange={setOpenValue}
          >
            {faqItems.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-[#E5E7EB]">
                <AccordionTrigger className="py-5 text-[17px] font-medium text-[#111827] hover:no-underline [&>svg]:text-[#0ABAB5] [&>svg]:w-5 [&>svg]:h-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-[#6B7280] leading-[1.65] pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
