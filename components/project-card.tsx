import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Category } from "./projects-section"

export interface ProjectProps {
  title: string
  description: string
  technologies: string[]
  repoUrl?: string
  liveUrl?: string
  imageUrl: string
  categories: Category[]
}

const ProjectCard = ({
  title,
  description,
  technologies,
  repoUrl,
  liveUrl,
  imageUrl,
  categories,
}: ProjectProps) => {
  const isMobileApp = categories.includes("Mobile Apps")

  return (
    <Card className="group flex h-full flex-col overflow-hidden border-slate-700 bg-slate-800/50 text-slate-200 shadow-none transition-all duration-300 hover:-translate-y-1 hover:border-[#64ffda]/60 hover:shadow-xl hover:shadow-slate-950/30">
      <div className="relative h-48 overflow-hidden bg-slate-800">
        <Image
          priority
          src={imageUrl}
          alt={title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle className="mb-2 text-xl font-bold text-slate-200">{title}</CardTitle>
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="border-slate-700 bg-slate-900/60 text-slate-400"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-slate-400">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        {repoUrl && <Button asChild variant="outline" className="flex-1 rounded border-slate-600 bg-transparent text-slate-300 shadow-none transition-all hover:-translate-y-0.5 hover:border-[#64ffda] hover:bg-[#64ffda]/10 hover:text-[#64ffda]">
          <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
            <Code className="h-4 w-4" />
            Code
          </Link>
        </Button>}
        <Button
          asChild
          className="flex-1 rounded border border-[#64ffda] bg-transparent text-[#64ffda] shadow-none transition-all hover:-translate-y-0.5 hover:bg-[#64ffda]/10 hover:text-[#64ffda]"
        >
          {liveUrl && <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            {isMobileApp ? "Store Page" : "Live Demo"}
          </Link> }
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
