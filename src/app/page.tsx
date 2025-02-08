import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import DiscoverPolarization from "@/components/DiscoverPolarization";
import PolarizationService from "@/components/PolarizationService";
import PolarizationFacts from "@/components/PolarizationFacts";
// import DiscoverNanoStrips from "@/components/DiscoverNanoStrips";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
// import HeroSection2 from "@/components/HeroSection2";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <HeroSection2 /> */}
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
