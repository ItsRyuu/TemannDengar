import React, { useState } from "react";
import {Link} from 'react-router-dom';

// import components
import Logo from "../assets/img/logo.png";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

// import icons
import { FaBars } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import DaftarUser from "../../Daftar/DaftarUser";

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <header className="mb-12 lg:mb-0 z-20 relative px-4 lg:px-0" data-aos="fade-down" data-aos-delay="1200" data-aos-duration="1000">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-[120px]">
            {/* logo */}
            <a href="/">
              <h1>
                Teman<b>Dengar</b>
              </h1>
            </a>

            {/* nav / initially hidden / show on large screens  */}
            <div className="hidden lg:flex">
              <Nav />
            </div>
          </div>

          {/* mobile nav / initially is showing / hide on large screens */}
          <div className={`${navMobile ? "max-h-52" : "max-h-0"} lg:hidden absolute top-24 bg-accent-tertiary w-full left-0 right-0 font-bold rounded transition-all overflow-hidden`}>
            <NavMobile />
          </div>

          {/* nav trigger btn / only shows on mobile screens */}
          <div onClick={() => setNavMobile(!navMobile)} className="text-2xl text-primary cursor-pointer lg:hidden">
            <FaBars />
          </div>
          <div className="space-x-6 flex flex-row items-center ">
            <Link to="/Login" className=" group block max-w-xs mx-auto p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-black  text-xl text-black hover:text-red-500 font-semibold  rounded-full py-2 px-6">Masuk</Link>
            
            <Link to="/Daftar" className=" group block max-w-xs mx-auto p-6 bg-black ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-red-500 text-xl text-white hover:text-black font-semibold rounded-full py-2 px-6">Daftar</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
