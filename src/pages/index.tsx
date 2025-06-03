import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/config/projects";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] gap-4 px-4 pb-8">
        <div className="relative inline-block max-w-lg text-center justify-center">
          <div className="absolute -top-16 sm:-top-40 -left-12 sm:-left-32 -right-12 sm:-right-32 -bottom-16 sm:-bottom-40 -z-10">
            <div className="absolute top-0 left-0 w-[260px] sm:w-[500px] h-[260px] sm:h-[500px] bg-violet-600/20 rounded-full blur-[60px] sm:blur-[120px] mix-blend-multiply" />
            <div className="absolute bottom-0 right-0 w-[260px] sm:w-[500px] h-[260px] sm:h-[500px] bg-blue-600/20 rounded-full blur-[60px] sm:blur-[120px] mix-blend-multiply" />
          </div>
          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row items-center justify-center flex-wrap gap-x-2">
              <span className={title({ size: "sm", class: "!text-2xl sm:!text-4xl" })}>Hi, I'm&nbsp;</span>
              <span className={title({ color: "violet", size: "sm", class: "!text-2xl sm:!text-4xl" })}>Gregoire Caseaux</span>
            </div>
            <span className={title({ size: "sm", class: "!text-2xl sm:!text-4xl mt-2" })}>
              Epitech Student
            </span>
            <div className={subtitle({ class: "mt-4 text-sm sm:text-base md:text-lg" })}>
              Building beautiful and functional web applications
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href="/about"
          >
            About Me
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href="https://github.com/Nezketsu"
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </section>

      <section id="projects" className="py-12 sm:py-16 px-4">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className={title({ size: "sm", class: "!text-2xl sm:!text-3xl md:!text-4xl" })}>My Projects</h2>
          <p className={subtitle({ class: "mt-4 text-sm sm:text-base" })}>Here are some of my recent projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-6 sm:gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </section>

      <section id="contact" className="py-12 sm:py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className={title({ size: "sm", class: "!text-2xl sm:!text-3xl md:!text-4xl" })}>Get In Touch</h2>
          <p className={subtitle({ class: "mt-4 mb-6 sm:mb-8 text-sm sm:text-base" })}>
            Have a project in mind or just want to say hello? Feel free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              className={buttonStyles({
                color: "primary",
                radius: "full",
                class: "w-full sm:w-auto px-8",
              })}
              href="mailto:greg.caseaux@gmail.com"
              isExternal
            >
              Email Me
            </Link>
            <Link
              className={buttonStyles({
                variant: "bordered",
                radius: "full",
                class: "w-full sm:w-auto px-8",
              })}
              href="https://linkedin.com/in/caseaux-gregoire-882809299/"
              isExternal
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
