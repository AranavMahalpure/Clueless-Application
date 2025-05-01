import React, { useState, useEffect, useRef } from "react";
import { FiUploadCloud } from "react-icons/fi";
const HeroSection = () => {
  const sentences = [
    "ethnic but barbiecore",
    "saree with a twist of pink",
    "traditional meets glam",
  ];
  const tags = {
    women: [
      { label: "beach neutrals", img: "image.png" },
      { label: "tank tops", img: "img2 .png" },
      { label: "clean girl fits", img: "img3.png" },
      { label: "cargo pants", img: "image.png" },
      { label: "boho skirts", img: "img2 .png" },
      { label: "flirty black dress", img: "img2 .png" },
      { label: "kaftans", img: "image.png" },
      { label: "abstract print", img: "img3.png" },
      { label: "dark academia", img: "img2 .png" },
    ],
    men: [],
  };
  const [current, setCurrent] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedTab, setSelectedTab] = useState("women");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sentences.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [sentences.length]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="text-center mt-20 md:mt-32 px-4 relative">
      <h1 className="text-3xl font-semibold text-gray-900">
        discover fashion
      </h1>
      <h2 className="text-xl mt-2 font-medium text-pink-500 transition-all duration-300 ease-in-out">
        {sentences[current]}
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center mt-6 gap-3 relative z-10">
        <div className="relative w-full md:w-[600px]" ref={dropdownRef}>
          <input
            type="text"
            placeholder="Search styles like..."
            className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
            onFocus={() => setIsDropdownOpen(true)}
          />
          {isDropdownOpen && (
            <div className="absolute top-12 left-0 right-0 bg-white shadow-xl rounded-xl p-4 mt-2 z-50 text-left">
              <div className="flex justify-center gap-2 mb-4">
                <button className="bg-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  women
                </button>
                <button className="bg-gray-200 text-gray-500 px-4 py-1 rounded-full text-sm font-semibold cursor-not-allowed">
                  men <span className="text-xs">(soon)</span>
                </button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 w-full gap-3 max-h-[60vh]">
                {tags[selectedTab].map((tag, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-2 p-2 border rounded-lg cursor-pointer hover:shadow-sm transition"
                  >
                    <img src={tag.img} alt={tag.label} className="h-12 w-6 rounded object-cover w-10" />
                    <span className="text-sm font-medium">{tag.label}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ImageGallery = () => {
  const [visibleImages, setVisibleImages] = useState(new Array(6).fill(0));
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImages((prev) => prev.map(() => Math.random()));

      if (scrollRef1.current) {
        scrollRef1.current.scrollLeft += 120;
        if (
          scrollRef1.current.scrollLeft + scrollRef1.current.offsetWidth >=
          scrollRef1.current.scrollWidth
        ) {
          scrollRef1.current.scrollLeft = 0;
        }
      }

      if (scrollRef2.current) {
        scrollRef2.current.scrollLeft += 150;
        if (
          scrollRef2.current.scrollLeft + scrollRef2.current.offsetWidth >=
          scrollRef2.current.scrollWidth
        ) {
          scrollRef2.current.scrollLeft = 0;
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        ref={scrollRef1}
        className="flex overflow-x-auto gap-2 mt-10 px-4 scroll-smooth md:grid md:grid-cols-6 md:overflow-x-hidden"
      >
        {visibleImages.map((_, index) => (
          <img
            key={index}
            src="/image.png"
            alt={`fashion-${index}`}
            className="rounded-md object-cover h-40 min-w-[48%] md:min-w-0 w-full transition-all duration-500"
          />
        ))}
      </div>
      <div
        ref={scrollRef2}
        className="flex overflow-x-auto gap-2 mt-8 px-4 scroll-smooth md:grid md:grid-cols-6 md:overflow-x-hidden"
      >
        {visibleImages.map((_, index) => (
          <img
            key={index}
            src="/image.png"
            alt={`fashion-${index}`}
            className="rounded-md object-cover h-40 min-w-[48%] md:min-w-0 w-full transition-all duration-500"
          />
        ))}
      </div>
    </>
  );
};

const Loggedinfirst = () => {
  return (
    <div>
      <HeroSection />
      <ImageGallery />
    </div>
  );
};

export default Loggedinfirst;
