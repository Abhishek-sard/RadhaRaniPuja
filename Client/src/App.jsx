import React from 'react';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Products from './Components/Products';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Body />
      <Products/>
    </BrowserRouter>



  );
}

export default App;
