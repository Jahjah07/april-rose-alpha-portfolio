import { Reveal, Stagger, StaggerItem, MotionLink } from "@/app/components/Motion";
import {
  CalendarCheck,
  ClipboardList,
  Headphones,
  SearchCheck,
  Settings,
  Workflow,
  type LucideIcon,
} from "lucide-react";

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
      description: "Inbox and email management, data entry, document preparation, and file organization."
    },
    {
      icon: CalendarCheck,
      title: "Calendar & Email Management",
      description: "Scheduling appointments, managing calendars, email organization, and reminders."
    },
    {
      icon: Headphones,
      title: "Customer Support",
      description: "Responding to inquiries, handling messages, and providing excellent client service."
    },
    {
      icon: SearchCheck,
      title: "Data Entry & Research",
      description: "Accurate data entry, online research, and information gathering you can rely on."
    },
    {
      icon: Settings,
      title: "Website & Tech Assistance",
      description: "Website updates, content uploads, basic troubleshooting, and tech support."
    },
    {
      icon: Workflow,
      title: "Project Management",
      description: "Task coordination, project tracking, and ensuring deadlines are met."
    }
  ];

  return (
    <section id="services" className="relative overflow-hidden py-20 px-6 lg:px-20 bg-background">
      <div className="pointer-events-none absolute -left-16 top-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl opacity-80" />
      <div className="pointer-events-none absolute right-0 top-1/4 h-64 w-64 rounded-full bg-primary/20 blur-3xl opacity-90" />
      <div className="pointer-events-none absolute right-24 bottom-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl opacity-80" />
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center relative z-10">
          <p className="text-sm uppercase tracking-[0.32em] text-secondary mb-4">How I can help</p>
          <h2 className="text-4xl sm:text-5xl font-playfair text-dark mb-4">Services</h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg leading-8 text-dark/70 font-poppins">
            I offer a range of virtual assistance services to help you save time, stay organized, and grow your business with ease.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <StaggerItem
                key={index}
                className="group rounded-[32px] bg-white/90 p-8 shadow-xl shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full border border-secondary/20 bg-secondary/10 text-primary shadow-sm transition group-hover:border-secondary/30 group-hover:bg-secondary/15">
                  <Icon aria-hidden="true" className="h-7 w-7" strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">{service.title}</h3>
                <p className="text-sm leading-7 text-dark/75 font-poppins">{service.description}</p>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.08} className="mt-12 flex justify-center">
          <MotionLink
            href="/services"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-white shadow-md shadow-secondary/30 transition hover:bg-secondary/90"
          >
            View All Services
          </MotionLink>
        </Reveal>
      </div>
    </section>
  );
}
          
