import React, { useState } from "react";
import { Link } from "react-router-dom";

function Belajar() {
  const HEIGHT = 250;
  const WIDTH = 420;
  const [playing, setPlaying] = useState(false);

  const startVideo = () => {
    setPlaying(true);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("app__videoFeed")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.error(err)
    );
  };

  const stopVideo = () => {
    setPlaying(false);
    let video = document.getElementsByClassName("app__videoFeed")[0];
    video.srcObject.getTracks()[0].stop();
  };
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
              <h1 class="m-2">Belajar</h1>
            </Link>
            <br />
            <Link to="/Kelas">
              <h1 class="m-2 opacity-75">Kelas</h1>
            </Link>
            <br />
            <Link to="/Pencapaian">
              <h1 class="m-2 opacity-75">Pencapaian</h1>
            </Link>
          </div>
        </div>

        {/* Bodi */}
        <div class="grid col-span-4 gap-0 bg-langit ">
          <div className="flex  gap-8 m-auto">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/qi9tK-4pmwc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <div className="app__container">
              <video height={HEIGHT} width={WIDTH} muted autoPlay className="app__videoFeed"></video>
            </div>
            <div className="app__input">
              {playing ? (
                <button onClick={stopVideo}>
                  <h1 className="text-xl font-bold btn btn-primary mb-8 xl:mb-0 py-4">Stop</h1>
                </button>
              ) : (
                <button onClick={startVideo}>
                  <h1 className="text-xl font-bold btn btn-primary mb-8 xl:mb-0 py-4">Start</h1>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Belajar;
