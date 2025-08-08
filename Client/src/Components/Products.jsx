import React from 'react'
import home from '../assets/home.jpg';
import home2 from '../assets/home2.jpg';
import home3 from '../assets/home3.jpg';
import home4 from '../assets/home4.jpg';
import home5 from '../assets/home5.jpg';
import home6 from '../assets/home6.jpg';
import home7 from '../assets/home7.jpg';
import home8 from '../assets/home8.jpg';

const Products = () => {
    const images = [
        { id: 1, src: home,  text: "Laptop 1", price: "$999" },
        { id: 2, src: home2, text: "Laptop 2", price: "$1099" },
        { id: 3, src: home3,  text: "Laptop 3", price: "$899" },
        { id: 4, src: home4,  text: "Laptop 4", price: "$1299" },
        { id: 5, src: home5, text: "Laptop 5", price: "$799" },
        { id: 6, src: home6,  text: "Laptop 6", price: "$1499" },
        { id: 7, src: home7,  text: "Laptop 7", price: "$1199" },
        { id: 8, src: home8,  text: "Laptop 8", price: "$999" },
    ]
    
    return (
        <div className="p-8">
            <h2 className="text-4xl font-bold mb-6  m-9 text-center">Our Products</h2>

            {/* Grid container */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
                {images.map((image) => (
                    <div key={image.id} className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                        {/* Image with increased dimensions */}
                        <img
                            src={image.src}
                            alt={image.text}
                            className="w-40 h-40 object-cover rounded-md border border-gray-200 shadow-sm hover:scale-105 transition-transform"
                        />
                        
                        {/* Product Info */}
                        <div className="text-center">
                            <p className="font-medium text-gray-800">{image.text}</p>
                            <p className="text-gray-600 text-sm">{image.price}</p>
                        </div>
                        
                        {/* Button */}
                        <button 
                            className="mt-2 px-4 py-2 border-color: inherit;
 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-sm"
                            onClick={() => console.log(`Added ${image.text} to cart`)}
                        >
                           view Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products