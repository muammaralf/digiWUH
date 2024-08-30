import Cards from "../../component/Cards/Cards.jsx";
import React, {useEffect, useState} from "react";
import instance from "../../services/axios/instance.js";
import {Link} from "react-router-dom";

export default function ArtikelListHome() {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const {data} = await instance.get('/articles', {
        perPage: 10,
        page: 1,
      })

      setArticles(data.data)
    } catch (e) {

    } finally {

    }
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      {articles.map((article) => {
        return (
          <Link
            key={article.id}
            to={`/artikel/${article.id}`}
          >
            <Cards img={article.imageUrl} title={article.title}/>
          </Link>
        );
      })}
    </div>
  )
}