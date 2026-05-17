// ── V2 temporary page ─────────────────────────────────────────────────────────
import HeroSectionV2 from "@/components/sections/hero-section-v2";
import V2Section from "@/components/sections/v2-section";
// ── Original page (swap back by uncommenting below and commenting above) ───────
// import HeroSection from "@/components/sections/hero-section";
// import AboutSection from "@/components/sections/about-section";
// ──────────────────────────────────────────────────────────────────────────────
import FooterSection from "@/components/sections/footer-section";
// import FeaturesSection from "@/components/sections/features-section";
// import FutureSection from "@/components/sections/future-section";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      {/* ── V2 page ── */}
      <HeroSectionV2 />
      <V2Section />
      {/* ── Original page ──
      <HeroSection />
      <AboutSection />
      */}
      <FooterSection />
    </main>
  );
}
