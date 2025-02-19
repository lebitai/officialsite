import { Link } from "wouter";
import { SiX, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">LebitAI</h3>
            <p className="text-sm text-muted-foreground">
              Empowering businesses with next-generation AI and blockchain solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services">
                  <a className="text-sm text-muted-foreground hover:text-primary">
                    Services
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#consulting">
                  <a className="text-sm text-muted-foreground hover:text-primary">
                    Consulting
                  </a>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <a className="text-sm text-muted-foreground hover:text-primary">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/lebitai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <SiX className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/company/lebitai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <SiLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} LebitAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}