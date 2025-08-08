import React from "react";
import home2 from '../assets/home2.jpg'
function Body() {
  return (
    <div className="relative bg-gray-900 overflow-hidden" style={{ height: "calc(100vh - 0.2rem)" }}>
      <div className="absolute inset-0">
        <img 
          className="w-full h-full object-cover opacity-70" 
          src={home2} 
          alt="Cookie boxes cover" 
        />
        <div className="absolute inset-0 bg-amber-500 mix-blend-multiply"></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center w-full">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-4xl lg:text-6xl">
            Buy your best lactop
          </h1>
          {/* <p>SAN FRANCISCO SINCE 2035</p> */}
          <div className="mt-10">
            <a href="/shop">
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                SHOP NOW
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;