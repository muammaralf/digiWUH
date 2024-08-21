import React from "react";

const TextCards = (props) => {
  const { headLine } = props;
  return (
    <div className=" items-end gap-6">
      <div className="text-sm w-4/5">{headLine ? headLine : ""}</div>
      <div className="">
        <a href="/digiWUH/artikel" className="flex justify-end text-sm ml-auto">
          Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default TextCards;
