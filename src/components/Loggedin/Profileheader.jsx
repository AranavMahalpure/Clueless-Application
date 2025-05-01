import React, { useState, useRef, useEffect } from "react";
import { FiUploadCloud, FiSearch, FiChevronDown, FiX } from "react-icons/fi";

const Profileheader = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState("women");
  const dropdownRef = useRef(null);
  const fileInputRef = useRef(null);

  const tags = {
    women: [
      { label: "beach neutrals", img: "image.png" },
      { label: "tank tops", img: "img2 .png" },
      { label: "clean girl fits", img: "img3.png" },
      { label: "cargo pants", img: "/tags/cargo.jpg" },
      { label: "boho skirts", img: "/tags/boho.jpg" },
      { label: "flirty black dress", img: "/tags/flirty.jpg" },
      { label: "kaftans", img: "/tags/kaftan.jpg" },
      { label: "abstract print", img: "/tags/abstract.jpg" },
      { label: "dark academia", img: "/tags/dark.jpg" },
    ],
    men: [],
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchBarClick = () => {
    setSearchOpen((prev) => !prev);
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <header className="w-full relative top-0 z-50 bg-white transition-all duration-300 shadow-sm py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
        <a className="text-xl font-bold">Clueless</a>
        </div>

        {/* Search Bar (always visible now) */}
        <div className="flex-1 mx-6 hidden md:flex items-center px-6 py-2 cursor-pointer" ref={dropdownRef}>
          <div
            className="flex items-center w-full bg-gray-100 rounded-full px-6 py-3"
            onClick={handleSearchBarClick}
          >
            <FiSearch className="text-gray-450 mr-6" />
            <input
              type="text"
              placeholder="what are you Clueless’ today?"
              className="bg-transparent outline-none flex-1 text-sm"
            />
            <FiChevronDown className="text-gray-700 text-lg px-2" />
          </div>

          {/* Dropdown */}
          {searchOpen && (
            <div className="absolute left-0 w-full bg-white shadow-lg rounded-xl p-4 z-50 top-[100%]">
              <div className="flex justify-end">
                <button onClick={() => setSearchOpen(false)}>
                  <FiX className="text-xl text-gray-600" />
                </button>
              </div>
              <div className="flex items-center space-x-2 mb-4">
                <button
                  onClick={() => setSelectedTab("women")}
                  className={`px-4 py-1 rounded-full font-semibold ${
                    selectedTab === "women" ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-500"
                  }`}
                >
                  women
                </button>
                <button
                  className="px-4 py-1 rounded-full bg-gray-100 text-gray-400 cursor-not-allowed"
                  disabled
                >
                  men <span className="text-xs">(launching soon)</span>
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[60vh] overflow-y-auto">
                {tags[selectedTab].map((tag, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 p-2 border rounded-lg cursor-pointer hover:shadow-sm transition"
                  >
                    <img src={tag.img} alt={tag.label} className="h-12 w-12 rounded object-cover" />
                    <span className="text-sm font-medium">{tag.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Navigation & Profile */}
        <div className="flex items-center space-x-6">
          <nav className="hidden sm:flex space-x-8 text-gray-500 font-medium">
            <a href="/wardrobes" className="hover:text-black">wardrobes</a>
          </nav>
          <div className="bg-rose-50 px-4 py-2 rounded-full font-semibold text-black">
            <a href="/profile">aranav</a>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar (also always visible now) */}
      <div className="md:hidden mt-2 px-4 flex flex-col space-y-2 py-1">
        <div
          className="flex items-center bg-gray-100 rounded-full px-4 py-2 cursor-pointer"
          onClick={handleSearchBarClick}
        >
          <FiSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search with Clueless"
            className="bg-transparent outline-none flex-1 text-sm"
          />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => console.log("Selected file:", e.target.files[0])}
          />
        </div>

        {searchOpen && (
          <div className="absolute left-0 w-full bg-white shadow-lg rounded-xl p-4 z-50 top-[100%]">
            <div className="flex justify-end">
              <button onClick={() => setSearchOpen(false)}>
                <FiX className="text-xl text-gray-600" />
              </button>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <button
                onClick={() => setSelectedTab("women")}
                className={`px-4 py-1 rounded-full font-semibold ${
                  selectedTab === "women" ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-500"
                }`}
              >
                women
              </button>
              <button
                className="px-4 py-1 rounded-full bg-gray-100 text-gray-400 cursor-not-allowed"
                disabled
              >
                men <span className="text-xs">(launching soon)</span>
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[60vh] overflow-y-auto">
              {tags[selectedTab].map((tag, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 p-2 border rounded-lg cursor-pointer hover:shadow-sm transition"
                >
                  <img src={tag.img} alt={tag.label} className="h-12 w-12 rounded object-cover" />
                  <span className="text-sm font-medium">{tag.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Profileheader;
