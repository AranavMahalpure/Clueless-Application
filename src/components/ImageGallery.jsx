import React, { useEffect, useRef, useState } from "react";
import { FaChevronDown, FaSearch, FaTimes, FaShoppingBag, FaHeart, FaShare } from "react-icons/fa";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import ProductGrid from "./ProductGrid";

const filters = [
  "rani sarees",
  "floral sarees",
  "saree blouses",
  "designer sarees",
  "silk sarees",
  "wedding sarees",
  "party wear sarees",
  "bollywood sarees",
  "georgette sarees",
  "house of jamoti",
  "akhilam",
  "Zara",
  "H&M",
  "Levi's",
  "Nike",
  "Adidas",
  "Puma",
  "Ralph Lauren",
  "Tommy Hilfiger",
  "Calvin Klein",
  "Gucci",
  "Prada",
];

const brands = ["sample brand", "awriya", "roop sundari", "mitera"];

const prices = ["Under ₹1000", "₹1000 - ₹3000", "₹3000 - ₹5000", "Above ₹5000"];



const products = [
  {
    brand: "sample brand",
    title: "saree",
    price: "Rs. 1,299",
    oldPrice: "Rs. 3,999",
    discount: "67%",
    img: "image.png",
    colors: ["red", "blue", "green"], // Add this
    shops: ["myntra", "ajio"], // Add this
    size: "onesize", // Add this
    description: "Beautiful embroidered saree" // Add this
  },
  {
    brand: "sample brand",
    title: "saree",
    price: "Rs. 1,299",
    oldPrice: "Rs. 3,999",
    discount: "67%",
    img: "img2 .png",
    colors: ["red", "blue", "green"], // Add this
    shops: ["myntra", "ajio"], // Add this
    size: "onesize", // Add this
    description: "Beautiful embroidered saree" // Add this
  },
];

const parsePrice = (priceStr) => parseInt(priceStr.replace(/[^0-9]/g, ""), 10);

const ImageGallery = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [showBrandModal, setShowBrandModal] = useState(false);
  const [showPriceModal, setShowPriceModal] = useState(false);
  const [brandSearch, setBrandSearch] = useState("");
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  const modalRef = useRef(null);
  const brandBtnRef = useRef(null);
  const priceBtnRef = useRef(null);
  const priceModalRef = useRef(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [priceModalPosition, setPriceModalPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("bookmarkedItems")) || [];
    setBookmarkedItems(storedBookmarks);
  }, []);

  const toggleBookmark = (product) => {
    let updatedBookmarks;
    const exists = bookmarkedItems.find(
      (item) => item.title === product.title && item.brand === product.brand
    );

    if (exists) {
      updatedBookmarks = bookmarkedItems.filter(
        (item) => !(item.title === product.title && item.brand === product.brand)
      );
    } else {
      updatedBookmarks = [...bookmarkedItems, product];
    }

    setBookmarkedItems(updatedBookmarks);
    localStorage.setItem("bookmarkedItems", JSON.stringify(updatedBookmarks));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        !brandBtnRef.current.contains(event.target)
      ) {
        setShowBrandModal(false);
      }
      if (
        priceModalRef.current &&
        !priceModalRef.current.contains(event.target) &&
        !priceBtnRef.current.contains(event.target)
      ) {
        setShowPriceModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const openBrandModal = () => {
    if (brandBtnRef.current) {
      const rect = brandBtnRef.current.getBoundingClientRect();
      setModalPosition({
        top: window.scrollY + 8,
        left: rect.left + window.scrollX,
      });
    }
    setShowBrandModal(true);
  };

  const openPriceModal = () => {
    if (priceBtnRef.current) {
      const rect = priceBtnRef.current.getBoundingClientRect();
      setPriceModalPosition({
        top: window.scrollY + 10,
        left: rect.left + window.scrollX - 30,
      });
    }
    setShowPriceModal(true);
  };

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductModal, setShowProductModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedShop, setSelectedShop] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isSizeDropdownOpen, setIsSizeDropdownOpen] = useState(false);
  const sizeDropdownRef = useRef(null);
    const toggleSizeDropdown = () => {
    setIsSizeDropdownOpen((prev) => !prev);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setIsSizeDropdownOpen(false);
  };
  const openProductModal = (product) => {
    setSelectedProduct(product);
    setSelectedColor(product.colors?.[0] || null);
    setSelectedShop(product.shops?.[0] || null);
    setShowProductModal(true);
    document.body.style.overflow = 'hidden';
  };

  const closeProductModal = () => {
    setShowProductModal(false);
    document.body.style.overflow = 'auto';
  };

  // Update your products data to include additional fields needed for the modal
  const enhancedProducts = products.map(product => ({
    ...product,
    colors: ["burgundy", "blue", "green"], // Example colors
    shops: ["myntra", "ajio", "meesho"], // Example shops
    size: "onesize",
    description: "Women's Indian saree adorned with embroidery and decorative borders..."
  }));
  
  const filteredProducts = products.filter((product) => {
    const matchesBrand = selectedBrand ? product.brand === selectedBrand : true;
    const price = parsePrice(product.price);
    let matchesPrice = true;

    if (selectedPrice === "Under ₹1000") {
      matchesPrice = price < 1000;
    } else if (selectedPrice === "₹1000 - ₹3000") {
      matchesPrice = price >= 1000 && price <= 3000;
    } else if (selectedPrice === "₹3000 - ₹5000") {
      matchesPrice = price > 3000 && price <= 5000;
    } else if (selectedPrice === "Above ₹5000") {
      matchesPrice = price > 5000;
    }

    return matchesBrand && matchesPrice;
  });

  return (
    <div className="relative px-4 md:px-12 py-6">
      <div className="flex flex-col gap-2 mb-4 relative z-10">
        <div className="flex gap-2">
          <button
            ref={brandBtnRef}
            onClick={openBrandModal}
            className="bg-gray-100 px-4 py-1 rounded-full text-sm hover:bg-gray-200 flex items-center"
          >
            {selectedBrand || "brands"}
            <FaChevronDown className="ml-2 text-sm" />
          </button>

          <button
            ref={priceBtnRef}
            onClick={openPriceModal}
            className="bg-gray-100 px-4 py-1 rounded-full text-sm hover:bg-gray-200 flex items-center"
          >
            {selectedPrice || "price"}
            <FaChevronDown className="ml-2 text-sm" />
          </button>
        </div>

        <div className="overflow-x-auto whitespace-nowrap -mx-4 px-4 [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
          {filters.map((filter, i) => (
            <button
              key={i}
              className="inline-block px-4 py-1 bg-gray-100 rounded-full text-sm hover:bg-gray-200 whitespace-nowrap mr-2"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {(showBrandModal || showPriceModal) && (
        <div className="fixed inset-0 bg-opacity-50 z-20 transition-opacity duration-200"></div>
      )}

      {showBrandModal && (
        <div
          ref={modalRef}
          className="absolute z-30 bg-white mb-10 rounded-lg shadow-lg w-80 p-4"
          style={{
            top: modalPosition.top,
            left: modalPosition.left,
          }}
        >
          <h2 className="text-sm font-semibold mb-2">brands</h2>
          <div className="flex items-center px-2 py-1 border rounded-md mb-4 bg-gray-50">
            <FaSearch className="text-gray-400 text-sm mr-2" />
            <input
              type="text"
              placeholder="find your favourite brand"
              value={brandSearch}
              onChange={(e) => setBrandSearch(e.target.value)}
              className="w-full outline-none bg-transparent text-sm"
            />
          </div>
          <div className="max-h-40 overflow-y-auto mb-4">
            {brands
              .filter((b) => b.toLowerCase().includes(brandSearch.toLowerCase()))
              .map((brand, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedBrand(brand)}
                  className="px-2 py-1 hover:bg-gray-100 cursor-pointer rounded text-sm"
                >
                  {brand}
                </div>
              ))}
          </div>
          <button
            onClick={() => setShowBrandModal(false)}
            className="w-full py-2 text-white bg-pink-500 hover:bg-pink-600 rounded-md text-sm"
          >
            apply filter
          </button>
        </div>
      )}

      {showPriceModal && (
        <div
          ref={priceModalRef}
          className="absolute z-30 bg-white mb-10 rounded-lg shadow-lg w-50 p-4"
          style={{
            top: priceModalPosition.top,
            left: priceModalPosition.left,
          }}
        >
          <h2 className="text-sm font-semibold mb-2">price range</h2>
          <div className="max-h-40 overflow-y-auto mb-4 w-auto">
            {prices.map((price, i) => (
              <div
                key={i}
                onClick={() => setSelectedPrice(price)}
                className={`px-2 py-1 hover:bg-gray-100 cursor-pointer rounded text-sm ${
                  selectedPrice === price ? "bg-gray-100 font-medium" : ""
                }`}
              >
                {price}
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowPriceModal(false)}
            className="w-full py-2 text-white bg-pink-500 hover:bg-pink-600 rounded-md text-sm"
          >
            apply filter
          </button>
        </div>
      )}

<ProductGrid
        filteredProducts={products}
        bookmarkedItems={bookmarkedItems}
        toggleBookmark={toggleBookmark}
        onProductClick={openProductModal}
      />

      {/* Product Detail Modal */}
{showProductModal && selectedProduct && (
  <>
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeProductModal}></div>

    <div className="fixed inset-0 z-50 flex items-start justify-center p-0 sm:p-4 overflow-y-auto">
      <div 
        className="bg-white rounded-lg w-full max-w-6xl mx-auto shadow-xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
          <h2 className="text-xl font-bold truncate">{selectedProduct.brand}</h2>
          <button 
            onClick={closeProductModal}
            className="text-gray-500 hover:text-gray-700"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>

        {/* Product Content (Image + Details) */}
        <div className="flex flex-col sm:flex-row">
          {/* Left Side - Product Image */}
          <div className="w-full sm:w-1/2 p-4">
            <img 
              src={selectedProduct.img} 
              alt={selectedProduct.title} 
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>

          {/* Right Side - Product Details */}
          <div className="w-full sm:w-1/2 p-4 sm:p-6">
            {/* Product Title and Price */}
            <div className="mb-4">
              <h1 className="text-xl sm:text-2xl font-semibold mb-2">{selectedProduct.title}</h1>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-lg sm:text-xl font-bold text-pink-600">{selectedProduct.price}</span>
                <span className="text-gray-500 line-through text-sm sm:text-base">{selectedProduct.oldPrice}</span>
                <span className="bg-pink-100 text-pink-800 px-2 py-1 rounded-full text-xs sm:text-sm font-medium">
                  {selectedProduct.discount} OFF
                </span>
              </div>
            </div>

            {/* Shop Options */}
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Shop on:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProduct.shops.map((shop, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedShop(shop)}
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm ${
                      selectedShop === shop ? 'bg-pink-500 text-white' : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {shop}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Color: {selectedColor}</h3>
              <div className="flex gap-2">
                {selectedProduct.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(color)}
                    className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 ${
                      selectedColor === color ? 'border-pink-500' : 'border-gray-200'
                    }`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Size:</h3>
              <div className="relative inline-block w-full sm:w-48">
                <button
                  className="flex items-center justify-between bg-gray-100 hover:bg-gray-200 rounded-md px-4 py-2 text-sm font-medium text-gray-700 w-full"
                  onClick={() => setIsSizeDropdownOpen(!isSizeDropdownOpen)}
                >
                  <span>{selectedSize || 'Select size'}</span>
                  <FaChevronDown className={`ml-2 text-xs ${isSizeDropdownOpen ? 'transform rotate-180' : ''}`} />
                </button>
                {isSizeDropdownOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg py-1 border border-gray-200">
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL', 'onesize'].map((size) => (
                      <button
                        key={size}
                        onClick={() => {
                          setSelectedSize(size);
                          setIsSizeDropdownOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          selectedSize === size
                            ? 'bg-pink-100 text-pink-700'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Product Description */}
            <div className="mb-6">
              <p className="text-gray-700 text-sm sm:text-base">
                {selectedProduct.description}
              </p>
              <button className="text-pink-500 text-sm font-medium mt-2">Read more</button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={() => toggleBookmark(selectedProduct)}
                className={`flex-1 border py-3 px-4 rounded-lg flex items-center justify-center gap-2 ${
                  bookmarkedItems.some(item => item.title === selectedProduct.title && item.brand === selectedProduct.brand)
                    ? "border-pink-500 bg-pink-50 text-pink-500"
                    : "border-gray-300 hover:bg-gray-50 text-gray-700"
                }`}
              >
                <BookmarkIcon className="h-5 w-5" />
                {bookmarkedItems.some(item => item.title === selectedProduct.title && item.brand === selectedProduct.brand)
                  ? "Bookmarked"
                  : "Bookmark"}
              </button>
              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: selectedProduct.title,
                      text: `Check out this ${selectedProduct.title} from ${selectedProduct.brand}`,
                      url: window.location.href,
                    }).catch(console.error);
                  } else {
                    alert('Share functionality not available in your browser');
                  }
                }}
                className="flex-1 border border-gray-300 hover:bg-gray-50 py-3 px-4 rounded-lg flex items-center justify-center gap-2"
              >
                <FaShare /> Share
              </button>
            </div>
          </div>
        </div>

        {/* Price Comparison Section */}
        <div className="border-t p-4">
          <h3 className="text-lg font-semibold mb-4">Compare all prices</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Retailer</th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buy Now</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Nykaa Fashion</td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rs. 4,260</td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <a href="#" className="text-pink-600 hover:text-pink-900">Buy Now</a>
                  </td>
                </tr>
                <tr>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Myntra</td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rs. 4,970</td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <a href="#" className="text-pink-600 hover:text-pink-900">Buy Now</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Similar Products Section */}
        <div className="border-t p-4">
          <h3 className="text-lg font-semibold mb-4">Similar products</h3>
          <ProductGrid
            filteredProducts={products}
            bookmarkedItems={bookmarkedItems}
            toggleBookmark={toggleBookmark}
            onProductClick={openProductModal}
          />
        </div>
      </div>
    </div>
  </>
)}

    </div>
  );
};

export default ImageGallery;