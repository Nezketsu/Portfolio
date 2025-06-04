import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import AnimateOnScroll from "@/components/animate-on-scroll";
import { projects } from "@/config/projects";

export default function IndexPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] gap-8 px-4 pb-8">
        <AnimateOnScroll animation="fade-up" delay={0}>
          <div className="max-w-4xl text-center">
            {/* Main Heading */}
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-primary">Gregoire Caseaux</span>
              </h1>
              <h2 className="text-2xl lg:text-4xl font-semibold text-default-700 mb-6">
                Epitech Student & Developer
              </h2>
            </div>
            
            {/* Subtitle */}
            <div>
              <p className="text-lg lg:text-2xl text-default-600 max-w-3xl mx-auto leading-relaxed">
                Building beautiful and functional web applications with modern technologies.
                Passionate about blockchain, network programming, and innovative solutions.
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* CTA Buttons */}
        <AnimateOnScroll animation="fade-up" delay={200}>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
                size: "lg",
                class: "px-8 py-6 text-lg font-semibold"
              })}
              href="/about"
            >
              About Me
            </Link>
            <Link
              isExternal
              className={buttonStyles({ 
                variant: "bordered", 
                radius: "full", 
                size: "lg",
                class: "px-8 py-6 text-lg font-semibold"
              })}
              href="https://github.com/Nezketsu"
            >
              <GithubIcon size={24} />
              GitHub
            </Link>
          </div>
        </AnimateOnScroll>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-default-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <AnimateOnScroll animation="fade-up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Featured <span className="text-primary">Projects</span>
              </h2>
              <p className="text-lg text-default-600 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and passion for development
              </p>
            </div>
          </AnimateOnScroll>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <AnimateOnScroll 
                key={index} 
                animation="fade-up" 
                delay={index * 100}
              >
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
                  <p className="text-default-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/20 backdrop-blur-sm text-primary rounded-full text-sm font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        isExternal
                        className="text-default-600 hover:text-primary transition-colors"
                      >
                        <GithubIcon size={20} />
                      </Link>
                    )}
                    {project.demoUrl && (
                      <Link
                        href={project.demoUrl}
                        isExternal
                        className="text-sm text-primary hover:text-primary/80 font-medium"
                      >
                        View Demo →
                      </Link>
                    )}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <Link
              href="https://github.com/Nezketsu"
              isExternal
              className={buttonStyles({
                variant: "ghost",
                radius: "full",
                size: "lg",
                class: "px-8 hover:bg-primary/10 transition-all duration-300"
              })}
            >
              View More Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <AnimateOnScroll animation="fade-up" delay={0}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's Work <span className="text-primary">Together</span>
            </h2>
            <p className="text-lg text-default-600 mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and collaborations. 
              Whether you have a project in mind or just want to connect, feel free to reach out.
            </p>
            
            <AnimateOnScroll animation="fade-up" delay={200}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  className={buttonStyles({
                    color: "primary",
                    radius: "full",
                    variant: "shadow",
                    size: "lg",
                    class: "px-8 py-6 text-lg font-semibold"
                  })}
                  href="/contact"
                >
                  Get In Touch
                </Link>
                <Link
                  isExternal
                  className={buttonStyles({ 
                    variant: "bordered", 
                    radius: "full", 
                    size: "lg",
                    class: "px-8 py-6 text-lg font-semibold"
                  })}
                  href="mailto:gregoire.caseaux@epitech.eu"
                >
                  Send Email
                </Link>
              </div>
            </AnimateOnScroll>
          </div>
        </AnimateOnScroll>
      </section>
    </DefaultLayout>
  );
}
