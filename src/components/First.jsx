import React, { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  const sentences = [
    "ethnic but barbiecore",
    "saree with a twist of pink",
    "traditional meets glam",
  ];
  const colors = ["text-pink-500", "text-orange-500", "text-purple-500"];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sentences.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mt-28 md:mt-40 px-4">
      <h1 className="text-3xl font-semibold text-gray-900">discover fashion</h1>
      <h2
        className={`text-xl mt-2 font-medium transition-all duration-300 ease-in-out ${colors[current]}`}
      >
        {sentences[current]}
      </h2>
      <a href="/onboarding">
        <button
          className="text-white px-10 py-2 mt-4 rounded-full font-medium transition hover:opacity-90 bg-pink-500 text-white"
        >
          let’s go Clueless’
        </button>
      </a>
    </div>
  );
};

const ImageGallery = () => {
  const [visibleImages, setVisibleImages] = useState(new Array(6).fill(0));
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleImages((prev) => prev.map(() => Math.random())); // force re-render

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
        className="flex overflow-x-auto gap-2 mt-12 px-4 scroll-smooth md:grid md:grid-cols-6 md:overflow-x-hidden"
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

const First = () => {
  return (
    <div>
      <HeroSection />
      <ImageGallery />
    </div>
  );
};

export default First;
