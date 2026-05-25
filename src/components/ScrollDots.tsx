import { useState, useEffect } from 'react';

const sections = [
  { id: '#science', label: 'Science' },
  { id: '#nasa-detail', label: 'NASA' },
  { id: '#nobel-detail', label: 'Nobel' },
  { id: '#fda-detail', label: 'FDA' },
  { id: '#how-it-works', label: 'How It Works' },
  { id: '#discovery', label: 'Discovery' },
  { id: '#modern-skin', label: 'Skin' },
  { id: '#before-after', label: 'Results' },
  { id: '#cellulite', label: 'Body' },
  { id: '#pain-cancer', label: 'Pain' },
  { id: '#competitive', label: 'Quality' },
  { id: '#clinical', label: 'Evidence' },
  { id: '#experts', label: 'Experts' },
  { id: '#faq', label: 'FAQ' },
  { id: '#contact', label: 'Contact' },
];

export default function ScrollDots() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setVisible(scrollY > window.innerHeight * 0.5);

      // Find which section is currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.querySelector(sections[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setActive(i);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (!visible) return null;

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3">
      {sections.map((sec, i) => (
        <button
          key={sec.id}
          onClick={() => scrollTo(sec.id)}
          className="group relative flex items-center justify-center"
          aria-label={`Scroll to ${sec.label}`}
        >
          {/* Tooltip label */}
          <span className="absolute right-6 px-2 py-1 rounded-md bg-[#111827] text-white text-[10px] font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
            {sec.label}
          </span>
          {/* Dot */}
          <span
            className="block rounded-full transition-all duration-300"
            style={{
              width: active === i ? '10px' : '6px',
              height: active === i ? '10px' : '6px',
              backgroundColor: active === i ? '#0ABAB5' : 'rgba(10,186,181,0.3)',
              boxShadow: active === i ? '0 0 8px rgba(10,186,181,0.5)' : 'none',
            }}
          />
        </button>
      ))}
    </div>
  );
}
