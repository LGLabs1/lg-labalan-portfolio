function Hero() {
  return (
    <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
      <div className="space-y-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-brand-400">
          Welcome to my portfolio
        </p>
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Hi, I&apos;m <span className="text-brand-400">Your Name</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-xl">
            A short sentence about who you are and what you do. For example:
            
            Front-end developer passionate about building beautiful, accessible
            web experiences.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-brand-500 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-brand-600 transition-colors"
          >
            View Projects
          </a>
          <a
            href="#about"
            className="rounded-full border border-slate-700 px-6 py-2 text-sm font-semibold text-slate-100 hover:border-brand-500 hover:text-brand-400 transition-colors"
          >
            View Resume &amp; Skills
          </a>
        </div>
      </div>
      <div className="flex-1">
        <div className="mx-auto h-40 w-40 rounded-3xl bg-gradient-to-br from-brand-500 via-slate-900 to-slate-800 p-[3px] shadow-lg md:h-52 md:w-52">
          <div className="flex h-full w-full items-center justify-center rounded-3xl bg-slate-950 text-4xl font-semibold text-brand-400">
            YN
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
