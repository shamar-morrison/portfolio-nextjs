"use client"

import { projects } from "@/lib/projects"
import ProjectCard from "./project-card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { motion, useReducedMotion } from "framer-motion"

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
      className="relative z-10 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-8 text-center text-3xl font-black tracking-tight text-slate-200 md:text-4xl">
            My <span className="text-[#64ffda]">Projects</span>
          </h2>

          <p className="mx-auto mb-8 max-w-3xl text-center text-lg text-slate-400">
            Here are some of the projects I've worked on. Each project
            represents different skills and technologies I've mastered.
          </p>

          <Tabs defaultValue={categories[0]} className="mb-12">
            <div className="flex justify-center mb-12">
              <TabsList className="h-auto max-w-full flex-nowrap overflow-x-auto rounded-full border border-slate-700 bg-slate-800/60 p-1 text-slate-400">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="whitespace-nowrap rounded-full px-3 py-2 text-xs font-medium text-slate-400 transition-all hover:text-[#64ffda] data-[state=active]:bg-[#64ffda]/10 data-[state=active]:text-[#64ffda] data-[state=active]:shadow-none sm:px-6 sm:py-3 sm:text-sm"
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
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.length > 0 ? (
                      filteredProjects.map((project, index) => (
                        <motion.div
                          key={index}
                          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.1 }}
                          transition={{ duration: 0.35, delay: index * 0.05 }}
                        >
                          <ProjectCard {...project} />
                        </motion.div>
                      ))
                    ) : (
                      <div className="col-span-full text-center py-12">
                        <p className="text-lg text-slate-400">
                          No projects in this category yet. Check back soon!
                        </p>
                      </div>
                    )}
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>

          <div className="text-center mt-12">
            <a
              href="https://github.com/shamar-morrison?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded border border-[#64ffda] bg-transparent px-6 py-2 text-sm font-bold text-[#64ffda] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#64ffda]/10"
            >
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default ProjectsSection
