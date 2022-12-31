import React from "react";
import Bronze1 from "../../assets/img/1.png";
import Bronze2 from "../../assets/img/2.png";
import Silver1 from "../../assets/img/3.png";
import Gold1 from "../../assets/img/4.png";
import Silver2 from "../../assets/img/5.png";
import Gold2 from "../../assets/img/6.png";
import AbiFly from "../../assets/img/AbiFly.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div>
        {/* Header */}
        <div class="flex columns-2">
          <div class="relative -left-10 bottom-2 justify-center flex columns-2 w-3/4 h-20 -mb-12 place-items-center ">
            <button class="text-3xl">
              <span class="text-3xl">Teman</span>
              <span class="text-3xl text-red-500">Dengar</span>
            </button>
          </div>

          {/* Tombol User Profile */}
          <div class="flex flex-columns-1 justify-end items-center w-full mr-4 mt-5">
            <Link to="/">
              <svg class="" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      ){/* Bodi Belajar */}
      <div class="grid grid-cols-5 gap-0">
        {/* SideBar */}
        <div class="w-full h-screen bg-birumuda text-2xl text-center grid grid-cols-1 place-items-center">
          <div class="relative bottom-12">
            <Link to="/Homepage">
              <h1 class="m-2 opacity-75">Belajar</h1>
            </Link>
            <br />
            <Link to="/Kelas">
              <h1 class="m-2 opacity-75">Kelas</h1>
            </Link>
            <br />
            <Link to="/Pencapaian">
              <h1 class="m-2">Pencapaian</h1>
            </Link>
          </div>
        </div>

        {/* Bodi */}
        <div class="grid col-span-4 gap-0 w-full bg-langit">
          <div class="grid grid-cols-3 shrink h-20">
            <h1 class="col-start-2 text-center font-bold my-auto text-3xl">PENGHARGAANMU</h1>
            <img class="col-start-3 items-start w-24 mt-5 mb-0 " src={AbiFly} />
          </div>

          <div class=" grid grid-rows-4 mx-10 ">
            <h1 class="text-start text-3xl font-bold my-auto">DAY STREAK</h1>
            <div className="row-start-2 row-span-3 shadow-xl  p-4 rounded-lg  w-full  px-4 bg-birubg">
              <div className="max-w-[1240px] mx-auto my-auto grid md:grid-cols-3 gap-8">
                <div className="hover:scale-105 duration-300">
                  <img className="w-auto mx-auto bg-white" src={Bronze1} alt="/" />
                </div>
                <div className="hover:scale-105 duration-300">
                  <img className="w-auto mx-auto bg-white" src={Silver1} alt="/" />
                </div>
                <div className="hover:scale-105 duration-300">
                  <img className="w-auto mx-auto bg-white" src={Gold1} alt="/" />
                </div>
              </div>
            </div>
          </div>

          <div class=" grid grid-rows-4 mx-10 ">
            <h1 class="text-start text-3xl font-bold my-auto">WIN STREAK</h1>
            <div className="row-start-2 row-span-3 shadow-xl  p-4 rounded-lg  w-full  px-4 bg-birubg">
              <div className="max-w-[1240px] mx-auto my-auto grid md:grid-cols-3 gap-8">
                <div className="hover:scale-105 duration-300">
                  <img className="w-auto mx-auto bg-white" src={Bronze2} alt="/" />
                </div>
                <div className="hover:scale-105 duration-300">
                  <img className="w-auto mx-auto bg-white" src={Silver2} alt="/" />
                </div>
                <div className="hover:scale-105 duration-300">
                  <img className="w-auto mx-auto bg-white" src={Gold2} alt="/" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
