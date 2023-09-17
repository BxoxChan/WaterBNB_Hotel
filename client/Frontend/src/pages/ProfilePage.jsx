import {React,useContext} from 'react';
import { UserContext } from '../../context/UserContext';
import { Header } from '../Components/Header';
import { Footer } from '../Components/Footer';
import { Link } from 'react-router-dom';


const ProfilePage = () => {
    const{user}=useContext(UserContext);
  return (
    <div>
        <Header/>
        <div className='h-screen'>
          <h1>Logged in as {user.email}</h1>
          <span>
            <Link>
            <button className='bg-red-400 text-white rounded-sm p-2'>Logout</button>
            </Link>
          </span>
        </div>
        <Footer/>
    </div>
  )
}

export default ProfilePage