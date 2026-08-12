import Link from "next/link";
import { Reveal } from "@/app/components/Motion";

export default function AboutMe() {
  return (
    <section id="about-home" className="bg-white px-6 py-16 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center">
        <Reveal className="w-full lg:w-1/2">
          <div className="overflow-hidden rounded-[24px] bg-secondary p-2 shadow-lg">
            <img
              src="/images/beachpic.jpeg"
              alt="About April Rose Alpha"
              className="h-[520px] w-full rounded-[20px] object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="w-full lg:w-1/2">
          <div className="mb-4 inline-block rounded-md bg-secondary p-1">
            <p className="text-xl text-playfair">About Me</p>
          </div>
          <h2 className="mb-6 text-4xl font-playfair text-dark">A Brief Overview</h2>
          <p className="max-w-3xl text-lg leading-8 text-dark/80 font-poppins">
            I'm a dedicated Virtual Assistant with a passion for helping entrepreneurs
            achieve their business goals. With expertise in administrative support,
            organization, and customer relations, I'm committed to providing top-notch service.
          </p>
          <Link href="/about" className="mt-6 inline-block font-semibold text-primary hover:underline">
            Read My Full Story →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
