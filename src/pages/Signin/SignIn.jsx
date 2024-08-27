import React from "react";
import "./SignIn.css";
import FormComponent from "../../component/Form/FormComponent";
import { formSignin } from "../../data/FormData";
import vector1 from "../../assets/img/Vector1.svg";
import Button1 from "../../component/Button/Button1";
import google from "../../assets/img/google.svg";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-screen h-screen bg-[#50b478] font-bold border-box text-white">
        <div className="z-2 w-auto pt-15 pr-12 pb-0 pl-12">
          <img
            src={vector1}
            alt=""
            className="-ml-12 top-16 sm:top-14 absolute sm:w-5/6"
          />
          <div className="mt-12 absolute sm:ml-4 md:ml-8 lg:ml-12 xl:ml-16">
            <p className="z-2 text-xl w-44 sm:w-52 sm:text-2xl md:w-64 md:text-3xl">
              Selamat Datang di Digiwuh!
            </p>
            <p className="text-xs font-light sm:text-sm md:text-base">
              Ayo mulai menabung dengan sampah di Digiwuh!
            </p>
          </div>
        </div>
        <div className="fixed bottom-0 w-full bg-[#e1f5fb] h-2/3 mt-10 pt-7 flex justify-center rounded-t-2xl text-slate-950 sm:text-lg md:text-xl">
          <div className="form-signin flex flex-col">
            <p className="font-bold text-2xl text-center mb-4 sm:text-3xl md:text-4xl">
              Masuk
            </p>
            <form action="submit" className="flex flex-col justify-center">
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
              <div className="w-full flex justify-end mt-2">
                <a
                  href="#"
                  className="font-semibold text-sm hover:text-slate-700 underline"
                >
                  Lupa password?
                </a>
              </div>
              <Button1
                buttonName="Masuk"
                classN="btn-lanjut"
                buttonClick={() => navigate("/digiWUH/home")}
              />
            </form>
            <p className="font-semibold text-center text-sm mt-2">
              Belum punya akun?{" "}
              <button
                onClick={() => navigate("/digiWUH/daftar")}
                className="font-bold text-[#50b478] underline"
              >
                Daftar
              </button>
            </p>
            <p className="font-semibold text-center text-sm mt-2">Atau</p>
            <div className="google-button-container flex flex-col">
              <Button1
                buttonName="Lanjut dengan Google"
                classN="btn-google"
              ></Button1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;