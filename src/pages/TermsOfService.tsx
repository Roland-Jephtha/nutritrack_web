import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const sections = [
  { id: 'acceptance',    title: 'Acceptance of Terms' },
  { id: 'service',       title: 'Description of Service' },
  { id: 'accounts',      title: 'User Accounts & Registration' },
  { id: 'subscription',  title: 'Subscription Plans & Billing' },
  { id: 'ai-disclaimer', title: 'AI & Food Recognition Disclaimer' },
  { id: 'ugc',           title: 'User-Generated Content' },
  { id: 'prohibited',    title: 'Prohibited Conduct' },
  { id: 'privacy',       title: 'Privacy & Data' },
  { id: 'ip',            title: 'Intellectual Property' },
  { id: 'third-party',   title: 'Third-Party Services' },
  { id: 'liability',     title: 'Limitation of Liability' },
  { id: 'health',        title: 'Health & Medical Disclaimer' },
  { id: 'termination',   title: 'Termination of Account' },
  { id: 'changes',       title: 'Changes to Terms' },
  { id: 'governing-law', title: 'Governing Law' },
  { id: 'contact',       title: 'Contact' },
]

function TOC({ activeId }: { activeId: string }) {
  return (
    <nav className="sticky top-24 w-64 flex-shrink-0 hidden lg:block">
      <div className="bg-white rounded-2xl p-5 border border-surface-3 shadow-el-1">
        <p className="text-xs font-extrabold tracking-widest uppercase text-on-secondary mb-4">Contents</p>
        <ul className="flex flex-col gap-0.5">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="block px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200"
                style={{
                  color: activeId === s.id ? '#27AE60' : '#5F6368',
                  backgroundColor: activeId === s.id ? 'rgba(39,174,96,0.08)' : 'transparent',
                }}
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

const H = ({ id, children }: { id: string; children: React.ReactNode }) => (
  <h2
    id={id}
    className="text-xl font-bold mt-10 mb-3 first:mt-0 scroll-mt-28 pb-2 border-b border-surface-3"
    style={{ color: '#202124' }}
  >
    {children}
  </h2>
)
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm leading-relaxed mb-4" style={{ color: '#5F6368' }}>{children}</p>
)
const Bold = ({ children }: { children: React.ReactNode }) => (
  <p className="text-sm font-bold mb-1.5" style={{ color: '#202124' }}>{children}</p>
)
const UL = ({ items }: { items: string[] }) => (
  <ul className="mb-4 space-y-1.5 pl-4">
    {items.map((item) => (
      <li key={item} className="text-sm leading-relaxed flex gap-2.5" style={{ color: '#5F6368' }}>
        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#27AE60' }} />
        {item}
      </li>
    ))}
  </ul>
)

export default function TermsOfService() {
  const [activeId, setActiveId] = useState('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    document.title = 'Terms of Service — NutriTracker AU'
    observerRef.current = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveId(e.target.id) }) },
      { rootMargin: '-20% 0px -70% 0px' }
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observerRef.current?.observe(el)
    })
    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="pt-16 border-b border-surface-3" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-on-secondary mb-5">
            <Link to="/" className="hover:text-brand-green transition-colors">Home</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            <span style={{ color: '#202124' }}>Terms of Service</span>
          </nav>

          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 border"
                style={{ borderColor: 'rgba(39,174,96,0.25)', backgroundColor: 'rgba(39,174,96,0.06)', color: '#27AE60' }}
              >
                Legal Document
              </div>
              <h1
                className="font-extrabold leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#202124', letterSpacing: '-0.025em' }}
              >
                Terms of Service
              </h1>
            </div>
            <div className="text-sm text-on-secondary space-y-1">
              <div><span className="font-semibold" style={{ color: '#202124' }}>Effective:</span> 4 June 2025</div>
              <div><span className="font-semibold" style={{ color: '#202124' }}>Jurisdiction:</span> New South Wales, Australia</div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex gap-12">
          <TOC activeId={activeId} />

          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-2xl border border-surface-3 shadow-el-2 p-8 sm:p-12 max-w-4xl">
              <P>Please read these Terms of Service carefully before using NutriTracker AU. By downloading, installing, or using our application, you agree to be bound by these Terms.</P>

              <H id="acceptance">1. Acceptance of Terms</H>
              <P>By accessing or using NutriTracker AU (the "Service"), you ("User") agree to these Terms of Service ("Terms") and our Privacy Policy, incorporated by reference. These Terms form a legally binding agreement between you and BwinTech Pty Ltd ("we," "us," or "our").</P>
              <P>If you do not agree to these Terms, you must not use the Service. We may update these Terms periodically — continued use after changes constitutes acceptance. Material changes will be communicated via email or in-app notification.</P>

              <H id="service">2. Description of Service</H>
              <P>NutriTracker AU is an AI-powered mobile nutrition tracking application designed for Australian users. The Service includes:</P>
              <UL items={[
                'AI-powered food identification via device camera (powered by Google Gemini)',
                'Barcode scanning for packaged food nutrition data',
                'Australian and international food database search',
                'Daily calorie and macronutrient tracking',
                'Personalised nutrition goals and progress tracking',
                'Meal history, streaks, and weekly summaries',
                'User food submissions to the community database',
              ]} />
              <P>The Service is intended for adults 18 and over. Users under 18 must have parental or guardian consent.</P>

              <H id="accounts">3. User Accounts & Registration</H>
              <P>To use most features, you must register an account with accurate information. You are responsible for:</P>
              <UL items={[
                'Maintaining the confidentiality of your login credentials',
                'All activity occurring under your account',
                'Notifying us immediately of any unauthorised access at support@bwintech.com.au',
                'Keeping your profile information accurate and current',
              ]} />
              <P>You may not create multiple accounts per person or share credentials. We reserve the right to suspend accounts that violate these requirements.</P>

              <H id="subscription">4. Subscription Plans & Billing</H>
              <Bold>Free Tier</Bold>
              <P>The free tier provides core nutrition tracking including food logging, basic macro tracking, and limited AI food scanning. Free users may encounter daily limits on AI scan features.</P>
              <Bold>Premium Tier</Bold>
              <P>Premium subscriptions are offered monthly or annually and include unlimited AI food scanning, full database access, advanced analytics, and priority support. Prices are displayed in Australian Dollars (AUD) inclusive of GST.</P>
              <Bold>Payment Processing</Bold>
              <P>All payments are processed securely through Paystack, a PCI-DSS compliant payment processor. By subscribing, you authorise us to charge your payment method on a recurring basis.</P>
              <Bold>Refund Policy</Bold>
              <P>You may cancel at any time through account settings. Premium access continues to the end of the billing period. Partial refunds are not provided unless required by Australian Consumer Law. Requests must be submitted within 14 days to support@bwintech.com.au.</P>

              <H id="ai-disclaimer">5. AI & Food Recognition Disclaimer</H>
              <P>NutriTracker AU uses artificial intelligence for food identification and nutrition estimation. You acknowledge that:</P>
              <UL items={[
                'AI food recognition is an assistive tool — results should be verified before logging',
                'Nutritional values are estimates and may not precisely match specific food items',
                'The Service is NOT a substitute for professional dietary or medical advice',
                'We make no warranty as to the accuracy or reliability of AI-generated results',
                'Always consult a qualified dietitian or doctor for personalised dietary advice',
              ]} />

              <H id="ugc">6. User-Generated Content & Food Submissions</H>
              <P>Users may submit food items, recipes, and nutritional data. By submitting content, you grant us a non-exclusive, royalty-free, worldwide licence to use and display that content within the Service. You represent that submissions are accurate. We reserve the right to remove inaccurate or inappropriate submissions.</P>

              <H id="prohibited">7. Prohibited Conduct</H>
              <P>You agree not to:</P>
              <UL items={[
                'Submit false, misleading, or fraudulent nutritional data',
                'Reverse engineer, copy, or extract the Service\'s source code or AI models',
                'Use automated scripts or bots to access the Service',
                'Scrape, harvest, or collect other users\' data',
                'Use the Service for commercial purposes without written authorisation',
                'Circumvent security measures or access controls',
              ]} />

              <H id="privacy">8. Privacy & Data</H>
              <P>Your privacy is governed by our <Link to="/privacy" className="font-semibold hover:underline" style={{ color: '#27AE60' }}>Privacy Policy</Link>, incorporated into these Terms by reference. We comply with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles. Health-related data is treated as sensitive information and handled with heightened care.</P>

              <H id="ip">9. Intellectual Property</H>
              <P>All intellectual property in the Service — including the NutriTracker AU brand, logo, application code, AI models, and content created by us — is owned by or licensed to BwinTech Pty Ltd. We grant you a limited, non-exclusive, non-transferable licence to use the Service for personal, non-commercial purposes only.</P>

              <H id="third-party">10. Third-Party Services</H>
              <P>NutriTracker AU integrates third-party services including:</P>
              <UL items={[
                'Google Gemini (AI food recognition) — subject to Google\'s terms of service',
                'Paystack (payment processing) — subject to Paystack\'s terms and privacy policy',
                'Analytics and crash reporting providers',
              ]} />
              <P>We are not responsible for the practices of third-party services. Your use of the Service constitutes agreement that we may share necessary data with these providers to operate the Service.</P>

              <H id="liability">11. Limitation of Liability</H>
              <P>To the maximum extent permitted by Australian Consumer Law, BwinTech Pty Ltd shall not be liable for any indirect, incidental, special, or consequential damages including loss arising from: inaccurate food recognition; reliance on nutritional estimates; health outcomes from dietary decisions; or service interruptions.</P>
              <P>Where liability cannot be excluded under Australian Consumer Law, our liability is limited to re-supplying the services or the cost of re-supply, at our discretion.</P>

              <H id="health">12. Health & Medical Disclaimer</H>
              <P>NutriTracker AU is a general wellness tool, not a medical device. Information provided — including calorie counts, macro targets, and progress summaries — is for general informational purposes only and does not constitute medical advice, diagnosis, or treatment.</P>
              <P>If you have a medical condition, eating disorder, food allergy, or clinical dietary requirements, consult a qualified healthcare professional before making dietary changes based on this Service.</P>

              <H id="termination">13. Termination of Account</H>
              <P>We may suspend or terminate your access if you breach these Terms, engage in fraudulent conduct, or use the Service in a way that could damage its operation. You may delete your account at any time via app settings or by emailing support@bwintech.com.au. Provisions covering IP, disclaimers, and liability survive termination.</P>

              <H id="changes">14. Changes to Terms</H>
              <P>We may modify these Terms at any time. Changes will be posted to this page with an updated effective date. For material changes, we will provide at least 14 days' notice via email or in-app notification. Continued use after the effective date constitutes acceptance.</P>

              <H id="governing-law">15. Governing Law</H>
              <P>These Terms are governed by the laws of New South Wales, Australia. You irrevocably submit to the exclusive jurisdiction of the courts of New South Wales for resolution of any dispute arising from these Terms or your use of the Service.</P>

              <H id="contact">16. Contact</H>
              <div className="rounded-2xl p-6 mt-3 border border-surface-3" style={{ backgroundColor: '#F8F9FA' }}>
                <p className="font-bold text-sm mb-3" style={{ color: '#202124' }}>BwinTech Pty Ltd — NutriTracker AU</p>
                <div className="flex flex-col gap-1.5">
                  <p className="text-sm" style={{ color: '#5F6368' }}>
                    Email:{' '}
                    <a href="mailto:support@bwintech.com.au" className="font-semibold hover:underline" style={{ color: '#27AE60' }}>
                      support@bwintech.com.au
                    </a>
                  </p>
                  <p className="text-sm" style={{ color: '#5F6368' }}>Response time: within 2 business days (AEST)</p>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-surface-3">
                <p className="text-xs text-on-secondary">Last updated: 4 June 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
