import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Accordion, AccordionItem } from "@/components/accordion";

export default function AboutPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="max-w-3xl w-full px-4">
          <div className="text-center mb-8">
            <h1 className={title()}>About Me</h1>
            <p className={subtitle({ class: "mt-4" })}>
              3rd year student at Epitech — Seeking a part-time position with internship opportunities
            </p>
          </div>

          <Accordion>
            <AccordionItem title="Experience" defaultOpen={true}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">R&D Developer - Blockchain</h3>
                  <p className="text-default-600 mb-2">at PoC Innovation</p>
                  <p className="text-default-700">
                    Contributed to the development of Esport Oracle, a decentralized solution connecting Counter-Strike 2 competitive data to blockchain. Built transparent applications and innovative statistical analysis tools using smart contracts.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Jetpack | 4 weeks</h3>
                  <p className="text-default-600 mb-2">School Project</p>
                  <p className="text-default-700">
                    Developed a multiplayer network game (Jetpack) with TCP client-server architecture, multi-threading, and a documented proprietary protocol following RFC standards.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Business Intelligence Intern | 2024-2025</h3>
                  <p className="text-default-600 mb-2">at GestionDeLaPaie.com</p>
                  <ul className="list-disc pl-5 text-default-700">
                    <li>Created and maintained automated regulatory reports using PowerBI</li>
                    <li>Independently designed and developed an AI solution for automating report generation from Teams video conferences</li>
                  </ul>
                </div>
              </div>
            </AccordionItem>

            <AccordionItem title="Education">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Epitech - Graduate Program (Bac+5)</h3>
                  <p className="text-default-600 mb-2">RNCP Level 7 Title in Information Technology</p>
                  <p className="text-default-700">Currently in 3rd year • School Ambassador</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Lycée Léonard de Vinci | 2021-2025</h3>
                  <p className="text-default-600">Baccalaureate in Mathematics and Engineering Sciences</p>
                </div>
              </div>
            </AccordionItem>
            
            <AccordionItem title="Technical Skills">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Programming</h3>
                  <ul className="list-disc pl-5 space-y-1 text-default-700">
                    <li>Python</li>
                    <li>C</li>
                    <li>C++</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Web Development</h3>
                  <ul className="list-disc pl-5 space-y-1 text-default-700">
                    <li>HTML/CSS/JS</li>
                    <li>ReactJS</li>
                    <li>Solidity</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">Languages</h3>
                  <ul className="list-disc pl-5 space-y-1 text-default-700">
                    <li>English B1</li>
                  </ul>
                </div>
              </div>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </DefaultLayout>
  );
}
