import Header from "../../components/Header";
import AboutMeFull from "./components/AboutMeFull";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Footer from "@/app/components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutMeFull />
      <Timeline />
      <Skills />
      <Footer />
    </main>
  );
}
