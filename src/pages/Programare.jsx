import React from 'react'
import PageHeader from '../components/PageHeader'
import Appointment from '../components/Appointment'

const Programare = () => {
  return (
    <>
      <PageHeader 
        title="Programare" 
        subtitle="Rezervă o consultație"
        backgroundImage="assets/images/hero-images/AdobeStock_1013238345.jpeg"
      />
      <Appointment />
    </>
  )
}

export default Programare

