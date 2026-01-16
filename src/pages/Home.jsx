import React from 'react'
import Hero from '../components/Hero'
import ProgramarePreview from '../components/ProgramarePreview'
import Services from '../components/Services'
import TalismanuriPreview from '../components/TalismanuriPreview'
import RitualuriPreview from '../components/RitualuriPreview'
import EsotericShop from '../components/EsotericShop'
import ContactePreview from '../components/ContactePreview'
import ServicesCard from "../components/ServicesContainer";
import DonationsPreview from "../components/DonationsPreview";

const Home = () => {
  return (
    <>
      <Hero />
      <ProgramarePreview />
      <ServicesCard />
      <DonationsPreview />
      <ContactePreview />
    </>
  )
}

export default Home

