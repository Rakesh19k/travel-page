const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Destinations', href: '#destinations' },
  { name: 'Ride Details', href: '#ride-details' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer
      className="relative py-12 overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-color)',
      }}
    >
      {/* Footer - Unique: Subtle horizontal lines / road dividers */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="roadLines" width="120" height="40" patternUnits="userSpaceOnUse">
              <line x1="0" y1="20" x2="120" y2="20" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="4 8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#roadLines)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="flex items-center gap-2">
              <span className="font-display text-xl tracking-wider transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>
                Hunter<span style={{ color: 'var(--accent)' }}>350</span>
              </span>
            </a>
            <p className="text-sm transition-colors duration-500" style={{ color: 'var(--text-muted)' }}>
              © {new Date().getFullYear()} All rights reserved.
            </p>
            {/* <p className="text-sm transition-colors duration-500" style={{ color: 'var(--text-muted)' }}>
              Made with ❤️ & React
            </p> */}
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm transition-colors duration-300 hover:text-[var(--accent)]"
                style={{ color: 'var(--text-muted)' }}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
