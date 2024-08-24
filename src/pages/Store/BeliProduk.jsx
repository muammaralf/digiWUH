import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import BackButton from "../../component/BackButton";
import Mitra from "../../component/store/Mitra";

import dataProduk from "../../data/Store/dataProduk";
import Card from "../../component/store/Card";
import SearchBar from "../../component/Acara/SearchBar";

const BeliProduk = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col gap-2 bg-[#50B478] p-6">
          <BackButton
            text="Digiwuh Store"
            clss="text-white"
            clssArrw="fill-white"
          />
          <SearchBar />
        </div>
        <div className="container pt-6 pb-36 px-6 flex flex-col gap-6">
          <div className="w-full flex flex-col gap-5">
            {dataProduk.map((produk) => (
              <Card data={produk} />
            ))}
          </div>

          <div className="flex flex-col gap-5 ">
            <p className="text-xl font-semibold sm:w-52 sm:text-2xl md:w-64 md:text-3xl">
              Mitra DigiWuh
            </p>
            <Mitra />
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default BeliProduk;
