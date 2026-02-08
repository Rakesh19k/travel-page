const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Mileage',
    value: '~35 kmpl',
    description: 'Fuel-efficient 349cc engine perfect for long hauls without frequent stops.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: 'Comfort',
    value: 'Ergonomics',
    description: 'Upright riding posture and well-cushioned seat for hours of comfortable riding.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Road Grip',
    value: 'Tubeless Tyres',
    description: 'Confident handling on varied terrain with grippy, tubeless tyres.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Touring Ready',
    value: 'Built for Distance',
    description: 'Lightweight, agile, and designed for both city commutes and highway cruising.',
  },
]

export default function RideDetails() {
  return (
    <section id="ride-details" className="relative py-24 overflow-hidden transition-colors duration-500" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      {/* Ride Details Section - Unique: Gear/cog pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="absolute top-10 right-10 w-64 h-64" viewBox="0 0 100 100" fill="none" stroke="var(--accent)" strokeWidth="0.5">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="35" />
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="15"
              x2="50"
              y2="25"
              transform={`rotate(${i * 30} 50 50)`}
            />
          ))}
        </svg>
        <svg className="absolute bottom-20 left-20 w-40 h-40 opacity-70" viewBox="0 0 100 100" fill="none" stroke="var(--accent)" strokeWidth="0.3">
          <circle cx="50" cy="50" r="45" />
          <circle cx="50" cy="50" r="35" />
          {[...Array(8)].map((_, i) => (
            <line key={i} x1="50" y1="15" x2="50" y2="25" transform={`rotate(${i * 45} 50 50)`} />
          ))}
        </svg>
      </div>
      {/* Speed lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="absolute top-20 right-0 w-full h-px bg-gradient-to-l from-[var(--accent)] to-transparent" />
        <div className="absolute top-40 right-0 w-full h-px bg-gradient-to-l from-[var(--accent)] to-transparent" />
        <div className="absolute top-60 right-0 w-full h-px bg-gradient-to-l from-[var(--accent)] to-transparent" />
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
            Your Ride Companion
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide mb-4 transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>
            Royal Enfield Hunter 350
          </h2>
          <p className="max-w-2xl mx-auto transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>
            Why the Hunter 350 is the ideal partner for your road trips across India.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-xl border transition-all duration-500"
              style={{
                backgroundColor: 'var(--bg-primary)',
                borderColor: 'var(--border-color)',
              }}
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 transition-colors duration-500"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--accent) 20%, transparent)',
                  color: 'var(--accent)',
                }}
              >
                {feature.icon}
              </div>
              <h3 className="font-display text-xl mb-1 transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>{feature.title}</h3>
              <p className="font-semibold mb-2 transition-colors duration-500" style={{ color: 'var(--accent)' }}>{feature.value}</p>
              <p className="text-sm transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-16 p-8 rounded-2xl border transition-colors duration-500"
          style={{
            background: 'linear-gradient(135deg, color-mix(in srgb, var(--accent) 10%, transparent), color-mix(in srgb, var(--accent) 5%, transparent))',
            borderColor: 'color-mix(in srgb, var(--accent) 20%, transparent)',
          }}
        >
          <h3 className="font-display text-2xl mb-4 transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>Why Hunter 350 for Touring?</h3>
          <ul className="grid sm:grid-cols-2 gap-4" style={{ color: 'var(--text-secondary)' }}>
            <li className="flex items-start gap-2">
              <span className="mt-1" style={{ color: 'var(--accent)' }}>✓</span>
              <span>Agile handling on winding mountain roads and city traffic</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1" style={{ color: 'var(--accent)' }}>✓</span>
              <span>Robust build quality for long-distance reliability</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1" style={{ color: 'var(--accent)' }}>✓</span>
              <span>Classic retro styling that turns heads at every stop</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1" style={{ color: 'var(--accent)' }}>✓</span>
              <span>Wide service network across India for peace of mind</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
