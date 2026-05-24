import Navbar from "@/components/Navbar";
import NotificationBanner from "@/components/NotificationBanner";
import HeroBanner from "@/components/HeroBanner";
import QuickLinks from "@/components/QuickLinks";
import AboutSection from "@/components/AboutSection";
import VisionMission from "@/components/VisionMission";
import CoursesSection from "@/components/CoursesSection";
import StatsSection from "@/components/StatsSection";
import NewsEvents from "@/components/NewsEvents";
import AdmissionCTA from "@/components/AdmissionCTA";
import ImageSliderSection from "@/components/ImageSliderSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <NotificationBanner />
      <Navbar />
      <HeroBanner />
      <QuickLinks />
      <AboutSection />
      <VisionMission />
      <CoursesSection />
      <StatsSection />
      <ImageSliderSection
        heading="Campus Gallery"
        tag="Our Institute"
        sectionBg="bg-white"
        accent="text-yellow-600"
        accentHex="#eab308"
      />
      <NewsEvents />
      <AdmissionCTA />
      <Footer />
    </main>
  );
}
