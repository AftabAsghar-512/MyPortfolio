import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Code, Sparkles, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenCV }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'hobbies', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Hobbies', href: '#hobbies', id: 'hobbies' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-nav shadow-warm border-b border-[#E8DDD0]/80 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-portfolio-primary text-portfolio-surface flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-portfolio-dark transition-colors duration-300">
              AA
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-xl text-portfolio-dark tracking-tight leading-none group-hover:text-portfolio-primary transition-colors">
                {personalInfo.name}
              </span>
              <span className="text-[11px] font-medium text-portfolio-muted tracking-wider uppercase mt-1">
                CS Student & Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#F4EDE4]/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#E8DDD0]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-portfolio-primary text-white shadow-sm'
                      : 'text-portfolio-dark hover:text-portfolio-primary hover:bg-[#E8DDD0]/50'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenCV}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-portfolio-primary text-white hover:bg-portfolio-dark shadow-sm hover:shadow-warm transition-all duration-200"
              title="View or Download CV"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume / CV</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenCV}
              className="p-2 rounded-lg bg-portfolio-beige text-portfolio-primary border border-portfolio-sand text-xs font-bold"
              aria-label="View CV"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-portfolio-beige text-portfolio-dark hover:bg-portfolio-sand focus:outline-none transition-colors border border-portfolio-sand"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#FDFBF7] border-b border-[#E8DDD0] shadow-xl p-5 transition-all">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-portfolio-primary text-white'
                      : 'text-portfolio-dark hover:bg-portfolio-beige'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-70" />
                </a>
              );
            })}
            <div className="pt-2 border-t border-portfolio-sand mt-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenCV();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-portfolio-primary text-white"
              >
                <Download className="w-4 h-4" />
                <span>View & Download CV</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
