import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

function ContactRow({ icon, children, href }) {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-white/70 bg-white/70 px-4 py-4 shadow-soft transition hover:-translate-y-0.5">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-soft">
        {icon}
      </div>
      <span className="text-sm md:text-base">{children}</span>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}

export default function ContactSection({ data }) {
  return (
    <section id="contact" className="pb-24">
      <div className="container-shell">
        <Reveal className="soft-card rounded-[34px] p-7 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-blueGlow">
                Let’s Connect
              </p>

              <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                Let’s build something{" "}
                <span className="font-serifAccent italic font-medium gradient-text">
                  amazing
                </span>{" "}
                together.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-textMuted">
                If you want a portfolio, AI product, web app, automation system
                or a premium digital experience — I’d love to work on it.
              </p>

              <form action="https://api.web3forms.com/submit" method="POST" className="mt-10 space-y-5 relative z-10">
                <input type="hidden" name="access_key" value="2e1bd99c-c4a5-4497-9fd3-6a837960bbe1" />
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-widest text-textMuted ml-1">Identity</label>
                        <input name="name" required className="w-full bg-white/40 border border-white/60 rounded-lg px-4 py-3 text-sm text-textMain placeholder:text-textMuted/50 focus:outline-none focus:border-blueGlow/50 focus:ring-1 focus:ring-blueGlow/50 transition-all" placeholder="Your Name" type="text"/>
                    </div>
                    <div className="space-y-1.5">
                        <label className="text-xs font-semibold uppercase tracking-widest text-textMuted ml-1">Comms Link</label>
                        <input name="email" required className="w-full bg-white/40 border border-white/60 rounded-lg px-4 py-3 text-sm text-textMain placeholder:text-textMuted/50 focus:outline-none focus:border-blueGlow/50 focus:ring-1 focus:ring-blueGlow/50 transition-all" placeholder="your@email.com" type="email"/>
                    </div>
                </div>
                <div className="space-y-1.5">
                    <label className="text-xs font-semibold uppercase tracking-widest text-textMuted ml-1">Transmission Data</label>
                    <textarea name="message" required className="w-full bg-white/40 border border-white/60 rounded-lg px-4 py-3 text-sm text-textMain placeholder:text-textMuted/50 resize-none focus:outline-none focus:border-blueGlow/50 focus:ring-1 focus:ring-blueGlow/50 transition-all" placeholder="Let's build something awesome..." rows="4"></textarea>
                </div>
                <button type="submit" className="w-full bg-textMain hover:bg-textMain/90 text-white text-sm font-medium py-3.5 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group">
                    Transmit Signal
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </div>

            <div className="grid gap-4">
              <ContactRow
                icon={<Mail size={18} className="text-blueGlow" />}
                href={`mailto:${data.email}`}
              >
                {data.email}
              </ContactRow>

              <ContactRow
                icon={<Phone size={18} className="text-blueGlow" />}
                href={`https://wa.me/${data.phone.replace(/[\s+]/g, "")}`}
              >
                {data.phone}
              </ContactRow>

              <ContactRow icon={<MapPin size={18} className="text-blueGlow" />}>
                {data.location}
              </ContactRow>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
