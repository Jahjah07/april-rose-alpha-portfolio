import { Reveal, Stagger, StaggerItem } from "@/app/components/Motion";

export default function WhyWorkWithMe() {
  return (
    <section id="why-work-with-me" className="bg-white px-6 py-16 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-8 inline-block rounded-md bg-secondary p-1">
          <p className="text-xl text-playfair">Why Work With Me?</p>
        </Reveal>
        <Stagger className="grid gap-8 lg:grid-cols-3">
          <StaggerItem className="rounded-[24px] border border-slate-200 bg-background p-8 shadow-sm">
            <h3 className="text-2xl font-playfair text-dark mb-4">Reliable Support</h3>
            <p className="text-dark/75 font-poppins leading-7">
              I deliver consistent, dependable support so you can trust your day-to-day tasks are handled.
            </p>
          </StaggerItem>
          <StaggerItem className="rounded-[24px] border border-slate-200 bg-background p-8 shadow-sm">
            <h3 className="text-2xl font-playfair text-dark mb-4">Detail-Oriented Work</h3>
            <p className="text-dark/75 font-poppins leading-7">
              I focus on the little things that matter, keeping your operations organized and accurate.
            </p>
          </StaggerItem>
          <StaggerItem className="rounded-[24px] border border-slate-200 bg-background p-8 shadow-sm">
            <h3 className="text-2xl font-playfair text-dark mb-4">Flexible Collaboration</h3>
            <p className="text-dark/75 font-poppins leading-7">
              I adapt to your workflow and priorities, giving you the freedom to focus on growing your business.
            </p>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
