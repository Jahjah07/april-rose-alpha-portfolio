import { Check } from "lucide-react";
import { Reveal, Stagger, StaggerRevealItem } from "@/app/components/Motion";

export default function AboutMeFull() {
  return (
    <section
      id="about-full"
      className="bg-background px-6 py-20 lg:px-20"
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="mb-4 inline-block rounded-md bg-secondary p-1">
            <p className="text-xl text-playfair">My Journey</p>
          </div>

          <h1 className="mb-8 text-5xl font-playfair text-dark">
            About Me
          </h1>
        </Reveal>

        <Stagger className="space-y-6 font-poppins text-lg leading-8 text-dark/80">
          <StaggerRevealItem>
            <p>
              Hello! I&apos;m April Rose Alpha, a Marketing & Web Design
              Virtual Assistant, Social Media Manager, and Assistant Project
              Manager. I enjoy helping businesses stay organised, build their
              online presence, and keep their day-to-day operations running
              smoothly.
            </p>
          </StaggerRevealItem>

          <StaggerRevealItem>
            <p>
              My experience includes supporting Australian business operations
              through administrative assistance, project coordination, social
              media management, content creation, lead generation, and business
              research. I&apos;ve also worked with website design and UI
              layouts, using Figma to help turn ideas into clear and
              user-friendly digital experiences.
            </p>
          </StaggerRevealItem>

          <StaggerRevealItem>
            <p>
              I also have a strong creative side. I create marketing materials,
              graphics, and visual content using Canva, Adobe Photoshop, and
              Adobe Illustrator, while managing content across platforms such
              as LinkedIn, Facebook, Instagram, and Google Business Profile.
            </p>
          </StaggerRevealItem>

          <StaggerRevealItem>
            <p>
              Whether it&apos;s organising business documents, coordinating
              schedules, managing content, preparing quotations and invoices,
              maintaining CRM records, or supporting business growth through
              lead generation, I approach every task with organisation,
              attention to detail, adaptability, and initiative.
            </p>
          </StaggerRevealItem>
        </Stagger>

        <Reveal
          delay={0.12}
          className="mt-12 rounded-lg border border-slate-200 bg-white p-6"
        >
          <h3 className="mb-4 text-2xl font-playfair text-dark">
            What I Bring
          </h3>

          <ul className="space-y-3 text-dark/70">
            <li className="flex items-start gap-3">
              <Check
                aria-hidden="true"
                className="mt-1 h-5 w-5 shrink-0 text-primary"
                strokeWidth={1.8}
              />
              <span>
                Marketing, social media, and content support
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Check
                aria-hidden="true"
                className="mt-1 h-5 w-5 shrink-0 text-primary"
                strokeWidth={1.8}
              />
              <span>
                Organised project and administrative support
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Check
                aria-hidden="true"
                className="mt-1 h-5 w-5 shrink-0 text-primary"
                strokeWidth={1.8}
              />
              <span>
                Website, UI, graphic design, and branding support
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Check
                aria-hidden="true"
                className="mt-1 h-5 w-5 shrink-0 text-primary"
                strokeWidth={1.8}
              />
              <span>
                Lead generation, research, and business outreach
              </span>
            </li>

            <li className="flex items-start gap-3">
              <Check
                aria-hidden="true"
                className="mt-1 h-5 w-5 shrink-0 text-primary"
                strokeWidth={1.8}
              />
              <span>
                Detail-oriented, adaptable, and reliable communication
              </span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}