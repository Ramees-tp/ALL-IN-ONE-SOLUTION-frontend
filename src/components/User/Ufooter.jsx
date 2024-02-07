import React from "react";
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import insta from "../../assets/icons/instagram (1).png";

function Ufooter() {
  return (
    <div className=" grid grid-cols-2 bg-black text-white sm:px-28 px-4 sm:py-16 py-4">
      <div className="flex flex-col gap-y-5">
        <p className="font-bold sm:text-2xl ">About us</p>
        <div>
          <p>contact us</p>
          <p>Legal & Privacy information</p>
          <p>Help ?</p>
        </div>
      </div>
      <div className="font-bold sm:text-2xl space-y-5">
        <p>Connect with us</p>
        <div className="flex sm:gap-x-10 gap-x-5">
          <a href="">
            <img src={facebook} alt="" />
          </a>
          <a href="">
            <img src={twitter} alt="" />
          </a>
          <a href="">
            <img src={insta} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Ufooter;
