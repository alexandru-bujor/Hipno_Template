import React from 'react'
import PageHeader from '../components/PageHeader'
import Appointment from '../components/Appointment'
import { useLanguage } from '../contexts/LanguageContext'

const Programare = () => {
  const { t } = useLanguage()
  return (
    <>

      <Appointment />
    </>
  )
}

export default Programare

