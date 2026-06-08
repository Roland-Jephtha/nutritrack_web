import { Link } from 'react-router-dom'

const InstagramIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)
const FacebookIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)
const XIcon = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const columns = {
  Product: [
    { label: 'Features', href: '/#features' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'FAQ', href: '/#faq' },
  ],
  Legal: [
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
  ],
  Company: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'support@bwintech.com.au', href: 'mailto:support@bwintech.com.au' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-surface-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 pb-12 border-b border-surface-3">
          {/* Brand col */}
          <div className="md:col-span-2">
            <img
              src="/assets/light_text_theme.png"
              alt="NutriTracker AU"
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-sm text-on-secondary leading-relaxed mb-6 max-w-xs">
              Australia's AI-powered nutrition tracker. Scan any food, log your meals, and hit your health goals.
            </p>

            {/* Social */}
            <div className="flex gap-2.5">
              {[
                { Icon: InstagramIcon, label: 'Instagram' },
                { Icon: FacebookIcon, label: 'Facebook' },
                { Icon: XIcon, label: 'X/Twitter' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center bg-white border border-surface-3 text-on-secondary shadow-el-1 transition-all duration-200 hover:text-brand-green hover:border-brand-green/40 hover:shadow-el-2 hover:-translate-y-0.5"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(columns).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-extrabold tracking-widest uppercase text-on-secondary mb-5">{heading}</h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => {
                  const isInternal = link.href.startsWith('/') && !link.href.startsWith('/#') && !link.href.startsWith('//')
                  const isEmail = link.href.startsWith('mailto:')
                  const content = (
                    <span className="text-sm font-semibold text-on-secondary transition-colors duration-200 hover:text-brand-green truncate block">
                      {link.label}
                    </span>
                  )
                  return (
                    <li key={link.href}>
                      {isInternal ? (
                        <Link to={link.href}>{content}</Link>
                      ) : (
                        <a href={link.href} target={isEmail ? undefined : '_self'}>{content}</a>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-on-muted">
            © 2025 NutriTracker AU. All rights reserved. Built by{' '}
            <span className="text-brand-green font-bold">BwinTech</span>.
          </p>
          <p className="text-xs text-on-muted">
            Not medical advice. For informational purposes only.
          </p>
        </div>
      </div>
    </footer>
  )
}
