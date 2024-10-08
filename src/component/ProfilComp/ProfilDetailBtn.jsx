import React from "react";
import fotprof from "../../assets/img/profilcowok.png";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/user.store";

const ProfilDetailBtn = () => {
  const navigate = useNavigate();

  const { user } = useUserStore()

  return (
    <div className="bg-[#50B478] mx-4 h-16 rounded-lg py-3 px-4 flex text-white gap-3">
      <div
        id="fotoProfil"
        className="h-10 w-10 flex bg-[#E1F5FB] rounded-full my-auto flex-none"
      >
        <img src={fotprof} alt="" className="m-auto h-9 w-9" />
      </div>
      <div id="text" className=" grow text-sm font-medium">
        <p id="text" className="">
          {user?.userMetadata.fullname}
        </p>
        <p id="noHP" className="">
          {user?.userMetadata.phoneNumber}
        </p>
      </div>
      <div id="arrowNext" className=" flex-none my-auto">
        <button onClick={() => navigate("/akun")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#ffffff"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProfilDetailBtn;
