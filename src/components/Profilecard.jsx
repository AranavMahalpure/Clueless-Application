import React from 'react';
import { Bookmark } from 'lucide-react';

const UserProfileCard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-20 bg-white p-4">
      {/* Background box */}
      <div className="bg-gray-100 rounded-xl h-40 sm:h-50 md:h-40 w-full max-w-screen mx-auto mb-[-60px]" />


      {/* Profile Circle and Name */}
      <div className="relative z-10 mt-[-20px] flex flex-col items-center">
        <div className="bg-red-500 text-white w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-2xl sm:text-3xl font-bold shadow-lg">
          A
        </div>
        <p className="text-base sm:text-lg font-medium mt-2">Aranav</p>
      </div>
     <br></br>
      {/* Wardrobe Button */}
      <div className="mt-6">
        <button className="flex items-center gap-2 bg-gray-100 px-4 sm:px-6 py-2 rounded-full shadow-sm hover:bg-gray-200 transition">
          <Bookmark className="w-5 h-5 text-black" />
          <span className="text-sm sm:text-base font-medium text-black">Wardrobe</span>
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;
