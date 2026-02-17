
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto text-center animate-in fade-in duration-1000">
      <h2 className="text-5xl md:text-8xl serif mb-10 leading-tight">
        Let's build <br /> together.
      </h2>
      
      <div className="space-y-12">
        <p className="text-white/60 text-sm md:text-lg leading-relaxed tracking-wide font-light max-w-xl mx-auto">
          Currently based in Pune. I'm available for engineering roles, technical consultations, or collaborative open-source projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <a 
            href="mailto:zahirshaikhedu@gmail.com" 
            className="p-10 border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-500 group flex flex-col items-center"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-black/40 mb-3">Professional Email</span>
            <span className="text-base md:text-lg font-medium tracking-tight">
              zahirshaikhedu@gmail.com
            </span>
          </a>
          
          <a 
            href="tel:+919764435475" 
            className="p-10 border border-white/10 hover:border-white hover:bg-white hover:text-black transition-all duration-500 group flex flex-col items-center"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-black/40 mb-3">Mobile Contact</span>
            <span className="text-base md:text-lg font-medium tracking-tight">
              +91 976 443 5475
            </span>
          </a>
        </div>

        <div className="pt-20 flex justify-center gap-10 md:gap-16">
          <a href="https://linkedin.com/in/zahirshaikhedu" target="_blank" className="text-[12px] uppercase tracking-[0.4em] font-semibold text-white/50 hover:text-white transition-all">LinkedIn</a>
          <a href="https://github.com/zahirshaikh" target="_blank" className="text-[12px] uppercase tracking-[0.4em] font-semibold text-white/50 hover:text-white transition-all">GitHub</a>
          <a href="https://x.com/zahirshaikh" target="_blank" className="text-[12px] uppercase tracking-[0.4em] font-semibold text-white/50 hover:text-white transition-all">X</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
