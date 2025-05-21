import type { ProjectProps } from "@/components/project-card"

export const projects: ProjectProps[] = [
  {
    title: "BingeBox - Streaming Platform",
    description:
      "A full-featured streaming platform with HD streaming for Movies, TV Shows and Anime. The ultimate destination for binge watchers.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Rest API"],
    repoUrl: "https://github.com/shamar-morrison/bingebox",
    liveUrl: "https://bingebox-bay.vercel.app",
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
    title: "FitTrackr - Workout Tracker",
    description:
      "A web application for tracking workouts and includes metrics, analytics, statistics, and more.",
    technologies: [
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Next.js",
      "Tailwind CSS",
    ],
    repoUrl: "https://github.com/shamar-morrison/fitness-tracker",
    liveUrl: "https://v0-fittrackr-project-requirements.vercel.app",
    imageUrl: "/fittrackr.png",
  },
]
