import { useScrollAnimation } from '../hooks/useScrollAnimation'

const UserIcon = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)

const ScanIcon = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/>
    <rect x="7" y="7" width="10" height="10" rx="1"/>
  </svg>
)

const ChartIcon = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
    <line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
)

const steps = [
  {
    number: '01',
    Icon: UserIcon,
    title: 'Create your profile',
    body: 'Set your health goals, current weight, and activity level. NutriTracker AU builds a personalised calorie and macro plan from day one.',
    color: '#27AE60',
    bgColor: 'rgba(39,174,96,0.08)',
    detail: 'Takes < 2 minutes',
  },
  {
    number: '02',
    Icon: ScanIcon,
    title: 'Scan or search your food',
    body: 'Use AI camera scanning, barcode scanning, or search from 10,000+ verified Australian food items. Logging takes under 10 seconds.',
    color: '#1A73E8',
    bgColor: 'rgba(26,115,232,0.08)',
    detail: 'Under 10 seconds per meal',
  },
  {
    number: '03',
    Icon: ChartIcon,
    title: 'Track and improve',
    body: 'Log daily, hit streaks, and watch your body transform. AI-driven weekly insights show exactly where to improve.',
    color: '#D93025',
    bgColor: 'rgba(217,48,37,0.08)',
    detail: 'Daily & weekly insights',
  },
]

export default function HowItWorks() {
  const heading = useScrollAnimation({ direction: 'up' })

  return (
    <section id="how-it-works" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={heading.ref} className={`text-center mb-20 ${heading.className}`}>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5 border"
            style={{ borderColor: 'rgba(26,115,232,0.25)', backgroundColor: 'rgba(26,115,232,0.06)', color: '#1A73E8' }}
          >
            HOW IT WORKS
          </div>
          <h2
            className="font-extrabold text-on-surface mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', letterSpacing: '-0.025em' }}
          >
            Up and running in{' '}
            <span className="text-gradient-green">60 seconds</span>
          </h2>
          <p className="text-lg text-on-secondary max-w-xl mx-auto">
            From download to your first logged meal — faster than you'd expect.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line desktop */}
          <div
            className="hidden lg:block absolute top-16 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(to right, transparent 5%, #E8EAED 20%, #27AE60 50%, #E8EAED 80%, transparent 95%)' }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-6">
            {steps.map((step, i) => {
              const { ref, className } = useScrollAnimation({ direction: 'up' })
              const delays = ['delay-0', 'delay-150', 'delay-300']

              return (
                <div
                  ref={ref}
                  key={step.number}
                  className={`${className} ${delays[i]} group flex flex-col items-center text-center`}
                >
                  {/* Icon bubble */}
                  <div className="relative mb-8">
                    <div
                      className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ backgroundColor: step.bgColor }}
                    />
                    <div
                      className="relative w-16 h-16 rounded-full flex items-center justify-center shadow-el-2 transition-all duration-300 group-hover:scale-110 group-hover:shadow-el-4"
                      style={{ backgroundColor: step.bgColor, border: `2px solid ${step.color}30` }}
                    >
                      <step.Icon color={step.color} />
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-extrabold text-white shadow-el-1"
                      style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)` }}
                    >
                      {i + 1}
                    </div>
                  </div>

                  <span className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: step.color }}>
                    Step {step.number}
                  </span>

                  <h3 className="text-xl font-bold text-on-surface mb-3">{step.title}</h3>
                  <p className="text-sm text-on-secondary leading-relaxed max-w-sm mb-4">{step.body}</p>

                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{ backgroundColor: step.bgColor, color: step.color }}
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                    {step.detail}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button
            className="ripple-container inline-flex items-center gap-3 px-10 py-4 rounded-full text-base font-bold text-white transition-all duration-300 hover:shadow-green-xl hover:-translate-y-1"
            style={{ background: 'linear-gradient(135deg, #27AE60, #2ECC71)' }}
          >
            Start Tracking for Free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
