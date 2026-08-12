import Header from "@/app/components/Header";
import ServicesHeader from "./components/ServicesHeader";
import ServicesList from "./components/ServicesList";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";

export default function ServicesPage() {
  return (
    <main>
      <Header />
      <ServicesHeader />
      <ServicesList />
      <CTA
        title="Ready to Take Some Work Off Your Plate?"
        description="Let me handle the administrative, marketing, and day-to-day tasks so you can spend more time focusing on your business."
        buttonText="Let’s Work Together"
        buttonHref="/contact"
      />
      <Footer />
    </main>
  );
}
