import { useTheme } from '../context/ThemeContext'
import { bikeIamges } from '../data/destinations'

export default function Hero() {
  const { theme } = useTheme()

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Hero Section - Unique background: Road/Wind graphic */}
      <div className="absolute inset-0 bg-[var(--bg-primary)] transition-colors duration-500" />
      <div
        className="absolute inset-0 opacity-40 transition-opacity duration-500"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, #1a0f05 0%, #0a0a0a 50%, #0d1a0a 100%)'
            : 'linear-gradient(135deg, #fff7ed 0%, #f8fafc 50%, #f0fdf4 100%)',
        }}
      />
      
      {/* Animated curved road lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--accent-light)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <path
          d="M0,400 Q200,350 400,400 T800,400 T1200,350 T1600,400 L1920,400 L1920,1080 L0,1080 Z"
          fill="url(#roadGradient)"
          className="animate-pulse"
        />
        <path
          d="M0,500 Q300,450 600,500 T1200,500 T1800,450 L1920,500"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1"
          strokeOpacity="0.15"
          className="animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />
      </svg>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent)]/20 rounded-full blur-[120px] animate-pulse transition-colors duration-500" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--accent-light)]/15 rounded-full blur-[100px] animate-pulse transition-colors duration-500" style={{ animationDelay: '1s' }} />
      
      {/* Road horizon line */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[var(--accent)]/10 to-transparent transition-colors duration-500" />
      <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-12 items-center">
          <div className="space-y-5 sm:space-y-6 lg:space-y-8 lg:pr-0">
            <div className="inline-block">
              <span
                className="px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-500"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--accent) 20%, transparent)',
                  color: 'var(--accent)',
                  borderColor: 'color-mix(in srgb, var(--accent) 30%, transparent)',
                }}
              >
                Royal Enfield Hunter 350
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-none text-[var(--text-primary)] tracking-wide transition-colors duration-500">
              Ride Beyond Roads.
              <br />
              <span className="text-[var(--accent)]">Discover India</span>
              <br />
              on Two Wheels.
            </h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl transition-colors duration-500">
              Feel the freedom of the open road. Long rides, winding highways, and the thrill of 
              adventure await. Your Hunter 350 is built for the journey—every mile tells a story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#destinations"
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--accent)] hover:opacity-90 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[var(--accent)]/30"
              >
                Explore Destinations
              </a>
              <a
                href="#ride-details"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-[var(--accent)] text-[var(--accent)] hover:opacity-80 font-semibold rounded-lg transition-all duration-300"
                style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 10%, transparent)' }}
              >
                Plan a Ride
              </a>
            </div>
          </div>
          
          {/* Bike gallery - corner-overlap only, visible on all screen sizes */}
          <div className="relative block w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto mt-8 sm:mt-10 lg:mt-0">
            <div className="relative w-full aspect-[4/3] min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[380px]">
              {bikeIamges?.map((item, i) => (
                <div key={i} className={item.className} style={item.style}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className={item.imgClass}
                    style={{
                      filter: theme === 'dark' ? 'brightness(0.95) contrast(1.05)' : 'brightness(1) contrast(1.02)',
                    }}
                  />
                </div>
              ))}
              <div
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 blur-3xl rounded-full transition-colors duration-500 pointer-events-none z-0"
                style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 25%, transparent)' }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce pt-10 sm:pt-12">
        <a href="#destinations" className="flex flex-col items-center text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-300">
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  )
}
