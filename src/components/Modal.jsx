import React from "react";
import { X } from "lucide-react";

const Modal = ({ item, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-white p-4">
          <img src={item.image} alt={item.title} className="rounded-lg w-full h-auto" />
        </div>
        <div className="w-full md:w-1/2 p-6 relative">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-black"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p className="text-sm text-gray-500">{item.category}</p>
          <div className="mt-2">
            <p className="text-lg font-bold text-rose-600">{item.price}</p>
            <p className="text-sm text-gray-400 line-through">{item.discount}</p>
          </div>
          <div className="mt-4">
            <span className="text-xs uppercase text-gray-400">color</span>
            <div className="mt-1 w-6 h-6 bg-yellow-300 rounded-full border-2 border-yellow-600" />
          </div>
          <div className="mt-4">
            <label className="text-xs uppercase text-gray-400">size</label>
            <select className="mt-1 block w-full border border-gray-300 rounded px-2 py-1">
              <option>xxl</option>
              <option>xl</option>
              <option>l</option>
            </select>
          </div>
          <p className="mt-4 text-sm text-gray-600">{item.description}</p>
          <button className="mt-6 w-full bg-rose-500 hover:bg-rose-600 text-white py-2 rounded-full transition">
            <a href="https://www.ajio.com" target="_blank" rel="noreferrer">
              🔗 shop on ajio
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
