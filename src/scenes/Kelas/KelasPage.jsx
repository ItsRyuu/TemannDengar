import React from "react";
import { Link } from "react-router-dom";
import AvaIm from "../../assets/img/testimonials/AvaIm.png";
import AvaAwa from "../../assets/img/testimonials/AvaAwa.png";
import AvaDre from "../../assets/img/testimonials/AvaDre.JPG";
import AvaMi from "../../assets/img/testimonials/AvaMi.png";
import AvaMin from "../../assets/img/testimonials/AvaMin.png";
import AvaSan from "../../assets/img/testimonials/AvaSan.png";
import AvaTor from "../../assets/img/testimonials/AvaTor.png";
import AvaVin from "../../assets/img/testimonials/AvaVin.png";

function KelasPage() {
  return (
    <>
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
      ){/* Bodi KelasPage */}
      <div class="grid grid-cols-5 gap-0">
        {/* SideBar */}
        <div class="w-full h-screen bg-birumuda text-2xl text-center grid grid-cols-1 place-items-center">
          <div class="relative bottom-12">
            <Link to="/Homepage">
              <h1 class="m-2 opacity-75">Belajar</h1>
            </Link>
            <br />
            <Link to="/Kelas">
              <h1 class="m-2">Kelas</h1>
            </Link>
            <br />
            <Link to="/Pencapaian">
              <h1 class="m-2 opacity-75">Pencapaian</h1>
            </Link>
          </div>
        </div>

        {/* Bodi */}
        <div class="grid col-span-4 gap-0 place-items-center w-full bg-langit">
          <div class="grid grid-cols-4 gap-5 text-center w-1/2">
            <div class="">
              <img class="object-fill h-[180px] w-[180px]" src={AvaIm} alt="" />
              <h2>Ibrahim Danial</h2>
              <p class="text-sm">Pengajar Sekolah Luar Biasa | S1 Computer Science Education</p>
            </div>

            <div>
              <img class="object-fill h-[180px] w-[180px]" src={AvaAwa} alt="" />
              <h2>Najwa Shihab</h2>
              <p class="text-sm">Pengajar Sekolah Luar Biasa | S1 Computer Science Education</p>
            </div>

            <div>
              <img class="object-fill h-[180px] w-[180px]" src={AvaDre} alt="" />
              <h2>Rangga Gintama</h2>
              <p class="text-sm">Pengajar Sekolah Luar Biasa | S1 Computer Science Education</p>
            </div>

            <div>
              <img class="object-fill h-[180px] w-[180px]" src={AvaMi} alt="" />
              <h2>Asysayakur</h2>
              <p class="text-sm">Pengajar Sekolah Luar Biasa | S1 Computer Science Education</p>
            </div>

            <div>
              <img class="object-fill h-[180px] w-[180px]" src={AvaMin} alt="" />
              <h2>Cimin Bekasi</h2>
              <p class="text-sm">Pengajar Sekolah Luar Biasa | S1 Computer Science Education</p>
            </div>

            <div>
              <img class="object-fill h-[180px] w-[180px]" src={AvaSan} alt="" />
              <h2>Sani Hendarsyah</h2>
              <p class="text-sm">Pengajar Sekolah Luar Biasa | S1 Computer Science Education</p>
            </div>

            <div>
              <img class="object-fill h-[180px] w-[180px]" src={AvaTor} alt="" />
              <h2>Thoriq Jecky</h2>
              <p class="text-sm">Pengajar Sekolah Luar Biasa | S1 Computer Science Education</p>
            </div>

            <div>
              <img class="object-fill h-[180px] w-[180px]" src={AvaVin} alt="" />
              <h2>Muhammad Empin</h2>
              <p class="text-sm">Pengajar Sekolah Luar Biasa | S1 Computer Science Education</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default KelasPage;
