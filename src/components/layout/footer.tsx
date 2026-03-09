import { Link } from "wouter";
import { SiX, SiLinkedin } from "react-icons/si";
import { Mail } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { scrollToSection } from "@/lib/scroll";
import { socialLinks } from "@/config/social";

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
                <SiX className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="LebitAI on LinkedIn"
              >
                <SiLinkedin className="h-5 w-5" />
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
