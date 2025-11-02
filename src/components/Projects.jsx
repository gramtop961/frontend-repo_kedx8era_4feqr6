import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Zypher Chat',
    desc: 'A sleek, real-time chat experience with a neon-cyber aesthetic.',
    tags: ['PWA', 'Realtime', 'Responsive'],
  },
  {
    title: 'Zypher Scan',
    desc: 'Fast, privacy-friendly scanning and parsing for the modern web.',
    tags: ['Web', 'Utility', 'Fast'],
  },
  {
    title: 'Expense Tracker',
    desc: 'Track spending with clean visuals and cloud sync.',
    tags: ['PWA', 'Charts', 'Cloud'],
  },
];

function Projects() {
  return (
    <section id="projects" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-10 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(34,211,238,0.25)] sm:text-4xl">
          Projects
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 p-6 backdrop-blur transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden>
                <div className="pointer-events-none absolute -inset-12 rounded-[32px] bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-2xl" />
              </div>
              <div className="relative">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <ExternalLink className="h-5 w-5 text-cyan-300/70" />
                </div>
                <p className="text-cyan-100/80">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1 text-xs text-cyan-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
