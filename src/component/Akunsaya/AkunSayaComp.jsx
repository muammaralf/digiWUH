import React from "react";
import AkunSayaEdit from "./AkunSayaEdit";
import { FaEdit } from "react-icons/fa";
import Button1 from "../Button/Button1";

const AkunSayaComp = () => {
  return (
    <div className="flex flex-col w-full h-full bg-white mt-6 pt-4 px-6">
      <form action="submit">
        <AkunSayaEdit text="Nama" isi="Ali Fahmi" />
        <AkunSayaEdit text="Nomor HP atau WhatsApp" isi="081234567890" />
      </form>
      <div className="flex flex-col mt-2">
        <p className="text-slate-600 text-sm">Email</p>
        <p className="">alifahmi@gmail.com</p>
      </div>

      <Button1
        classN="btn-lanjut w-fit px-5 mx-auto mt-6"
        buttonName="Simpan"
      />
    </div>
  );
};

export default AkunSayaComp;
