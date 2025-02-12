import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import DiscoverPolarization from "@/components/DiscoverPolarization";
import PolarizationService from "@/components/PolarizationService";
import PolarizationFacts from "@/components/PolarizationFacts";
// import DiscoverNanoStrips from "@/components/DiscoverNanoStrips";
import ContactForm from "@/components/ContactForm";
// import ContactFormCopy from "@/components/ContactFormCopy";
import Footer from "@/components/Footer";
import BackgroundImages from "@/components/BackgroundImages";
// import HeroSection2 from "@/components/HeroSection2";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundImages />
      <HeroSection />
      <ProductShowcase />
      <DiscoverPolarization />
      <PolarizationFacts />
      <PolarizationService />
      <ContactForm />
      {/* <ContactFormCopy /> */}
      <Footer />
    </main>
  );
}
