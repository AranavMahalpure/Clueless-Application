import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Loggedin from "./pages/Loggedin";
import Profile from "./pages/Profile";
import Wardrobes from "./pages/Wardrobes";
import Onboarding from "./pages/Onboarding";
import Search from "./pages/Search";
import Curations from "./pages/Curations";
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Loggedin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wardrobes" element={<Wardrobes />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/search" element={<Search/>} />
          <Route path="/curations" element={<Curations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
