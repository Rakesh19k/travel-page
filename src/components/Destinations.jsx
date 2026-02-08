import { useState } from 'react'
import { destinations } from '../data/destinations'
import DestinationDetails from './DestinationDetails'

const difficultyColors = {
  Easy: 'bg-green-500/20 text-green-600 dark:text-green-400 border-green-500/30',
  Medium: 'bg-amber-500/20 text-amber-700 dark:text-amber-400 border-amber-500/30',
  Hard: 'bg-red-500/20 text-red-600 dark:text-red-400 border-red-500/30',
}

export default function Destinations() {
  const [selectedDestination, setSelectedDestination] = useState(null)

  return (
    <>
      <section id="destinations" className="relative py-24 overflow-hidden transition-colors duration-500" style={{ backgroundColor: 'var(--bg-primary)' }}>
        {/* Destinations Section - Unique: Map pin / grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundColor: 'var(--accent)' }}>
          <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="mapGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#mapGrid)" />
          </svg>
        </div>
        {/* Floating map pins */}
        <div className="absolute top-20 right-20 w-8 h-8 opacity-20">
          <svg viewBox="0 0 24 24" fill="var(--accent)" className="animate-pulse">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          </svg>
        </div>
        <div className="absolute bottom-40 left-16 w-6 h-6 opacity-15" style={{ animationDelay: '1s' }}>
          <svg viewBox="0 0 24 24" fill="var(--accent)" className="animate-pulse">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          </svg>
        </div>
        <div className="absolute top-1/2 right-1/4 w-4 h-4 opacity-10">
          <svg viewBox="0 0 24 24" fill="var(--accent)" className="animate-pulse">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 transition-colors duration-500"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--accent) 20%, transparent)',
                color: 'var(--accent)',
              }}
            >
              All India Best Places
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide mb-4 transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>
              Destinations Worth the Ride
            </h2>
            <p className="max-w-2xl mx-auto transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>
              From Bangalore, these iconic destinations await. Plan your next road trip and let the Hunter 350 take you there.
            </p>
            <p className="mt-2 text-sm" style={{ color: 'var(--text-muted)' }}>
              Click on any destination to explore best places to visit
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest) => (
              <button
                key={dest.id}
                onClick={() => setSelectedDestination(dest)}
                className="group relative rounded-xl border p-6 text-left transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--accent)]/10 hover:border-[var(--accent)]/50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/50"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  borderColor: 'var(--border-color)',
                }}
              >
                <div className="absolute top-4 right-4">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-medium border ${difficultyColors[dest.difficulty]}`}>
                    {dest.difficulty}
                  </span>
                </div>
                <h3 className="font-display text-2xl mb-2 group-hover:text-[var(--accent)] transition-colors duration-300" style={{ color: 'var(--text-primary)' }}>
                  {dest.name}
                </h3>
                <p className="text-sm mb-4 line-clamp-2 transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>
                  {dest.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between" style={{ color: 'var(--text-muted)' }}>
                    <span>Distance from Bangalore</span>
                    <span className="font-medium transition-colors" style={{ color: 'var(--accent)' }}>{dest.distance} km</span>
                  </div>
                  <div className="flex justify-between" style={{ color: 'var(--text-muted)' }}>
                    <span>Travel time</span>
                    <span style={{ color: 'var(--text-primary)' }}>{dest.travelTime}</span>
                  </div>
                  <div className="flex justify-between" style={{ color: 'var(--text-muted)' }}>
                    <span>Best season</span>
                    <span style={{ color: 'var(--text-primary)' }}>{dest.bestSeason}</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t flex justify-end" style={{ borderColor: 'var(--border-color)' }}>
                  <span className="text-[var(--accent)] opacity-60 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-sm font-medium">
                    Explore
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedDestination && (
        <DestinationDetails
          destination={selectedDestination}
          onClose={() => setSelectedDestination(null)}
        />
      )}
    </>
  )
}
