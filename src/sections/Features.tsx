import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { useState } from 'react'
import type { ReactElement } from 'react'

// Clean stroke SVG icons — consistent 24×24 grid, 2px stroke, round caps/joins
const icons: Record<string, ReactElement> = {
  camera: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  ),
  barcode: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 5v14M7 5v14M11 5v14M15 5v14M19 5v14"/>
      <rect x="1" y="3" width="22" height="18" rx="2"/>
    </svg>
  ),
  pieChart: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
      <path d="M22 12A10 10 0 0 0 12 2v10z"/>
    </svg>
  ),
  target: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  trendUp: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
      <polyline points="17 6 23 6 23 12"/>
    </svg>
  ),
  globe: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  ),
}

const features = [
  {
    iconKey: 'camera',
    title: 'AI Food Scanning',
    description: 'Point your camera at any meal. Powered by Google Gemini, it instantly identifies foods and estimates nutrition — no typing needed.',
    accent: '#27AE60',
    tag: 'Most used',
  },
  {
    iconKey: 'barcode',
    title: 'Barcode Scanner',
    description: 'Scan any Australian packaged food barcode to pull verified nutrition data in under a second.',
    accent: '#1A73E8',
    tag: null,
  },
  {
    iconKey: 'pieChart',
    title: 'Macro Breakdown',
    description: 'Ring charts track protein, carbs, and fat with real-time daily summaries and colour-coded progress.',
    accent: '#E8710A',
    tag: null,
  },
  {
    iconKey: 'target',
    title: 'Daily Goals',
    description: 'Set personalised calorie and macro targets based on your weight, height, activity level, and goal.',
    accent: '#D93025',
    tag: null,
  },
  {
    iconKey: 'trendUp',
    title: 'Progress & Streaks',
    description: 'Weekly trends, daily logging streaks, and milestone badges keep you motivated and consistent.',
    accent: '#7B61FF',
    tag: 'Popular',
  },
  {
    iconKey: 'globe',
    title: 'Australian Database',
    description: 'Thousands of verified Australian food items including Woolworths, Coles, Aldi, and restaurant chains.',
    accent: '#27AE60',
    tag: null,
  },
]

function FeatureCard({ iconKey, title, description, accent, tag, index }: typeof features[0] & { index: number }) {
  const { ref, className } = useScrollAnimation({ direction: 'up' })
  const [hovered, setHovered] = useState(false)
  const delays = [0, 75, 150, 225, 300, 375]

  return (
    <div
      ref={ref}
      className={`${className} delay-${delays[index] ?? 0}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative bg-white rounded-3xl p-7 h-full flex flex-col cursor-default"
        style={{
          border: `1.5px solid ${hovered ? accent : '#E8EAED'}`,
          boxShadow: hovered
            ? `0 16px 48px rgba(60,64,67,0.14), 0 0 0 3px ${accent}20`
            : '0 1px 3px rgba(60,64,67,0.1)',
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        {tag && (
          <div
            className="absolute -top-3 left-5 px-3 py-1 rounded-full text-xs font-bold text-white shadow-el-1"
            style={{ background: `linear-gradient(135deg, ${accent}, ${accent}cc)` }}
          >
            {tag}
          </div>
        )}

        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300"
          style={{
            backgroundColor: `${accent}12`,
            color: accent,
            transform: hovered ? 'scale(1.12) rotate(-4deg)' : 'scale(1) rotate(0deg)',
          }}
        >
          {icons[iconKey]}
        </div>

        <h3 className="text-lg font-bold text-on-surface mb-2">{title}</h3>
        <p className="text-sm text-on-secondary leading-relaxed flex-1">{description}</p>

        <div className="mt-5 flex items-center gap-1.5">
          <div
            className="h-0.5 rounded-full transition-all duration-300"
            style={{ width: hovered ? '32px' : '16px', backgroundColor: accent }}
          />
          <span
            className="text-xs font-bold transition-all duration-300"
            style={{ color: accent, opacity: hovered ? 1 : 0 }}
          >
            Learn more
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  const heading = useScrollAnimation({ direction: 'up' })

  return (
    <section id="features" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={heading.ref} className={`text-center mb-16 ${heading.className}`}>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5 border"
            style={{ borderColor: 'rgba(39,174,96,0.25)', backgroundColor: 'rgba(39,174,96,0.06)', color: '#27AE60' }}
          >
            FEATURES
          </div>
          <h2
            className="font-extrabold text-on-surface mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', letterSpacing: '-0.025em' }}
          >
            Everything you need to{' '}
            <span className="text-gradient-green">eat smarter</span>
          </h2>
          <p className="text-lg text-on-secondary max-w-2xl mx-auto">
            From AI scanning to progress insights — NutriTracker AU has every tool a health-focused Australian needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
