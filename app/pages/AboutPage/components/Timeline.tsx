import { Reveal, Stagger, StaggerRevealItem } from "@/app/components/Motion";

export default function Timeline() {
  const milestones = [
    {
      year: "2024–2025",
      title: "Assistant Project Manager",
      company: "Bluebeans System Inc.",
      description:
        "Supported team coordination, tracked schedules and project dates, maintained project files and business documentation, and created graphics for presentations and marketing materials.",
    },
    {
      year: "2025–2026",
      title: "Virtual Assistant / Social Media Manager",
      company: "Kalipto Construction",
      description:
        "Managed administrative tasks, project tracking, social media content and scheduling, website UI designs, marketing materials, quotations, invoices, CRM records, lead generation, and business research.",
    },
    {
      year: "Present",
      title: "Expanding My Expertise",
      description:
        "Continuing to bring together administrative, project coordination, marketing, social media, design, and research skills to provide reliable support for businesses.",
    },
  ];

  return (
    <section
      id="timeline"
      className="bg-white px-6 py-20 lg:px-20"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-4 text-center">
            <div className="mb-3 inline-block rounded-md bg-secondary p-1">
              <p className="text-xl text-playfair">Experience</p>
            </div>

            <h2 className="text-4xl font-playfair text-dark md:text-5xl">
              My Professional Journey
            </h2>

            <p className="mx-auto mt-4 max-w-2xl font-poppins text-dark/70">
              A journey built around organisation, creativity, and helping
              businesses move forward.
            </p>
          </div>
        </Reveal>

        {/* Desktop Timeline */}
        <div className="relative mt-16 hidden md:block">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-primary to-accent" />

          <Stagger className="space-y-14">
            {milestones.map((item, index) => (
              <StaggerRevealItem
                key={`${item.year}-${item.title}`}
                className={`relative flex w-full items-center ${
                  index % 2 === 0
                    ? "justify-start"
                    : "justify-end"
                }`}
              >
                {/* Content */}
                <div className="w-[44%]">
                  <div
                    className={`rounded-xl border border-slate-200 bg-background p-6 shadow-sm transition-shadow hover:shadow-md ${
                      index % 2 === 0
                        ? "text-right"
                        : "text-left"
                    }`}
                  >
                    <p className="font-poppins text-lg font-bold text-primary">
                      {item.year}
                    </p>

                    <h3 className="mt-2 text-xl font-playfair text-dark">
                      {item.title}
                    </h3>

                    {item.company && (
                      <p className="mt-1 font-poppins text-sm font-medium text-dark/60">
                        {item.company}
                      </p>
                    )}

                    <p className="mt-3 font-poppins text-sm leading-7 text-dark/70">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline marker */}
                <div className="absolute left-1/2 top-1/2 z-10 flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-primary shadow-sm" />
              </StaggerRevealItem>
            ))}
          </Stagger>
        </div>

        {/* Mobile Timeline */}
        <div className="relative mt-12 md:hidden">
          {/* Timeline line */}
          <div className="absolute left-[9px] top-2 h-[calc(100%-8px)] w-0.5 bg-gradient-to-b from-primary to-accent" />

          <Stagger className="space-y-8">
            {milestones.map((item) => (
              <StaggerRevealItem
                key={`${item.year}-${item.title}`}
                className="relative pl-10"
              >
                {/* Timeline marker */}
                <div className="absolute left-0 top-1 flex h-5 w-5 items-center justify-center rounded-full border-4 border-white bg-primary shadow-sm" />

                <div className="rounded-xl border border-slate-200 bg-background p-5 shadow-sm">
                  <p className="font-poppins text-base font-bold text-primary">
                    {item.year}
                  </p>

                  <h3 className="mt-1 text-xl font-playfair text-dark">
                    {item.title}
                  </h3>

                  <p className="mt-2 font-poppins text-sm leading-7 text-dark/70">
                    {item.description}
                  </p>
                </div>
              </StaggerRevealItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}