import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'green' | 'dark' | 'outline'
  className?: string
}

export default function Badge({ children, variant = 'green', className = '' }: BadgeProps) {
  const variantClasses = {
    green: 'bg-brand-greenDim border border-brand-green/40 text-brand-greenBright',
    dark: 'bg-dark-800 border border-dark-700 text-text-muted',
    outline: 'bg-transparent border border-white/20 text-text-muted',
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
