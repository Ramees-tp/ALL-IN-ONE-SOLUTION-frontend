import React from "react";
import search from "../../assets/icons/search.png";
import menu from "../../assets/icons/menu.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

function Wheader() {
  return (
    <div>
      <div className="bg-slate-300 flex sm:flex-row flex-col items-center">
        <div className="p-5 max-w-sm text-center">
          <h1 className="sm:text-4xl text-2xl">ALL IN ONE SOLUTION</h1>
          <p className="text-[55%] text-red-700">
            Welcome to the epitome of employment excellence!
          </p>
        </div>
        <div className="p-5 w-full">
          <div className="space-y-6">
            <div className="flex sm:justify-end justify-center items-center md:gap-x-10 sm:gap-7 gap-x-5 lg:text-lg md:text-md sm:text-sm text-[50%]">
              <a className="bg-red-800 p-1 px-3 rounded-md text-white" href="">
                Home
              </a>
              <a href="">About</a>
              <a href="">Notification</a>
              <a href="">My contract</a>
              <a href="">Wallet</a>
              <img src={menu} alt="" />
            </div>
            <div className="flex sm:flex-row flex-col gap-10 sm:justify-end justify-center items-center">
              <div className="relative w-full">
                <input
                  className=" md:w-[100%] sm:w-[180px] w-10 md:h-[100%] h-[23px] p-1 pl-8 rounded"
                  type="text"
                />
                <button>
                  <FontAwesomeIcon
                    className="sm:h-5 h-4 absolute text-[#17253a] left-1 top-1"
                    icon={faLocationDot}
                  />
                </button>
              </div>
              <div className="flex gap-5">
                <button className="bg-red-700">Full day</button>
                <button className="bg-green-700">Offline</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wheader;
