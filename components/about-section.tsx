"use client"

import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { FaAws } from "react-icons/fa"
import type { IconType } from "react-icons"
import {
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGraphql,
  SiKotlin,
  SiLinux,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si"

const technologies: { name: string; icon: IconType }[] = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Kotlin", icon: SiKotlin },
  { name: "AWS Lambda", icon: FaAws },
  { name: "Firebase", icon: SiFirebase },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Nest.js", icon: SiNestjs },
  { name: "Express.js", icon: SiExpress },
  { name: "Tanstack Query", icon: SiReactquery },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Prisma", icon: SiPrisma },
  { name: "GraphQL", icon: SiGraphql },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Redux", icon: SiRedux },
  { name: "Linux", icon: SiLinux },
  { name: "Git", icon: SiGit },
  { name: "Docker", icon: SiDocker },
]

const experienceStartYear = 2021
const resumeId = "13mORJ50BSa8fZZTySLjoGB90fR-qTMun"
const resumeUrl = `https://drive.google.com/file/d/${resumeId}/view`

const AboutSection = () => {
  const reduceMotion = useReducedMotion()
  const experienceYears = Math.max(
    0,
    new Date().getFullYear() - experienceStartYear,
  )

  return (
    <motion.section
      id="about"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative z-10 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(20rem,0.95fr)_minmax(0,1.35fr)] lg:gap-16">
            <div className="mx-auto w-full max-w-72 sm:max-w-sm lg:max-w-none">
              <Image
                src="/head.png"
                alt="Shamar, full-stack web and mobile developer"
                width={896}
                height={1056}
                sizes="(min-width: 1024px) 25rem, (min-width: 640px) 24rem, 18rem"
                className="aspect-[17/20] w-full rounded object-cover object-top ring-1 ring-slate-700 transition-shadow duration-300 hover:shadow-2xl hover:shadow-[#64ffda]/10"
              />
            </div>

            <div>
              <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-200 md:text-4xl lg:text-left">
                About Me
              </h2>

              <div className="space-y-6 text-slate-400">
                <p>
                  I'm a full-stack and mobile engineer with {experienceYears}+
                  years of experience building products that ship and scale.
                  Most recently, I led engineering at Edufocal, where I drove a
                  Next.js 14 modernization that cut load times by 60% and
                  improved reliability by 85%, while managing a team of 5
                  engineers and 2 designers and maintaining 99.9% uptime. Before
                  that, I built a React Native app at Herald Ltd. that reached
                  100,000+ downloads and a 4.5-star rating.
                </p>

                <p>
                  Alongside client and full-time work, I design and build my own
                  products end to end, including ShowSeek, which has reached the
                  top 3 in its category organically in Brazil. I also run a
                  small development agency, taking projects from architecture
                  through delivery.
                </p>

                <p>
                  My core stack is React, Next.js, React Native, TypeScript, and
                  Node.js, with production experience integrating LLMs (Claude,
                  Gemini, GPT, Vapi) into real systems.
                </p>
              </div>
            </div>
          </div>

          <div className="mx-auto mt-14 max-w-4xl text-center">
            <h3 className="mb-6 text-xl font-semibold text-slate-200">
              Technologies & Skills
            </h3>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-5">
              {technologies.map(({ name, icon: Icon }) => (
                <div key={name} className="group relative">
                  <button
                    type="button"
                    title={name}
                    aria-label={name}
                    className="grid h-11 w-11 place-items-center rounded border border-transparent text-2xl text-slate-400 transition-colors duration-200 hover:border-[#64ffda]/50 hover:text-[#64ffda] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda]"
                  >
                    <Icon aria-hidden="true" />
                  </button>
                  <span className="pointer-events-none absolute -bottom-7 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-xs text-slate-200 opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-baseline gap-1 text-base font-semibold leading-tight text-slate-200 transition-colors duration-200 hover:text-[#64ffda] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#64ffda] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              View Full Résumé
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutSection
