import CTA from "@/app/components/CTA";
import Header from "../../components/Header";
import AboutMeFull from "./components/AboutMeFull";
import Timeline from "./components/Timeline";
import Footer from "@/app/components/Footer";
import BeyondWork from "./components/BeyondWork";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutMeFull />
      <Timeline />
      <BeyondWork />
      <CTA
        title="Ready to Work Together?"
        description="Let me help you stay organised, productive, and focused on growing your business."
        buttonText="Get In Touch"
        buttonHref="/contact"
      />
      <Footer />
    </main>
  );
}
