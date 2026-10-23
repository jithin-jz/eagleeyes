import { CameraMark, Dial, Stripes } from './Logo'

const tags = ['CCTV', 'Automation', 'Networking']

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="rings relative scroll-mt-24 overflow-hidden border-b border-line"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center px-5 pb-20 pt-16 sm:pb-28 sm:pt-20">
        {/* Camera inside the dial */}
        <div className="relative grid h-60 w-60 place-items-center animate-fade-in-up sm:h-72 sm:w-72">
          <Dial className="animate-spin-slow absolute inset-0 h-full w-full" />
          <CameraMark className="w-[58%]" />
        </div>

        <h1
          id="hero-heading"
          className="mt-8 text-center text-[2.6rem] font-bold leading-none tracking-[0.18em] text-gold animate-fade-in-up stagger-1 sm:text-[4.5rem]"
        >
          EAGLE EYE
        </h1>

        <p className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-tech text-[14px] font-medium uppercase tracking-[0.45em] text-gold/80 animate-fade-in-up stagger-2 sm:text-[17px]">
          {tags.map((tag, i) => (
            <span key={tag} className="flex items-center gap-4">
              {i > 0 && <span className="text-gold/50">·</span>}
              {tag}
            </span>
          ))}
        </p>

        <p className="mt-8 max-w-xl text-center text-[15px] leading-relaxed text-smoke animate-fade-in-up stagger-3">
          Professional security and technology solutions for homes and
          businesses. We design, install, and maintain CCTV systems, network
          infrastructure, biometric access, and smart automation, all backed by
          dedicated local support in Kayanna Bazar.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 animate-fade-in-up stagger-4">
          <a
            className="rounded-sm bg-gold px-7 py-3 font-tech text-[14px] font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-gold-soft"
            href="#contact"
          >
            Get in touch
          </a>
          <a
            className="rounded-sm border border-gold/40 px-7 py-3 font-tech text-[14px] font-bold uppercase tracking-[0.2em] text-gold transition-colors hover:border-gold hover:bg-gold/10"
            href="#services"
          >
            Our services
          </a>
        </div>
      </div>

      <Stripes className="absolute bottom-0 right-6 h-7 w-36 sm:right-10" />
    </section>
  )
}
