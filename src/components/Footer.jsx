import React from "react";
import { FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#fdf4eb] text-center px-4 py-45 overflow-hidden">
      <div className="absolute top-10 left-6 text-pink-400 text-xl animate-pulse">✦</div>
      <div className="absolute top-24 right-8 text-pink-400 text-lg animate-pulse">✦</div>
      <div className="absolute top-32 left-16 text-pink-300 text-sm animate-pulse">✦</div>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        world's first <br />
        AI-driven <span className="text-[#f5425d]">shoppin'</span> experience
      </h2>
      <p className="text-gray-500 text-sm md:text-base mb-6">
        discover fashion from 10,000+ brands <br />
        and shop all in one place
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-10 mb-30">
        <a
          href="https://www.instagram.com/shoppin.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-gradient-to-tr from-pink-400 via-yellow-400 to-purple-500 p-3 rounded-full"
        >
          <FaInstagram className="text-lg" />
        </a>
        <a
          href="https://www.linkedin.com/company/shoppinapp/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-600 p-3 rounded-full"
        >
          <FaLinkedinIn className="text-lg" />
        </a>
        <a
          href="https://in.pinterest.com/shoppindotapp/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-red-600 p-3 rounded-full"
        >
          <FaPinterestP className="text-lg" />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-200 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-2">
        <p>© 2025 USAR Commerce Technologies Pvt. Ltd.</p>
        <p>
          contact us at <a href="mailto:shlok@shoppin.app" className="hover:underline">shlok@shoppin.app</a>
        </p>
      </div>

      {/* Faded Background Logo */}
      <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 text-[120px] md:text-[200px] font-extrabold text-[#f5425d] opacity-10 pointer-events-none select-none leading-none">
        shoppin’
      </div>
    </footer>
  );
};

export default Footer;
