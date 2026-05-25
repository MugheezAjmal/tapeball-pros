import Image from 'next/image'

const players = [
  { name: 'Arjun Sharma', role: 'All-rounder', from: 'Jaipur, India', matches: 24, topScore: 87, wickets: 18, imageId: '1681010' },
  { name: 'Devon Richards', role: 'Batsman', from: 'Kingston, Jamaica', matches: 20, topScore: 112, wickets: 0, imageId: '2379004' },
  { name: 'Ravi Patel', role: 'Bowler', from: 'Gujarat, India', matches: 22, topScore: 34, wickets: 31, imageId: '614810' },
  { name: 'Marcus Baptiste', role: 'Wicketkeeper', from: 'Bridgetown, Barbados', matches: 18, topScore: 61, wickets: 4, imageId: '1239291' },
  { name: 'Tariq Hussain', role: 'Bowler', from: 'Lahore, Pakistan', matches: 21, topScore: 28, wickets: 27, imageId: '1181686' },
  { name: 'Priya Nair', role: 'Batsman', from: 'Kerala, India', matches: 15, topScore: 74, wickets: 0, imageId: '733872' },
  { name: 'Jean-Paul Tremblay', role: 'All-rounder', from: 'Moncton, NB', matches: 19, topScore: 55, wickets: 12, imageId: '2182970' },
  { name: 'Ahmed Al-Rashid', role: 'Bowler', from: 'Dhaka, Bangladesh', matches: 23, topScore: 21, wickets: 35, imageId: '220453' },
]

const roster = [
  { num: 1, name: 'Arjun Sharma', role: 'All-rounder', from: 'India' },
  { num: 2, name: 'Devon Richards', role: 'Batsman', from: 'Jamaica' },
  { num: 3, name: 'Ravi Patel', role: 'Bowler', from: 'India' },
  { num: 4, name: 'Marcus Baptiste', role: 'Wicketkeeper', from: 'Barbados' },
  { num: 5, name: 'Tariq Hussain', role: 'Bowler', from: 'Pakistan' },
  { num: 6, name: 'Priya Nair', role: 'Batsman', from: 'India' },
  { num: 7, name: 'Jean-Paul Tremblay', role: 'All-rounder', from: 'Canada' },
  { num: 8, name: 'Ahmed Al-Rashid', role: 'Bowler', from: 'Bangladesh' },
]

export default function TeamsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex items-end" style={{ height: '55vh', minHeight: '400px' }}>
        <Image
          src="https://images.pexels.com/photos/3621031/pexels-photo-3621031.jpeg"
          alt="Tapeball Pros squad"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(6,14,9,0.3) 0%, rgba(6,14,9,0.85) 100%)' }}
        />
        <div className="relative z-10 px-6 pb-12 w-full mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <p
            className="text-ball-500 uppercase tracking-widest text-sm mb-3"
            style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-semibold)' }}
          >
            2026 Season
          </p>
          <h1
            className="text-chalk-50 uppercase leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-display-large)',
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            The Squad
          </h1>
        </div>
      </section>

      {/* ── Season Stats ── */}
      <section style={{ background: 'var(--color-pitch-950)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div
          className="mx-auto px-6 py-10 flex flex-wrap gap-10 items-center justify-center sm:justify-between"
          style={{ maxWidth: 'var(--container-max)' }}
        >
          {[
            { value: '162', label: 'Matches Played' },
            { value: '8,420', label: 'Total Runs' },
            { value: '127', label: 'Wickets Taken' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <span
                className="block text-ball-500"
                style={{ fontFamily: 'var(--font-stat)', fontSize: 'var(--text-stat-xl)' }}
              >
                {stat.value}
              </span>
              <span
                className="block text-chalk-400 uppercase tracking-widest text-xs mt-1"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Player Profiles ── */}
      <section className="py-20 px-6" style={{ background: 'var(--color-pitch-900)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <h2
            className="text-chalk-50 mb-10"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-display-mid)',
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            Player Profiles
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {players.map((player) => (
              <div
                key={player.name}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: 'var(--color-pitch-800)',
                  border: '1px solid var(--color-border-subtle)',
                }}
              >
                <div className="relative" style={{ aspectRatio: '3/4' }}>
                  <Image
                    src={`https://images.pexels.com/photos/${player.imageId}/pexels-photo-${player.imageId}.jpeg`}
                    alt={player.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0"
                    style={{ background: 'linear-gradient(to top, rgba(6,14,9,0.9) 0%, transparent 100%)', height: '50%' }}
                  />
                  <span
                    className="absolute bottom-3 left-3 text-xs px-2 py-0.5 rounded font-semibold"
                    style={{
                      background: 'var(--color-ball-500)',
                      color: 'var(--color-pitch-900)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {player.role}
                  </span>
                </div>
                <div className="p-4">
                  <p
                    className="text-chalk-50 font-semibold text-sm mb-0.5"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-semibold)' }}
                  >
                    {player.name}
                  </p>
                  <p className="text-chalk-500 text-xs mb-3" style={{ fontFamily: 'var(--font-body)' }}>
                    {player.from}
                  </p>
                  <div className="flex gap-3 text-xs">
                    <div className="flex flex-col items-center">
                      <span className="text-ball-500 font-semibold" style={{ fontFamily: 'var(--font-stat)' }}>
                        {player.matches}
                      </span>
                      <span className="text-chalk-600" style={{ fontFamily: 'var(--font-body)' }}>M</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-ball-500 font-semibold" style={{ fontFamily: 'var(--font-stat)' }}>
                        {player.topScore}
                      </span>
                      <span className="text-chalk-600" style={{ fontFamily: 'var(--font-body)' }}>HS</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-ball-500 font-semibold" style={{ fontFamily: 'var(--font-stat)' }}>
                        {player.wickets}
                      </span>
                      <span className="text-chalk-600" style={{ fontFamily: 'var(--font-body)' }}>W</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team Roster Table ── */}
      <section className="py-20 px-6" style={{ background: 'var(--color-pitch-950)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <h2
            className="text-chalk-50 mb-8"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-display-mid)',
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            Team Roster
          </h2>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: '1px solid var(--color-border-subtle)' }}
          >
            <table className="w-full text-sm" style={{ fontFamily: 'var(--font-body)', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: 'var(--color-pitch-800)' }}>
                  {['#', 'Name', 'Role', 'From'].map((h) => (
                    <th
                      key={h}
                      className="text-left px-6 py-4 text-chalk-400 font-semibold uppercase tracking-wider text-xs"
                      style={{ borderBottom: '1px solid var(--color-border-subtle)' }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {roster.map((player, i) => (
                  <tr
                    key={player.num}
                    style={{
                      background: i % 2 === 0 ? 'var(--color-pitch-900)' : 'var(--color-pitch-950)',
                      borderBottom: '1px solid var(--color-border-subtle)',
                    }}
                  >
                    <td className="px-6 py-4 text-chalk-500">{player.num}</td>
                    <td className="px-6 py-4 text-chalk-50 font-medium">{player.name}</td>
                    <td className="px-6 py-4">
                      <span
                        className="px-2 py-0.5 rounded text-xs font-semibold"
                        style={{
                          background: 'var(--color-pitch-700)',
                          color: 'var(--color-ball-400)',
                          border: '1px solid var(--color-border-subtle)',
                        }}
                      >
                        {player.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-chalk-400">{player.from}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  )
}
