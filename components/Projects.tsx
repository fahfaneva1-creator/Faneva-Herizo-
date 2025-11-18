
import React from 'react';
import type { Project } from '../types';

const projectData: Project[] = [
  {
    title: "AI-Powered Chatbot Assistant",
    description: "A smart virtual assistant for e-commerce sites, built with Python and integrated with a React front-end.",
    tags: ["AI", "Python", "React", "JavaScript"],
    imageUrl: "https://picsum.photos/seed/project1/600/400",
    link: "#",
  },
  {
    title: "Corporate Branding Package",
    description: "Complete visual identity redesign for a tech startup, including logo, style guide, and marketing materials.",
    tags: ["Graphic Design", "Logo Creation", "Branding"],
    imageUrl: "https://picsum.photos/seed/project2/600/400",
    link: "#",
  },
  {
    title: "Multilingual Portfolio Website",
    description: "A responsive and accessible portfolio website for a creative professional with content translation features.",
    tags: ["Front-end", "JavaScript", "Translation", "Web Writing"],
    imageUrl: "https://picsum.photos/seed/project3/600/400",
    link: "#",
  },
  {
    title: "Event Poster Series",
    description: "A series of vibrant and eye-catching posters for a local music festival, enhancing event promotion.",
    tags: ["Poster Publication", "Graphic Design"],
    imageUrl: "https://picsum.photos/seed/project4/600/400",
    link: "#",
  },
];

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-cyan-400"></span>
    </h2>
);

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="bg-slate-800 rounded-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 shadow-lg hover:shadow-cyan-500/20">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-slate-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                    <span key={tag} className="bg-slate-700 text-cyan-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>
            <a href={project.link} className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center">
                View Project
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </a>
        </div>
    </div>
);

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20">
            <SectionTitle>Projects</SectionTitle>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {projectData.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
