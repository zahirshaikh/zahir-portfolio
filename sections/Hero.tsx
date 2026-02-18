import React from "react";

const Hero: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 items-center lg:items-end gap-12 lg:gap-8 pt-0 pb-10 lg:py-0">
      {/* Left Column: Text */}
      <div className="flex flex-col lg:-mt-12 animate-in fade-in slide-in-from-left-8 duration-1000">
        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-[0.5em] text-black/40 font-semibold mb-4">
            Fullstack Engineer
          </p>
          <h1 className="text-6xl md:text-[6rem] lg:text-[8rem] leading-[0.85] serif font-normal text-[#1a1a1a] -ml-1">
            Zahir <br /> Shaikh
          </h1>
        </div>

        <div className="mt-12 max-w-md">
          <p className="text-[#666] text-sm md:text-base leading-relaxed tracking-wide font-light border-l-2 border-black/5 pl-6">
            Building resilient .NET Core architectures and high-performance
            digital experiences with precision and purpose.
          </p>

          <div className="mt-12 flex items-center gap-8">
            <a
              href="#"
              className="inline-block bg-black text-white text-[11px] uppercase tracking-[0.3em] font-medium px-12 py-5 hover:bg-black/80 transition-all duration-500 shadow-xl shadow-black/10 transform hover:-translate-y-1 active:scale-95"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Your Portrait */}
      <div className="relative lg:-mt-12 w-full flex items-center justify-center lg:justify-end animate-in fade-in zoom-in-95 duration-1000 delay-300">
        <div className="relative w-full max-w-md lg:max-w-lg aspect-[3/4] overflow-hidden">
          <img
            src="pfp-nobg.png"
            alt="Zahir Shaikh"
            className="w-full h-full object-contain grayscale"
            onError={(e) => {
              // Fallback for demo purposes if the specific file isn't found
              (e.target as HTMLImageElement).src =
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
