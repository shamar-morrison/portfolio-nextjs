"use client"

import { Button } from "@/components/ui/button"
import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { Code } from "lucide-react"

const HeroSection = () => {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      id={"home"}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative z-10 flex min-h-screen items-center justify-center px-4 pb-20 pt-16"
    >
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="mb-4 text-5xl font-black tracking-tight text-slate-200 md:text-7xl">
            Hey, I&apos;m <span className="text-[#64ffda]">Shamar</span>
          </h1>
          <h2 className="mb-8 text-2xl font-semibold tracking-tight text-slate-300 md:text-3xl">
            Full-Stack Web & Mobile Developer
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 md:text-xl">
            I build modern, responsive, and user-friendly applications using
            various technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="w-full rounded border border-[#64ffda] bg-transparent text-[#64ffda] shadow-none transition-all duration-200 hover:-translate-y-1 hover:bg-[#64ffda]/10 hover:text-[#64ffda] sm:w-48"
            >
              <Link href="#projects">
                <Code className="h-5 w-5" />
                View My Projects
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HeroSection
