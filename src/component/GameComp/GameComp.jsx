import React from "react";

const GameComp = (props) => {
  return (
    <div className="w-full flex flex-col rounded-xl px-6">
      <img src={props.img} className="rounded-xl" />
    </div>
  );
};

export default GameComp;
