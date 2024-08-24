import React from "react";
import { useNavigate } from "react-router-dom";

const TextCards = (props) => {
  const { headLine, linkBtn } = props;
  const navigate = useNavigate();
  return (
    <div className=" items-end gap-6">
      <div className="text-sm w-4/5">{headLine ? headLine : ""}</div>
      <div className="">
        <button
          onClick={() => navigate(linkBtn)}
          className="flex justify-end text-sm ml-auto"
        >
          Selengkapnya
        </button>
      </div>
    </div>
  );
};

export default TextCards;
