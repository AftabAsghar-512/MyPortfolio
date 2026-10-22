import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CVModal from './components/CVModal';

export default function App() {
  const [isCVOpen, setIsCVOpen] = useState(false);

  return (
    <div className="min-h-screen bg-portfolio-surface text-portfolio-dark font-sans flex flex-col selection:bg-portfolio-primary selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenCV={() => setIsCVOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenCV={() => setIsCVOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Hobbies />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* CV Preview & Print Modal */}
      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </div>
  );
}
