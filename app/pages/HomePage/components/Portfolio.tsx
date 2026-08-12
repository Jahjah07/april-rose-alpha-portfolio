import {
  BriefcaseBusiness,
  Globe,
  Megaphone,
  SearchCheck,
} from "lucide-react";

import {
  Reveal,
  Stagger,
  StaggerItem,
  MotionLink,
} from "@/app/components/Motion";

type Project = {
  icon: typeof BriefcaseBusiness;
  category: string;
  title: string;
  description: string;
  skills: string[];
  image?: string;
};

export default function Portfolio() {
  const projects: Project[] = [
    {
      icon: Megaphone,
      category: "Social Media & Content",
      title: "Social Media Support",
      description:
        "Supporting business social media through content preparation, visual materials, organisation, and ongoing account activity.",
      skills: [
        "Social Media",
        "Content Support",
        "Canva",
        "Visual Design",
      ],
    },
    {
      icon: BriefcaseBusiness,
      category: "Administrative Support",
      title: "Business Administration",
      description:
        "Helping keep day-to-day business tasks organised through documentation, data management, file organisation, and administrative support.",
      skills: [
        "Data Entry",
        "Documentation",
        "Organisation",
        "Administrative Support",
      ],
    },
    {
      icon: Globe,
      category: "Website & Digital",
      title: "Website & Digital Support",
      description:
        "Providing support with website content, digital assets, updates, and other online business tasks.",
      skills: [
        "Website Support",
        "Content Updates",
        "Digital Tools",
        "Design",
      ],
    },
    {
      icon: SearchCheck,
      category: "Research & Data",
      title: "Research & Information Support",
      description:
        "Gathering, organising, and presenting information to help businesses make informed decisions and keep their records up to date.",
      skills: [
        "Online Research",
        "Data Entry",
        "Information Gathering",
        "Organisation",
      ],
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-white px-6 py-20 lg:px-20"
    >
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <Reveal className="text-center">
          <div className="mb-4 inline-block rounded-md bg-secondary p-1">
            <p className="text-xl text-playfair">
              Selected Work
            </p>
          </div>

          <h2 className="text-4xl font-playfair text-dark sm:text-5xl">
            Work I Can Support
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-poppins text-base leading-8 text-dark/70 sm:text-lg">
            Here&apos;s a look at the areas where I can provide practical,
            organised, and dependable support.
          </p>
        </Reveal>

        {/* Portfolio Cards */}
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <StaggerItem
                key={project.title}
                className="group overflow-hidden rounded-[28px] border border-slate-200 bg-background shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Visual area */}
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-secondary/20">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-secondary/30 blur-2xl" />

                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-primary shadow-md transition-transform duration-300 group-hover:scale-110">
                    <Icon
                      aria-hidden="true"
                      className="h-9 w-9"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <p className="font-poppins text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {project.category}
                  </p>

                  <h3 className="mt-2 font-playfair text-2xl text-dark">
                    {project.title}
                  </h3>

                  <p className="mt-3 font-poppins text-sm leading-7 text-dark/70">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-white px-3 py-1.5 font-poppins text-xs font-medium text-dark/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}