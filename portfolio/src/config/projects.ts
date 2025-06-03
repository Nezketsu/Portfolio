export interface Project {
  title: string;
  description: string;
  technologies: string[];
  gradientFrom: string;
  gradientTo: string;
}

export const projects: Project[] = [
  {
    title: "Jetpack",
    description: "Jeu multijoueur en réseau (Jetpack) avec client-serveur TCP, multi-threading et protocole propriétaire documenté RFC.",
    technologies: ["React", "TypeScript"],
    gradientFrom: "#7C3AED",
    gradientTo: "#D946EF",
  },
  {
    title: "Esport Oracle",
    description: "Esport Oracle is a decentralized oracle that brings Counter-Strike 2 esports data to the blockchain.",
    technologies: ["Solidity", "Go"],
    gradientFrom: "#2563EB",
    gradientTo: "#06B6D4",
  },
  // Ajoutez facilement de nouveaux projets ici
];
