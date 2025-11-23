import React from 'react'
import Hero from '../components/Hero'
import ProgramarePreview from '../components/ProgramarePreview'
import Services from '../components/Services'
import TalismanuriPreview from '../components/TalismanuriPreview'
import RitualuriPreview from '../components/RitualuriPreview'
import Blog from '../components/Blog'
import ContactePreview from '../components/ContactePreview'

const Home = () => {
  return (
    <>
      <Hero />
      <ProgramarePreview />
      <Services />
      <TalismanuriPreview />
      <RitualuriPreview />
      <Blog />
      <ContactePreview />
    </>
  )
}

export default Home

