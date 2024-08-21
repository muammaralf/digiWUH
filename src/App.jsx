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
            path="/digiWUH/artikellist"
            element={
              <ArtikelList>
                <Cards img={Biopori2} classNameImg="h-52">
                  <TextCards
                    headLine="ernahkah kalian mendengar istilah biopori? Biopori adalah
                istilah yang digunakan untuk mendeskripsikan lubang resapan."
                  />
                </Cards>
              </ArtikelList>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
