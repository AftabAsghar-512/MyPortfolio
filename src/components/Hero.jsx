import React, { useState, useRef } from 'react';
import { ArrowDown, FileText, Send, Sparkles, MapPin, GraduationCap, Code, Upload, Camera } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenCV }) {
  const [customPhoto, setCustomPhoto] = useState(null);
  const fileInputRef = useRef(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setCustomPhoto(imageUrl);
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden">
      {/* Decorative Warm Geometric Accents matching CV */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#8C5A35]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5C3A21]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute right-12 top-24 w-32 h-32 dot-pattern hidden lg:block -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-portfolio-beige border border-portfolio-sand text-portfolio-primary text-xs font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#8C5A35] animate-pulse"></span>
              <span>Available for Internships & Projects</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <span className="text-portfolio-secondary font-semibold text-lg tracking-wide">
                Welcome to my portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-portfolio-dark tracking-tight leading-[1.1]">
                Hi, I'm <span className="text-portfolio-primary underline decoration-portfolio-accent/40 decoration-4 underline-offset-8">{personalInfo.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-portfolio-secondary pt-1">
                {personalInfo.heroTitle}
              </p>
            </div>

            {/* Introduction paragraph */}
            <p className="text-portfolio-muted text-base sm:text-lg leading-relaxed max-w-2xl">
              {personalInfo.heroIntroduction}
            </p>

            {/* Key Quick Facts */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-portfolio-dark pt-1">
              <div className="flex items-center gap-1.5 bg-portfolio-beige/70 px-3 py-1.5 rounded-lg border border-portfolio-sand">
                <GraduationCap className="w-4 h-4 text-portfolio-primary" />
                <span>Riphah International University</span>
              </div>
              <div className="flex items-center gap-1.5 bg-portfolio-beige/70 px-3 py-1.5 rounded-lg border border-portfolio-sand">
                <MapPin className="w-4 h-4 text-portfolio-primary" />
                <span>D.I. Khan, Pakistan</span>
              </div>
            </div>

            {/* 3 Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-portfolio-primary text-white hover:bg-portfolio-dark shadow-warm hover:shadow-warm-lg transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-portfolio-beige text-portfolio-dark border border-portfolio-sand hover:bg-portfolio-sand/80 transition-all duration-200"
              >
                <span>Contact Me</span>
                <Send className="w-4 h-4 text-portfolio-primary" />
              </a>

              <button
                onClick={onOpenCV}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm bg-white text-portfolio-primary border-2 border-portfolio-primary/30 hover:border-portfolio-primary hover:bg-portfolio-beige/40 transition-all duration-200 shadow-sm"
              >
                <FileText className="w-4 h-4 text-portfolio-primary" />
                <span>Download CV</span>
              </button>
            </div>

          </div>

          {/* Right Column: Profile Picture Frame matching CV aesthetic (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-80 md:w-96">
              
              {/* Outer Decorative Shape inspired by CV diagonal slice */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#5C3A21] to-[#8C5A35] rounded-3xl transform rotate-3 opacity-90 shadow-2xl transition-transform hover:rotate-2"></div>
              
              {/* Main Card Frame */}
              <div className="relative bg-[#FDFBF7] p-4 rounded-3xl shadow-xl border border-portfolio-sand">
                
                {/* Circular Profile Container */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-b from-[#F4EDE4] to-[#E8DDD0] border-4 border-white shadow-inner flex flex-col items-center justify-center group">
                  
                  {customPhoto ? (
                    <img 
                      src={customPhoto} 
                      alt="Aftab Asghar" 
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    /* Clearly labeled placeholder for photograph as required */
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center space-y-3">
                      {/* Stylized monogram avatar */}
                      <div className="w-24 h-24 rounded-full bg-portfolio-primary text-portfolio-surface flex items-center justify-center shadow-md border-2 border-white">
                        <span className="font-heading font-bold text-3xl tracking-wider">AA</span>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="font-heading font-bold text-portfolio-dark text-base">
                          {personalInfo.name}
                        </div>
                        <div className="text-xs text-portfolio-secondary font-medium">
                          Photograph Slot
                        </div>
                        <p className="text-[11px] text-portfolio-muted leading-tight">
                          Place <code className="bg-white/80 px-1 py-0.5 rounded border border-portfolio-sand">profile.jpg</code> in the project or click below to preview your photo.
                        </p>
                      </div>

                      {/* Interactive upload button for user convenience */}
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-portfolio-primary text-white text-xs font-semibold shadow hover:bg-portfolio-dark transition-colors"
                      >
                        <Camera className="w-3.5 h-3.5" />
                        <span>Upload / Set Photo</span>
                      </button>
                    </div>
                  )}

                  {/* Hidden File Input */}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handlePhotoUpload}
                    accept="image/*"
                    className="hidden"
                  />

                  {/* Hover overlay if photo is uploaded */}
                  {customPhoto && (
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-2 text-white font-medium text-xs transition-opacity duration-200"
                    >
                      <Camera className="w-4 h-4" />
                      <span>Change Photo</span>
                    </button>
                  )}

                </div>

                {/* Profile Badge Overlay */}
                <div className="mt-4 p-3 bg-portfolio-beige rounded-xl border border-portfolio-sand flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-portfolio-primary text-white flex items-center justify-center font-bold text-xs">
                      CS
                    </div>
                    <div>
                      <div className="text-xs font-bold text-portfolio-dark">Computer Science</div>
                      <div className="text-[10px] text-portfolio-muted">Riphah International Univ.</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-white text-portfolio-primary border border-portfolio-sand">
                    Undergraduate
                  </span>
                </div>

              </div>

              {/* Floating Decorative Stamp */}
              <div className="absolute -bottom-5 -left-5 bg-white p-3 rounded-2xl shadow-lg border border-portfolio-sand hidden sm:flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-portfolio-accent/20 text-portfolio-primary flex items-center justify-center">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-portfolio-dark">Software Dev</div>
                  <div className="text-[10px] text-portfolio-muted">C++ • Java • Python</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
