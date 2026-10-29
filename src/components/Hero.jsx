import React, { useState, useRef } from 'react';
import { 
  ArrowDown, 
  FileText, 
  Send, 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  Code, 
  Camera, 
  ShieldCheck, 
  ExternalLink,
  Briefcase,
  Layers,
  Award
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import profilePhoto from '../assets/profile.jpg';

export default function Hero({ onOpenCV }) {
  const [currentPhoto, setCurrentPhoto] = useState(profilePhoto);
  const fileInputRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCurrentPhoto(imageUrl);
    }
  };

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute top-12 right-[-5%] w-[500px] h-[500px] bg-gradient-to-br from-[#8C5A35]/20 via-[#C68B59]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-gradient-to-tr from-[#5C3A21]/15 via-[#8C5A35]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute right-16 top-28 w-40 h-40 dot-pattern hidden lg:block -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Live Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 border border-portfolio-sand/80 text-portfolio-primary text-xs font-bold tracking-wide shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Available for Software Internships & Projects</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-portfolio-secondary font-semibold text-base sm:text-lg tracking-wide">
                <Sparkles className="w-4 h-4 text-portfolio-accent" />
                <span>Hello, Welcome to my official space</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-portfolio-dark tracking-tight leading-[1.12]">
                I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5C3A21] via-[#8C5A35] to-[#B07D56]">{personalInfo.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-portfolio-secondary">
                Undergraduate Computer Science Student <span className="text-portfolio-accent font-normal">|</span> Aspiring Software Developer
              </p>
            </div>

            {/* Introduction paragraph */}
            <p className="text-portfolio-muted text-base sm:text-lg leading-relaxed max-w-2xl">
              {personalInfo.heroIntroduction}
            </p>

            {/* Academic & Location Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-portfolio-dark">
              <div className="flex items-center gap-2 bg-white/80 px-3.5 py-2 rounded-xl border border-portfolio-sand shadow-sm">
                <GraduationCap className="w-4 h-4 text-portfolio-primary" />
                <span>Riphah International University</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-3.5 py-2 rounded-xl border border-portfolio-sand shadow-sm">
                <MapPin className="w-4 h-4 text-portfolio-primary" />
                <span>D.I. Khan, KPK, Pakistan</span>
              </div>
              <div className="flex items-center gap-2 bg-portfolio-beige px-3.5 py-2 rounded-xl border border-portfolio-sand text-portfolio-primary font-bold shadow-sm">
                <ShieldCheck className="w-4 h-4 text-portfolio-accent" />
                <span>Microsoft Store Publisher</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-portfolio-primary to-[#784C28] text-white hover:from-portfolio-dark hover:to-portfolio-primary shadow-warm hover:shadow-warm-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Explore My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-portfolio-beige text-portfolio-dark border border-portfolio-sand hover:bg-portfolio-sand transition-all duration-200"
              >
                <span>Get In Touch</span>
                <Send className="w-4 h-4 text-portfolio-primary" />
              </a>

              <button
                onClick={onOpenCV}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-white text-portfolio-primary border-2 border-portfolio-primary/30 hover:border-portfolio-primary hover:bg-portfolio-beige/50 transition-all duration-200 shadow-sm"
              >
                <FileText className="w-4 h-4 text-portfolio-primary" />
                <span>View & Download CV</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="w-full pt-6 mt-4 border-t border-portfolio-sand/80 grid grid-cols-3 gap-4 text-center sm:text-left max-w-xl">
              <div>
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-portfolio-primary">5+</div>
                <div className="text-[11px] sm:text-xs font-semibold text-portfolio-muted uppercase tracking-wider">Built Projects</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-portfolio-secondary">6+</div>
                <div className="text-[11px] sm:text-xs font-semibold text-portfolio-muted uppercase tracking-wider">Tech Stacks</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-portfolio-accent">1</div>
                <div className="text-[11px] sm:text-xs font-semibold text-portfolio-muted uppercase tracking-wider">Microsoft App</div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Profile Picture Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-80 sm:w-96">
              
              {/* Outer Decorative Gradient Backing */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#5C3A21] via-[#8C5A35] to-[#C68B59] rounded-3xl transform rotate-3 opacity-90 shadow-2xl transition-transform duration-500 hover:rotate-1"></div>
              
              {/* Main Card Frame */}
              <div className="relative bg-[#FDFBF7] p-4 rounded-3xl shadow-2xl border border-portfolio-sand">
                
                {/* Profile Photo Container */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-[#F4EDE4] to-[#E8DDD0] border-4 border-white shadow-inner group">
                  <img 
                    src={currentPhoto} 
                    alt="Aftab Asghar" 
                    className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Light Vignette at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>

                  {/* Bottom Portrait Name Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <div className="font-heading font-extrabold text-lg drop-shadow-md">
                      Aftab Asghar
                    </div>
                    <div className="text-xs text-portfolio-sand flex items-center gap-1.5 drop-shadow-sm font-medium">
                      <span>BS Computer Science</span>
                      <span>•</span>
                      <span>Software Developer</span>
                    </div>
                  </div>

                  {/* Optional Change Photo Overlay */}
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute top-3 right-3 p-2 rounded-xl bg-black/40 hover:bg-black/70 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    title="Change or upload custom photo"
                  >
                    <Camera className="w-4 h-4" />
                  </button>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handlePhotoUpload}
                    accept="image/*"
                    className="hidden"
                  />
                </div>

                {/* Sub-card: University & Degree */}
                <div className="mt-3.5 p-3 rounded-2xl bg-portfolio-beige border border-portfolio-sand flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-portfolio-primary text-white flex items-center justify-center font-bold text-xs shadow-sm">
                      RIU
                    </div>
                    <div>
                      <div className="text-xs font-bold text-portfolio-dark">Riphah International Univ.</div>
                      <div className="text-[10px] text-portfolio-muted font-medium">Bachelor of Science in CS</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-portfolio-primary border border-portfolio-sand shadow-sm">
                    Student
                  </span>
                </div>

              </div>

              {/* Floating Badge 1: Microsoft Verified */}
              <div className="absolute -top-4 -left-4 bg-white p-3 rounded-2xl shadow-xl border border-portfolio-sand hidden sm:flex items-center gap-2.5 animate-bounce-subtle">
                <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-portfolio-dark">Doc Signer Pro</div>
                  <div className="text-[10px] text-sky-700 font-semibold">Published on Microsoft</div>
                </div>
              </div>

              {/* Floating Badge 2: Stacks */}
              <div className="absolute -bottom-5 -right-3 bg-white p-3 rounded-2xl shadow-xl border border-portfolio-sand hidden sm:flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-portfolio-primary text-white flex items-center justify-center">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-portfolio-dark">Core Computing</div>
                  <div className="text-[10px] text-portfolio-muted font-medium">C++ • Java • Python • .NET</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
