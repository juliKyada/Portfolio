import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import { SplineSceneBasic } from './components/demo';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-pink-500/10 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <Navbar />

      <main className="container mx-auto px-6 pt-24 pb-12 overflow-hidden">
        {/* Replace old Hero with the impressive new Spline demo */}
        <motion.section 
          id="hero" 
          className="min-h-[90vh] flex items-center pt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <SplineSceneBasic />
        </motion.section>

        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>

      <footer className="border-t border-white/15 py-8 text-center text-neutral-400 mt-20">
        <p>© 2026 <span className="text-pink-400">Juli Kyada</span>. Built with 🤍</p>
      </footer>
    </div>
  );
}

export default App;
