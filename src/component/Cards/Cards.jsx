import React, { useState } from "react";
import "./Cards.css";
import TextCards from "../TextCards/TextCards";

const Cards = (props) => {
  const {
    classNameCont,
    classNameImg,
    classNameText,
    img,
    txtCard,
    harga,
    children,
  } = props;
  return (
    <div
      id="cardContainer"
      className={
        classNameCont
          ? `${classNameCont} p-3 bg-white outline-1 rounded-xl`
          : `p-3 bg-white outline-1 rounded-xl`
      }
    >
      <div className="card-img">
        <img
          src={img}
          alt=""
          className={
            classNameImg
              ? `${classNameImg} rounded-lg object-cover`
              : `object-cover h-20 rounded-lg`
          }
        />
      </div>
      <div className="">
        <p className="font-semibold text-sm text-start">
          Pengertian Biopori dan Manfaatnya
        </p>
        {children}
      </div>
    </div>
  );
};

export default Cards;
