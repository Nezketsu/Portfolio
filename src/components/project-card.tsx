import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";
import { GithubIcon, ExternalLinkIcon } from "@/components/icons";
import { getTechIcon } from "@/components/tech-icons";

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  demoUrl?: string;
  githubUrl?: string;
  status?: 'completed' | 'in-progress' | 'planning';
  featured?: boolean;
}

const statusColors = {
  completed: "bg-green-500/20 text-green-400 border-green-500/30",
  'in-progress': "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  planning: "bg-blue-500/20 text-blue-400 border-blue-500/30",
};

const statusText = {
  completed: "Completed",
  'in-progress': "In Progress",
  planning: "Planning",
};

export const ProjectCard = ({
  title,
  description,
  technologies,
  demoUrl,
  githubUrl,
  status = 'completed',
  featured = false,
}: ProjectCardProps) => {
  return (
    <div className="relative group h-full w-full max-w-md">
      {/* Professional card styling */}
      <div className="relative h-full bg-white dark:bg-default-100 border border-default-200 rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:transform hover:scale-[1.02] hover:border-primary/30">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {title}
              </h3>
              {featured && (
                <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full border border-primary/30">
                  ⭐ Featured
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className={`px-2 py-1 text-xs font-medium rounded-full border ${statusColors[status]}`}>
                {statusText[status]}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-default-600 mb-6 leading-relaxed text-sm line-clamp-3 group-hover:text-default-500 transition-colors duration-300">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => {
            const TechIcon = getTechIcon(tech);
            return (
              <span 
                key={index}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-white/5 hover:bg-white/10 text-default-700 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-200"
              >
                <TechIcon size={12} />
                {tech}
              </span>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-4 border-t border-white/10">
          {demoUrl && (
            <Link
              href={demoUrl}
              isExternal
              className={buttonStyles({
                variant: "solid",
                color: "primary",
                size: "sm",
                class: "flex-1 min-h-10",
              })}
            >
              <ExternalLinkIcon size={14} />
              Live Demo
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              isExternal
              className={buttonStyles({
                variant: "bordered",
                size: "sm",
                class: "flex-1 min-h-10",
              })}
            >
              <GithubIcon size={14} />
              {demoUrl ? "Code" : "View Project"}
            </Link>
          )}
          {!demoUrl && !githubUrl && (
            <div className="flex-1 flex items-center justify-center py-2 text-xs text-default-400">
              Project details available on request
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
