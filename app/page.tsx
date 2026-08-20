import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import CursorSpotlight from "@/components/cursor-spotlight"


export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-900">
      <CursorSpotlight />
      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <a
          href="#content"
          className="absolute left-0 top-0 -translate-x-full rounded bg-[#64ffda] px-4 py-3 text-sm font-bold uppercase tracking-widest text-slate-900 focus-visible:translate-x-0"
        >
          Skip to content
        </a>

        <div className="lg:flex lg:justify-between lg:gap-4">
          <Navbar />

          <main id="content" className="lg:w-[52%] lg:py-24">
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
          </main>
        </div>
      </div>
    </main>
  )
}
