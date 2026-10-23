import {
  Camera,
  Network,
  Monitor,
  Laptop,
  Fingerprint,
  Lock,
  Cpu,
} from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'CCTV Installation',
    description:
      'Complete surveillance setup, including IP cameras, DVR/NVR systems, remote viewing, and 24/7 monitoring for homes and businesses.',
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
      'Smart home and office automation, including lighting, appliances, curtains, and centralised control systems.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-16 bg-ink-2 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="label-rule text-[12px] font-bold uppercase tracking-[0.3em] text-gold">
              Our services
            </p>
            <h2
              id="services-heading"
              className="mt-6 max-w-lg text-[1.9rem] font-semibold leading-tight text-paper sm:text-[2.4rem]"
            >
              Everything you need to see, secure, and stay connected.
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-smoke">
            One local team for cameras, networks, computers, and smart
            control, from the first site visit to after-sales support.
          </p>
        </div>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <li
                key={service.title}
                className="group relative bg-ink-2 p-7 transition-colors hover:bg-ink-3"
              >
                <span className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-gold transition-transform duration-300 group-hover:scale-y-100" />
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gold text-ink">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-tech text-[15px] font-semibold tracking-[0.2em] text-ash">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-6 text-[17px] font-semibold text-gold-soft">
                  {service.title}
                </h3>
                {service.subtitle && (
                  <span className="text-[12px] text-ash">{service.subtitle}</span>
                )}
                <p className="mt-2 text-[13.5px] leading-relaxed text-smoke">
                  {service.description}
                </p>
              </li>
            )
          })}

          {/* Fills the last grid cell with a call to action */}
          <li className="relative flex flex-col justify-between overflow-hidden bg-gold p-7 text-ink sm:col-span-2 lg:col-span-2">
            <p className="max-w-xs text-[20px] font-bold leading-snug">
              Not sure what you need? We'll visit and advise.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex w-fit items-center rounded-sm bg-ink px-6 py-3 font-tech text-[14px] font-bold uppercase tracking-[0.2em] text-gold transition-colors hover:bg-ink-3"
            >
              Book a site visit
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
