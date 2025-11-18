import { useState } from 'react'
import { Menu, Search, ShoppingCart, User } from 'lucide-react'

const brandBlue = '#0063ff'

export default function Navbar({ onSearchClick }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="lg:hidden p-2 rounded-md hover:bg-white/5" onClick={() => setOpen(!open)}>
            <Menu className="w-5 h-5 text-white" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md" style={{ background: brandBlue }} />
            <span className="text-white font-bold text-lg tracking-tight">BlueSkins</span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-sm">
          <a href="#browse" className="text-white/80 hover:text-white transition">Browse</a>
          <a href="#cs2" className="text-white/80 hover:text-white transition">CS2</a>
          <a href="#dota2" className="text-white/80 hover:text-white transition">Dota2</a>
          <a href="#rust" className="text-white/80 hover:text-white transition">Rust</a>
          <a href="#tf2" className="text-white/80 hover:text-white transition">TF2</a>
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={onSearchClick} className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 hover:bg-white/10 border border-white/10 text-white/90 transition">
            <Search className="w-4 h-4" />
            <span className="text-sm">Search</span>
          </button>
          <button className="p-2 rounded-md hover:bg-white/5">
            <ShoppingCart className="w-5 h-5 text-white" />
          </button>
          <button className="p-2 rounded-md hover:bg-white/5">
            <User className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 px-4 py-3 space-y-2 bg-slate-900/90">
          <a href="#browse" className="block text-white/90">Browse</a>
          <a href="#cs2" className="block text-white/90">CS2</a>
          <a href="#dota2" className="block text-white/90">Dota2</a>
          <a href="#rust" className="block text-white/90">Rust</a>
          <a href="#tf2" className="block text-white/90">TF2</a>
        </div>
      )}
    </header>
  )
}
