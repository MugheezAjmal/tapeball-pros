import Image from 'next/image'
import Link from 'next/link'

const values = [
  {
    icon: '🤝',
    title: 'Inclusive Community',
    description: 'We welcome players of all backgrounds, skill levels, and ages. Cricket is for everyone.',
  },
  {
    icon: '🌍',
    title: 'Newcomer Friendly',
    description: 'A first stop for newcomers to New Brunswick who want community, competition, and a good time.',
  },
  {
    icon: '🏆',
    title: 'Competitive Spirit',
    description: 'We play hard, but with respect. Our tournaments bring out the best in everyone.',
  },
]

const leadership = [
  {
    name: 'Arjun Sharma',
    role: 'Founder & President',
    imageId: '2379004',
  },
  {
    name: 'Priya Nair',
    role: 'Vice President',
    imageId: '1239291',
  },
  {
    name: 'Mohammed Al-Hassan',
    role: 'Head Coach',
    imageId: '1681010',
  },
  {
    name: 'Sarah Thibodeau',
    role: 'Community Director',
    imageId: '733872',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative flex items-end" style={{ height: '55vh', minHeight: '400px' }}>
        <Image
          src="https://images.pexels.com/photos/7005685/pexels-photo-7005685.jpeg"
          alt="Tapeball Pros team"
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
            About Us
          </p>
          <h1
            className="text-chalk-50 uppercase leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-display-large)',
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            Our Story
          </h1>
        </div>
      </section>

      {/* ── Club Story ── */}
      <section className="py-20 px-6" style={{ background: 'var(--color-pitch-900)' }}>
        <div className="mx-auto max-w-3xl" style={{ maxWidth: 'var(--container-narrow)' }}>
          <p
            className="text-chalk-200 leading-relaxed"
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'var(--text-body-lg)',
              lineHeight: 'var(--leading-loose)',
            }}
          >
            Founded in 2022 by a group of friends who missed the backyard cricket of their home countries, Tapeball Pros began
            on a quiet Sunday in Rockwood Park. What started as six players and a borrowed bat has grown into Saint John&apos;s
            most welcoming cricket family — spanning 50+ members from South Asia, the Caribbean, and beyond.
          </p>
          <p
            className="text-chalk-200 leading-relaxed mt-6"
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'var(--text-body-lg)',
              lineHeight: 'var(--leading-loose)',
            }}
          >
            We&apos;re a first stop for newcomers to New Brunswick who want community, competition, and a good time. Our
            weekly matches are as much about laughter and shared meals as they are about wickets and runs. Pull up a chair,
            grab a cup of chai, and watch the tape ball fly.
          </p>
        </div>
      </section>

      {/* ── Mission & Values ── */}
      <section className="py-20 px-6" style={{ background: 'var(--color-pitch-950)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <h2
            className="text-chalk-50 text-center mb-12"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-display-mid)',
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl p-8 flex flex-col gap-4"
                style={{
                  background: 'var(--color-pitch-800)',
                  border: '1px solid var(--color-border-subtle)',
                }}
              >
                <span className="text-4xl">{v.icon}</span>
                <h3
                  className="text-chalk-50"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'var(--text-xl)',
                    letterSpacing: 'var(--tracking-tight)',
                  }}
                >
                  {v.title}
                </h3>
                <p className="text-chalk-300 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Club Leadership ── */}
      <section className="py-20 px-6" style={{ background: 'var(--color-pitch-900)' }}>
        <div className="mx-auto" style={{ maxWidth: 'var(--container-max)' }}>
          <h2
            className="text-chalk-50 mb-12"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-display-mid)',
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            Club Leadership
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {leadership.map((person) => (
              <div key={person.name} className="flex flex-col gap-4">
                <div
                  className="relative overflow-hidden rounded-2xl"
                  style={{ aspectRatio: '3/4', background: 'var(--color-pitch-700)' }}
                >
                  <Image
                    src={`https://images.pexels.com/photos/${person.imageId}/pexels-photo-${person.imageId}.jpeg`}
                    alt={person.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div>
                  <p
                    className="text-chalk-50 font-semibold"
                    style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-semibold)' }}
                  >
                    {person.name}
                  </p>
                  <p
                    className="text-ball-500 text-sm mt-0.5"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {person.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Membership CTA ── */}
      <section
        className="py-20 px-6 text-center"
        style={{
          background: 'var(--color-pitch-800)',
          borderTop: '1px solid var(--color-border-subtle)',
        }}
      >
        <div className="mx-auto max-w-xl">
          <h2
            className="text-chalk-50 mb-4"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-display-mid)',
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            Ready to Play?
          </h2>
          <p
            className="text-chalk-300 mb-8"
            style={{
              fontFamily: 'var(--font-editorial)',
              fontSize: 'var(--text-body-lg)',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            Join our growing family of cricket lovers in Saint John, NB.
          </p>
          <Link
            href="/#membership"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-base"
            style={{
              background: 'var(--color-ball-500)',
              color: 'var(--color-pitch-900)',
              fontFamily: 'var(--font-body)',
            }}
          >
            Register Interest
          </Link>
        </div>
      </section>
    </>
  )
}
