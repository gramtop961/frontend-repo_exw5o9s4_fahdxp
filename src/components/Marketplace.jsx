import { useEffect, useState } from 'react'
import Filters from './Filters'
import ListingCard from './ListingCard'

const brandBlue = '#0063ff'

export default function Marketplace() {
  const [filters, setFilters] = useState({ game: 'All', search: '' })
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFeatured = async () => {
      setLoading(true)
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const url = new URL('/api/featured', base)
        const res = await fetch(url.toString())
        const data = await res.json()
        setItems(data.items || [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchFeatured()
  }, [])

  const filtered = items.filter((it) => {
    const gameOk = filters.game === 'All' || it.game === filters.game
    const q = (filters.search || '').toLowerCase()
    const nameOk = !q || it.skin_name?.toLowerCase().includes(q)
    return gameOk && nameOk
  })

  return (
    <section id="browse" className="relative py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-2xl font-bold">Trending Listings</h2>
          <a href="#sell" className="hidden sm:inline-block px-4 py-2 rounded-lg text-white font-semibold border border-white/10 bg-white/5 hover:bg-white/10" style={{ boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.08)` }}>
            Create Listing
          </a>
        </div>
        <Filters value={filters} onChange={setFilters} />

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {loading ? (
            Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-64 rounded-xl border border-white/10 bg-slate-900/40 animate-pulse" />
            ))
          ) : filtered.length === 0 ? (
            <div className="col-span-full text-center text-white/70 py-16">No listings found.</div>
          ) : (
            filtered.map((item) => <ListingCard key={item.id || item.skin_name} item={item} />)
          )}
        </div>
      </div>
    </section>
  )
}
