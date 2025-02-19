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
      <svg viewBox="0 0 32 32" className="h-8 w-8">
        <path
          fill="currentColor"
          d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16c8.837 0 16-7.163 16-16S24.837 0 16 0zm5.5 21.5h-11v-3h11v3zm0-8h-11v-3h11v3z"
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
      <svg viewBox="0 0 32 32" className="h-8 w-8">
        <path
          fill="currentColor"
          d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16c8.837 0 16-7.163 16-16S24.837 0 16 0zm5.5 21.5h-11v-3h11v3zm0-8h-11v-3h11v3z"
        />
      </svg>
    ),
  },
  {
    name: "Chia",
    customIcon: (
      <svg viewBox="0 0 32 32" className="h-8 w-8">
        <path
          fill="currentColor"
          d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16c8.837 0 16-7.163 16-16S24.837 0 16 0zm2 24h-4v-4h4v4zm0-8h-4V8h4v8z"
        />
      </svg>
    ),
  },
  {
    name: "Spacemesh",
    customIcon: (
      <svg viewBox="0 0 32 32" className="h-8 w-8">
        <path
          fill="currentColor"
          d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"
        />
      </svg>
    ),
  },
];

const aiTech = [
  {
    name: "DeepSeek",
    description: "Advanced language model architecture",
  },
  {
    name: "LLama3",
    description: "State-of-the-art open-source LLM",
  },
  {
    name: "QWen3",
    description: "Enterprise-grade generative AI",
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
          <h2 className="text-3xl font-bold mb-4">Our Technical Expertise</h2>
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