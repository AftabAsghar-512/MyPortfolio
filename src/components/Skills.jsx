import React, { useState } from 'react';
import { 
  Code, 
  Coffee, 
  FileCode2, 
  Globe, 
  Database, 
  Smartphone, 
  Cpu, 
  Layers, 
  CheckCircle,
  Info
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [filter, setFilter] = useState('all');

  const iconComponents = {
    Code: Code,
    Coffee: Coffee,
    FileCode2: FileCode2,
    Globe: Globe,
    Database: Database,
    Smartphone: Smartphone,
  };

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'Core Languages', label: 'Core Languages' },
    { id: 'Web & UI', label: 'Web Development' },
    { id: 'Data & Systems', label: 'Database Systems' },
    { id: 'Mobile', label: 'Mobile Apps' },
  ];

  const filteredSkills = filter === 'all' 
    ? skillsData 
    : skillsData.filter(s => s.category === filter);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-portfolio-beige border border-portfolio-sand text-portfolio-primary text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-portfolio-dark tracking-tight">
            Technical <span className="text-portfolio-primary">Skills & Tooling</span>
          </h2>
          <p className="mt-3 text-portfolio-muted text-sm sm:text-base">
            Skills developed through Computer Science coursework, project implementations, and focused self-study.
          </p>
          <div className="w-16 h-1 bg-portfolio-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                filter === cat.id
                  ? 'bg-portfolio-primary text-white shadow-warm'
                  : 'bg-portfolio-beige/60 text-portfolio-dark hover:bg-portfolio-sand border border-portfolio-sand'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => {
            const Icon = iconComponents[skill.icon] || Code;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-portfolio-sand shadow-sm hover:shadow-warm transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-portfolio-beige text-portfolio-primary flex items-center justify-center group-hover:bg-portfolio-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-portfolio-beige text-portfolio-secondary border border-portfolio-sand/80">
                      {skill.level}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-heading font-bold text-portfolio-dark group-hover:text-portfolio-primary transition-colors">
                    {skill.name}
                  </h3>
                  {skill.subtitle && (
                    <div className="text-xs font-medium text-portfolio-accent">
                      {skill.subtitle}
                    </div>
                  )}

                  <p className="mt-2 text-portfolio-muted text-xs sm:text-sm leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Progress / Proficiency Indicator Bar (Editable Placeholder) */}
                <div className="mt-6 pt-4 border-t border-portfolio-sand/60">
                  <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                    <span className="text-portfolio-secondary">Practical Proficiency</span>
                    <span className="text-portfolio-primary font-bold">{skill.proficiencyScore}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-portfolio-beige overflow-hidden border border-portfolio-sand/60">
                    <div
                      className="h-full bg-gradient-to-r from-portfolio-secondary to-portfolio-primary rounded-full transition-all duration-700"
                      style={{ width: `${skill.proficiencyScore}%` }}
                    />
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-[10px] text-portfolio-muted">
                    <Info className="w-3 h-3 text-portfolio-accent shrink-0" />
                    <span>Academic & Project Proficiency Level (Editable)</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Informative Note */}
        <div className="mt-12 p-4 rounded-2xl bg-portfolio-beige/70 border border-portfolio-sand flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-portfolio-primary text-white flex items-center justify-center shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-portfolio-dark">Honest Academic Representation</div>
              <div className="text-[11px] text-portfolio-muted">
                Proficiency scores are illustrative academic indicators reflecting coursework and project implementation.
              </div>
            </div>
          </div>
          <a
            href="#projects"
            className="text-xs font-bold text-portfolio-primary hover:text-portfolio-dark underline underline-offset-4 shrink-0"
          >
            See how these skills are used in Projects &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
