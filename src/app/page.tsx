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
import SocialMedia from "@/components/SocialMedia";
import StudyOptions from "@/components/StudyOptions";
import Footer from "@/components/Footer";
import AnimateIn from "@/components/AnimateIn";
import AlumniSlider from "@/components/AlumniSlider";

export default function HomePage() {
  return (
    <main>
      <NotificationBanner />
      <Navbar />
      <HeroBanner />
      <AnimateIn variant="fadeUp"><QuickLinks /></AnimateIn>
      <AnimateIn variant="fadeUp"><AboutSection /></AnimateIn>
      <AnimateIn variant="fadeUp"><VisionMission /></AnimateIn>
      <AnimateIn variant="fadeUp"><CoursesSection /></AnimateIn>
      <AnimateIn variant="fadeUp"><StudyOptions /></AnimateIn>
      <AnimateIn variant="fadeUp">
        <ImageSliderSection
          heading="Campus Gallery"
          tag="Our Institute"
          sectionBg="bg-white"
          accent="text-yellow-600"
          accentHex="#eab308"
        />
      </AnimateIn>
      <AnimateIn variant="fadeUp"><NewsEvents /></AnimateIn>
      <AnimateIn variant="fadeUp"><SocialMedia /></AnimateIn>
      <AnimateIn variant="fadeUp"><AlumniSlider /></AnimateIn>
      <AnimateIn variant="fadeUp"><StatsSection /></AnimateIn>
      <AnimateIn variant="scaleUp"><AdmissionCTA /></AnimateIn>
      <AnimateIn variant="fadeUp"><Footer /></AnimateIn>
    </main>
  );
}
