import React from 'react'
import Arrival from '../assets/Arrival.jpg';
import Arrival2 from '../assets/Arrival2.jpg';
import Arrival3 from '../assets/Arrival3.jpg';

const NewArrival = () => {
    const images = [
        { id: 1, src: Arrival, text: "Laptop 1", price: "Rs. 999" },
        { id: 2, src: Arrival2, text: "Laptop 2", price: "Rs. 1099" },
        { id: 3, src: Arrival3, text: "Laptop 3", price: "Rs. 899" },
    ]
    
    return (
        <div className="p-4">
            <h2 className="text-4xl font-bold mb-4 m-9 text-center">New Arrivals</h2>

            {/* Centered grid container */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl">
                    {images.map((image) => (
                        <div key={image.id} className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                            {/* Centered image with consistent size */}
                            <div className="flex justify-center w-full">
                                <img
                                    src={image.src}
                                    alt={image.text}
                                    className="w-48 h-60 object-contain rounded-md border border-gray-200 shadow-sm hover:scale-105 transition-transform"
                                />
                            </div>

                            <div className="text-center">
                                <p className="font-medium text-gray-800">{image.text}</p>
                                <p className="text-gray-600 text-sm">{image.price}</p>
                            </div>

                            <button
                                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm"
                                onClick={() => console.log(`Added ${image.text} to cart`)}
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NewArrival