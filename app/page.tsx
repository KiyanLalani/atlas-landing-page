import HeroSection from "@/components/sections/hero-section";
import FeaturesSection from "@/components/sections/features-section";
import FutureSection from "@/components/sections/future-section";
import FooterSection from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <FutureSection />
      <FooterSection />
    </main>
  );
}