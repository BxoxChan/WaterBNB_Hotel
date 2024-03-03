import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("auth-User"));
 // console.log(user);
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
           <div className=' flex items-center gap-2'>
            <p className='font-bold'>{user.email}</p>
             <Link to={"/profile"}>
              <button className='text-white bg-pink-500 p-2 px-4 text-xl rounded-md font-semibold pl-5'>Profile<span className=''><PersonIcon/></span></button>
            </Link>
           </div>

          :(
            <div className='flex gap-5'>
          <Link to={"/register"}>
              <button className='text-white bg-blue1 p-2 px-4 text-xl rounded-md font-semibold pl-5'>{(user)?user.email:"Register"}</button>
          </Link>
          <Link to={"/login"}>
              <button className='text-white bg-pink-500 p-2 px-4 text-xl rounded-md font-semibold pl-5'>{"Login"}</button>
          </Link>

          </div>
          )
          }
        </div>
    </>
    
  )
}

export default Navbar