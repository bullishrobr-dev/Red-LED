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
      id="contact"
      style={{ background: 'linear-gradient(180deg, #0A1628 0%, #0D1F35 100%)', padding: '120px 0' }}
    >
      <div className="max-w-[560px] mx-auto text-center">
        {/* Header */}
        <div className="reveal flex items-center justify-center gap-2">
          <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C9A96E]">
            GET IN TOUCH
          </span>
        </div>
        <h2
          className="reveal font-medium leading-[1.15] tracking-[-0.01em] mt-4 text-white"
          style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 400 }}
        >
          Learn More About LED Light Therapy
        </h2>
        <p className="reveal text-lg text-white/70 mt-3">
          Interested in learning more about Red &amp; Infrared LED Light Therapy? Our team is here to answer your questions.
        </p>

        {/* Contact Buttons */}
        <div className="reveal mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:info@zerolines.life"
            className="inline-flex items-center gap-3 text-[15px] font-semibold tracking-[0.04em] rounded-full px-8 py-4 transition-all duration-300 hover:scale-[1.03] hover:shadow-glow"
            style={{ background: '#C9A96E', color: '#0A1628' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#D4B87A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#C9A96E';
            }}
          >
            <Mail className="w-5 h-5" />
            Email Our Team
          </a>
          <a
            href="https://wa.me/+35054005198"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] text-white text-[15px] font-semibold tracking-[0.04em] rounded-full px-8 py-4 hover:bg-[#20BD5A] hover:scale-[1.03] transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Message on WhatsApp
          </a>
        </div>

        {/* Context Pills */}
        <div className="reveal flex flex-wrap justify-center gap-3 mt-8">
          {['Science & Research', 'How It Works', 'General Info'].map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center text-[11px] font-semibold uppercase tracking-[0.1em] rounded-full px-4 py-2 bg-white/10 text-white/60"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* Contact Info */}
        <p className="reveal text-sm text-white/50 mt-8">
          <a
            href="mailto:info@zerolines.life"
            className="transition-colors duration-300 hover:text-[#C9A96E]"
            style={{ color: 'inherit' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#C9A96E';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'inherit';
            }}
          >
            info@zerolines.life
          </a>
          {' '}· +350 540 05198
        </p>
      </div>
    </section>
  );
}
