import Reveal from "./Reveal";

export default function AboutSection({ data }) {
  return (
    <section id="about" className="section-space">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="soft-card rounded-[34px] p-7 md:p-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blueGlow">
              About Me
            </p>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              I turn ideas into{" "}
              <span className="font-serifAccent italic font-medium gradient-text">
                intelligent
              </span>{" "}
              digital systems.
            </h2>

            <div className="mt-6 flex flex-col gap-4">
              <p className="max-w-2xl text-base leading-8 text-textMuted">
                I build stuff on my phone and my laptop, whatever's around, whatever gets the job done. I'm Harsh, and I run HK Workshop, where I mix AI automation with web development for clients who need things that actually work.
              </p>
              <p className="max-w-2xl text-base leading-8 text-textMuted">
                But there's another side to what I do. Projects born from my faith in the Radhavallabh Sampradaya, built not for clients but because they mean something to me. Two worlds, one builder. That's basically it.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {data.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm text-textMuted shadow-soft"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="soft-card relative overflow-hidden rounded-[34px] p-0 h-full min-h-[340px] md:min-h-[480px]">
            <img 
              src="/about-portrait.jpeg" 
              alt="Harsh Kukreja" 
              className="absolute inset-0 w-full h-full object-cover transition duration-700 hover:scale-105" 
            />
            {/* Subtle overlay gradient to match the dark aesthetic at the edges */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
