import React from 'react'
import Home from './pages/home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/signup/Signup'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'


const App = () => {
  return (
    <div className='p-4 h-screen flex items-center justify-center'>
     <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />


     </Routes>
      <Toaster />
    </div>
  )
}

export default App