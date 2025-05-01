import React from "react";
import { Home, Search, Camera, Shirt, User } from "lucide-react";

const BottomNav = () => {
  return (
   <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md px-6 py-4 flex justify-between md:hidden z-50">
         <Home className="text-gray-400" size={24} />
         <a href="/curations"><Search className="text-gray-400" size={24} /></a>
         <div className="bg-[#FF4F5A] p-3 rounded-full flex items-center justify-center">
         <a href="/onboarding"><Camera className="text-white" size={24} /></a>
         </div>
         <a href="/wardrobes"><Shirt className="text-gray-700" size={24} /></a>
         <a href="/profile"><User className="text-gray-400" size={24} /></a>
       </div>
  );
};

export default BottomNav;
