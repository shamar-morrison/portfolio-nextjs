import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import CursorSpotlight from "@/components/cursor-spotlight"


export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-900">
      <CursorSpotlight />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  )
}
