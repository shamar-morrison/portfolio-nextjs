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
          <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
            Hey, I&apos;m Shamar
          </h1>
          <h2 className="mb-8 mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
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
              variant="glass"
              className="w-full sm:w-48"
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
