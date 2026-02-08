import Header from './components/Header'
import Hero from './components/Hero'
import Destinations from './components/Destinations'
import RideDetails from './components/RideDetails'
import GraphicSection from './components/GraphicSection'
import About from './components/About'
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Destinations />
        <RideDetails />
        <GraphicSection />
        <About />
        <SocialLinks />
        <Footer />
      </main>
    </div>
  )
}

export default App
