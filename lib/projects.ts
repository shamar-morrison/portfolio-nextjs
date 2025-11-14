import type { ProjectProps } from "@/components/project-card"

export const projects: ProjectProps[] = [
  {
    title: "BingeBox - Streaming Platform",
    description:
      "A full-featured streaming platform with HD streaming for Movies, TV Shows and Anime. The ultimate destination for binge watchers.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Rest API"],
    repoUrl: "https://github.com/shamar-morrison/bingebox",
    liveUrl: "https://bingebox-bay.vercel.app",
    imageUrl: "/bingebox.webp",
    categories: ["Full Stack"],
  },
  {
    title: "LinaChat - Real-Time Chat App",
    description:
      "A real-time chat app that allows users to join chat rooms, communicate with each other in real-time, invite friends, and more.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
    repoUrl: "https://github.com/shamar-morrison/real-time-chat",
    liveUrl: "https://real-time-chat-plum-mu.vercel.app/",
    imageUrl: "/lina-chat.webp",
    categories: ["Full Stack"],
  },
  {
    title: "Suburbia Skates - Online Shop",
    description:
      "A modern online store which features rich 3D animations, particle effects, and an interactive skateboard customizer.",
    technologies: [
      "Next.js",
      "TypeScript",
      "GSAP",
      "Matter.js",
      "Three.js",
      "CMS",
    ],
    repoUrl: "https://github.com/shamar-morrison/suburbia-skate",
    liveUrl: "https://suburbia-skates-hxh.netlify.app/",
    imageUrl: "/skate.webp",
    categories: ["Full Stack"],
  },
  {
    title: "Music API - Music Streaming Platform",
    description:
      "Music API provides a complete backend solution for managing a music streaming platform.",
    technologies: [
      "Node.js",
      "MongoDB",
      "Express.js",
      "Swagger",
      "Cloudinary",
      "TypeScript",
    ],
    repoUrl: "https://github.com/shamar-morrison/music-api",
    liveUrl: "https://music-api-dnrm.onrender.com",
    imageUrl: "/music-api.webp",
    categories: ["Backend APIs"],
  },
]
