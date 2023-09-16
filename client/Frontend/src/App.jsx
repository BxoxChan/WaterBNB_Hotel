import React from 'react'
import { Home } from './pages/Home'
import { Properties } from './pages/Properties'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import PropertyPage from './pages/PropertyPage'
import { Register } from './pages/Register'

const App = () => {
  return (
    <div className='font-Raleway'>
      <Router>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/properties' >
          <Route index element={<Properties/>}/>
          <Route path='/properties/:id' element={<PropertyPage/>}/>
        </Route>
        <Route path='/register' element={<Register/>}/>


      </Routes>
      </Router>
    </div>
  )
}

export default App