import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { useTypewriter } from "@/hooks/use-typewriter";

export default function Hero() {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion() ?? false;
  const { text: displayText, showCursor } = useTypewriter(t.hero.rotatingWords, {
    typeSpeed: 180,
    deleteSpeed: 100,
    pauseTime: 2600,
    disabled: prefersReducedMotion,
  });
  
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-8 md:px-16">
      {/* Content Container - Text at top */}
      <div className="relative z-10 text-center max-w-4xl mx-auto mb-8 md:mb-12">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? undefined : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.h1 
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6 sm:mb-8 text-white leading-[1.1]"
          >
            {t.hero.titlePrefix}<br />
            {t.hero.titleSuffix} <span aria-hidden="true">&ldquo;</span>
            <span className="text-cyan-400">{displayText}</span>
            {showCursor && <span className="animate-pulse">|</span>}
            <span aria-hidden="true">&rdquo;</span>
          </motion.h1>

          <motion.p 
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={prefersReducedMotion ? undefined : { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto"
          >
            {t.hero.subtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* Glowing Ring - centered below text */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={prefersReducedMotion ? undefined : { duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] lg:w-[440px] lg:h-[440px]"
      >
        {/* Outer glow - enhanced */}
        <div className="absolute -inset-16 rounded-full bg-gradient-to-t from-purple-600/20 via-cyan-500/12 to-blue-500/8 blur-[60px] sm:blur-[80px]" />
        <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-cyan-400/12 via-transparent to-purple-500/12 blur-[40px] sm:blur-[50px]" />
        
        {/* Main ring with enhanced glow */}
        <div className="absolute inset-0 rounded-full border border-cyan-400/30 shadow-[0_0_50px_rgba(6,182,212,0.35),0_0_100px_rgba(6,182,212,0.15),inset_0_0_50px_rgba(6,182,212,0.08)]" />
        
        {/* Inner subtle gradient */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-b from-transparent to-zinc-900/20" />
        
        {/* Floating stat cards - inside the ring with floating animation */}
        <motion.div 
          className="absolute -left-8 md:-left-16 lg:-left-20 top-1/3 glass-card rounded-xl px-4 py-3 z-20"
          initial={prefersReducedMotion ? false : { opacity: 0, x: -30 }}
          animate={
            prefersReducedMotion
              ? { opacity: 1 }
              : { opacity: 1, x: 0, y: [0, -8, 0] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  opacity: { duration: 0.8, delay: 1 },
                  x: { duration: 0.8, delay: 1 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                }
          }
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
          className="absolute -right-8 md:-right-16 lg:-right-20 bottom-1/3 glass-card rounded-xl px-4 py-3 z-20"
          initial={prefersReducedMotion ? false : { opacity: 0, x: 30 }}
          animate={
            prefersReducedMotion
              ? { opacity: 1 }
              : { opacity: 1, x: 0, y: [0, 8, 0] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  opacity: { duration: 0.8, delay: 1.2 },
                  x: { duration: 0.8, delay: 1.2 },
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                }
          }
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
    </section>
  );
}
