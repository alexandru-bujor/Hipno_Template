import React from 'react'
import PageHeader from '../components/PageHeader'
import Appointment from '../components/Appointment'
import { useLanguage } from '../contexts/LanguageContext'

const Programare = () => {
  const { t } = useLanguage()
  return (
    <>
      <PageHeader
        backgroundImage="assets/images/hero-images/AdobeStock_1013238345.jpeg"
      />
      <Appointment />
    </>
  )
}

export default Programare

