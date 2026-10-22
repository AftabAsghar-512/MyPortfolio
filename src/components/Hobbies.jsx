import React from 'react';
import { Heart, Bike, Palette, Trophy, Activity, CodeXml } from 'lucide-react';
import { hobbiesData } from '../data/portfolioData';

export default function Hobbies() {
  const iconMap = {
    CodeXml: CodeXml,
    Bike: Bike,
    Palette: Palette,
    Activity: Activity,
    Trophy: Trophy,
  };

  return (
    <section id="hobbies" className="py-20 bg-portfolio-beige/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-portfolio-sand text-portfolio-primary text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
            <Heart className="w-3.5 h-3.5 text-portfolio-primary" />
            <span>Beyond Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-portfolio-dark tracking-tight">
            Hobbies & <span className="text-portfolio-primary">Personal Interests</span>
          </h2>
          <p className="mt-3 text-portfolio-muted text-sm sm:text-base">
            Activities that keep me energized, creative, and physically balanced.
          </p>
          <div className="w-16 h-1 bg-portfolio-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Hobbies Cards Grid (5 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {hobbiesData.map((hobby, idx) => {
            const IconComponent = iconMap[hobby.icon] || Activity;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-portfolio-sand shadow-sm hover:shadow-warm transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-2xl bg-portfolio-beige text-portfolio-primary flex items-center justify-center mb-5 group-hover:bg-portfolio-primary group-hover:text-white transition-colors duration-300 shadow-sm">
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* Name */}
                <h3 className="text-lg font-heading font-bold text-portfolio-dark mb-1 group-hover:text-portfolio-primary transition-colors">
                  {hobby.name}
                </h3>

                {/* Category Pill */}
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-portfolio-beige text-portfolio-secondary mb-3">
                  {hobby.category}
                </span>

                {/* Description */}
                <p className="text-portfolio-muted text-xs leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
