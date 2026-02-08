import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Booking from './pages/Booking'

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Product />} />
        <Route path='/booking' element={<Booking />} />
      </Routes>
    </div>
  )
}

export default App
