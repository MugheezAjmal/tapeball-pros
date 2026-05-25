import Image from 'next/image'
import Link from 'next/link'

const howItWorks = [
  {
    step: '01',
    title: 'Register Interest',
    desc: 'Fill out our quick sign-up form below. No cricket experience needed — just bring your enthusiasm.',
    icon: '📝',
  },
  {
    step: '02',
    title: 'Show Up & Meet Us',
    desc: 'Come to one of our weekly matches in Rockwood Park. Say hello, watch a game, feel the vibe.',
    icon: '🤝',
  },
  {
    step: '03',
    title: 'Play & Compete',
    desc: 'Jump right in. We match skill levels so every game is fun and competitive for everyone.',
    icon: '🏏',
  },
  {
    step: '04',
    title: 'Grow Your Game',
    desc: "Join tournaments, level up your skills, and become part of Saint John's cricket family.",
    icon: '🏆',
  },
]

const talentCards = [
  {
    name: 'Arjun Mehta',
    location: 'Saint John, NB',
    tags: ['Batsman', 'Top Order', 'Right-Handed'],
    imageId: '3621031',
  },
  {
    name: 'Devon Clarke',
    location: 'Moncton, NB',
    tags: ['All-Rounder', 'Medium Pace', 'Captaincy'],
    imageId: '5384423',
  },
  {
    name: 'Ravi Sharma',
    location: 'Fredericton, NB',
    tags: ['Spinner', 'Lower Order', 'Fielder'],
    imageId: '3622608',
  },
  {
    name: 'Marcus Williams',
    location: 'Saint John, NB',
    tags: ['Wicketkeeper', 'Batsman', 'Anchor'],
    imageId: '8007380',
  },
]

const newsItems = [
  {
    date: 'March 1, 2026',
    category: 'Announcement',
    title: '2026 Season Registration Now Open',
    excerpt: 'The 2026 tapeball season is officially here. Register your team before May 15 to secure your spot in the tournament.',
    imageId: '163397',
  },
  {
    date: 'February 15, 2026',
    category: 'Community',
    title: 'Tapeball Pros Welcomes 12 New Members',
    excerpt: 'We welcomed a fantastic group of newcomers from across New Brunswick at our February open day. The community keeps growing.',
    imageId: '8007380',
  },
  {
    date: 'January 28, 2026',
    category: 'Tournament',
    title: 'Grand Final Venue Confirmed: Rockwood Park',
    excerpt: "The 2026 Grand Final will be held at Rockwood Park on July 19. Mark your calendars — it's going to be electric.",
    imageId: '4974920',
  },
]

const events = [
  {
    name: 'Opening Day Match',
    date: 'May 10, 2026',
    location: 'Rockwood Park',
    imageId: '163397',
  },
  {
    name: 'Mid-Season Tournament',
    date: 'July 12–13, 2026',
    location: 'Lily Lake Road Fields',
    imageId: '8007380',
  },
  {
    name: 'Season Finale',
    date: 'September 6, 2026',
    location: 'Rockwood Park',
    imageId: '4974920',
  },
]

const clubFormats = [
  {
    icon: '🏏',
    title: 'Weekly Matches',
    desc: 'Every weekend at Rockwood Park. Casual, competitive, for all levels.',
    cta: 'Join a Match →',
    href: '/#membership',
  },
  {
    icon: '🏆',
    title: 'Season Tournament',
    desc: '2026 tournament open for registration. 8 teams, 8 overs, pure glory.',
    cta: 'Register Team →',
    href: '/tournament',
  },
  {
    icon: '🤝',
    title: 'Open to All',
    desc: 'No experience? No problem. We coach, mentor, and welcome all.',
    cta: 'Learn More →',
    href: '/about',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ── 1. Hero — 2-col split ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: 'var(--color-chalk-950)', minHeight: '100vh' }}
      >
        <div
          className="mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-0 items-center"
          style={{ maxWidth: 'var(--container-max)', minHeight: '100vh' }}
        >
          {/* Left: content */}
          <div className="relative z-10 py-24 lg:py-0 lg:pr-12 flex flex-col justify-center">
            <span
              className="inline-flex items-center gap-2 mb-6 text-xs font-semibold uppercase tracking-widest"
              style={{ color: 'var(--color-ball-500)', fontFamily: 'var(--font-body)' }}
            >
              <span
                className="inline-block w-5 h-px"
                style={{ background: 'var(--color-ball-500)' }}
              />
              50+ Members · Saint John, NB
            </span>
            <h1
              className="text-chalk-50 mb-6 leading-none"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-display-hero)',
                letterSpacing: 'var(--tracking-tight)',
              }}
            >
              Unleash Your{' '}
              <span style={{ color: 'var(--color-ball-500)' }}>Tapeball Strategy</span>
              {' '}and Discover Hidden Talent!
            </h1>
            <p
              className="text-chalk-300 mb-10 max-w-md"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-body-lg)',
                lineHeight: 'var(--leading-relaxed)',
              }}
            >
              Saint John&apos;s inclusive tapeball cricket community — weekly matches,
              seasonal tournaments, and a home for every level of player.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-base transition-colors"
                style={{
                  background: 'var(--color-ball-500)',
                  color: 'var(--color-pitch-900)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Get Started →
              </Link>
              <Link
                href="/tournament"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-base transition-colors text-chalk-50"
                style={{
                  border: '2px solid var(--color-ball-500)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                View Tournament
              </Link>
            </div>
          </div>

          {/* Right: player image with gradient fade */}
          <div className="hidden lg:block relative h-full" style={{ minHeight: '100vh' }}>
            {/* gradient fade on left edge */}
            <div
              className="absolute inset-y-0 left-0 z-10 w-32 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, var(--color-chalk-950) 0%, transparent 100%)',
              }}
            />
            <Image
              src="https://images.pexels.com/photos/3661261/pexels-photo-3661261.jpeg"
              alt="Cricket player in action"
              fill
              priority
              className="object-cover object-center"
              sizes="50vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, var(--color-chalk-950) 0%, transparent 30%, transparent 70%, rgba(13,13,11,0.4) 100%)' }}
            />
          </div>
        </div>
      </section>

      {/* ── 2. Stats Bar ── */}
      <section style={{ background: 'var(--color-pitch-950)', borderBottom: '1px solid var(--color-border-subtle)' }}>
        <div
          className="mx-auto px-6 py-8 flex flex-wrap gap-8 items-center justify-center sm:justify-between"
          style={{ maxWidth: 'var(--container-max)' }}
        >
          {[
            { value: '50+', label: 'Members' },
            { value: '3', label: 'Seasons' },
            { value: 'Weekly', label: 'Matches' },
            { value: 'Saint John, NB', label: 'Home' },
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

      {/* ── 3. How It Works — LIGHT background ── */}
      <section className="py-24 px-6" style={{ background: 'var(--color-chalk-0)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <div className="text-center mb-14">
            <p
              className="uppercase tracking-widest text-xs font-semibold mb-3"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ball-500)' }}
            >
              Getting Started
            </p>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-display-mid)',
                letterSpacing: 'var(--tracking-tight)',
                color: 'var(--color-pitch-900)',
              }}
            >
              How Tapeball Pros Works
            </h2>
          </div>
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* dotted connector on desktop */}
            <div
              className="hidden lg:block absolute top-12 left-0 right-0 h-px"
              style={{
                borderTop: '2px dashed rgba(244,162,40,0.3)',
                top: '2.75rem',
                left: '12.5%',
                right: '12.5%',
                zIndex: 0,
              }}
            />
            {howItWorks.map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl p-7 flex flex-col gap-4 z-10"
                style={{
                  background: '#ffffff',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04)',
                  border: '1px solid rgba(0,0,0,0.06)',
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="font-bold leading-none"
                    style={{ fontFamily: 'var(--font-stat)', fontSize: 'var(--text-3xl)', color: 'var(--color-ball-500)' }}
                  >
                    {item.step}
                  </span>
                  <span className="text-2xl">{item.icon}</span>
                </div>
                <h3
                  className="font-semibold"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-pitch-900)', fontWeight: 'var(--weight-semibold)' }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)', color: 'var(--color-pitch-700)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Talent Spotlights ── */}
      <section className="py-24 px-6" style={{ background: 'var(--color-pitch-900)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <div className="flex items-center justify-between mb-10">
            <div>
              <p
                className="uppercase tracking-widest text-xs font-semibold mb-2"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ball-500)' }}
              >
                Talent Spotlights:
              </p>
              <h2
                className="text-chalk-50"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-display-mid)',
                  letterSpacing: 'var(--tracking-tight)',
                }}
              >
                Meet the Players
              </h2>
            </div>
            {/* Arrow buttons — decorative */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                aria-label="Previous"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ background: 'var(--color-ball-500)', color: 'var(--color-pitch-900)' }}
              >
                ←
              </button>
              <button
                aria-label="Next"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ background: 'var(--color-ball-500)', color: 'var(--color-pitch-900)' }}
              >
                →
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {talentCards.map((player) => (
              <div
                key={player.name}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: 'var(--color-pitch-800)',
                  border: '1px solid var(--color-border-subtle)',
                }}
              >
                {/* 3:4 portrait image */}
                <div className="relative flex-none" style={{ aspectRatio: '3/4' }}>
                  <Image
                    src={`https://images.pexels.com/photos/${player.imageId}/pexels-photo-${player.imageId}.jpeg`}
                    alt={player.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.7) 0%, transparent 50%)' }}
                  />
                </div>
                <div className="p-5 flex flex-col gap-3">
                  <div>
                    <h3
                      className="text-chalk-50 font-semibold"
                      style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-semibold)' }}
                    >
                      {player.name}
                    </h3>
                    <p className="text-chalk-500 text-xs mt-0.5" style={{ fontFamily: 'var(--font-body)' }}>
                      {player.location}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {player.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded"
                        style={{
                          background: 'var(--color-pitch-700)',
                          color: 'var(--color-chalk-300)',
                          fontFamily: 'var(--font-body)',
                          border: '1px solid var(--color-border-subtle)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/teams"
                    className="text-sm font-medium transition-colors mt-1"
                    style={{ color: 'var(--color-ball-500)', fontFamily: 'var(--font-body)' }}
                  >
                    View Profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Featured Story ── */}
      <section className="py-24 px-6" style={{ background: 'var(--color-pitch-950)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: story text */}
            <div>
              <p
                className="uppercase tracking-widest text-xs font-semibold mb-4"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ball-500)' }}
              >
                Success Stories
              </p>
              <h2
                className="text-chalk-50 mb-6"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-display-mid)',
                  letterSpacing: 'var(--tracking-tight)',
                }}
              >
                From the Sidelines to the Squad
              </h2>
              <p
                className="text-chalk-300 mb-8"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-body-lg)',
                  lineHeight: 'var(--leading-relaxed)',
                }}
              >
                Devon showed up to his first match with zero cricket experience — just
                curiosity and a willingness to try. Six months later he was captaining
                his team in the 2025 finals. That&apos;s the Tapeball Pros story.
                Inclusive, fast-paced, and genuinely fun for every skill level.
              </p>
              <Link
                href="/#membership"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-base transition-colors"
                style={{
                  background: 'var(--color-ball-500)',
                  color: 'var(--color-pitch-900)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Join the Club →
              </Link>
            </div>

            {/* Right: portrait photo */}
            <div className="relative flex justify-center lg:justify-end">
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  width: '100%',
                  maxWidth: '420px',
                  aspectRatio: '3/4',
                  transform: 'rotate(1.5deg)',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.55), 0 0 0 4px rgba(244,162,40,0.15)',
                }}
              >
                <Image
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="Featured player success story"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 90vw, 420px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. Club Features / Our Formats ── */}
      <section className="py-24 px-6" style={{ background: 'var(--color-pitch-900)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <div className="text-center mb-14">
            <p
              className="uppercase tracking-widest text-xs font-semibold mb-3"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ball-500)' }}
            >
              Our Formats:
            </p>
            <h2
              className="text-chalk-50 mb-3"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-display-mid)',
                letterSpacing: 'var(--tracking-tight)',
              }}
            >
              How We Play
            </h2>
            <p
              className="text-chalk-400 max-w-lg mx-auto"
              style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-body-lg)' }}
            >
              Tapeball Cricket — fast, fun, inclusive
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clubFormats.map((format) => (
              <div
                key={format.title}
                className="rounded-2xl p-8 flex flex-col gap-4"
                style={{
                  background: '#ffffff',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                }}
              >
                <span className="text-4xl">{format.icon}</span>
                <h3
                  className="font-semibold text-xl"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-pitch-900)', fontWeight: 'var(--weight-semibold)' }}
                >
                  {format.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ fontFamily: 'var(--font-body)', color: 'var(--color-pitch-700)' }}
                >
                  {format.desc}
                </p>
                <Link
                  href={format.href}
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold transition-colors"
                  style={{
                    background: 'var(--color-pitch-900)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {format.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Upcoming Events ── */}
      <section className="py-24 px-6" style={{ background: 'var(--color-pitch-950)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <h2
            className="text-chalk-50 mb-10"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-display-mid)',
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.name}
                className="relative overflow-hidden rounded-xl group"
                style={{ background: 'var(--color-pitch-800)', minHeight: '280px' }}
              >
                <Image
                  src={`https://images.pexels.com/photos/${event.imageId}/pexels-photo-${event.imageId}.jpeg`}
                  alt={event.name}
                  fill
                  className="object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.9) 40%, transparent 100%)' }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span
                    className="inline-block px-2.5 py-1 rounded text-xs font-semibold mb-3"
                    style={{
                      background: 'var(--color-ball-500)',
                      color: 'var(--color-pitch-900)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {event.location}
                  </span>
                  <h3
                    className="text-chalk-50 mb-1"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'var(--text-xl)',
                      letterSpacing: 'var(--tracking-tight)',
                    }}
                  >
                    {event.name}
                  </h3>
                  <p className="text-chalk-300 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                    {event.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. News & Updates ── */}
      <section className="py-24 px-6" style={{ background: 'var(--color-pitch-900)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <div className="flex items-end justify-between mb-10">
            <div>
              <p
                className="uppercase tracking-widest text-xs font-semibold mb-2"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ball-500)' }}
              >
                Stay Updated
              </p>
              <h2
                className="text-chalk-50"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-display-mid)',
                  letterSpacing: 'var(--tracking-tight)',
                }}
              >
                Club News &amp; Updates
              </h2>
            </div>
            <Link
              href="/news"
              className="text-ball-500 hover:text-ball-400 text-sm transition-colors hidden sm:block"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              All news →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{
                  background: 'var(--color-pitch-800)',
                  border: '1px solid var(--color-border-subtle)',
                }}
              >
                <div className="relative" style={{ height: '180px' }}>
                  <Image
                    src={`https://images.pexels.com/photos/${item.imageId}/pexels-photo-${item.imageId}.jpeg`}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0" style={{ background: 'rgba(8,8,8,0.3)' }} />
                  <span
                    className="absolute top-3 left-3 px-2.5 py-1 rounded text-xs font-semibold"
                    style={{
                      background: 'var(--color-ball-500)',
                      color: 'var(--color-pitch-900)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {item.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <p className="text-chalk-500 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
                    {item.date}
                  </p>
                  <h3
                    className="text-chalk-50 font-semibold leading-snug"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-semibold)' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-chalk-400 text-sm leading-relaxed flex-1" style={{ fontFamily: 'var(--font-body)' }}>
                    {item.excerpt}
                  </p>
                  <Link
                    href="/news"
                    className="text-ball-500 text-sm font-medium hover:text-ball-400 transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Contact — 2-col image + form ── */}
      <section id="contact" className="py-0" style={{ background: 'var(--color-pitch-800)' }}>
        <div
          className="mx-auto grid grid-cols-1 lg:grid-cols-2"
          style={{ maxWidth: 'var(--container-max)', minHeight: '600px' }}
        >
          {/* Left: image column */}
          <div className="relative overflow-hidden" style={{ minHeight: '400px' }}>
            <Image
              src="https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg"
              alt="Cricket pitch"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* amber overlay */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, rgba(244,162,40,0.15) 0%, rgba(8,8,8,0.5) 100%)' }}
            />
          </div>

          {/* Right: form */}
          <div className="px-8 py-16 lg:px-14 flex flex-col justify-center">
            <p
              className="uppercase tracking-widest text-xs font-semibold mb-3"
              style={{ fontFamily: 'var(--font-body)', color: 'var(--color-ball-500)' }}
            >
              Get in Touch
            </p>
            <h2
              className="text-chalk-50 mb-8"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-display-mid)',
                letterSpacing: 'var(--tracking-tight)',
              }}
            >
              Join Our Community
            </h2>
            <form id="membership" className="flex flex-col gap-4">
              {[
                { label: 'Full Name', id: 'name', type: 'text', placeholder: 'Your full name' },
                { label: 'Email Address', id: 'email', type: 'email', placeholder: 'you@example.com' },
                { label: 'Phone Number', id: 'phone', type: 'tel', placeholder: '+1 (506) 000-0000' },
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
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-chalk-300 text-sm font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Tell us about yourself or ask a question..."
                  className="w-full rounded-lg px-4 py-3 text-chalk-50 placeholder-chalk-600 outline-none resize-none"
                  style={{
                    background: 'var(--input-bg)',
                    border: '1px solid var(--input-border)',
                    fontFamily: 'var(--font-body)',
                    fontSize: 'var(--text-sm)',
                  }}
                />
              </div>
              <label className="flex items-center gap-2 cursor-pointer mt-1">
                <input type="checkbox" className="rounded" style={{ accentColor: 'var(--color-ball-500)' }} />
                <span className="text-chalk-400 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
                  I accept the terms and privacy policy
                </span>
              </label>
              <button
                type="submit"
                className="w-full py-3.5 rounded-full font-semibold text-base mt-2 transition-colors"
                style={{
                  background: 'var(--color-ball-500)',
                  color: 'var(--color-pitch-900)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Send →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── 10. Newsletter Strip ── */}
      <section
        className="px-6 py-10"
        style={{
          background: 'var(--color-pitch-950)',
          borderTop: '1px solid var(--color-border-subtle)',
        }}
      >
        <div
          className="mx-auto flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ maxWidth: 'var(--container-max)' }}
        >
          <p
            className="text-chalk-200 text-lg font-medium"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Stay updated with <span style={{ color: 'var(--color-ball-500)' }}>Tapeball Pros</span>
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 sm:w-64 rounded-full px-5 text-chalk-50 placeholder-chalk-600 outline-none"
              style={{
                height: 'var(--input-height)',
                background: 'var(--input-bg)',
                border: '1px solid var(--input-border)',
                fontFamily: 'var(--font-body)',
                fontSize: 'var(--text-sm)',
              }}
            />
            <button
              type="button"
              className="px-6 py-2.5 rounded-full font-semibold text-sm whitespace-nowrap"
              style={{
                background: 'var(--color-ball-500)',
                color: 'var(--color-pitch-900)',
                fontFamily: 'var(--font-body)',
              }}
            >
              Subscribe →
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
