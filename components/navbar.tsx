"use client"

import { resumeUrl, socialLinks } from "@/lib/site"
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"
import { useEffect, useState } from "react"

const sectionLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
] as const

const socialIcons = {
  X: FaXTwitter,
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
}

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#about")

  useEffect(() => {
    const sections = sectionLinks
      .map(({ href }) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: "0% 0% -70% 0%", threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
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
          className={`mr-4 h-px bg-slate-600 transition-all motion-reduce:transition-none group-hover:w-16 group-hover:bg-[#64ffda] group-focus-visible:w-16 group-focus-visible:bg-[#64ffda] ${
            isActive ? "w-16 bg-[#64ffda]" : "w-8"
          }`}
        />
        <span
          className={`text-xs font-bold uppercase tracking-widest transition-colors duration-150 ${
            isActive
              ? "text-[#64ffda]"
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
      <header className="hidden lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            <a href="/">Shamar</a>
          </h1>
          <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            Full-Stack Web &amp; Mobile Developer
          </h2>
          <p className="mt-4 max-w-xs leading-normal text-slate-400">
            I build modern, responsive, and user-friendly applications using
            various technologies.
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
                    className="mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-[#64ffda] group-focus-visible:w-16 group-focus-visible:bg-[#64ffda] motion-reduce:transition-none"
                  />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors duration-150 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                    Resume
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
          {socialLinks.map(({ label, href }) => {
            const Icon = socialIcons[label]

            return (
              <li key={label} className="mr-5 shrink-0 text-xs last:mr-0">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (opens in a new tab)`}
                  title={label}
                  className="block text-slate-400 transition-colors duration-150 hover:text-[#64ffda] focus-visible:outline-none focus-visible:text-[#64ffda]"
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </a>
              </li>
            )
          })}
        </ul>
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
                        isActive ? "text-[#64ffda]" : "text-slate-300 hover:text-[#64ffda]"
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
                  className="inline-flex h-12 items-center text-[11px] font-bold uppercase tracking-wider text-slate-300 transition-colors duration-150 hover:text-[#64ffda] focus-visible:outline-none focus-visible:text-[#64ffda] sm:text-xs"
                >
                  Resume
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
