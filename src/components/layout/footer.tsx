import { Link } from "wouter";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { scrollToSection } from "@/lib/scroll";
import { socialLinks } from "@/config/social";
import { Logo } from "@/components/ui/logo";

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M18.244 2H21.5l-7.11 8.127L22.75 22h-6.548l-5.13-7.103L4.86 22H1.602l7.605-8.694L1.25 2h6.714l4.636 6.425L18.244 2Zm-1.148 18.03h1.803L6.98 3.865H5.046L17.096 20.03Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3C4.16 3 3.4 3.77 3.4 4.78c0 .98.74 1.78 1.8 1.78h.02c1.1 0 1.84-.8 1.84-1.78C7.04 3.77 6.33 3 5.25 3ZM20.6 12.86c0-3.36-1.79-4.92-4.18-4.92-1.93 0-2.79 1.06-3.27 1.8V8.5H9.77c.04.82 0 11.5 0 11.5h3.38v-6.42c0-.34.03-.67.12-.91.27-.67.88-1.36 1.9-1.36 1.34 0 1.88 1.02 1.88 2.52V20H20.6v-7.14Z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative px-8 pb-10 pt-24 md:px-16">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--line)] to-transparent" />
      <div className="container mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[36px] border border-[var(--line)] bg-gradient-to-br from-white via-[var(--bg-soft)] to-[var(--sand-soft)] p-8 shadow-[0_28px_90px_rgba(50,61,56,0.12)] md:p-10">
          <div className="absolute -right-12 top-0 h-48 w-48 rounded-full bg-[rgba(143,167,149,0.14)] blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[rgba(215,192,166,0.18)] blur-3xl" />

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_360px] lg:items-start">
            <div>
              <div className="inline-flex rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
                <Logo className="gap-3" />
              </div>

              <div className="mt-8 max-w-2xl">
                <h2 className="text-3xl font-light tracking-tight text-[var(--text)] md:text-[2.5rem] md:leading-[1.08]">
                  {t.footer.headline}
                </h2>
                <p className="mt-4 text-base leading-7 text-[var(--muted)] md:text-lg">
                  {t.footer.subheadline}
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {t.footer.highlightItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm text-[var(--text)] shadow-[0_10px_24px_rgba(50,61,56,0.05)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-[var(--line)] bg-white/88 p-6 shadow-[0_16px_50px_rgba(50,61,56,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-strong)]">
                {t.footer.contact}
              </p>
              <h3 className="mt-3 text-2xl font-medium text-[var(--text)]">{t.footer.ctaTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{t.footer.ctaSubtitle}</p>

              <div className="mt-6 flex flex-col gap-3">
                <button
                  className="btn-primary-dark inline-flex items-center justify-center gap-2 py-4 text-sm"
                  onClick={(e) => scrollToSection("consulting", e, true)}
                >
                  {t.footer.primaryCta}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <a
                  href={socialLinks.email}
                  className="btn-outline-dark inline-flex items-center justify-center gap-2 py-4 text-sm"
                >
                  <Mail className="h-4 w-4" />
                  {t.footer.secondaryCta}
                </a>
              </div>

              <div className="mt-6 rounded-2xl border border-[var(--line)] bg-[var(--surface-strong)] px-4 py-4">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--muted)]">{t.footer.emailLabel}</p>
                <a
                  href={socialLinks.email}
                  className="mt-2 block text-base font-medium text-[var(--text)] hover:text-[var(--accent-strong)] transition-colors"
                >
                  {socialLinks.emailLabel}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-8 border-t border-[var(--line)] pt-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--muted)]">
                {t.footer.navigationTitle}
              </p>
              <nav className="flex flex-wrap gap-3">
                <Link
                  href="#services"
                  className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm text-[var(--text)] transition-colors hover:border-[#ccd4c8] hover:bg-[var(--bg-soft)]"
                  onClick={(e) => scrollToSection("services", e, true)}
                >
                  {t.footer.services}
                </Link>
                <Link
                  href="#consulting"
                  className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm text-[var(--text)] transition-colors hover:border-[#ccd4c8] hover:bg-[var(--bg-soft)]"
                  onClick={(e) => scrollToSection("consulting", e, true)}
                >
                  {t.footer.consulting}
                </Link>
                <Link
                  href="#tech-stack"
                  className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm text-[var(--text)] transition-colors hover:border-[#ccd4c8] hover:bg-[var(--bg-soft)]"
                  onClick={(e) => scrollToSection("tech-stack", e, true)}
                >
                  {t.nav.technology}
                </Link>
                <a
                  href={socialLinks.email}
                  className="rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm text-[var(--text)] transition-colors hover:border-[#ccd4c8] hover:bg-[var(--bg-soft)]"
                >
                  {t.footer.contact}
                </a>
              </nav>
            </div>

            <div className="flex items-center gap-3 md:justify-end">
              <a
                href={socialLinks.email}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--muted)] transition-colors hover:border-[var(--accent)] hover:bg-[rgba(143,167,149,0.1)] hover:text-[var(--accent-strong)]"
                title={socialLinks.emailLabel}
                aria-label={socialLinks.emailLabel}
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--muted)] transition-colors hover:border-[#ccd4c8] hover:bg-[var(--bg-soft)] hover:text-[var(--text)]"
                aria-label={t.ui.xAriaLabel}
              >
                <XIcon />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white text-[var(--muted)] transition-colors hover:border-[#ccd4c8] hover:bg-[var(--bg-soft)] hover:text-[var(--text)]"
                aria-label={t.ui.linkedInAriaLabel}
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-[var(--line)] pt-6">
            <p className="text-center text-sm text-[var(--muted)] md:text-left">
              {t.footer.copyright.replace("{year}", new Date().getFullYear().toString())}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
