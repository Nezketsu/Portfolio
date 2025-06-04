import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Accordion, AccordionItem } from "@/components/accordion";
import AnimateOnScroll from "@/components/animate-on-scroll";

export default function AboutPage() {
  return (
    <DefaultLayout>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] gap-8 px-4 py-20">
        <div className="max-w-4xl text-center">
          <AnimateOnScroll animation="fade-up" delay={0}>
            <h1 className={title({ size: "lg", class: "!text-4xl sm:!text-5xl lg:!text-6xl font-bold mb-6" })}>
              About <span className="text-primary">Me</span>
            </h1>
            <p className={subtitle({ class: "!text-xl sm:!text-2xl text-default-600 max-w-3xl mx-auto leading-relaxed" })}>
              3rd year student at Epitech — Seeking a part-time position with internship opportunities
            </p>
          </AnimateOnScroll>
          
          {/* Stats Cards */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <div className="text-default-600">Years at Epitech</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-default-600">Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-default-600">Technologies</div>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll animation="fade-up" delay={0}>
            <Accordion>
              <AccordionItem title="Experience" defaultOpen={true}>
                <div className="space-y-8">
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-primary">R&D Developer - Blockchain</h3>
                      <span className="text-sm bg-primary/20 backdrop-blur-sm text-primary px-3 py-1 rounded-full border border-primary/20">Current</span>
                    </div>
                    <p className="text-default-600 mb-3 font-medium">at PoC Innovation</p>
                    <p className="text-default-700 leading-relaxed">
                      Contributed to the development of Esport Oracle, a decentralized solution connecting Counter-Strike 2 competitive data to blockchain. Built transparent applications and innovative statistical analysis tools using smart contracts.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-semibold">Jetpack</h3>
                      <span className="text-sm bg-blue-500/20 backdrop-blur-sm text-blue-500 px-3 py-1 rounded-full border border-blue-500/20">4 weeks</span>
                    </div>
                    <p className="text-default-600 mb-3 font-medium">School Project</p>
                    <p className="text-default-700 leading-relaxed">
                      Developed a multiplayer network game (Jetpack) with TCP client-server architecture, multi-threading, and a documented proprietary protocol following RFC standards.
                    </p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-semibold">Business Intelligence Intern</h3>
                      <span className="text-sm bg-green-500/20 backdrop-blur-sm text-green-500 px-3 py-1 rounded-full border border-green-500/20">2024-2025</span>
                    </div>
                    <p className="text-default-600 mb-3 font-medium">at GestionDeLaPaie.com</p>
                    <ul className="space-y-2 text-default-700">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        Created and maintained automated regulatory reports using PowerBI
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        Independently designed and developed an AI solution for automating report generation from Teams video conferences
                      </li>
                    </ul>
                  </div>
                </div>
              </AccordionItem>

              <AccordionItem title="Education">
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h3 className="text-xl font-semibold text-primary">Epitech - Graduate Program (Bac+5)</h3>
                      <span className="text-sm bg-primary/20 backdrop-blur-sm text-primary px-3 py-1 rounded-full border border-primary/20">Current</span>
                    </div>
                    <p className="text-default-600 mb-2 font-medium">RNCP Level 7 Title in Information Technology</p>
                    <p className="text-default-700">Currently in 3rd year • School Ambassador</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <h3 className="text-xl font-semibold mb-4">Lycée Léonard de Vinci</h3>
                    <p className="text-default-600 font-medium">Baccalaureate in Mathematics and Engineering Sciences</p>
                    <p className="text-default-700 text-sm mt-2">2021-2025</p>
                  </div>
                </div>
              </AccordionItem>
              
              <AccordionItem title="Technical Skills">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/20">
                        <span className="text-xl">💻</span>
                      </div>
                      <h3 className="font-semibold text-lg">Programming</h3>
                    </div>
                    <div className="space-y-3">
                      {['Python', 'C', 'C++'].map((skill) => (
                        <div key={skill} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-default-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/20">
                        <span className="text-xl">🌐</span>
                      </div>
                      <h3 className="font-semibold text-lg">Web Development</h3>
                    </div>
                    <div className="space-y-3">
                      {['HTML/CSS/JS', 'ReactJS', 'Solidity'].map((skill) => (
                        <div key={skill} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="text-default-700">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-500/20">
                        <span className="text-xl">🗣️</span>
                      </div>
                      <h3 className="font-semibold text-lg">Languages</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-default-700">English B1</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-default-700">French Native</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionItem>
            </Accordion>
          </AnimateOnScroll>
        </div>
      </section>
    </DefaultLayout>
  );
}
