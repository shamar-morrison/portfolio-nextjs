"use client"

import { motion, useReducedMotion } from "framer-motion"
import SocialLinks from "./social-links"

const HeroSection = () => {
  const reduceMotion = useReducedMotion()

  return (
    <motion.section
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative z-10 pb-14 pt-24 lg:hidden"
    >
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        Shamar Morrison
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        Web &amp; Mobile Engineer
      </h2>
      <p className="mt-4 max-w-xs leading-normal text-slate-400">
        I build modern, responsive, and user-friendly applications using
        various technologies.
      </p>
      <SocialLinks className="ml-1 mt-8 flex items-center" />
    </motion.section>
  )
}

export default HeroSection
