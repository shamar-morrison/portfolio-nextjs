const AboutSection = () => {
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
              Hey, I'm Shamar. I enjoy taking an idea from the first rough sketch
              to something people can actually use. I work across web and mobile,
              and most recently led engineering at{" "}
              <a
                href="https://edufocalacademy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-200 transition-colors duration-150 hover:text-slate-300 focus-visible:outline-none focus-visible:text-slate-300"
              >
                Edufocal
              </a>
              , helping modernize the platform and working with a small team to
              keep it running smoothly. Before that, I helped build a React Native
              app at Herald Ltd. that found a big audience.
            </p>

            <p>
              Alongside client and full-time work, I design and build my own
              products, including{" "}
              <a
                href="https://play.google.com/store/apps/details?id=app.horizon.showseek"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-200 transition-colors duration-150 hover:text-slate-300 focus-visible:outline-none focus-visible:text-slate-300"
              >
                ShowSeek
              </a>
              , an app that found an audience in Brazil and reached the top of its
              category. I also run a development agency, where I help clients take
              ideas from planning through launch.
            </p>

            <p>
              I usually work with React, Next.js, React Native, TypeScript, and
              Node.js. Lately, I've also been finding useful ways to bring AI tools
              like Claude, Gemini, GPT, and Vapi into products.
            </p>

            <p>
              Away from work, I'm usually reading fantasy or sci-fi, playing video
              games, or doing strength training and combat sports.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
