"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { Code, Send } from "lucide-react"

const HeroSection = () => {
  return (
    <section
      id={"home"}
      className="min-h-screen flex items-center justify-center pt-16 pb-20 px-4 bg-gradient-to-br from-white to-portfolio-peach/30 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            Hi, I&apos;m <span className="gradient-text">Shamar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-gray-700 dark:text-gray-300">
            Full-Stack Web & Mobile Developer
          </h2>
          <p className="text-lg md:text-xl mb-10 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I build modern, responsive, and user-friendly applications with
            cutting-edge technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-hero-gradient hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-48 rounded-xl"
            >
              <Link href="#projects">
                <Code className="h-5 w-5" />
                View My Projects
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10 dark:border-primary dark:text-primary dark:hover:bg-primary/10 hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-48 rounded-xl"
            >
              <Link href="#contact">
                <Send className="h-5 w-5" />
                Contact Me
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
