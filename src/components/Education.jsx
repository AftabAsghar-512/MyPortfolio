import React from 'react';
import { GraduationCap, Calendar, Award, Building, Sparkles } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-portfolio-beige border border-portfolio-sand text-portfolio-primary text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-portfolio-dark tracking-tight">
            Education <span className="text-portfolio-primary">& Qualifications</span>
          </h2>
          <p className="mt-3 text-portfolio-muted text-sm sm:text-base">
            My formal learning path from secondary school to ongoing university studies in Computer Science.
          </p>
          <div className="w-16 h-1 bg-portfolio-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-[#8C5A35]/30 ml-4 md:ml-32 space-y-12">
          {educationData.map((item, idx) => (
            <div key={item.id} className="relative pl-8 md:pl-10 group">
              
              {/* Timeline Marker Node */}
              <div className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-4 border-[#FDFBF7] flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110 ${
                item.isCurrent 
                  ? 'bg-portfolio-primary text-white ring-4 ring-portfolio-accent/20 animate-pulse' 
                  : 'bg-portfolio-secondary text-white'
              }`}>
                <GraduationCap className="w-3.5 h-3.5" />
              </div>

              {/* Date Tag for Desktop (Shown on the left on larger screens) */}
              <div className="hidden md:block absolute -left-36 top-2 text-right w-24">
                <span className={`text-xs font-bold px-2 py-1 rounded-lg ${
                  item.isCurrent 
                    ? 'bg-portfolio-primary text-white' 
                    : 'bg-portfolio-beige text-portfolio-dark border border-portfolio-sand'
                }`}>
                  {item.duration.includes('cont') ? 'Present' : item.duration}
                </span>
              </div>

              {/* Education Card */}
              <div className={`rounded-3xl p-6 sm:p-8 border transition-all duration-300 shadow-sm hover:shadow-warm ${
                item.isCurrent
                  ? 'bg-white border-portfolio-primary/40 ring-1 ring-portfolio-primary/20'
                  : 'bg-white/90 border-portfolio-sand'
              }`}>
                {/* Mobile Duration & Status Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="md:hidden flex items-center gap-1.5 text-xs font-bold text-portfolio-secondary bg-portfolio-beige px-2.5 py-1 rounded-md">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.duration}</span>
                  </div>

                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${
                    item.isCurrent
                      ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      : 'bg-portfolio-beige text-portfolio-muted border border-portfolio-sand'
                  }`}>
                    {item.status}
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-portfolio-dark mb-1">
                  {item.degree}
                </h3>

                {/* Institution Name */}
                <div className="flex items-center gap-2 text-sm font-semibold text-portfolio-primary mb-4">
                  <Building className="w-4 h-4" />
                  <span>{item.institution}</span>
                </div>

                {/* Description */}
                <p className="text-portfolio-muted text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Highlight Tag */}
                <div className="mt-4 pt-3 border-t border-portfolio-sand/60 flex items-center gap-2 text-xs font-semibold text-portfolio-secondary">
                  <Award className="w-4 h-4 text-portfolio-accent" />
                  <span>{item.highlight}</span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
