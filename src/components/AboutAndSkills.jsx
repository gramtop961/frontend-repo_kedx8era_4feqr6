function AboutAndSkills() {
  return (
    <section id="about" className="relative w-full bg-[#0a0f14] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(34,211,238,0.25)] sm:text-4xl">
            About
          </h2>
          <p className="mt-4 max-w-3xl text-cyan-100/90">
            I’m Daksh Acharekar (@gaxmer_daksh) — a Gen Z web developer and lifelong gamer.
            I build fast, responsive, and future-facing web experiences with a clean, modern aesthetic.
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-white">Skills</h3>
          <div className="mt-4 flex flex-wrap gap-3">
            {['HTML', 'CSS', 'JavaScript', 'Webflow', 'PWA'].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-4 py-2 text-sm text-cyan-200 shadow-[0_0_25px_rgba(34,211,238,0.15)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutAndSkills;
