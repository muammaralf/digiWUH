import React from "react";

const JadwalSetor = (props) => {
  const { namaBS, tgl, bulan, tahun, warna } = props;
  return (
    <>
      <div
        className={
          warna
            ? `h-44 flex flex-col ${warna} rounded-2xl`
            : "h-44 flex flex-col bg-purple-600 rounded-2xl"
        }
      >
        <div className="my-auto">
          <p
            id="namaBankSampah"
            className="text-white text-center mx-auto text-sm w-28 mb-3"
          >
            {namaBS ? namaBS : ""}
          </p>
          <p
            id="tanggal"
            className="text-6xl text-center text-white font-semibold"
          >
            {tgl ? tgl : ""}
          </p>
          <p id="bulanTahun" className="text-white text-center">
            {bulan ? bulan : ""} {tahun ? tahun : ""}
          </p>
        </div>
      </div>
    </>
  );
};

export default JadwalSetor;
