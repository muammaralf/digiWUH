import React from "react";
import { PiTrolleySuitcase } from "react-icons/pi";

const RiwayatComp = (props) => {
  return (
    <div className="bg-white flex py-2 px-4 gap-6 rounded-xl mb-4">
      <div className="my-auto flex flex-none h-8 w-8 bg-[#64E2DC] rounded-full">
        <PiTrolleySuitcase className="w-5 h-5 m-auto fill-[#ff0000]" />
      </div>
      <div className="flex flex-col grow">
        <p id="namaPesanan" className="font-medium">
          {props.text}
        </p>
        <p id="noTrans" className="text-xs">
          {props.noTrans}
        </p>
        <p id="tgl" className="text-xs">
          {props.tgl}
        </p>
      </div>
      <div className="flex-none my-auto bg-[#50b478] px-3 py-px rounded-full">
        <p className="text-white text-sm">Berhasil</p>
      </div>
    </div>
  );
};

export default RiwayatComp;
