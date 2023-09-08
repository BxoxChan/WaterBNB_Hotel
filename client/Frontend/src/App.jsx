import React from 'react'
import { Home } from './pages/Home'
import { Properties } from './pages/Properties'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/properties' element={<Properties/>}/>
      </Routes>
      </Router>
    </div>
  )
}

export default App