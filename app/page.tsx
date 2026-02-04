import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { HighlightsSection } from "@/components/home/highlights-section";
import { SignaturePicksSection } from "@/components/home/signature-picks-section";
import { ExploreMoreSection } from "@/components/home/explore-more-section";
import { GalleryTeaserSection } from "@/components/home/gallery-teaser-section";
import { VisitSection } from "@/components/home/visit-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HighlightsSection />
        <SignaturePicksSection />
        <ExploreMoreSection />
        <GalleryTeaserSection />
        <VisitSection />
      </main>
      <Footer />
    </>
  );
}
