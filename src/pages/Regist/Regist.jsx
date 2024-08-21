import React from "react";
// import "./SignIn.css";
import FormComponent from "../../component/Form/FormComponent";
import { formRegist } from "../../data/FormData";
import vector1 from "../../assets/img/Vector1.svg";
import Button1 from "../../component/Button/Button1";
import google from "../../assets/img/google.svg";

const Regist = () => {
  return (
    <>
      <div className="w-screen h-screen bg-[#50b478] font-bold border-box text-white">
        <div className="z-2 w-auto pt-15 pr-12 pb-0 pl-12">
          <img
            src={vector1}
            alt=""
            className="-ml-12 top-16 sm:top-14 absolute sm:w-5/6"
          />
          <div className="mt-6 -ml-6 absolute sm:ml-4 md:ml-8 lg:ml-12 xl:ml-16">
            <div className="z-2 text-xl font-semibold flex w-50 sm:w-52 sm:text-2xl md:w-64 md:text-3xl">
              <a href="#">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                </svg>
              </a>
              <p className="-mt-0.5">Daftar sekarang</p>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 w-full bg-[#e1f5fb] h-4/5 mt-10 pt-7 flex justify-center rounded-t-2xl text-slate-950 sm:text-lg md:text-xl">
          <div className="form-signin flex flex-col">
            <p className="font-bold text-2xl text-center mb-4 sm:text-3xl md:text-4xl">
              Daftar
            </p>
            <form action="submit" className="flex flex-col justify-center">
              {formRegist.map((regist) => {
                return (
                  <FormComponent
                    key={regist.id}
                    FormLabel={regist.FormLabel}
                    FormType={regist.FormType}
                    FormName={regist.FormName}
                    FormID={regist.FormID}
                    FormPlacehldr={regist.FormPlacehldr}
                  />
                );
              })}

              <Button1 buttonName="Daftar" classN="btn-lanjut" />
            </form>
            <p className="font-semibold text-center text-sm mt-2">
              Sudah punya akun?{" "}
              <a href="#" className="font-bold text-[#50b478] underline">
                Masuk
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Regist;
