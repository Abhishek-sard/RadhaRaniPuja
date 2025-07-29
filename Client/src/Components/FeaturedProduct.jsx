import React from 'react'

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Laughing Buddha',
      originalPrice: 199.99,
      discountedPrice: 149.99,
      image: 'https://via.placeholder.com/300x200?text=Headphones',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Kitchen racket',
      originalPrice: 89.99,
      discountedPrice: 59.99,
      image: 'https://via.placeholder.com/300x200?text=Keyboard',
      rating: 4.2,
    },
    {
      id: 3,
      name: 'Agarbati',
      originalPrice: 249.99,
      discountedPrice: 199.99,
      image: 'https://via.placeholder.com/300x200?text=Smart+Watch',
      rating: 4.7,
    },
  ]

  const calculateDiscountPercentage = (original, discounted) => {
    return Math.round(((original - discounted) / original) * 100)
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
        <p className="text-lg text-gray-600">Discover our best deals and discounts</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {calculateDiscountPercentage(product.originalPrice, product.discountedPrice)}% OFF
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-gray-600 text-xs ml-1">({product.rating})</span>
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
              
              <div className="flex items-center">
                <span className="text-2xl font-bold text-gray-900">
                  {product.discountedPrice.toFixed(2)}
                </span>
                <span className="text-sm text-gray-500 line-through ml-2">
                  {product.originalPrice.toFixed(2)}
                </span>
              </div>
              
              <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts