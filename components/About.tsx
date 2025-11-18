
import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-cyan-400"></span>
    </h2>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20">
      <SectionTitle>About Me</SectionTitle>
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <img
            src="https://picsum.photos/300/300"
            alt="Profile"
            className="rounded-full w-64 h-64 md:w-full md:h-auto max-w-xs object-cover border-4 border-cyan-500 shadow-lg"
          />
        </div>
        <div className="md:col-span-2 text-slate-400 space-y-4 text-lg">
          <p>
            Hello! I'm a multi-talented professional with a passion for creating engaging and intelligent digital solutions. My expertise spans across the creative and technical spectrum, from crafting compelling visual identities through graphic and logo design to building robust, user-friendly web applications.
          </p>
          <p>
            With a strong foundation in Python and JavaScript, I excel as a front-end developer and have a keen interest in the burgeoning field of AI, where I enjoy designing and implementing intelligent agents. My skills in web writing, translation, and virtual assistance allow me to deliver comprehensive, polished projects from concept to completion.
          </p>
          <p>
            I am driven by curiosity and a desire to solve complex problems, always seeking to learn and apply new technologies to push the boundaries of what's possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
