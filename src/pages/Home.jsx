import React from 'react'
import Hero from '../components/Hero'
import ProgramarePreview from '../components/ProgramarePreview'
import Services from '../components/Services'
import TalismanuriPreview from '../components/TalismanuriPreview'
import RitualuriPreview from '../components/RitualuriPreview'
import EsotericShop from '../components/EsotericShop'
import ContactePreview from '../components/ContactePreview'

const Home = () => {
  return (
    <>
      <Hero />
      <ProgramarePreview />
      <Services />
      <TalismanuriPreview />
      <RitualuriPreview />
      <EsotericShop />
      <ContactePreview />
    </>
  )
}

export default Home

