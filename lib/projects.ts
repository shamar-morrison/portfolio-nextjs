import type { ProjectProps } from "@/components/project-card"

export const projects: ProjectProps[] = [
  {
    title: "DentWise  - AI Dental Platform",
    description:
      "Full-stack dental practice platform built end-to-end, including an AI voice assistant (Vapi) that handles patient scheduling and guidance without staff intervention. Backend built on Prisma + PostgreSQL with secure auth (Clerk) and automated email workflows (Resend).",
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
      "Companion web app to ShowSeek, a movie and TV tracker I designed and built independently for React Native. The mobile app is live on Google Play, reached the top 3 in its category organically in Brazil, and supports localization across Portuguese, Italian, and Turkish.",
    technologies: ["Next.js", "TypeScript", "Firebase", "Rest API"],
    repoUrl: "https://github.com/shamar-morrison/show-seek-web",
    liveUrl: "https://show-seek-web.shamar-webdev.workers.dev",
    imageUrl: "/showseek.png",
    categories: ["Full Stack"],
  },
  {
    title: "Evolutionz - Gym Management Platform",
    description:
      "Built and maintain a full gym management PWA for an active client: PT payments, revenue reporting, trainer scheduling, and biometric access control via HikVision integration. Designed and shipped an automated invoicing system using a Cloudflare Worker with PDFShift and Brevo, removing manual billing entirely.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Cloudflare Workers"],
    repoUrl: undefined,
    liveUrl: undefined,
    imageUrl: "/evo.png",
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
