import React from "react";

const ProfilTtgBtn = (props) => {
  const { textBtn, children } = props;
  return (
    <div className=" h-16 py-3 flex w-full text-black gap-3 border-b-2">
      <div
        id="fotoProfil"
        className="h-10 w-10 flex rounded-full my-auto flex-none"
      >
        {children}
      </div>
      <div id="text" className=" grow text-md font-medium my-auto ">
        <p id="text" className="">
          {textBtn}
        </p>
      </div>
      <div id="arrowNext" className=" flex-none my-auto">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#000000"
          >
            <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProfilTtgBtn;
