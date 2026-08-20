import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-slate-800 py-12 text-slate-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <Link
              href="https://x.com/TheAvgCoder"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#64ffda]"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shamar-morrison-7b641b364"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#64ffda]"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="https://github.com/shamar-morrison"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#64ffda]"
              aria-label="GitHub"
            >
              <Github size={24} />
            </Link>
          </div>

          <div className="text-center text-slate-400">
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
