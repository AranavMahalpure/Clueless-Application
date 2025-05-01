import React from "react";
import { FaGoogle } from "react-icons/fa";
import { ArrowRight } from "lucide-react";

const Sixth = () => {
  return (
    <section className="flex flex-col md:flex-row h-auto md:h-screen w-full overflow-hidden">
         {/* Left: Background Image Grid with Overlay (hidden on small screens) */}
      <div className="w-full md:w-1/2 relative h-96 md:h-full">
        {/* Image Grid */}
        <div className="absolute inset-0 grid grid-cols-2 grid-rows-6 gap-2 p-2">
          <img src="img2 .png" alt="img1" className="row-span-2 object-cover w-full h-full rounded-xl" />
          <img src="img2 .png" alt="img2" className="row-span-2 object-cover w-full h-full rounded-xl" />
          <img src="img3.png" alt="img3" className="row-span-2 object-cover w-full h-full rounded-xl" />
          <img src="img2 .png" alt="img4" className="row-span-2 object-cover w-full h-full rounded-xl" />
          <img src="img3.png" alt="img5" className="row-span-2 object-cover w-full h-full rounded-xl" />
          <img src="img3.png" alt="img6" className="row-span-2 object-cover w-full h-full rounded-xl" />
        </div>
        <div className="absolute inset-0 bg-white opacity-60"></div>
      </div>
      <div className="w-full md:w-1/2 bg-[#fdf4eb] flex flex-col justify-center items-center text-center px-6 py-12 md:py-0">
        <div className="max-w-md w-full space-y-6">
          <div>
            <span role="img" aria-label="strawberry" className="text-4xl">🍓</span>
            <h2 className="text-2xl font-medium mt-2">
              discover <span className="text-[#f5425d]">fashion</span> from over 10,000 brands
            </h2>
          </div>
           <div className="space-y-4">
            {/* Phone Input */}
            <div className="flex items-center bg-white rounded-full shadow-sm px-4 py-3">
              <span className="text-gray-400 text-sm pr-2">+91</span>
              <input
                type="number"
                placeholder="Enter your number"
                className="flex-1 outline-none text-sm bg-transparent appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
              <button  type='submit' className="text-black bg-[#BBBBBB] hover:bg-gray-200 rounded-full p-2 w-8 h-8 flex items-center justify-center">
              <ArrowRight className="text-white-400" />
              </button>
            </div>
            {/* Divider */}
            <div className="flex items-center justify-center text-gray-400 text-sm">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-4">or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            {/* Google Auth Button */}
            <button className="flex items-center justify-center w-full border border-gray-300 rounded-full py-3 mb-8 hover:bg-gray-100 transition">
              <FaGoogle className="mr-2 text-lg" />
              <span className="text-sm  font-medium">continue with google</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sixth;
