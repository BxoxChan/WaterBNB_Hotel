import React from 'react'
import intro from '../../intro.jpg'

function PropertCard({name,address,city,img,price}) {
  return (
    <div className='border-2 border-black '>
        <img src={img} alt="" />
        <h1>{name}</h1>
        <p>{city+","+address}</p>
        <p>{"₹"+price}</p>
    </div>
  )
}

export default PropertCard