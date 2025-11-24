import type { ProjectProps } from "@/components/project-card"

export const projects: ProjectProps[] = [
  {
    title: "DentWise  - AI Dental Platform",
    description:
      "DentWise is an AI dental platform that provides a complete solution for managing dental practices.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Voice AI",
    ],
    repoUrl: "https://github.com/shamar-morrison/dentwise-ai-dental",
    liveUrl: "https://dentwise-ai-dental.vercel.app",
    imageUrl: "/dentwise.webp",
    categories: ["Full Stack"],
  },
  // {
  //   title: "BingeBox - Streaming Platform",
  //   description:
  //     "A full-featured streaming platform with HD streaming for Movies, TV Shows and Anime. The ultimate destination for binge watchers.",
  //   technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Rest API"],
  //   repoUrl: "https://github.com/shamar-morrison/bingebox",
  //   liveUrl: "https://bingebox-bay.vercel.app",
  //   imageUrl: "/bingebox.webp",
  //   categories: ["Full Stack"],
  // },
  {
    title: "LinaChat - Live Messaging App",
    description:
      "A real-time chat app that allows users to join chat rooms, communicate with each other in real-time, invite friends, and more.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
    repoUrl: "https://github.com/shamar-morrison/real-time-chat",
    liveUrl: "https://real-time-chat-plum-mu.vercel.app/",
    imageUrl: "/lina-chat.webp",
    categories: ["Full Stack"],
  },
  // {
  //   title: "Suburbia Skates - Online Shop",
  //   description:
  //     "A modern online store which features rich 3D animations, particle effects, and an interactive skateboard customizer.",
  //   technologies: [
  //     "Next.js",
  //     "TypeScript",
  //     "GSAP",
  //     "Matter.js",
  //     "Three.js",
  //     "CMS",
  //   ],
  //   repoUrl: "https://github.com/shamar-morrison/suburbia-skate",
  //   liveUrl: "https://suburbia-skates-hxh.netlify.app/",
  //   imageUrl: "/skate.webp",
  //   categories: ["Full Stack"],
  // },
  {
    title: "ResumeAI - Resume Analyzer",
    description:
      "An AI web application that analyzes resumes against a set of predefined metrics and provides a detailed report on the results.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Gemini API"],
    repoUrl: "https://github.com/shamar-morrison/ai-resume-analyzer",
    liveUrl: "https://ai-resume-analyzer-sigma-pearl.vercel.app",
    imageUrl: "/resume-ai.webp",
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
  {
    title: "Movie Finder - Discover & Download Movies",
    description:
      "Movie Finder is a movie discovery app that allows users to search for movies and download them via torrents.",
    technologies: ["Expo", "React Native", "APIs"],
    repoUrl: "https://github.com/shamar-morrison/torrent-movie-downloader",
    liveUrl: "https://movie-finder-landing-page.vercel.app/",
    imageUrl: "/movie-finder.webp",
    categories: ["Mobile Apps"],
  },
]
