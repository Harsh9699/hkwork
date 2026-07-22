import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa6";

export default function Footer({ data }) {
  const socials = [
    { icon: <FaLinkedin size={18} />, href: data.social.linkedin, label: "LinkedIn" },
    { icon: <FaGithub size={18} />, href: data.social.github, label: "GitHub" },
    { icon: <FaInstagram size={18} />, href: data.social.instagram, label: "Instagram" },
    { icon: <FaEnvelope size={18} />, href: data.social.email, label: "Email" },
  ];

  return (
    <footer className="pb-10">
      <div className="container-shell">
        <div className="flex flex-col gap-5 rounded-[28px] border border-white/70 bg-white/55 px-6 py-6 shadow-soft backdrop-blur-xl md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-extrabold">HK</span>
              <span className="text-[11px] uppercase tracking-[0.34em] text-textMuted">
                Workshop
              </span>
            </div>
            <p className="mt-2 text-sm text-textMuted">
              © 2026 HK Workshop. Crafted with design, code & AI.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/70 shadow-soft transition hover:-translate-y-1 hover:bg-textMain hover:text-white"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
