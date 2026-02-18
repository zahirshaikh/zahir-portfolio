
import React, { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import ScrollReveal from './components/ScrollReveal';
import Lenis from 'lenis';

const App: React.FC = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    (window as any).lenis = lenis;

    const handleScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        const scrollPosition = window.scrollY;
        // Hide header as soon as we scroll past the hero section (minus some buffer)
        setIsHeaderVisible(scrollPosition < heroHeight - 80);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      lenis.destroy();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if ((window as any).lenis) {
        (window as any).lenis.scrollTo(element);
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-black selection:text-white">
      {/* Header */}
      <header className="w-full flex items-center px-6 md:px-12 pt-4 pb-0 bg-transparent relative z-50">
        <div 
          className="w-10 h-10 bg-black flex items-center justify-center text-white text-xl font-bold font-serif cursor-pointer shadow-sm hover:scale-105 transition-transform shrink-0" 
          onClick={() => scrollToSection('hero')}
        >
          Z
        </div>
        
        <div className="flex-1 flex justify-end pr-3 md:pr-24 lg:pr-48">
          <Navbar onNavigate={scrollToSection} />
        </div>
        
        <a 
          href="https://github.com/zahirshaikh" 
          target="_blank" 
          className="text-black/80 hover:text-black transition-all transform hover:scale-110 shrink-0" 
          aria-label="GitHub"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      </header>

      {/* Main Sections */}
      <main className="flex-1">
        <section ref={heroRef} id="hero" className="min-h-[calc(100dvh-80px)] min-[950px]:h-auto flex items-center px-6 md:px-12 pt-16 min-[950px]:pt-0 pb-12 md:pb-24 overflow-hidden">
          <ScrollReveal className="w-full">
            <Hero />
          </ScrollReveal>
        </section>
        
        <section id="about" className="h-auto flex items-center px-6 md:px-12 py-16 md:py-32 bg-white/30 border-y border-black/5">
          <ScrollReveal className="w-full">
            <About />
          </ScrollReveal>
        </section>
        
        <section id="projects" className="h-auto flex items-center px-6 md:px-12 py-16 md:py-32">
          <ScrollReveal className="w-full">
            <Projects />
          </ScrollReveal>
        </section>
        
        <section id="contact" className="h-auto flex items-center px-6 md:px-12 py-16 md:py-32 bg-[#1a1a1a] text-white">
          <ScrollReveal className="w-full">
            <Contact />
          </ScrollReveal>
        </section>
      </main>

      <footer className="bg-[#1a1a1a] text-white/40 text-[10px] uppercase tracking-[0.3em] flex flex-col items-center py-12 border-t border-white/5 gap-6">
        <div className="flex gap-8">
          <a href="https://linkedin.com/in/zahirshaikhedu" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://github.com/zahirshaikh" target="_blank" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://x.com/zahirshaikh_" target="_blank" className="hover:text-white transition-colors">X</a>
        </div>
        <div className="text-center">
          &copy; {new Date().getFullYear()} Zahir Shaikh — .NET Fullstack Engineer
        </div>
      </footer>
    </div>
  );
};

export default App;