import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logo = () => {
  const navigate=useNavigate();
  return (
        <div className='text-5xl font-bold text-blue1 sm:w-1/4 sm:ml-10 py-2 cursor-pointer ' onClick={()=>{navigate('/')}}>
        Logo
       </div>
  )
}

export default Logo