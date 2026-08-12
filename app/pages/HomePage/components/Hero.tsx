import Header from "../../../components/Header";
import { getAppLogos } from "@/app/lib/appLogos";
import { MotionButton, Reveal, Stagger, StaggerRevealItem } from "@/app/components/Motion";
import AppLogoStrip from "./AppLogoStrip";
import TypewriterText from "./TypewriterText";

export default function Hero() {
  const appLogos = getAppLogos();

  return (
    <section id="home">
      <Header />
      <div className="flex min-h-screen flex-col-reverse gap-12 bg-background px-6 py-10 lg:flex-row lg:justify-between lg:px-20">
        <div className="w-full text-left lg:w-1/2">
          <Stagger className="pt-2">
            <StaggerRevealItem>
              <div className="mb-2 inline-block rounded-md bg-secondary p-1">
                <p className="text-xl text-playfair">Welcome!</p>
              </div>
            </StaggerRevealItem>
            <StaggerRevealItem>
              <p className="text-2xl font-playfair text-dark">Hello, I&apos;m</p>
            </StaggerRevealItem>
            <StaggerRevealItem>
              <p className="text-5xl font-playfair text-primary">
                <TypewriterText text="April Rose Alpha" delay={550} speed={70} />
              </p>
            </StaggerRevealItem>
            <StaggerRevealItem>
              <p className="mt-4 text-5xl font-allura text-accent">
                <TypewriterText text="Virtual Assistant" delay={1750} speed={65} />
              </p>
            </StaggerRevealItem>
            <StaggerRevealItem>
              <p className="mt-6 max-w-lg text-base leading-8 text-dark font-poppins">
                I help busy entrepreneurs and business owners streamline their tasks, stay organized,
                and reclaim their time to focus on what truly matters.
              </p>
            </StaggerRevealItem>
          </Stagger>

          <Reveal delay={0.35} className="mt-8 flex flex-wrap gap-4">
            <MotionButton
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition hover:bg-primary/90"
            >
              <img src="/icons/paper.png" alt="Send Message" className="h-5 w-5" />
              <p>WORK WITH ME</p>
            </MotionButton>
            <MotionButton
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-primary bg-white px-7 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10"
            >
              VIEW MY SERVICES
            </MotionButton>
          </Reveal>

          <Reveal delay={0.45}>
            <AppLogoStrip appLogos={appLogos} />
          </Reveal>
        </div>

        <div className="relative flex w-full justify-center lg:w-1/2">
          <div className="absolute -left-24 top-1/3 hidden h-72 w-72 rounded-full bg-accent opacity-80 lg:block"></div>
          <div className="absolute -right-16 bottom-12 hidden h-72 w-72 rounded-full bg-secondary opacity-90 lg:block"></div>
          <Reveal delay={0.16} className="absolute bottom-20 left-5 z-10 hidden h-[150px] w-[450px] rounded-[32px] border border-slate-200 bg-white/95 p-6 shadow-2xl backdrop-blur-sm lg:block">
            <div className="grid grid-cols-[auto_1px_auto_1px_auto] gap-3 text-center font-poppins text-dark">
              <div>
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full text-white">
                  <img src="/icons/medal.png" alt="Reliable" className="h-5 w-5 object-contain" />
                </div>
                <p className="text-sm font-bold">Reliable</p>
                <p className="text-xs text-dark/70">You can count on me.</p>
              </div>
              <div className="mx-auto my-auto h-16 w-px bg-slate-300" />
              <div>
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full text-white">
                  <img src="/icons/target.png" alt="Detail-Oriented" className="h-5 w-5 object-contain" />
                </div>
                <p className="text-sm font-bold">Detail-Oriented</p>
                <p className="text-xs text-dark/70">I pay attention to every detail.</p>
              </div>
              <div className="mx-auto my-auto h-16 w-px bg-slate-300" />
              <div>
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full text-white">
                  <img src="/icons/bolt.png" alt="Proactive" className="h-5 w-5 object-contain" />
                </div>
                <p className="text-sm font-bold">Proactive</p>
                <p className="text-xs text-dark/70">Anticipates needs and takes initiative.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative h-[560px] w-[520px] overflow-hidden rounded-[32px] bg-secondary shadow-xl">
            <div className="absolute top-8 z-8 h-150 w-150 overflow-hidden pr-20">
              <img src="/images/profile.png" alt="Profile" className="h-full w-full object-cover" />
            </div>
            <img
              src="/images/office-background.avif"
              alt="April Rose Alpha"
              className="h-full w-full object-cover blur-[4px]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
