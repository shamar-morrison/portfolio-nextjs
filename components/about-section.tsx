const experienceStartYear = 2021
const AboutSection = () => {
  const experienceYears = Math.max(
    0,
    new Date().getFullYear() - experienceStartYear,
  )

  return (
    <section
      id="about"
      className="relative z-10 scroll-mt-20 pb-16 pt-10 lg:scroll-mt-24 lg:pb-36 lg:pt-0"
    >
      <div className="mx-auto">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-200 lg:hidden">
            About
          </h2>
          <div className="space-y-6 text-slate-400">
            <p>
              Hey there! I'm Shamar, and I like building things. I'm a full-stack web and mobile engineer with {experienceYears}+ years
              of experience building products that ship and scale. Most recently,
              I led engineering at{" "}
              <a
                href="https://edufocalacademy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-200 transition-colors duration-150 hover:text-slate-300 focus-visible:outline-none focus-visible:text-slate-300"
              >
                Edufocal
              </a>
              , where I drove a Next.js 14
              modernization that cut load times by 60% and improved reliability by
              85%, while managing a team of 5 engineers and 2 designers and
              maintaining 99.9% uptime. Before that, I built a React Native app at
              Herald Ltd. that reached 100,000+ downloads and a 4.5-star rating.
            </p>

            <p>
              Alongside client and full-time work, I design and build my own
              products end to end, including{" "}
              <a
                href="https://play.google.com/store/apps/details?id=app.horizon.showseek"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-200 transition-colors duration-150 hover:text-slate-300 focus-visible:outline-none focus-visible:text-slate-300"
              >
                ShowSeek
              </a>
              , which has reached the top 3
              in its category organically in Brazil. I also run a
              development agency, taking projects from architecture through
              delivery.
            </p>

            <p>
              My core stack is React, Next.js, React Native, TypeScript, and
              Node.js, with production experience integrating LLMs (Claude,
              Gemini, GPT, Vapi) into real systems.
            </p>

            <p>
              In my spare time, you can usually find me reading Fantasy/Sci-Fi, playing video games or doing strength training/combat sports.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
