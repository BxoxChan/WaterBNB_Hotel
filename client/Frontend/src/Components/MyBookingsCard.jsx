import { format } from 'date-fns'
import React from 'react'

function MyBookingsCard({price,guest,checkIn,checkOut,image,title}) {
  return (
    <div className=' border-2 border-black w-1/2 flex my-5 bg-white sm:rounded-md'>
          <div className='w-1/5 m-2 flex justify-center items-center'><img src={image} alt="place" /></div> {/*img */}
          <div className='w-4/5 pl-5'>
            <h1 className=''>{title}</h1>
          <h2 className='text-xl text-gray-400'>{"₹" + price}</h2>
          <div><span>No. of Guests :</span> <span>{guest}</span></div>
          <p>{format(new Date(checkIn),'yyyy-MM-dd') }{' -> '}{format(new Date(checkOut),'yyyy-MM-dd')}</p>
          </div>
          {/* <h1 className='text-5xl text-black text-center font-semibold'>Comming Soon...</h1> */}
    </div>
  )
}

export default MyBookingsCard