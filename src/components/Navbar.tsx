import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = [
  { label: 'Science', href: '#science' },
  { label: 'Skin', href: '#skin' },
  { label: 'Body', href: '#body' },
  { label: 'Evidence', href: '#evidence' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

interface NavbarProps {
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
}

export default function Navbar({ theme = 'light', onToggleTheme }: NavbarProps) {
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

  const isDark = theme === 'dark';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? isDark
            ? 'bg-[#0a0a0a]/95 backdrop-blur-sm shadow-[0_1px_0_#27272a]'
            : 'bg-white/95 backdrop-blur-sm shadow-[0_1px_0_#E5E7EB]'
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
            src="/zero-lines-logo.png"
            alt="Zero Lines"
            className="h-8 w-auto"
          />
        </a>

        {/* Desktop links + theme toggle */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm font-medium tracking-[0.02em] transition-colors duration-300 hover:text-[#0ABAB5] ${
                scrolled
                  ? isDark
                    ? 'text-[#f9fafb]'
                    : 'text-[#111827]'
                  : isDark
                    ? 'text-[#f9fafb]'
                    : 'text-[#111827]'
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Dark mode toggle */}
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 ${
                scrolled
                  ? isDark
                    ? 'text-[#f9fafb] hover:bg-white/10'
                    : 'text-[#111827] hover:bg-black/5'
                  : isDark
                    ? 'text-[#f9fafb] hover:bg-white/10'
                    : 'text-[#111827] hover:bg-black/5'
              }`}
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          )}
        </div>

        {/* Mobile: hamburger + theme toggle */}
        <div className="lg:hidden flex items-center gap-2">
          {onToggleTheme && (
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-full text-[#111827] hover:bg-black/5"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          )}
          <button
            className="p-2 -mr-2"
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
