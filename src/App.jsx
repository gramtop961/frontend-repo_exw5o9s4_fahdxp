import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marketplace from './components/Marketplace'
import CTA from './components/CTA'

const brandBlue = '#0063ff'

function App() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_10%,rgba(0,99,255,0.15),transparent_60%),radial-gradient(600px_circle_at_80%_20%,rgba(0,99,255,0.12),transparent_60%),radial-gradient(700px_circle_at_50%_80%,rgba(0,99,255,0.08),transparent_60%)]" />

      <Navbar onSearchClick={() => setSearchOpen(true)} />
      <Hero />
      <Marketplace />
      <CTA />

      <footer className="border-t border-white/10 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/60 text-sm">© {new Date().getFullYear()} BlueSkins. Not affiliated with Valve/Steam.</div>
          <div className="flex items-center gap-3 text-xs">
            <a href="#" className="text-white/70 hover:text-white">Terms</a>
            <span className="text-white/20">•</span>
            <a href="#" className="text-white/70 hover:text-white">Privacy</a>
            <span className="text-white/20">•</span>
            <a href="/test" className="text-white/70 hover:text-white">System</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
