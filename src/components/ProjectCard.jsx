import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.link}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group soft-card overflow-hidden rounded-[28px] p-4 flex flex-col"
    >
      <div className="relative overflow-hidden rounded-[22px]">
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/12 to-transparent" />
      </div>

      <div className="pt-5 flex-1 flex flex-col">
        <div>
          <span className="rounded-full border border-blueGlow/15 bg-blueGlow/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-textMuted">
            {project.category}
          </span>
        </div>

        <div className="mt-4 flex items-start justify-between gap-4 flex-1">
          <div>
            <h3 className="text-xl lg:text-2xl font-semibold tracking-tight">
              {project.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-textMuted">
              {project.description}
            </p>
          </div>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/70 bg-white/70 shadow-soft transition group-hover:bg-textMain group-hover:text-white">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </div>
    </motion.a>
  );
}
