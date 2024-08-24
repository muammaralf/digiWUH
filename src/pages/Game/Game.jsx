import React, { useState } from "react";
import BackButton from "../../component/BackButton";
import SearchBar from "../../component/Acara/SearchBar";
import image from "../../assets/img/game/1.png";
import GameComp from "../../component/GameComp/GameComp";
import AlertGame from "../../component/Alert/AlertGame";

const Game = () => {
  const [isAlertOpen, setAlertOpen] = useState(false);
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 bg-[#50B478] p-6">
          <BackButton
            text="Mini Game"
            clss="text-white"
            clssArrw="fill-white"
          />
          <SearchBar />
        </div>
        <button
          onClick={() => {
            setAlertOpen(true);
          }}
        >
          <GameComp img={image} />
        </button>
        {isAlertOpen && <AlertGame onClose={() => setAlertOpen(false)} />}
      </div>
    </div>
  );
};

export default Game;
