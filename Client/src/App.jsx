import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ImageSlider from './Components/ImageSlider'
import Footer from './Components/Footer'
import Products from './Pages/Products/Products'
import Navbar from './Components/Navbar'
import FeaturedProducts from './Components/FeaturedProduct'

// Home component with wrapped children
const Home = () => {
  return (
    <>
      <ImageSlider />
      <FeaturedProducts />
    </>
  )
}

// Products page component (no need for separate wrapper)
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App