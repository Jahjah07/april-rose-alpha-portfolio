import {
  BookOpen,
  CakeSlice,
  Gamepad2,
  Heart,
  Lightbulb,
  Music,
  Palette,
  Sparkles,
} from "lucide-react";
import { Reveal, Stagger, StaggerRevealItem } from "@/app/components/Motion";

export default function BeyondWork() {
  const hobbies = [
    {
      icon: Gamepad2,
      label: "Gaming",
    },
    {
      icon: Heart,
      label: "Crochet",
    },
    {
      icon: Sparkles,
      label: "Jogging",
    },
    {
      icon: CakeSlice,
      label: "Baking",
    },
    {
      icon: BookOpen,
      label: "Reading",
    },
  ];

  const interests = [
    "Technology",
    "Creative Projects",
    "Learning New Skills",
    "Personal Development",
  ];

  return (
    <section className="bg-background px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-12 text-center">
            <div className="mb-4 inline-block rounded-md bg-secondary p-1">
              <p className="text-xl text-playfair">Beyond Work</p>
            </div>

            <h2 className="text-4xl font-playfair text-dark md:text-5xl">
              A Little More About Me
            </h2>

            <p className="mx-auto mt-4 max-w-2xl font-poppins text-base leading-7 text-dark/70">
              Outside of work, I enjoy staying creative, learning new things,
              and making time for the activities that keep me inspired and
              balanced.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Hobbies */}
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary/40">
                  <Heart
                    className="h-5 w-5 text-primary"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="text-2xl font-playfair text-dark">
                  Things I Enjoy
                </h3>
              </div>

              <p className="font-poppins text-sm leading-7 text-dark/70">
                When I&apos;m away from work, I like spending time on creative
                hobbies, playing games, reading, listening to music, and
                staying active.
              </p>

              <Stagger className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {hobbies.map((hobby) => {
                  const Icon = hobby.icon;

                  return (
                    <StaggerRevealItem key={hobby.label}>
                      <div className="flex flex-col items-center gap-2 rounded-xl bg-background p-4 text-center transition-transform hover:-translate-y-1">
                        <Icon
                          className="h-6 w-6 text-primary"
                          strokeWidth={1.7}
                        />
                        <span className="font-poppins text-xs font-medium text-dark">
                          {hobby.label}
                        </span>
                      </div>
                    </StaggerRevealItem>
                  );
                })}
              </Stagger>
            </div>
          </Reveal>

          {/* Interests */}
          <Reveal delay={0.2}>
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/50">
                  <Lightbulb
                    className="h-5 w-5 text-primary"
                    strokeWidth={1.8}
                  />
                </div>

                <h3 className="text-2xl font-playfair text-dark">
                  What Inspires Me
                </h3>
              </div>

              <p className="font-poppins text-sm leading-7 text-dark/70">
                I&apos;m naturally curious and enjoy exploring technology,
                creative projects, new skills, and opportunities for personal
                growth.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full bg-background px-4 py-2 font-poppins text-sm text-dark"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-xl bg-primary/10 p-5">
                <div className="mb-2 flex items-center gap-2">
                  <Palette
                    className="h-5 w-5 text-primary"
                    strokeWidth={1.8}
                  />

                  <h4 className="font-poppins text-sm font-semibold text-dark">
                    My Creative Side
                  </h4>
                </div>

                <p className="font-poppins text-sm leading-7 text-dark/70">
                  I especially enjoy crochet, baking, designing, and exploring
                  new creative ideas. These activities give me a chance to
                  experiment, create, and keep learning.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Motivation / Philosophy */}
        <Reveal delay={0.3}>
          <div className="mt-8 overflow-hidden rounded-2xl bg-secondary/40 p-8 text-center">
            <Sparkles
              className="mx-auto mb-4 h-7 w-7 text-primary"
              strokeWidth={1.5}
            />

            <h3 className="text-2xl font-playfair text-dark">
              What Keeps Me Moving Forward
            </h3>

            <p className="mx-auto mt-4 max-w-2xl font-poppins text-sm leading-7 text-dark/75">
              I&apos;m motivated by learning, improving my skills, accomplishing
              goals, and seeing the results of my work. I believe growth comes
              from continuing to move forward and making the most of every
              step along the way.
            </p>

            <blockquote className="mx-auto mt-6 max-w-2xl font-playfair text-xl italic leading-8 text-primary sm:text-2xl">
              &ldquo;Keep moving forward, choose your own path, and make the
              journey worthwhile.&rdquo;
            </blockquote>
          </div>
        </Reveal>
      </div>
    </section>
  );
}