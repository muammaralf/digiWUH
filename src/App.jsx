import {useState} from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import "./App.css";
import Cards from "./component/Cards/Cards";
import SignIn from "./pages/Signin/SignIn";
import Regist from "./pages/Regist/Regist";
import Navbar from "./component/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import ArtikelList from "./pages/ArtikelList/ArtikelList";
import Biopori2 from "./assets/img/Biopori2.png";
import ArtikelPage from "./pages/ArtikelPage/ArtikelPage";

import Profil from "./pages/Profil/Profil";
import Acara from "./pages/Acara/Acara";
import BeliProduk from "./pages/Store/BeliProduk";
import Confirm from "./pages/Store/Confirm";
import KonfirmasiBerhasil from "./pages/Store/KonfirmasiBerhasil";
import Intro from "./pages/Signin/Intro";
import AkunSaya from "./pages/Profil/AkunSaya";
import DetailAcara from "./pages/Acara/DetailAcara";
import Video from "./pages/Video/Video";
import Game from "./pages/Game/Game";
import DemoEndpoint from './pages/DemoEndpoint/DemoEndpoint';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Riwayat from "./pages/Riwayat/Riwayat.jsx";
import useUserStore from "./store/user.store.js";
import Logout from "./pages/Logout/Logout.jsx";

function AuthMiddleware({children}) {
  const {user} = useUserStore()

  if (!user) {
    return <Navigate to="/masuk"/>
  }

  return children
}

const routes = [
  {
    path: '/masuk',
    element: <SignIn/>,
    auth: false
  },
  {
    path: '/daftar',
    element: <Regist/>,
    auth: false
  },
  {
    path: '/logout',
    element: <Logout/>,
    auth: true
  },
  {
    path: '/home',
    element: (
      <HomePage>
        <Navbar/>
      </HomePage>
    ),
    auth: true,
  },
  {
    path: "/artikel",
    element: (
      <ArtikelList>
        <Cards img={Biopori2} classNameImg="h-52"/>
      </ArtikelList>
    )
  },
  {
    path: "/artikel/:id",
    element: <ArtikelPage/>,
    auth: true,
  },
  {
    path: "/acara",
    element: <Acara/>,
    auth: true,
  },
  {
    path: "/acara/:id",
    element: <DetailAcara/>,
    auth: true,
  },
  {
    path: "/beli-produk",
    element: <BeliProduk/>,
    auth: true,
  },
  {
    path: "/beli-produk/konfirmasi",
    element: <Confirm/>,
    auth: true,
  },
  {
    path: "/beli-produk/konfirmasi-berhasil",
    element: <KonfirmasiBerhasil/>,
    auth: true,
  },
  {
    path: "/intro",
    element: <Intro/>,
    auth: true,
  },
  {
    path: "/game",
    element: <Game/>,
    auth: true,
  },
  {
    path: "/video",
    element: <Video/>,
    auth: true,
  },
  {
    path: "/profil",
    element: <Profil/>,
    auth: true,
  },
  {
    path: "/profil/riwayat-pembelian",
    element: <Riwayat/>,
    auth: true,
  },
  {
    path: "/akun",
    element: <AkunSaya/>,
    auth: true,
  },
  {
    path: "/demo-endpoint",
    element: <DemoEndpoint/>,
    auth: true,
  },
]

function App() {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.auth ? (
                <AuthMiddleware>
                  {route.element}
                </AuthMiddleware>
              ) : (
                route.element
              )}
            />
          ))}
          <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;
