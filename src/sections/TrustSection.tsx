import { useScrollAnimation } from '../hooks/useScrollAnimation'

const ShieldCheckIcon = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
)

const CpuCheckIcon = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <rect x="9" y="9" width="6" height="6"/>
    <line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/>
    <line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/>
    <line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/>
    <line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>
  </svg>
)

const LockIcon = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    <circle cx="12" cy="16" r="1" fill={color}/>
  </svg>
)

const cards = [
  {
    Icon: ShieldCheckIcon,
    title: 'Verified Food Data',
    body: 'Every food item is reviewed by our nutrition team before going live. No crowdsourced guesswork — only verified, accurate nutritional data.',
    accent: '#27AE60',
    stat: '10,000+',
    statLabel: 'verified items',
  },
  {
    Icon: CpuCheckIcon,
    title: 'AI + Human Review',
    body: 'Our AI scans are backed by human-verified data. When confidence is low, we flag it and recommend manual confirmation.',
    accent: '#1A73E8',
    stat: '99.2%',
    statLabel: 'scan accuracy',
  },
  {
    Icon: LockIcon,
    title: 'Australian Privacy Act',
    body: 'Your health data is handled in full compliance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles.',
    accent: '#D93025',
    stat: 'APA 1988',
    statLabel: 'compliant',
  },
]

export default function TrustSection() {
  const heading = useScrollAnimation({ direction: 'up' })

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={heading.ref} className={`text-center mb-16 ${heading.className}`}>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5 border"
            style={{ borderColor: 'rgba(217,48,37,0.25)', backgroundColor: 'rgba(217,48,37,0.05)', color: '#D93025' }}
          >
            TRUST & ACCURACY
          </div>
          <h2
            className="font-extrabold text-on-surface mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', letterSpacing: '-0.025em' }}
          >
            Built for accuracy.{' '}
            <span className="text-gradient-green">Built for trust.</span>
          </h2>
          <p className="text-lg text-on-secondary max-w-xl mx-auto">
            Nutrition data you can actually rely on — backed by human review, AI precision, and Australian law.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const { ref, className } = useScrollAnimation({ direction: 'scale' })
            const delays = ['delay-0', 'delay-150', 'delay-300']
            return (
              <div ref={ref} key={card.title} className={`${className} ${delays[i]} group`}>
                <div
                  className="bg-white rounded-3xl p-8 border text-center transition-all duration-300 hover:-translate-y-2"
                  style={{ borderColor: '#E8EAED', boxShadow: '0 1px 4px rgba(60,64,67,0.08)' }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = card.accent + '40'
                    el.style.boxShadow = `0 16px 48px rgba(60,64,67,0.12), 0 0 0 2px ${card.accent}20`
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = '#E8EAED'
                    el.style.boxShadow = '0 1px 4px rgba(60,64,67,0.08)'
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: card.accent + '12', border: `2px solid ${card.accent}20` }}
                  >
                    <card.Icon color={card.accent} />
                  </div>

                  <div className="text-2xl font-extrabold mb-0.5" style={{ color: card.accent }}>
                    {card.stat}
                  </div>
                  <div className="text-xs text-on-secondary mb-4 font-semibold uppercase tracking-wide">
                    {card.statLabel}
                  </div>
                  <h3 className="text-lg font-bold text-on-surface mb-3">{card.title}</h3>
                  <p className="text-sm text-on-secondary leading-relaxed">{card.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
