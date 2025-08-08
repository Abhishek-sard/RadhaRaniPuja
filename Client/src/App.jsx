import React from 'react';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Products from './Components/Products';
import Image from './Components/Image';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewArrival from './Components/NewArrival';

function Home() {
  return (
    <>
      <Body />
      <Products />
      <Image />
      <NewArrival />
    </>
  );
}


function Contact() {
  return(
    <>
    
    </>
  )
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;