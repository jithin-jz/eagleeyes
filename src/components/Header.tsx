import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { CameraMark } from './Logo'

const sections = ['services', 'about', 'contact']

export default function Header() {
  const [open, setOpen] = useState(false)

  // Close the mobile menu when the viewport grows past the breakpoint
  useEffect(() => {
    const query = window.matchMedia('(min-width: 640px)')
    const close = () => query.matches && setOpen(false)
    query.addEventListener('change', close)
    return () => query.removeEventListener('change', close)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-5">
        <a
          href="#hero"
          aria-label="Eagle Eye home"
          onClick={() => setOpen(false)}
          className="flex shrink-0 items-center"
        >
          <CameraMark className="h-8 w-auto sm:h-9" />
        </a>

        <nav aria-label="Sections" className="flex shrink-0 items-center gap-1 sm:gap-2">
          {sections.map((section) => (
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
            aria-label="Call Eagle Eye"
            className="inline-flex h-10 items-center gap-2 rounded-sm bg-gold px-3 font-tech text-[13px] font-bold uppercase tracking-[0.15em] text-ink transition-colors hover:bg-gold-soft sm:ml-2 sm:px-4"
          >
            <Phone className="h-4 w-4 sm:h-3.5 sm:w-3.5" />
            <span className="hidden min-[400px]:inline">Call</span>
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-sm border border-line text-gold transition-colors hover:border-gold sm:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden border-line bg-ink transition-[max-height] duration-300 sm:hidden ${
          open ? 'max-h-80 border-t' : 'max-h-0'
        }`}
      >
        <ul className="px-4 py-2">
          {sections.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="flex items-center justify-between border-b border-line py-4 font-tech text-[15px] font-semibold uppercase tracking-[0.25em] text-smoke transition-colors last:border-b-0 hover:text-gold"
              >
                {section}
                <span className="text-gold/50" aria-hidden="true">→</span>
              </a>
            </li>
          ))}
          <li className="grid grid-cols-2 gap-2 py-4">
            <a
              href="tel:+918113907286"
              tabIndex={open ? 0 : -1}
              className="rounded-sm bg-gold py-3 text-center font-tech text-[13px] font-bold uppercase tracking-[0.15em] text-ink"
            >
              Priyesh
            </a>
            <a
              href="tel:+917736210693"
              tabIndex={open ? 0 : -1}
              className="rounded-sm border border-gold/40 py-3 text-center font-tech text-[13px] font-bold uppercase tracking-[0.15em] text-gold"
            >
              Akhil
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
