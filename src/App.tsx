import React from 'react'
import Hero from './sections/Hero'
import Showcase from './sections/Showcase'
import NavBar from './components/NavBar'
import LogoSection from './components/LogoSection'
import FeatureCards from './sections/FeatureCards'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      <LogoSection />
      <FeatureCards />
    </>
  )
}

export default App