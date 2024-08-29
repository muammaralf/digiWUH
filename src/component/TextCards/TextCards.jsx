import React from "react";
import {Link} from "react-router-dom";

const TextCards = (props) => {
  const { headLine, linkBtn } = props;
  return (
    <div className=" items-end gap-6">
      <div className="text-sm w-4/5">{headLine ? headLine : ""}</div>
      <div className="">
        <Link
          to={linkBtn}
          className="flex justify-end text-sm ml-auto"
        >
          Selengkapnya
        </Link>
      </div>
    </div>
  );
};

export default TextCards;
