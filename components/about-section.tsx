"use client"

import { motion, useReducedMotion } from "framer-motion"

const experienceStartYear = 2021
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
      className="relative z-10 scroll-mt-20 pb-16 lg:scroll-mt-24 lg:pb-36"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6 text-slate-400">
            <p>
              Hey there! I'm Shamar, and I like building things. I'm a full-stack and mobile engineer with {experienceYears}+ years
              of experience building products that ship and scale. Most recently,
              I led engineering at Edufocal, where I drove a Next.js 14
              modernization that cut load times by 60% and improved reliability by
              85%, while managing a team of 5 engineers and 2 designers and
              maintaining 99.9% uptime. Before that, I built a React Native app at
              Herald Ltd. that reached 100,000+ downloads and a 4.5-star rating.
            </p>

            <p>
              Alongside client and full-time work, I design and build my own
              products end to end, including ShowSeek, which has reached the top 3
              in its category organically in Brazil. I also run a small
              development agency, taking projects from architecture through
              delivery.
            </p>

            <p>
              My core stack is React, Next.js, React Native, TypeScript, and
              Node.js, with production experience integrating LLMs (Claude,
              Gemini, GPT, Vapi) into real systems.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default AboutSection
