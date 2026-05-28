import React, { useRef, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

interface ResultCard {
  concern: string;
  beforeDesc: string;
  afterDesc: string;
  duration: string;
}

const resultCards: ResultCard[] = [
  {
    concern: 'Fine Lines & Wrinkles',
    beforeDesc: 'Visible crow\'s feet and forehead lines',
    afterDesc: 'Smoothed texture, reduced line depth',
    duration: '8 weeks',
  },
  {
    concern: 'Uneven Skin Tone',
    beforeDesc: 'Dark spots and discoloration',
    afterDesc: 'Brighter, more even complexion',
    duration: '10 weeks',
  },
  {
    concern: 'Acne & Blemishes',
    beforeDesc: 'Active breakouts and scarring',
    afterDesc: 'Clearer skin, faded marks',
    duration: '12 weeks',
  },
  {
    concern: 'Dehydrated Skin',
    beforeDesc: 'Dull, flaky, tight-feeling skin',
    afterDesc: 'Plump, radiant, well-hydrated glow',
    duration: '6 weeks',
  },
];

export function BeforeAfterSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section
      id="before-after"
      ref={sectionRef}
      className="bg-[#F7F5F2] py-20 md:py-28"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-[#C9A96E] text-xs font-medium tracking-[0.2em] uppercase flex items-center justify-center gap-3">
            <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
            Real Results
            <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-[#2C2C2C] mt-4 mb-5" style={{ fontWeight: 400 }}>
            Transformations You Can See
          </h2>
          <p className="text-[#888888] text-base max-w-[640px] mx-auto leading-relaxed">
            Real outcomes from our personalized skin discovery protocols
          </p>
        </div>

        {/* Result Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resultCards.map((card, index) => (
            <div
              key={card.concern}
              className={`bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 rounded-2xl p-6 md:p-8 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: isInView ? `${200 + index * 100}ms` : '0ms',
                transitionDuration: '700ms',
              }}
            >
              <span className="inline-block text-[#C9A96E] text-xs font-medium tracking-[0.15em] uppercase mb-4">
                {card.duration}
              </span>
              <h3
                className="text-[#2C2C2C] text-lg font-display mb-4"
                style={{ fontWeight: 400 }}
              >
                {card.concern}
              </h3>

              <div className="space-y-3">
                <div>
                  <span className="text-[#888888] text-xs uppercase tracking-wider">
                    Before
                  </span>
                  <p className="text-[#AA8888] text-sm mt-1">
                    {card.beforeDesc}
                  </p>
                </div>
                <div className="w-8 h-px bg-[#E0D5C7]" />
                <div>
                  <span className="text-[#C9A96E] text-xs uppercase tracking-wider">
                    After
                  </span>
                  <p className="text-[#2C2C2C] text-sm mt-1">
                    {card.afterDesc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
