import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Database, Brain, Shield, Zap, Scale } from "lucide-react";

const services = [
  {
    icon: Database,
    title: "Enterprise Blockchain Infrastructure Design",
    description: "Custom blockchain architecture tailored for enterprise needs with focus on scalability and security.",
  },
  {
    icon: Brain,
    title: "AI System Architecture Consulting",
    description: "Expert guidance on implementing and scaling AI systems within your existing infrastructure.",
  },
  {
    icon: Shield,
    title: "Security & Compliance Implementation",
    description: "Comprehensive security solutions ensuring regulatory compliance and data protection.",
  },
  {
    icon: Zap,
    title: "Technical Stack Modernization",
    description: "Transform legacy systems into modern, efficient, and scalable architectures.",
  },
  {
    icon: Scale,
    title: "Performance & Scalability Strategy",
    description: "Optimize your infrastructure for peak performance and seamless scaling capabilities.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for modern enterprise infrastructure needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <service.icon className="h-8 w-8 mb-4 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
