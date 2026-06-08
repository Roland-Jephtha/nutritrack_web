import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const subjects = ['General Inquiry', 'Bug Report', 'Premium Support', 'Privacy Request', 'Other']

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const ClockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
)

const BuildingIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
)

const LockIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
)

const CheckCircleIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#27AE60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
)

const infoCards = [
  {
    Icon: MailIcon,
    label: 'Email Support',
    value: 'support@bwintech.com.au',
    href: 'mailto:support@bwintech.com.au',
    sub: 'For general questions and support',
    accent: '#27AE60',
  },
  {
    Icon: ClockIcon,
    label: 'Response Time',
    value: 'Within 24 hours',
    href: null,
    sub: 'Business hours AEST (Mon–Fri)',
    accent: '#1A73E8',
  },
  {
    Icon: BuildingIcon,
    label: 'Company',
    value: 'BwinTech Pty Ltd',
    href: null,
    sub: 'Developer of NutriTracker AU',
    accent: '#E8710A',
  },
  {
    Icon: LockIcon,
    label: 'Privacy Requests',
    value: 'privacy@bwintech.com.au',
    href: 'mailto:privacy@bwintech.com.au',
    sub: 'Data access, correction & deletion',
    accent: '#D93025',
  },
]

const inputClass = "w-full px-4 py-3 rounded-xl text-sm font-semibold text-on-surface outline-none transition-all duration-200 border bg-white placeholder-on-muted"
const inputStyle = { borderColor: '#E8EAED', color: '#202124' }
const focusStyle = { borderColor: '#27AE60', boxShadow: '0 0 0 3px rgba(39,174,96,0.12)' }
const blurStyle  = { borderColor: '#E8EAED', boxShadow: 'none' }

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: subjects[0], message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => { document.title = 'Contact — NutriTracker AU' }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError('')
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in all required fields.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.')
      return
    }
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Page header */}
      <div className="pt-16 border-b border-surface-3 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="flex items-center gap-2 text-xs font-semibold text-on-secondary mb-5">
            <Link to="/" className="hover:text-brand-green transition-colors">Home</Link>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            <span style={{ color: '#202124' }}>Contact</span>
          </nav>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 border"
            style={{ borderColor: 'rgba(39,174,96,0.25)', backgroundColor: 'rgba(39,174,96,0.06)', color: '#27AE60' }}
          >
            Get in Touch
          </div>
          <h1
            className="font-extrabold leading-tight mb-3"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: '#202124', letterSpacing: '-0.025em' }}
          >
            We'd love to hear <span className="text-gradient-green">from you.</span>
          </h1>
          <p className="text-lg text-on-secondary">We respond within 24 business hours (AEST).</p>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left: info cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {infoCards.map((card) => (
              <div
                key={card.label}
                className="bg-white rounded-2xl p-6 border border-surface-3 shadow-el-1 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-el-2"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${card.accent}12`, color: card.accent }}
                >
                  <card.Icon />
                </div>
                <div className="text-xs font-extrabold tracking-widest uppercase text-on-secondary mb-1">
                  {card.label}
                </div>
                {card.href ? (
                  <a href={card.href} className="text-base font-bold block mb-1 hover:underline" style={{ color: card.accent }}>
                    {card.value}
                  </a>
                ) : (
                  <div className="text-base font-bold mb-1" style={{ color: '#202124' }}>{card.value}</div>
                )}
                <div className="text-sm text-on-secondary">{card.sub}</div>
              </div>
            ))}
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-surface-3 shadow-el-2 p-8 sm:p-10">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: 'rgba(39,174,96,0.08)', border: '2px solid rgba(39,174,96,0.25)' }}
                  >
                    <CheckCircleIcon />
                  </div>
                  <h3 className="text-2xl font-extrabold mb-3" style={{ color: '#202124' }}>Message Sent!</h3>
                  <p className="text-on-secondary text-base mb-8">
                    Thanks, {form.name.split(' ')[0]}! We'll get back to you at{' '}
                    <span className="font-bold" style={{ color: '#27AE60' }}>{form.email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: subjects[0], message: '' }) }}
                    className="px-8 py-3 rounded-full text-sm font-bold text-white transition-all duration-200 hover:shadow-green-xl hover:-translate-y-0.5"
                    style={{ background: 'linear-gradient(135deg, #27AE60, #2ECC71)' }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-extrabold mb-1.5" style={{ color: '#202124' }}>Send us a message</h2>
                  <p className="text-sm text-on-secondary mb-8">Fill in the form and we'll respond as soon as possible.</p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-extrabold uppercase tracking-widest text-on-secondary mb-2">Name *</label>
                        <input
                          name="name" value={form.name} onChange={handleChange}
                          placeholder="Your full name"
                          className={inputClass}
                          style={inputStyle}
                          onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                          onBlur={(e)  => Object.assign(e.target.style, blurStyle)}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-extrabold uppercase tracking-widest text-on-secondary mb-2">Email *</label>
                        <input
                          name="email" type="email" value={form.email} onChange={handleChange}
                          placeholder="you@example.com"
                          className={inputClass}
                          style={inputStyle}
                          onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                          onBlur={(e)  => Object.assign(e.target.style, blurStyle)}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-widest text-on-secondary mb-2">Subject</label>
                      <select
                        name="subject" value={form.subject} onChange={handleChange}
                        className={inputClass + ' cursor-pointer'}
                        style={inputStyle}
                        onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                        onBlur={(e)  => Object.assign(e.target.style, blurStyle)}
                      >
                        {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-widest text-on-secondary mb-2">Message *</label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange}
                        rows={6} placeholder="Tell us how we can help..."
                        className={inputClass + ' resize-none'}
                        style={inputStyle}
                        onFocus={(e) => Object.assign(e.target.style, focusStyle)}
                        onBlur={(e)  => Object.assign(e.target.style, blurStyle)}
                      />
                    </div>

                    {error && (
                      <div
                        className="px-4 py-3 rounded-xl text-sm font-semibold flex items-center gap-2"
                        style={{ backgroundColor: 'rgba(217,48,37,0.06)', border: '1px solid rgba(217,48,37,0.25)', color: '#D93025' }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="ripple-container py-4 rounded-full text-base font-bold text-white transition-all duration-300 hover:shadow-green-xl hover:-translate-y-0.5"
                      style={{ background: 'linear-gradient(135deg, #27AE60, #2ECC71)' }}
                    >
                      Send Message →
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
