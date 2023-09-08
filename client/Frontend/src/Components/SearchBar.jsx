import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
  return (
    <div className='flex justify-center my-8 '>
        <div className='border-2 border-black w-1/2 flex p-1 rounded-md'>
        <SearchIcon/>
        <input type="search" className=' w-full outline-none ' />
        </div>
    </div>
  )
}

export default SearchBar