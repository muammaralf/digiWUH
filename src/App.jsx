import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button1 from "./component/Button/Button1";
import Cards from "./component/Cards/Cards";
import SetorBeli from "./component/SetorBeli/SetorBeli";
import { button } from "./data/button";
import { formRegist, formSignin } from "./data/FormData";
import { Form, NavLink } from "react-router-dom";
import AlamatBaru from "./component/Alamat/AlamatBaru";
import AlamatPilih from "./component/Alamat/AlamatPilih";
import SignIn from "./pages/Signin/SignIn";
import FormComponent from "./component/Form/FormComponent";
import Regist from "./pages/Regist/Regist";
import Navbar from "./component/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import JadwalSetor from "./component/JadwalSetor/JadwalSetor";
import Edukasi from "./component/Edukasi/Edukasi";
import ArtikelList from "./pages/ArtikelList/ArtikelList";
import TextCards from "./component/TextCards/TextCards";
import Biopori2 from "./assets/img/Biopori2.png";
import ArtikelPage from "./pages/ArtikelPage/ArtikelPage";

import Profil from "./pages/Profil/Profil";
import ProfilDetailBtn from "./component/ProfilComp/ProfilDetailBtn";
import Acara from "./pages/Acara/Acara";
import BeliProduk from "./pages/Store/BeliProduk";
import Confirm from "./pages/Store/Confirm";
import KonfirmasiBerhasil from "./pages/Store/KonfirmasiBerhasil";
import Intro from "./pages/Signin/Intro";
import ProfilTtg from "./component/ProfilComp/ProfilTtg";
import AkunSaya from "./pages/Profil/AkunSaya";
import Riwayat from "./pages/Riwayat/Riwayat";
import DetailAcara from "./pages/Acara/DetailAcara";
import Video from "./pages/Video/Video";
import Game from "./pages/Game/Game";
import AlertGame from "./component/Alert/AlertGame";
import { artikel as artk } from "./data/Artikeldata";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/digiWUH" element={<SignIn />} />

          <Route
            path="/digiWUH/home"
            element={
              <HomePage>
                <Navbar />
              </HomePage>
            }
          />

          <Route path="/digiWUH/artikel" element={<ArtikelPage />} />

          <Route
            path="/digiWUH/artikel-list"
            element={
              <ArtikelList>
                <Cards img={Biopori2} classNameImg="h-52" />
              </ArtikelList>
            }
          />

          {/* joki dimulai dari route di bawah ini */}
          <Route path="/digiWUH/acara" element={<Acara />} />

          <Route path="/digiWUH/beli-produk" element={<BeliProduk />} />

          <Route path="/digiWUH/konfirmasi" element={<Confirm />} />

          <Route
            path="/digiWUH/konfirmasi-berhasil"
            element={<KonfirmasiBerhasil />}
          />

          <Route path="/digiWUH/intro" element={<Intro />} />

          <Route path="/digiWUH/game" element={<Game />} />
          <Route path="/digiWUH/video" element={<Video />} />
          <Route path="/digiWUH/profil" element={<Profil />} />
          <Route path="/digiWUH/akun" element={<AkunSaya />} />
          <Route path="/digiWUH/daftar" element={<Regist />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
