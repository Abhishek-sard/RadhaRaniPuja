import React from 'react';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Products from './Components/Products';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Body />
      <Products/>
      <Footer/>
    </BrowserRouter>



  );
}

export default App;
