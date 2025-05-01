import React from 'react';

const Third = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center px-4 py-12 md:py-24 bg-white space-y-10 md:space-y-0 md:space-x-8">
      
      {/* Image Section */}
      <div className="w-full md:w-1/1 flex justify-center">
        <img
          src="/third.png"
          alt="Search design group"
          className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-contain"
        />
      </div>

      {/* Text Block */}
      <div className="w-full md:w-1/2 text-center md:text-left px-2 md:px-30 max-w">
        <h2 className="text-2xl md:text-4xl text-center font-bold mb-4">search your vibe</h2>
        <p className="text-gray-500 text-base  text-center leading-snug">
        think of a vibe you're into, say - summer<br></br>in europe - and find the most accurate <br></br>matches! search, discover, buy, and<br></br>
        serve
        </p>
      </div>
    </section>
  );
};

export default Third;