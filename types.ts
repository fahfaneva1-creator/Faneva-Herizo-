
export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export interface ExperienceItem {
  company: string;
  title: string;
  duration: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link: string;
}
