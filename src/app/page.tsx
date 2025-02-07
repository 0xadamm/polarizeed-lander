import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import DiscoverPolarization from "@/components/DiscoverPolarization";
import PolarizationService from "@/components/PolarizationService";
import PolarizationFacts from "@/components/PolarizationFacts";
// import DiscoverNanoStrips from "@/components/DiscoverNanoStrips";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <DiscoverPolarization />
      <PolarizationFacts />
      <PolarizationService />
      {/* <DiscoverNanoStrips /> */}
      <ContactForm />
      <Footer />
    </>
  );
}
