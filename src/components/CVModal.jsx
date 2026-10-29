import React from 'react';
import { X, Printer, Download, Phone, Mail, MapPin, GraduationCap, Code, Briefcase, Award } from 'lucide-react';
import { personalInfo, educationData, skillsData, projectsData, hobbiesData } from '../data/portfolioData';
import profilePhoto from '../assets/profile.jpg';

export default function CVModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/70 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-portfolio-sand overflow-hidden transform transition-all my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="p-4 bg-portfolio-beige border-b border-portfolio-sand flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-sm text-portfolio-dark">
              Curriculum Vitae Preview
            </span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-portfolio-primary text-white">
              Official Layout
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-portfolio-primary text-white text-xs font-bold hover:bg-portfolio-dark transition-colors shadow-sm"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save as PDF</span>
            </button>

            <a
              href="/aftab-cv.pdf"
              download="Aftab_Asghar_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-portfolio-sand text-portfolio-dark text-xs font-bold hover:bg-portfolio-surface transition-colors"
              title="Download local PDF file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-portfolio-sand text-portfolio-dark transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CV Paper Preview (Matching the exact structure and theme of the user's CV image) */}
        <div className="p-6 sm:p-10 max-h-[80vh] overflow-y-auto bg-[#FAF8F5]">
          <div className="max-w-3xl mx-auto bg-white shadow-md border border-portfolio-sand rounded-xl overflow-hidden">
            
            {/* CV Header Bar */}
            <div className="grid grid-cols-1 md:grid-cols-12 border-b border-portfolio-sand">
              
              {/* Left Brand Area (7 cols) */}
              <div className="md:col-span-7 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-portfolio-sand">
                <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#5C3A21] tracking-tight uppercase">
                  {personalInfo.name}
                </h1>
                <div className="w-20 h-0.5 bg-[#5C3A21] mt-2 mb-3"></div>
                <div className="text-xs font-bold tracking-[0.25em] text-portfolio-dark uppercase">
                  Under Graduate
                </div>
              </div>

              {/* Right Contact Info (5 cols) matching CV badge */}
              <div className="md:col-span-5 p-6 bg-[#FAF7F2] flex flex-col justify-center space-y-2.5 text-xs">
                <div className="flex items-center gap-2.5 text-portfolio-dark">
                  <Phone className="w-4 h-4 text-[#5C3A21] shrink-0" />
                  <span className="font-bold">{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2.5 text-portfolio-dark">
                  <Mail className="w-4 h-4 text-[#5C3A21] shrink-0" />
                  <span className="font-semibold break-all">{personalInfo.email}</span>
                </div>
                <div className="flex items-start gap-2.5 text-portfolio-dark">
                  <MapPin className="w-4 h-4 text-[#5C3A21] shrink-0 mt-0.5" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

            </div>

            {/* CV Main Body Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12">
              
              {/* Left Column (5 cols): Profile & Education */}
              <div className="md:col-span-5 bg-[#5C3A21] text-white p-6 sm:p-8 space-y-6">
                
                {/* Profile Avatar Frame */}
                <div className="w-32 h-32 rounded-full border-4 border-white/80 mx-auto overflow-hidden bg-[#784C28] flex items-center justify-center shadow-lg">
                  <img src={profilePhoto} alt={personalInfo.name} className="w-full h-full object-cover object-[center_18%]" />
                </div>

                {/* Profile Narrative */}
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] border-b border-white/30 pb-1 mb-2 text-portfolio-accent">
                    Profile
                  </h2>
                  <p className="text-[11px] leading-relaxed text-white/90">
                    {personalInfo.bio}
                  </p>
                </div>

                {/* Education Section */}
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] border-b border-white/30 pb-1 mb-3 text-portfolio-accent">
                    Education
                  </h2>
                  <div className="space-y-3.5 text-xs">
                    {educationData.map((edu) => (
                      <div key={edu.id} className="border-b border-white/10 pb-2 last:border-b-0">
                        <div className="font-bold text-white text-[11px]">
                          {edu.degree}
                        </div>
                        <div className="text-[10px] text-portfolio-sand italic">
                          {edu.institution} ({edu.duration})
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column (7 cols): Skills, Projects, Hobbies */}
              <div className="md:col-span-7 p-6 sm:p-8 space-y-6 bg-white">
                
                {/* Skills */}
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] border-b-2 border-[#5C3A21] pb-1 mb-3 text-portfolio-dark">
                    Skills
                  </h2>
                  <ul className="space-y-1.5 text-xs text-portfolio-dark">
                    {skillsData.map((s, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5C3A21]"></span>
                        <span className="font-semibold">{s.name}</span>
                        {s.subtitle && <span className="text-portfolio-muted text-[11px]">({s.subtitle})</span>}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Projects */}
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] border-b-2 border-[#5C3A21] pb-1 mb-3 text-portfolio-dark">
                    Projects
                  </h2>
                  <div className="space-y-2.5 text-xs">
                    {projectsData.map((p) => (
                      <div key={p.id}>
                        <div className="font-bold text-portfolio-dark flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5C3A21]"></span>
                          <span>{p.title}</span>
                          <span className="text-[10px] font-normal text-portfolio-muted">({p.badge})</span>
                        </div>
                        <p className="text-[11px] text-portfolio-muted pl-3 leading-tight mt-0.5">
                          {p.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hobbies & Interests */}
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-[0.2em] border-b-2 border-[#5C3A21] pb-1 mb-3 text-portfolio-dark">
                    Hobbies & Interests
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {hobbiesData.map((h, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 rounded-md border border-portfolio-sand text-xs font-medium text-portfolio-dark bg-[#FAF8F5]"
                      >
                        {h.name}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
