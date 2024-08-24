import React from "react";
import { IoMdClose } from "react-icons/io";

const AlertGame = ({ onClose }) => {
  return (
    <div className="absolute h-screen w-screen bg-[#00000070] flex">
      <div className="m-auto p-4 w-[316px] text-center font-semibold text-lg bg-white rounded-xl flex flex-col gap-2">
        <p>
          Mohon maaf, game sedang dalam masa pengembangan.<br></br>Terima kasih!
        </p>
        <button onClick={onClose} className="mx-auto">
          <IoMdClose className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default AlertGame;
