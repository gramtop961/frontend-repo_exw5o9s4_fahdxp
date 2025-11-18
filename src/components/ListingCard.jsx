import { Star } from 'lucide-react'

const brandBlue = '#0063ff'

export default function ListingCard({ item }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-slate-900/60 hover:bg-slate-900/70 transition overflow-hidden">
      <div className="aspect-[4/3] w-full overflow-hidden bg-black/40">
        {item.image_url ? (
          <img src={item.image_url} alt={item.skin_name} className="w-full h-full object-cover group-hover:scale-105 transition" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white/30 text-sm">No image</div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-white font-semibold leading-tight">{item.skin_name}</h3>
            <p className="text-xs text-white/60 mt-1">{item.game} · {item.rarity || '—'}</p>
          </div>
          {typeof item.float_value === 'number' && (
            <span className="text-xs px-2 py-1 rounded-md border border-white/10 text-white/80">Float {item.float_value.toFixed(3)}</span>
          )}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-white text-lg font-bold">${item.price_usd?.toFixed ? item.price_usd.toFixed(2) : item.price_usd}</div>
          <button className="px-3 py-2 rounded-md text-sm font-semibold text-white" style={{ background: brandBlue }}>
            Buy now
          </button>
        </div>
        <div className="mt-3 flex items-center gap-2 text-xs text-white/60">
          <Star className="w-3.5 h-3.5 text-yellow-400" />
          <span>{item.seller_username || 'Seller'}</span>
        </div>
      </div>
    </div>
  )
}
