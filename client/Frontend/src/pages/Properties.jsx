import React from 'react'
import {Header} from '../Components/Header'
import {Footer} from '../Components/Footer'
import  Property  from '../Components/PropertyComponent/Properties' 
import SearchBar from '../Components/SearchBar'
export const Properties = () => {
  return (
    <div>
      <Header/>
      <SearchBar/>
       <Property/>
      <Footer/>
    </div>
  )
}
