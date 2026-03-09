import { motion } from "framer-motion";
import { ArrowRight, ClipboardList, Route, ShieldCheck, Sparkles } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { scrollToSection } from "@/lib/scroll";
import { socialLinks } from "@/config/social";

const cardIcons = [ClipboardList, Route, ShieldCheck] as const;

export default function Deliverables() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24">
      <div className="container mx-auto max-w-7xl px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-cyan-200">
            <Sparkles className="h-3.5 w-3.5" />
            {t.deliverables.eyebrow}
          </div>
          <h2 className="mb-4 text-3xl font-light text-white md:text-4xl">{t.deliverables.title}</h2>
          <div className="mx-auto mb-6 h-0.5 w-20 bg-gradient-to-r from-cyan-500 to-purple-500" />
          <p className="text-lg text-zinc-400">{t.deliverables.subtitle}</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
          <div className="grid gap-6 md:grid-cols-3">
            {t.deliverables.cards.map((card, index) => {
              const Icon = cardIcons[index] ?? ClipboardList;

              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <div className="glass-card h-full rounded-[28px] p-6 shadow-[0_16px_50px_rgba(0,0,0,0.16)] transition-all duration-300 hover:bg-white/10">
                    <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/12 p-3 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-3 text-xl font-medium text-white">{card.title}</h3>
                    <p className="text-sm leading-7 text-zinc-300">{card.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-zinc-950/80 via-zinc-900/60 to-cyan-950/40 p-7 shadow-[0_20px_80px_rgba(0,0,0,0.24)]">
              <div className="absolute -right-10 top-0 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />
              <h3 className="text-lg font-medium text-white">{t.deliverables.processTitle}</h3>
              <div className="mt-6 space-y-4">
                {t.deliverables.processItems.map((item, index) => (
                  <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-cyan-400/15 text-xs font-semibold text-cyan-200">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-6 text-zinc-200">{item}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm leading-6 text-zinc-400">{t.deliverables.note}</p>

              <div className="mt-8 flex flex-col gap-3">
                <button
                  className="btn-primary-dark inline-flex items-center justify-center gap-2 py-4 text-sm"
                  onClick={(event) => scrollToSection("consulting", event, true)}
                >
                  {t.deliverables.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={socialLinks.email}
                  className="btn-outline-dark inline-flex items-center justify-center gap-2 py-4 text-sm"
                >
                  {t.deliverables.secondaryCta}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
