'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

type NavChild = { label: string; href: string }
type NavItem = { label: string; href: string; children?: NavChild[] }

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'Our Story', href: '/about/our-story' },
      { label: 'Club Leadership', href: '/about/leadership' },
      { label: 'Membership', href: '/about/membership' },
    ],
  },
  {
    label: 'Tournament',
    href: '/tournament',
    children: [
      { label: '2026 Tournament', href: '/tournament/2026' },
      { label: 'Schedule', href: '/tournament/schedule' },
      { label: 'Registration', href: '/tournament/register' },
      { label: 'Results & Standings', href: '/tournament/results' },
    ],
  },
  {
    label: 'Teams',
    href: '/teams',
    children: [
      { label: 'Player Profiles', href: '/teams/players' },
      { label: 'Rosters', href: '/teams/rosters' },
      { label: 'Stats', href: '/teams/stats' },
    ],
  },
  {
    label: 'Gallery',
    href: '/gallery',
    children: [
      { label: 'Photos', href: '/gallery/photos' },
      { label: 'Videos', href: '/gallery/videos' },
      { label: 'Highlights', href: '/gallery/highlights' },
    ],
  },
  { label: 'News', href: '/news' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <nav
      className="sticky top-0 w-full"
      style={{
        background: 'var(--nav-bg)',
        backdropFilter: 'var(--nav-backdrop)',
        height: 'var(--nav-height)',
        zIndex: 'var(--z-sticky)',
        borderBottom: '1px solid var(--color-border-subtle)',
      }}
    >
      <div
        className="flex items-center justify-between h-full mx-auto px-6 w-full"
        style={{ maxWidth: 'var(--container-max)' }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="Tapeball Pros Cricket Club"
            width={52}
            height={52}
            className="object-contain"
            priority
          />
          <span
            className="hidden sm:block text-chalk-50 tracking-widest text-sm leading-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            TAPEBALL PROS<br />
            <span className="text-ball-500 text-xs">CRICKET CLUB</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 px-3 py-2 rounded-md text-sm text-chalk-300 hover:text-ball-500 hover:bg-pitch-800 transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {item.label}
                {item.children && (
                  <svg className="w-3 h-3 mt-px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {item.children && openDropdown === item.label && (
                <div
                  className="absolute top-full left-0 mt-1 py-1 min-w-48 rounded-lg"
                  style={{
                    background: 'var(--color-pitch-800)',
                    border: '1px solid var(--color-border-subtle)',
                    boxShadow: 'var(--shadow-lg)',
                  }}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="block px-4 py-2 text-sm text-chalk-300 hover:text-ball-500 hover:bg-pitch-700 transition-colors"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/#membership"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-semibold transition-colors"
            style={{
              background: 'transparent',
              color: 'var(--color-ball-500)',
              border: '1.5px solid var(--color-ball-500)',
              fontFamily: 'var(--font-body)',
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(244,162,40,0.08)' }}
            onMouseOut={(e) => { e.currentTarget.style.background = 'transparent' }}
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-semibold transition-colors"
            style={{
              background: 'var(--color-ball-500)',
              color: 'var(--color-pitch-900)',
              fontFamily: 'var(--font-body)',
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = 'var(--color-ball-400)')}
            onMouseOut={(e) => (e.currentTarget.style.background = 'var(--color-ball-500)')}
          >
            Log In
          </Link>
          <button
            className="lg:hidden p-2 text-chalk-300 hover:text-chalk-50"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="lg:hidden absolute left-0 right-0 w-full"
          style={{
            top: 'var(--nav-height)',
            background: 'var(--color-pitch-900)',
            borderBottom: '1px solid var(--color-border-subtle)',
            boxShadow: 'var(--shadow-xl)',
            zIndex: 'var(--z-sticky)',
          }}
        >
          <div className="px-6 py-4 flex flex-col gap-1" style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  href={item.href}
                  className="block py-2 text-chalk-200 hover:text-ball-500 font-medium transition-colors"
                  onClick={() => setMobileOpen(false)}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pl-4 mb-1 flex flex-col">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="py-1.5 text-sm text-chalk-400 hover:text-ball-500 transition-colors"
                        onClick={() => setMobileOpen(false)}
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 flex gap-3">
              <Link
                href="/#membership"
                className="flex-1 inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold"
                onClick={() => setMobileOpen(false)}
                style={{
                  background: 'transparent',
                  color: 'var(--color-ball-500)',
                  border: '1.5px solid var(--color-ball-500)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Sign Up
              </Link>
              <Link
                href="/login"
                className="flex-1 inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold"
                onClick={() => setMobileOpen(false)}
                style={{
                  background: 'var(--color-ball-500)',
                  color: 'var(--color-pitch-900)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
