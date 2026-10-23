import { Phone } from 'lucide-react'
import { CameraMark } from './Logo'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#hero" aria-label="Home" className="flex shrink-0 items-center gap-3">
          <CameraMark className="h-7 w-auto" />
          <span className="text-[15px] font-bold tracking-[0.2em] text-gold">
            EAGLE EYE
          </span>
        </a>

        <nav aria-label="Sections" className="flex items-center gap-1 sm:gap-2">
          {['services', 'about', 'contact'].map((section) => (
            <a
              key={section}
              className="hidden px-3 py-1 font-tech text-[13px] font-semibold uppercase tracking-[0.2em] text-smoke transition-colors hover:text-gold sm:inline-block"
              href={`#${section}`}
            >
              {section}
            </a>
          ))}
          <a
            href="tel:+918113907286"
            className="ml-2 inline-flex items-center gap-2 rounded-sm bg-gold px-4 py-2 font-tech text-[13px] font-bold uppercase tracking-[0.15em] text-ink transition-colors hover:bg-gold-soft"
          >
            <Phone className="h-3.5 w-3.5" />
            Call
          </a>
        </nav>
      </div>
    </header>
  )
}
