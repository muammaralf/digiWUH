import Edukasi from "../../component/Edukasi/Edukasi";
import { edukasi } from "../../data/Edukasi";
import Navbar from "../../component/Navbar/Navbar";
import Cards from "../../component/Cards/Cards";
import TextCards from "../../component/TextCards/TextCards";
import BackButton from "../../component/BackButton";
import SearchBar from "../../component/Acara/SearchBar";
import { artikel as artk } from "../../data/Artikeldata";

const ArtikelList = () => {
  return (
    <>
      <div className="flex flex-col gap-2 bg-[#50B478] p-6">
        <BackButton text="Artikel" clss="text-white" clssArrw="fill-white" />
        <SearchBar />
      </div>
      <div id="isiKonten" className="px-6">
        <div id="Edukasi" className="mt-4"></div>
        <div id="artikelList" className="mt-4">
          {/* <TextCards headLine="Coba aja apa adanya" /> */}
          {artk.map((artk) => {
            return (
              <Cards img={artk.img} classNameImg="h-52">
                <TextCards
                  // Ini diganti pake database
                  headLine={artk.hdLine}
                  linkBtn={artk.linkBtn}
                />
              </Cards>
            );
          })}
        </div>
      </div>
      {/* <Navbar />s */}
    </>
  );
};

export default ArtikelList;
