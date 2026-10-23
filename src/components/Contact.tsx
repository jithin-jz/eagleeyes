import { Phone, Mail, MapPin, AtSign, ArrowUpRight } from 'lucide-react'

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
    icon: AtSign,
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
      className="grid scroll-mt-24 gap-3 border-t border-border-dark/70 py-10 sm:grid-cols-[6.5rem_1fr] sm:gap-8 sm:py-14"
    >
      <h2
        id="contact-heading"
        className="pt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-faint-dark sm:sticky sm:top-20 sm:self-start"
      >
        Contact
      </h2>

      <div className="min-w-0">
        <p className="max-w-md text-[15px] leading-relaxed text-muted-dark">
          Need a security solution, a network setup, or just want to discuss
          your requirements? Reach out — we're always happy to help.
        </p>

        {/* Primary CTA */}
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-[14px] font-medium text-white transition-all hover:bg-accent-light hover:scale-105"
            href="tel:+918113907286"
          >
            <Phone className="h-4 w-4" />
            Call now
          </a>
          <a
            className="inline-flex items-center gap-1 text-[13px] text-faint-dark transition-colors hover:text-text-dark"
            href="mailto:eagleeyekayanna@gmail.com"
          >
            <Mail className="h-3.5 w-3.5" />
            eagleeyekayanna@gmail.com
          </a>
        </div>

        {/* Contact Details */}
        <dl className="mt-9 space-y-4 border-t border-border-dark/70 pt-6">
          {contacts.map((contact) => {
            const Icon = contact.icon
            return (
              <div key={contact.label} className="sm:flex sm:gap-5">
                <dt className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-faint-dark sm:w-28 sm:shrink-0 sm:pt-[3px]">
                  <Icon className="h-3.5 w-3.5 text-accent-light" />
                  {contact.label}
                </dt>
                <dd className="mt-1 sm:mt-0">
                  <a
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group inline-flex items-center gap-1 text-[14px] leading-relaxed text-muted-dark transition-colors hover:text-accent-light"
                  >
                    {contact.value}
                    <ArrowUpRight className="h-3 w-3 shrink-0 text-border-dark transition-colors group-hover:text-accent-light opacity-0 group-hover:opacity-100" />
                  </a>
                </dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
