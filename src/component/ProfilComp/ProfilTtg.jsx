import React from "react";
import ProfilTtgBtn from "./ProfilTtgBtn";
import { MdLibraryBooks as Panduan } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { MdLogout } from "react-icons/md";

const ProfilTtg = () => {
  return (
    <div className="flex flex-col w-full h-full bg-white mt-6 pt-4 px-6">
      <p className="font-semibold">Tentang</p>
      <ProfilTtgBtn textBtn="Buku Panduan">
        <Panduan className="fill-black w-full h-full" />
      </ProfilTtgBtn>
      <ProfilTtgBtn textBtn="Riwayat Pembelian">
        <FaHistory className="fill-black w-full h-full" />
      </ProfilTtgBtn>
      <p className="font-semibold pt-4">Lainnya</p>
      <ProfilTtgBtn textBtn="Bantuan">
        <FiHelpCircle className="w-full h-full" />
      </ProfilTtgBtn>
      <ProfilTtgBtn textBtn="Keluar">
        <MdLogout className="w-full h-full" />
      </ProfilTtgBtn>
    </div>
  );
};

export default ProfilTtg;
