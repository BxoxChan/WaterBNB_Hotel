import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

const Navbar = () => {
  //const {user}=useContext(UserContext);
  const user = localStorage.getItem("auth-User")
  //const [persist,setPersist]=useState(null);
  return (
    <>
        <nav className='flex justify-between  list-none w-1/2 px-5 items-center text-xl '>
          <li className='hover:border-b-2 hover:border-black visited:border-b-2 visited:border-black'>
          <Link to={"/properties"}>Properties</Link>
          </li>
          <li className='hover:border-b-2 hover:border-black'>About Us</li>
          <li className='hover:border-b-2 hover:border-black'>Contacts</li>
        </nav>
    
        <div className='w-1/4 flex justify-center items-center'>
          {
           (user !=null)?
            <Link to={"/profile"}>
              <button className='text-white bg-pink-500 p-2 px-4 text-xl rounded-md font-semibold pl-5'>Profile</button>
            </Link>
          :(
          <Link to={"/register"}>
              <button className='text-white bg-blue1 p-2 px-4 text-xl rounded-md font-semibold pl-5'>{(user)?user.email:"Register"}</button>
          </Link>
          )
          }
        </div>
    </>
    
  )
}

export default Navbar