import { motion } from "framer-motion";
import { SiEthereum, SiSolana } from "react-icons/si";
import { useLanguage } from "@/hooks/use-language";

interface TechItem {
  name: string;
  question: string;
  icon?: React.ComponentType<{ className?: string }> | string;
  customIcon?: React.ReactNode;
}

const blockchainTech: TechItem[] = [
  {
    icon: SiEthereum,
    name: "Ethereum",
    question: "Setup smart contract infrastructure?"
  },
  {
    name: "Filecoin",
    question: "Build decentralized storage?",
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
    question: "Scale blockchain operations?"
  }
];

const aiTech: TechItem[] = [
  {
    name: "DeepSeek",
    question: "Deploy custom LLMs?",
    icon: "🧠",
  },
  {
    name: "LLama3",
    question: "Implement open-source AI?",
    icon: "🦙",
  },
  {
    name: "QWen3",
    question: "Enterprise AI integration?",
    icon: "⚡",
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
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">{t.techStack.title}</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.techStack.questions.map((question, index) => {
            const techIndex = index % 6;
            const allTech = [...blockchainTech, ...aiTech];
            const tech = allTech[techIndex];
            const techName = index < 3 ? t.techStack.technologies.blockchain[index] || tech.name : t.techStack.technologies.ai[index - 3] || tech.name;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="glass-card h-full rounded-xl p-5 hover:bg-white/10 transition-all duration-300 group">
                  <div className="mb-4">
                    {tech.icon ? (
                      typeof tech.icon === 'string' ? (
                        <span className="text-2xl">{tech.icon}</span>
                      ) : (
                        <tech.icon className="h-6 w-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                      )
                    ) : (
                      <div className="h-6 w-6 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                        {tech.customIcon}
                      </div>
                    )}
                  </div>
                  <h3 className="text-sm font-medium text-white mb-2">{question}</h3>
                  <p className="text-xs text-zinc-500">{techName}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}