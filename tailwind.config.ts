import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#ff3870",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#c300c3",
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#ff1f8e",
          foreground: "#ffffff",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        portfolio: {
          pink: "#ff3870",
          purple: "#c300c3",
          magenta: "#f92c8b",
          deepPurple: "#b02cd6",
          hotPink: "#ff1f8e",
          peach: "#ffd6d6",
          orange: "#ffbd84",
        },
      },
      borderRadius: {
        lg: "1rem", // Increased from var(--radius)
        md: "0.75rem", // Increased from calc(var(--radius) - 2px)
        sm: "0.5rem", // Increased from calc(var(--radius) - 4px)
        xl: "1.5rem", // Added for even more rounded options
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(to right, #ff3870, #f92c8b, #b02cd6, #c300c3)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config

