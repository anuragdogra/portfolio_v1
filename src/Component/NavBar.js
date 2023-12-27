import React, { useState } from "react";
import {Link} from "react-scroll"
import { useEffect } from "react";
const NavBar = ()=>{
    const [top, setTop] = useState(true);
    const [Nav ,SetNav] = useState(false);
    
useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 3 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);
    const Links = [
        {
           id:1,
           link: "home"

        },
        {
            id:2,
            link: "about"
        },
        {
            id:3,
            link: "portfolio"
        },
        {
            id:4,
            link: "experience"
        },
        {
            id:5,
            link: "contact"
        }
    ]
    return(
    <div className={`flex justify-between item-center bg-black text-white p-3 w-full fixed  z-20 shadow ${!top && `opacity-70 shadow-lg shadow-cyan-400/50`} `}>
        <div>
          <h1 className="text-5xl font-signature  ml-2   ">Anurag</h1>
        </div>

        <ul className="menu  items-center hidden md:flex  ">
            {Links.map(({id,link})=>(
            <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-white">
                 <Link to={link} smooth duration={500}>
              {link}
            </Link>
            </li>

            ))}
        </ul>
        <div onClick={()=>SetNav(!Nav)} className="cursor-pointer  pr-4 z-10 md:hidden">
         {Nav? <i className="fa fa-times text-2xl py-3 px-4" ></i>:  <i className="fa-solid fa-bars text-2xl py-3 px-4"></i>}
        </div>
        {Nav&&  <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-600  ">
        {Links.map(({id,link})=>(
            <li key={id} className="  px-4 py-6 text-4xl cursor-pointer capitalize text-gray-500 hover:scale-105 hover:text-white">
                <Link
                onClick={() => SetNav(!Nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>

            ))}
        </ul>}
       
    </div>)
}
export default NavBar;