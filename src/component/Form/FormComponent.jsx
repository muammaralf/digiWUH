import React from "react";
import "./FormComponent.css";

const FormComponent = (props) => {
  const { FormLabel, FormType, FormName, FormID, FormPlacehldr } = props;
  return (
    <>
      <p className="form-label">{FormLabel}</p>
      <input
        type={FormType ? FormType : "text"}
        name={FormName}
        id={FormID}
        className="form-inp"
        placeholder={FormPlacehldr}
      />
    </>
  );
};

export default FormComponent;
