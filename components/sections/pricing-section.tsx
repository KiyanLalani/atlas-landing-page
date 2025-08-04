"use client";

import { motion } from "framer-motion";
import PricingCard from "@/components/ui/pricing-card";

const pricingTiers = [
  {
    tier: "Free",
    price: "£0",
    description: "Basic access for casual users",
    features: [
      "Basic Q&A functionality",
      "Limited flashcards and quizzes",
      "15 tokens per week",
      "Community support"
    ]
  },
  {
    tier: "Premium",
    price: "£4.99",
    description: "Essential tools for serious students",
    features: [
      "Extended Q&A capabilities",
      "Revision scheduling",
      "Past paper mode",
      "Unlimited flashcards",
      "100 tokens per week",
      "Email support"
    ],
    highlight: true
  },
  {
    tier: "Excelsior",
    price: "£24.99",
    description: "Complete access for maximum results",
    features: [
      "Unlimited access to all features",
      "Advanced reasoning capabilities",
      "Deep research functionality",
      "Priority content updates",
      "Unlimited tokens",
      "Priority support"
    ]
  },
  {
    tier: "School License",
    price: "Custom",
    description: "Group access for educational institutions",
    features: [
      "Volume licensing for schools",
      "Custom integration options",
      "Analytics dashboard",
      "Curriculum alignment tools",
      "Dedicated account manager",
      "Training and onboarding"
    ]
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-gradient-to-b from-secondary/10 to-background px-4 py-24">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Choose the plan that works best for your learning needs.
          </p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <PricingCard
                tier={tier.tier}
                price={tier.price}
                description={tier.description}
                features={tier.features}
                highlight={tier.highlight}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;