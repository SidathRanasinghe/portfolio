import { Navigation } from "@/components/common/navigation";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/common/footer";
import { LoadingScreen } from "@/components/common/loading-screen";
import { ScrollProgress } from "@/components/common/scroll-progress";
import { CursorFollower } from "@/components/common/cursor-follower";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <CursorFollower />
      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
