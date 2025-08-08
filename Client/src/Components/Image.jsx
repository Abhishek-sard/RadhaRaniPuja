import React from 'react'
import LargeImage from '../assets/Largeimage.jpg'

const Image = () => {
  return (
    <div className='w-full h-[50vh] overflow-hidden  mt-9 mb-12'> 
      <img 
        className='w-full h-full object-cover'
        src={LargeImage} 
        alt="Cover image"
      />
    </div>
  )
}

export default Image