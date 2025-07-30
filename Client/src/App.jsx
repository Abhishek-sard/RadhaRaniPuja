import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ImageSlider from './Components/ImageSlider'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import FeaturedProducts from './Components/FeaturedProduct'


import Shop from './Pages/Shop/Shop';

import Blog from './Pages/Blog/Blog';

// Home component with wrapped children
function Home() {
  return (
    <>
      <ImageSlider />
      <FeaturedProducts />
    </>
  )
}

function Shops () {
  return(
    <>
    <Shop/>
    </>
  )
}

function Blogging () {
  return(
    <>
    <Blog/>
    </>
  )
}




// Products page component (no need for separate wrapper)
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App