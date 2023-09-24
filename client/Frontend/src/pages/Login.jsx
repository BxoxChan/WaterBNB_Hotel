import React, { useState,useContext} from 'react'
import { userRequest } from '../utils/requestMethods';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';



const Login = () => {
    const {setUser}=useContext(UserContext);
    const [data,setData]=useState({
        email:'',
        password:''
    });
    const navigate=useNavigate();
    const formhandler=async(e)=>{
        e.preventDefault();
        const {email,password}=data;
        try{
         const {data}=await userRequest.post("/login",{
            email,password
         })   
         if(data.error){
            toast.error(data.error)
         }else{
            setUser({
                token:data.token,
                email,
                userDetails:data.user,
            });
            localStorage.setItem("auth-User",JSON.stringify(data.user));
            setData({})
            navigate('/');
         }
        }catch(e){
          console.log(e);
        }
    }
  return (
   <div className='h-screen w-full flex justify-center items-center'>
       <div className='w-1/3 flex flex-col items-center border  rounded-md py-5'>
        <h1 className='text-4xl my-5 '>Login</h1>
        <form action="" onSubmit={formhandler}>
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
            <button className='rounded bg-blue1 px-4 py-2'>Login</button>
            </div>
        </form>
        <p>if already registerd,<span className='font-bold'>Login</span></p>
       </div>
    </div>
  )
}

export default Login