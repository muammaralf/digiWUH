import React, { useEffect, useState } from "react";
import "./FormComponent.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormComponent = (props) => {
  const navigate = useNavigate();
  const { FormLabel, FormType, FormName, FormID, FormPlacehldr } = props;

  return (
    <>
      <p className="form-label mt-3 text-sm">{FormLabel}</p>
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
