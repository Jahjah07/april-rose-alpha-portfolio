import {
  CheckCircle2,
  Lightbulb,
  SearchCheck,
  Sparkles,
} from "lucide-react";

import {
  Reveal,
  Stagger,
  StaggerItem,
} from "@/app/components/Motion";

export default function WhyWorkWithMe() {
  const reasons = [
    {
      icon: CheckCircle2,
      title: "Reliable & Accountable",
      description:
        "You can count on me to follow through on responsibilities, stay organised, and keep important tasks moving without constant follow-up.",
    },
    {
      icon: SearchCheck,
      title: "Detail-Oriented",
      description:
        "I pay attention to the small details that can easily be overlooked, helping keep information, documents, and day-to-day tasks accurate and organised.",
    },
    {
      icon: Lightbulb,
      title: "Proactive & Adaptable",
      description:
        "I take initiative, adapt to different workflows, and look for practical ways to make tasks and processes more efficient.",
    },
    {
      icon: Sparkles,
      title: "Always Learning",
      description:
        "I enjoy learning new tools and skills, improving how I work, and finding better ways to contribute value to the businesses I support.",
    },
  ];

  return (
    <section
      id="why-work-with-me"
      className="relative overflow-hidden bg-white px-6 py-20 lg:px-20"
    >
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -left-24 top-16 h-64 w-64 rounded-full bg-secondary/20 blur-3xl" />

      <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <Reveal className="text-center">
          <div className="mb-4 inline-block rounded-md bg-secondary p-1">
            <p className="text-xl text-playfair">
              Why Work With Me?
            </p>
          </div>

          <h2 className="text-4xl font-playfair text-dark sm:text-5xl">
            Support You Can Rely On
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-poppins text-base leading-8 text-dark/70 sm:text-lg">
            I believe good virtual assistance is more than completing tasks.
            It&apos;s about being dependable, understanding your workflow, and
            making your day a little easier.
          </p>
        </Reveal>

        {/* Reasons */}
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <StaggerItem
                key={reason.title}
                className="group rounded-[28px] border border-slate-200 bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/30 text-primary transition-colors group-hover:bg-secondary/50">
                    <Icon
                      aria-hidden="true"
                      className="h-6 w-6"
                      strokeWidth={1.7}
                    />
                  </div>

                  <div>
                    <h3 className="font-playfair text-2xl text-dark">
                      {reason.title}
                    </h3>

                    <p className="mt-3 font-poppins text-sm leading-7 text-dark/70">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        {/* Bottom statement */}
        <Reveal delay={0.2}>
          <div className="mt-10 rounded-2xl bg-secondary/30 px-6 py-7 text-center sm:px-10">
            <p className="mx-auto max-w-3xl font-poppins text-sm leading-7 text-dark/75">
              My goal is simple: to become a dependable part of your workflow,
              take care of the details, and give you more time to focus on
              growing your business.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}