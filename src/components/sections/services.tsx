import { motion } from "framer-motion";
import { Database, Brain, Shield, Zap, Scale, Cloud } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

const serviceIconMap = {
  blockchain: Database,
  ai: Brain,
  web3: Shield,
  smartContract: Zap,
  defi: Scale,
  osaasc: Cloud,
} as const;

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
          <h2 className="text-3xl md:text-4xl font-light text-[var(--text)] mb-4">{t.services.title}</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-[var(--accent-strong)] to-[var(--sand)] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.services.items.map((service, index) => {
            const IconComponent = serviceIconMap[service.iconKey] ?? Database;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="glass-card h-full rounded-2xl p-6 transition-all duration-300 group hover:-translate-y-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[rgba(143,167,149,0.14)] to-[rgba(215,192,166,0.16)] flex items-center justify-center transition-all">
                      <IconComponent className="h-6 w-6 text-[var(--accent-strong)]" />
                    </div>
                    <h3 className="text-lg font-medium text-[var(--text)]">{service.title}</h3>
                  </div>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">
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
