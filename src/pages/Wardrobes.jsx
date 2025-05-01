import React, { useEffect, useState } from 'react';
import Wardrobecard from '../components/Wardrobecard';
import Profileheader from '../components/Loggedin/Profileheader';
import BottomNav from '../components/BottomNav';

const Wardrobes = () => {
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  // Retrieve bookmarked items from localStorage
  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarkedItems')) || [];
    setBookmarkedItems(storedBookmarks);
  }, []);

  return (
    <div>
      <Profileheader />
      {/* Pass the bookmarked items as props to Wardrobecard */}
      <Wardrobecard products={bookmarkedItems} />
      <BottomNav />
    </div>
  );
};

export default Wardrobes;
