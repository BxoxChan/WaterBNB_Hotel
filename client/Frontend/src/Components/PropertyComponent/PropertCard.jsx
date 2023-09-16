import React from 'react'
import { useNavigate } from 'react-router-dom'

function PropertCard(prop) {
  const navigate=useNavigate();
  return (
    <div className=' rounded-md sm:h-96 sm:w-96 font-Ubuntu' onClick={()=>(navigate(`/properties/${prop.id}`))}>
        <img src={prop.img} alt=""  className=' h-3/4 w-full rounded-md p-1 hover:p-0 duration-100 ease-in'/>
        <div className='mx-2'>
        <h1 className='text-gray-600 font-bold'>{prop.name}</h1>
        <p>{prop.address}</p>
        <p className='font-semibold text-2xl'>{"₹"+prop.price}</p>
        </div>
    </div>
  )
}

export default PropertCard