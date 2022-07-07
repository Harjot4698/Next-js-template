import Link from "next/link";
import React, { useEffect, useState } from "react";
import JSONDATA from './MOCK_DATA.json'
import {
  FaBars,
  FaTimes,
 
} from "react-icons/fa";

const Navbar = () => {
  

 

  const [searchTerm,setSearchTerm]=useState("");

  return (<><div className="fixed h-20 w-full z-10 duration-300 ease-in bg-slate-100 border-2 border-slate-300">
    <div className="flex justify-between items-center w-full h-full mx-auto max-w-screen-xl ">
       <h1>Logo</h1> 
       <div>
       <div>
        
        <input type='text' placeholder="Search..." onChange={(event)=>{setSearchTerm(event.target.value);
       }}/>
     
       
       </div>
       
       </div>
       <div>

        <h1>lucid read</h1>
       </div>

       
       
       
       
       </div>
    
    

     



  </div>
  </>
  );
  };
export default Navbar;
