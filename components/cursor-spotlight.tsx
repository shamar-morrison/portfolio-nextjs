"use client"

import { useEffect, useRef } from "react"

const CursorSpotlight = () => {
  const frame = useRef<number | null>(null)

  useEffect(() => {
    const updateSpotlight = (event: MouseEvent) => {
      if (frame.current !== null) return

      frame.current = window.requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--spotlight-x", `${event.clientX}px`)
        document.documentElement.style.setProperty("--spotlight-y", `${event.clientY}px`)
        frame.current = null
      })
    }

    window.addEventListener("mousemove", updateSpotlight, { passive: true })
    return () => {
      window.removeEventListener("mousemove", updateSpotlight)
      if (frame.current !== null) window.cancelAnimationFrame(frame.current)
    }
  }, [])

  return (
    <div
      className="cursor-spotlight pointer-events-none fixed inset-0 z-30 transition duration-300"
      aria-hidden="true"
    />
  )
}

export default CursorSpotlight
