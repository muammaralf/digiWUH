import React from "react";
import "./Button1.css";

const Button1 = (props) => {
  const { buttonName, type, className, buttonClick } = props;
  return (
    <>
      <button
        type={type ? type : "button"}
        className={className ? `btn-comp ${className}` : "btn-comp"}
        onClick={buttonClick ? buttonClick : ""}
      >
        {buttonName}
      </button>
    </>
  );
};

export default Button1;
