import { motion } from "framer-motion";
import { ArrowRight, Building2, Check, Clock, Star } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { consultingPlans } from "@/config/pricing";

export default function Consulting() {
  const { t } = useLanguage();
  
  const handleBooking = (planKey: keyof typeof consultingPlans) => {
    window.location.href = consultingPlans[planKey].stripeUrl;
  };

  const formatPrice = (priceUsd: number) => priceUsd.toFixed(2);

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mb-8 grid gap-4 md:grid-cols-3"
        >
          {t.consulting.assuranceItems.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm text-zinc-200 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-cyan-400/15 p-1.5 text-cyan-300">
                  <Check className="h-4 w-4" />
                </div>
                <span>{item}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Basic Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="glass-card h-full rounded-[28px] p-8 hover:bg-white/10 transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-xl font-medium text-white mb-2">{t.consulting.basicPlan.title}</h3>
                <div className="text-4xl font-light text-white mb-2">${formatPrice(consultingPlans.basic.priceUsd)}</div>
                <p className="text-sm text-zinc-400">{t.consulting.basicPlan.subtitle}</p>
              </div>

              <div className="mb-6 rounded-2xl border border-cyan-400/15 bg-cyan-400/8 px-4 py-3 text-sm text-cyan-100">
                {t.consulting.basicPlan.bestFor}
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
                  onClick={() => handleBooking("basic")}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 py-3 btn-outline-dark"
                >
                  {t.consulting.basicPlan.button}
                  <ArrowRight className="h-4 w-4" />
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
            <div className="glass-card relative h-full rounded-[28px] border-cyan-500/50 bg-gradient-to-b from-cyan-500/8 to-transparent p-8 shadow-[0_20px_60px_rgba(8,145,178,0.12)] transition-all duration-300 hover:bg-white/10">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  {t.consulting.premiumPlan.badge}
                </div>
              </div>
              
              <div className="text-center mb-6 pt-4">
                <h3 className="text-xl font-medium text-white mb-2">{t.consulting.premiumPlan.title}</h3>
                <div className="text-4xl font-light text-white mb-2">${formatPrice(consultingPlans.premium.priceUsd)}</div>
                <p className="text-sm text-zinc-400">{t.consulting.premiumPlan.subtitle}</p>
              </div>

              <div className="mb-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-50">
                {t.consulting.premiumPlan.bestFor}
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
                  onClick={() => handleBooking("premium")}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 py-3 btn-primary-dark"
                >
                  {t.consulting.premiumPlan.button}
                  <ArrowRight className="h-4 w-4" />
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
            <div className="glass-card relative h-full rounded-[28px] border-amber-500/50 p-8 transition-all duration-300 hover:bg-white/10">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Building2 className="h-3 w-3" />
                  {t.consulting.enterprisePlan.badge}
                </div>
              </div>
              
              <div className="text-center mb-6 pt-4">
                <h3 className="text-xl font-medium text-white mb-2">{t.consulting.enterprisePlan.title}</h3>
                <div className="text-4xl font-light text-white mb-2">${formatPrice(consultingPlans.enterprise.priceUsd)}</div>
                <p className="text-sm text-zinc-400">{t.consulting.enterprisePlan.subtitle}</p>
              </div>

              <div className="mb-6 rounded-2xl border border-amber-400/15 bg-amber-400/8 px-4 py-3 text-sm text-amber-50">
                {t.consulting.enterprisePlan.bestFor}
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
                  onClick={() => handleBooking("enterprise")}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 py-3 font-medium text-white transition-all duration-300 hover:from-amber-600 hover:to-orange-600"
                >
                  {t.consulting.enterprisePlan.button}
                  <ArrowRight className="h-4 w-4" />
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
