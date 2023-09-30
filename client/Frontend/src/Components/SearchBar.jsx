import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {UserContext} from '../../context/UserContext'
const SearchBar = () => {
  const {filter,setFilter}=useContext(UserContext);
  return (
    <div className='flex justify-center my-8 '>
        <div className='border-2 border-black w-1/2 flex p-1 rounded-md'>
        <SearchIcon/>
        <input type="search" placeholder='Search by city' className=' w-full outline-none ' value={filter} onChange={(e)=>setFilter(e.target.value)}/>
        </div>
    </div>
  )
}

export default SearchBar