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
        isScrolled ? "bg-background/95 backdrop-blur-md border-b" : "bg-transparent"
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/">
          <a className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            LebitAI
          </a>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services">
            <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
          </Link>
          <Link href="#tech-stack">
            <a className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Technology
            </a>
          </Link>
          <Link href="#consulting">
            <Button variant="default" size="lg" className="ml-4">
              Book Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-muted-foreground hover:text-primary transition-colors"
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
              className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b shadow-lg md:hidden"
            >
              <nav className="container py-4 flex flex-col gap-4">
                <Link href="#services">
                  <a 
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </a>
                </Link>
                <Link href="#tech-stack">
                  <a 
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Technology
                  </a>
                </Link>
                <Link href="#consulting">
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="w-full"
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