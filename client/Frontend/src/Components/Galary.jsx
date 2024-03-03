import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PropertyCardImg from './PropertyComponent/PropertyCardImg';


const Galary = () => {
  let i=0;
  const [property,setProperty]=useState([]);
  useEffect(()=>{
    const fetchData=async()=>{
        const data= await axios.get("http://localhost:5000/app/residence/Residence").then((data)=>{
            const properties=data.data;
          // console.log(properties);
            setProperty(properties);
        }).catch((e)=>{
            console.log(e);
        })
    }
    fetchData();
  },[])
  const someproperties = property?.slice(0,6);
 // console.log(someproperties);
  return (
    <div className=''>
        <header className='text-blue1 text-4xl font-bold flex justify-center my-10'>Galary</header>
        

        <div className='grid grid-cols-3  gap-5  h-fit justify-items-center bg-gray-100'>
         {
          someproperties?.map((prop)=>(
            <PropertyCardImg 
             key={prop._id}
             name={prop.title} 
             img={prop.image}
            />
          ))}
          
         </div>
         
    </div>
  )
}

export default Galary