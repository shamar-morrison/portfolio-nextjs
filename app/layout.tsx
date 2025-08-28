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
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Shamar - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shamar | Full-Stack Web & Mobile Developer",
    description:
      "Portfolio website for Shamar, a Full-Stack Web & Mobile Developer specializing in modern, responsive applications.",
    images: ["/og-image.svg"],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Additional meta tags for better social sharing */}
        <meta name="application-name" content="Shamar Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Shamar Portfolio" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#f92c8b" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Structured Data for better SEO */}
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
      </head>
      <body className="font-sans antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  )
}
