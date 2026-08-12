import ServiceCard from "./ServiceCard";
import {
  ClipboardList,
  FolderKanban,
  Megaphone,
  Palette,
  SearchCheck,
  Users,
} from "lucide-react";

export default function ServicesList() {
  const services = [
    {
      icon: ClipboardList,
      title: "Administrative Support",
      description:
        "Keep your business organised with support for documentation, data management, email communication, scheduling, file organisation, CRM updates, quotations, invoices, and other day-to-day administrative tasks.",
    },
    {
      icon: FolderKanban,
      title: "Project Coordination",
      description:
        "Stay on top of projects with help tracking schedules, deadlines, tasks, project files, and documentation while keeping information organised and accessible.",
    },
    {
      icon: Megaphone,
      title: "Social Media & Marketing",
      description:
        "Build and maintain your online presence through content planning, social media scheduling, marketing materials, platform management, and audience-focused content.",
    },
    {
      icon: Palette,
      title: "Web & Graphic Design",
      description:
        "Create clean and engaging visual materials, website layouts, and UI designs using tools such as Figma, Canva, Photoshop, and Illustrator.",
    },
    {
      icon: SearchCheck,
      title: "Lead Generation & Research",
      description:
        "Support business growth through lead generation, prospect research, market research, business research, data gathering, and organised information that helps you make informed decisions.",
    },
    {
      icon: Users,
      title: "Business & Client Support",
      description:
        "Assist with client communications, business records, team coordination, and other operational tasks that help keep your business running smoothly.",
    },
  ];

  return (
    <section
      id="services-list"
      className="bg-white px-6 py-20 lg:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="font-poppins text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            What I Can Help With
          </p>

          <h2 className="mt-2 text-3xl font-playfair text-dark md:text-4xl">
            Support That Fits Your Business
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-poppins text-dark/70">
            Whether you need help behind the scenes or support growing your
            online presence, I can help take important tasks off your plate.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}