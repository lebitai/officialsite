import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiEthereum, SiSolana } from "react-icons/si";

const blockchainTech = [
  {
    icon: SiEthereum,
    name: "Ethereum",
    question: "Setup smart contract infrastructure?"
  },
  {
    name: "Filecoin",
    question: "Build decentralized storage?",
    customIcon: (
      <svg viewBox="0 0 32 32" className="h-8 w-8" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-.171 7.226l-8.132 4.195v9.173l8.132 4.195 8.133-4.195v-9.173l-8.133-4.195zm0 1.548l6.326 3.652-2.284 1.286-4.042-2.335-4.042 2.335-2.284-1.286 6.326-3.652zm-6.262 5.89l1.86 1.048v3.888l4.402 2.542 4.401-2.542v-3.888l1.861-1.048v6.933l-6.262 3.277-6.262-3.277v-6.933z"
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

const aiTech = [
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
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="container max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Problems We Solve</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...blockchainTech, ...aiTech].map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {tech.icon ? (
                      typeof tech.icon === 'string' ? (
                        <span className="text-4xl">{tech.icon}</span>
                      ) : (
                        <tech.icon className="h-8 w-8 text-primary" />
                      )
                    ) : (
                      tech.customIcon
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{tech.question}</h3>
                  <p className="text-sm text-muted-foreground">{tech.name}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}