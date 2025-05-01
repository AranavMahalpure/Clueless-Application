import React from 'react';

const Wardrobecard = ({ products }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Wardrobe</h2>
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <div key={index} className="rounded-lg shadow-lg overflow-hidden">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-120 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-sm">{product.title}</h3>
                <p className="text-xs text-gray-500">{product.brand}</p>
                <div className="mt-2 flex justify-between items-center">
                  <div className="text-sm font-semibold">{product.price}</div>
                  <div className="text-xs text-gray-400 line-through">{product.oldPrice}</div>
                </div>
                <div className="text-xs text-green-500">{product.discount}</div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No products in your wardrobe yet.</div>
      )}
    </div>
  );
};

export default Wardrobecard;
