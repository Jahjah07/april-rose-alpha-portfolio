import { Check } from "lucide-react";
import { Reveal, Stagger, StaggerRevealItem } from "@/app/components/Motion";

export default function AboutMeFull() {
  return (
    <section id="about-full" className="py-20 px-6 lg:px-20 bg-background">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="bg-secondary p-1 rounded-md mb-4 inline-block">
            <p className="text-xl text-playfair">My Journey</p>
          </div>

          <h1 className="text-5xl font-playfair text-dark mb-8">About Me</h1>
        </Reveal>

        <Stagger className="space-y-6 text-lg text-dark/80 font-poppins leading-8">
          <StaggerRevealItem>
            <p>
              Hello! I&apos;m April Rose Alpha, a dedicated Virtual Assistant passionate about helping
              entrepreneurs and business owners reclaim their time and focus on what truly matters.
            </p>
          </StaggerRevealItem>

          <StaggerRevealItem>
            <p>
              With years of experience in administrative support, organization, and customer relations,
              I understand the challenges that busy professionals face. Whether it&apos;s managing emails,
              scheduling, social media, or customer support, I&apos;m here to be your trusted partner.
            </p>
          </StaggerRevealItem>

          <StaggerRevealItem>
            <p>
              My approach is simple: I take on your administrative burden so you can focus on growing
              your business. I&apos;m detail-oriented, proactive, and committed to delivering excellence in
              everything I do.
            </p>
          </StaggerRevealItem>

          <StaggerRevealItem>
            <p>
              When I&apos;m not assisting clients, you can find me exploring new productivity tools,
              learning industry trends, and always looking for ways to improve my services.
            </p>
          </StaggerRevealItem>
        </Stagger>

        <Reveal delay={0.12} className="mt-12 p-6 bg-white rounded-lg border border-slate-200">
          <h3 className="text-2xl font-playfair text-dark mb-4">What Drives Me</h3>
          <ul className="space-y-3 text-dark/70">
            <li className="flex items-start gap-3">
              <Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.8} />
              <span>Helping entrepreneurs achieve their business dreams</span>
            </li>
            <li className="flex items-start gap-3">
              <Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.8} />
              <span>Creating efficient systems and processes</span>
            </li>
            <li className="flex items-start gap-3">
              <Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.8} />
              <span>Building long-term partnerships with clients</span>
            </li>
            <li className="flex items-start gap-3">
              <Check aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary" strokeWidth={1.8} />
              <span>Continuously learning and improving</span>
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
