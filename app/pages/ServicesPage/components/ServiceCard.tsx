import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const Icon = icon;

  return (
    <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-secondary/20 bg-secondary/10 text-primary">
        <Icon aria-hidden="true" className="h-7 w-7" strokeWidth={1.8} />
      </div>
      <h3 className="text-lg font-semibold text-dark text-center">{title}</h3>
      <p className="text-sm text-dark/80 font-poppins text-center">{description}</p>
    </div>
  );
}
