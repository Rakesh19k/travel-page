import { useState, useEffect, useCallback } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function DestinationDetails({ destination, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const images = destination?.sliderImages || []

  const handleClose = useCallback(() => {
    setIsVisible(false)
    setTimeout(onClose, 300)
  }, [onClose])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') handleClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [handleClose])

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [images.length])

  if (!destination) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col transition-opacity duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <Header showBackButton onBackClick={handleClose} />

      {/* Scrollable content - slider scrolls with page */}
      <main className="flex-1 overflow-y-auto pt-16 md:pt-20">
        {/* Image Slider - part of scroll */}
        <div className="relative w-full h-[45vh] min-h-[320px] md:h-[55vh] overflow-hidden mb-6">
          {images.length > 0 ? (
            <>
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${
                    index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${destination.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent"
                    style={{ opacity: 0.6 }}
                  />
                </div>
              ))}
              {/* Slider indicators - positioned inside slider with pill background, no overlap */}
              <div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 px-4 py-2 rounded-full backdrop-blur-md"
                style={{
                  backgroundColor: 'color-mix(in srgb, var(--bg-primary) 60%, transparent)',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
                }}
              >
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => { e.stopPropagation(); setCurrentSlide(index) }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'w-8' : 'w-2'
                    }`}
                    style={{
                      backgroundColor: index === currentSlide ? 'var(--accent)' : 'color-mix(in srgb, var(--text-primary) 40%, transparent)',
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              {/* Prev/Next arrows */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); setCurrentSlide((prev) => (prev - 1 + images.length) % images.length) }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--bg-primary) 70%, transparent)',
                      color: 'var(--accent)',
                    }}
                    aria-label="Previous slide"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); setCurrentSlide((prev) => (prev + 1) % images.length) }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{
                      backgroundColor: 'color-mix(in srgb, var(--bg-primary) 70%, transparent)',
                      color: 'var(--accent)',
                    }}
                    aria-label="Next slide"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </>
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ backgroundColor: 'var(--bg-secondary)' }}
            >
              <span style={{ color: 'var(--text-muted)' }}>No images</span>
            </div>
          )}
        </div>

        {/* Destination title overlay on slider */}
        <div className="relative -mt-24 z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide drop-shadow-lg animate-fadeInUp"
              style={{ color: 'var(--text-primary)' }}
            >
              {destination.name}
            </h1>
          </div>
        </div>

        {/* Content area with background graphics - extra top spacing to avoid dot overlap */}
        <div className="relative mt-4 pt-12 pb-16">
          {/* Background graphics - enhanced floating shapes & patterns */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 right-0 w-72 h-72 rounded-full opacity-[0.05] blur-3xl animate-floatBlob" style={{ backgroundColor: 'var(--accent)' }} />
            <div className="absolute bottom-40 left-0 w-96 h-96 rounded-full opacity-[0.04] blur-3xl animate-floatBlob" style={{ backgroundColor: 'var(--accent-light)', animationDelay: '2s' }} />
            <div className="absolute top-1/3 left-1/4 w-48 h-48 rounded-full opacity-[0.03] blur-2xl animate-floatBlob" style={{ backgroundColor: 'var(--accent)', animationDelay: '4s' }} />
            <svg className="absolute top-1/4 right-10 w-24 h-24 opacity-5 animate-slowSpin" viewBox="0 0 100 100" fill="none" stroke="var(--accent)" strokeWidth="1">
              <circle cx="50" cy="50" r="40" />
              <path d="M50 10 L50 90 M10 50 L90 50 M25 25 L75 75 M75 25 L25 75" />
            </svg>
            <svg className="absolute bottom-1/4 left-20 w-16 h-16 opacity-[0.04]" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <div className="absolute top-1/2 left-10 w-2 h-2 rounded-full opacity-30 animate-pulse" style={{ backgroundColor: 'var(--accent)' }} />
            <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full opacity-20 animate-pulse" style={{ backgroundColor: 'var(--accent-light)', animationDelay: '1s' }} />
            <div className="absolute top-2/3 right-16 w-2 h-2 rounded-full opacity-15 animate-pulse" style={{ backgroundColor: 'var(--accent)', animationDelay: '0.5s' }} />
            <div className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full opacity-10 animate-floatBlob" style={{ backgroundColor: 'var(--accent-light)' }} />
            {/* Animated road/route line */}
            <svg className="absolute top-0 left-0 right-0 w-full h-24 opacity-[0.06]" viewBox="0 0 1200 100" preserveAspectRatio="none">
              <path d="M0,50 Q300,30 600,50 T1200,50" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="8 8" className="animate-dashMove" />
            </svg>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Quick stats - animated cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {[
                { label: 'Distance', value: `${destination.distance} km`, icon: '📍' },
                { label: 'Travel Time', value: destination.travelTime, icon: '⏱️' },
                { label: 'Best Season', value: destination.bestSeason, icon: '🌤️' },
                { label: 'Difficulty', value: destination.difficulty, icon: '🛣️' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl border transition-all duration-500 hover:scale-105 hover:-translate-y-1 animate-slideUp"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    borderColor: 'var(--border-color)',
                    animationDelay: `${i * 0.1}s`,
                  }}
                >
                  <span className="text-2xl mb-1 block">{stat.icon}</span>
                  <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-muted)' }}>
                    {stat.label}
                  </p>
                  <p className="font-display text-xl" style={{ color: 'var(--accent)' }}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Description with graphic - enhanced */}
            <div
              className="relative p-8 md:p-10 rounded-2xl mb-12 overflow-hidden animate-slideUp"
              style={{
                background: 'linear-gradient(135deg, color-mix(in srgb, var(--accent) 10%, transparent), color-mix(in srgb, var(--accent) 5%, transparent))',
                border: '1px solid color-mix(in srgb, var(--accent) 25%, transparent)',
                animationDelay: '0.2s',
              }}
            >
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 blur-2xl" style={{ backgroundColor: 'var(--accent)' }} />
              <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full opacity-5" style={{ backgroundColor: 'var(--accent)' }} />
              <div className="absolute top-4 left-4 w-12 h-px opacity-30" style={{ backgroundColor: 'var(--accent)' }} />
              <p className="relative text-lg md:text-xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {destination.description}
              </p>
            </div>

            {/* Additional Details - Riding Tips, Stay, Road, Pack */}
            {(destination.ridingTips || destination.suggestedStay || destination.roadCondition || destination.mustPack) && (
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {destination.ridingTips && (
                  <div
                    className="group relative p-6 rounded-2xl border overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl animate-slideUp"
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--border-color)',
                      animationDelay: '0.25s',
                    }}
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: 'var(--accent)' }} />
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🏍️</span>
                      <h3 className="font-display text-xl" style={{ color: 'var(--text-primary)' }}>Riding Tips</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{destination.ridingTips}</p>
                  </div>
                )}
                {destination.suggestedStay && (
                  <div
                    className="group relative p-6 rounded-2xl border overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl animate-slideUp"
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--border-color)',
                      animationDelay: '0.3s',
                    }}
                  >
                    <div className="absolute bottom-0 left-0 w-16 h-16 opacity-5 group-hover:opacity-10 transition-opacity" style={{ backgroundColor: 'var(--accent)' }} />
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">📅</span>
                      <h3 className="font-display text-xl" style={{ color: 'var(--text-primary)' }}>Suggested Stay</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{destination.suggestedStay}</p>
                  </div>
                )}
                {destination.roadCondition && (
                  <div
                    className="group relative p-6 rounded-2xl border overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl animate-slideUp"
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--border-color)',
                      animationDelay: '0.35s',
                    }}
                  >
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent)' }} />
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🛣️</span>
                      <h3 className="font-display text-xl" style={{ color: 'var(--text-primary)' }}>Road Condition</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{destination.roadCondition}</p>
                  </div>
                )}
                {destination.mustPack && (
                  <div
                    className="group relative p-6 rounded-2xl border overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-xl animate-slideUp"
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--border-color)',
                      animationDelay: '0.4s',
                    }}
                  >
                    <div className="absolute top-0 left-0 w-24 h-1 rounded-r" style={{ backgroundColor: 'var(--accent)' }} />
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-2xl">🎒</span>
                      <h3 className="font-display text-xl" style={{ color: 'var(--text-primary)' }}>Must Pack</h3>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{destination.mustPack}</p>
                  </div>
                )}
              </div>
            )}

            {/* Section divider with graphic */}
            <div className="relative py-8 mb-4">
              <div className="absolute left-1/2 -translate-x-1/2 w-32 h-px" style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 30%, transparent)' }} />
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent)' }} />
            </div>

            {/* Best Places to Visit */}
            <div className="mb-12">
              <h2
                className="font-display text-3xl md:text-4xl mb-2 animate-slideUp"
                style={{ color: 'var(--text-primary)', animationDelay: '0.3s' }}
              >
                Best Places to Visit
              </h2>
              <p className="mb-8 animate-slideUp" style={{ color: 'var(--text-muted)', animationDelay: '0.35s' }}>
                Top attractions and must-see spots in {destination.name}
              </p>

              <div className="space-y-6">
                {destination.bestPlaces?.map((place, index) => (
                  <div
                    key={place.name}
                    className="group relative rounded-2xl border p-6 md:p-8 overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl hover:shadow-[var(--accent)]/5 animate-slideUp"
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      borderColor: 'var(--border-color)',
                      animationDelay: `${0.4 + index * 0.08}s`,
                    }}
                  >
                    {/* Decorative corner accent */}
                    <div
                      className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-15 transition-opacity"
                      style={{
                        background: 'linear-gradient(135deg, transparent 50%, var(--accent) 50%)',
                        borderBottomLeftRadius: '9999px',
                      }}
                    />
                    <div
                      className="absolute top-4 right-4 w-16 h-16 rounded-full flex items-center justify-center font-display text-2xl opacity-20 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300"
                      style={{ backgroundColor: 'var(--accent)', color: 'white' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ backgroundColor: 'var(--accent)' }}
                    />
                    <h3
                      className="font-display text-2xl mb-3 group-hover:text-[var(--accent)] transition-colors duration-300 pr-20"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {place.name}
                    </h3>
                    <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {place.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {place.highlights?.split(', ').map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full text-sm transition-transform duration-300 hover:scale-105"
                          style={{
                            backgroundColor: 'color-mix(in srgb, var(--accent) 15%, transparent)',
                            color: 'var(--accent)',
                            border: '1px solid color-mix(in srgb, var(--accent) 30%, transparent)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA - enhanced */}
            <div
              className="text-center p-8 md:p-12 rounded-2xl border overflow-hidden relative animate-slideUp"
              style={{
                background: 'linear-gradient(135deg, color-mix(in srgb, var(--accent) 12%, transparent), color-mix(in srgb, var(--accent) 5%, transparent))',
                borderColor: 'color-mix(in srgb, var(--accent) 30%, transparent)',
                animationDelay: '0.8s',
              }}
            >
              <div className="absolute inset-0 opacity-[0.03]">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <pattern id="ctaPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="10" cy="10" r="1" fill="var(--accent)" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#ctaPattern)" />
                </svg>
              </div>
              <p className="font-display text-2xl md:text-3xl mb-4 relative" style={{ color: 'var(--text-primary)' }}>
                Ready to ride to {destination.name}?
              </p>
              <p className="mb-8 relative" style={{ color: 'var(--text-secondary)' }}>
                Pack your gear, fuel up your Hunter 350, and hit the road.
              </p>
              <button
                onClick={handleClose}
                className="relative px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[var(--accent)]/30"
                style={{ backgroundColor: 'var(--accent)' }}
              >
                Back to Destinations
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </main>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        .animate-slideUp {
          animation: slideUp 0.7s ease-out both;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        .animate-floatBlob {
          animation: floatBlob 8s ease-in-out infinite;
        }
        @keyframes slowSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-slowSpin {
          animation: slowSpin 30s linear infinite;
        }
        @keyframes dashMove {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -16; }
        }
        .animate-dashMove {
          animation: dashMove 3s linear infinite;
        }
        @keyframes shimmer {
          0% { opacity: 0.5; transform: translateX(-100%); }
          100% { opacity: 1; transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
