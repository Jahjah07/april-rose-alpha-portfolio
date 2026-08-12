import {
  BriefcaseBusiness,
  Monitor,
  Palette,
  Share2,
  Users,
  Wrench,
} from "lucide-react";

import {
  Reveal,
  Stagger,
  StaggerItem,
} from "@/app/components/Motion";

type SkillCategory = {
  icon: typeof BriefcaseBusiness;
  title: string;
  description: string;
  tools: string[];
};

export default function ToolsSkills() {
  const categories: SkillCategory[] = [
    {
      icon: BriefcaseBusiness,
      title: "Administrative",
      description:
        "Keeping information, documents, schedules, and daily tasks organised.",
      tools: [
        "Google Workspace",
        "Microsoft Office",
        "Google Sheets",
        "Microsoft Excel",
        "Document Management",
      ],
    },
    {
      icon: Users,
      title: "Communication & Collaboration",
      description:
        "Supporting communication and keeping teams and clients connected.",
      tools: [
        "Gmail",
        "Slack",
        "Microsoft Teams",
        "Zoom",
        "Client Communication",
      ],
    },
    {
      icon: Palette,
      title: "Design & Content",
      description:
        "Creating polished visual materials and content for business needs.",
      tools: [
        "Canva",
        "Figma",
        "Photoshop",
        "Graphic Design",
        "Content Creation",
      ],
    },
    {
      icon: Share2,
      title: "Social Media",
      description:
        "Helping businesses maintain an organised and consistent online presence.",
      tools: [
        "Facebook",
        "Instagram",
        "TikTok",
        "LinkedIn",
        "Social Media Management",
      ],
    },
    {
      icon: Monitor,
      title: "Website & Digital",
      description:
        "Supporting websites, digital content, and day-to-day online tasks.",
      tools: [
        "WordPress",
        "Website Updates",
        "Content Uploads",
        "Basic Troubleshooting",
        "Digital Tools",
      ],
    },
    {
      icon: Wrench,
      title: "Organisation & Productivity",
      description:
        "Using systems and tools to keep projects and responsibilities moving.",
      tools: [
        "Task Management",
        "Project Tracking",
        "Data Entry",
        "Online Research",
        "File Organisation",
      ],
    },
  ];

  return (
    <section
      id="tools-skills"
      className="relative overflow-hidden bg-background px-6 py-20 lg:px-20"
    >
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />

      <div className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="text-center">
          <div className="mb-4 inline-block rounded-md bg-secondary p-1">
            <p className="text-xl text-playfair">
              Tools & Skills
            </p>
          </div>

          <h2 className="text-4xl font-playfair text-dark sm:text-5xl">
            The Tools Behind My Work
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-poppins text-base leading-8 text-dark/70 sm:text-lg">
            I use a combination of productivity, communication, design, and
            digital tools to keep work organised and projects moving forward.
          </p>
        </Reveal>

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <StaggerItem
                key={category.title}
                className="group rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/20 text-primary transition-colors group-hover:bg-secondary/30">
                  <Icon
                    aria-hidden="true"
                    className="h-6 w-6"
                    strokeWidth={1.7}
                  />
                </div>

                <h3 className="font-playfair text-2xl text-dark">
                  {category.title}
                </h3>

                <p className="mt-2 font-poppins text-sm leading-7 text-dark/65">
                  {category.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {category.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full bg-background px-3 py-1.5 font-poppins text-xs font-medium text-dark/75"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}