import React from 'react';

const products = [
  { id: 1, name: 'Product 1', price: 'Rs.10', image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'Product 2', price: 'Rs.15', image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Product 3', price: 'Rs.20', image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'Product 4', price: 'Rs.12', image: 'https://via.placeholder.com/150' },
  { id: 5, name: 'Product 5', price: 'Rs.18', image: 'https://via.placeholder.com/150' },
  { id: 6, name: 'Product 6', price: 'Rs.25', image: 'https://via.placeholder.com/150' },
];

const Shop = () => {
  return (
    <div className="p-8">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center mb-10">
        <h1 className="text-2xl font-bold">ALL CATEGORY PRODUCTS</h1>
        <p className="text-gray-500 font-bold">of our website</p>
      </div>

      {/* 6-column product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
    </div>
  );
};

export default Shop;
