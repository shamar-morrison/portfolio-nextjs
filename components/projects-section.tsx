"use client"

import { projects } from "@/lib/projects"
import ProjectCard from "./project-card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const categories = ["Full Stack", "Backend APIs", "Mobile Apps"] as const
export type Category = (typeof categories)[number]

const ProjectsSection = () => {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      id="projects"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative z-10 scroll-mt-20 lg:scroll-mt-24"
    >
      <div className="mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-200 lg:hidden">
            Projects
          </h2>
          <Tabs defaultValue={categories[0]} className="mb-12">
            <div className="mb-8 flex justify-center">
              <TabsList className="h-auto max-w-full flex-nowrap overflow-x-auto rounded-full border border-slate-700 bg-slate-800/60 p-0.5 text-slate-400">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="whitespace-nowrap rounded-full px-2.5 py-1 text-[11px] font-medium text-slate-400 transition-all hover:text-[#64ffda] data-[state=active]:bg-[#64ffda]/10 data-[state=active]:text-[#64ffda] data-[state=active]:shadow-none sm:px-3 sm:py-1.5 sm:text-xs"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {categories.map((category) => {
              const filteredProjects = projects.filter((project) =>
                project.categories.includes(category),
              )

              return (
                <TabsContent key={category} value={category} className="mt-0">
                  <ul className="group/list">
                    {filteredProjects.length > 0 ? (
                      filteredProjects.map((project, index) => (
                        <motion.li
                          key={project.repoUrl ?? project.liveUrl ?? project.title}
                          className="mb-12"
                          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.1 }}
                          transition={{ duration: 0.35, delay: index * 0.05 }}
                        >
                          <ProjectCard {...project} />
                        </motion.li>
                      ))
                    ) : (
                      <li className="py-12 text-center">
                        <p className="text-lg text-slate-400">
                          No projects in this category yet. Check back soon!
                        </p>
                      </li>
                    )}
                  </ul>
                </TabsContent>
              )
            })}
          </Tabs>

          <div className="mt-12">
            <a
              href="https://github.com/shamar-morrison?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-baseline font-semibold leading-tight text-slate-200 transition-colors hover:text-teal-300 focus-visible:text-teal-300 focus-visible:outline-none"
            >
              <span>
                View More on GitHub
                <span className="inline-block">
                  <ArrowUpRight
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  />
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ProjectsSection
