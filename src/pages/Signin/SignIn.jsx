import React from "react";
import "./SignIn.css";
import FormComponent from "../../component/Form/FormComponent";
import { formSignin } from "../../data/FormData";
import vector1 from "../../assets/img/Vector1.svg";

const SignIn = () => {
  return (
    <>
      <div className="signin-container">
        <div className="intro-signin">
          <img src={vector1} alt="" className="vector-1" />
          <div className="intro-container">
            <p className="intro-1">Selamat Datang di Digiwuh!</p>
            <p className="intro-2">
              Ayo mulai menabung dengan sampah di Digiwuh!
            </p>
          </div>
        </div>
        <div className="form-container">
          <div className="form-signin">
            <form action="submit">
              {formSignin.map((signin) => {
                return (
                  <FormComponent
                    key={signin.id}
                    FormLabel={signin.FormLabel}
                    FormType={signin.FormType}
                    FormName={signin.FormName}
                    FormID={signin.FormID}
                    FormPlacehldr={signin.FormPlacehldr}
                  />
                );
              })}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
