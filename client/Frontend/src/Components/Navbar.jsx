import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='flex justify-between  list-none w-1/2 px-5 items-center text-xl '>
          <li>
          <Link to={"/properties"}>Properties</Link>
          </li>
          <li>About Us</li>
          <li>Contacts</li>
        </nav>
    
        <div className='w-1/4 flex justify-center items-center'>
          <Link to={"/register"}>
              <button className='text-white bg-blue1 p-2 px-4 text-xl rounded-md font-semibold pl-5'>Register</button>
          </Link>
        </div>
    </>
    
  )
}

export default Navbar