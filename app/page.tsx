import HeroSection from "@/components/sections/hero-section";
// import FeaturesSection from "@/components/sections/features-section";  // hidden — re-enable when ready
// import FutureSection from "@/components/sections/future-section";       // hidden — re-enable when ready
import AboutSection from "@/components/sections/about-section";
import FooterSection from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      {/* <FeaturesSection /> */}
      {/* <FutureSection /> */}
      <FooterSection />
    </main>
  );
}
