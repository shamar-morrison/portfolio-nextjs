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
import { Code, ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export interface ProjectProps {
  title: string
  description: string
  technologies: string[]
  repoUrl: string
  liveUrl: string
  imageUrl: string
}

const ProjectCard = ({
  title,
  description,
  technologies,
  repoUrl,
  liveUrl,
  imageUrl,
}: ProjectProps) => {
  return (
    <Card className="overflow-hidden border border-gray-200 dark:border-gray-800 h-full flex flex-col transition-all duration-300 hover:shadow-lg">
      <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold mb-2">{title}</CardTitle>
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-700"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-600 dark:text-gray-400">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Button asChild variant="outline" className="flex-1 rounded-xl">
          <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
            <Code className="h-4 w-4" />
            Code
          </Link>
        </Button>
        <Button
          asChild
          className="bg-hero-gradient hover:opacity-90 flex-1 rounded-xl"
        >
          <Link href={liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="h-4 w-4" />
            Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
