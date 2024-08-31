import React from "react";
import { FaEdit } from "react-icons/fa";

const AkunSayaEdit = (props) => {
  return (
    <div className="flex flex-col mt-2">
      <p className="text-slate-600 text-sm">{props.text}</p>
      <div className="flex w-full gap-3">
        <input
          type="text"
          className="text-lg font-medium border-2 rounded-md px-1 shadow-inner grow"
          value={props.isi}
          onChange={(e) => props.onChange?.(e.target.value)}
        />
        <FaEdit className=" flex-none h-6 w-6 my-auto" />
      </div>
    </div>
  );
};

export default AkunSayaEdit;
