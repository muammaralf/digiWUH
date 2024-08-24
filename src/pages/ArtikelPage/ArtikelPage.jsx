import React from "react";
import Biopori2 from "../../assets/img/Biopori2.png";
import HijabGirl from "../../assets/img/HijabGirl.svg";
import BackButton from "../../component/BackButton";
import { artikel } from "../../data/Artikeldata";

const ArtikelPage = () => {
  return (
    <>
      <div className="h-screen pt-6 bg-white">
        <div className=" absolute h-16 w-full top-0 bg-[#e1f5fb]"></div>
        <div id="isiKonten" className="absolute px-6">
          {/* <div className="sm:ml-4 md:ml-8 lg:ml-12 xl:ml-16">
            <div className=" text-xl font-semibold flex w-50 sm:w-52 sm:text-2xl md:w-64 md:text-3xl">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#000000"
                >
                  <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                </svg>
              </a>
              <p className="">Artikel </p>
            </div>
          </div> */}
          <BackButton text="Artikel" />
        </div>
        <div id="artikelCont" className="">
          <img src={Biopori2} alt="" className=" mt-2" />
          <div
            id="gradient"
            className=" relative bg-gradient-to-t from-white h-36 w-full -mt-36 "
          ></div>
          <div id="artikelText" className=" flex flex-col w-full ">
            <h1
              id="judulArtikel"
              className="mx-auto mt-2 text-xl font-semibold text-[#50B478]"
            >
              Pengertian Biopori dan Manfaatnya
            </h1>
            <div id="writerInfo" className="flex p-6 w-full">
              <div
                id="fotoWriter"
                className="rounded-full bg-[#50B478] h-10 w-10 flex-none my-auto"
              >
                <img
                  src={HijabGirl}
                  alt=""
                  className="h-9 w-9 mx-auto mt-px object-contain"
                />
              </div>
              <div id="namaWriter" className="ml-2 grow">
                <p className="">Nadia P</p>
                <p className="">Kamis, 21 Agustus 2024</p>
              </div>
              <div id="likeArtiker" className="my-auto h-10 w-10 flex-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="32px"
                  viewBox="0 -960 960 960"
                  width="32px"
                  fill="#000000"
                >
                  <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                </svg>
              </div>
            </div>
            <div id="artikelIsi" className="p-6">
              <p className="indent-6 text-justify">
                Pernahkah kalian mendengar istilah biopori? Biopori adalah
                istilah yang digunakan untuk mendeskripsikan lubang resapan.
                Lubang resapan biopori adalah lubang yang berbentuk tegak lurus.
                Biasanya lubang biopori berdiameter sekitar 10 hingga 30 cm dan
                juga tidak mempunyai permukaan tanah air dangkal.
              </p>
              <p className="indent-6 text-justify">
                Fungsi dari lubang biopori ini adalah untuk menimbun limbah
                organik. Pengisian lubang bipori dengan sampah organik ini
                bertujuan untuk memberi makan makhluk hidup yang ada di tanah.
                Misalnya cacing, hewan kecil di dalam tanah, bahkan juga akar
                tumbuhan.
              </p>
              <p className="indent-6 text-justify">
                Jadi, selain bisa menjadi sarana pembuangan sampah organik,
                lubang biopori ini juga sebagai tempat penyimpan makanan bagi
                makhluk hidup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtikelPage;
