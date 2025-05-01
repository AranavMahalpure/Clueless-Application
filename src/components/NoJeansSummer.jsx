import React from 'react';

const NoJeansSummer = () => {
  const bannerImages = [
    'image.png',
    'img 2.png',
    'img3.png',
    'img 2.png',
    'img3.png',
    'image.png',
  ];

  return (
    <div className="w-full bg-white p-4">
      {/* Banner */}
      <div className="relative bg-pink-200 bg-[url('/path/to/gingham-bg.png')] bg-repeat p-6 rounded-xl text-center overflow-hidden">
        <div className="flex justify-center gap-6 flex-wrap">
          {bannerImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Model ${i + 1}`}
              className="h-[280px] object-cover"
            />
          ))}
        </div>
        <h2 className="text-pink-500 font-bold text-3xl mt-4">
          fits for “no jeans summer”
        </h2>
        <div className="absolute bottom-[-12px] left-1/2 transform -translate-x-1/2 flex space-x-1">
          <span className="w-2 h-2 bg-gray-300 rounded-full" />
          <span className="w-2 h-2 bg-black rounded-full" />
          <span className="w-2 h-2 bg-gray-300 rounded-full" />
        </div>
      </div>

      {/* Handpicked Section */}
      <div className="mt-10">
        <div className="flex justify-between items-center px-2">
          <h3 className="text-2xl font-semibold">handpicked</h3>
          <a href="#" className="text-blue-600 font-medium">
            view all →
          </a>
        </div>
        {/* Add more product cards here */}
      </div>
    </div>
  );
};

export default NoJeansSummer;
