import React from "react";
import "./Button1.css";

const Button1 = (props) => {
  const { buttonName, type, classN, buttonClick } = props;
  return (
    <>
      <button
        type={type ? type : "button"}
        className={classN ? `btn-comp ${classN}` : "btn-comp "}
        onClick={buttonClick ? buttonClick : ""}
      >
        {buttonName}
      </button>
    </>
  );
};

export default Button1;
