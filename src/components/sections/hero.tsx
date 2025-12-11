import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Glowing Ring as Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[440px] lg:h-[440px]"
      >
        {/* Outer glow - enhanced */}
        <div className="absolute -inset-16 rounded-full bg-gradient-to-t from-purple-600/25 via-cyan-500/15 to-blue-500/10 blur-[80px]" />
        <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-cyan-400/15 via-transparent to-purple-500/15 blur-[50px]" />
        
        {/* Main ring with enhanced glow */}
        <div className="absolute inset-0 rounded-full border border-cyan-400/30 shadow-[0_0_50px_rgba(6,182,212,0.35),0_0_100px_rgba(6,182,212,0.15),inset_0_0_50px_rgba(6,182,212,0.08)]" />
        
        {/* Inner subtle gradient */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-b from-transparent to-zinc-900/20" />
        
        {/* Floating stat cards */}
        <motion.div 
          className="absolute -left-12 md:-left-24 lg:-left-32 top-1/4 glass-card rounded-xl px-4 py-3"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex items-center gap-3">
            <div>
              <p className="text-[10px] text-zinc-400 uppercase tracking-wider">Web3 Solutions</p>
              <p className="text-sm font-semibold text-white">Enterprise Ready</p>
            </div>
            <div className="w-7 h-7 rounded-full bg-cyan-500/30 flex items-center justify-center">
              <ArrowRight className="h-3.5 w-3.5 text-cyan-400" />
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="absolute -right-12 md:-right-24 lg:-right-32 bottom-1/4 glass-card rounded-xl px-4 py-3"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex items-center gap-3">
            <div>
              <p className="text-[10px] text-zinc-400 uppercase tracking-wider">AI Integration</p>
              <p className="text-xl font-semibold text-white">96%</p>
            </div>
            <div className="w-7 h-7 rounded-full bg-purple-500/30 flex items-center justify-center">
              <ArrowRight className="h-3.5 w-3.5 text-purple-400" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Content Container */}
      <div className="container relative z-10 px-8 md:px-16 pt-20">
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 sm:mb-8 text-white leading-[1.1]"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}