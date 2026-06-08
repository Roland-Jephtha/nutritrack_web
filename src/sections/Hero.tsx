import { useEffect, useState } from 'react'
import type { ReactElement } from 'react'

// ── Inline SVG icon components ────────────────────────────────────────────────
const FlameIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8710A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2c0 0-6 4.5-6 10a6 6 0 0 0 12 0c0-5.5-6-10-6-10z"/>
    <path d="M12 12c0 0-3 2-3 4.5a3 3 0 0 0 6 0C15 14 12 12 12 12z"/>
  </svg>
)

const DumbbellIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1A73E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.5 6.5h11M6.5 17.5h11"/>
    <path d="M3 9v6M6 7v10M18 7v10M21 9v6"/>
  </svg>
)

const TargetIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D93025" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#27AE60" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 6L9 17l-5-5"/>
  </svg>
)

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
)

const ChevronDownIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 9l-7 7-7-7"/>
  </svg>
)

// Phone-mockup SVG nav icons
const HomeNavIcon = ({ active }: { active: boolean }) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={active ? '#27AE60' : '#80868B'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)
const SearchNavIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#80868B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
)
const ChartNavIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#80868B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
)
const UserNavIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#80868B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
)
const CameraIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
)
const LeafIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22c1.25-1.25 2.5-2.5 3.5-4C8 14 10 11 12 2c0 0 8 4 8 12-2 4-6 6-10 6-2 0-4-1-5-2"/>
  </svg>
)

const VerifiedIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" fill="#27AE60" />
    <path d="M8 12.5l2.5 2.5 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// ── Floating stat chip ─────────────────────────────────────────────────────────
function StatChip({ Icon, value, label, className = '' }: {
  Icon: () => ReactElement; value: string; label: string; className?: string
}) {
  return (
    <div className={`absolute glass rounded-2xl px-4 py-3 shadow-el-3 flex items-center gap-3 ${className}`}>
      <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-white shadow-el-1 flex-shrink-0">
        <Icon />
      </div>
      <div>
        <div className="text-sm font-extrabold text-on-surface leading-none">{value}</div>
        <div className="text-xs text-on-secondary mt-0.5">{label}</div>
      </div>
    </div>
  )
}

const phrases = ['AI-Powered', 'Australian Foods', 'Instant Results']

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setPhraseIndex((i) => (i + 1) % phrases.length)
        setVisible(true)
      }, 300)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      style={{ backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(39,174,96,0.05) 0%, transparent 55%), radial-gradient(circle at 85% 20%, rgba(46,204,113,0.04) 0%, transparent 50%)' }}
    >
      {/* Decorative rings */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ border: '1px solid rgba(39,174,96,0.07)' }} />
      <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none" style={{ border: '1px solid rgba(39,174,96,0.05)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* ── Left: Text ────────────────────────────────────────────────── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Animated badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border text-sm font-bold"
              style={{ borderColor: 'rgba(39,174,96,0.3)', backgroundColor: 'rgba(39,174,96,0.06)' }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: '#27AE60' }} />
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: '#27AE60' }} />
              </span>
              <span
                className="text-gradient-green transition-all duration-300"
                style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(-4px)' }}
              >
                {phrases[phraseIndex]}
              </span>
              <span className="text-on-secondary">· NutriTracker AU</span>
            </div>

            {/* Headline */}
            <h1
              className="font-extrabold text-on-surface leading-none tracking-tight mb-6 animate-slide-up"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', letterSpacing: '-0.03em' }}
            >
              SCAN.{' '}
              <span className="text-gradient-green">TRACK.</span>
              <br />
              <span className="relative inline-block">
                TRUST.
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M4 8 C80 2, 160 10, 296 6" stroke="url(#heroLine)" strokeWidth="4" strokeLinecap="round" className="animate-fade-in" style={{ animationDelay: '0.6s' }} />
                  <defs>
                    <linearGradient id="heroLine" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#27AE60" /><stop offset="100%" stopColor="#2ECC71" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl text-on-secondary leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0 animate-slide-up"
              style={{ animationDelay: '0.15s' }}
            >
              Australia's smartest AI nutrition tracker. Point your camera at any food, scan any barcode, and get instant nutrition data — no guessing, no manual entry.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 animate-slide-up"
              style={{ animationDelay: '0.25s' }}
            >
              <button
                className="ripple-container group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white transition-all duration-300 hover:shadow-green-xl hover:-translate-y-1"
                style={{ background: 'linear-gradient(135deg, #27AE60, #2ECC71)' }}
              >
                <DownloadIcon />
                Get Started Free
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRightIcon />
                </span>
              </button>

              <button
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-bold transition-all duration-300 border-2 hover:border-brand-green hover:text-brand-green hover:-translate-y-0.5"
                style={{ borderColor: '#E8EAED', color: '#202124' }}
                onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ChevronDownIcon />
                See How It Works
              </button>
            </div>

            {/* Trust badges */}
            <div
              className="flex flex-wrap gap-3 items-center justify-center lg:justify-start animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              {[
                { label: 'Free to download', Icon: DownloadIcon },
                { label: 'Australian foods', Icon: LeafIcon },
                { label: 'AI-powered', Icon: CheckIcon },
              ].map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-on-secondary border"
                  style={{ backgroundColor: '#FFFFFF', borderColor: '#E8EAED' }}
                >
                  <b.Icon />
                  {b.label}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Phone Mockup ──────────────────────────────────────── */}
          <div className="flex-shrink-0 relative w-72 h-[580px] lg:w-80 lg:h-[640px]">
            {/* Floating stat chips */}
            <StatChip Icon={FlameIcon}    value="1,840"    label="kcal today"  className="float-1 -left-10 top-16 z-20" />
            <StatChip Icon={DumbbellIcon} value="142g"     label="protein"     className="float-2 -right-8 top-1/3 z-20" />
            <StatChip Icon={TargetIcon}   value="Day 14"   label="streak"      className="float-3 -left-6 bottom-28 z-20" />
            <StatChip Icon={VerifiedIcon} value="Verified" label="AU food data" className="float-1 -right-8 bottom-44 z-20" />
            <StatChip Icon={CheckIcon}    value="On track" label="macro goals"  className="float-4 -right-4 bottom-16 z-20" />

            {/* Soft glow behind phone */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none"
              style={{ backgroundColor: '#27AE60', animation: 'float 6s ease-in-out infinite' }}
            />

            {/* Phone frame */}
            <div
              className="relative z-10 w-full h-full rounded-[44px] overflow-hidden flex flex-col animate-scale-in bg-white"
              style={{
                boxShadow: '0 32px 80px rgba(60,64,67,0.22), 0 0 0 1px rgba(60,64,67,0.08)',
                animationDelay: '0.3s',
              }}
            >
              {/* Status bar */}
              <div className="flex items-center justify-between px-6 pt-4 pb-2">
                <span className="text-xs font-bold text-on-surface">9:41</span>
                <div className="w-24 h-5 rounded-full bg-on-surface" style={{ margin: '-2px auto 0' }} />
                <svg width="12" height="10" viewBox="0 0 12 10" fill="#202124">
                  <rect x="0" y="4" width="2" height="6" rx="1"/>
                  <rect x="3" y="2" width="2" height="8" rx="1"/>
                  <rect x="6" y="0" width="2" height="10" rx="1"/>
                  <rect x="9" y="1" width="2" height="9" rx="1"/>
                </svg>
              </div>

              {/* App header */}
              <div className="px-5 pt-2 pb-3 flex items-center justify-between">
                <div>
                  <p className="text-xs text-on-secondary font-semibold">Wednesday, 4 Jun</p>
                  <p className="text-lg font-extrabold text-on-surface leading-tight">Today</p>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold" style={{ backgroundColor: 'rgba(39,174,96,0.1)', color: '#27AE60' }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: '#27AE60' }} />
                  On Track
                </div>
              </div>

              {/* Calorie ring */}
              <div className="flex justify-center py-3">
                <div className="relative w-32 h-32">
                  <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#E8EAED" strokeWidth="10" />
                    <circle cx="50" cy="50" r="42" fill="none" stroke="url(#ringGrad)" strokeWidth="10" strokeLinecap="round" strokeDasharray={`${2 * Math.PI * 42 * 0.84} ${2 * Math.PI * 42 * 0.16}`} />
                    <defs>
                      <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#27AE60" /><stop offset="100%" stopColor="#2ECC71" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-xl font-extrabold text-on-surface leading-none">1,840</span>
                    <span className="text-xs text-on-secondary mt-0.5">/ 2,200 kcal</span>
                  </div>
                </div>
              </div>

              {/* Macro cards */}
              <div className="px-4 mb-3">
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: 'Protein', val: '142g', pct: 77, color: '#1A73E8' },
                    { label: 'Carbs',   val: '198g', pct: 82, color: '#E8710A' },
                    { label: 'Fat',     val: '52g',  pct: 72, color: '#D93025' },
                  ].map((m) => (
                    <div key={m.label} className="rounded-2xl p-3 border" style={{ borderColor: '#E8EAED' }}>
                      <div className="text-xs text-on-secondary mb-1">{m.label}</div>
                      <div className="text-sm font-bold text-on-surface mb-2">{m.val}</div>
                      <div className="w-full h-1.5 rounded-full" style={{ backgroundColor: '#E8EAED' }}>
                        <div className="h-1.5 rounded-full" style={{ width: `${m.pct}%`, backgroundColor: m.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent meals */}
              <div className="px-4 flex-1">
                <p className="text-xs font-bold text-on-surface mb-2">Recent Meals</p>
                {[
                  { color: '#27AE60', name: 'Avocado on sourdough', kcal: '320 kcal' },
                  { color: '#1A73E8', name: 'Grilled chicken salad', kcal: '480 kcal' },
                ].map((meal) => (
                  <div key={meal.name} className="flex items-center gap-3 py-2.5 border-b last:border-0" style={{ borderColor: '#E8EAED' }}>
                    <div className="w-7 h-7 rounded-xl flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: meal.color + '15' }}>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: meal.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-on-surface truncate">{meal.name}</p>
                      <p className="text-xs text-on-secondary">{meal.kcal}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Scan button */}
              <div className="px-4 py-3">
                <button
                  className="w-full py-3.5 rounded-2xl text-sm font-bold text-white flex items-center justify-center gap-2 ripple-container"
                  style={{ background: 'linear-gradient(135deg, #27AE60, #2ECC71)', boxShadow: '0 4px 16px rgba(39,174,96,0.35)' }}
                >
                  <CameraIcon />
                  Scan Food
                </button>
              </div>

              {/* Bottom nav */}
              <div className="flex justify-around pb-6 pt-2 border-t" style={{ borderColor: '#E8EAED' }}>
                {[
                  { Icon: <HomeNavIcon active={true} />, active: true },
                  { Icon: <SearchNavIcon />, active: false },
                  { Icon: <ChartNavIcon />, active: false },
                  { Icon: <UserNavIcon />, active: false },
                ].map(({ Icon, active }, idx) => (
                  <div key={idx} className={`flex flex-col items-center gap-1 ${active ? 'opacity-100' : 'opacity-35'}`}>
                    {Icon}
                    {active && <div className="w-4 h-0.5 rounded-full" style={{ backgroundColor: '#27AE60' }} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-20 flex items-center justify-center gap-10 flex-wrap animate-fade-in" style={{ animationDelay: '0.8s' }}>
          {[
            { value: '10,000+', label: 'Food Items' },
            { value: 'AI', label: 'Powered Scanning' },
            { value: '🇦🇺', label: 'Made for Australia' },
            { value: '< 10s', label: 'To log any meal' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl font-extrabold text-on-surface">{stat.value}</span>
              <span className="text-sm text-on-secondary">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
