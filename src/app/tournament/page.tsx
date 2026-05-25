import Image from 'next/image'

const details = [
  { label: 'Date', value: 'July 4, 2026' },
  { label: 'Venue', value: 'SJ Exhibition Raceway Ground, Saint John (beside Popeyes)' },
  { label: 'Format', value: '2+ matches per team · 6 overs · 8 players max per team' },
  { label: 'Teams', value: '8 Teams only — First Come, First Served' },
  { label: 'Entry Fee', value: '$200 per team' },
  { label: 'Cash Prize', value: '$400 for the winning team' },
  { label: 'Equipment', value: 'All equipment will be provided' },
  { label: 'Awards', value: 'Trophies distributed to top teams' },
]

const prizes = [
  { value: '$400', label: 'Cash Prize' },
  { value: '$200', label: 'Entry Fee' },
  { value: '6', label: 'Overs' },
  { value: '8', label: 'Teams Only' },
]

export default function TournamentPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex items-end" style={{ height: '55vh', minHeight: '400px' }}>
        <Image
          src="https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg"
          alt="Cricket tournament"
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
          <span
            className="inline-block px-3 py-1 rounded text-xs font-semibold mb-4"
            style={{
              background: 'var(--color-ball-500)',
              color: 'var(--color-pitch-900)',
              fontFamily: 'var(--font-body)',
            }}
          >
            July 4, 2026 · Saint John, NB
          </span>
          <h1
            className="text-chalk-50 uppercase leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-display-large)',
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            Saint John Tapeball Tournament 2026
          </h1>
          <p
            className="text-chalk-300 mt-4"
            style={{ fontFamily: 'var(--font-editorial)', fontSize: 'var(--text-body-lg)' }}
          >
            We are hosting our first ever tapeball cricket tournament this summer — and we want your team in it!
          </p>
        </div>
      </section>

      {/* ── Tournament Details ── */}
      <section className="py-20 px-6" style={{ background: 'var(--color-pitch-900)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-chalk-50 mb-6"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-display-mid)',
                  letterSpacing: 'var(--tracking-tight)',
                }}
              >
                Tournament Details
              </h2>
              <div className="flex flex-col gap-5">
                {details.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 pb-5"
                    style={{ borderBottom: '1px solid var(--color-border-subtle)' }}
                  >
                    <span
                      className="shrink-0 w-48 text-chalk-500 text-sm"
                      style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-semibold)' }}
                    >
                      {item.label}
                    </span>
                    <span className="text-chalk-200 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stat callouts */}
            <div className="grid grid-cols-2 gap-4">
              {prizes.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl p-6 text-center"
                  style={{
                    background: 'var(--color-pitch-800)',
                    border: '1px solid var(--color-border-subtle)',
                  }}
                >
                  <span
                    className="block text-ball-500"
                    style={{ fontFamily: 'var(--font-stat)', fontSize: 'var(--text-4xl)' }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="block text-chalk-400 text-xs uppercase tracking-widest mt-1"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Prizes & Perks ── */}
      <section className="py-20 px-6" style={{ background: 'var(--color-pitch-950)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <h2
            className="text-chalk-50 mb-10"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-display-mid)',
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            Prizes &amp; Perks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: '$400 Cash Prize',
                desc: 'Top prize for the winning team — take home the trophy and the cash.',
              },
              {
                title: 'Trophies Distributed',
                desc: 'Trophies awarded to top-performing teams across all categories.',
              },
              {
                title: 'Equipment Provided',
                desc: 'All cricket equipment will be provided — just bring your team and your game.',
              },
            ].map((perk) => (
              <div
                key={perk.title}
                className="rounded-2xl p-7 flex flex-col gap-3"
                style={{
                  background: 'var(--color-pitch-800)',
                  border: '1px solid var(--color-border-subtle)',
                }}
              >
                <h3
                  className="text-ball-500 font-semibold"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-semibold)' }}
                >
                  {perk.title}
                </h3>
                <p className="text-chalk-400 text-sm" style={{ fontFamily: 'var(--font-body)', lineHeight: 'var(--leading-relaxed)' }}>
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registration ── */}
      <section className="py-20 px-6" style={{ background: 'var(--color-pitch-800)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2
                className="text-chalk-50 mb-4"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-display-mid)',
                  letterSpacing: 'var(--tracking-tight)',
                }}
              >
                Register Your Team
              </h2>
              <p
                className="text-chalk-300 mb-6"
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'var(--text-body-lg)',
                  lineHeight: 'var(--leading-relaxed)',
                }}
              >
                Spots are limited to 8 teams — first come, first served. Secure your spot before it's too late!
              </p>
              <div className="flex flex-col gap-3 mb-6">
                <p className="text-chalk-400 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  To sign up, drop us a message:
                </p>
                <a
                  href="tel:5066398499"
                  className="flex items-center gap-2 text-chalk-200 text-sm hover:text-ball-500 transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <span style={{ color: 'var(--color-ball-500)' }}>📞</span> 506-639-8499
                </a>
                <a
                  href="https://tapeballpros.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-chalk-200 text-sm hover:text-ball-500 transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <span style={{ color: 'var(--color-ball-500)' }}>🌐</span> tapeballpros.com
                </a>
                <a
                  href="https://instagram.com/tapeballproscricketclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-chalk-200 text-sm hover:text-ball-500 transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  <span style={{ color: 'var(--color-ball-500)' }}>📷</span> @tapeballproscricketclub
                </a>
              </div>
            </div>

            <form
              className="rounded-2xl p-8 flex flex-col gap-5"
              style={{
                background: 'var(--color-pitch-700)',
                border: '1px solid var(--color-border-subtle)',
              }}
            >
              {[
                { label: 'Team Name', id: 'team', type: 'text', placeholder: 'Your team name' },
                { label: "Captain's Name", id: 'captain', type: 'text', placeholder: 'Full name' },
                { label: 'Email Address', id: 'email', type: 'email', placeholder: 'captain@example.com' },
                { label: 'Phone Number', id: 'phone', type: 'tel', placeholder: '+1 (506) 000-0000' },
                { label: 'Number of Players (max 8)', id: 'players', type: 'number', placeholder: 'e.g. 8' },
              ].map((field) => (
                <div key={field.id} className="flex flex-col gap-1.5">
                  <label
                    htmlFor={field.id}
                    className="text-chalk-300 text-sm font-medium"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full rounded-lg px-4 text-chalk-50 placeholder-chalk-600 outline-none"
                    style={{
                      height: 'var(--input-height)',
                      background: 'var(--input-bg)',
                      border: '1px solid var(--input-border)',
                      fontFamily: 'var(--font-body)',
                      fontSize: 'var(--text-sm)',
                    }}
                  />
                </div>
              ))}
              <button
                type="submit"
                className="w-full py-3.5 rounded-full font-semibold text-base mt-2"
                style={{
                  background: 'var(--color-ball-500)',
                  color: 'var(--color-pitch-900)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Register Your Team
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Results & Standings ── */}
      <section className="py-20 px-6 text-center" style={{ background: 'var(--color-pitch-950)' }}>
        <div className="mx-auto max-w-xl">
          <h2
            className="text-chalk-50 mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-display-mid)',
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            Results &amp; Standings
          </h2>
          <p
            className="text-chalk-400 mb-8"
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'var(--text-body-lg)',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            Results will appear here after matches. Check back on July 4, 2026.
          </p>
          <div
            className="rounded-2xl p-12 text-chalk-600"
            style={{
              background: 'var(--color-pitch-800)',
              border: '1px solid var(--color-border-subtle)',
              fontFamily: 'var(--font-body)',
            }}
          >
            🏏 Tournament day — July 4, 2026 · #SJTT2026
          </div>
        </div>
      </section>
    </>
  )
}
