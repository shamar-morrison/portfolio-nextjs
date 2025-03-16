import type { ProjectProps } from "@/components/project-card"

export const projects: ProjectProps[] = [
  {
    title: "BingeBox - Streaming Platform",
    description:
      "A full-featured streaming platform with HD streaming for Movies, TV Shows and Anime. The ultimate destination for binge watchers.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Rest API",
      "MongoDB",
    ],
    repoUrl: "https://github.com/shamar-morrison/bingebox",
    liveUrl: "https://bingebox-one.netlify.app",
    imageUrl: "/bingebox.png",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, task assignments, and progress tracking.",
    technologies: ["React", "Node.js", "Express", "Socket.io", "PostgreSQL"],
    repoUrl: "https://github.com/username/task-management",
    liveUrl: "https://task-management-app.vercel.app",
    imageUrl: "/placeholder.svg?height=200&width=400&text=Task+Management",
  },
  {
    title: "Fitness Tracker",
    description:
      "A mobile application for tracking workouts, nutrition, and fitness progress with data visualization.",
    technologies: ["React Native", "TypeScript", "Firebase", "Chart.js"],
    repoUrl: "https://github.com/username/fitness-tracker",
    liveUrl: "https://fitness-tracker-demo.vercel.app",
    imageUrl: "/placeholder.svg?height=200&width=400&text=Fitness+Tracker",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard that displays current weather conditions and forecasts for multiple locations.",
    technologies: ["React", "Redux", "OpenWeather API", "Tailwind CSS"],
    repoUrl: "https://github.com/username/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    imageUrl: "/placeholder.svg?height=200&width=400&text=Weather+Dashboard",
  },
]
