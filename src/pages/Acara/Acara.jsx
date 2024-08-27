import React from "react";
import BackButton from "../../component/BackButton";
import SearchBar from "../../component/Acara/SearchBar";
import CardAcara from "../../component/Acara/Card";
import { useEffect, useState } from "react";

import dataAcara from "../../data/Acara/acara";

const Acara = () => {
  const [event, setEvent] = useState;

  useEffect(() => {
    //panggil method "fetchData"
    fectData();
  }, []);

  //function "fetchData"
  const fectData = async () => {
    //fetching
    const response = await axios.get(
      "https://api-digiwuh-apps.mancikmania.com/events"
    );
    //get response data
    const data = await response.data;

    //assign response data to state "posts"
    setEvent(data);
  };
  return (
    <div className="container">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 bg-[#50B478] p-6">
          <BackButton text="Acara" clss="text-white" clssArrw="fill-white" />
          <SearchBar />
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
