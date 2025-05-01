import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ filteredProducts, bookmarkedItems, toggleBookmark, onProductClick }) => {
  return (
    <div className="grid mb-20 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredProducts.map((product, i) => {
        const isBookmarked = bookmarkedItems.some(
          (item) => item.title === product.title && item.brand === product.brand
        );

        return (
          <ProductCard
            key={i}
            product={product}
            isBookmarked={isBookmarked}
            toggleBookmark={toggleBookmark}
            onProductClick={onProductClick}
          />
        );
      })}
    </div>
  );
};

export default ProductGrid;