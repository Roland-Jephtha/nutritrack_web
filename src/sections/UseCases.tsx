import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useState } from 'react'

const GymIcon = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.5 6.5h11M6.5 17.5h11"/>
    <path d="M3 9v6M6 7v10M18 7v10M21 9v6"/>
  </svg>
)

const BoxIcon = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
    <line x1="12" y1="22.08" x2="12" y2="12"/>
  </svg>
)

const HeartPulseIcon = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    <polyline points="8 12 10 9 13 14 15 11 16 12"/>
  </svg>
)

const UsersIcon = ({ color }: { color: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const useCases = [
  {
    Icon: GymIcon,
    title: 'Gym & Fitness',
    body: 'Hit your protein targets and time your macros around workouts for maximum performance and recovery.',
    accent: '#1A73E8',
    bg: 'rgba(26,115,232,0.06)',
    tags: ['High Protein', 'Pre/Post Workout'],
  },
  {
    Icon: BoxIcon,
    title: 'Meal Prep',
    body: "Plan your week's meals and log them in seconds by scanning your meal prep containers with the barcode scanner.",
    accent: '#27AE60',
    bg: 'rgba(39,174,96,0.06)',
    tags: ['Batch Cooking', 'Weekly Planning'],
  },
  {
    Icon: HeartPulseIcon,
    title: 'Health Management',
    body: 'Track sodium, sugar, and fibre for diet-driven health goals — ideal for managing chronic conditions with your doctor.',
    accent: '#D93025',
    bg: 'rgba(217,48,37,0.06)',
    tags: ['Sodium', 'Sugar', 'Fibre'],
  },
  {
    Icon: UsersIcon,
    title: 'Family Nutrition',
    body: "Keep the whole family's nutrition on track from one device with age-appropriate targets for every member.",
    accent: '#E8710A',
    bg: 'rgba(232,113,10,0.06)',
    tags: ['Family Profiles', 'Kid Goals'],
  },
]

export default function UseCases() {
  const heading = useScrollAnimation({ direction: 'up' })
  const [active, setActive] = useState<string | null>(null)

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={heading.ref} className={`text-center mb-16 ${heading.className}`}>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5 border"
            style={{ borderColor: 'rgba(26,115,232,0.25)', backgroundColor: 'rgba(26,115,232,0.06)', color: '#1A73E8' }}
          >
            USE CASES
          </div>
          <h2
            className="font-extrabold text-on-surface mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', letterSpacing: '-0.025em' }}
          >
            Built for every{' '}
            <span className="text-gradient-green">Australian lifestyle</span>
          </h2>
          <p className="text-lg text-on-secondary max-w-xl mx-auto">
            Whether you're hitting the gym, meal prepping, or managing your health — NutriTracker AU fits your life.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {useCases.map((uc, i) => {
            const { ref, className } = useScrollAnimation({ direction: 'up' })
            const delays = ['delay-0', 'delay-75', 'delay-150', 'delay-225']
            const isActive = active === uc.title

            return (
              <div ref={ref} key={uc.title} className={`${className} ${delays[i]}`}>
                <div
                  className="bg-white rounded-3xl p-8 cursor-default transition-all duration-300 h-full"
                  style={{
                    border: `1.5px solid ${isActive ? uc.accent + '50' : '#E8EAED'}`,
                    boxShadow: isActive
                      ? `0 16px 40px rgba(60,64,67,0.12), 0 0 0 2px ${uc.accent}15`
                      : '0 1px 4px rgba(60,64,67,0.08)',
                    transform: isActive ? 'translateY(-4px)' : 'translateY(0)',
                  }}
                  onMouseEnter={() => setActive(uc.title)}
                  onMouseLeave={() => setActive(null)}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        backgroundColor: uc.bg,
                        transform: isActive ? 'scale(1.1) rotate(-5deg)' : 'scale(1) rotate(0)',
                      }}
                    >
                      <uc.Icon color={uc.accent} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-on-surface mb-2">{uc.title}</h3>
                      <p className="text-sm text-on-secondary leading-relaxed mb-4">{uc.body}</p>
                      <div className="flex flex-wrap gap-2">
                        {uc.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-full text-xs font-semibold"
                            style={{ backgroundColor: uc.bg, color: uc.accent }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className="mt-5 h-0.5 rounded-full transition-all duration-500"
                    style={{
                      width: isActive ? '100%' : '32px',
                      background: `linear-gradient(to right, ${uc.accent}, transparent)`,
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
