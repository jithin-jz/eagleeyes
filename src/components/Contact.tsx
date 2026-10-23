import { Phone, Mail, MapPin, Check } from 'lucide-react'
import { CameraMark, Stripes } from './Logo'

function Instagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  )
}

const services = [
  { title: 'CCTV Installation' },
  { title: 'Networking' },
  { title: 'Computer Service', subtitle: 'Hardware & Software' },
  { title: 'Laptop Service' },
  { title: 'Biometric' },
  { title: 'Door Lock' },
  { title: 'Automation' },
]

const contacts = [
  {
    icon: Phone,
    label: 'Priyesh',
    value: '+91 81139 07286',
    href: 'tel:+918113907286',
  },
  {
    icon: Phone,
    label: 'Akhil',
    value: '+91 77362 10693',
    href: 'tel:+917736210693',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'eagleeyekayanna@gmail.com',
    href: 'mailto:eagleeyekayanna@gmail.com',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@eagle.eye195',
    href: 'https://www.instagram.com/eagle.eye195',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Kayanna Bazar, PIN 673525',
    href: 'https://maps.google.com/?q=Kayanna+Bazar+673525',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-16 bg-stone py-12 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-5">
        {/* Laid out like the back of the business card */}
        <div className="grid overflow-hidden rounded-sm shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] lg:grid-cols-[1fr_1.25fr]">
          <div className="relative bg-ink p-6 sm:p-10 lg:border-r-4 lg:border-gold">
            <div className="flex items-center gap-3 sm:gap-4">
              <CameraMark className="h-9 w-auto shrink-0 sm:h-11" />
              <span className="text-[19px] font-bold tracking-[0.15em] text-gold sm:text-[22px]">
                EAGLE EYE
              </span>
            </div>

            <p className="label-rule mt-8 text-[12px] sm:mt-10 font-bold uppercase tracking-[0.3em] text-gold">
              Our services
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 pb-4 sm:grid-cols-3 sm:pb-0 lg:grid-cols-1">
              {services.map((service) => (
                <li key={service.title} className="flex gap-2 text-gold-soft sm:gap-3">
                  <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  <span>
                    <span className="text-[14px] sm:text-[16px]">{service.title}</span>
                    {service.subtitle && (
                      <span className="block text-[12px] text-gold/70 sm:text-[13px]">
                        {service.subtitle}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
            <Stripes className="absolute bottom-0 right-6 h-4 w-20 sm:h-5 sm:w-24 lg:hidden" />
          </div>

          <div className="h-1 bg-gold lg:hidden" />

          <div className="min-w-0 bg-paper p-6 text-ink sm:p-10">
            <h2
              id="contact-heading"
              className="label-rule text-[12px] font-bold uppercase tracking-[0.3em] text-gold-deep"
            >
              Get in touch
            </h2>
            <p className="mt-5 max-w-sm text-[14px] leading-relaxed text-slate">
              Need a security solution, a network setup, or just want to
              discuss your requirements? Reach out. We're always happy to help.
            </p>

            <div className="mt-6">
              {contacts.map((contact) => {
                const Icon = contact.icon
                const external = contact.href.startsWith('http')
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-3 border-b sm:gap-4 border-gold/25 py-4 last:border-b-0"
                  >
                    <span className="grid h-9 w-9 shrink-0 sm:h-10 sm:w-10 place-items-center rounded-full bg-ink text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-gold-deep sm:text-[11px]">
                        {contact.label}
                      </span>
                      <span className="block text-[15px] font-semibold transition-colors [overflow-wrap:anywhere] group-hover:text-gold-deep min-[400px]:text-[16px] sm:text-[19px]">
                        {contact.value}
                      </span>
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
