import React from "react";
import dayjs from "dayjs";

const JadwalSetor = (props) => {
  const { namaBS, lokasi, tgl, warna } = props;
  return (
    <>
      <div
        className={`py-3 flex flex-col ${warna || 'bg-purple-600'} rounded-2xl`}
      >
        <div className="my-auto">
          <p
            id="namaBankSampah"
            className="text-white text-center mx-auto text-sm w-28 mb-3"
          >
            {namaBS}
          </p>
          <p
            id="namaBankSampah"
            className="text-white text-center mx-auto text-sm w-28 mb-3"
          >
            {lokasi}
          </p>
          <p
            id="tanggal"
            className="text-6xl text-center text-white font-semibold"
          >
            {dayjs(tgl).format("D")}
          </p>
          <p id="bulanTahun" className="text-white text-center">
            {dayjs(tgl).format("MMMM YYYY")}
          </p>
        </div>
      </div>
    </>
  );
};

export default JadwalSetor;
