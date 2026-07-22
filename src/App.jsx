import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionHeading from "./components/SectionHeading";
import ProjectCard from "./components/ProjectCard";
import CertificateCard from "./components/CertificateCard";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import Reveal from "./components/Reveal";
import Preloader from "./components/Preloader";
import { portfolioData } from "./data/portfolioData";

function App() {
  const data = portfolioData;
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    if (!appReady) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [appReady]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Preloader onComplete={() => setAppReady(true)} />
      <AnimatedBackground />
      <Navbar />

      <main className="relative z-10">
        <Hero data={data} />

        <section id="projects" className="section-space">
          <div className="container-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Featured Work"
                title="Selected Projects"
                action={
                  <a
                    href="#"
                    className="rounded-full border border-white/70 bg-white/70 px-5 py-3 text-sm font-medium text-textMain shadow-soft transition hover:-translate-y-0.5"
                  >
                    View all projects
                  </a>
                }
              />
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {data.projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="certificates" className="section-space pt-0">
          <div className="container-shell">
            <Reveal>
              <SectionHeading
                eyebrow="Achievements"
                title="Certificates & Credentials"
                action={
                  <a
                    href="#"
                    className="rounded-full border border-white/70 bg-white/70 px-5 py-3 text-sm font-medium text-textMain shadow-soft transition hover:-translate-y-0.5"
                  >
                    View all certificates
                  </a>
                }
              />
            </Reveal>

            <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 no-scrollbar -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
              {data.certificates.map((certificate, index) => (
                <div key={certificate.title} className="w-[280px] md:w-[380px] shrink-0 snap-center">
                  <CertificateCard
                    certificate={certificate}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <AboutSection data={data} />
        <ContactSection data={data} />
      </main>

      <Footer data={data} />
    </div>
  );
}

export default App;
