import Hero from './sections/Hero'
import Showcase from './sections/Showcase'
import NavBar from './components/NavBar'
import RepoBanner from './components/RepoBanner'
import LogoSection from './components/LogoSection'
import FeatureCards from './sections/FeatureCards'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <RepoBanner />
      <Hero />
      <Showcase />
      <LogoSection />
      <FeatureCards />
      <TechStack />
      <Contact />
      <Footer />
    </>
  )
}

export default App