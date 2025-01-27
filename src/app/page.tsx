import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <FeatureSection />
      <Footer />
    </main>
  );
}
