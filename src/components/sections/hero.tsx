import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarClock, CheckCircle2, Mail } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { useTypewriter } from "@/hooks/use-typewriter";
import { scrollToSection } from "@/lib/scroll";
import { socialLinks } from "@/config/social";

export default function Hero() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion() ?? false;
  const { text: displayText, showCursor } = useTypewriter(t.hero.rotatingWords, {
    typeSpeed: 180,
    deleteSpeed: 100,
    pauseTime: 2600,
    disabled: prefersReducedMotion,
  });
  
  return (
    <section className="relative overflow-hidden px-8 pb-20 pt-32 md:px-16 md:pb-28 md:pt-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-16 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[rgba(143,167,149,0.12)] blur-3xl" />
        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-[rgba(215,192,166,0.18)] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[rgba(143,167,149,0.06)]" />
      </div>

      <div className="container mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_420px]">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[rgba(143,167,149,0.1)] px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-[var(--accent-strong)]">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            {t.hero.eyebrow}
          </div>

          <motion.h1
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl text-4xl font-light tracking-tight text-[var(--text)] sm:text-5xl md:text-6xl lg:text-7xl lg:leading-[1.02]"
          >
            {t.hero.titlePrefix}
            <br />
            <span className="text-[var(--accent-strong)]">
              {displayText}
              {showCursor && <span className="animate-pulse">|</span>}
            </span>
            {t.hero.titleSuffix ? (
              <>
                {" "}
                {t.hero.titleSuffix}
              </>
            ) : null}
          </motion.h1>

          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <button
              className="btn-primary-dark inline-flex items-center justify-center gap-2 px-7 py-4 text-sm"
              onClick={(event) => scrollToSection("consulting", event, true)}
            >
              {t.hero.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href={socialLinks.email}
              className="btn-outline-dark inline-flex items-center justify-center gap-2 px-7 py-4 text-sm"
            >
              <Mail className="h-4 w-4" />
              {t.hero.secondaryCta}
            </a>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 flex flex-wrap gap-3"
          >
            {t.hero.trustItems.map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-white/72 px-4 py-2 text-sm text-[var(--text)]"
              >
                <CheckCircle2 className="h-4 w-4 text-[var(--accent-strong)]" />
                {item}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-[rgba(143,167,149,0.18)] via-transparent to-[rgba(215,192,166,0.18)] blur-2xl" />
          <div className="relative overflow-hidden rounded-[28px] border border-[var(--line)] bg-white/88 p-6 shadow-[0_24px_80px_rgba(50,61,56,0.12)] backdrop-blur-xl md:p-8">
            <div className="flex items-center justify-between rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]">{t.hero.stat1Label}</p>
                <p className="mt-1 text-sm font-medium text-[var(--text)]">{t.hero.stat1Value}</p>
              </div>
              <div className="rounded-full bg-[rgba(143,167,149,0.14)] p-3 text-[var(--accent-strong)]">
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>

            <div className="mt-6 rounded-3xl border border-[var(--line)] bg-gradient-to-br from-white to-[var(--bg-soft)] p-6">
              <div className="flex items-center gap-3 text-[var(--accent-strong)]">
                <div className="rounded-full bg-[rgba(143,167,149,0.14)] p-2">
                  <CalendarClock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{t.hero.stat2Label}</p>
                  <p className="text-lg font-semibold text-[var(--text)]">{t.hero.stat2Value}</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">{t.hero.fitTitle}</p>
                <div className="mt-4 space-y-3">
                  {t.hero.fitItems.map((item, index) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-[var(--line)] bg-white px-4 py-3 shadow-[0_10px_25px_rgba(50,61,56,0.06)]">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[rgba(143,167,149,0.12)] text-xs font-semibold text-[var(--accent-strong)]">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-6 text-[var(--text)]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
