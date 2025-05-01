import React from "react";

const Fourth = () => {
  return (
    <section
      id="fourth-section"
      className="relative h-screen w-full bg-[#faf3eb] flex flex-col md:flex-row items-center justify-center px-6 md:px-10"
    >
      {/* Text on the left */}
      <div className="md:w-1/3 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          find your match
        </h1>
        <p className="text-gray-500 text-base md:text-lg max-w-md mx-auto md:mx-0">
          dreaming of something super specific?<br></br>
          like a red ribbed bodycon midi dress with a bow?<br></br>
          just type it in and find what you're looking for
        </p>
      </div>

      {/* Image on the right */}
      <div className="md:w-1/2 flex items-center justify-center">
        <img
          src="/fourth.png"
          alt="visual of dress match"
          className="rounded-2xl w-[300px] md:w-[460px] shadow-md"
        />
      </div>
    </section>
  );
};

export default Fourth;
