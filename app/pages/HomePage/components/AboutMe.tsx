import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, MotionButton } from "@/app/components/Motion";

export default function AboutMe() {
  return (
    <section id="about-home" className="bg-white px-6 py-20 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
        {/* Image */}
        <Reveal className="w-full lg:w-1/2">
          <div className="relative mx-auto max-w-[520px]">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-[24px] bg-secondary/60" />

            <div className="relative overflow-hidden rounded-[24px] bg-secondary p-2 shadow-lg">
              <img
                src="/images/beachpic.jpeg"
                alt="April Rose Alpha"
                className="h-[420px] w-full rounded-[20px] object-cover sm:h-[480px] lg:h-[520px]"
              />
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <Reveal delay={0.08} className="w-full lg:w-1/2">
          <div className="mb-4 inline-block rounded-md bg-secondary p-1">
            <p className="text-xl text-playfair">About Me</p>
          </div>

          <h2 className="mb-6 text-4xl font-playfair text-dark sm:text-5xl">
            Helping Businesses Stay Organised & Moving Forward
          </h2>

          <div className="space-y-4 font-poppins text-base leading-8 text-dark/75">
            <p>
              Hi, I&apos;m April Rose Alpha, a Virtual Assistant who enjoys
              helping businesses stay organised, efficient, and on track.
            </p>

            <p>
              I support clients with administrative tasks, project
              coordination, social media, research, and other day-to-day
              responsibilities that keep a business moving.
            </p>

            <p>
              I&apos;m detail-oriented, proactive, and always looking for
              better ways to learn, improve, and make my work more valuable.
            </p>
          </div>

          <MotionButton
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}
            className="mt-7"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-poppins text-sm font-semibold text-primary"
            >
              Read My Full Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </MotionButton>
        </Reveal>
      </div>
    </section>
  );
}