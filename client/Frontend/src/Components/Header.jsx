import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    <>
    <div className='flex shadow-md shadow-black/20 '>
        <Logo/>
        <Navbar/>
    </div>
    </>
  )
}
