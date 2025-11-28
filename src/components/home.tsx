import Header from "@/components/Header";
import BreakingNewsTicker from "@/components/BreakingNewsTicker";
import HeroSection from "@/components/HeroSection";
import EditorsPick from "@/components/EditorsPick";
import LatestUpdates from "@/components/LatestUpdates";
import VideoHighlights from "@/components/VideoHighlights";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <BreakingNewsTicker />
      <HeroSection />
      <EditorsPick />
      <LatestUpdates />
      <VideoHighlights />
      <Footer />
    </div>
  );
}

export default Home;
