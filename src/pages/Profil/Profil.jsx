import React from "react";
import ProfilDetailBtn from "../../component/ProfilComp/ProfilDetailBtn";
import ProfilTtg from "../../component/ProfilComp/ProfilTtg";
import Navbar from "../../component/Navbar/Navbar";

const Profil = (props) => {
  const { children } = props;
  return (
    <>
      <div className="h-screen overflow-hidden">
        <div id="headProfil" className="flex my-8">
          <p className="mx-auto font-semibold text-lg">Profil</p>
        </div>
        <ProfilDetailBtn />
        <ProfilTtg />
      </div>
      <Navbar />
    </>
  );
};

export default Profil;
