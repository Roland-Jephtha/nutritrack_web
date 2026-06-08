import { useState, useRef, useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const faqs = [
  {
    q: 'Is NutriTracker AU free?',
    a: 'Yes, the core features are completely free. A premium plan unlocks unlimited AI scans, advanced analytics, and priority database updates. Premium pricing is shown in the app at signup.',
    category: 'Pricing',
  },
  {
    q: 'How accurate is the AI food scanning?',
    a: 'Our AI uses Google Gemini 2.0 Flash and achieves >99% accuracy on common foods. For less common items we recommend reviewing the result. AI scanning is not a substitute for clinical dietary advice — always consult a qualified dietitian for medical dietary needs.',
    category: 'AI',
  },
  {
    q: 'Does it work with Australian foods?',
    a: 'Yes — our verified Australian database includes Woolworths, Coles, Aldi, IGA, major restaurant chains, and homemade dish estimates. The database is continuously updated by our team.',
    category: 'Database',
  },
  {
    q: 'Can I scan barcodes?',
    a: 'Absolutely. Barcode scanning works with most Australian packaged foods and pulls verified nutrition data in under a second. If a product isn\'t in our database, you can submit it for review.',
    category: 'Features',
  },
  {
    q: 'Is my health data private?',
    a: 'Yes. We comply with the Australian Privacy Act 1988 and the Australian Privacy Principles. We never sell your personal or health data. Scan images are processed in real-time and not stored. Full details in our Privacy Policy.',
    category: 'Privacy',
  },
  {
    q: 'What devices does it support?',
    a: 'NutriTracker AU is available on iOS (iPhone, iPad) and Android via Expo. A progressive web app is in active development.',
    category: 'Platform',
  },
  {
    q: 'How do I cancel my premium subscription?',
    a: 'Cancel any time from your profile settings in the app — one tap. Your premium access continues until the end of your billing period. No cancellation fees.',
    category: 'Billing',
  },
  {
    q: 'Who do I contact for support?',
    a: 'Email support@bwintech.com.au — we respond within 24 business hours (AEST). Include "URGENT" in the subject for time-sensitive issues.',
    category: 'Support',
  },
]

const categoryColors: Record<string, string> = {
  Pricing: '#27AE60',
  AI: '#1A73E8',
  Database: '#7B61FF',
  Features: '#E8710A',
  Privacy: '#D93025',
  Platform: '#188038',
  Billing: '#F9AB00',
  Support: '#27AE60',
}

function FAQItem({ q, a, category, isOpen, onToggle }: {
  q: string; a: string; category: string; isOpen: boolean; onToggle: () => void
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  const catColor = categoryColors[category] ?? '#27AE60'

  return (
    <div
      className="bg-white rounded-2xl border overflow-hidden transition-all duration-300"
      style={{
        borderColor: isOpen ? catColor + '40' : '#E8EAED',
        boxShadow: isOpen ? `0 8px 32px rgba(60,64,67,0.1), 0 0 0 1px ${catColor}20` : '0 1px 3px rgba(60,64,67,0.06)',
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-6 text-left hover:bg-surface-1 transition-colors duration-150 group"
      >
        {/* Category pill */}
        <span
          className="flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-bold hidden sm:block"
          style={{ backgroundColor: catColor + '10', color: catColor }}
        >
          {category}
        </span>

        <span className="flex-1 text-base font-bold text-on-surface pr-2 group-hover:text-brand-green transition-colors duration-200">
          {q}
        </span>

        {/* Chevron */}
        <div
          className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            backgroundColor: isOpen ? catColor : '#F1F3F4',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke={isOpen ? 'white' : '#5F6368'} strokeWidth="2.5" strokeLinecap="round"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Animated answer */}
      <div
        style={{ height: `${height}px`, overflow: 'hidden', transition: 'height 0.35s cubic-bezier(0.16,1,0.3,1)' }}
      >
        <div ref={contentRef}>
          <div className="px-6 pb-6">
            <div className="h-px bg-surface-2 mb-5" />
            <p className="text-sm text-on-secondary leading-relaxed">{a}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const heading = useScrollAnimation({ direction: 'up' })

  return (
    <section id="faq" className="py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={heading.ref} className={`text-center mb-14 ${heading.className}`}>
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5 border"
            style={{ borderColor: 'rgba(39,174,96,0.25)', backgroundColor: 'rgba(39,174,96,0.06)', color: '#27AE60' }}
          >
            FAQ
          </div>
          <h2
            className="font-extrabold text-on-surface mb-4"
            style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)', letterSpacing: '-0.025em' }}
          >
            Frequently asked{' '}
            <span className="text-gradient-green">questions</span>
          </h2>
          <p className="text-lg text-on-secondary">
            Can't find what you need?{' '}
            <a href="mailto:support@bwintech.com.au" className="text-brand-green font-bold hover:underline">
              Email us
            </a>
            {' '}— we reply within 24 hours.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const { ref, className } = useScrollAnimation({ direction: 'up' })
            return (
              <div ref={ref} key={faq.q} className={className} style={{ transitionDelay: `${i * 40}ms` }}>
                <FAQItem
                  {...faq}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
