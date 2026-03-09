import { motion } from "framer-motion";
import { SiEthereum, SiSolana } from "react-icons/si";
import { useLanguage } from "@/hooks/use-language";

interface TechItem {
  name: string;
  icon?: React.ComponentType<{ className?: string }> | string;
  customIcon?: React.ReactNode;
  group: "blockchain" | "ai";
}

const blockchainTech: TechItem[] = [
  {
    icon: SiEthereum,
    name: "Ethereum",
    group: "blockchain",
  },
  {
    name: "Filecoin",
    group: "blockchain",
    customIcon: (
      <svg viewBox="0 0 32 32" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-.171 7.226l-8.132 4.195v9.173l8.132 4.195 8.133-4.195v-9.173l-8.133-4.195z"
        />
      </svg>
    ),
  },
  {
    icon: SiSolana,
    name: "Solana",
    group: "blockchain",
  }
];

const aiTech: TechItem[] = [
  {
    name: "DeepSeek",
    icon: "🧠",
    group: "ai",
  },
  {
    name: "LLama3",
    icon: "🦙",
    group: "ai",
  },
  {
    name: "QWen3",
    icon: "⚡",
    group: "ai",
  }
];

export default function TechStack() {
  const { t } = useLanguage();
  
  return (
    <section id="tech-stack" className="py-24 relative">
      <div className="container max-w-6xl mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[var(--text)] mb-4">{t.techStack.title}</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-[var(--accent-strong)] to-[var(--sand)] mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.techStack.items.map((item, index) => {
            const allTech = [...blockchainTech, ...aiTech];
            const tech = allTech.find((tItem) => tItem.name === item.technology) ?? allTech[index % allTech.length];

            return (
              <motion.div
                key={`${item.technology}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="glass-card h-full rounded-xl p-5 transition-all duration-300 group hover:-translate-y-1">
                  <div className="mb-4">
                    {tech.icon ? (
                      typeof tech.icon === 'string' ? (
                        <span className="text-2xl" aria-hidden="true">{tech.icon}</span>
                      ) : (
                        <tech.icon className="h-6 w-6 text-[var(--accent-strong)] transition-colors" />
                      )
                    ) : (
                      <div className="h-6 w-6 text-[var(--accent-strong)] transition-colors">
                        {tech.customIcon}
                      </div>
                    )}
                  </div>
                  <h3 className="text-sm font-medium text-[var(--text)] mb-2">{item.question}</h3>
                  <p className="text-xs text-[var(--muted)]">{item.technology}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
