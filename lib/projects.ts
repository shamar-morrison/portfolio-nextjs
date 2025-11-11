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
    category: "Fullstack",
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
    category: "Fullstack",
  },
  {
    title: "Suburbia Skates - Online Shop",
    description:
      "A modern online store which features rich 3D animations, particle effects, and an interactive skateboard customizer.",
    technologies: ["TypeScript", "GSAP", "Matter.js", "Three.js", "CMS"],
    repoUrl: "https://github.com/shamar-morrison/suburbia-skate",
    liveUrl: "https://suburbia-skates-hxh.netlify.app/",
    imageUrl: "/skate.png",
    category: "Fullstack",
  },
]
