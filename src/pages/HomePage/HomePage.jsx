import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import digiwuhLogo from "../../assets/img/digiwuhLogo.svg";
import profilFoto from "../../assets/img/ProfilFoto.svg";
import JadwalSetor from "../../component/JadwalSetor/JadwalSetor";
import Edukasi from "../../component/Edukasi/Edukasi";
import Cards from "../../component/Cards/Cards";
import { jadwal } from "../../data/Jadwal";
import { edukasi } from "../../data/Edukasi";
import Biopori2 from "../../assets/img/Biopori2.png";
import { artikel as artk } from "../../data/Artikeldata";
import { useNavigate } from "react-router-dom";

const HomePage = ({ children }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="">
        <div id="top" className="z-10 fixed flex top-0 bg-white w-full h-16">
          <div className="my-auto">
            <img
              src={digiwuhLogo}
              alt="digiwuh logo"
              className="h-8 object-contain my-auto ml-5"
            />
          </div>
          <div id="bell" className="absolute h-full flex right-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#50B478"
              className="my-auto"
            >
              <path d="M160-200v-66.67h80v-296q0-83.66 49.67-149.5Q339.33-778 420-796v-24q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v24q80.67 18 130.33 83.83Q720-646.33 720-562.67v296h80V-200H160Zm320-301.33ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM306.67-266.67h346.66v-296q0-72-50.66-122.66Q552-736 480-736t-122.67 50.67q-50.66 50.66-50.66 122.66v296Z" />
            </svg>
          </div>
        </div>
        <div
          id="profil"
          className="relative top-[60px] px-6 box-border bg-white max-h-96 w-full shadow-lg rounded-b-[32px]"
        >
          <div className="flex justify-between mt-2 w-full">
            <div className="my-auto">
              <p className="font-semibold text-xl">Halo, Ali!</p>
              {/* Ali nanti diganti yuppp */}
              <p>Selamat datang di Digiwuh!</p>
            </div>
            <div className="h-20 flex items-center">
              <img src={profilFoto} alt="foto profil" />
            </div>
          </div>
        </div>
        <div id="content" className="px-6 mt-20">
          <div id="jadwal" className="flex flex-col">
            <p id="jadwalText" className="font-semibold text-xl w-80 mb-1.5">
              Penjadwalan Rumah Sampah Kalurahan Nglipar
            </p>
            <div className=" grid grid-cols-2 gap-4">
              {jadwal.map((jadwal) => {
                return (
                  <>
                    <JadwalSetor
                      namaBS={jadwal.namaBS}
                      tgl={jadwal.tgl}
                      bulan={jadwal.bulan}
                      tahun={jadwal.tahun}
                      warna={jadwal.warna}
                    />
                  </>
                );
              })}
            </div>
          </div>
          <div id="Edukasi" className="mt-2">
            <p id="EdukasiText" className="font-semibold text-xl w-80 mb-1.5">
              Ruang Edukasi
            </p>
            <div className="grid grid-cols-3 gap-6">
              {edukasi.map((edukasi) => {
                return (
                  <Edukasi
                    icon={edukasi.icon}
                    bgout={edukasi.bgout}
                    bgicon={edukasi.bgicon}
                    nameEdukasi={edukasi.nameEdukasi}
                    linkBtn={edukasi.linkBtn}
                  />
                );
              })}
            </div>
          </div>
          <div id="artikel" className="mt-2">
            <div className="flex justify-between mb-1.5">
              <p id="ArtikelText" className="font-semibold text-xl w-80">
                Artikel
              </p>
              <button
                onClick={() => navigate("/digiWUH/artikel-list")}
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Selengkapnya
              </button>
            </div>
            <div className="">
              {artk.map((artk) => {
                return (
                  <button
                    onClick={() => navigate(artk.linkBtn)}
                    className="grid grid-cols-2 gap-4"
                  >
                    <Cards img={artk.img} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div id="bottomSpace" className="h-36"></div>
        {/* <Navbar /> */}
      </div>
      {children}
    </>
  );
};

export default HomePage;
