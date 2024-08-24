import React from "react";
import BackButton from "../../component/BackButton";
import RiwayatComp from "../../component/RiwayatComp/RiwayatComp";

const Riwayat = () => {
  return (
    <>
      <div className="pt-6 px-6">
        <BackButton text="Riwayat Pembelian" />
        <div className="pt-8">
          <RiwayatComp text="Maggot" noTrans="dx33887728" tgl="12 Juli 2024" />
          <RiwayatComp text="Maggot" noTrans="dx33887728" tgl="12 Juli 2024" />
          <RiwayatComp text="Maggot" noTrans="dx33887728" tgl="12 Juli 2024" />
          <RiwayatComp text="Maggot" noTrans="dx33887728" tgl="12 Juli 2024" />
          <RiwayatComp text="Maggot" noTrans="dx33887728" tgl="12 Juli 2024" />
        </div>
      </div>
    </>
  );
};

export default Riwayat;
