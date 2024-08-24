import React from "react";
import BackButton from "../../component/BackButton";
import SearchBar from "../../component/Acara/SearchBar";
import CardAcara from "../../component/Acara/Card";

import dataAcara from "../../data/Acara/acara";

const Acara = () => {
  return (
    <div className="container">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 bg-[#50B478] p-6">
          <BackButton text="Acara" clss="text-white" clssArrw="fill-white" />
          <SearchBar />
        </div>

        <div className="flex flex-col gap-4 mt-4 px-6 pb-6">
          <p className="font-medium text-lg">Rekomendasi Acara</p>
          {dataAcara.map((acara) => (
            <CardAcara data={acara} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Acara;
