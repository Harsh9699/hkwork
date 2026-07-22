import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import InteractiveGrid from "./InteractiveGrid";

function FloatingTag({ children }) {
  return (
    <span className="rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm text-textMuted shadow-soft backdrop-blur-xl">
      {children}
    </span>
  );
}

export default function Hero({ data }) {
  return (
    <section id="home" className="relative pt-10 md:pt-16">
      <div className="container-shell">
        <div className="hero-shadow noise-overlay relative overflow-hidden rounded-[36px] border border-white/70 bg-hero-radial px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
          <div className="absolute inset-0 rounded-[36px] bg-white/45 backdrop-blur-[2px]" />
          <InteractiveGrid />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] pointer-events-none">
            <div className="max-w-2xl pointer-events-auto">
              <Reveal>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-textMuted shadow-soft">
                  <Sparkles size={14} className="text-blueGlow" />
                  AI • Web • Automation
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <h1 className="text-balance font-display text-[3rem] font-semibold leading-[0.92] tracking-[-0.05em] sm:text-[4.2rem] md:text-[5rem] lg:text-[6.2rem]">
                  Building
                  <br />
                  intelligent
                  <br />
                  <span className="font-serifAccent italic font-medium gradient-text">
                    digital
                  </span>{" "}
                  experiences.
                </h1>
              </Reveal>

              <Reveal delay={0.16}>
                <p className="mt-6 max-w-xl text-base leading-8 text-textMuted md:text-lg">
                  {data.subtext}
                </p>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#projects"
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-textMain px-6 py-3.5 text-sm font-medium text-white transition hover:scale-[1.02]"
                  >
                    Explore My Work
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/70 px-6 py-3.5 text-sm font-medium text-textMain shadow-soft backdrop-blur-xl transition hover:scale-[1.02]"
                  >
                    Let’s Build Something
                  </a>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="mt-10">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-textMuted">
                    Building at the intersection of
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {data.heroTags.map((tag) => (
                      <FloatingTag key={tag}>{tag}</FloatingTag>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12} className="lg:pl-4 pointer-events-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="robot-stage-shadow relative mx-auto flex min-h-[520px] w-full max-w-[640px] items-center justify-center overflow-hidden rounded-[36px] border border-white/80 bg-white/55 p-5 backdrop-blur-2xl"
              >
                <div className="absolute inset-0 bg-card-radial opacity-80" />
                <div className="absolute inset-0 rounded-[36px] border border-white/60" />

                <div className="absolute left-6 top-6 rounded-full border border-white/70 bg-white/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-textMuted shadow-soft">
                  HK LAB
                </div>

                {/* Top glowing ring */}
                <div className="absolute top-8 h-28 w-28 rounded-full border border-blueGlow/30 bg-white/40 blur-[1px]" />
                <div className="absolute top-10 h-36 w-36 rounded-full border border-blueGlow/30 animate-spinSlow" />
                <div className="absolute top-16 h-16 w-16 rounded-full bg-blueGlow/20 blur-2xl" />

                {/* Bottom platform */}
                <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center justify-center rounded-[999px] border border-blueGlow/30 bg-white/70 shadow-glow px-6 py-3 sm:px-8 sm:py-4 text-xs sm:text-sm md:text-base whitespace-nowrap tracking-[0.1em] uppercase z-20 text-3d-tech">
                  Welcome To HK Workshop
                </div>
                <div className="absolute bottom-[3.6rem] left-1/2 h-5 w-[54%] -translate-x-1/2 rounded-full bg-blueGlow/20 blur-xl" />

                {/* Cylindrical chamber */}
                <div className="absolute inset-y-[13%] left-1/2 w-[58%] -translate-x-1/2 rounded-[999px] border border-white/70 bg-gradient-to-b from-white/45 to-white/15 backdrop-blur-sm" />
                <div className="absolute inset-y-[16%] left-1/2 w-[48%] -translate-x-1/2 rounded-[999px] border border-blueGlow/20" />

                <div className="relative z-10 w-full h-[300px] sm:h-[400px] flex items-center justify-center">
                  <spline-viewer class="w-full h-full pointer-events-none" logo="false" url="https://prod.spline.design/vhYqcG2iJYGyFCFk/scene.splinecode"></spline-viewer>
                </div>

                {/* Side glowing particles */}
                <div className="absolute right-10 top-1/4 h-2 w-2 rounded-full bg-blueGlow animate-pulseGlow" />
                <div className="absolute left-12 bottom-1/4 h-2 w-2 rounded-full bg-violetGlow animate-pulseGlow" />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
