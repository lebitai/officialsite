import { Link } from "wouter";
import { Mail } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { scrollToSection } from "@/lib/scroll";
import { socialLinks } from "@/config/social";

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
    <footer className="border-t border-zinc-800">
      <div className="container max-w-6xl mx-auto py-16 px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description Column */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="text-xl font-semibold text-white tracking-tight mb-4">
              LebitAI
            </Link>
            <p className="text-sm text-zinc-400 text-center md:text-left">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-medium text-white mb-4">{t.footer.navigationTitle}</h3>
            <nav className="flex flex-col items-center space-y-2">
              <Link 
                href="#services"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
                onClick={(e) => scrollToSection("services", e, true)}
              >
                {t.footer.services}
              </Link>
              <Link 
                href="#consulting"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
                onClick={(e) => scrollToSection("consulting", e, true)}
              >
                {t.footer.consulting}
              </Link>
              <a
                href={socialLinks.email}
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {t.footer.contact}
              </a>
            </nav>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-medium text-white mb-4">{t.footer.social}</h3>
            <div className="flex items-center space-x-4">
              <a
                href={socialLinks.email}
                className="text-zinc-400 hover:text-cyan-400 transition-colors"
                title={socialLinks.emailLabel}
                aria-label={socialLinks.emailLabel}
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="LebitAI on X"
              >
                <XIcon />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="LebitAI on LinkedIn"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <p className="text-sm text-zinc-500 text-center">
            {t.footer.copyright.replace("{year}", new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  );
}
