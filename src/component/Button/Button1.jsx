import React from "react";
import "./Button1.css";
import { useState } from "react";

const Button1 = (props) => {
  const [buttonx, setButtonx] = useState("");
  const { buttonName, type, className } = props;
  function buttonClick() {
    setButtonx("Halo Nad");
  }
  return (
    <>
      <button type={"button"} className={"btn-comp"} onClick={buttonClick}>
        {buttonName}
      </button>

      <h1>{buttonx}</h1>
    </>
  );
};

export default Button1;
