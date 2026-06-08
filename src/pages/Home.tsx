import { useEffect } from 'react'
import Hero from '../sections/Hero'
import Features from '../sections/Features'
import HowItWorks from '../sections/HowItWorks'
import MacroShowcase from '../sections/MacroShowcase'
import TrustSection from '../sections/TrustSection'
import UseCases from '../sections/UseCases'
import FAQ from '../sections/FAQ'
import CTA from '../sections/CTA'

export default function Home() {
  useEffect(() => {
    document.title = "NutriTracker AU — SCAN. TRACK. TRUST."
  }, [])

  return (
    <main>
      <Hero />
      <Features />
      <HowItWorks />
      <MacroShowcase />
      <TrustSection />
      <UseCases />
      <FAQ />
      <CTA />
    </main>
  )
}
