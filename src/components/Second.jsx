import React from "react";

const Second = () => {
  return (
    <section
      id="search-section"
      className="relative h-screen w-full bg-[#fdf7f1] flex flex-col md:flex-row items-center justify-center px-6 md:px-10"
    >
      {/* Text Section */}
      <div className="md:w-1/3 text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-semibold text-[#1f1f1f] mb-4">
          search what you see
        </h1>
        <p className="text-gray-500 text-base md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
          got fashion inspiration lying in your gallery? <br />
          upload it on shoppin' and see us do our magic
        </p>
      </div>

      {/* Single Static Image Section */}
      <div className="md:w-1/2 flex items-center justify-center">
        <img
          src="https://shoppin.app/_next/image?url=%2Fassets%2Fimages%2Flanding_page%2Fhero_section_explainer_3.webp&w=1920&q=75"
          alt="Search Illustration"
          className="w-full max-w-md md:max-w-lg rounded-xl"
        />
      </div>
    </section>
  );
};

export default Second;
