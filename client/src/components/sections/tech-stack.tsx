import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiEthereum, SiSolana } from "react-icons/si";

const blockchainTech = [
  {
    icon: SiEthereum,
    name: "Ethereum",
  },
  {
    name: "Filecoin",
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
  },
  {
    name: "Sui",
    customIcon: (
      <svg viewBox="0 0 32 32" className="h-8 w-8" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-3.434 7.452l3.434 1.984 3.434-1.984v13.548l-3.434 1.984-3.434-1.984V7.452zm6.868 0l3.434 1.984v13.548l-3.434 1.984V7.452zM9.132 7.452v13.548l-3.434 1.984V9.436l3.434-1.984z"
        />
      </svg>
    ),
  },
  {
    name: "Chia",
    customIcon: (
      <svg viewBox="0 0 32 32" className="h-8 w-8" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-.5 6.5v5h-5v3h5v7h-5v3h5v5h3v-5h5v-3h-5v-7h5v-3h-5v-5h-3z"
        />
      </svg>
    ),
  },
  {
    name: "Spacemesh",
    customIcon: (
      <svg viewBox="0 0 32 32" className="h-8 w-8" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm-4.5 8.5l-3 5.196h6l-3-5.196zm9 0l-3 5.196h6l-3-5.196zm-4.5 7.804l-3 5.196h6l-3-5.196z"
        />
      </svg>
    ),
  },
];

const aiTech = [
  {
    name: "DeepSeek",
    description: "Advanced language model architecture",
    icon: "🧠",
  },
  {
    name: "LLama3",
    description: "State-of-the-art open-source LLM",
    icon: "🦙",
  },
  {
    name: "QWen3",
    description: "Enterprise-grade generative AI",
    icon: "⚡",
  },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-muted/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Leveraging cutting-edge blockchain and AI technologies
          </p>
        </motion.div>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">Blockchain Infrastructure</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {blockchainTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      {tech.icon ? (
                        <tech.icon className="h-8 w-8 mb-3 text-primary" />
                      ) : (
                        <div className="mb-3 text-primary">{tech.customIcon}</div>
                      )}
                      <span className="font-medium">{tech.name}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-center">GenAI Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {aiTech.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                      <span className="text-4xl mb-4">{tech.icon}</span>
                      <span className="font-medium mb-2">{tech.name}</span>
                      <p className="text-sm text-muted-foreground">{tech.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}