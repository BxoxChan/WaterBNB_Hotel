import React from 'react'
import { Header } from '../Components/Header'
import {Intro} from '../Components/Intro'
import Galary from '../Components/Galary'
import { Facilities } from '../Components/Facilities'
import { Footer } from '../Components/Footer'


export const Home = () => {
  return (
    <div>
        <Header/>
        <Intro/>
        <Galary/>
        <Facilities/>
        <Footer/>
    </div>
  )
}
