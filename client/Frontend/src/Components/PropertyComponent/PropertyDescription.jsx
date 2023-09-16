import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {publicRequest} from '../../utils/requestMethods.js'
import CallIcon from '@mui/icons-material/Call';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Booking from '../Booking.jsx';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

const PropertyDescription = () => {
  const {id}=useParams();
  const [places,setPlaces]=useState('');
  useEffect(()=>{
   const getPlace=async()=>{
     const {data} = await publicRequest.get(`/residence/Residence/${id}`);
    // console.log(data);
     setPlaces(data);
   }
   getPlace();
  },[id])
  if(!places){
    return;
  }
  return (
    <div className=' mx-10 min-h-screen' >
         <h1 className='text-4xl font-bold mt-5'>{places.title}</h1>
         <div className='flex'>
          <PlaceOutlinedIcon className='text-pink-500'/>
         <p className='font-bold underline'>{places.address}</p>
         </div>
         <img className='my-5 ' src={places.image} alt="" />

        <div className='w-full  sm:flex '>

        <div className=' w-full sm:w-3/5 pr-5 '>
         
         <h1 className='text-4xl font-bold font-Ubuntu'>Description</h1>
         <p>{places.description}</p>
         <hr className='mx-10 my-6' />
          
          <div className='my-5'>
         <h1 className='text-4xl font-bold font-Ubuntu '>Facilities</h1>
         {places.facilities.map((faci)=>{
           return(
             <li className='list-none' >{faci}</li>
             )
            })
          }
          </div>
           
           <hr className='mx-10 my-6' />
          <div className=''>
           <h1 className='text-4xl font-bold font-Ubuntu '>Property Owner</h1>
           <div>
            <AccountCircleIcon className='text-gray-300'/>
            <span className='ml-2'>{places.ownerDetails.name}</span>
           </div>
           <div>
           <CallIcon />
           <span className='ml-2'>{places.ownerDetails.contact}</span>
           </div>
          </div>

        </div>

        {/* Booking Componenet */}
        <div className=' sm:w-2/5 '>
          <Booking price={places.price} id={places._id}/>
        </div>

        </div>

    </div>
  )
}

export default PropertyDescription