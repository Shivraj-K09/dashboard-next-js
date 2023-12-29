"use client";
import { useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { PricingCard, PricingHeader } from "@/components/pricing/pricing-card";

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      title: "Basic",
      monthlyPrice: 4,
      yearlyPrice: 100,
      description: "Essential features you need to get started",
      features: ["Up to 10 graphs", "Up to 500 chatbot queries"],
      actionLabel: "Get Started",
    },
    {
      title: "Pro",
      monthlyPrice: 8,
      yearlyPrice: 250,
      description: "Perfect for owners of small & medium businesses",
      features: [
        "Up to 50 graphs",
        "Up to 1000 chatbot queries",
        "Email + live chat support",
      ],
      actionLabel: "Get Started",
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Dedicated support and infrastructure to fit your needs",
      features: [
        "Unlimited graphs",
        "Ability to upload custom PDFs",
        "24/7 phone + email support",
      ],
      actionLabel: "Contact for Price",
      exclusive: true,
    },
  ];

  const handleSelectPlan = (title: string) => {
    setSelectedPlan(title === selectedPlan ? null : title);
  };

  return (
    <div className="md:flex md:flex-col md:justify-center md:items-center md:h-full md:my-16 md:py-10 lg:py-0 lg:my-0">
      <div className="flex items-center justify-center gap-x-5 md:mt-5 lg:mt-0">
        <PricingHeader
          title="Pricing Plans"
          subtitle="Choose the plan that's right for you"
        />
        <ThemeToggle />
      </div>
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
        {plans.map((plan) => (
          <PricingCard
            key={plan.title}
            {...plan}
            selected={plan.title === selectedPlan}
            onSelect={() => handleSelectPlan(plan.title)}
          />
        ))}
      </section>
    </div>
  );
}
