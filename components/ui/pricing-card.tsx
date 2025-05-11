import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  tier: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
  className?: string;
}

const PricingCard = ({
  tier,
  price,
  description,
  features,
  highlight = false,
  className,
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md",
        highlight && "border-primary before:absolute before:inset-0 before:-z-10 before:translate-y-2 before:translate-x-2 before:rounded-xl before:bg-primary/20 before:blur-xl",
        className
      )}
    >
      <div className="mb-4">
        <h3 className="text-xl font-semibold">{tier}</h3>
        <div className="mt-2 flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "£0" && <span className="ml-1 text-muted-foreground">/month</span>}
        </div>
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      </div>

      <ul className="mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="mr-2 h-5 w-5 shrink-0 text-primary" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button className={cn("w-full", highlight ? "bg-primary" : "bg-secondary text-secondary-foreground")}>
        Get Started
      </Button>
    </div>
  );
};

export default PricingCard;