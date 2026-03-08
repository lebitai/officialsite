export type ConsultingPlanKey = "basic" | "premium" | "enterprise";

export const consultingPlans: Record<ConsultingPlanKey, { priceUsd: number; stripeUrl: string }> = {
  basic: {
    priceUsd: 19.9,
    stripeUrl: "https://buy.stripe.com/14AfZi80a7ia6c4bMJ4Ni04",
  },
  premium: {
    priceUsd: 65,
    stripeUrl: "https://buy.stripe.com/6oU5kE1BMdGy5808Ax4Ni05",
  },
  enterprise: {
    priceUsd: 275,
    stripeUrl: "https://buy.stripe.com/7sY28s4NY31U5803gd4Ni03",
  },
};
