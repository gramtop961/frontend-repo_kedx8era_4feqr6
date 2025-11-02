import { Mail, Instagram } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="relative w-full bg-[#0a0f14] py-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_rgba(34,211,238,0.25)] sm:text-4xl">
          Contact
        </h2>
        <p className="mt-2 text-cyan-100/80">Let’s collaborate or just say hi.</p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <a
            href="mailto:dakshis14.exe@gmail.com"
            className="group flex items-center gap-3 rounded-xl border border-cyan-400/30 bg-white/5 p-4 text-cyan-100 backdrop-blur transition hover:border-cyan-400/50 hover:bg-white/10"
          >
            <span className="rounded-md bg-cyan-500/20 p-2 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              <Mail className="h-5 w-5" />
            </span>
            <div className="flex flex-col">
              <span className="text-sm text-cyan-200/70">Email</span>
              <span className="font-medium text-white">dakshis14.exe@gmail.com</span>
            </div>
          </a>

          <a
            href="https://instagram.com/obfucs8r"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-cyan-400/30 bg-white/5 p-4 text-cyan-100 backdrop-blur transition hover:border-cyan-400/50 hover:bg-white/10"
          >
            <span className="rounded-md bg-cyan-500/20 p-2 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              <Instagram className="h-5 w-5" />
            </span>
            <div className="flex flex-col">
              <span className="text-sm text-cyan-200/70">Instagram</span>
              <span className="font-medium text-white">@obfucs8r</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
