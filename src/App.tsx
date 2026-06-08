import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Home = lazy(() => import('./pages/Home'))
const TermsOfService = lazy(() => import('./pages/TermsOfService'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Contact = lazy(() => import('./pages/Contact'))

function Preloader() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
      style={{ animation: 'fadeIn 0.15s ease-out' }}
    >
      {/* Logo */}
      <img
        src="/assets/light_text_theme.png"
        alt="NutriTracker AU"
        className="mb-10 w-auto object-contain"
        style={{ height: '90px', animation: 'float 2s ease-in-out infinite' }}
      />

      {/* Animated progress bar */}
      <div className="w-48 h-1 rounded-full overflow-hidden" style={{ backgroundColor: '#E8EAED' }}>
        <div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, #27AE60, #2ECC71, #27AE60)',
            backgroundSize: '200% 100%',
            animation: 'shimmerLoad 1.2s ease-in-out infinite',
          }}
        />
      </div>

      {/* Dots */}
      <div className="flex items-center gap-1.5 mt-6">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            style={{
              backgroundColor: '#27AE60',
              animation: `dotPulse 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes shimmerLoad {
          0%   { background-position: -200% 0; }
          100% { background-position:  200% 0; }
        }
        @keyframes dotPulse {
          0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
          40%            { opacity: 1;   transform: scale(1.2); }
        }
      `}</style>
    </div>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/terms"   element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
