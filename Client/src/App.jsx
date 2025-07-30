import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ImageSlider from './Components/ImageSlider';
import Footer from './Components/Footer';

import Products from './Pages/Products/Products';
import Navbar from './Components/Navbar';

//importing the pages
function Product ()  {
  return(
    <Products/>
  )
}

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ImageSlider/>} />
        <Route path="/products" element={<Product/>} />
      </Routes>
      <Footer/>
    </Router>

  )
}

export default App
