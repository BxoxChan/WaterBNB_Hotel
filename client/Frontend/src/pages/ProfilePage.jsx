import {React} from 'react';
import { Header } from '../Components/Header';

import ProfileComponent from '../Components/ProfileComponent';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ListIcon from '@mui/icons-material/List';
import { Link, useParams } from 'react-router-dom';
import MyBookings from '../Components/MyBookings';


const ProfilePage = () => {
  let {subpage}=useParams();
  console.log(subpage);
  if(subpage===undefined){
    subpage='profile';
    console.log(subpage);
  }
  function linkclass(type=null){
   let classes = 'flex items-center justify-center border w-40 rounded-md ';
   if(type===subpage){
    classes += 'bg-pink-400  text-white';
   }
   return classes;
  }
  return (
    <div>
        <Header/>
        {/* profile Nav */}
        <nav className='w-fit mx-auto sm:h-10 flex justify-between gap-10 my-14 '>
            <Link to={'/profile'} className={linkclass('profile')}><span className='mr-5'><PermIdentityIcon/></span>Profile</Link>
            <Link  to={'/profile/myBookings'} className={linkclass('myBookings')}><span className='mr-5'><ListIcon/></span>My Bookings</Link>
        </nav>
        {
          subpage==='profile'?<ProfileComponent/>:<MyBookings/>
        
        }
    </div>
  )
}

export default ProfilePage