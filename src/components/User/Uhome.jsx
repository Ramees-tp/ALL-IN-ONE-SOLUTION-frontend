// import React from "react";
import plumber from "../../assets/images/plumbing.jpg";
import elctrician from "../../assets/images/electrician.jpg";
import carpenter from "../../assets/images/carpenter.jpeg";
import gardener from "../../assets/images/Gardener-1.jpg";
import treeclimber from "../../assets/images/tree climber.webp";
import driver from "../../assets/images/driver.jpg";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Uhome() {
  return (
    <div className="bg-[#fffdcb] lg:px-28 md:px-20 sm:px-10 px-4 sm:py-8 py-4 w-full">
      <div className="w-full grid lg:grid-cols-3 grid-cols-2  lg:gap-20 md:gap-15 sm:gap-8 gap-5">
        <Link to={"/user/workerList"}>
          <div className="hover:scale-[1.02] ease-out duration-200 bg-[#17253a] hover:bg-[#121b29] text-white rounded-lg shadow-custom">
            <img
              className="sm:h-[220px]  w-full rounded-t-lg h-[150px] "
              src={plumber}
              alt=""
            />
            <div className="p-4 flex justify-between items-center rounded-b-lg">
              <div>
                <p className="font-semibold">Plumber</p>
                <p className="text-[70%] text-gray-400">
                  Find the best plumbers around your locality
                </p>
              </div>
              <FontAwesomeIcon className="h-6" icon={faHeart} />
            </div>
          </div>
        </Link>
        <a href="">
          <div className="hover:scale-[1.02] ease-out duration-200 bg-[#17253a] hover:bg-[#121b29] text-white rounded-lg shadow-custom">
            <img
              className="sm:h-[220px]  w-full rounded-t-lg h-[150px]"
              src={elctrician}
              alt=""
            />
            <div className="p-4 flex justify-between items-center rounded-b-lg">
              <div>
                <p className="font-semibold">Electrician</p>
                <p className="text-[70%] text-gray-400">
                  Find the best plumbers around your locality
                </p>
              </div>
              <FontAwesomeIcon className="h-6" icon={faHeart} />{" "}
            </div>
          </div>
        </a>
        <a href="">
          <div className="hover:scale-[1.02] ease-out duration-200 bg-[#17253a] hover:bg-[#121b29] text-white rounded-lg shadow-custom">
            <img
              className="sm:h-[220px]  w-full rounded-t-lg h-[150px]"
              src={carpenter}
              alt=""
            />
            <div className="p-4 flex justify-between items-center rounded-b-lg">
              <div>
                <p className="font-semibold">Carpenter</p>
                <p className="text-[70%] text-gray-400">
                  Find the best plumbers around your locality
                </p>
              </div>
              <FontAwesomeIcon className="h-6" icon={faHeart} />{" "}
            </div>
          </div>
        </a>
        <a href="">
          <div className="hover:scale-[1.02] ease-out duration-200 bg-[#17253a] hover:bg-[#121b29] text-white rounded-lg shadow-custom">
            <img
              className="sm:h-[220px]  w-full rounded-t-lg h-[150px]"
              src={gardener}
              alt=""
            />
            <div className="p-4 flex justify-between items-center rounded-b-lg">
              <div>
                <p className="font-semibold">Gardener</p>
                <p className="text-[70%] text-gray-400">
                  Find the best plumbers around your locality
                </p>
              </div>
              <FontAwesomeIcon className="h-6" icon={faHeart} />{" "}
            </div>
          </div>
        </a>
        <a href="">
          <div className="hover:scale-[1.02] ease-out duration-200 bg-[#17253a] hover:bg-[#121b29] text-white rounded-lg shadow-custom">
            <img
              className="sm:h-[220px]  w-full rounded-t-lg h-[150px]"
              src={treeclimber}
              alt=""
            />
            <div className="p-4 flex justify-between items-center rounded-b-lg">
              <div>
                <p className="font-semibold">Tree Climber</p>
                <p className="text-[70%] text-gray-400">
                  Find the best plumbers around your locality
                </p>
              </div>
              <FontAwesomeIcon className="h-6" icon={faHeart} />{" "}
            </div>
          </div>
        </a>
        <a href="">
          <div className="hover:scale-[1.02] ease-out duration-200 bg-[#17253a] hover:bg-[#121b29] text-white rounded-lg shadow-custom">
            <img
              className="sm:h-[220px]  w-full rounded-t-lg h-[150px]"
              src={driver}
              alt=""
            />
            <div className="p-4 flex justify-between items-center rounded-b-lg">
              <div>
                <p className="font-semibold">Driver</p>
                <p className="text-[70%] text-gray-400">
                  Find the best plumbers around your locality
                </p>
              </div>
              <FontAwesomeIcon className="h-6" icon={faHeart} />{" "}
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Uhome;
