import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Eye, 
  Gamepad2, 
  Building2, 
  Smartphone, 
  Car, 
  Sparkles,
  ArrowRight,
  FileText,
  ShieldCheck
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Custom visual thumbnail generator for each project
  const renderThumbnail = (project) => {
    switch (project.id) {
      case 'doc-signer-pro':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-[#2A1C12] via-[#5C3A21] to-[#8C5A35] flex items-center justify-center p-6 relative overflow-hidden group">
            <div className="absolute inset-0 dot-pattern opacity-20"></div>
            <div className="w-11/12 max-w-xs bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg transform group-hover:scale-105 transition-transform duration-300 text-white">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-xs">
                <span className="font-bold flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-portfolio-accent" />
                  Doc Signer Pro
                </span>
                <span className="px-2 py-0.5 rounded-full bg-sky-500/30 text-sky-200 font-bold text-[10px]">
                  Microsoft Store
                </span>
              </div>
              <div className="space-y-1.5 text-[11px] text-white/80">
                <div className="flex justify-between items-center bg-black/25 p-2 rounded-xl">
                  <span className="font-mono text-emerald-300 text-[11px] flex items-center gap-1 font-semibold">
                    ✓ Cryptographically Signed
                  </span>
                  <span className="text-[10px] text-portfolio-sand">PDF • SHA-256</span>
                </div>
              </div>
            </div>
            <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white/90 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-portfolio-accent" />
              <span>Published on Microsoft Platform</span>
            </div>
          </div>
        );
      case 'candy-crush':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-[#4A2C16] via-[#6D4427] to-[#8C5A35] flex items-center justify-center p-6 relative overflow-hidden group">
            {/* Background grid styling */}
            <div className="absolute inset-0 dot-pattern opacity-20"></div>
            {/* Interactive Grid Simulation */}
            <div className="grid grid-cols-4 gap-2.5 p-3 rounded-2xl bg-black/25 backdrop-blur-md border border-white/20 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
              <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center shadow-md animate-pulse">💎</div>
              <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center shadow-md">⭐</div>
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center shadow-md">🟢</div>
              <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center shadow-md">🔷</div>
              <div className="w-8 h-8 rounded-lg bg-purple-500 flex items-center justify-center shadow-md">🍇</div>
              <div className="w-8 h-8 rounded-lg bg-red-500 flex items-center justify-center shadow-md">💎</div>
              <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center shadow-md">⭐</div>
              <div className="w-8 h-8 rounded-lg bg-pink-500 flex items-center justify-center shadow-md">🍬</div>
            </div>
            <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white/90 text-xs font-semibold">
              <Gamepad2 className="w-4 h-4 text-portfolio-accent" />
              <span>C++ / OOP Logic Mechanics</span>
            </div>
          </div>
        );

      case 'hotel-booking':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-[#3B2314] via-[#5C3A21] to-[#784C28] flex items-center justify-center p-6 relative overflow-hidden group">
            <div className="absolute inset-0 dot-pattern opacity-20"></div>
            <div className="w-11/12 max-w-xs bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-white text-xs">
                <span className="font-bold flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-portfolio-accent" />
                  Room Inventory #104
                </span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 font-bold text-[10px]">
                  Available
                </span>
              </div>
              <div className="space-y-1.5 text-[11px] text-white/80">
                <div className="flex justify-between">
                  <span>Type: Deluxe King</span>
                  <span className="font-semibold text-portfolio-accent">PKR 7,500</span>
                </div>
                <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-portfolio-accent h-full w-3/4"></div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white/90 text-xs font-semibold">
              <Building2 className="w-4 h-4 text-portfolio-accent" />
              <span>Database & Reservation Core</span>
            </div>
          </div>
        );

      case 'buddy-bills':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-[#5C3A21] via-[#8C5A35] to-[#B07D56] flex items-center justify-center p-6 relative overflow-hidden group">
            <div className="absolute inset-0 dot-pattern opacity-20"></div>
            <div className="w-64 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/20 shadow-lg transform group-hover:scale-105 transition-transform duration-300 text-white">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-bold">Trip Expense Split</span>
                <span className="text-emerald-300 font-bold">Paid</span>
              </div>
              <div className="flex items-center justify-between bg-black/20 p-2 rounded-xl text-[11px]">
                <span>Total Amount:</span>
                <span className="font-bold text-portfolio-accent">Rs. 12,400</span>
              </div>
              <div className="flex justify-between items-center mt-2 text-[10px] text-white/80">
                <span>Split with 4 Buddies</span>
                <span className="text-white font-semibold">Rs. 3,100 / person</span>
              </div>
            </div>
            <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white/90 text-xs font-semibold">
              <Smartphone className="w-4 h-4 text-portfolio-accent" />
              <span>Mobile Expense Tracker</span>
            </div>
          </div>
        );

      case 'car-game-unity':
        return (
          <div className="w-full h-48 bg-gradient-to-br from-[#2A1C12] via-[#4A2C16] to-[#6D4427] flex items-center justify-center p-6 relative overflow-hidden group">
            <div className="absolute inset-0 dot-pattern opacity-20"></div>
            <div className="relative flex flex-col items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
              <div className="w-24 h-24 rounded-full border-4 border-dashed border-portfolio-accent/60 flex items-center justify-center bg-black/30 backdrop-blur-sm shadow-xl">
                <Car className="w-12 h-12 text-portfolio-accent animate-bounce" />
              </div>
              <div className="mt-2 px-3 py-1 rounded-full bg-black/40 text-[11px] font-mono text-emerald-400 font-bold border border-white/10">
                SPEED: 142 KM/H • LAP 1
              </div>
            </div>
            <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white/90 text-xs font-semibold">
              <Car className="w-4 h-4 text-portfolio-accent" />
              <span>Unity Physics Engine (C#)</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 bg-portfolio-beige/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-portfolio-sand text-portfolio-primary text-xs font-bold tracking-wider uppercase mb-3 shadow-sm">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-portfolio-dark tracking-tight">
            Academic & Practical <span className="text-portfolio-primary">Projects</span>
          </h2>
          <p className="mt-3 text-portfolio-muted text-sm sm:text-base">
            Each project demonstrates my progression in programming fundamentals, object-oriented design, databases, and application development.
          </p>
          <div className="w-16 h-1 bg-portfolio-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-3xl overflow-hidden border border-portfolio-sand shadow-sm hover:shadow-warm-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Thumbnail */}
                {renderThumbnail(project)}

                {/* Card Content */}
                <div className="p-6 sm:p-8">
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-portfolio-secondary">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-portfolio-beige text-portfolio-primary font-bold text-[10px] border border-portfolio-sand">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-heading font-bold text-portfolio-dark group-hover:text-portfolio-primary transition-colors mb-3">
                    {project.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-portfolio-muted text-sm leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-portfolio-surface text-portfolio-dark text-xs font-medium border border-portfolio-sand/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="px-6 sm:px-8 pb-6 pt-2 border-t border-portfolio-sand/60 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-portfolio-primary text-white hover:bg-portfolio-dark transition-colors shadow-sm"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Details</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-portfolio-beige hover:bg-portfolio-sand text-portfolio-dark border border-portfolio-sand transition-colors"
                    title="GitHub Repository (Editable placeholder)"
                  >
                    <Github className="w-4 h-4" />
                  </a>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-portfolio-beige hover:bg-portfolio-sand text-portfolio-dark border border-portfolio-sand transition-colors"
                      title="Live Demo (Editable placeholder)"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal display when a project is selected */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
