import React from 'react'
import image1 from "../intro.jpg"

export const Intro = () => {
  return (
    <div className="overflow-x-hidden ">
    <div className='relative'>
      <div className='flex justify-center'>
      <img src={image1} alt="" className='w-4/5 rounded-md brightness-50'/>
      </div>
    <div className='absolute top-0 left-36 text-white mt-24'>
       <span className='text-8xl mb-2'>
        <p className='text-white font-bold text-6xl'>Enjoy Your Vecations in our</p>
       <p className='text-blue1 font-bold'>luxurious Homes</p>
       </span>
       
       <p className='w-1/2 mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nobis reprehenderit quibusdam animi expedita nostrum aperiam esse, incidunt omnis laudantium modi nesciunt facere vero ad et repellat illo, perferendis ipsa.</p>

       <div className='mt-10'>
        <button className='text-white bg-blue-600 p-2 px-4 text-2xl rounded-md font-semibold'>View Property</button>
       </div>

    </div>
    </div>
    </div>
  )
}
