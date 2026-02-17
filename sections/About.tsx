
import React from 'react';

const coreExpertise = [
  'C#', 
  '.NET 9', 
  'ASP.NET Core', 
  'React', 
  'TypeScript', 
  'SQL Server', 
  'EF Core', 
  'Azure', 
  'REST APIs', 
  'SignalR'
];

const About: React.FC = () => {
  return (
    <div className="h-full w-full animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Column: Background */}
        <div>
          <h2 className="text-4xl md:text-5xl serif mb-10">Background</h2>
          <div className="space-y-8 text-[#666] text-sm md:text-base leading-relaxed font-light">
            <p>
              I am a Bachelor of Computer Engineering student from Savitribai Phule Pune University, 
              driven by the challenge of creating efficient and robust digital solutions.
            </p>
            <p>
              With a strong foundation in the .NET ecosystem, I've focused on building resilient backends 
              and seamless frontends. My recent projects involved reducing workflow execution latency 
              by approximately 30% through optimized API architectures.
            </p>
            
            <div className="pt-12 border-t border-black/5 mt-12">
              <h3 className="text-black font-medium uppercase tracking-[0.3em] text-[10px] mb-8">Education</h3>
              <div className="space-y-8">
                <div>
                  <p className="text-black font-medium text-sm mb-1">Bachelor of Computer Engineering</p>
                  <p className="text-[11px] uppercase tracking-wider text-black/40">Savitribai Phule Pune University • 2023–2026</p>
                </div>
                <div>
                  <p className="text-black font-medium text-sm mb-1">Diploma in Computer Engineering</p>
                  <p className="text-[11px] uppercase tracking-wider text-black/40">Abhaysinhraje Bhosle Institute of Technology • 2020–2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Expertise */}
        <div className="flex flex-col">
          <h2 className="text-4xl md:text-5xl serif mb-10">Expertise</h2>
          
          <div className="grid grid-cols-2 gap-y-4 gap-x-12 border-t border-black/10 pt-8">
            {coreExpertise.map((skill) => (
              <div key={skill} className="group flex items-center gap-3 py-2 border-b border-black/[0.03]">
                <span className="w-1 h-1 bg-black/20 rounded-full group-hover:bg-black transition-colors"></span>
                <span className="text-sm text-[#444] font-light tracking-wide group-hover:text-black transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-auto pt-16">
            <div className="bg-black text-white p-8 md:p-12 relative overflow-hidden">
               {/* Decorative subtle background text */}
               <div className="absolute -right-4 -bottom-4 opacity-5 text-8xl font-serif italic pointer-events-none select-none">
                 Z
               </div>
               
               <h4 className="text-[10px] uppercase tracking-[0.4em] font-semibold text-white/50 mb-6">Certifications</h4>
               <ul className="space-y-4 relative z-10">
                  <li className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Foundational C# with Microsoft</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 italic">Issued by freeCodeCamp</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-sm font-medium">ASP.NET Core – The Ultimate Guide</span>
                    <span className="text-[10px] uppercase tracking-widest text-white/40 italic">Issued by Udemy</span>
                  </li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
