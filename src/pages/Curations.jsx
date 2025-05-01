import React from "react";
import Profileheader from "../components/Loggedin/Profileheader";
import BottomNav from "../components/BottomNav";
import NoJeansSummer from "../components/NoJeansSummer";

const Curations = () =>{
    return (
        <div>
            <Profileheader/>
            <NoJeansSummer/>
            <BottomNav/>
        </div>
    )
}

export default Curations;