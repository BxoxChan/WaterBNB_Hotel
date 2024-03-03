import React from 'react'
import image1 from "../intro.jpg"
import { useNavigate } from 'react-router-dom'

export const Intro = () => {
  const navigate=useNavigate();
  return (
    <div className=" mt-5">
    <div className='flex w-full '>
      <div className='w-3/5 flex-1 p-2'>
      <img src={image1} alt="" className='w-full rounded-md brightness'/>
      </div>

    <div className=' text-black  flex-1 pl-5'>
       <span className='text-8xl mb-2'>
        <p className='text-black font-bold text-6xl'>Enjoy Your Vecations in our</p>
       <p className='text-blue1 font-bold '>luxurious Homes</p>
       </span>
       
       <p className='w-4/5 mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nobis reprehenderit quibusdam animi expedita nostrum aperiam esse, incidunt omnis laudantium modi nesciunt facere vero ad et repellat illo, perferendis ipsa.</p>

      <button className='text-black bg-blue-600 p-2 px-4 text-2xl rounded-md font-semibold my-2' onClick={()=>{navigate('/properties')}}>View Property</button>
       
    </div>

    </div>
    </div>
  )
}
