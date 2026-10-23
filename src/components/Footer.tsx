import { CameraMark, Stripes } from './Logo'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-line bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <CameraMark className="h-6 w-auto" />
          <span className="text-[13px] font-bold tracking-[0.2em] text-gold">
            EAGLE EYE
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-tech text-[13px] font-semibold uppercase tracking-[0.2em] text-ash">
          <a className="transition-colors hover:text-gold" href="#services">
            Services
          </a>
          <a className="transition-colors hover:text-gold" href="#contact">
            Contact
          </a>
          <span aria-hidden="true">·</span>
          <p>© {year} Kayanna Bazar · India</p>
        </div>
      </div>
      <Stripes className="absolute bottom-0 right-6 h-3 w-24" />
    </footer>
  )
}
