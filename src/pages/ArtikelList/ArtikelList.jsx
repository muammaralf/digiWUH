import Edukasi from "../../component/Edukasi/Edukasi";
import { edukasi } from "../../data/Edukasi";
import Navbar from "../../component/Navbar/Navbar";
import Cards from "../../component/Cards/Cards";
import TextCards from "../../component/TextCards/TextCards";

const ArtikelList = ({ children }) => {
  return (
    <>
      <div id="isiKonten" className="px-6">
        <div className="mt-6 sm:ml-4 md:ml-8 lg:ml-12 xl:ml-16">
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
        </div>
        <div id="Edukasi" className="mt-4">
          <div className="grid grid-cols-3 gap-6">
            {edukasi.map((edukasi) => {
              return (
                <Edukasi
                  icon={edukasi.icon}
                  bgout={edukasi.bgout}
                  bgicon={edukasi.bgicon}
                  nameEdukasi={edukasi.nameEdukasi}
                />
              );
            })}
          </div>
        </div>
        <div id="artikelList" className="mt-4">
          {/* <TextCards headLine="Coba aja apa adanya" /> */}
          {children}
        </div>
      </div>
      {/* <Navbar />s */}
    </>
  );
};

export default ArtikelList;
