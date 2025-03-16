"use client"

import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const CVLink =
    "https://drive.google.com/uc?export=download&id=1jrtiNN78qdznxLWaQF54KtweLRIYAY1G"

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md dark:bg-gray-900/80"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-end md:justify-center items-center">
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
            className="bg-hero-gradient hover:opacity-90 rounded-xl shadow-md"
          >
            <Link href={CVLink} download>
              <Download className="h-4 w-4" />
              Download CV
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
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
              className="bg-hero-gradient hover:opacity-90 rounded-xl shadow-md w-full mt-2"
            >
              <Link href={CVLink} download>
                <Download className="h-4 w-4" />
                Download CV
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
