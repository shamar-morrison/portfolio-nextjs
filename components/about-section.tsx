"use client"

import { Badge } from "@/components/ui/badge"

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Kotlin",
  "React Native",
  "AWS Lambda",
  "Firebase",
  "Node.js",
  "Nest.js",
  "Express.js",
  "Tanstack Query",
  "PostgreSQL",
  "NoSQL",
  "MongoDB",
  "Prisma",
  "GraphQL",
  "Tailwind CSS",
  "Zustand",
  "Redux",
  "Linux",
  "Git",
  "Docker",
]

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-8 text-center">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="space-y-6 text-gray-700 dark:text-gray-300">
            <p className="text-lg">
              I'm a full-stack and mobile engineer with 5+ years of experience building products that ship and scale. Most recently, I led engineering at Edufocal, where I drove a Next.js 14 modernization that cut load times by 60% and improved reliability by 85%, while managing a team of 5 engineers and 2 designers and maintaining 99.9% uptime. Before that, I built a React Native app at Herald Ltd. that reached 100,000+ downloads and a 4.5-star rating.
            </p>

            <p className="text-lg">
              Alongside client and full-time work, I design and build my own products end to end, including ShowSeek, which has reached the top 3 in its category organically in Brazil. I also run a small development agency, taking projects from architecture through delivery.
            </p>

            <p className="text-lg">
              My core stack is React, Next.js, React Native, TypeScript, and Node.js, with production experience integrating LLMs (Claude, Gemini, GPT, Vapi) into real systems.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Technologies & Skills
            </h3>

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
        </div>
      </div>
    </section>
  )
}

export default AboutSection
