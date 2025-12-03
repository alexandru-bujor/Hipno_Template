import React from 'react'
import PageHeader from '../components/PageHeader'
import Appointment from '../components/Appointment'
import { useLanguage } from '../contexts/LanguageContext'

const Contacte = () => {
  const { t } = useLanguage()
  return (
    <>
      <PageHeader
        backgroundImage="assets/images/hero-images/AdobeStock_267533248.jpeg"
      />
      <Appointment />
    </>
  )
}

export default Contacte

