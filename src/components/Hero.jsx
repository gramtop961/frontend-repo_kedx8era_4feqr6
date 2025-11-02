import Spline from '@splinetool/react-spline';

function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glows - don't block interactions */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 py-28 text-center sm:py-36">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/5 px-4 py-1 text-xs tracking-wider text-cyan-300 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_20px_2px_rgba(34,211,238,0.7)]" />
          GEN Z • WEB DEV • GAMER
        </span>
        <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white drop-shadow-[0_0_25px_rgba(34,211,238,0.35)] sm:text-6xl">
          Daksh Acharekar
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-cyan-200/90 sm:text-xl">
          From gamer to coder — creating the future online.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="group inline-flex items-center justify-center rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-6 py-3 font-medium text-cyan-200 transition hover:bg-cyan-500/20 hover:text-white"
          >
            View Projects
            <span className="ml-2 transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-white/10 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
