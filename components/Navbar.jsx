import Link from "next/link";
import React, { useEffect, useState } from "react";

import {
  FaBars,
  FaTimes,
 
} from "react-icons/fa";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const [pageScroll, setPageScroll] = useState(false);

  useEffect(() => {
    const sub = window.addEventListener("scroll", () =>
      setPageScroll(window.scrollY >= 90)
    );

    return sub;
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "portfolio",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "me",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (<><div className="fixed h-16 w-full duration-300 ease-in  bg-slate-100">
    <div className="flex justify-between items-center w-full h-full mx-auto max-w-screen-xl ">
       <h1>Logo</h1> 
       <div>

        <h1>Search</h1>
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
