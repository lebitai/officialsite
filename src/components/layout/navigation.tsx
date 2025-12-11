import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

export default function Navigation() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string, e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(`#${sectionId}`)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-zinc-900/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container px-8 md:px-16 flex h-20 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-semibold text-white tracking-tight">
          LebitAI
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            href="#services"
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            onClick={(e) => scrollToSection('services', e)}
          >
            {t.nav.services}
          </Link>
          <Link 
            href="#tech-stack"
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            onClick={(e) => scrollToSection('tech-stack', e)}
          >
            {t.nav.technology}
          </Link>
          <Link 
            href="#consulting"
            className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
            onClick={(e) => scrollToSection('consulting', e)}
          >
            {t.nav.bookNow}
          </Link>
        </nav>

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            className="btn-primary-dark text-sm"
            onClick={(e) => scrollToSection('consulting', e)}
          >
            {t.nav.bookNow}
          </button>
          <LanguageSwitcher />
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-zinc-300 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-zinc-900/95 backdrop-blur-md md:hidden"
            >
              <nav className="container px-8 py-8 flex flex-col items-center gap-6">
                <Link 
                  href="#services"
                  className="text-lg font-medium text-zinc-300 hover:text-white transition-colors"
                  onClick={(e) => scrollToSection('services', e)}
                >
                  {t.nav.services}
                </Link>
                <Link 
                  href="#tech-stack"
                  className="text-lg font-medium text-zinc-300 hover:text-white transition-colors"
                  onClick={(e) => scrollToSection('tech-stack', e)}
                >
                  {t.nav.technology}
                </Link>
                <button 
                  className="btn-primary-dark w-[200px] mt-4"
                  onClick={(e) => scrollToSection('consulting', e)}
                >
                  {t.nav.bookNow}
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}