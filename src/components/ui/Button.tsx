import React from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  children: React.ReactNode
  as?: 'button' | 'a'
  href?: string
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-green text-white hover:bg-brand-greenBright shadow-green-sm hover:shadow-green-glow',
  secondary:
    'bg-dark-800 text-white border border-dark-700 hover:border-brand-green hover:text-brand-greenBright',
  outline:
    'bg-transparent text-white border border-white/20 hover:border-white/60 hover:bg-white/5',
  ghost:
    'bg-transparent text-text-muted hover:text-white hover:bg-white/5',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded-xl',
  md: 'px-6 py-3 text-base rounded-2xl',
  lg: 'px-8 py-4 text-lg rounded-full',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  as: Tag = 'button',
  href,
  ...props
}: ButtonProps) {
  const classes = `
    inline-flex items-center justify-center gap-2 font-bold
    transition-all duration-200 cursor-pointer select-none
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `.trim()

  if (Tag === 'a') {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
