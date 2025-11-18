const brandBlue = '#0063ff'

export default function CTA() {
  return (
    <section id="sell" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/80 to-slate-900/60 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-white text-2xl font-bold">List your skin in seconds</h3>
            <p className="text-white/70 mt-2 max-w-xl">Connect your Steam, paste the item inspect link and set your price. We'll handle escrow and delivery instantly.</p>
          </div>
          <a href="#" className="px-5 py-3 rounded-lg text-white font-semibold shadow-lg" style={{ background: brandBlue }}>
            Connect Steam
          </a>
        </div>
      </div>
    </section>
  )
}
