import { useEffect, useRef, useState } from 'react';
import { Globe } from 'lucide-react';

interface LangEntry {
  name: string;
  flag: string;
}

const languages: Record<string, LangEntry> = {
  en:  { name: 'English',      flag: '\uD83C\uDDEC\uD83C\uDDE7' }, // 🇬🇧
  es:  { name: 'Español',      flag: '\uD83C\uDDEA\uD83C\uDDF8' }, // 🇪🇸
  fr:  { name: 'Français',     flag: '\uD83C\uDDEB\uD83C\uDDF7' }, // 🇫🇷
  de:  { name: 'Deutsch',      flag: '\uD83C\uDDE9\uD83C\uDDEA' }, // 🇩🇪
  it:  { name: 'Italiano',     flag: '\uD83C\uDDEE\uD83C\uDDF9' }, // 🇮🇹
  pt:  { name: 'Português',    flag: '\uD83C\uDDF5\uD83C\uDDF9' }, // 🇵🇹
  nl:  { name: 'Nederlands',   flag: '\uD83C\uDDF3\uD83C\uDDF1' }, // 🇳🇱
  da:  { name: 'Dansk',        flag: '\uD83C\uDDE9\uD83C\uDDF0' }, // 🇩🇰
  sv:  { name: 'Svenska',      flag: '\uD83C\uDDF8\uD83C\uDDEA' }, // 🇸🇪
  no:  { name: 'Norsk',        flag: '\uD83C\uDDF3\uD83C\uDDF4' }, // 🇳🇴
  pl:  { name: 'Polski',       flag: '\uD83C\uDDF5\uD83C\uDDF1' }, // 🇵🇱
  hr:  { name: 'Hrvatski',     flag: '\uD83C\uDDED\uD83C\uDDF7' }, // 🇭🇷
  fi:  { name: 'Suomi',        flag: '\uD83C\uDDEB\uD83C\uDDEE' }, // 🇫🇮
  el:  { name: 'Ελληνικά',     flag: '\uD83C\uDDEC\uD83C\uDDF7' }, // 🇬🇷
  cs:  { name: 'Čeština',      flag: '\uD83C\uDDE8\uD83C\uDDFF' }, // 🇨🇿
  ro:  { name: 'Română',       flag: '\uD83C\uDDF7\uD83C\uDDF4' }, // 🇷🇴
};

const langCodes = Object.keys(languages);

declare global {
  interface Window {
    google?: {
      translate: {
        TranslateElement: new (options: {
          pageLanguage: string;
          includedLanguages: string;
          layout: number;
        }, element: string) => void;
      };
    };
    googleTranslateElementInit?: () => void;
  }
}

export default function LanguageSelector({ scrolled }: { scrolled: boolean }) {
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Load Google Translate script
  useEffect(() => {
    if (document.getElementById('google-translate-script')) return;

    window.googleTranslateElementInit = () => {
      if (window.google?.translate?.TranslateElement) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: langCodes.join(','),
            layout: 1,
          },
          'google_translate_element'
        );
      }
    };

    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const selectLang = (code: string) => {
    setCurrentLang(code);
    setOpen(false);

    const gtSelect = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (gtSelect) {
      gtSelect.value = code;
      gtSelect.dispatchEvent(new Event('change', { bubbles: true }));
    }
  };

  const current = languages[currentLang];

  return (
    <div ref={dropdownRef} className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 text-sm font-medium tracking-[0.02em] transition-colors duration-300 hover:text-[#0ABAB5] ${
          scrolled ? 'text-[#111827]' : 'text-white'
        }`}
        aria-label="Select language"
      >
        <Globe className="w-4 h-4" />
        <span className="notranslate">{current.flag}</span>
        <span className="hidden sm:inline notranslate">{current.name}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-[#E5E7EB]/60 overflow-hidden z-50">
          {langCodes.map((code) => (
            <button
              key={code}
              onClick={() => selectLang(code)}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 hover:bg-[#F0F9F8] flex items-center gap-3 ${
                currentLang === code
                  ? 'text-[#0ABAB5] font-semibold bg-[#F0F9F8]'
                  : 'text-[#111827]'
              }`}
            >
              <span className="notranslate text-base">{languages[code].flag}</span>
              <span className="notranslate">{languages[code].name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Hidden Google Translate element */}
      <div id="google_translate_element" className="hidden" />
    </div>
  );
}
