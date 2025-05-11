"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import confetti from "canvas-confetti";

const plans = [
  {
    name: "Free",
    price: { monthly: "Free", yearly: "Free" },
    description: "Perfect for getting started",
    features: [
      "15 Tokens Per week",
      "Basic Q&A",
      "Basic Search",
      "Flashcards Generation",
      "Past Paper Search",
    ],
  },
  {
    name: "Pro",
    price: { monthly: "£4.99", yearly: "£47.90" },
    description: "Best for active learners",
    features: [
      "100 Tokens per week",
      "Basic Q&A",
      "Basic Search",
      "Flashcards Generation",
      "Past Paper Search",
      "Intelligent Quiz Generation",
      "Deep Research (5 chats per week)",
      "Diagram Generation",
      "Reasoning (10 chats per day)",
    ],
    popular: true,
  },
  {
    name: "Excelsior",
    price: { monthly: "£24.99", yearly: "£239.90" },
    description: "For maximum learning potential",
    features: [
      "Unlimited Tokens",
      "Basic Q&A",
      "Basic Search",
      "Flashcards Generation",
      "Past Paper Search",
      "Intelligent Quiz Generation",
      "Deep Research (5 chats per day)",
      "Diagram Generation",
      "Reasoning (50 chats per day)",
      "Customisable System Prompt",
    ],
  },
];

const PriceDisplay = ({ price }: { price: string }) => {
  if (price === "Free") return <span className="text-4xl font-bold">Free</span>;

  const [currency, amount] = price.split("£");
  
  return (
    <div className="flex items-baseline">
      <span className="text-4xl font-bold">£</span>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={amount}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
            duration: 0.5
          }}
          className="text-4xl font-bold"
        >
          {amount}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handlePurchase = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-primary/5 px-4 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Choose Your Plan
        </h1>
        <p className="text-muted-foreground">
          Select the perfect plan for your learning journey
        </p>
      </motion.div>

      <div className="mb-8 flex items-center gap-2">
        <span className={!isYearly ? "font-medium" : "text-muted-foreground"}>
          Monthly
        </span>
        <Switch
          checked={isYearly}
          onCheckedChange={setIsYearly}
          className="data-[state=checked]:bg-primary"
        />
        <span className={isYearly ? "font-medium" : "text-muted-foreground"}>
          Yearly (Save 20%)
        </span>
      </div>

      <div className="grid max-w-7xl gap-8 md:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative rounded-xl border bg-card p-8 ${
              plan.popular
                ? "border-primary shadow-lg shadow-primary/10"
                : "border-border"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Most Popular
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>
            </div>

            <div className="mb-6">
              <PriceDisplay price={isYearly ? plan.price.yearly : plan.price.monthly} />
              {plan.name !== "Free" && (
                <span className="text-muted-foreground">
                  {isYearly ? " / year" : " / month"}
                </span>
              )}
            </div>

            <ul className="mb-8 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              className="w-full"
              variant={plan.popular ? "default" : "outline"}
              onClick={handlePurchase}
            >
              {plan.name === "Free" ? "Get Started" : "Subscribe Now"}
            </Button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}