import React from 'react'
import PageHeader from '../components/PageHeader'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import CTASection from '../components/CTASection'

const Consultatie = () => {
  return (
    <>
      <PageHeader 
        title="Consultație" 
        subtitle="Servicii personalizate"
        backgroundImage="/assets/images/hero-images/AdobeStock_1649580010.jpeg"
      />
      <Services />
      <WhyChooseUs />
      <CTASection />
    </>
  )
}

export default Consultatie

