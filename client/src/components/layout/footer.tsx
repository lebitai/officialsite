import { Link } from "wouter";
import { SiX, SiLinkedin } from "react-icons/si";
import { Logo } from "@/components/ui/logo";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container min-h-[50vh] md:min-h-0 py-8 md:py-12 flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="text-center md:text-left">
            <div className="mb-4">
              <Logo className="mx-auto md:mx-0" />
            </div>
            <p className="text-base md:text-sm text-muted-foreground">
              Empowering businesses with next-generation AI and blockchain solutions.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3 md:space-y-2">
              <li>
                <Link href="#services">
                  <a className="text-base md:text-sm text-muted-foreground hover:text-primary transition-colors">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#consulting">
                  <a className="text-base md:text-sm text-muted-foreground hover:text-primary transition-colors">
                    Consulting
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <a className="text-base md:text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-lg font-semibold mb-4">Connect</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://twitter.com/lebitai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <SiX className="h-7 w-7 md:h-6 md:w-6" />
              </a>
              <a
                href="https://linkedin.com/company/lebitai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <SiLinkedin className="h-7 w-7 md:h-6 md:w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-base md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} LebitAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}