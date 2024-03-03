import React, { useEffect, useState } from 'react'
import { bookingRequest } from '../utils/requestMethods'
import MyBookingsCard from './MyBookingsCard'
import axios from 'axios';

function  MyBookings()  {
  const [booking,setBooking]=useState([]);
  const [property,setProperty]=useState([]);

  
  const localUser=JSON.parse(localStorage.getItem("auth-User"));
  const userId=localUser._id;
  
      // To be corrected
     useEffect(()=>{
        const fetchBookings=async()=>{
          const bookingData = await bookingRequest.get('/booked').then((response)=>{
          setBooking(response.data.bookingRes);
         // console.log(response);
          }).catch((e)=>{
         console.log(e);
         });
        }
        fetchBookings();
     },[])




    // const {bookingData} = bookingRequest.get('/booked').then((response)=>{
    //      console.log(response);
    // }).catch((e)=>{
    //     console.log(e);
    // });
    // console.log(bookingData);
  return (
    <div className=' flex flex-col items-center sm:w-4/5 sm:mx-auto bg-pink-300 sm:h-80 overflow-y-scroll rounded-md '>
      { booking.filter((data)=>{
        return data.user===userId ;
      }).map((data)=>{
        return (
          <MyBookingsCard key={data._id} price={data.totalPrice} guest={data.guests} checkIn={data.checkIn} checkOut={data.checkOut} image={data.place.image} title={data.place.title}/>
        )
      }).reverse()
      }
    </div>
  )
}

export default MyBookings