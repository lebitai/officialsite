import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        isScrolled ? "bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#1A1A1A]" : "bg-transparent"
      }`}
    >
      <div className="container px-8 md:px-12 flex h-20 items-center justify-between">
        <Link href="/">
          <a className="text-2xl md:text-3xl font-bold tracking-tight text-gradient">
            LebitAI
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-12">
          <Link href="#services">
            <a className="text-base font-medium text-[#E5E5E5] hover:text-[#E5C992] transition-colors">
              Services
            </a>
          </Link>
          <Link href="#tech-stack">
            <a className="text-base font-medium text-[#E5E5E5] hover:text-[#E5C992] transition-colors">
              Technology
            </a>
          </Link>
          <Link href="#consulting">
            <Button variant="default" size="lg" className="btn-gradient">
              Book Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-[#E5E5E5] hover:text-[#E5C992] transition-colors"
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
              className="absolute top-full left-0 right-0 bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#1A1A1A] shadow-lg md:hidden"
            >
              <nav className="container px-8 py-8 flex flex-col items-center gap-6">
                <Link href="#services">
                  <a 
                    className="text-lg font-medium text-[#E5E5E5] hover:text-[#E5C992] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </a>
                </Link>
                <Link href="#tech-stack">
                  <a 
                    className="text-lg font-medium text-[#E5E5E5] hover:text-[#E5C992] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Technology
                  </a>
                </Link>
                <Link href="#consulting">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="w-[200px] mt-2 btn-gradient"
                    onClick={() => setIsMobileMenuOpen(false)}
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