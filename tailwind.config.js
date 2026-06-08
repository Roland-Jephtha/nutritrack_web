/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#27AE60',
          greenBright: '#2ECC71',
          greenDim: 'rgba(39,174,96,0.12)',
          greenMid: '#1E8449',
        },
        // Google Material surfaces
        surface: {
          0: '#FFFFFF',
          1: '#F8F9FA',
          2: '#F1F3F4',
          3: '#E8EAED',
          4: '#DADCE0',
        },
        // Google text palette
        on: {
          surface: '#202124',
          secondary: '#5F6368',
          muted: '#80868B',
          inverse: '#FFFFFF',
        },
        macro: {
          protein: '#1A73E8',
          carbs: '#E8710A',
          fat: '#D93025',
          proteinBg: 'rgba(26,115,232,0.1)',
          carbsBg: 'rgba(232,113,10,0.1)',
          fatBg: 'rgba(217,48,37,0.1)',
        },
        google: {
          blue: '#1A73E8',
          red: '#D93025',
          yellow: '#F9AB00',
          green: '#188038',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'section-title': ['clamp(1.75rem, 3vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
      },
      borderRadius: {
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        // Google Material elevation
        'el-1': '0 1px 2px rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)',
        'el-2': '0 1px 2px rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15)',
        'el-3': '0 1px 3px rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)',
        'el-4': '0 2px 3px rgba(60,64,67,0.3), 0 6px 10px 4px rgba(60,64,67,0.15)',
        'el-5': '0 4px 4px rgba(60,64,67,0.3), 0 8px 12px 6px rgba(60,64,67,0.15)',
        'green-glow': '0 0 0 4px rgba(39,174,96,0.2)',
        'green-xl': '0 8px 32px rgba(39,174,96,0.35)',
        'card-hover': '0 8px 30px rgba(60,64,67,0.15)',
      },
      backgroundImage: {
        'green-gradient': 'linear-gradient(135deg, #27AE60 0%, #2ECC71 100%)',
        'green-gradient-r': 'linear-gradient(135deg, #2ECC71 0%, #27AE60 100%)',
        'hero-mesh': 'radial-gradient(circle at 20% 50%, rgba(39,174,96,0.06) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(46,204,113,0.05) 0%, transparent 50%)',
        'cta-gradient': 'linear-gradient(135deg, #1E8449 0%, #27AE60 50%, #2ECC71 100%)',
      },
      animation: {
        'slide-up': 'slideUp 0.65s cubic-bezier(0.16,1,0.3,1) forwards',
        'slide-up-slow': 'slideUp 0.85s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 5s ease-in-out 1s infinite',
        'pulse-green': 'pulseGreen 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-subtle': 'bounceSub 2s ease-in-out infinite',
        'count-up': 'countUp 1s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'slide-in-right': 'slideInRight 0.65s cubic-bezier(0.16,1,0.3,1) forwards',
        'slide-in-left': 'slideInLeft 0.65s cubic-bezier(0.16,1,0.3,1) forwards',
      },
      keyframes: {
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.88)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseGreen: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(39,174,96,0.4)' },
          '50%': { boxShadow: '0 0 0 16px rgba(39,174,96,0)' },
        },
        bounceSub: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
