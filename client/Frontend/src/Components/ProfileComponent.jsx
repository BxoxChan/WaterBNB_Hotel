import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { userRequest } from '../utils/requestMethods';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Footer } from './Footer';
import { UserContext } from '../../context/UserContext';


const ProfileComponent = () => {
      const user = JSON.parse(localStorage.getItem('auth-User'));
     // console.log((user.username));

    const{setUser}=useContext(UserContext);
    const navigate=useNavigate();
    const logoutHandler=()=>{
      try{
           userRequest.post("logout")
            setUser("");
            localStorage.removeItem("auth-User")
            navigate("/")
      }catch(e){
         console.log(e);
      }
    }
  return (
    <div>
        <div className='h-screen '>
          <div className='flex flex-col items-center border-black border-2 '>
          <div className='text-6xl'>
            <AccountCircleIcon className='text-pink-400' sx={{fontSize:"10rem"}}/>
          </div>
          <div className=''>
          <p>Logged in as <span>{user.username}</span> ,<span>({user.email})</span></p>
          
          </div>
          </div>
          <div className='flex justify-center mt-5'>
            <button onClick={logoutHandler} className='bg-red-400 text-white rounded-sm p-2'>Logout</button>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default ProfileComponent