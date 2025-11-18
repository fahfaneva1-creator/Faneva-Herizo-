
import React from 'react';
import type { SkillCategory, Skill } from '../types';

const DesignIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
    </svg>
);

const CodeIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const CommunicationIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2V4a2 2 0 012-2h8a2 2 0 012 2v4z" />
    </svg>
);

const AIIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
    </svg>
);

const skillData: SkillCategory[] = [
    {
        title: "Design",
        skills: [
            { name: "Graphic Design", icon: <DesignIcon /> },
            { name: "Logo Creation", icon: <DesignIcon /> },
            { name: "Poster Publication", icon: <DesignIcon /> },
            { name: "UI/UX Design", icon: <DesignIcon /> },
        ]
    },
    {
        title: "Development",
        skills: [
            { name: "Python", icon: <CodeIcon /> },
            { name: "JavaScript", icon: <CodeIcon /> },
            { name: "TypeScript", icon: <CodeIcon /> },
            { name: "React", icon: <CodeIcon /> },
            { name: "Front-end Development", icon: <CodeIcon /> },
            { name: "AI Agent Creation", icon: <AIIcon /> },
        ]
    },
    {
        title: "Communication & Writing",
        skills: [
            { name: "Web Writing", icon: <CommunicationIcon /> },
            { name: "Virtual Assistant", icon: <CommunicationIcon /> },
            { name: "Translation", icon: <CommunicationIcon /> },
            { name: "Content Strategy", icon: <CommunicationIcon /> },
        ]
    }
];

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 relative inline-block">
        {children}
        <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-cyan-400"></span>
    </h2>
);

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
    <div className="bg-slate-800 p-4 rounded-lg flex items-center space-x-4 hover:bg-slate-700/50 transition-colors duration-300">
        {skill.icon}
        <span className="text-slate-300">{skill.name}</span>
    </div>
);

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20">
            <SectionTitle>My Skills</SectionTitle>
            <div className="space-y-12">
                {skillData.map((category) => (
                    <div key={category.title}>
                        <h3 className="text-2xl font-semibold text-cyan-400 mb-6">{category.title}</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {category.skills.map((skill) => (
                                <SkillCard key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
