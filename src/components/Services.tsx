import {
  Camera,
  Network,
  Monitor,
  Laptop,
  Fingerprint,
  Lock,
  Cpu,
  Check,
} from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'CCTV Installation',
    description:
      'Complete surveillance setup — IP cameras, DVR/NVR systems, remote viewing, and 24/7 monitoring for homes and businesses.',
  },
  {
    icon: Network,
    title: 'Networking',
    description:
      'Structured cabling, Wi-Fi solutions, router configuration, and reliable network infrastructure tailored to your space.',
  },
  {
    icon: Monitor,
    title: 'Computer Service',
    subtitle: 'Hardware & Software',
    description:
      'Troubleshooting, upgrades, OS installation, virus removal, and complete system maintenance.',
  },
  {
    icon: Laptop,
    title: 'Laptop Service',
    description:
      'Screen replacement, keyboard repair, battery service, data recovery, and performance tuning.',
  },
  {
    icon: Fingerprint,
    title: 'Biometric',
    description:
      'Fingerprint and face-recognition attendance systems for offices, factories, and institutions.',
  },
  {
    icon: Lock,
    title: 'Door Lock',
    description:
      'Smart locks, RFID access systems, and electronic door control for enhanced security.',
  },
  {
    icon: Cpu,
    title: 'Automation',
    description:
      'Smart home and office automation — lighting, appliances, curtains, and centralised control systems.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="grid scroll-mt-24 gap-3 border-t border-border-dark/70 py-10 sm:grid-cols-[6.5rem_1fr] sm:gap-8 sm:py-14"
    >
      <h2
        id="services-heading"
        className="pt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-faint-dark sm:sticky sm:top-20 sm:self-start"
      >
        Services
      </h2>

      <div className="min-w-0">
        <ul className="grid gap-3 sm:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <li
                key={service.title}
                className={`service-card group rounded-xl border border-border-dark/50 bg-surface-dark/50 p-5 animate-fade-in-up stagger-${index + 1}`}
                style={{ opacity: 0 }}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent-light transition-colors group-hover:bg-accent/20">
                    <Icon className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-medium text-text-dark">
                      {service.title}
                    </h3>
                    {service.subtitle && (
                      <span className="text-[12px] text-faint-dark">
                        {service.subtitle}
                      </span>
                    )}
                    <p className="mt-1.5 text-[13px] leading-relaxed text-muted-dark">
                      {service.description}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {services.map((service) => (
            <span
              key={service.title}
              className="inline-flex items-center gap-1.5 rounded-full border border-border-dark/50 bg-surface-dark/30 px-3 py-1 text-[12px] text-muted-dark"
            >
              <Check className="h-3 w-3 text-accent-light" />
              {service.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
