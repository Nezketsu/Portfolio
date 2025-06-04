export interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  status?: 'completed' | 'in-progress' | 'planning';
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Jetpack",
    description: "Jeu multijoueur en réseau (Jetpack) avec client-serveur TCP, multi-threading et protocole propriétaire documenté RFC.",
    technologies: ["C++", "TCP", "Multi-threading", "Network Programming"],
    githubUrl: "https://github.com/Nezketsu",
    status: "completed",
    featured: true,
  },
  {
    title: "Esport Oracle",
    description: "Esport Oracle is a decentralized oracle that brings Counter-Strike 2 esports data to the blockchain.",
    technologies: ["Solidity", "Go", "Blockchain", "Smart Contracts"],
    githubUrl: "https://github.com/Nezketsu",
    status: "completed",
    featured: true,
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website built with React, TypeScript, and Tailwind CSS featuring particle animations and responsive design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/Nezketsu/Portfolio",
    demoUrl: "https://nezketsu.github.io/Portfolio",
    status: "completed",
  },
  {
    title: "AI Report Generator",
    description: "AI-powered solution for automatically generating reports from Teams video conferences using natural language processing.",
    technologies: ["Python", "AI/ML", "NLP", "Microsoft Teams API"],
    status: "in-progress",
  },
  // Ajoutez facilement de nouveaux projets ici
];
