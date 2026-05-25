const allBadges = [
  { src: '/badges/fda-cleared.png', alt: 'FDA Cleared Medical Device Class II' },
  { src: '/badges/nasa-logo.png', alt: 'NASA Technology' },
  { src: '/badges/nobel-medal.png', alt: 'Nobel Prize Science' },
  { src: '/badges/patented-approved.png', alt: 'Patented Approved' },
  { src: '/badges/clinically-tested.png', alt: 'Clinically Tested' },
  { src: '/badges/dermatologist-recommended.png', alt: 'Dermatologist Recommended' },
  { src: '/badges/ukas-quality.png', alt: 'UKAS Quality Management' },
];

export default function BadgeTrustBar() {
  return (
    <section className="bg-white py-10 lg:py-14 border-y border-[#E5E7EB]/60 overflow-hidden">
      <div className="max-w-[1100px] mx-auto px-6 sm:px-12 lg:px-16">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-[#9CA3AF] mb-8">
          Recognized & Certified
        </p>
        <div className="flex items-center justify-center flex-wrap gap-6 sm:gap-8 lg:gap-10">
          {allBadges.map((badge, i) => (
            <div
              key={i}
              className="flex-shrink-0 group"
              title={badge.alt}
            >
              <img
                src={badge.src}
                alt={badge.alt}
                className="h-14 sm:h-16 w-auto object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
