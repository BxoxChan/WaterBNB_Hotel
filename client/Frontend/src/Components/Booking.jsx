import React, { useContext, useEffect, useState } from 'react'
import {differenceInCalendarDays} from "date-fns"
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import  {bookingRequest}  from '../utils/requestMethods.js';
import axios from 'axios';

const Booking = (places) => {
      //const {user}=useContext(UserContext);
        const user = JSON.parse(localStorage.getItem('auth-User'));
       const navigate=useNavigate();
    const [guests,setGuests]=useState(1);
    const [phnumber,setPhnumber]=useState('');
    //const [userName,setUserName]=useState(user?user.userDetails.username:'');
    const [userName,setUserName]=useState(user?user.username:'');
    const [checkInDate,setcheckInDate]=useState(
        new Date().toISOString().slice(0,10)
    );
    const [checkOutDate,setcheckOutDate]=useState("")
  const [numberOfNights, setNumberOfNights] = useState(0);
  //const [booking,setBooking]=useState({});    
    // const [bookingData,setBookingData]=useState({
    //     guests:1,
    //     phnumber:'',
    //     userName:'',
    // });
   // const {guests,phnumber,userName}=bookingData;
  

   useEffect(()=>{
    setNumberOfNights(
        differenceInCalendarDays(new Date(checkOutDate),new Date(checkInDate))
    )
   },[checkOutDate,checkInDate]);

   const notloginUser=()=>{
    toast.error('Please Login for Booking');
    navigate('/login')
   }

   const bookingHandler=(e)=>{
    e.preventDefault();
    const addBooking = async()=>
    {

      try{
       const booking= await bookingRequest.post("/",{
            place:places.id,
            username:userName,
            user:user._id,
            phone:phnumber,
            guests,
            checkIn:checkInDate,
            checkOut:checkOutDate,
            numberOfNights,
            totalPrice:numberOfNights * guests * places.price
          }
        ) ;
         
          toast.success("Booked successfully");
        //   console.log({
        //     property_id:places.id,
        //     user:user._id,
        //     userName,phnumber,guests,checkInDate,checkOutDate,numberOfNights,
        //     totalPrice:numberOfNights * places.price,
        // });
         }
        //console.log({booking});
        //setBooking({});
        
          
      catch(error){
        toast.error(" not booked!")
          console.log(error);
      }
    //   }finally{
    //     //setBooking({});
    //   }
        // console.log({
        //     property_id:places.id,
        //     userName,phnumber,guests,checkInDate,checkOutDate,numberOfNights,
        //     totalPrice:numberOfNights * places.price,
        // });
    }
    addBooking();
   }
  return (
    <div className='mx-15  px-10 rounded-md shadow-shadowTwo'>
        <div className='flex justify-center '> 
            <h1 className='font-bold text-3xl'>Price: ₹ {places.price}/per night</h1>
        </div>

        <form onSubmit={bookingHandler}>
            <div className='sm:flex justify-around my-5'>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>Check-in:</label>
                    <input type="date" name="checkInDate" value={checkInDate}  onChange={(e)=>{
                       (e.target.value < checkInDate)? setcheckInDate(new Date().toISOString().slice(0,10)): setcheckInDate(e.target.value);
                    }}/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='font-bold'>Check-out:</label>
                    <input type="date" name="checkOutDate" value={checkOutDate} onChange={(e)=>{
                        (e.target.value <=checkInDate)?setcheckOutDate(checkInDate):setcheckOutDate(e.target.value)
                    }}/>
                </div>
                
            </div>
            <hr />
            <div className='flex flex-col mt-5'>
                <label className='font-bold text-2xl' htmlFor="">Number of guests:</label>
                <input className='border border-gray-200 p-2 outline-none' value={guests} type='number' onChange={(e)=>{
                    if(e.target.value>0)
                    setGuests(e.target.value)
                }}/>
            </div>
            <div className='flex flex-col my-2'>
               <label htmlFor="" className='font-bold text-2xl'>Your full name:</label> 
               <input type="text" className='border border-gray-200 p-2 outline-none' value={userName} onChange={(e)=>{
                setUserName(e.target.value)
               }}/>
            </div>
            <div className='flex flex-col mt-2'>
               <label htmlFor="" className='font-bold text-2xl'>Phone number:</label> 
               <input  type="number"  className='border border-gray-200 p-2 outline-none'  value={phnumber} onChange={(e)=>{
                setPhnumber(e.target.value)
               }}/>
            </div>

            <div className='flex justify-center'>
          <button type='submit' onClick={user?bookingHandler:notloginUser}  className='bg-pink-400 text-white p-4 rounded-md font-Montserrat font-bold my-5 w-1/2'>
            Book Now{" "}
          {
              numberOfNights>0?`(₹ ${numberOfNights * guests *places.price})`:" "
            }
          </button>
            </div>
            
        </form>
    </div>
  )
}

export default Booking