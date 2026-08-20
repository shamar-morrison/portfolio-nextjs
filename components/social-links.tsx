import { socialLinks } from "@/lib/site"
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6"

const socialIcons = {
  X: FaXTwitter,
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
}

interface SocialLinksProps {
  className?: string
}

const SocialLinks = ({ className }: SocialLinksProps) => (
  <ul className={className} aria-label="Social media">
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
)

export default SocialLinks
