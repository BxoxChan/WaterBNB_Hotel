import React from 'react'
import wifi from '../WIFI2.png'
import swimming from '../Swimming2.png'
import gym from '../GYM2.png'
import food from '../Food2.png'
import massage from '../Massage.png'


export const Facilities = () => {
  return (
    <div className='flex mt-24 h-fit '>
       <div className='flex-1  flex flex-col  items-start pl-5'>
        <header className='text-5xl mt-10'>The Services we Provide</header>
        <header className='text-6xl text-blue1 my-4'>know Everything</header>

        <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tempore magni tenetur nostrum accusamus placeat quam quidem architecto! Quis unde maiores eius soluta magnam magni ipsam laudantium corrupti excepturi odio!</p>
       </div>
       <div className='flex-1  flex h-1/2 '>
        <div className='flex-1  flex flex-col items-center '>
        <img src={wifi} className='bg-blue1 px-5 py-7 rounded-lg my-2' alt="" />
        <img src={swimming} alt="" className='bg-white  px-5 py-7 mt-5 border shadow-shadowCust' />
        </div>
        <div className='flex-1 mt-20 pl-10'>
        <img src={gym} alt="" className='bg-white  px-5 py-7 rounded-lg  border shadow-shadowCust' />
        <img src={food} alt="" className='bg-white  px-5 py-7 w-40 my-10 border shadow-shadowCust' />
        </div>
        <div className='flex-1  mr-5'>
        <img src={massage} alt="" className='bg-white  py-6 w-32 mt-48 rounded-lg  border shadow-shadowCust' />
        </div>
       </div>
    </div>
  )
}
