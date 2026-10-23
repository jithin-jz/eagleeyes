import { Camera } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mx-auto max-w-3xl px-5 pb-12">
      <div className="flex flex-col gap-3 border-t border-border-dark/70 pt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-faint-dark sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-1.5">
          <Camera className="h-3.5 w-3.5 text-accent-light" />
          © {year} Eagle Eye
        </p>

        <div className="flex items-center gap-4">
          <a
            className="transition-colors hover:text-text-dark"
            href="#services"
          >
            services
          </a>
          <a
            className="transition-colors hover:text-text-dark"
            href="#contact"
          >
            contact
          </a>
          <span className="text-border-dark" aria-hidden="true">
            ·
          </span>
          <p>Kayanna Bazar · India</p>
        </div>
      </div>
    </footer>
  )
}
