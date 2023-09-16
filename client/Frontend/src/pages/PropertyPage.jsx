import React from 'react'
import { Header } from '../Components/Header'
import { Footer } from '../Components/Footer'
import PropertyDescription from '../Components/PropertyComponent/PropertyDescription'

const PropertyPage = () => {
  return (
    <div>
        <Header/>
        <PropertyDescription/>
      <Footer/>
    </div>
  )
}

export default PropertyPage