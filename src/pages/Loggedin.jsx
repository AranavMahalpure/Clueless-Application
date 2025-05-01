import React from 'react';
import Header from "../components/Loggedin/Header";
import Loggedinfirst from "../components/Loggedin/Loggedinfirst";
import BottomNav from "../components/BottomNav";
import Second from "../components/Second";
import Third from "../components/Third";
import Fourth from "../components/Fourth";
import Fifth from "../components/Fifth";
const Loggedin=()=>{
    return (<>
        <Header/>
              <Loggedinfirst/>
              <Second />
              <Third />
              <Fourth/>
              <Fifth/>
              <BottomNav />
        </>
    )
 }

 export default Loggedin;