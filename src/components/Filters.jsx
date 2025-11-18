import { useState } from 'react'

const brandBlue = '#0063ff'

export default function Filters({ value, onChange }) {
  const [local, setLocal] = useState(value || { game: 'All', search: '' })

  const setField = (k, v) => {
    const next = { ...local, [k]: v }
    setLocal(next)
    onChange && onChange(next)
  }

  return (
    <div className="w-full bg-slate-900/60 border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row gap-3">
      <div className="flex-1">
        <input
          value={local.search}
          onChange={(e) => setField('search', e.target.value)}
          placeholder="Search skins (e.g., AK-47, Dragon Lore, Arcana)"
          className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 outline-none focus:ring-2"
          style={{ boxShadow: `0 0 0 2px transparent`, accentColor: brandBlue }}
        />
      </div>
      <div className="flex items-center gap-2">
        {['All', 'CS2', 'Dota2', 'Rust', 'TF2'].map(g => (
          <button
            key={g}
            onClick={() => setField('game', g)}
            className={`px-3 py-2 rounded-lg text-sm border transition ${local.game === g ? 'text-white' : 'text-white/70'} ${local.game === g ? '' : 'hover:bg-white/5'} border-white/10`}
            style={local.game === g ? { background: brandBlue } : {}}
          >
            {g}
          </button>
        ))}
      </div>
    </div>
  )
}
