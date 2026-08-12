import {
  ClipboardList,
  FolderKanban,
  Megaphone,
  Palette,
  SearchCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import {
  Reveal,
  Stagger,
  StaggerItem,
  MotionLink,
} from "@/app/components/Motion";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function Services() {
  const services: Service[] = [
    {
      icon: ClipboardList,
      title: "Administrative Support",
      description:
        "Email and calendar management, documentation, data entry, file organisation, and day-to-day administrative tasks.",
    },
    {
      icon: FolderKanban,
      title: "Project Coordination",
      description:
        "Task tracking, project organisation, documentation, deadlines, and keeping important details on track.",
    },
    {
      icon: Megaphone,
      title: "Social Media & Marketing",
      description:
        "Content planning, social media support, marketing materials, and maintaining a consistent online presence.",
    },
    {
      icon: Palette,
      title: "Web & Graphic Design",
      description:
        "Website layouts, visual materials, content updates, and creative support using modern design tools.",
    },
    {
      icon: SearchCheck,
      title: "Lead Generation & Research",
      description:
        "Lead generation, prospect research, market research, data gathering, and organised business information.",
    },
    {
      icon: Users,
      title: "Business & Client Support",
      description:
        "Client communication, coordination, business records, and operational support to keep things running smoothly.",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-background px-6 py-20 lg:px-20"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

      <div className="pointer-events-none absolute right-0 top-1/4 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />

      <div className="pointer-events-none absolute bottom-10 right-24 h-32 w-32 rounded-full bg-accent/30 blur-2xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <Reveal className="text-center">
          <div className="mb-4 inline-block rounded-md bg-secondary p-1">
            <p className="text-xl text-playfair">
              How I Can Help
            </p>
          </div>

          <h2 className="mb-4 text-4xl font-playfair text-dark sm:text-5xl">
            Services
          </h2>

          <p className="mx-auto max-w-2xl font-poppins text-base leading-8 text-dark/70 sm:text-lg">
            From keeping your business organised to supporting your online
            presence, I can help take important tasks off your plate so you
            can focus on what matters most.
          </p>
        </Reveal>

        {/* Services */}
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <StaggerItem
                key={service.title}
                className="group rounded-[28px] border border-slate-200/70 bg-white/90 p-7 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-secondary/20 bg-secondary/10 text-primary transition-all duration-300 group-hover:bg-secondary/20">
                  <Icon
                    aria-hidden="true"
                    className="h-6 w-6"
                    strokeWidth={1.7}
                  />
                </div>

                <h3 className="mb-3 font-playfair text-2xl text-dark">
                  {service.title}
                </h3>

                <p className="font-poppins text-sm leading-7 text-dark/70">
                  {service.description}
                </p>

                <div className="mt-6 h-0.5 w-8 bg-primary/60 transition-all duration-300 group-hover:w-14" />
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* CTA */}
        <Reveal delay={0.08} className="mt-12 flex justify-center">
          <MotionLink
            href="/services"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 font-poppins text-sm font-semibold text-white shadow-md shadow-primary/20 transition hover:bg-primary/90"
          >
            Explore My Services
          </MotionLink>
        </Reveal>
      </div>
    </section>
  );
}