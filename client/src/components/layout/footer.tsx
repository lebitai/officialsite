import { Link } from "wouter";
import { SiX, SiLinkedin } from "react-icons/si";
import { Logo } from "@/components/ui/logo";
import { useLanguage } from "@/hooks/use-language";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="border-t">
      <div className="container max-w-4xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description Column */}
          <div className="flex flex-col items-center md:items-start">
            <Logo className="mb-4" />
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Empowering businesses with next-generation AI and blockchain solutions.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <nav className="flex flex-col items-center space-y-2">
              <Link href="#services">
                <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.services}
                </a>
              </Link>
              <Link href="#consulting">
                <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.consulting}
                </a>
              </Link>
              <Link href="#contact">
                <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.footer.contact}
                </a>
              </Link>
            </nav>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">{t.footer.social}</h3>
            <div className="flex items-center space-x-4">
              <a
                href="https://twitter.com/lebitai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <SiX className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/lebitai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}