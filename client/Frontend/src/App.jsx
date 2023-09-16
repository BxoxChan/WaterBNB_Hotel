import React from 'react'
import { Home } from './pages/Home'
import { Properties } from './pages/Properties'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import PropertyPage from './pages/PropertyPage'
import { Register } from './pages/Register'
import {Toaster} from 'react-hot-toast';
import Login from './pages/Login'

const App = () => {
  return (
    <div className='font-Raleway'>
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
      </Routes>
      </Router>
      
    </div>
    
  )
}

export default App