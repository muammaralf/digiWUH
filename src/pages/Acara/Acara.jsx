import React from "react";
import BackButton from "../../component/BackButton";
import SearchBar from "../../component/Acara/SearchBar";
import CardAcara from "../../component/Acara/Card";
import { useEffect, useState } from "react";

import dataAcara from "../../data/Acara/acara";
import instance from "../../services/axios/instance";

const Acara = () => {
  const [event, setEvent] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchData()
  }, [search])

  const fetchData = async () => {
    try {
      const {data} = await instance.get('/events', {
        params: {
          q: search,
        }
      })

      setEvent(data.data)
    } catch (e) {
      console.log(e)
      alert(e?.response?.data?.message || 'Error')
    }
  };

  return (
    <div className="container">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 bg-[#50B478] p-6">
          <BackButton text="Acara" clss="text-white" clssArrw="fill-white" />
          <SearchBar onChange={value => setSearch(value)} />
        </div>

        <div className="flex flex-col gap-4 mt-4 px-6 pb-6">
          <p className="font-medium text-lg">Rekomendasi Acara</p>
          {event.map((event) => (
            <CardAcara data={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Acara;
