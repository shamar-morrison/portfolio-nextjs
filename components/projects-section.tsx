"use client"

import { projects } from "@/lib/projects"
import ProjectCard from "./project-card"

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8 text-center">
            My <span className="gradient-text">Projects</span>
          </h2>

          <p className="text-lg text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project
            represents different skills and technologies I've mastered.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://github.com/shamar-morrison?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border text-sm border-gray-800 text-gray-800 font-bold py-2 px-6 rounded-full hover:bg-gray-800 hover:text-white dark:border-gray-100 dark:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors"
            >
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
