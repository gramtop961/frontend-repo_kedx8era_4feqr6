import Hero from './components/Hero';
import AboutAndSkills from './components/AboutAndSkills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full scroll-smooth bg-black text-white">
      {/* Top nav */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-semibold tracking-tight text-cyan-300">
            gaxmer_daksh
          </a>
          <nav className="hidden items-center gap-6 text-sm text-cyan-100/80 sm:flex">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-lg border border-cyan-500/40 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-200 transition hover:bg-cyan-500/20 hover:text-white sm:text-sm"
          >
            Let’s talk
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <AboutAndSkills />
        <Projects />
        <Contact />
      </main>

      <footer className="border-t border-white/5 bg-black/80 py-6 text-center text-xs text-cyan-200/70">
        © {new Date().getFullYear()} Daksh Acharekar — Built with neon vibes
      </footer>
    </div>
  );
}

export default App;
