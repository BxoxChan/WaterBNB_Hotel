import React, { useContext } from 'react'
import { Home } from './pages/Home'
import { Properties } from './pages/Properties'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import PropertyPage from './pages/PropertyPage'
import { Register } from './pages/Register'
import {Toaster} from 'react-hot-toast';
import Login from './pages/Login'
import { UserContext, UserContextProvider } from '../context/UserContext'
import ProfilePage from './pages/ProfilePage'

const App = () => {
  return (
    <div className='font-Raleway'>
      <UserContextProvider >
    <Toaster position="bottom-center" toastOptions={{duration:5000}}/>
      <Router>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/properties' >
          <Route index element={<Properties/>}/>
          <Route path='/properties/:id' element={<PropertyPage/>}/>
        </Route>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/profile/:subpage?' element={<ProfilePage/>}/>
      </Routes>
      </Router>
      </UserContextProvider>
      
    </div>
    
  )
}

export default App