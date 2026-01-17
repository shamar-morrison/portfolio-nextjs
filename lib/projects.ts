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
  {
    title: "ShowSeek - Movie & TV Show Tracker",
    description:
      "ShowSeek is a movie and TV tracker that allows users to discover, create and manage lists of movies and TV shows.",
    technologies: ["Next.js", "TypeScript", "Firebase", "Rest API"],
    repoUrl: "https://github.com/shamar-morrison/show-seek-web",
    liveUrl: "https://show-seek-web.vercel.app",
    imageUrl: "/showseek.png",
    categories: ["Full Stack"],
  },
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
  {
    title: "ShowSeek - Movie & TV Show Tracker",
    description:
      "ShowSeek is a movie and TV tracker that allows users to discover, create and manage lists of movies and TV shows.",
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "In-App Purchases",
    ],
    repoUrl: "https://github.com/shamar-morrison/show-seek",
    liveUrl:
      "https://play.google.com/store/apps/details?id=app.horizon.showseek",
    imageUrl: "/showseek-mobile.png",
    categories: ["Mobile Apps"],
  },
  {
    title: "Recurr - Subscription Manager",
    description:
      "Recurr is a subscription manager that allows users to manage their subscriptions and track their expenses.",
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "In-App Purchases",
    ],
    repoUrl: "https://github.com/shamar-morrison/recurr",
    liveUrl: "https://play.google.com/store/apps/details?id=com.horizon.recurr",
    imageUrl: "/recurr-ss.png",
    categories: ["Mobile Apps"],
  },
]
