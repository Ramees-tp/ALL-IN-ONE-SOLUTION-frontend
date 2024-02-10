import React from "react";
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import insta from "../../assets/icons/instagram (1).png";

function Ufooter() {
  return (
    <div className=" grid grid-cols-3 bg-[#17253a] text-white sm:px-28 px-4 sm:py-12 py-4">
      <div className="flex flex-col gap-y-5">
        <p className="font-bold sm:text-2xl py-3">About us</p>
        <div>
          <p>How it works</p>
          <p>Terms and Services</p>
          <p>Legal & Privacy information</p>
          <p>Help ?</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <p className="font-bold sm:text-2xl py-3">Contact us</p>
        <div>
          <p>Contact</p>
          <p>Support</p>
          <p>Sponserships</p>
        </div>
      </div>
      <div className=" space-y-5">
        <p className="font-bold sm:text-2xl py-3">Connect with us</p>
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
