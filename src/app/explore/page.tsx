'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const slides = [
  {
    id: 1,
    name: 'Tournament',
    href: '/tournament',
    tagline: 'Find out about our 2026 tournament',
    imageId: '1263426',
    bg: 'var(--color-pitch-900)',
    accent: 'var(--color-pitch-400)',
  },
  {
    id: 2,
    name: 'Teams',
    href: '/teams',
    tagline: 'Meet the players',
    imageId: '3621031',
    bg: 'var(--color-ball-900)',
    accent: 'var(--color-ball-400)',
  },
  {
    id: 3,
    name: 'Gallery',
    href: '/gallery',
    tagline: 'Browse our photos & highlights',
    imageId: '3661261',
    bg: 'var(--color-pitch-950)',
    accent: 'var(--color-pitch-300)',
  },
  {
    id: 4,
    name: 'News',
    href: '/news',
    tagline: 'Latest from the club',
    imageId: '163397',
    bg: 'var(--color-chalk-900)',
    accent: 'var(--color-ball-500)',
  },
  {
    id: 5,
    name: 'Sponsors',
    href: '/sponsors',
    tagline: 'Our proud supporters',
    imageId: '4974920',
    bg: 'var(--color-pitch-800)',
    accent: 'var(--color-ball-300)',
  },
  {
    id: 6,
    name: 'Contact',
    href: '/contact',
    tagline: 'Get in touch',
    imageId: '8007380',
    bg: 'var(--color-pitch-700)',
    accent: 'var(--color-pitch-200)',
  },
]

export default function ExplorePage() {
  const [active, setActive] = useState(0)

  return (
    <div
      className="relative overflow-hidden"
      style={{ height: 'calc(100vh - var(--nav-height))' }}
    >
      {/* Slides */}
      <div
        className="h-full"
        style={{
          scrollSnapType: 'y mandatory',
          overflowY: 'scroll',
          scrollbarWidth: 'none',
        }}
        onScroll={(e) => {
          const el = e.currentTarget
          const idx = Math.round(el.scrollTop / el.clientHeight)
          setActive(idx)
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className="relative flex items-center"
            style={{
              height: '100%',
              scrollSnapAlign: 'start',
              background: slide.bg,
            }}
          >
            {/* Background image */}
            <Image
              src={`https://images.pexels.com/photos/${slide.imageId}/pexels-photo-${slide.imageId}.jpeg`}
              alt={slide.name}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(6,14,9,0.88) 40%, rgba(6,14,9,0.4) 100%)' }}
            />

            {/* Content */}
            <div className="relative z-10 px-10 md:px-20 max-w-3xl">
              <p
                className="mb-4 uppercase tracking-widest text-sm font-semibold"
                style={{ color: slide.accent, fontFamily: 'var(--font-body)' }}
              >
                {String(i + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </p>
              <h2
                className="text-chalk-50 uppercase leading-none mb-4"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-display-hero)',
                  letterSpacing: 'var(--tracking-tight)',
                }}
              >
                {slide.name}
              </h2>
              <p
                className="text-chalk-300 mb-8 max-w-sm"
                style={{
                  fontFamily: 'var(--font-editorial)',
                  fontSize: 'var(--text-body-lg)',
                  lineHeight: 'var(--leading-relaxed)',
                }}
              >
                {slide.tagline}
              </p>
              <Link
                href={slide.href}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base"
                style={{
                  background: slide.accent,
                  color: 'var(--color-pitch-950)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                Explore {slide.name}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Side dot navigation */}
      <div
        className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20"
      >
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            aria-label={`Go to ${slide.name}`}
            onClick={() => {
              const container = document.querySelector('[style*="scroll-snap-type"]') as HTMLElement
              if (container) {
                container.scrollTo({ top: i * container.clientHeight, behavior: 'smooth' })
              }
            }}
            className="rounded-full transition-all"
            style={{
              width: active === i ? '10px' : '6px',
              height: active === i ? '10px' : '6px',
              background: active === i ? 'var(--color-ball-500)' : 'rgba(255,255,255,0.3)',
            }}
          />
        ))}
      </div>

      {/* Scroll hint (shown on first slide) */}
      {active === 0 && (
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
          style={{ color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}
        >
          <span className="uppercase tracking-widest">Scroll to explore</span>
          <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      )}
    </div>
  )
}
