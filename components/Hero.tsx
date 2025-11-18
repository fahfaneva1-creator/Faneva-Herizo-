
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center -mt-16">
      <div className="max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Creative Developer & Digital Artisan
        </h1>
        <p className="text-lg md:text-xl text-slate-400 mb-8">
          I blend design, technology, and strategy to craft beautiful digital experiences and intelligent AI solutions.
        </p>
        <a
          href="#projects"
          className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
