import React from "react";
import search from "../../assets/icons/search.png";
import menu from "../../assets/icons/menu.png";
import location from "../../assets/icons/location (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHippo } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className="bg-slate-300 flex sm:flex-row flex-col items-center">
      <div className="p-5 max-w-sm text-center">
        <h1 className="sm:text-4xl text-2xl">ALL IN ONE SOLUTION</h1>
        <p className="text-[55%] text-red-700">
          Welcome to the epitome of employment excellence!
        </p>
      </div>
      <div className="p-5 w-full">
        <div className="space-y-6">
          <div className="flex sm:justify-end justify-center items-center sm:gap-x-10 gap-x-5">
            <a className="bg-red-800 p-1 px-3 rounded-md text-white" href="">
              Home
            </a>
            <a href="">About</a>
            <a href="">My contract</a>
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faHippo} />
            <img src={menu} alt="" />
          </div>
          <div className="lg:ml-60 flex md:flex-row flex-col sm:justify-between gap-5 justify-center items-center pr-6">
            <div className="relative px-6 md:w-72 w-56 bg-white rounded">
              <button className="absolute left-1 top-1.5">
                <img className="h-5" src={search} alt="" />
              </button>
              <input
                type="text"
                placeholder="Search for Job"
                value=""
                name=""
                id=""
                className="p-1 md:w-72 w-56 rounded-r focus:outline-none"
              />
            </div>
            <div className="relative px-6 md:w-60 w-56 bg-white rounded">
              <button className="absolute left-0 top-1">
                <img src={location} alt="" />
              </button>
              <input
                type="text"
                placeholder="Select Location"
                value=""
                name=""
                id=""
                className="p-1 rounded-r md:w-60 w-56 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
