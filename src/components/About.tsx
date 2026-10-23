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
      className="grid scroll-mt-24 gap-3 border-t border-border-dark/70 py-10 sm:grid-cols-[6.5rem_1fr] sm:gap-8 sm:py-14"
    >
      <h2
        id="about-heading"
        className="pt-1 font-mono text-[11px] uppercase tracking-[0.12em] text-faint-dark sm:sticky sm:top-20 sm:self-start"
      >
        About
      </h2>

      <div className="min-w-0">
        <div className="max-w-xl space-y-4 text-[15px] leading-relaxed text-muted-dark">
          <p>
            Eagle Eye is your one-stop destination for security and technology
            solutions. Based in Kayanna Bazar (PIN 673525), we bring years of
            hands-on experience in CCTV surveillance, network infrastructure,
            smart automation, and computer services.
          </p>
          <p>
            We believe security should be accessible and reliable. From a single
            camera setup for a small shop to a full-scale surveillance network
            for an enterprise, we design every solution with the same attention
            to detail and commitment to quality.
          </p>
        </div>

        <dl className="mt-8 grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="flex items-start gap-3 rounded-lg border border-border-dark/40 bg-surface-dark/30 p-4 transition-all hover:border-accent/30 hover:bg-surface-dark/50"
              >
                <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-accent/10 text-accent-light">
                  <Icon className="h-4 w-4" />
                </div>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.12em] text-accent-light">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-[13px] leading-relaxed text-muted-dark">
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
