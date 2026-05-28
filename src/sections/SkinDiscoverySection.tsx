import React, { useRef, useEffect } from 'react';
import { useInView } from '../hooks/useInView';

interface TimelineStep {
  number: string;
  title: string;
  description: string;
}

const timelineSteps: TimelineStep[] = [
  {
    number: '01',
    title: 'Skin Analysis',
    description:
      'Our advanced imaging technology captures your skin\'s condition at a microscopic level, revealing concerns invisible to the naked eye.',
  },
  {
    number: '02',
    title: 'Personalized Protocol',
    description:
      'Based on your unique skin profile, we craft a tailored treatment plan combining professional-grade products and targeted therapies.',
  },
  {
    number: '03',
    title: 'Visible Transformation',
    description:
      'Track your progress with measurable results as your skin undergoes its renewal journey, revealing a healthier, more radiant complexion.',
  },
];

export function SkinDiscoverySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

  return (
    <section
      id="skin-discovery"
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
            Our Process
            <span style={{ color: '#C9A96E', fontSize: '10px' }}>&#9670;</span>
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-[#2C2C2C] mt-4 mb-5" style={{ fontWeight: 400 }}>
            The Skin Discovery Journey
          </h2>
          <p className="text-[#888888] text-base max-w-[640px] mx-auto leading-relaxed">
            A scientifically-guided path to understanding and transforming your skin
          </p>
        </div>

        {/* Timeline Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {timelineSteps.map((step, index) => (
            <div
              key={step.number}
              className={`bg-white shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1 rounded-2xl p-8 md:p-10 ${
                isInView
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: isInView ? `${200 + index * 150}ms` : '0ms',
                transitionDuration: '700ms',
              }}
            >
              <span className="text-[#C9A96E] text-5xl font-display font-light opacity-30">
                {step.number}
              </span>
              <h3
                className="text-[#2C2C2C] text-xl font-display mt-4 mb-3"
                style={{ fontWeight: 400 }}
              >
                {step.title}
              </h3>
              <p className="text-[#888888] text-sm leading-relaxed max-w-[56ch]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
