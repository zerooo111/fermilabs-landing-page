import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FeatureSection } from "@/components/FeatureSection";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <FeatureSection />
    </main>
  );
}
