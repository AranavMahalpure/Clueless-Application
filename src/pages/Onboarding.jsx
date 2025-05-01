import React, { useState, useEffect } from "react";
import onboarding1 from "../assets/onboarding.png";
import onboarding2 from "../assets/onboarding2.png";
import onboarding3 from "../assets/onboarding3.png";
import { ArrowRight } from "lucide-react";

const Onboarding = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  const texts = ["vibes", "shop what you see", "save fashion trends"];
  const images = [onboarding1, onboarding2, onboarding3];

  useEffect(() => {
    const textTimer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 2000);

    const imageTimer = setInterval(() => {
      setImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(textTimer);
      clearInterval(imageTimer);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-white px-4 py-6">
      {/* Header Text */}
      <h1 className="text-xl md:text-3xl font-semibold text-center">
        <span className="text-[#FF4F5A] font-bold">{texts[textIndex].split(" ")[0]}</span>{" "}
        {texts[textIndex].split(" ").slice(1).join(" ")}
      </h1>

      {/* Carousel Images */}
      <div className="flex items-center justify-center mt-6 space-x-4">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`slide-${idx}`}
            className={`w-[90px] h-[120px] md:w-[150px] md:h-[200px] rounded-xl object-cover transition-all duration-500 ${
              idx === imageIndex ? "opacity-100 scale-100" : "opacity-40 scale-95"
            }`}
          />
        ))}
      </div>

      {/* Dots */}
      <div className="flex space-x-2 my-4">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === imageIndex ? "bg-red-400" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>

      {/* Logo */}
      <div className="flex flex-col items-center space-y-1">
        <h2 className="text-lg font-medium">
          welcome to <span className="text-[#FF4F5A] font-bold">Clueless</span>
        </h2>
      </div>

      {/* Phone Input */}
      <div className="mt-6 w-full max-w-md">
        <div className="flex items-center border rounded-full px-4 py-2 shadow-sm">
          <span className="text-gray-500 pr-2">+91</span>
          <input
            type="tel"
            placeholder="Enter your number"
            className="flex-1 outline-none"
          />
          <ArrowRight className="text-gray-400" />
        </div>
      </div>

      {/* OR separator */}
      <div className="my-4 text-gray-400 flex items-center w-full max-w-md">
        <div className="flex-grow h-px bg-gray-200" />
        <span className="px-2 text-sm">or</span>
        <div className="flex-grow h-px bg-gray-200" />
      </div>

      {/* Google Button */}
      <button className="flex items-center justify-center space-x-2 border rounded-full px-6 py-2 text-sm shadow-sm">
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google"
          className="w-5 h-5"
        />
        <span>continue with google</span>
      </button>
    </div>
  );
};

export default Onboarding;
