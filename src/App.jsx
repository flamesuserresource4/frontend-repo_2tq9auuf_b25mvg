import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Process from './components/Process'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(59,130,246,0.25),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_90%_10%,rgba(99,102,241,0.18),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_10%_20%,rgba(34,211,238,0.18),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.6),rgba(15,23,42,1))]" />
      </div>

      <Navbar />

      <main>
        <Hero />
        <Features />
        <Testimonials />
        <Process />
        <Pricing />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
