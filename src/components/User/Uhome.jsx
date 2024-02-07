import React from "react";
import plumber from "../../assets/images/plumbing.jpg";
import elctrician from "../../assets/images/electrician.jpg";
import carpenter from "../../assets/images/carpenter.jpeg";
import gardener from "../../assets/images/Gardener-1.jpg";
import treeclimber from "../../assets/images/tree climber.webp";
import driver from "../../assets/images/driver.jpg";
import fav from "../../assets/icons/heart.png";

function Uhome() {
  return (
    <div className="bg-white sm:px-28 px-4 sm:py-8 py-4 w-full">
      <div className="w-full grid sm:grid-cols-3 grid-col-2 gap-20">
        <a href="">
          <div className="hover:scale-[1.04] ease-out duration-200 rounded-lg shadow-custom">
            <img
              className="sm:h-[220px]  w-full rounded-t-lg"
              src={plumber}
              alt=""
            />
            <div className="p-4 flex justify-between">
              <p className="font-semibold">Plumber</p>
              <img src={fav} alt="" />
            </div>
          </div>
        </a>
        <a href="">
          <div className="bg-slate-500 text-white rounded-lg">
            <img
              className="sm:h-[220px] w-full rounded-t-lg"
              src={elctrician}
              alt=""
            />
            <div className="p-4 flex justify-between">
              <p>Electrician</p>
              <img src={fav} alt="" />
            </div>
          </div>
        </a>
        <a href="">
          <div className="bg-slate-500 text-white rounded-lg">
            <img
              className="sm:h-[220px] w-full rounded-t-lg"
              src={carpenter}
              alt=""
            />
            <div className="p-4 flex justify-between">
              <p>Carpenter</p>
              <img src={fav} alt="" />
            </div>
          </div>
        </a>
        <a href="">
          <div className="bg-slate-500 text-white rounded-lg">
            <img
              className="sm:h-[220px] w-full rounded-t-lg"
              src={gardener}
              alt=""
            />
            <div className="p-4 flex justify-between">
              <p>Gardener</p>
              <img src={fav} alt="" />
            </div>
          </div>
        </a>
        <a href="">
          <div className="bg-slate-500 text-white rounded-lg">
            <img
              className="sm:h-[220px] w-full rounded-t-lg"
              src={treeclimber}
              alt=""
            />
            <div className="p-4 flex justify-between">
              <p>Tree climber</p>
              <img src={fav} alt="" />
            </div>
          </div>
        </a>
        <a href="">
          <div className="bg-slate-500 text-white rounded-lg">
            <img
              className="sm:h-[220px] w-full rounded-t-lg"
              src={driver}
              alt=""
            />
            <div className="p-4 flex justify-between">
              <p>Driver</p>
              <img src={fav} alt="" />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Uhome;
