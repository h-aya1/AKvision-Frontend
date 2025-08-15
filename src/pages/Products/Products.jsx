import { useState } from 'react';
import { CameraIcon, VideoCameraIcon, CogIcon } from '@heroicons/react/24/outline';

const Products = () => {
  const categories = [
    {
      id: 'ip-cameras',
      name: 'IP Cameras',
      icon: <CameraIcon className="h-6 w-6" />,
      description: 'High-resolution network cameras for professional surveillance.',
    },
    {
      id: 'ptz-cameras',
      name: 'PTZ Cameras',
      icon: <VideoCameraIcon className="h-6 w-6" />,
      description: 'Pan-Tilt-Zoom cameras for dynamic monitoring and tracking.',
    },
    {
      id: 'accessories',
      name: 'Accessories',
      icon: <CogIcon className="h-6 w-6" />,
      description: 'Essential components and add-ons for complete security systems.',
    },
  ];

  const products = [
    {
      id: 1,
      category: 'ip-cameras',
      name: 'AK-2000 Series',
      image: '/products/ip-camera-1.jpg', // Placeholder image path
      description: '4K Ultra HD Network Camera with AI Detection',
      features: ['4K Resolution', 'Night Vision', 'AI-powered Detection', 'Weather Resistant'],
      price: 'Contact for Price',
    },
    {
      id: 2,
      category: 'ptz-cameras',
      name: 'AK-PTZ Pro',
      image: '/products/ptz-camera-1.jpg', // Placeholder image path
      description: 'Professional PTZ Camera with 30x Optical Zoom',
      features: ['30x Optical Zoom', '360° Rotation', 'Auto-Tracking', 'IR Distance 100m'],
      price: 'Contact for Price',
    },
    // Add more products as needed
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of surveillance solutions designed for various security needs.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <button
            className={`p-6 rounded-lg border-2 transition-colors ${selectedCategory === 'all'
              ? 'border-primary bg-primary text-white'
              : 'border-gray-200 hover:border-primary'}`}
            onClick={() => setSelectedCategory('all')}
          >
            <h3 className="text-lg font-semibold mb-2">All Products</h3>
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`p-6 rounded-lg border-2 transition-colors ${selectedCategory === category.id
                ? 'border-primary bg-primary text-white'
                : 'border-gray-200 hover:border-primary'}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className="flex items-center justify-center mb-4">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
              <p className="text-sm">{category.description}</p>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {/* Placeholder for product image */}
                <div className="flex items-center justify-center h-48 bg-gray-100">
                  <CameraIcon className="h-12 w-12 text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-primary font-semibold">{product.price}</span>
                  <button className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition-colors">
                    Request Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;