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
          <h2 className="text-3xl md:text-4xl font-light text-[var(--text)] mb-4">{t.consulting.title}</h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-[var(--accent-strong)] to-[var(--sand)] mx-auto mb-6" />
          <p className="text-[var(--muted)] text-lg max-w-2xl mx-auto">
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
              className="rounded-2xl border border-[var(--line)] bg-white px-5 py-4 text-sm text-[var(--text)] shadow-[0_14px_30px_rgba(50,61,56,0.06)]"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 rounded-full bg-[rgba(143,167,149,0.12)] p-1.5 text-[var(--accent-strong)]">
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
            <div className="glass-card h-full rounded-[28px] p-8 transition-all duration-300 hover:-translate-y-1">
              <div className="text-center mb-6">
                <h3 className="text-xl font-medium text-[var(--text)] mb-2">{t.consulting.basicPlan.title}</h3>
                <div className="text-4xl font-light text-[var(--text)] mb-2">${formatPrice(consultingPlans.basic.priceUsd)}</div>
                <p className="text-sm text-[var(--muted)]">{t.consulting.basicPlan.subtitle}</p>
              </div>

              <div className="mb-6 rounded-2xl border border-[rgba(143,167,149,0.18)] bg-[rgba(143,167,149,0.1)] px-4 py-3 text-sm text-[var(--accent-strong)]">
                {t.consulting.basicPlan.bestFor}
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-[var(--muted)]">
                  <Clock className="h-5 w-5 text-[var(--accent-strong)] flex-shrink-0" />
                  <span className="text-sm">{t.consulting.basicPlan.duration}</span>
                </div>

                <div className="space-y-3">
                  {t.consulting.basicPlan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--accent-strong)] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--text)]">{feature}</span>
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
            <div className="glass-card relative h-full rounded-[28px] border-[rgba(143,167,149,0.3)] bg-gradient-to-b from-[rgba(143,167,149,0.14)] to-white p-8 shadow-[0_22px_60px_rgba(50,61,56,0.1)] transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-[var(--accent-strong)] to-[#9d8e78] text-white px-4 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Star className="h-3 w-3" />
                  {t.consulting.premiumPlan.badge}
                </div>
              </div>
              
              <div className="text-center mb-6 pt-4">
                <h3 className="text-xl font-medium text-[var(--text)] mb-2">{t.consulting.premiumPlan.title}</h3>
                <div className="text-4xl font-light text-[var(--text)] mb-2">${formatPrice(consultingPlans.premium.priceUsd)}</div>
                <p className="text-sm text-[var(--muted)]">{t.consulting.premiumPlan.subtitle}</p>
              </div>

              <div className="mb-6 rounded-2xl border border-[rgba(143,167,149,0.22)] bg-[rgba(143,167,149,0.12)] px-4 py-3 text-sm text-[var(--accent-strong)]">
                {t.consulting.premiumPlan.bestFor}
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-[var(--muted)]">
                  <Clock className="h-5 w-5 text-[var(--accent-strong)] flex-shrink-0" />
                  <span className="text-sm">{t.consulting.premiumPlan.duration}</span>
                </div>

                <div className="space-y-3">
                  {t.consulting.premiumPlan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[var(--accent-strong)] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--text)]">{feature}</span>
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
            <div className="glass-card relative h-full rounded-[28px] border-[rgba(215,192,166,0.46)] bg-gradient-to-b from-[rgba(245,235,223,0.72)] to-white p-8 transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-[#ba8d5a] to-[#d1ac79] text-white px-4 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Building2 className="h-3 w-3" />
                  {t.consulting.enterprisePlan.badge}
                </div>
              </div>
              
              <div className="text-center mb-6 pt-4">
                <h3 className="text-xl font-medium text-[var(--text)] mb-2">{t.consulting.enterprisePlan.title}</h3>
                <div className="text-4xl font-light text-[var(--text)] mb-2">${formatPrice(consultingPlans.enterprise.priceUsd)}</div>
                <p className="text-sm text-[var(--muted)]">{t.consulting.enterprisePlan.subtitle}</p>
              </div>

              <div className="mb-6 rounded-2xl border border-[rgba(215,192,166,0.36)] bg-[rgba(245,235,223,0.88)] px-4 py-3 text-sm text-[#916740]">
                {t.consulting.enterprisePlan.bestFor}
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3 text-[var(--muted)]">
                  <Clock className="h-5 w-5 text-[#ba8d5a] flex-shrink-0" />
                  <span className="text-sm">{t.consulting.enterprisePlan.duration}</span>
                </div>

                <div className="space-y-3">
                  {t.consulting.enterprisePlan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#ba8d5a] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--text)]">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handleBooking("enterprise")}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ba8d5a] to-[#d1ac79] py-3 font-medium text-white transition-all duration-300 hover:from-[#a97c49] hover:to-[#c89d66]"
                >
                  {t.consulting.enterprisePlan.button}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-10 text-sm text-[var(--muted)]">
          <p>{t.consulting.note}</p>
        </div>
      </div>
    </section>
  );
}
