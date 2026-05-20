import { useEffect, useRef } from 'react';
import { Mail, MessageCircle } from 'lucide-react';

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll('.reveal');
    elements.forEach((el, i) => {
      const htmlEl = el as HTMLElement;
      htmlEl.style.opacity = '0';
      htmlEl.style.transform = i === 0 ? 'translateY(30px)' : i === 1 ? 'translateY(20px)' : 'scale(0.95)';
      htmlEl.style.transition = `opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.2}s, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${i * 0.2}s`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          elements.forEach((el) => {
            const htmlEl = el as HTMLElement;
            htmlEl.style.opacity = '1';
            htmlEl.style.transform = 'translateY(0) scale(1)';
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
    <section ref={sectionRef} id="contact" className="bg-white section-padding">
      <div className="max-w-[560px] mx-auto text-center">
        {/* Header */}
        <div className="reveal flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0ABAB5]" />
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
            GET IN TOUCH
          </span>
        </div>
        <h2 className="reveal text-[32px] sm:text-[38px] lg:text-[42px] font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4">
          Learn More About LED Therapy
        </h2>
        <p className="reveal text-lg text-[#6B7280] mt-3">
          Interested in bringing the science of LED Light Therapy to your clinic, spa, or practice? Our team is here to answer your questions.
        </p>

        {/* Contact Buttons */}
        <div className="reveal mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:info@zerolions.life"
            className="inline-flex items-center gap-3 bg-[#0ABAB5] text-white text-[15px] font-semibold tracking-[0.04em] rounded-full px-8 py-4 hover:bg-[#09a9a4] hover:scale-[1.03] hover:shadow-glow transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Write us an email
          </a>
          <a
            href="https://wa.me/+35054005198"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#0ABAB5] text-[15px] font-semibold tracking-[0.04em] rounded-full px-8 py-4 border-2 border-[#0ABAB5] hover:bg-[#0ABAB5]/5 hover:scale-[1.03] transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </div>

        {/* Context Pills */}
        <div className="reveal flex flex-wrap justify-center gap-3 mt-8">
          {['Clinical Training', 'Device Information', 'Practice Integration'].map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center bg-gray-100 text-gray-600 text-[11px] font-semibold uppercase tracking-[0.1em] rounded-full px-4 py-2"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
