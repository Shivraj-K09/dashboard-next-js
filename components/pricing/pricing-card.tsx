"use client";

import { cn } from "@/lib/utils";
import { CheckCircle2, CheckCircle2Icon } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type PricingCardProps = {
  title: string;
  monthlyPrice?: number;
  description: string;
  features: string[];
  actionLabel: string;
  popular?: boolean;
  exclusive?: boolean;
  selected: boolean;
  onSelect: () => void;
};

export const PricingHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <section className="text-center mt-10">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className=" text-muted-foreground">{subtitle}</p>
  </section>
);

export const PricingCard = ({
  title,
  monthlyPrice,
  description,
  features,
  actionLabel,
  selected,
  onSelect,
}: PricingCardProps) => (
  <Card
    className={cn(
      "w-72 h-90 flex flex-col justify-between py-1 border-zinc-700 mx-auto sm:mx-0 cursor-pointer",
      {
        "border-2 border-rose-400 animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors":
          selected,
      }
    )}
    onClick={onSelect}
  >
    <div>
      <CardHeader className="pb-8 pt-4">
        <div className="flex justify-between">
          <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">
            {title}
          </CardTitle>
        </div>

        <div className="flex gap-0.5">
          <h3 className="text-3xl font-bold">
            {monthlyPrice ? "$" + monthlyPrice : "Custom"}
          </h3>
          <span className="flex flex-col justify-end text-sm mb-1">
            {monthlyPrice ? `/month/user` : null}
          </span>
        </div>

        <CardDescription className="pt-1.5 h-12">{description}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-2 mb-5">
        {features.map((feature: string) => (
          <CheckItem key={feature} text={feature} />
        ))}
      </CardContent>
    </div>
    <CardFooter className="mt-2">
      <Button className="relative inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium  dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
        {selected ? "Plan Selected 🎉" : actionLabel}
      </Button>
    </CardFooter>
  </Card>
);

const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-2">
    <CheckCircle2 size={18} className="my-auto text-green-400" />
    <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
  </div>
);
