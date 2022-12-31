import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./scenes/Landingpage/Landing";
import LoginUser from "./scenes/Login/LoginUser";
import Pencapaian from "./scenes/Pencapaian/Pencapaian";
import Belajar from "./scenes/Belajar/Belajar";
import Belajar2 from "./scenes/Belajar/Belajar2";
import Kelas from "./scenes/Kelas/KelasPage";
import DaftarUser from "./scenes/Daftar/DaftarUser";
import Homepage from "./main/Homepage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/Login" element={<LoginUser />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Daftar" element={<DaftarUser />} />
        <Route path="/Belajar" element={<Belajar />} />
        <Route path="/Belajar2" element={<Belajar2 />} />
        <Route path="/Kelas" element={<Kelas />} />
        <Route path="/Pencapaian" element={<Pencapaian />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
