import React, { useState } from "react";
import "./Cards.css";
import squidward from "../../assets/squidward.jpg";

const Cards = (props) => {
  const { classNameCont, classNameImg, classNameText, imgCard, txtCard } =
    props;
  return (
    <div className="card-container">
      <div className="card-img">
        <img src={squidward} alt="" />
      </div>
      <div className="card-text">
        <p>Nama</p>
        <div className="harga-like">
          <div>Harga</div>
          <div>Like</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
