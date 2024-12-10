
"use client"

import React, { useState } from "react";
import Navbar from "@/components/Navbar components/Navbar";
import Feeds from "@/components/MainContent/Feeds";
import SideBar from "@/components/SideContents/SideBar";

export default function Home() {  

  const [ count, setCount ] = useState("data") 

  return (
   <div className="container page_container">     
      <Navbar/>  

      <div className="con">    
        <SideBar/>    
        <Feeds/>           
      </div>     

   </div>
  );
}
