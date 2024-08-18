import React from 'react';

const CartItem = ({ item, updateQuantity, removeItem }) => (
  <div className="flex items-center justify-between p-4 border-b">
    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
    <div>
      <h3 className="text-lg">{item.name}</h3>
      <p className="text-gray-600">${item.price.toFixed(2)}</p>
    </div>
    <div className="flex items-center">
      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
      <input
        type="number"
        value={item.quantity}
        readOnly
        className="w-12 text-center mx-2"
      />
      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
    </div>
    <button onClick={() => removeItem(item.id)} className="text-red-500">
      Remove
    </button>
  </div>
);

export default CartItem;
