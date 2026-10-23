import { Camera } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 transition-colors duration-300 bg-bg-dark/90 backdrop-blur-md border-b border-border-dark/50">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between gap-4 px-5">
        <a
          href="#hero"
          aria-label="Home"
          className="flex items-center gap-2 shrink-0 text-[15px] tracking-tight text-text-dark transition-colors hover:text-accent-light"
        >
          <Camera className="w-5 h-5 text-accent-light" />
          <span className="font-semibold">eagle</span>
          <span className="text-faint-dark">eye</span>
        </a>

        <nav aria-label="Sections" className="flex items-center gap-1">
          {['services', 'about', 'contact'].map((section) => (
            <a
              key={section}
              className="rounded-full px-2.5 py-1 text-[13px] transition-colors text-faint-dark hover:text-text-dark"
              href={`#${section}`}
            >
              {section}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
