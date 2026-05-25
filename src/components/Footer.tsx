import Link from 'next/link'
import Image from 'next/image'

const footerLinks = [
  {
    heading: 'Club',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Club Leadership', href: '/about/leadership' },
      { label: 'Membership', href: '/about/membership' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    heading: 'Tournament',
    links: [
      { label: '2026 Tournament', href: '/tournament/2026' },
      { label: 'Schedule', href: '/tournament/schedule' },
      { label: 'Registration', href: '/tournament/register' },
      { label: 'Results', href: '/tournament/results' },
    ],
  },
  {
    heading: 'Community',
    links: [
      { label: 'Teams', href: '/teams' },
      { label: 'Gallery', href: '/gallery' },
      { label: 'News', href: '/news' },
      { label: 'Sponsors', href: '/sponsors' },
    ],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-pitch-950)', borderTop: '1px solid var(--color-border-subtle)' }}>
      <div className="mx-auto px-6 py-16" style={{ maxWidth: 'var(--container-max)' }}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Tapeball Pros Cricket Club"
                width={56}
                height={56}
                className="object-contain"
              />
              <span
                className="text-chalk-50 tracking-widest leading-tight"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-base)' }}
              >
                TAPEBALL PROS<br />
                <span className="text-ball-500 text-xs">CRICKET CLUB</span>
              </span>
            </div>
            <p className="text-chalk-400 text-sm leading-relaxed mb-5" style={{ fontFamily: 'var(--font-body)' }}>
              Saint John's inclusive tapeball cricket community. All are welcome.
            </p>
            <p className="text-chalk-500 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
              📍 Saint John, NB, Canada
            </p>
            <div className="flex gap-4 mt-5">
              <a href="#" className="text-chalk-500 hover:text-ball-500 text-sm transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                Instagram
              </a>
              <a href="#" className="text-chalk-500 hover:text-ball-500 text-sm transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                Facebook
              </a>
              <a href="#" className="text-chalk-500 hover:text-ball-500 text-sm transition-colors" style={{ fontFamily: 'var(--font-body)' }}>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading}>
              <h4
                className="text-chalk-50 text-xs tracking-widest mb-4 uppercase"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--weight-semibold)' }}
              >
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-chalk-400 hover:text-ball-500 text-sm transition-colors"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--color-border-subtle)' }}
        >
          <p className="text-chalk-600 text-xs" style={{ fontFamily: 'var(--font-body)' }}>
            © {new Date().getFullYear()} Tapeball Pros Cricket Club Inc. All rights reserved.
          </p>
          <Link
            href="/explore"
            className="text-chalk-500 hover:text-ball-500 text-xs transition-colors"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Explore the Club →
          </Link>
        </div>
      </div>
    </footer>
  )
}
