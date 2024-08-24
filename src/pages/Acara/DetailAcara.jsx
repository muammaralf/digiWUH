import React from "react";
import BackButton from "../../component/BackButton";
import img from "../../assets/img/acara/1.jpeg";
import { IoLocationSharp } from "react-icons/io5";
import wa from "../../assets/img/store/wa.png";

const DetailAcara = () => {
  return (
    <div className="h-screen overflow-hidden">
      <div className="m-6">
        <BackButton text="Detail Acara" />
      </div>
      <div className="bg-white w-full h-full pt-2 px-6">
        <img src={img} alt="" className="rounded-xl" />
        <div id="acaraUmum" className="border-b-2 py-4">
          <p id="namaAcara" className="font-semibold text-lg">
            Sosialisasi dan Pelatihan Aplikasi Diwiwuh
          </p>
          <p id="tglAcara" className="text-sm">
            24 Agustus 2024
          </p>
          <div id="lokasiAcara" className="text-sm flex">
            <IoLocationSharp className="-ml-1 w-5 h-5" />
            <p>Balai Kalurahan Nglipar</p>
          </div>
          {/* <div className='flex flex-col gap-1 p-4'>
                <p className='font-semibold text-zinc-900'>
                    {props.data.title}
                </p>
                <p className='font-light text-sm'>
                    {props.data.date}
                </p>
                <div className='flex items-center gap-1'>
                    <IoLocationSharp className='text-red-600' />
                    <p className='font-normal text-sm'>
                        {props.data.location}
                    </p>
                </div>
            </div> */}
        </div>
        <div id="deskripsi" className="">
          <p className="text-lg font-medium">Deskripsi</p>
          <p className="text-justify">
            Kegiatan "Sosialisasi dan Pelatihan Aplikasi DigWuh (Digital Uwuh)
            untuk Pengelolaan Sampah" bertujuan untuk memperkenalkan dan melatih
            masyarakat dalam menggunakan aplikasi DigWuh sebagai solusi digital
            untuk pengelolaan sampah. Melalui sosialisasi ini, peserta diberikan
            pemahaman tentang cara kerja aplikasi, manfaatnya dalam mendukung
            pengelolaan sampah yang lebih efisien, serta langkah-langkah praktis
            untuk memanfaatkannya dalam kehidupan sehari-hari. Pelatihan ini
            diharapkan dapat meningkatkan kesadaran lingkungan dan keterampilan
            peserta dalam mengelola sampah secara lebih bertanggung jawab.
          </p>
          <p className="text-lg font-medium my-1">Narahubung</p>
          <button className="rounded-full bg-[#50B478] p-1 px-2 flex">
            <img src={wa} alt="" className="h-6 w-6" />
            <p className="text-sm text-white font-medium my-auto">
              081234567890
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailAcara;
