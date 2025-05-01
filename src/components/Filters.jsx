import React, { useRef } from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";

const BrandFilter = ({
  brands,
  selectedBrand,
  setSelectedBrand,
  brandSearch,
  setBrandSearch,
  showBrandModal,
  setShowBrandModal,
  modalPosition
}) => {
  const modalRef = useRef(null);
  const brandBtnRef = useRef(null);

  return (
    <>
      <button
        ref={brandBtnRef}
        onClick={() => setShowBrandModal(true)}
        className="bg-gray-100 px-4 py-1 rounded-full text-sm hover:bg-gray-200 flex items-center"
      >
        {selectedBrand || "brands"}
        <FaChevronDown className="ml-2 text-sm" />
      </button>

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
    </>
  );
};

const PriceFilter = ({
  prices,
  selectedPrice,
  setSelectedPrice,
  showPriceModal,
  setShowPriceModal,
  priceModalPosition
}) => {
  const priceModalRef = useRef(null);
  const priceBtnRef = useRef(null);

  return (
    <>
      <button
        ref={priceBtnRef}
        onClick={() => setShowPriceModal(true)}
        className="bg-gray-100 px-4 py-1 rounded-full text-sm hover:bg-gray-200 flex items-center"
      >
        {selectedPrice || "price"}
        <FaChevronDown className="ml-2 text-sm" />
      </button>

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
    </>
  );
};

const QuickFilters = ({ filters }) => {
  return (
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
  );
};

export { BrandFilter, PriceFilter, QuickFilters };