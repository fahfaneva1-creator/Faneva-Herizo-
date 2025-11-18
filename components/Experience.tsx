
import React from 'react';
import type { ExperienceItem } from '../types';

const experienceData: ExperienceItem[] = [
  {
    company: "Creative Tech Inc.",
    title: "Front-end Developer & AI Specialist",
    duration: "2021 - Present",
    description: [
      "Developed and maintained responsive user interfaces for client websites using React and TypeScript.",
      "Designed and implemented conversational AI agents, improving customer engagement by 30%.",
      "Collaborated with the design team to create wireframes, mockups, and prototypes for new features.",
    ],
  },
  {
    company: "Design Solutions Co.",
    title: "Graphic Designer & Web Content Writer",
    duration: "2019 - 2021",
    description: [
      "Created compelling brand identities, including logos, marketing materials, and posters for various clients.",
      "Wrote engaging and SEO-friendly web content, increasing organic traffic by 40%.",
      "Managed multiple design and content projects simultaneously, ensuring timely delivery.",
    ],
  },
  {
    company: "Freelance",
    title: "Multilingual Translator & Virtual Assistant",
    duration: "2017 - 2019",
    description: [
        "Provided high-quality translation services for documents, websites, and applications.",
        "Offered remote administrative and technical support to international clients, improving their operational efficiency.",
    ],
  },
];

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-cyan-400"></span>
    </h2>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20">
      <SectionTitle>Experience</SectionTitle>
      <div className="relative border-l-2 border-slate-700 ml-4 md:ml-0">
        {experienceData.map((item, index) => (
          <div key={index} className="mb-12 ml-8 md:ml-10 relative">
            <div className="absolute -left-11 md:-left-[45px] mt-1.5 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900"></div>
            <time className="mb-1 text-sm font-normal leading-none text-slate-500">{item.duration}</time>
            <h3 className="text-xl font-semibold text-white mt-1">{item.title}</h3>
            <p className="text-md font-normal text-cyan-400 mb-2">{item.company}</p>
            <ul className="list-disc list-inside text-slate-400 space-y-1">
                {item.description.map((desc, i) => <li key={i}>{desc}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
