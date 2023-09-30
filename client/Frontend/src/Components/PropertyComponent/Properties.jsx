import React, { useContext, useEffect,useState } from 'react'
import PropertCard from './PropertCard'
import axios from 'axios';
import {UserContext} from '../../../context/UserContext'


function Properties() {
    const {filter}=useContext(UserContext);
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
  return (
    <div className='min-h-screen mx-10 grid grid-cols-3 gap-5 '>
      {
          property.filter((data)=>data.city.toLowerCase().includes(filter.toLowerCase())).map((prop)=>{
            return(
            <PropertCard 
             key={prop._id}
             id={prop._id}
             name={prop.title} 
             address={prop.address}
             city={prop.city}
             img={prop.image}
             price={prop.price}
             
            />
            )
          })
      }
        
    </div>
  )
}

export default Properties