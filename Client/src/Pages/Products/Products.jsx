import React, { useState } from 'react'
import { FiHeart, FiShare2, FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { BsCartPlus } from 'react-icons/bs'

const Products = () => {
  const [mainImage, setMainImage] = useState('https://via.placeholder.com/800x800?text=Product+Main')
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState('black')
  const [selectedSize, setSelectedSize] = useState('M')

  const product = {
    name: 'Premium Comfort T-Shirt',
    price: 39.99,
    discountPrice: 29.99,
    description: 'Our premium comfort t-shirt is made from 100% organic cotton for maximum softness and breathability. Perfect for everyday wear with its classic fit and durable construction.',
    rating: 4.7,
    reviewCount: 128,
    colors: ['black', 'white', 'navy', 'gray'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    images: [
      'https://via.placeholder.com/800x800?text=Product+Main',
      'https://via.placeholder.com/800x800?text=Product+Side',
      'https://via.placeholder.com/800x800?text=Product+Back',
      'https://via.placeholder.com/800x800?text=Product+Detail'
    ],
    features: [
      '100% Organic Cotton',
      'Reinforced stitching',
      'Pre-shrunk fabric',
      'Oeko-Tex certified',
      'Machine washable'
    ]
  }

  const relatedProducts = [
    { id: 1, name: 'Casual Polo Shirt', price: 49.99, image: 'https://via.placeholder.com/300x300?text=Polo+Shirt' },
    { id: 2, name: 'Slim Fit Jeans', price: 59.99, image: 'https://via.placeholder.com/300x300?text=Slim+Jeans' },
    { id: 3, name: 'Sports Hoodie', price: 69.99, image: 'https://via.placeholder.com/300x300?text=Sports+Hoodie' },
    { id: 4, name: 'Classic Cap', price: 24.99, image: 'https://via.placeholder.com/300x300?text=Classic+Cap' }
  ]

  const handleQuantityChange = (value) => {
    const newValue = quantity + value
    if (newValue > 0 && newValue <= 10) {
      setQuantity(newValue)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm text-gray-600 mb-6">
        <a href="#" className="hover:text-gray-900">Home</a>
        <span className="mx-2">/</span>
        <a href="#" className="hover:text-gray-900">Clothing</a>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.name}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images */}
        <div className="lg:w-1/2">
          <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img 
              src={mainImage} 
              alt={product.name} 
              className="w-full h-96 object-contain"
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, index) => (
              <button 
                key={index}
                onClick={() => setMainImage(image)}
                className={`border rounded-md overflow-hidden ${mainImage === image ? 'border-blue-500' : 'border-gray-200'}`}
              >
                <img 
                  src={image} 
                  alt={`Thumbnail ${index + 1}`} 
                  className="w-full h-20 object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <FiStar 
                  key={i} 
                  className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="text-gray-600">{product.rating} ({product.reviewCount} reviews)</span>
          </div>

          <div className="mb-6">
            <span className="text-2xl font-bold text-gray-900">${product.discountPrice.toFixed(2)}</span>
            {product.discountPrice < product.price && (
              <>
                <span className="text-lg text-gray-500 line-through ml-2">${product.price.toFixed(2)}</span>
                <span className="ml-2 text-red-600 bg-red-100 px-2 py-1 rounded text-sm">
                  Save ${(product.price - product.discountPrice).toFixed(2)}
                </span>
              </>
            )}
          </div>

          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Color</h3>
            <div className="flex space-x-2">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-blue-500' : 'border-gray-200'}`}
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md ${selectedSize === size ? 'bg-gray-900 text-white border-gray-900' : 'border-gray-300 text-gray-900 hover:bg-gray-50'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">Quantity</h3>
            <div className="flex items-center">
              <button 
                onClick={() => handleQuantityChange(-1)}
                className="border border-gray-300 px-3 py-1 rounded-l-md hover:bg-gray-50"
              >
                -
              </button>
              <span className="border-t border-b border-gray-300 px-4 py-1">{quantity}</span>
              <button 
                onClick={() => handleQuantityChange(1)}
                className="border border-gray-300 px-3 py-1 rounded-r-md hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white py-3 px-4 rounded-md flex items-center justify-center gap-2 transition-colors">
              <BsCartPlus size={20} />
              Add to Cart
            </button>
            <button className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-900 py-3 px-4 rounded-md flex items-center justify-center gap-2 transition-colors">
              Buy Now
            </button>
          </div>

          {/* Wishlist & Share */}
          <div className="flex gap-4">
            <button className="flex items-center text-gray-600 hover:text-gray-900 gap-1">
              <FiHeart />
              Add to Wishlist
            </button>
            <button className="flex items-center text-gray-600 hover:text-gray-900 gap-1">
              <FiShare2 />
              Share
            </button>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-16 border-t border-gray-200 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Details</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Features</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Specifications</h3>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">Material</span>
                <span className="text-gray-900">100% Organic Cotton</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">Fit</span>
                <span className="text-gray-900">Classic</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">Care Instructions</span>
                <span className="text-gray-900">Machine wash cold</span>
              </div>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="text-gray-600">Origin</span>
                <span className="text-gray-900">Made in USA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">You May Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts.map(product => (
            <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                <p className="text-gray-900 font-bold">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products