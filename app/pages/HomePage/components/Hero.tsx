import Header from "../../../components/Header";
import { getAppLogos } from "@/app/lib/appLogos";
import {
  MotionButton,
  Reveal,
  Stagger,
  StaggerRevealItem,
} from "@/app/components/Motion";
import AppLogoStrip from "./AppLogoStrip";
import TypewriterText from "./TypewriterText";
import Link from "next/link";

export default function Hero() {
  const appLogos = getAppLogos();

  return (
    <section id="home">
      <Header />

      <div className="flex min-h-screen flex-col-reverse gap-12 bg-background px-6 py-10 lg:flex-row lg:items-center lg:justify-between lg:px-20">
        {/* Hero Content */}
        <div className="w-full text-left lg:w-1/2">
          <Stagger className="pt-2">
            {/* Welcome */}
            <StaggerRevealItem>
              <div className="mb-2 inline-block rounded-md bg-secondary p-1">
                <p className="text-xl text-playfair">Welcome!</p>
              </div>
            </StaggerRevealItem>

            {/* Introduction */}
            <StaggerRevealItem>
              <p className="text-2xl font-playfair text-dark">
                Hello, I&apos;m
              </p>
            </StaggerRevealItem>

            {/* Name */}
            <StaggerRevealItem>
              <p className="text-4xl font-playfair text-primary sm:text-5xl">
                <TypewriterText
                  text="April Rose Alpha"
                  delay={550}
                  speed={70}
                />
              </p>
            </StaggerRevealItem>

            {/* Role */}
            <StaggerRevealItem>
              <p className="mt-3 text-4xl font-allura text-accent sm:mt-4 sm:text-5xl">
                <TypewriterText
                  text="Virtual Assistant"
                  delay={1750}
                  speed={65}
                />
              </p>
            </StaggerRevealItem>

            {/* Value Proposition */}
            <StaggerRevealItem>
              <p className="mt-6 max-w-lg font-poppins text-base leading-8 text-dark">
                I help businesses stay organised and move forward through
                reliable administrative, marketing, social media, and project
                support.
              </p>
            </StaggerRevealItem>
          </Stagger>

          {/* Hero Actions */}
          <Reveal
            delay={0.35}
            className="mt-8 flex flex-wrap gap-4"
          >
            <MotionButton
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full bg-primary text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              <Link
                href="/contact"
                className="flex items-center gap-2 px-7 py-3"
              >
                <img
                  src="/icons/paper.png"
                  alt=""
                  aria-hidden="true"
                  className="h-5 w-5"
                />

                <span>WORK WITH ME</span>
              </Link>
            </MotionButton>

            <MotionButton
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-primary bg-white text-sm font-semibold text-primary transition hover:bg-primary/10"
            >
              <Link
                href="/services"
                className="block px-7 py-3"
              >
                VIEW MY SERVICES
              </Link>
            </MotionButton>
          </Reveal>

          {/* Tools */}
          <Reveal delay={0.45}>
            <AppLogoStrip appLogos={appLogos} />
          </Reveal>
        </div>

        {/* Hero Image */}
        <div className="relative flex w-full justify-center lg:w-1/2">
          {/* Decorative circles */}
          <div className="absolute -left-24 top-1/3 hidden h-72 w-72 rounded-full bg-accent opacity-80 lg:block" />

          <div className="absolute -right-16 bottom-12 hidden h-72 w-72 rounded-full bg-secondary opacity-90 lg:block" />

          {/* Main Image */}
          <Reveal
            delay={0.1}
            className="relative h-[460px] w-full max-w-[520px] overflow-hidden rounded-[32px] bg-secondary shadow-xl sm:h-[560px]"
          >
            {/* Background */}
            <img
              src="/images/office-background.avif"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover blur-[4px]"
            />

            {/* Profile */}
            <div className="absolute inset-x-0 top-10 z-10 flex justify-center">
              <img
                src="/images/profile.png"
                alt="April Rose Alpha"
                className="h-[450px] w-full object-contain sm:h-[520px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}