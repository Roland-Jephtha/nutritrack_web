import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Terms', href: '/terms' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0)',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(60,64,67,0.15), 0 4px 16px rgba(60,64,67,0.1)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 group">
              <img
                src="/assets/light_text_theme.png"
                alt="NutriTracker AU"
                className="h-16 w-auto object-contain transition-all duration-300 group-hover:opacity-80"
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isExternal = link.href.startsWith('/#')
                return isExternal ? (
                  <a
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-semibold text-on-secondary rounded-xl group transition-colors duration-200 hover:text-on-surface hover:bg-surface-1"
                  >
                    {link.label}
                  </a>
                ) : (
                  <NavLink
                    key={link.href}
                    to={link.href}
                    className={({ isActive }) =>
                      `px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                        isActive
                          ? 'text-brand-green bg-brand-greenDim'
                          : 'text-on-secondary hover:text-on-surface hover:bg-surface-1'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              })}
            </div>

            {/* Right: CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                to="/"
                className="ripple-container inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:shadow-green-xl hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #27AE60, #2ECC71)' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download App
              </Link>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-xl text-on-secondary hover:text-on-surface hover:bg-surface-1 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-1.5">
                <span
                  className="block h-0.5 bg-current rounded transition-all duration-300 origin-left"
                  style={{ transform: menuOpen ? 'rotate(45deg) translateY(-1px)' : '' }}
                />
                <span
                  className="block h-0.5 bg-current rounded transition-all duration-300"
                  style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? 'translateX(8px)' : '' }}
                />
                <span
                  className="block h-0.5 bg-current rounded transition-all duration-300 origin-left"
                  style={{ transform: menuOpen ? 'rotate(-45deg) translateY(1px)' : '' }}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="fixed inset-0 z-40 md:hidden"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 0.25s ease',
        }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(32,33,36,0.4)', backdropFilter: 'blur(4px)' }}
          onClick={() => setMenuOpen(false)}
        />
        {/* Sheet */}
        <div
          className="absolute top-0 left-0 right-0 bg-white rounded-b-4xl shadow-el-5 pt-4 pb-8 px-5"
          style={{ transform: menuOpen ? 'translateY(0)' : 'translateY(-100%)', transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)' }}
        >
          {/* Logo row */}
          <div className="flex items-center justify-between mb-6 h-12">
            <img src="/assets/light_text_theme.png" alt="NutriTracker AU" className="h-12 w-auto object-contain" />
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-xl hover:bg-surface-1 text-on-secondary"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col gap-1 mb-6">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-base font-semibold text-on-surface hover:bg-surface-1 transition-colors"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="px-4">
            <button
              className="w-full py-4 rounded-full text-base font-bold text-white shadow-green-xl transition-all duration-200 hover:scale-[1.02] ripple-container"
              style={{ background: 'linear-gradient(135deg, #27AE60, #2ECC71)' }}
              onClick={() => setMenuOpen(false)}
            >
              Download Free App
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
