import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { Toaster } from "sonner"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL("https://shamar.dev"),
  title: "Shamar | Full-Stack Web & Mobile Developer",
  description:
    "Portfolio website for Shamar, a Full-Stack Web & Mobile Developer specializing in modern, responsive applications. View projects and get in touch for collaboration.",
  keywords: [
    "Full-Stack Developer",
    "Web Developer",
    "Mobile Developer",
    "React",
    "Next.js",
    "Portfolio",
    "Shamar",
  ],
  authors: [{ name: "Shamar" }],
  creator: "Shamar",
  publisher: "Shamar",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shamar.dev",
    siteName: "Shamar Portfolio",
    title: "Shamar | Full-Stack Web & Mobile Developer",
    description:
      "Portfolio website for Shamar, a Full-Stack Web & Mobile Developer specializing in modern, responsive applications. View projects and get in touch for collaboration.",
    images: [
      {
        url: "/meta-image.png",
        width: 1200,
        height: 630,
        alt: "Shamar — Full-Stack Web & Mobile Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shamar | Full-Stack Web & Mobile Developer",
    description:
      "Portfolio website for Shamar, a Full-Stack Web & Mobile Developer specializing in modern, responsive applications.",
    images: ["/meta-image.png"],
    creator: "@theavgcoder",
    site: "@theavgcoder",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#f92c8b",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "application-name": "Shamar Portfolio",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Shamar Portfolio",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileColor": "#f92c8b",
    "msapplication-tap-highlight": "no",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shamar",
              jobTitle: "Full-Stack Web & Mobile Developer",
              description:
                "Full-Stack Developer specializing in modern, responsive applications",
              url: "https://shamar.dev",
              sameAs: [
                "https://github.com/shamar-morrison",
                "https://www.linkedin.com/in/shamar-morrison-7b641b364/",
                "https://twitter.com/theavgcoder",
              ],
              knowsAbout: [
                "Web Development",
                "Mobile Development",
                "React",
                "Next.js",
                "Full-Stack Development",
              ],
            }),
          }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  )
}
