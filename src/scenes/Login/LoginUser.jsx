import login from "../../assets/img/login.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Axios from "axios";

function LoginUser() {
  <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script>;

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    Axios.post("http://localhost:8000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        name,
        password,
      }),
    });

    setRedirect(true);
  };

  if (redirect) {
    window.location = "/Homepage";
  }

  return (
    <>
      <div class="flex flex-cols-2 w-4/5 mx-auto mt-6 drop-shadow-xl justify-center">
        {/* Gambar */}
        <div class="mt-24">
          <img class="object-fill h-full" src={login} alt="" />
        </div>

        {/* Form */}
        <div class="w-1/2 mt-24">
          {/* Tombol Close */}
          <div class="grid justify-items-end mr-3 mt-3">
            <Link to="/" class="mt-3">
              <svg class="w-8 h-8" xmlns="login" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Link>
          </div>

          {/* Login */}
          <h1 class="text-center pt-6 text-3xl font-bold"> Login </h1>

          <form onSubmit={handleSubmit}>
            {/* Username */}
            <div className="mt-10 mb-5 grid justify-center align-middle">
              <h3 class="font-bold font-sans pl-1">Username</h3>
              {/* Input Username */}
              <input class="pl-1 rounded-md drop-shadow-md w-96 h-10" id="name" value={name} onChange={(event) => setName(event.target.value)} required placeholder="Masukan Username" type="text" />
            </div>

            {/* Password */}
            <div class="relative">
              <div className="grid justify-center align-middle mb-5">
                <h3 class="font-bold pl-1">Kata Sandi</h3>
                {/* Input Password */}
                <input className="pl-1 rounded-md drop-shadow-md w-96 h-10" id="password" value={password} onChange={(event) => setPassword(event.target.value)} required placeholder="Masukan Kata Sandi" type="password" />
                <h3 class="underline text-right" href="">
                  Lupa Password?
                </h3>
              </div>
            </div>

            {/* Tombol Login */}
            <div class="grid justify-center mt-10 divider divide-slate-900/50 font-bold">
              <Link to="/Homepage" class="text-lg pt-2 grid justify-center mt-10 divider divide-slate-900/50 font-bold mb-5 bg-yellow-400 rounded-full w-[240px] h-[50px] hover:scale-[1.05]">Login</Link>
            </div>
          </form>
          {/* Tombol Login dengan Google */}
          <div class="grid justify-center">
            <button class="bg-blue-400 rounded-full w-[240px] h-[50px] flex justify-center items-center font-bold hover:scale-[1.05]">
              <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>{" "}
              Login dengan Google
            </button>
          </div>

          {/* Belum Punya Akun */}
          <p class="mt-5 mb-5 text-center text-sm">
            Belum punya akun?{" "}
            <Link to="/Daftar" class="text-sm mt-5 mb-5 underline">
              Daftar
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
}
export default LoginUser;
