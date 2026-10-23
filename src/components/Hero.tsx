import { CameraMark, Dial, Stripes } from './Logo'

const tags = ['CCTV', 'Automation', 'Networking']

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="rings relative scroll-mt-24 overflow-hidden border-b border-line"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pb-16 pt-10 sm:px-5 sm:pb-28 sm:pt-20">
        {/* Camera inside the dial */}
        <div className="relative grid h-[min(15rem,68vw)] w-[min(15rem,68vw)] place-items-center animate-fade-in-up sm:h-72 sm:w-72">
          <Dial className="animate-spin-slow absolute inset-0 h-full w-full" />
          <CameraMark className="w-[58%]" />
        </div>

        {/* Left padding offsets the trailing letter spacing so the title stays centred */}
        <h1
          id="hero-heading"
          className="mt-6 pl-[0.18em] text-center text-[clamp(1.9rem,10vw,4.5rem)] font-bold leading-none tracking-[0.18em] text-gold animate-fade-in-up stagger-1 sm:mt-8"
        >
          EAGLE EYE
        </h1>

        <p className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 pl-[0.22em] font-tech text-[11px] font-medium uppercase tracking-[0.22em] text-gold/80 animate-fade-in-up stagger-2 min-[360px]:gap-x-2.5 min-[360px]:pl-[0.3em] min-[360px]:text-[12px] min-[360px]:tracking-[0.3em] min-[400px]:text-[13px] sm:mt-5 sm:gap-x-4 sm:pl-[0.45em] sm:text-[17px] sm:tracking-[0.45em]">
          {tags.map((tag, i) => (
            <span key={tag} className="flex items-center gap-2 min-[360px]:gap-2.5 sm:gap-4">
              {i > 0 && <span className="text-gold/50">·</span>}
              {tag}
            </span>
          ))}
        </p>

        <p className="mt-6 max-w-xl text-center text-[14px] leading-relaxed text-smoke animate-fade-in-up stagger-3 sm:mt-8 sm:text-[15px]">
          Professional security and technology solutions for homes and
          businesses. We design, install, and maintain CCTV systems, network
          infrastructure, biometric access, and smart automation, all backed by
          dedicated local support in Kayanna Bazar.
        </p>

        <div className="mt-8 flex w-full max-w-xs flex-col gap-3 animate-fade-in-up stagger-4 sm:mt-10 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4">
          <a
            className="rounded-sm bg-gold px-7 py-3.5 text-center font-tech text-[14px] font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold-soft sm:py-3"
            href="#contact"
          >
            Get in touch
          </a>
          <a
            className="rounded-sm border border-gold/40 px-7 py-3.5 text-center font-tech text-[14px] font-bold uppercase tracking-[0.2em] text-gold transition-colors hover:border-gold hover:bg-gold/10 sm:py-3"
            href="#services"
          >
            Our services
          </a>
        </div>
      </div>

      <Stripes className="absolute bottom-0 right-4 h-5 w-24 sm:right-10 sm:h-7 sm:w-36" />
    </section>
  )
}
