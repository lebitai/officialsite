import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/logo";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToConsulting = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#consulting')?.scrollIntoView({ 
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
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container px-8 md:px-12 flex h-20 items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <Link href="#services">
            <a className="text-base font-medium text-zinc-600 hover:text-[#645BFF] transition-colors">
              Services
            </a>
          </Link>
          <Link href="#technology">
            <a className="text-base font-medium text-zinc-600 hover:text-[#645BFF] transition-colors">
              Technology
            </a>
          </Link>
          <Link href="#consulting">
            <Button 
              size="lg" 
              className="btn-primary"
              onClick={scrollToConsulting}
            >
              Book Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-zinc-600 hover:text-[#645BFF] transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg md:hidden"
            >
              <nav className="container px-8 py-8 flex flex-col items-center gap-6">
                <Link href="#services">
                  <a 
                    className="text-lg font-medium text-zinc-600 hover:text-[#645BFF] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </a>
                </Link>
                <Link href="#technology">
                  <a 
                    className="text-lg font-medium text-zinc-600 hover:text-[#645BFF] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Technology
                  </a>
                </Link>
                <Link href="#consulting">
                  <Button 
                    size="lg" 
                    className="btn-primary w-[200px] mt-2"
                    onClick={scrollToConsulting}
                  >
                    Book Now
                  </Button>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}