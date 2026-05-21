import { useEffect, useRef } from 'react';

export default function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={ref} className="bg-black py-14">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-12 lg:px-16 flex flex-col items-center text-center">
        {/* Logo - inverted to white for dark footer */}
        <img
          src="/zero-lines-logo.png"
          alt="Zero Lines"
          className="h-7 w-auto brightness-0 invert"
        />
        
        {/* Brand */}
        <p className="text-white text-lg font-semibold mt-4">
          Zero Lines
        </p>
        
        {/* Tagline */}
        <p className="text-white/60 text-sm mt-1">
          Advanced Skin Solutions
        </p>
        
        {/* Copyright */}
        <p className="text-white/40 text-[13px] mt-6">
          &copy; 2025 Zero Lines. All rights reserved.
        </p>
        
        {/* Regulatory note */}
        <p className="text-white/[0.35] text-xs mt-2 max-w-md">
          Our devices are FDA Class 2 Medical Devices regulated under 21 CFR 878.4810
        </p>
      </div>
    </footer>
  );
}
