
import React from 'react';
import { Project } from '../types';

const projects: Project[] = [
  {
    title: 'Airline Management System',
    stack: 'ASP.NET Core (.NET 9), React, REST APIs',
    description: [
      'A full-stack operational platform for managing flight schedules and real-time operations using a React frontend and .NET 9 Web API.'
    ],
    link: 'https://github.com/zahirshaikh'
  },
  {
    title: 'AI Bots Orchestrator',
    stack: 'ASP.NET Core, React TypeScript',
    description: [
      'A sophisticated workflow management system that orchestrates AI behaviors, achieving a 30% reduction in execution latency.'
    ],
    link: 'https://github.com/zahirshaikh'
  },
  {
    title: 'Employee Management System',
    stack: 'ASP.NET Core MVC, SQL Server',
    description: [
      'A robust enterprise solution for managing personnel records, featuring high-performance SQL Server integration and MVC architecture.'
    ],
    link: 'https://github.com/zahirshaikh'
  }
];

const Projects: React.FC = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-baseline mb-16">
        <h2 className="text-4xl md:text-6xl serif">Projects</h2>
        <p className="text-[10px] uppercase tracking-[0.3em] text-black/40 mt-4 md:mt-0 font-medium">Selected Technical Works 2023 — 2025</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <a 
            key={idx} 
            href={project.link || "#"} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex flex-col h-full p-8 border border-transparent transition-all duration-500 ease-in-out hover:bg-[#1a1a1a] hover:text-white/90"
          >
            {/* Project Index and Redirection Icon */}
            <div className="flex justify-between items-start mb-6">
              <span className="text-[9px] text-black/30 group-hover:text-white/30 font-mono block tracking-tighter transition-colors duration-500">
                0{idx + 1} // CASE STUDY
              </span>
              <div className="text-black/20 group-hover:text-white transition-colors duration-500">
                <svg className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </div>
            </div>
            
            <div className="flex-grow">
              <h3 className="text-2xl md:text-3xl font-normal mb-4 serif transition-all duration-500">
                {project.title}
              </h3>
              
              {/* Technology Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.split(',').map(s => (
                  <span 
                    key={s} 
                    className="text-[9px] uppercase tracking-widest bg-black/5 group-hover:bg-white/10 px-2 py-1 rounded-sm text-black/60 group-hover:text-white/70 transition-colors duration-500"
                  >
                    {s.trim()}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div className="mb-8">
                {project.description.map((point, pIdx) => (
                  <p 
                    key={pIdx} 
                    className="text-[13px] text-[#666] group-hover:text-white/60 leading-relaxed font-light transition-colors duration-500"
                  >
                    {point}
                  </p>
                ))}
              </div>
            </div>

            {/* Project Image */}
            <div className="mt-auto pt-8">
              <div className="aspect-[4/3] w-full overflow-hidden bg-white/50 group-hover:bg-white/5 transition-colors duration-500">
                 <img 
                  src={idx === 0 
                    ? "airline.jpg" 
                    : idx === 1 
                      ? "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
                      : "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&q=80&w=800"
                  } 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                 />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
