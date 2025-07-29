import React from 'react'
import Image from '../assets/logo.jpg'

const ImageSlider = () => {
  return (
    <div className="relative w-cover h-854    max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg">
      {/* Carousel container */}
      <div className="relative h-84 md:h-96">
        {/* Slide 1 */}
        <div className="absolute inset-0 transition-opacity duration-700 ease-in-out">
          <img 
            src={Image} 
            className="object-cover w-full h-full" 
            alt="Slide 1"
          />
        </div>
        
        {/* Slide 2 */}
        <div className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0">
          <img 
            src={Image} 
            className="object-cover w-full h-full" 
            alt="Slide 2"
          />
        </div>
        
        {/* Slide 3 */}
        <div className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0">
          <img 
            src={Image} 
            className="object-cover w-full h-full" 
            alt="Slide 3"
          />
        </div>
        
        {/* Slide 4 */}
        <div className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0">
          <img 
            src={Image} 
            className="object-cover w-full h-full" 
            alt="Slide 4"
          />
        </div>
      </div>
      
      {/* Navigation indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        <button 
          className="w-3 h-3 rounded-full bg-white bg-opacity-70 hover:bg-opacity-100 focus:outline-none"
          aria-label="Slide 1"
        ></button>
        <button 
          className="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 focus:outline-none"
          aria-label="Slide 2"
        ></button>
        <button 
          className="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 focus:outline-none"
          aria-label="Slide 3"
        ></button>
        <button 
          className="w-3 h-3 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 focus:outline-none"
          aria-label="Slide 4"
        ></button>
      </div>
      
      {/* Navigation arrows */}
      <button 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black bg-opacity-30 hover:bg-opacity-50 text-white focus:outline-none"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black bg-opacity-30 hover:bg-opacity-50 text-white focus:outline-none"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}

export default ImageSlider