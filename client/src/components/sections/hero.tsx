import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
      <div className="container relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 sm:mb-8"
          >
            Discover the joy of{" "}
            <span className="text-gradient">
              effortless
            </span>{" "}
            tech solutions
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
          >
            One platform for all your Web3 & AI infrastructure needs.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <Link href="#consulting">
              <Button 
                size="lg" 
                className="btn-primary text-base sm:text-lg h-12 px-8 sm:px-10"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#consulting')?.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }}
              >
                Get Started
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-pattern opacity-50" />
        <div className="absolute inset-0 pattern-grid opacity-25" />
      </div>
    </section>
  );
}