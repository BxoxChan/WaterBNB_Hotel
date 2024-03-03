import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function PropertyCardImg(prop) {
  const navigate=useNavigate();
  return (
    <div className='rounded-md sm:h-64  sm:w-96 font-Ubuntu  relative' >
        <img src={prop.img} alt=""  className='h-full w-full rounded-md  hover:p-0 duration-100 ease-in'/>
        <div className='rounded-md w-full absolute bottom-0 sm:h-full backdrop-brightness-75 flex flex-col items-start justify-end pl-5 cursor-pointer' onClick={()=>(navigate(`/properties`))} >
        <h1 className='font-bold text-white text-xl z-10' >{prop.name}</h1>
        </div>
        </div>

  )
}
