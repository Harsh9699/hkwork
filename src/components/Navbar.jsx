import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="sticky top-0 z-50"
    >
      <div className="container-shell pt-4">
        <div className="glass-panel nav-blur flex items-center justify-between rounded-full px-4 py-3 md:px-6">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tight">HK</span>
              <span className="text-[11px] uppercase tracking-[0.34em] text-textMuted">
                Workshop
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-textMuted transition hover:text-textMain"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-textMain px-4 py-2 text-sm font-medium text-white transition hover:scale-[1.02]"
          >
            Let’s Connect
            <ArrowUpRight
              size={16}
              className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
