interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  gradientFrom: string;
  gradientTo: string;
}

export const ProjectCard = ({
  title,
  description,
  technologies,
  gradientFrom,
  gradientTo,
}: ProjectCardProps) => {
  return (
    <div className="relative p-1 w-full sm:w-[350px] md:w-[400px] group">
      <div 
        className={`absolute inset-0 bg-gradient-to-r rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity`}
        style={{ backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` }}
      />
      <div className="relative h-full bg-background/80 backdrop-blur-xl rounded-lg p-4 sm:p-6 ring-1 ring-white/10 hover:ring-white/20 transition-all">
        <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
        <p className="text-default-500 mb-4 text-sm sm:text-base">
          {description}
        </p>
        <div className="flex gap-2 flex-wrap">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs bg-primary-100/10 text-primary px-2 sm:px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
