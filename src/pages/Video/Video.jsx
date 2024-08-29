import React, {useEffect, useState} from "react";
import dataVideovie from "../../data/Videodata/Videodata";
import BackButton from "../../component/BackButton";
import SearchBar from "../../component/Acara/SearchBar";
import CardAcara from "../../component/Acara/Card";
import VideoComp from "../../component/VideoComp/VideoComp";
import instance from "../../services/axios/instance.js";
import {Link} from "react-router-dom";

const Video = () => {
  const [videos, setVideos] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchData()
  }, [search])

  const fetchData = async () => {
    try {
      const {data} = await instance.get('/videos', {
        params: {
          q: search,
          perPage: 10,
          page: 1
        }
      })

      setVideos(data.data)
    } catch (e) {

    } finally {

    }
  }

  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 bg-[#50B478] p-6">
          <BackButton
            text="Video Pembelajaran"
            clss="text-white"
            clssArrw="fill-white"
          />
          <SearchBar onChange={setSearch} />
        </div>

        <div className="flex flex-col gap-4 mt-4 px-6 pb-6">
          <p className="font-medium text-lg">Rekomendasi Video</p>
          {videos.map((video) => (
            <Link key={video.id} to={video.videoUrl} target="_blank">
              <VideoComp data={video} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Video;
