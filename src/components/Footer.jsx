import React from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-portfolio-dark text-white pt-14 pb-8 border-t border-[#5C3A21]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10 items-center">
          
          {/* Brand & Tagline (5 cols) */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-portfolio-accent text-portfolio-dark flex items-center justify-center font-bold text-sm">
                AA
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-white/70 text-xs sm:text-sm max-w-sm">
              Undergraduate Computer Science Student at Riphah International University passionate about building practical software.
            </p>
          </div>

          {/* Quick Navigation Links (5 cols) */}
          <div className="md:col-span-5">
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-white/80">
              <a href="#home" className="hover:text-portfolio-accent transition-colors">Home</a>
              <a href="#about" className="hover:text-portfolio-accent transition-colors">About</a>
              <a href="#skills" className="hover:text-portfolio-accent transition-colors">Skills</a>
              <a href="#projects" className="hover:text-portfolio-accent transition-colors">Projects</a>
              <a href="#education" className="hover:text-portfolio-accent transition-colors">Education</a>
              <a href="#hobbies" className="hover:text-portfolio-accent transition-colors">Hobbies</a>
              <a href="#contact" className="hover:text-portfolio-accent transition-colors">Contact</a>
            </nav>
          </div>

          {/* Scroll to Top (2 cols) */}
          <div className="md:col-span-2 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-white/10 hover:bg-portfolio-accent hover:text-portfolio-dark text-white transition-all duration-200"
              aria-label="Scroll to top"
              title="Scroll to Top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <span className="text-portfolio-accent font-bold">React & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
