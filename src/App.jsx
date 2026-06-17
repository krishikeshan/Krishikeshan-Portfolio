import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import DailyWork from './components/DailyWork';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Vision from './components/Vision';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <div className="app-container">
      <div className="bg-grid"></div>
      <ThemeToggle />
      <Hero />
      <About />
      <DailyWork />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Vision />
      <Contact />
      {/* Other sections will go here */}
      <footer style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.8rem' }}>
        &copy; 2026 Ragunathan Krishikeshan. Built with Intelligence.
      </footer>
    </div>
  );
}

export default App;
