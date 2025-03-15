"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "GraphQL",
  "REST API",
  "React Native",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
  "Git",
  "GitHub",
  "Docker",
]

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8 text-center">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <p className="text-lg">
              I'm a passionate Full-Stack Developer with expertise in building web and mobile applications. With a
              strong foundation in modern JavaScript frameworks and libraries, I create responsive, user-friendly
              applications that deliver exceptional user experiences.
            </p>

            <p className="text-lg">
              My journey in software development began over 5 years ago, and since then, I've worked on various projects
              ranging from e-commerce platforms to complex enterprise applications. I'm constantly learning and adapting
              to new technologies to stay at the forefront of web development.
            </p>

            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              sharing my knowledge through technical articles and mentoring.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4 text-center">Technologies & Skills</h3>

            <div className="flex flex-wrap justify-center gap-2">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  className="bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors px-3 py-1 text-sm"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection

