import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Clock, Check, Star } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function Consulting() {
  const { t } = useLanguage();
  
  const handleBasicBooking = () => {
    window.location.href = "https://buy.stripe.com/7sY9AUa8i45Y7g81854Ni01";
  };

  const handlePremiumBooking = () => {
    window.location.href = "https://buy.stripe.com/9B65kEfsC0TMdEw2c94Ni02";
  };

  return (
    <section id="consulting" className="py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold">{t.consulting.title}</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.consulting.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 基础方案 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full relative">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold">{t.consulting.basicPlan.title}</CardTitle>
                <div className="text-3xl font-bold text-primary">$4.5</div>
                <p className="text-sm text-muted-foreground">{t.consulting.basicPlan.subtitle}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-base font-medium">{t.consulting.basicPlan.duration}</span>
                </div>

                <div className="space-y-3">
                  {t.consulting.basicPlan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button
                    onClick={handleBasicBooking}
                    className="w-full h-12 text-base"
                    variant="outline"
                  >
                    {t.consulting.basicPlan.button}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* 深度方案 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full relative border-primary">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  {t.consulting.premiumPlan.badge}
                </div>
              </div>
              
              <CardHeader className="text-center pb-4 pt-8">
                <CardTitle className="text-xl font-bold">{t.consulting.premiumPlan.title}</CardTitle>
                <div className="text-3xl font-bold text-primary">$35.5</div>
                <p className="text-sm text-muted-foreground">{t.consulting.premiumPlan.subtitle}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-base font-medium">{t.consulting.premiumPlan.duration}</span>
                </div>

                <div className="space-y-3">
                  {t.consulting.premiumPlan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Button
                    onClick={handlePremiumBooking}
                    className="w-full h-12 text-base"
                  >
                    {t.consulting.premiumPlan.button}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>{t.consulting.note}</p>
        </div>
      </div>
    </section>
  );
}