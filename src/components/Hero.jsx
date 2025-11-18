import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const brandBlue = '#0063ff'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/JIgK0GSrdC6xbkgp/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950/90 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/80 text-xs mb-4">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: brandBlue }} />
            Live P2P Trading · Zero middleman
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white">
            Trade Steam Skins with Confidence
          </h1>
          <p className="text-base sm:text-lg text-white/80 mt-4">
            CS2, Dota2, Rust and TF2. Discover rare items, list instantly and cash out faster with low fees.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#browse" className="px-5 py-3 rounded-lg text-white font-semibold shadow-lg" style={{ background: brandBlue }}>
              Start Browsing
            </a>
            <a href="#sell" className="px-5 py-3 rounded-lg font-semibold bg-white/10 hover:bg-white/15 border border-white/10 text-white">
              List an Item
            </a>
          </div>
          <div className="mt-6 text-xs text-white/60">
            Inspired by marketplaces like OPN, CSFloat & Skinport • Unique 3D vibe
          </div>
        </motion.div>
      </div>
    </section>
  )
}
