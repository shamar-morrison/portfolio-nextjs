"use client"

import { resumeUrl } from "@/lib/site"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useState } from "react"
import SocialLinks from "./social-links"

const sectionLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
] as const

type SectionHref = (typeof sectionLinks)[number]["href"]

const Navbar = () => {
  const [activeSection, setActiveSection] = useState<SectionHref>("#about")

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      // Guarantee #projects is active when reaching the bottom of the page
      if (windowHeight + scrollY >= documentHeight - 50) {
        setActiveSection("#projects")
        return
      }

      // Guarantee #about is active when near the top of the page (Hero / top of About)
      if (scrollY < 150) {
        setActiveSection("#about")
        return
      }

      // Offset from top of viewport for activating sections (accounting for header)
      const offset = 200

      const sections = sectionLinks
        .map(({ href }) => {
          const el = document.querySelector<HTMLElement>(href)
          return el ? { href, top: el.getBoundingClientRect().top } : null
        })
        .filter((s): s is { href: SectionHref; top: number } => s !== null)

      let currentSection: SectionHref = sectionLinks[0].href
      for (const section of sections) {
        if (section.top <= offset) {
          currentSection = section.href
        }
      }

      setActiveSection(currentSection)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const desktopSectionLink = ({ href, label }: (typeof sectionLinks)[number]) => {
    const isActive = activeSection === href

    return (
      <a
        key={href}
        href={href}
        aria-current={isActive ? "page" : undefined}
        className="group flex items-center py-3 focus-visible:outline-none"
      >
        <span
          aria-hidden="true"
          className={`mr-4 h-px transition-all motion-reduce:transition-none group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 ${
            isActive ? "w-16 bg-slate-200" : "w-8 bg-slate-600"
          }`}
        />
        <span
          className={`text-xs font-bold uppercase tracking-widest transition-colors duration-150 ${
            isActive
              ? "text-slate-200"
              : "text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200"
          }`}
        >
          {label}
        </span>
      </a>
    )
  }

  return (
    <>
      <header className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[48%] lg:self-start lg:flex-col lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <a href="/">Shamar Morrison</a>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
Web &amp; Mobile Engineer
          </h2>
          <p className="mt-4 max-w-xs leading-normal text-slate-400">
            I build modern, responsive, and user-friendly applications for web and mobile.
          </p>

          <nav className="mt-16 w-max" aria-label="In-page jump links">
            <ul>
              {sectionLinks.map(desktopSectionLink)}
              <li>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center py-3 focus-visible:outline-none"
                >
                  <span
                    aria-hidden="true"
                    className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"
                  />
                  <span className="inline-flex items-baseline text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors duration-150 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Résumé
                    <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-[4px] transition-transform motion-reduce:transition-none" aria-hidden="true" />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <SocialLinks className="ml-1 mt-auto flex items-center" />
      </header>

      <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-700/80 bg-slate-900/90 px-4 backdrop-blur-md lg:hidden">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between gap-3">
          <a
            href="/"
            className="text-base font-bold tracking-tight text-slate-200 focus-visible:outline-none focus-visible:text-[#64ffda]"
          >
            Shamar
          </a>
          <nav aria-label="In-page jump links">
            <ul className="flex items-center gap-3 sm:gap-4">
              {sectionLinks.map(({ href, label }) => {
                const isActive = activeSection === href

                return (
                  <li key={href}>
                    <a
                      href={href}
                      aria-current={isActive ? "page" : undefined}
                      className={`inline-flex h-12 items-center text-[11px] font-bold uppercase tracking-wider transition-colors duration-150 focus-visible:outline-none sm:text-xs ${
                        isActive ? "text-slate-200" : "text-slate-500 hover:text-slate-200"
                      }`}
                    >
                      {label}
                    </a>
                  </li>
                )
              })}
              <li>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 items-center text-[11px] font-bold uppercase tracking-wider text-slate-500 transition-colors duration-150 hover:text-slate-200 focus-visible:outline-none focus-visible:text-slate-200 sm:text-xs"
                >
                  Résumé
                  <ArrowUpRight className="ml-1 h-3 w-3 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-focus-visible:-translate-y-0.5 group-focus-visible:translate-x-0.5 motion-reduce:transition-none" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar
