import { useScrollAnimation } from '../hooks/useScrollAnimation'

const DownloadIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const AppleIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
)

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/>
  </svg>
)

export default function CTA() {
  const { ref, className } = useScrollAnimation({ direction: 'up' })

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Subtle decorative rings */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ border: '1px solid rgba(39,174,96,0.08)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ border: '1px solid rgba(39,174,96,0.05)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ border: '1px solid rgba(39,174,96,0.12)' }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
        <div className={className}>
          {/* Live badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-sm font-bold border"
            style={{ borderColor: 'rgba(39,174,96,0.25)', backgroundColor: 'rgba(39,174,96,0.06)', color: '#27AE60' }}
          >
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ backgroundColor: '#27AE60' }}
              />
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#27AE60' }} />
            </span>
            Free to download · No credit card required
          </div>

          {/* Headline */}
          <h2
            className="font-extrabold text-on-surface leading-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}
          >
            Start tracking smarter{' '}
            <span className="text-gradient-green">today.</span>
          </h2>

          <p className="text-xl text-on-secondary mb-10 max-w-xl mx-auto font-medium">
            Join thousands of Australians taking control of their nutrition with AI-powered tracking.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <button
              className="ripple-container group inline-flex items-center gap-3 px-10 py-4 rounded-full text-base font-bold text-white transition-all duration-300 hover:shadow-green-xl hover:-translate-y-1"
              style={{ background: 'linear-gradient(135deg, #27AE60, #2ECC71)' }}
            >
              <DownloadIcon />
              Download Free
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRightIcon />
              </span>
            </button>
            <a
              href="#features"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-base font-bold text-on-surface transition-all duration-300 border-2 hover:border-brand-green hover:text-brand-green hover:-translate-y-0.5"
              style={{ borderColor: '#E8EAED' }}
            >
              Explore Features
            </a>
          </div>

          {/* App store badges */}
          <div className="flex gap-4 justify-center flex-wrap">
            {[
              { platform: 'App Store', sub: 'Download on the', Icon: AppleIcon },
              { platform: 'Google Play', sub: 'Get it on', Icon: PlayIcon },
            ].map((badge) => (
              <div
                key={badge.platform}
                className="group flex items-center gap-3 px-5 py-3.5 rounded-2xl cursor-pointer transition-all duration-200 bg-white border hover:-translate-y-0.5"
                style={{
                  borderColor: '#E8EAED',
                  boxShadow: '0 1px 4px rgba(60,64,67,0.1)',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(39,174,96,0.4)'
                  el.style.boxShadow = '0 8px 24px rgba(39,174,96,0.15)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = '#E8EAED'
                  el.style.boxShadow = '0 1px 4px rgba(60,64,67,0.1)'
                }}
              >
                <span className="text-on-surface transition-colors duration-200 group-hover:text-brand-green">
                  <badge.Icon />
                </span>
                <div className="text-left">
                  <div className="text-xs text-on-secondary leading-none mb-0.5">{badge.sub}</div>
                  <div className="text-sm font-bold text-on-surface">{badge.platform}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
