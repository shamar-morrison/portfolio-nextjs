import Link from "next/link"
import { Github, Linkedin, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <Link
              href="https://x.com/horizonscode"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-portfolio-pink transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shamar-morrison-57125220b/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-portfolio-pink transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="https://github.com/shamar-morrison"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-portfolio-pink transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </Link>
          </div>

          <div className="text-center text-gray-400">
            <p className="mb-2">Full-Stack Web & Mobile Developer</p>
            <p>
              &copy; {new Date().getFullYear()} Shamar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
