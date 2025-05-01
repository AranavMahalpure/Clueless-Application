import React from 'react';
import fifth from '../assets/fifth.png';
const Fifth = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center px-4 py-12 md:py-24 bg-white space-y-10 md:space-y-0 md:space-x-8">

    <div className="w-full md:w-1/1 flex justify-center">
      <img
        src={fifth}
        alt="Search design group"
        className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-contain"
      />
    </div>

    <div className="w-full md:w-1/2 text-center md:text-left px-2 md:px-4 max-w">
      <h2 className="text-2xl md:text-4xl text-center font-bold mb-4">build your wardrobe</h2>
      <p className="text-gray-500  text-base text-center leading-snug">
      create shoppable moodboards, stock up<br></br> for every vibe and occasion, <br></br>whenever you want
      </p>
    </div>
  </section>
  );
};

export default Fifth;
