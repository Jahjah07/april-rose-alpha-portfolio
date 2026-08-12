import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import Footer from "@/app/components/Footer";
import WorkTogetherCTA from "./components/WorkTogetherCTA";
import Portfolio from "./components/Portfolio";
import ToolsSkills from "./components/ToolsSkills";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Services />
      <WhyWorkWithMe />
      <ToolsSkills />
      <Portfolio />
      <WorkTogetherCTA />
      <Footer />
    </main>
  );
}
