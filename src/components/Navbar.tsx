import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Science', href: '#science' },
  { label: 'Skin', href: '#skin' },
  { label: 'Body', href: '#body' },
  { label: 'Evidence', href: '#evidence' },
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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-[0_1px_0_#E5E7EB]'
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
            src="/zl-logo.png"
            alt="Zero Lines"
            className="h-8 w-auto"
          />
          <span className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${scrolled ? 'text-[#111827]' : 'text-[#111827]'}`}>
            Zero Lines
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm font-medium tracking-[0.02em] transition-colors duration-300 hover:text-[#0ABAB5] ${
                scrolled ? 'text-[#111827]' : 'text-[#111827]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6 text-[#111827]" />
          ) : (
            <Menu className="w-6 h-6 text-[#111827]" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-[#E5E7EB] shadow-lg">
          <div className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[15px] font-medium text-[#111827] py-3 border-b border-[#F3F4F6] last:border-0 hover:text-[#0ABAB5] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
