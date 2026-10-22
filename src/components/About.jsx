import React from 'react';
import { GraduationCap, Code2, Brain, Sparkles, BookOpen, Target, CheckCircle2 } from 'lucide-react';
import { aboutCards, personalInfo } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    GraduationCap: GraduationCap,
    Code2: Code2,
    Brain: Brain,
    Sparkles: Sparkles,
  };

  return (
    <section id="about" className="py-20 bg-portfolio-beige/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-portfolio-sand text-portfolio-primary text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
            <BookOpen className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-portfolio-dark tracking-tight">
            Building Foundations in <span className="text-portfolio-primary">Computer Science</span>
          </h2>
          <div className="w-16 h-1 bg-portfolio-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Narrative & Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Main Story Box (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-warm border border-portfolio-sand flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-heading font-bold text-portfolio-dark">
                Academic Background & Career Passion
              </h3>
              
              <p className="text-portfolio-dark/80 text-base sm:text-lg leading-relaxed">
                I am an undergraduate Computer Science student at <strong className="text-portfolio-primary">Riphah International University</strong>. I have experience working on academic projects involving programming, databases, mobile application development, and game development. I am continuously improving my technical skills and looking for opportunities to learn, collaborate, and grow as a software developer.
              </p>

              <p className="text-portfolio-muted text-sm sm:text-base leading-relaxed">
                My approach to computing centers around writing clean, readable logic and understanding what happens beneath the abstractions. From implementing match-3 grid physics in C++ to structuring relational schemas for booking systems, I love turning academic concepts into functioning digital tools.
              </p>

              {/* What I Bring to a Team */}
              <div className="pt-2">
                <div className="text-xs font-bold uppercase tracking-wider text-portfolio-secondary mb-3">
                  Core Focus Areas
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    "Object-Oriented Programming (OOP)",
                    "Data Structures & Logic Design",
                    "Database Schema & SQL Queries",
                    "Mobile & Web Applications",
                    "Game Prototyping in Unity",
                    "Collaborative Problem Solving"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-medium text-portfolio-dark">
                      <CheckCircle2 className="w-4 h-4 text-portfolio-primary shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Quote / Mission */}
            <div className="mt-8 pt-6 border-t border-portfolio-sand flex items-center justify-between">
              <div>
                <span className="text-xs text-portfolio-muted">Current Status</span>
                <div className="font-bold text-sm text-portfolio-dark">Active Undergraduate Student</div>
              </div>
              <div className="text-right">
                <span className="text-xs text-portfolio-muted">Target Objective</span>
                <div className="font-bold text-sm text-portfolio-primary">Software Dev Internships & Roles</div>
              </div>
            </div>
          </div>

          {/* Quick Info Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-portfolio-primary to-portfolio-dark text-white rounded-3xl p-8 sm:p-10 shadow-warm-lg flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-portfolio-accent mb-6">
                <Target className="w-6 h-6" />
              </div>

              <h4 className="text-xl font-heading font-bold text-white mb-2">
                Aftab's Academic Profile
              </h4>
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                Bridging academic theory with hands-on project implementations.
              </p>

              <div className="space-y-4 text-sm">
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="text-white/60 text-xs font-medium">Institution</div>
                  <div className="text-white font-semibold">Riphah International University</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="text-white/60 text-xs font-medium">Degree Program</div>
                  <div className="text-white font-semibold">BS in Computer Science (cont..)</div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10">
                  <div className="text-white/60 text-xs font-medium">Location</div>
                  <div className="text-white font-semibold">D.I. Khan, Khyber Pakhtunkhwa</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 text-xs text-white/70">
              Ready to adapt, learn new tech stacks, and contribute positive energy to developer teams.
            </div>
          </div>

        </div>

        {/* 4 Feature Cards Required */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutCards.map((card) => {
            const IconComponent = iconMap[card.icon] || Code2;
            return (
              <div
                key={card.id}
                className="bg-white rounded-2xl p-6 border border-portfolio-sand shadow-sm hover:shadow-warm transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-portfolio-beige text-portfolio-primary flex items-center justify-center group-hover:bg-portfolio-primary group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-portfolio-beige text-portfolio-secondary">
                      {card.tag}
                    </span>
                  </div>

                  <h4 className="text-lg font-heading font-bold text-portfolio-dark mb-2 group-hover:text-portfolio-primary transition-colors">
                    {card.title}
                  </h4>

                  <p className="text-portfolio-muted text-xs sm:text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-portfolio-sand/60 flex items-center gap-1.5 text-xs font-semibold text-portfolio-primary">
                  <span>Explore in Portfolio</span>
                  <span>&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
