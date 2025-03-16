import type { ProjectProps } from "@/components/project-card"

export const projects: ProjectProps[] = [
  {
    title: "BingeBox - Streaming Platform",
    description:
      "A full-featured streaming platform with HD streaming for Movies, TV Shows and Anime. The ultimate destination for binge watchers.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Rest API"],
    repoUrl: "https://github.com/shamar-morrison/bingebox",
    liveUrl: "https://bingebox-one.netlify.app",
    imageUrl: "/bingebox.png",
  },
  {
    title: "Storage and File Sharing Platform",
    description:
      "A storage management and file sharing platform that lets users effortlessly upload, organize, and share files.",
    technologies: [
      "Next.js",
      "Appwrite",
      "TypeScript",
      "Rest API",
      "Tailwind CSS",
    ],
    repoUrl: "https://github.com/shamar-morrison/storage-management",
    liveUrl: "https://storage-management-nu.vercel.app",
    imageUrl: "/storeit.png",
  },
  {
    title: "Sekiro - Workout Tracker",
    description:
      "A web application for tracking running workouts and cycling with Google Maps.",
    technologies: ["HTML", "JavaScript", "Leaflet API", "Google Maps API"],
    repoUrl: "https://github.com/shamar-morrison/sekiro-app",
    liveUrl: "https://sekiro-intro.netlify.app/",
    imageUrl: "/sekiro.png",
  },
  // {
  //   title: "Ichiraku - Create & Search For Recipes",
  //   description:
  //     "A weather dashboard that displays current weather conditions and forecasts for multiple locations.",
  //   technologies: ["React", "Redux", "OpenWeather API", "Tailwind CSS"],
  //   repoUrl: "https://github.com/username/weather-dashboard",
  //   liveUrl: "https://weather-dashboard-demo.vercel.app",
  //   imageUrl: "/ichiraku.png",
  // },
]
