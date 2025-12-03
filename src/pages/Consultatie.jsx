import React from 'react'
import PageHeader from '../components/PageHeader'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import CTASection from '../components/CTASection'
import { useLanguage } from '../contexts/LanguageContext'

const Consultatie = () => {
  const { t } = useLanguage()
  return (
    <>
      <PageHeader
        title={t('nav.services')}
        subtitle={t('programare.subtitle')}
        backgroundImage="assets/images/hero-images/AdobeStock_1649580010.jpeg"
      />
      <Services />
      <WhyChooseUs />
      <CTASection />
    </>
  )
}

export default Consultatie

