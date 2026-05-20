import { useEffect, useRef } from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const contextPills = ['Clinical Training', 'Device Information', 'Practice Integration'];

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
      <div className="max-w-[640px] mx-auto text-center px-6">
        {/* Header */}
        <p className="reveal text-xs font-semibold uppercase tracking-[0.15em] text-[#0ABAB5]">
          GET IN TOUCH
        </p>
        <h2 className="reveal text-[32px] sm:text-[38px] lg:text-[42px] font-medium text-black leading-[1.15] tracking-[-0.01em] mt-4">
          Learn More About LED Therapy
        </h2>
        <p className="reveal text-lg text-[#6B7280] mt-3">
          Interested in bringing the science of LED Light Therapy to your clinic, spa, or practice? Our team is here to answer your questions.
        </p>

        {/* CTA Buttons */}
        <div className="reveal mt-10 flex flex-col sm:flex-row gap-4">
          {/* Email Button */}
          <a
            href="mailto:info@zerolions.life"
            className="flex-1 inline-flex items-center justify-center gap-3 text-white text-base font-semibold tracking-[0.02em] rounded-full px-10 py-[18px] transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
            style={{ backgroundColor: '#0ABAB5' }}
          >
            <Mail className="w-5 h-5" />
            Write us an email
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/+35054005198"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-3 text-white text-base font-semibold tracking-[0.02em] rounded-full px-10 py-[18px] transition-all duration-300 hover:scale-[1.03] hover:shadow-lg"
            style={{ backgroundColor: '#22C55E' }}
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </div>

        {/* Context Pills */}
        <div className="reveal flex flex-wrap justify-center gap-3 mt-8">
          {contextPills.map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center bg-[#0ABAB5]/10 text-[#0ABAB5] text-[11px] font-semibold uppercase tracking-[0.1em] rounded-full px-4 py-2"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
