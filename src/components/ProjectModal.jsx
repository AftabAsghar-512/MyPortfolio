import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, BookOpen, Layers, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-portfolio-sand overflow-hidden transform transition-all duration-300 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Project Gradient Banner */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.gradient} text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider mb-3">
            {project.badge}
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold tracking-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-white/80 text-xs sm:text-sm">
            {project.category}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Academic Context Notice */}
          <div className="flex items-center gap-2.5 p-3 rounded-xl bg-portfolio-beige border border-portfolio-sand text-portfolio-primary text-xs font-semibold">
            <BookOpen className="w-4 h-4 shrink-0" />
            <span>{project.academicContext}</span>
          </div>

          {/* Detailed Narrative */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-portfolio-secondary mb-2">
              Project Overview
            </h4>
            <p className="text-portfolio-dark/85 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Implemented Features */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-portfolio-secondary mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-portfolio-primary" />
              <span>Key Highlights & Mechanics</span>
            </h4>
            <div className="space-y-2.5">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-portfolio-dark">
                  <CheckCircle2 className="w-4 h-4 text-portfolio-primary shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-portfolio-secondary mb-2.5">
              Technologies & Methodologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-portfolio-beige text-portfolio-dark text-xs font-semibold border border-portfolio-sand"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-4 border-t border-portfolio-sand">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-portfolio-primary text-white hover:bg-portfolio-dark shadow-sm transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>

              {project.demoUrl && project.demoUrl !== '#' && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-portfolio-beige text-portfolio-dark border border-portfolio-sand hover:bg-portfolio-sand transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{project.id === 'doc-signer-pro' ? 'View on Microsoft' : 'Live Demo'}</span>
                </a>
              )}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-portfolio-beige/60 border-t border-portfolio-sand flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-portfolio-dark hover:bg-portfolio-sand transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
