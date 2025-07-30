import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const products = [
    { id: 1, name: 'Product 1', price: 'Rs.10', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 'Rs.15', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 'Rs.20', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: 'Rs.12', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', price: 'Rs.18', image: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 6', price: 'Rs.25', image: 'https://via.placeholder.com/150' },
];

const Shop = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 4;

    const handleNext = () => {
        if (startIndex + visibleCount < products.length) {
            setStartIndex(startIndex + 1);
        }
    };

    const handlePrev = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        }
    };

    return (
        <div className="p-8">
            {/* Heading */}
            <div className="flex flex-col justify-center items-center mb-10">
                <h1 className="text-2xl font-bold">ALL CATEGORY PRODUCTS</h1>
                <p className="text-gray-500 font-bold">of our website</p>
            </div>

            {/* 6-column product grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
                {products.map(product => (
                    <div
                        key={product.id}
                        className="bg-white shadow-md rounded-lg overflow-hidden p-4 text-center"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-32 object-cover mb-3 rounded"
                        />
                        <h2 className="text-lg font-semibold">{product.name}</h2>
                        <p className="text-gray-600">{product.price}</p>
                    </div>
                ))}
            </div>

            {/* Featured Products Section */}
            <div className="bg-slate-200 p-10 rounded-md shadow-md">
                <div className="flex flex-col justify-center items-center mb-10 transition-all duration-700">
                    <h1 className="text-2xl font-bold">Featured Products</h1>
                    <p className="text-gray-500 font-bold">Shop easily by fearless</p>
                </div>

                {/* Card Slider */}
                <div className="relative">
                    {/* Prev Button */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Visible Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 overflow-hidden">
                        {products.slice(startIndex, startIndex + visibleCount).map(product => (
                            <div
                                key={product.id}
                                className="bg-white p-4 rounded-lg shadow text-center transform transition-transform hover:scale-105"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-28 object-cover mb-2 rounded"
                                />
                                <h2 className="text-lg font-semibold">{product.name}</h2>
                                <p className="text-gray-600">{product.price}</p>
                            </div>
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-100 z-10"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>

            {/* Background Image */}
            <div
                className="w-full h-screen bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: 'url(https://via.placeholder.com/1500x600)' }}
            >
                <div className="bg-black bg-opacity-50 w-full h-full flex justify-center items-center">
                    <h1 className="text-white text-5xl font-bold">Shop Now</h1>
                </div>
            </div>

        </div>
    );
};

export default Shop;
