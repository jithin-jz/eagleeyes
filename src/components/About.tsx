import { Shield, Zap, Clock, Award } from 'lucide-react'

const highlights = [
  {
    icon: Shield,
    label: 'Trusted',
    value: 'Local experts serving Kayanna Bazar and surrounding areas',
  },
  {
    icon: Zap,
    label: 'Fast',
    value: 'Quick response times and efficient installations',
  },
  {
    icon: Clock,
    label: 'Support',
    value: 'Reliable after-sales service and maintenance',
  },
  {
    icon: Award,
    label: 'Quality',
    value: 'Top-tier equipment and professional workmanship',
  },
]

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-16 bg-paper py-14 text-ink sm:py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:gap-12 sm:px-5 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <p className="label-rule text-[12px] font-bold uppercase tracking-[0.3em] text-gold-deep">
            About us
          </p>
          <h2
            id="about-heading"
            className="mt-5 text-[1.6rem] font-semibold leading-tight sm:mt-6 sm:text-[2rem] lg:text-[2.4rem]"
          >
            Security should be accessible and reliable.
          </h2>
          <div className="mt-5 space-y-4 text-[14px] leading-relaxed text-slate sm:mt-6 sm:text-[15px]">
            <p>
              Eagle Eye is your one-stop destination for security and
              technology solutions. Based in Kayanna Bazar (PIN 673525), we
              bring years of hands-on experience in CCTV surveillance, network
              infrastructure, smart automation, and computer services.
            </p>
            <p>
              From a single camera setup for a small shop to a full-scale
              surveillance network for an enterprise, we design every solution
              with the same attention to detail and commitment to quality.
            </p>
          </div>
        </div>

        <dl className="grid content-start gap-x-8 sm:grid-cols-2">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="flex items-start gap-4 border-b border-stone py-5 sm:py-6"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-gold">
                  <Icon className="h-[18px] w-[18px]" />
                </div>
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.25em] text-gold-deep">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-[14px] font-medium leading-snug sm:text-[15px]">
                    {item.value}
                  </dd>
                </div>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}
