import { useEffect, useRef, useState } from 'react'

export default function GraphicSection() {
  const sectionRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        if (rect.top < windowHeight) {
          setScrollY((windowHeight - rect.top) * 0.3)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden transition-colors duration-500"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      {/* Graphic Section - Unique: Mountain/road parallax scene */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25 transition-opacity duration-500"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80)',
          filter: 'saturate(0.8)',
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />
      <div
        className="absolute inset-0 transition-colors duration-500"
        style={{
          background: 'linear-gradient(to bottom, color-mix(in srgb, var(--bg-primary) 80%, transparent), color-mix(in srgb, var(--bg-primary) 60%, transparent), var(--bg-primary))',
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
      
      {/* Mountain silhouette overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-64 transition-colors duration-500"
        style={{
          background: `linear-gradient(to top, var(--bg-secondary), transparent)`,
          transform: `translateY(${scrollY * -0.15}px)`,
        }}
      />

      {/* Road line accent - animated */}
      <div
        className="absolute bottom-1/3 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(to right, transparent, var(--accent), transparent)`,
          opacity: 0.5,
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      {/* Geometric sun/rise shape */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-[0.03]"
        style={{
          background: `radial-gradient(circle, var(--accent) 0%, transparent 70%)`,
          transform: `translate(-50%, calc(-50% + ${scrollY * 0.05}px))`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <blockquote className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-wide leading-tight transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>
          "Life is short.
          <br />
          <span style={{ color: 'var(--accent)' }}>Take the long route.</span>"
        </blockquote>
        <p className="mt-6 text-lg transition-colors duration-500" style={{ color: 'var(--text-muted)' }}>
          — Every rider, everywhere
        </p>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 60%, transparent)' }} />
      <div className="absolute top-40 right-20 w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: 'color-mix(in srgb, var(--accent-light) 40%, transparent)', animationDelay: '1s' }} />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 50%, transparent)', animationDelay: '0.5s' }} />
    </section>
  )
}
