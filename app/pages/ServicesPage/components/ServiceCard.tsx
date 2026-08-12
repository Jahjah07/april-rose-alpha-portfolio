import { LucideIcon, ArrowUpRight } from "lucide-react";
import { MotionButton } from "@/app/components/Motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <MotionButton
      whileHover={{ y: -5 }}
      className="group h-full w-full text-left"
    >
      <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-background p-7 shadow-sm transition-shadow duration-300 group-hover:shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/40">
            <Icon
              className="h-6 w-6 text-primary"
              strokeWidth={1.7}
            />
          </div>

          <ArrowUpRight
            className="h-5 w-5 text-dark/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"
            strokeWidth={1.7}
          />
        </div>

        <h3 className="text-2xl font-playfair text-dark">
          {title}
        </h3>

        <p className="mt-3 flex-1 font-poppins text-sm leading-7 text-dark/70">
          {description}
        </p>

        <div className="mt-6 h-px w-10 bg-primary transition-all duration-300 group-hover:w-16" />
      </div>
    </MotionButton>
  );
}