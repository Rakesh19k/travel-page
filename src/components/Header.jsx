import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Destinations', href: '#destinations' },
  { name: 'Ride Details', href: '#ride-details' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Header({ showBackButton = false, onBackClick }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const [isMobileView, setIsMobileView] = useState(false)
  useEffect(() => {
    const check = () => setIsMobileView(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const showSolidHeader = isScrolled || isMobileView
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: showSolidHeader ? 'color-mix(in srgb, var(--bg-primary) 92%, transparent)' : 'transparent',
        backdropFilter: showSolidHeader ? 'blur(12px)' : 'none',
        boxShadow: showSolidHeader ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <svg
              className="w-10 h-10 text-[var(--accent)] group-hover:text-[var(--accent-light)] transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="5.5" cy="17.5" r="3.5" />
              <circle cx="18.5" cy="17.5" r="3.5" />
              <path d="M9 17.5h6M15 17.5l2-4h3l1.5 4" />
              <path d="M9 17.5l2-4h4l1.5 4" />
              <path d="M5.5 17.5l1.5-4h4" />
            </svg>
            <span className="font-display text-2xl tracking-wider text-[var(--text-primary)]">
              Hunter<span className="text-[var(--accent)]">350</span>
            </span>
          </a>

          {/* Desktop Navigation + Theme Toggle */}
          <div className="hidden md:flex items-center gap-6">
            {showBackButton && onBackClick && (
              <button
                onClick={onBackClick}
                className="flex items-center gap-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back
              </button>
            )}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile: Theme toggle + menu button */}
          <div className="flex md:hidden items-center gap-2">
            {showBackButton && onBackClick && (
              <button
                onClick={onBackClick}
                className="p-2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                aria-label="Go back"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
            )}
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-[var(--border-color)] animate-in fade-in slide-in-from-top-2 duration-300">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
