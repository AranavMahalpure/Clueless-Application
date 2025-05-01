import React from "react";
import Profileheader from "../components/Loggedin/Profileheader";
import ImageGallery from "../components/ImageGallery";
import BottomNav from "../components/BottomNav";
const Search = ()=>{
    return (
        <div>
         <Profileheader/>
         <ImageGallery/>
         <BottomNav/>
        </div>
    )
}

export default Search;