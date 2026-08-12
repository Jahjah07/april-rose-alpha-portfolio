import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import WhyWorkWithMe from "./components/WhyWorkWithMe";
import Footer from "@/app/components/Footer";
import Contact from "./components/Contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Services />
      <WhyWorkWithMe />
      <Contact />
      <Footer />
    </main>
  );
}
