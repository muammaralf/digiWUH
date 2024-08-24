import React from "react";
import dataVideo from "../../data/Videodata/Videodata";
import BackButton from "../../component/BackButton";
import SearchBar from "../../component/Acara/SearchBar";
import CardAcara from "../../component/Acara/Card";
import VideoComp from "../../component/VideoComp/VideoComp";

const Video = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 bg-[#50B478] p-6">
          <BackButton
            text="Video Pembelajaran"
            clss="text-white"
            clssArrw="fill-white"
          />
          <SearchBar />
        </div>

        <div className="flex flex-col gap-4 mt-4 px-6 pb-6">
          <p className="font-medium text-lg">Rekomendasi Video</p>
          {dataVideo.map((video) => (
            <VideoComp data={video} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Video;
