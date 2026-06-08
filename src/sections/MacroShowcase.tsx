import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useState } from 'react'

const DumbbellIcon = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.5 6.5h11M6.5 17.5h11"/>
    <path d="M3 9v6M6 7v10M18 7v10M21 9v6"/>
  </svg>
)

const GrainIcon = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
    <path d="M2 17l10 5 10-5"/>
    <path d="M2 12l10 5 10-5"/>
  </svg>
)

const DropletIcon = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
  </svg>
)

const macros = [
  {
    Icon: DumbbellIcon,
    label: 'Protein',
    accent: '#1A73E8',
    bgLight: 'rgba(26,115,232,0.07)',
    description: 'Build and maintain muscle. NutriTracker AU surfaces your protein intake across every meal and flags shortfalls before the day ends.',
    current: 142, target: 185, unit: 'g', pct: 77,
  },
  {
    Icon: GrainIcon,
    label: 'Carbohydrates',
    accent: '#E8710A',
    bgLight: 'rgba(232,113,10,0.07)',
    description: 'Fuel your day smartly. See where your carbs come from — whole grains, sugars, fibre — and make better food swaps with one tap.',
    current: 198, target: 240, unit: 'g', pct: 82,
  },
  {
    Icon: DropletIcon,
    label: 'Fats',
    accent: '#D93025',
    bgLight: 'rgba(217,48,37,0.07)',
    description: 'Not all fats are equal. Track saturated and unsaturated fats separately for a complete picture of your dietary quality.',
    current: 52, target: 72, unit: 'g', pct: 72,
  },
]

export default function MacroShowcase() {
  const heading = useScrollAnimation()
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={heading.ref} className={`text-center mb-16 ${heading.className}`}>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5 border"
            style={{ borderColor: 'rgba(39,174,96,0.25)', backgroundColor: 'rgba(39,174,96,0.06)', color: '#27AE60' }}
          >
            NUTRITION INTELLIGENCE
          </div>
          <h2
            className="font-extrabold text-on-surface mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', letterSpacing: '-0.025em' }}
          >
            Every macro,{' '}
            <span className="text-gradient-green">perfectly tracked</span>
          </h2>
          <p className="text-lg text-on-secondary max-w-xl mx-auto">
            Colour-coded, goal-aware, and always in context — see your nutrition at a glance.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          {macros.map((m, i) => {
            const { ref, className } = useScrollAnimation({ direction: 'up' })
            const isHovered = hovered === m.label
            const delays = ['delay-0', 'delay-150', 'delay-300']

            return (
              <div
                ref={ref}
                key={m.label}
                className={`${className} ${delays[i]}`}
                onMouseEnter={() => setHovered(m.label)}
                onMouseLeave={() => setHovered(null)}
              >
                <div
                  className="bg-white rounded-3xl p-7 sm:p-9 flex flex-col sm:flex-row items-start gap-7 transition-all duration-300"
                  style={{
                    borderLeft: `4px solid ${m.accent}`,
                    border: `1.5px solid ${isHovered ? m.accent + '50' : '#E8EAED'}`,
                    borderLeftWidth: '4px',
                    borderLeftColor: m.accent,
                    boxShadow: isHovered
                      ? `0 16px 48px rgba(60,64,67,0.1), 0 0 0 3px ${m.accent}15`
                      : '0 1px 4px rgba(60,64,67,0.08)',
                    transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{
                      backgroundColor: m.bgLight,
                      transform: isHovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1) rotate(0)',
                    }}
                  >
                    <m.Icon color={m.accent} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-on-surface">{m.label}</h3>
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: m.accent }} />
                    </div>
                    <p className="text-sm text-on-secondary leading-relaxed mb-5 max-w-lg">{m.description}</p>

                    <div className="flex items-center gap-4">
                      <div className="flex-1 h-2.5 rounded-full overflow-hidden" style={{ backgroundColor: '#E8EAED' }}>
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{ width: `${m.pct}%`, background: `linear-gradient(to right, ${m.accent}aa, ${m.accent})` }}
                        />
                      </div>
                      <span className="text-sm font-bold flex-shrink-0" style={{ color: m.accent }}>
                        {m.current}{m.unit} / {m.target}{m.unit}
                      </span>
                    </div>
                  </div>

                  {/* Ring */}
                  <div className="hidden sm:flex flex-col items-center justify-center flex-shrink-0">
                    <div className="relative w-20 h-20">
                      <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                        <circle cx="40" cy="40" r="32" fill="none" stroke="#E8EAED" strokeWidth="8" />
                        <circle
                          cx="40" cy="40" r="32" fill="none" stroke={m.accent} strokeWidth="8" strokeLinecap="round"
                          strokeDasharray={`${2 * Math.PI * 32 * m.pct / 100} ${2 * Math.PI * 32}`}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-extrabold" style={{ color: m.accent }}>{m.pct}%</span>
                      </div>
                    </div>
                    <span className="text-xs text-on-secondary mt-1">of daily goal</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
