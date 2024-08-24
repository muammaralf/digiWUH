import React from "react";
import { useNavigate } from "react-router-dom";

const Edukasi = (props) => {
  const navigate = useNavigate();
  const { icon, bgout, bgicon, nameEdukasi, linkBtn } = props;
  return (
    <>
      <button
        onClick={() => navigate(linkBtn)}
        className={`${bgout} w-full p-2 rounded-lg`}
      >
        <div className="flex flex-col">
          <div
            id="iconEdukasi"
            className={
              bgicon
                ? `w-12 h-12 ${bgicon} rounded-full`
                : "w-12 h-12 bg-lime-700 rounded-full"
            }
          ></div>
          <p className="text-white font-reguler text-sm mt-2">
            {nameEdukasi ? nameEdukasi : "Segera Hadir"}
          </p>
        </div>
      </button>
    </>
  );
};

export default Edukasi;
