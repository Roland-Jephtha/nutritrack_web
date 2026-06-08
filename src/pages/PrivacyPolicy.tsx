import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const sections = [
  { id: 'intro',          title: 'Introduction & Who We Are' },
  { id: 'data-collected', title: 'What Data We Collect' },
  { id: 'how-we-use',     title: 'How We Use Your Data' },
  { id: 'ai-processing',  title: 'AI Processing' },
  { id: 'data-sharing',   title: 'Data Sharing & Third Parties' },
  { id: 'data-retention', title: 'Data Retention' },
  { id: 'security',       title: 'Security Measures' },
  { id: 'your-rights',    title: 'Your Rights (Privacy Act 1988)' },
  { id: 'cookies',        title: 'Cookies & Analytics' },
  { id: 'children',       title: "Children's Privacy" },
  { id: 'changes',        title: 'Changes to This Policy' },
  { id: 'contact',        title: 'Contact' },
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
  <h2 id={id} className="text-xl font-bold mt-10 mb-3 first:mt-0 scroll-mt-28 pb-2 border-b border-surface-3" style={{ color: '#202124' }}>
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

export default function PrivacyPolicy() {
  const [activeId, setActiveId] = useState('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    document.title = 'Privacy Policy — NutriTracker AU'
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
      <div className="pt-16 border-b border-surface-3 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="flex items-center gap-2 text-xs font-semibold text-on-secondary mb-5">
            <Link to="/" className="hover:text-brand-green transition-colors">Home</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            <span style={{ color: '#202124' }}>Privacy Policy</span>
          </nav>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 border"
                style={{ borderColor: 'rgba(26,115,232,0.25)', backgroundColor: 'rgba(26,115,232,0.06)', color: '#1A73E8' }}
              >
                Legal Document
              </div>
              <h1
                className="font-extrabold leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#202124', letterSpacing: '-0.025em' }}
              >
                Privacy Policy
              </h1>
            </div>
            <div className="text-sm text-on-secondary space-y-1">
              <div><span className="font-semibold" style={{ color: '#202124' }}>Effective:</span> 4 June 2025</div>
              <div><span className="font-semibold" style={{ color: '#202124' }}>Company:</span> BwinTech Pty Ltd</div>
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
              <H id="intro">1. Introduction & Who We Are</H>
              <P>NutriTracker AU is operated by BwinTech Pty Ltd (the "Company," "we," "us," or "our"). We are committed to protecting your personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs).</P>
              <P>This Privacy Policy explains what information we collect, how we use and disclose it, and your rights. Contact us at: <a href="mailto:privacy@bwintech.com.au" className="font-semibold hover:underline" style={{ color: '#27AE60' }}>privacy@bwintech.com.au</a></P>

              <H id="data-collected">2. What Data We Collect</H>
              <Bold>Account Information</Bold>
              <UL items={['Name and email address', 'Password (stored as salted hash — never in plain text)', 'Date of birth and gender (optional, used for calorie calculations)', 'Profile photo (optional)']} />
              <Bold>Health & Nutrition Data</Bold>
              <UL items={['Body weight, height, and body measurements (entered by you)', 'Daily food logs and meal history', 'Calorie and macro targets', 'Fitness goals and activity level']} />
              <Bold>Scan Data</Bold>
              <UL items={['Food photos captured via AI scanning (temporarily processed; see AI Processing section)', 'Barcodes scanned (product identifier only; not stored with your identity by default)']} />
              <Bold>Device & Usage Data</Bold>
              <UL items={['Device type, OS version, and app version', 'IP address and approximate location (country/state level)', 'Feature usage patterns and session duration (anonymised analytics)', 'Crash reports and error logs']} />

              <H id="how-we-use">3. How We Use Your Data</H>
              <UL items={[
                'To operate and deliver the Service, including personalised calorie and macro targets',
                'To process food scans and barcode lookups using AI and our food database',
                'To send account-related notifications and app updates',
                'To respond to support requests',
                'To improve the Service through anonymised usage analytics',
                'To comply with legal obligations',
                'To detect and prevent fraud or abuse',
              ]} />
              <P>We do not use your health data for advertising profiling, nor do we sell personal data to third parties.</P>

              <H id="ai-processing">4. AI Processing</H>
              <P>When you use AI food scanning, photos are temporarily transmitted to Google Gemini API for food identification. We take the following precautions:</P>
              <UL items={[
                'Images are transmitted over encrypted connections (TLS 1.3)',
                'We do not permanently store scan images after processing completes',
                "Google's data processing is governed by Google's Cloud Data Processing Terms",
                'Identified food data (not the image) is stored in your meal log',
                'You may opt out of AI scanning and use manual entry or barcode scanning instead',
              ]} />

              <H id="data-sharing">5. Data Sharing & Third Parties</H>
              <P>We share data with the following third parties only as necessary to operate the Service:</P>
              <UL items={[
                "Google Cloud (AI processing, database hosting) — processed under Google Cloud's data processing terms",
                'Paystack (payment processing) — payment data handled by Paystack; we do not store card numbers',
                'Analytics providers (anonymised crash reports and usage data)',
                'Law enforcement or regulators — where required by Australian law or valid legal process',
              ]} />
              <P><strong>We do not sell your personal data.</strong> We do not share your health or nutrition data with insurers, employers, or marketers.</P>

              <H id="data-retention">6. Data Retention</H>
              <P>We retain your personal data for as long as your account is active or as required to provide the Service. Upon account deletion:</P>
              <UL items={[
                'Personal profile data is deleted within 30 days',
                'Anonymised usage analytics may be retained indefinitely',
                'Financial transaction records are retained for 7 years as required by Australian tax law',
                'Food submissions to the public database (if approved) may be retained in anonymised form',
              ]} />

              <H id="security">7. Security Measures</H>
              <P>We implement industry-standard security measures including:</P>
              <UL items={[
                'TLS 1.3 encryption for all data in transit',
                'AES-256 encryption for sensitive data at rest',
                'Bcrypt password hashing with unique salts',
                'Regular security audits and penetration testing',
                'Access controls — staff access to user data is role-based and logged',
                'Australian-region data storage where available',
              ]} />

              <H id="your-rights">8. Your Rights under the Australian Privacy Act 1988</H>
              <P>Under the Australian Privacy Act 1988 and the Australian Privacy Principles, you have the right to:</P>
              <UL items={[
                'Access the personal information we hold about you',
                'Request correction of inaccurate, incomplete, or outdated information',
                'Request deletion of your account and associated data',
                'Make a privacy complaint — first to us, then to the Office of the Australian Information Commissioner (OAIC) at www.oaic.gov.au',
                'Opt out of direct marketing communications',
              ]} />
              <P>To exercise these rights, contact us at privacy@bwintech.com.au. We will respond within 30 days.</P>

              <H id="cookies">9. Cookies & Analytics</H>
              <P>The NutriTracker AU mobile app does not use browser cookies. If you access our website, we may use:</P>
              <UL items={[
                'Essential cookies — required for navigation and session management',
                'Analytics cookies — anonymised data to understand page usage (can be declined)',
              ]} />
              <P>You can control cookie preferences through your browser settings.</P>

              <H id="children">10. Children's Privacy</H>
              <P>NutriTracker AU is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we discover a user is under 13, we will promptly delete their account and data. Contact privacy@bwintech.com.au immediately if you believe a child has provided us with personal information.</P>

              <H id="changes">11. Changes to This Policy</H>
              <P>We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will post the updated policy with a revised effective date. For material changes, we will notify registered users via email at least 14 days before the change takes effect.</P>

              <H id="contact">12. Contact</H>
              <div className="rounded-2xl p-6 mt-3 border border-surface-3" style={{ backgroundColor: '#F8F9FA' }}>
                <p className="font-bold text-sm mb-3" style={{ color: '#202124' }}>Privacy Officer — BwinTech Pty Ltd</p>
                <div className="flex flex-col gap-1.5">
                  <p className="text-sm" style={{ color: '#5F6368' }}>Privacy: <a href="mailto:privacy@bwintech.com.au" className="font-semibold hover:underline" style={{ color: '#27AE60' }}>privacy@bwintech.com.au</a></p>
                  <p className="text-sm" style={{ color: '#5F6368' }}>Support: <a href="mailto:support@bwintech.com.au" className="font-semibold hover:underline" style={{ color: '#27AE60' }}>support@bwintech.com.au</a></p>
                  <p className="text-sm" style={{ color: '#5F6368' }}>OAIC: <a href="https://www.oaic.gov.au" target="_blank" rel="noreferrer" className="font-semibold hover:underline" style={{ color: '#27AE60' }}>www.oaic.gov.au</a></p>
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
