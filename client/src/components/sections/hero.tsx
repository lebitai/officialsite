import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden bg-[#F8FAFC]">
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
            Save time & money on{" "}
            <span className="bg-gradient-to-r from-primary/90 to-primary/70 bg-clip-text text-transparent">
              Web3 & AI
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto px-4"
          >
            Infrastructure setup, optimization, and maintenance.
            One automated platform.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link href="#consulting">
              <Button size="lg" className="text-base sm:text-lg h-12 px-6 sm:px-8">
                Book a demo
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFC]/80 via-[#F8FAFC] to-[#F8FAFC]/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(0 0 0 / 0.05) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>
    </section>
  );
}