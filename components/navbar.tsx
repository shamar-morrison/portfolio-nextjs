"use client"

import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const resumeId = "13mORJ50BSa8fZZTySLjoGB90fR-qTMun"
  const resumeUrl = `https://drive.google.com/file/d/${resumeId}/view`

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)
        if (visibleEntry) setActiveSection(`#${visibleEntry.target.id}`)
      },
      { rootMargin: "-35% 0px -55% 0px" },
    )

    navLinks.forEach(({ href }) => {
      const section = document.querySelector(href)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleMenu = () => setIsMenuOpen((open) => !open)

  const handleSmoothScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    target: string,
  ) => {
    event.preventDefault()
    document.querySelector(target)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const navigationLink = (href: string, label: string) => (
    <a
      key={href}
      href={href}
      onClick={(event) => handleSmoothScroll(event, href)}
      aria-current={activeSection === href ? "page" : undefined}
      className={`relative py-2 text-sm transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#64ffda] after:transition-transform after:duration-200 ${
        activeSection === href
          ? "text-[#64ffda] after:w-full after:scale-x-100"
          : "text-slate-300 hover:text-[#64ffda] after:w-full after:scale-x-0 hover:after:scale-x-100"
      }`}
    >
      {label}
    </a>
  )

  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-50 flex flex-col items-center">
      <div
        className={`pointer-events-auto flex w-full items-center px-4 transition-all duration-300 md:w-fit md:justify-center md:px-8 ${
          isScrolled
            ? "border-b border-slate-700/80 bg-slate-900/90 py-3 shadow-lg shadow-slate-950/20 backdrop-blur-md md:mt-4 md:rounded-full md:border"
            : "border-transparent bg-transparent py-4 md:mt-0"
        }`}
      >
        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map(({ href, label }) => navigationLink(href, label))}
          <Button asChild className="rounded border border-[#64ffda] bg-transparent text-[#64ffda] shadow-none transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#64ffda]/10 hover:text-[#64ffda]">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4" />
              Resume
            </a>
          </Button>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="ml-auto text-slate-200 hover:bg-[#64ffda]/10 hover:text-[#64ffda] md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="pointer-events-auto w-full border-b border-slate-700 bg-slate-900/95 shadow-lg shadow-slate-950/20 backdrop-blur-md md:hidden">
          <nav className="container mx-auto flex flex-col space-y-3 px-4 py-4">
            {navLinks.map(({ href, label }) => navigationLink(href, label))}
            <Button asChild className="mt-2 w-full rounded border border-[#64ffda] bg-transparent text-[#64ffda] shadow-none hover:bg-[#64ffda]/10 hover:text-[#64ffda]">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
