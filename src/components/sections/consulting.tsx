import { motion } from "framer-motion";
import { Clock, Check, Star, Building2 } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function Consulting() {
  const { t } = useLanguage();
  
  const handleBasicBooking = () => {
    window.location.href = "https://buy.stripe.com/7sY9AUa8i45Y7g81854Ni01";
  };

  const handlePremiumBooking = () => {
    window.location.href = "https://buy.stripe.com/9B65kEfsC0TMdEw2c94Ni02";
  };

  const handleEnterpriseBooking = () => {
    window.location.href = "https://buy.stripe.com/7sY28s4NY31U5803gd4Ni03";
  };

  return (
    <section id="consulting" className="py-24 relative">
      <div className="container max-w-7xl mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">{t.consulting.title}</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mb-6" />
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            {t.consulting.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Basic Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass-card h-full rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-xl font-medium text-white mb-2">{t.consulting.basicPlan.title}</h3>
                <div className="text-4xl font-light text-white mb-2">$4.5</div>
                <p className="text-sm text-zinc-400">{t.consulting.basicPlan.subtitle}</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-zinc-300">
                  <Clock className="h-5 w-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-sm">{t.consulting.basicPlan.duration}</span>
                </div>

                <div className="space-y-3">
                  {t.consulting.basicPlan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleBasicBooking}
                  className="w-full btn-outline-dark py-3 mt-4"
                >
                  {t.consulting.basicPlan.button}
                </button>
              </div>
            </div>
          </motion.div>

          {/* Premium Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card h-full rounded-2xl p-8 relative border-cyan-500/50 hover:bg-white/10 transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  {t.consulting.premiumPlan.badge}
                </div>
              </div>
              
              <div className="text-center mb-6 pt-4">
                <h3 className="text-xl font-medium text-white mb-2">{t.consulting.premiumPlan.title}</h3>
                <div className="text-4xl font-light text-white mb-2">$35.5</div>
                <p className="text-sm text-zinc-400">{t.consulting.premiumPlan.subtitle}</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-zinc-300">
                  <Clock className="h-5 w-5 text-purple-400 flex-shrink-0" />
                  <span className="text-sm">{t.consulting.premiumPlan.duration}</span>
                </div>

                <div className="space-y-3">
                  {t.consulting.premiumPlan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handlePremiumBooking}
                  className="w-full btn-primary-dark py-3 mt-4"
                >
                  {t.consulting.premiumPlan.button}
                </button>
              </div>
            </div>
          </motion.div>
          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="glass-card h-full rounded-2xl p-8 relative border-amber-500/50 hover:bg-white/10 transition-all duration-300">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Building2 className="h-3 w-3" />
                  {t.consulting.enterprisePlan.badge}
                </div>
              </div>
              
              <div className="text-center mb-6 pt-4">
                <h3 className="text-xl font-medium text-white mb-2">{t.consulting.enterprisePlan.title}</h3>
                <div className="text-4xl font-light text-white mb-2">$275</div>
                <p className="text-sm text-zinc-400">{t.consulting.enterprisePlan.subtitle}</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-zinc-300">
                  <Clock className="h-5 w-5 text-amber-400 flex-shrink-0" />
                  <span className="text-sm">{t.consulting.enterprisePlan.duration}</span>
                </div>

                <div className="space-y-3">
                  {t.consulting.enterprisePlan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleEnterpriseBooking}
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-full font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300 mt-4"
                >
                  {t.consulting.enterprisePlan.button}
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-10 text-sm text-zinc-500">
          <p>{t.consulting.note}</p>
        </div>
      </div>
    </section>
  );
}