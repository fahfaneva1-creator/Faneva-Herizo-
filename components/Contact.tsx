
import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-cyan-400"></span>
    </h2>
);

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <SectionTitle>Get In Touch</SectionTitle>
      <p className="max-w-2xl mx-auto text-slate-400 mb-8 text-lg">
        I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out. I'll do my best to get back to you!
      </p>
      <a
        href="mailto:your.email@example.com"
        className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
      >
        Say Hello
      </a>
    </section>
  );
};

export default Contact;
