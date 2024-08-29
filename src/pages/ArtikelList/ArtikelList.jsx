import Cards from "../../component/Cards/Cards";
import TextCards from "../../component/TextCards/TextCards";
import BackButton from "../../component/BackButton";
import SearchBar from "../../component/Acara/SearchBar";
import {useEffect, useState} from "react";
import instance from "../../services/axios/instance.js";
import {Link} from "react-router-dom";

const ArtikelList = () => {
  const [articles, setArticles] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchData()
  }, [search])

  const fetchData = async () => {
    try {
      const {data} = await instance.get('/articles', {
        params: {
          q: search,
          perPage: 10,
          page: 1,
        }
      })

      setArticles(data.data)
    } catch (e) {

    } finally {

    }
  }

  return (
    <>
      <div className="flex flex-col gap-2 bg-[#50B478] p-6">
        <BackButton text="Artikel" clss="text-white" clssArrw="fill-white" />
        <SearchBar onChange={setSearch} />
      </div>
      <div id="isiKonten" className="px-6">
        <div id="Edukasi" className="mt-4"></div>
        <div id="artikelList" className="mt-4 flex flex-col gap-2">
          {/* <TextCards headLine="Coba aja apa adanya" /> */}
          {articles.map((article) => (
              <Link key={article.id} to={`/artikel/${article.id}`}>
                <Cards img={article.imageUrl} classNameImg="h-52">
                  <TextCards
                    headLine={article.title}
                    linkBtn={`/artikel/${article.id}`}
                  />
                </Cards>
              </Link>
            ))}
        </div>
      </div>
      {/* <Navbar />s */}
    </>
  );
};

export default ArtikelList;
