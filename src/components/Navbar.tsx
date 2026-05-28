import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const navLinks = [
  { label: 'Science', href: '#science' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Skin', href: '#modern-skin' },
  { label: 'Body', href: '#cellulite' },
  { label: 'Pain Relief', href: '#pain-cancer' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-[#F3F4F6] shadow-sm'
            : 'bg-transparent'
        }`}
        style={{ height: '64px' }}
      >
        <div className="flex items-center justify-between h-full px-6 sm:px-12 lg:px-16 max-w-[1100px] mx-auto">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              src="./zl-logo-nav.png"
              alt="Zero Lines"
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop links + Language */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-medium tracking-[0.02em] transition-colors duration-300 hover:text-[#0ABAB5] ${
                  scrolled ? 'text-[#111827]' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <LanguageSelector scrolled={scrolled} />
          </div>

          {/* Mobile: language + hamburger */}
          <div className="lg:hidden flex items-center gap-4">
            <LanguageSelector scrolled={scrolled} />
            <button
              className="p-2 -mr-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className={`w-6 h-6 ${scrolled ? 'text-[#111827]' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${scrolled ? 'text-[#111827]' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu - full screen overlay with dark theme */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[60] lg:hidden"
          style={{ background: 'linear-gradient(180deg, #0A1628 0%, #0D1F35 100%)' }}
        >
          {/* Close button */}
          <div className="flex items-center justify-between h-16 px-6">
            <img src="./zl-logo-hero.png" alt="Zero Lines" className="h-8 w-auto" />
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col px-8 pt-8 gap-2">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xl font-medium text-white/90 py-4 border-b border-white/10 hover:text-[#0ABAB5] transition-colors"
                style={{
                  opacity: 0,
                  animation: `fadeInLeft 0.4s ease forwards ${i * 0.08}s`,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Bottom trust badges */}
          <div className="absolute bottom-8 left-0 right-0 px-8">
            <div className="flex items-center justify-center gap-4 opacity-50">
              <img src="./badges/fda-cleared.png" alt="FDA" className="h-8 w-auto" />
              <img src="./badges/nasa-logo.png" alt="NASA" className="h-8 w-auto" />
              <img src="./badges/nobel-medal.png" alt="Nobel" className="h-8 w-auto" />
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
