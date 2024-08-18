import React from 'react';

const ProductCard = ({ product, addToCart }) => (
  <div className="border p-4">
    <img src={product.productImage} alt={product.productName} className="w-full h-64 object-cover" />
    <h2 className="text-lg font-bold mt-2">{product.productName}</h2>
    <p className="text-gray-600">${product.productPrice.toFixed(2)}</p>
    <button
      onClick={() => addToCart(product)}
      className="bg-blue-500 text-white p-2 mt-4 w-full hover:bg-blue-700"
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
