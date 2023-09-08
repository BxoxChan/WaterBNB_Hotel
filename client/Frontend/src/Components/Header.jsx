import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'


export const Header = () => {
  return (
    <>
    <div className='flex '>
        <Logo/>
        <Navbar/>
    </div>
    </>
  )
}
