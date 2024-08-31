import React from "react";
import { useNavigate } from "react-router-dom";
// import keranjang from "../../assets/icons/line/Keranjang.svg";
// import home from "../../assets/icons/line/Home.svg";
// import profil from "../../assets/icons/line/Profil.svg";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed mx-auto w-full h-20 bottom-0 rounded-t-[48px] overflow-hidden bg-slate-500"></div>
      <div className="fixed w-full flex justify-center h-[76px] bottom-0 rounded-t-[48px] bg-white">
        <button
          onClick={() => navigate("/home")}
          className="group flex items-center h-full"
        >
          <div
            id="home"
            className="absolute flex flex-col left-14 w-24 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#000000"
              className="mx-auto"
            >
              <path
                className="group-hover:fill-[#3f915c] group-active:fill-[#50B478] group-focus:fill-[#50B478] transition"
                d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380ZM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160Zm320-352Z"
              />
            </svg>
            <p className="font-semibold text-center group-hover:text-[#3f915c] group-active:text-[#50B478] group-focus:text-[#50B478] transition">
              Beranda
            </p>
          </div>
        </button>
        <button
          onClick={() => navigate("/beli-produk")}
          className="absolute flex justify-center group"
        >
          <div
            id="digistore"
            className="absolute -mt-12 flex w-24 h-24 rounded-full shadow-md bg-[#e1f5fb] cursor-pointer"
          >
            <div className="w-20 flex justify-center items-center m-auto h-20 rounded-full group-hover:shadow-md group-active:shadow-md group-focus:shadow-md bg-[#e1f5fb] group-hover:bg-[#3f915c] group-active:bg-[#50B478] group-focus:bg-[#50B478] transition ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="absolute -mt-1 group-hover:fill-[#ffffff] group-active:fill-[#ffffff] group-focus:fill-[#ffffff] transition"
              >
                <g id="Layer_5" data-name="Layer 5">
                  <path d="M29.28,10.31a3.1,3.1,0,0,0-2.34-1.08H21.47L24.64,6.5a1,1,0,0,0,.1-1.42A1,1,0,0,0,23.33,5L18.41,9.23H5.16a3.06,3.06,0,0,0-3,3.69L4.35,23.21a6.16,6.16,0,0,0,6,4.88H22.19A6.13,6.13,0,0,0,28.25,23L30,12.8A3.08,3.08,0,0,0,29.28,10.31ZM4.34,11.62a1,1,0,0,1,.82-.39H16.1l-.75.65a1,1,0,0,0-.1,1.41,1,1,0,0,0,1.41.1l2.5-2.16h7.78a1.06,1.06,0,0,1,1,1.24l-.29,1.73H4.48l-.35-1.69A1.05,1.05,0,0,1,4.34,11.62ZM22.19,26.09H10.36A4.17,4.17,0,0,1,6.3,22.8L4.91,16.2H27.36l-1.09,6.43A4.13,4.13,0,0,1,22.19,26.09Z" />
                  <path d="M11.28,17.84a1,1,0,0,0-1,1v3.87a1,1,0,0,0,2,0V18.84A1,1,0,0,0,11.28,17.84Z" />
                  <path d="M20.93,17.84a1,1,0,0,0-1,1v3.87a1,1,0,0,0,2,0V18.84A1,1,0,0,0,20.93,17.84Z" />
                  <path d="M16,17.84a1,1,0,0,0-1,1v3.87a1,1,0,0,0,2,0V18.84A1,1,0,0,0,16,17.84Z" />
                </g>
              </svg>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
                fill="#3d3d3d"
              >
                <path
                  className="group-hover:fill-[#ffffff] group-active:fill-[#ffffff] group-focus:fill-[#ffffff] transition"
                  d="M226.67-80q-27 0-46.84-19.83Q160-119.67 160-146.67v-506.66q0-27 19.83-46.84Q199.67-720 226.67-720h100v-6.67q0-64 44.66-108.66Q416-880 480-880t108.67 44.67q44.66 44.66 44.66 108.66v6.67h100q27 0 46.84 19.83Q800-680.33 800-653.33v506.66q0 27-19.83 46.84Q760.33-80 733.33-80H226.67Zm0-66.67h506.66v-506.66h-100v86.66q0 14.17-9.61 23.75-9.62 9.59-23.84 9.59-14.21 0-23.71-9.59-9.5-9.58-9.5-23.75v-86.66H393.33v86.66q0 14.17-9.61 23.75-9.62 9.59-23.84 9.59-14.21 0-23.71-9.59-9.5-9.58-9.5-23.75v-86.66h-100v506.66ZM393.33-720h173.34v-6.67q0-36.33-25.17-61.5-25.17-25.16-61.5-25.16t-61.5 25.16q-25.17 25.17-25.17 61.5v6.67ZM226.67-146.67v-506.66 506.66Z"
                />
              </svg> */}
            </div>
          </div>
        </button>
        <button
          onClick={() => navigate("/profil")}
          className="group h-full flex items-center"
        >
          <div
            id="profil"
            className="absolute flex flex-col right-14 w-24 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#000000"
              className="mx-auto"
            >
              <path
                className="group-hover:fill-[#3f915c] group-active:fill-[#50B478] group-focus:fill-[#50B478] transition"
                d="M226-262q59-42.33 121.33-65.5 62.34-23.17 132.67-23.17 70.33 0 133 23.17T734.67-262q41-49.67 59.83-103.67T813.33-480q0-141-96.16-237.17Q621-813.33 480-813.33t-237.17 96.16Q146.67-621 146.67-480q0 60.33 19.16 114.33Q185-311.67 226-262Zm253.88-184.67q-58.21 0-98.05-39.95Q342-526.58 342-584.79t39.96-98.04q39.95-39.84 98.16-39.84 58.21 0 98.05 39.96Q618-642.75 618-584.54t-39.96 98.04q-39.95 39.83-98.16 39.83ZM480.31-80q-82.64 0-155.64-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.51T80-480.18q0-82.82 31.5-155.49 31.5-72.66 85.83-127Q251.67-817 324.51-848.5T480.18-880q82.82 0 155.49 31.5 72.66 31.5 127 85.83Q817-708.33 848.5-635.65 880-562.96 880-480.31q0 82.64-31.5 155.64-31.5 73-85.83 127.34Q708.33-143 635.65-111.5 562.96-80 480.31-80Zm-.31-66.67q54.33 0 105-15.83t97.67-52.17q-47-33.66-98-51.5Q533.67-284 480-284t-104.67 17.83q-51 17.84-98 51.5 47 36.34 97.67 52.17 50.67 15.83 105 15.83Zm0-366.66q31.33 0 51.33-20t20-51.34q0-31.33-20-51.33T480-656q-31.33 0-51.33 20t-20 51.33q0 31.34 20 51.34 20 20 51.33 20Zm0-71.34Zm0 369.34Z"
              />
            </svg>
            <p className="font-semibold text-center group-hover:text-[#3f915c] group-active:text-[#50B478] group-focus:text-[#50B478] transition">
              Profil
            </p>
          </div>
        </button>
      </div>
    </>
  );
};

export default Navbar;
