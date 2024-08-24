import React from "react";
import BackButton from "../../component/BackButton";
import profil from "../../assets/img/fotoProfil3.png";
import AkunSayaComp from "../../component/Akunsaya/AkunSayaComp";

const AkunSaya = () => {
  return (
    <div className=" h-screen overflow-hidden">
      <div className="mt-6 mx-6">
        <BackButton text="Akun Saya" />
      </div>
      <div id="fotoProfil" className="my-6 flex flex-col">
        <img src={profil} alt="" className="h-32 w-32 mx-auto" />
      </div>
      <AkunSayaComp />
    </div>
  );
};

export default AkunSaya;
