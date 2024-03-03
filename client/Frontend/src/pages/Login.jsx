import React, { useState,useContext} from 'react'
import { userRequest } from '../utils/requestMethods';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import * as Yup from 'yup';



const Login = () => {

    
     const validationSchema=Yup.object({
       email:Yup.string().email('Invalid Email').required("Eamil required"),
        password:Yup.string().required('Password is Required').min(8,"must be atleast 8 characters").matches(
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
        ),
})

 //const [error,setError]=useState({});

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
        },{
            headers:{
                 "Content-Type": "application/json",
            },
            withCredentials: "include",
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
        // }catch(e){
        //      const newErrors={}
        //      console.log(e.inner);
        //     // e.inner.forEach(err=>{
        //     //     newErrors[err.path]=err.message
        //     // })
        //     setError(newErrors);
        //   //console.log(e);
        // }
    }catch{
        (e)=>console.log(e);
    }
}
  return (
   <div className='h-screen w-full flex justify-center items-center bg-gradient-to-r from-fuchsia-500 via-violet-600 to-sky-500'>
       <div className='w-1/3 flex flex-col items-center border-2 border-white  rounded-md py-5 bg-white backdrop-blur-md shadow-Login bg-opacity-80'>
        <h1 className='text-4xl my-5'>Login</h1>
        <form action="" >
            <div  className='flex flex-col text-2xl my-2'>
            <label htmlFor="" className=''>Email</label>
            <input className='border rounded-md outline-none text-xl p-1' placeholder='@mail.com' type="email" value={data.email} onChange={
                (e)=> setData({...data,email:e.target.value})} required/>
                {/* {error.email && <div className="text-red-500">{error.email}</div>} */}
            </div>
            <div  className='flex flex-col text-2xl my-2'>
            <label htmlFor="" className=''>Password</label>
            <input className='border rounded-md outline-none text-xl p-1' placeholder='password' type="password" value={data.password} onChange={
                (e)=> setData({...data,password:e.target.value})} required/>

            </div>
                {/* {error.password && <div className="text-red-500">{error.password}</div>} */}
            
            <div className='flex justify-center'>
            <button className='rounded bg-blue1 px-4 py-2 text-white' type='submit' onClick={formhandler}>Login</button>
            </div>
        </form>
        <p className='mt-2 '>Not Registered, <span className='font-bold text-xl'>Register</span></p>
       </div>
    </div>
  )
}

export default Login