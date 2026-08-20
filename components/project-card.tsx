import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import type { Category } from "./projects-section"

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
}: ProjectProps) => {
  const projectUrl = liveUrl ?? repoUrl

  return (
    <article className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

      <div className="z-10 sm:order-2 sm:col-span-6">
        <h3 className="font-medium leading-snug text-slate-200">
          {projectUrl ? (
            <div>
              <a
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group-hover:text-teal-300 group/link text-base transition-colors"
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} (opens in a new tab)`}
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                <span>
                  {title}{" "}
                  <span className="inline-block">
                    <ArrowUpRight
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none ml-1 -translate-y-[1px]"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </a>
            </div>
          ) : (
            <span className="text-base text-slate-200">
              {title}
            </span>
          )}
        </h3>
        <p className="mt-2 text-sm leading-normal text-slate-400">
          {description}
        </p>

        <ul className="mt-2 flex flex-wrap" aria-label={`Technologies used by ${title}`}>
          {technologies.map((technology) => (
            <li key={technology} className="mr-1.5 mt-2">
              <Badge
                variant="outline"
                className="rounded-full border-0 bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300"
              >
                {technology}
              </Badge>
            </li>
          ))}
        </ul>
      </div>

      <Image
        src={imageUrl}
        alt={title}
        width={640}
        height={360}
        sizes="(min-width: 640px) 20vw, 100vw"
        className="z-10 aspect-video w-full rounded border-2 border-slate-200/10 object-cover transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
      />
    </article>
  )
}

export default ProjectCard
