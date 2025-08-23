import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
    <section id="services" className="py-20 bg-muted/20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">{t.services.title}</h2>
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
                <Card className="h-full">
                  <div className="flex flex-col h-full p-6">
                    <div className="flex items-center justify-center md:justify-start mb-6">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-4">{service.title}</CardTitle>
                    <p className="text-muted-foreground flex-grow flex items-center">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}