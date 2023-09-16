import React, { useState } from 'react'
import { userRequest } from '../utils/requestMethods';



export const Register = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const formhandler=async(e)=>{
     e.preventDefault();
    
    await userRequest.post("/register",{
        username:name,email,password}).then((data)=>( console.log(data))).catch((e)=>{console.log(e)});
     
    }
  return (
    <div className='h-screen w-full flex justify-center items-center'>
       <div className='w-1/3 flex flex-col items-center border  rounded-md py-5'>
        <h1 className='text-4xl my-5 '>Register</h1>
        <form action="" onSubmit={formhandler}>
            <div className='flex flex-col text-2xl my-2'>
            <label className='' htmlFor="">Name</label>
            <input className='border rounded-md outline-none' type="text" value={name} onChange={
                (e)=>(setName(e.target.value))} required/>
            </div>
            <div  className='flex flex-col text-2xl my-2'>
            <label htmlFor="" className=''>Email</label>
            <input className='border rounded-md outline-none' type="email" value={email} onChange={
                (e)=>(setEmail(e.target.value))} required/>
            </div>
            <div  className='flex flex-col text-2xl my-2'>
            <label htmlFor="" className=''>Password</label>
            <input className='border rounded-md outline-none' type="password" value={password} onChange={
                (e)=>(setPassword(e.target.value))} required/>
            </div>
            
            
            <div className='flex justify-center'>
            <button className='rounded bg-blue1 px-4 py-2'>Register</button>
            </div>
        </form>
        <p>if already registerd,<span className='font-bold'>Login</span></p>
       </div>
    </div>
  )
}
