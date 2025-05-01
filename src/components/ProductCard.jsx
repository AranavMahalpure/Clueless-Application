import React from "react";
import { BookmarkIcon } from "@heroicons/react/24/outline";

const ProductCard = ({ product, isBookmarked, toggleBookmark, onProductClick }) => {
  return (
    <div
      onClick={() => onProductClick(product)}
      className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-all duration-200 relative cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.img} 
          alt={product.title} 
          className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110" 
        />
        
        <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
          {product.discount} OFF
        </div>
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs font-medium text-gray-500">{product.brand}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleBookmark(product);
            }}
            className={`p-1 rounded-full ${
              isBookmarked ? "bg-red-500" : "bg-gray-100"
            }`}
          >
            <BookmarkIcon
              className={`h-4 w-4 ${
                isBookmarked ? "text-white" : "text-gray-600"
              }`}
            />
          </button>
        </div>

        <h3 className="text-sm font-medium text-gray-800 mb-1">{product.title}</h3>
        <span className="text-xs text-gray-500">saree</span>

        <div className="mt-2">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-bold">{product.price}</span>
            <span className="text-xs text-gray-500 line-through">{product.oldPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;