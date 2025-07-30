import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ImageSlider from './Components/ImageSlider'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import FeaturedProducts from './Components/FeaturedProduct'


import Shop from './Pages/Shop/Shop';

import Blog from './Pages/Blog/Blog';

import Contact from './Pages/Contact/Contact';

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

function Contacts () {
  return(
    <>
    <Contact/>
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
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App