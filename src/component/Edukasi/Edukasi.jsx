import React from "react";

const Edukasi = (props) => {
  const { icon, bgout, bgicon, nameEdukasi } = props;
  return (
    <>
      <div
        className={
          bgout
            ? `rounded-lg ${bgout} p-3 shadow-md`
            : "rounded-lg bg-lime-500 p-3 shadow-md"
        }
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
      </div>
    </>
  );
};

export default Edukasi;
