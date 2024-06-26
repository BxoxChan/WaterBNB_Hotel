import React, { useState } from 'react'
import { userRequest } from '../utils/requestMethods';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';



export const Register = () => {
    //  const[name,setName]=useState('');
    //  const[email,setEmail]=useState('');
    //  const[password,setPassword]=useState('');
     const [data,setData]=useState({
         username:'',
         email:'',
         password:''
     })
    const formhandler=async(e)=>{
     e.preventDefault();

     const{username,email,password}=data;
    try{

        const {data}=await userRequest.post("/register",{
            username,email,password});
            if(data.error){
                toast.error(data.error);
            }else{
                setData({})
                toast.success('User Registered Succesfully');
            }
        }catch(e){
          console.log(e);
        }
    }
  return (
    <div className='h-screen w-full flex justify-center items-center'>
       <div className='w-1/3 flex flex-col items-center border  rounded-md py-5'>
        <h1 className='text-4xl my-5 '>Register</h1>
        <form action="" onSubmit={formhandler}>
            <div className='flex flex-col text-2xl my-2'>
            <label className='' htmlFor="">Name</label>
            <input className='border rounded-md outline-none' type="text" value={data.username} onChange={
                (e)=> setData({...data,username:e.target.value})} required/>
            </div>
            <div  className='flex flex-col text-2xl my-2'>
            <label htmlFor="" className=''>Email</label>
            <input className='border rounded-md outline-none' type="email" value={data.email} onChange={
                (e)=> setData({...data,email:e.target.value})} required/>
            </div>
            <div  className='flex flex-col text-2xl my-2'>
            <label htmlFor="" className=''>Password</label>
            <input className='border rounded-md outline-none' type="password" value={data.password} onChange={
                (e)=> setData({...data,password:e.target.value})} required/>
            </div>
            
            
            <div className='flex justify-center'>
            <button className='rounded bg-blue1 px-4 py-2'>Register</button>
            </div>
        </form>
        <p>if already registerd,<span className='font-bold'><Link to={"/login"}>Login</Link></span></p>
       </div>
    </div>
  )
}
