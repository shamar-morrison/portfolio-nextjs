"use client"

import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const RESUME_ID = "1zu5bFkcpGQEf51dMGEpPX34jIKemqYat" // Google Drive File ID
  const CVLink = `https://drive.google.com/uc?export=download&id=${RESUME_ID}`

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    console.log(isMenuOpen)
  }

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    target: string,
  ) => {
    e.preventDefault()

    const element = document.querySelector(target)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      if (isMenuOpen) toggleMenu()
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none">
      <div
        className={`transition-all duration-300 ease-in-out pointer-events-auto flex items-center ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-md dark:bg-gray-900/80 border-b border-black/10 dark:border-white/10 md:border-transparent"
            : "bg-transparent border-transparent"
        } ${
          // Mobile: Always full width, fixed top, standard padding
          "w-full px-4 py-4 rounded-none mt-0"
        } ${
          // Desktop: Always w-fit (to avoid jump), but change shape/pos based on scroll
          "md:w-fit md:justify-center"
        } ${
          isScrolled && !isMenuOpen
            ? "md:mt-4 md:rounded-full md:px-8 md:py-3 md:border md:shadow-md" // Desktop Pill
            : "md:mt-0 md:rounded-none md:px-8 md:py-4 md:border-transparent md:shadow-none" // Desktop Top
        }`}
      >
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#about"
            onClick={(e) => handleSmoothScroll(e, "#about")}
            className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, "#projects")}
            className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
            className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors"
          >
            Contact
          </a>
          <Button
            asChild
            className="bg-cv-gradient hover:opacity-90 rounded-xl shadow-md"
          >
            <Link href={CVLink} download className="group">
              <Download className="h-4 w-4 group-hover:animate-bounce" />
              Resume
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden ml-auto"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="pointer-events-auto w-full bg-white dark:bg-gray-900 shadow-lg md:hidden">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, "#about")}
              className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors py-2"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => handleSmoothScroll(e, "#projects")}
              className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors py-2"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
              className="text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors py-2"
            >
              Contact
            </a>
            <Button
              asChild
              className="bg-cv-gradient hover:opacity-90 rounded-xl shadow-md w-full mt-2"
            >
              <Link href={CVLink} download>
                <Download className="h-4 w-4" />
                Resume
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
