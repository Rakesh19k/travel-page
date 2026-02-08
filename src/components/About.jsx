export default function About() {
  return (
    <section id="about" className="relative py-24 overflow-hidden transition-colors duration-500" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      {/* About Section - Unique: Abstract rider/road curves */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="roadCurves" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path d="M0,100 Q50,50 100,100 T200,100" fill="none" stroke="var(--accent)" strokeWidth="1" />
              <path d="M0,150 Q100,100 200,150" fill="none" stroke="var(--accent)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#roadCurves)" />
        </svg>
      </div>
      {/* Circular accent */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-[0.03]"
        style={{ backgroundColor: 'var(--accent)' }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full opacity-[0.02]"
        style={{ backgroundColor: 'var(--accent-light)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-shrink-0">
            <div
              className="w-48 h-48 sm:w-64 sm:h-64 rounded-2xl overflow-hidden border-2 transition-colors duration-500"
              style={{
                borderColor: 'color-mix(in srgb, var(--accent) 30%, transparent)',
                backgroundColor: 'var(--bg-primary)',
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
                alt="Rider"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex-1">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 transition-colors duration-500"
              style={{
                backgroundColor: 'color-mix(in srgb, var(--accent) 20%, transparent)',
                color: 'var(--accent)',
              }}
            >
              About the Rider
            </span>
            <h2 className="font-display text-4xl sm:text-5xl tracking-wide mb-6 transition-colors duration-500" style={{ color: 'var(--text-primary)' }}>
              Passion for the Open Road
            </h2>
            <p className="text-lg mb-4 transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>
              Hi, I'm a passionate biker and travel enthusiast who believes that the best way to 
              explore India is on two wheels. Every weekend, you'll find me on the highway—whether 
              it's a quick escape to Coorg or a multi-day adventure to the Himalayas.
            </p>
            <p className="text-lg mb-6 transition-colors duration-500" style={{ color: 'var(--text-secondary)' }}>
              My Royal Enfield Hunter 350 has been my trusted companion through countless miles. 
              From coastal roads to mountain passes, we've seen it all together. This site is my 
              way of sharing those journeys and inspiring fellow riders to hit the road.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: 'var(--accent)' }}
            >
              Let's Ride Together
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
