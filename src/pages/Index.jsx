import React from "react";
import Header from "../components/Header";
import First from "../components/First";
import Second from "../components/Second";
import Third from "../components/Third";
import Fourth from "../components/Fourth";
import Fifth from "../components/Fifth";
import Sixth from "../components/Sixth";
import { Home, Search, Camera, Shirt, User } from "lucide-react";
function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <First/>
      <Second />
      <Third />
      <Fourth/>
      <Fifth/>
      <Sixth/>
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-md px-6 py-2 flex justify-between md:hidden z-50">
      <Home className="text-gray-400" size={24} />
      <Search className="text-gray-400" size={24} />
      <div className="bg-[#FF4F5A] p-3 rounded-full flex items-center justify-center">
      <a href="/onboarding"><Camera className="text-white" size={24} /></a>
      </div>
      <a href="/onboarding"><Shirt className="text-gray-700" size={24} /></a>
      <a href="/onboarding"><User className="text-gray-400" size={24} /></a>
    </div>
    </div>
  );
}

export default Index;
