import { motion } from "framer-motion";
import { Database, Brain, Shield, Zap, Scale, Cloud } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const serviceIcons = [
  Database,
  Brain,
  Shield,
  Zap,
  Scale,
  Cloud,
];

export default function Services() {
  const { t } = useLanguage();
  
  return (
    <section id="services" className="py-24 relative">
      <div className="container max-w-6xl mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">{t.services.title}</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => {
            const IconComponent = serviceIcons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="glass-card h-full rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all">
                      <IconComponent className="h-6 w-6 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-medium text-white">{service.title}</h3>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}