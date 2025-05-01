import React from "react";
import Profilecard from "../components/Profilecard"
import Profileheader from "../components/Loggedin/Profileheader"
import Wardrobecard  from "../components/Wardrobecard";
import { Bookmark } from 'lucide-react';
import BottomNav from "../components/BottomNav";
const Profile = () => {
   return (<div>
    <Profileheader/>
    <Profilecard/>
    <Wardrobecard/>
    <div className="flex items-center justify-center bg-white px-4">
      <button className="flex justify-center items-center gap-2 bg-gray-100 px-4 sm:px-6 py-2 rounded-full shadow-sm hover:bg-gray-200 transition">
        <Bookmark className="w-5 h-5 text-black" />
        <a href="/">
          <span className="text-sm sm:text-base font-medium text-black">Logout</span>
        </a>
      </button>
    </div>
    <BottomNav/>
</div>
  );
};

export default Profile;
