import { Eye } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="scroll-mt-24 pb-10 pt-16 sm:pb-14 sm:pt-20"
    >
      {/* Logo / Eye Icon */}
      <div className="flex justify-center mb-8 animate-fade-in-up">
        <div className="relative">
          <div className="w-28 h-28 rounded-full border-2 border-accent/40 flex items-center justify-center animate-pulse-glow">
            <div className="w-20 h-20 rounded-full border-2 border-accent-light/60 flex items-center justify-center">
              <Eye className="w-10 h-10 text-accent-light" />
            </div>
          </div>
          {/* Decorative lines */}
          <div className="absolute top-1/2 -left-8 w-6 h-px bg-gradient-to-r from-transparent to-accent-light/50" />
          <div className="absolute top-1/2 -right-8 w-6 h-px bg-gradient-to-l from-transparent to-accent-light/50" />
        </div>
      </div>

      <h1
        id="hero-heading"
        className="text-center text-[2rem] sm:text-[2.75rem] font-semibold tracking-[-0.03em] text-text-dark animate-fade-in-up stagger-1"
        style={{ opacity: 0 }}
      >
        Eagle Eye
      </h1>

      <p
        className="mt-3 text-center text-[14px] sm:text-[15px] uppercase tracking-[0.25em] text-faint-dark animate-fade-in-up stagger-2"
        style={{ opacity: 0 }}
      >
        CCTV <span className="text-accent-light mx-2">·</span> Automation{' '}
        <span className="text-accent-light mx-2">·</span> Networking
      </p>

      <div
        className="mt-8 max-w-xl mx-auto text-center space-y-4 text-[15px] leading-relaxed text-muted-dark animate-fade-in-up stagger-3"
        style={{ opacity: 0 }}
      >
        <p>
          Professional security and technology solutions for homes and
          businesses. We design, install, and maintain CCTV systems, network
          infrastructure, biometric access, and smart automation, all backed by
          dedicated local support in Kayanna Bazar.
        </p>
      </div>

      <div
        className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[13px] animate-fade-in-up stagger-4"
        style={{ opacity: 0 }}
      >
        <a
          className="rounded-full bg-accent px-5 py-2 text-white font-medium transition-all hover:bg-accent-light hover:scale-105"
          href="#contact"
        >
          Get in touch
        </a>
        <a
          className="text-faint-dark transition-colors hover:text-text-dark"
          href="#services"
        >
          View services
        </a>
      </div>
    </section>
  )
}
