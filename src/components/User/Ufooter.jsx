// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Ufooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Ufooter() {
  return (
    <div className=" grid sm:grid-cols-3 sm:grid-rows-1 grid-cols-1 grid-rows-3 justify-center gap-y-5 bg-[#17253a] text-white sm:px-28 px-4 sm:py-12 py-4">
      <div className="flex flex-col gap-y-5">
        <p className="font-bold sm:text-2xl sm:py-3">About us</p>
        <div>
          <p>How it works</p>
          <p>Terms and Services</p>
          <p>Legal & Privacy information</p>
          <p>Help ?</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <p className="font-bold sm:text-2xl sm:py-3">Contact us</p>
        <div>
          <p>Contact</p>
          <p>Support</p>
          <p>Sponserships</p>
        </div>
      </div>
      <div className=" space-y-5">
        <p className="font-bold sm:text-2xl sm:py-3">Connect with us</p>
        <div className="logo flex sm:gap-x-10 gap-x-5">
          <a href="">
            <FontAwesomeIcon className="h-7" icon={faFacebook} />
          </a>
          <a href="">
            <FontAwesomeIcon className="h-7" icon={faXTwitter} />
          </a>
          <a href="">
            <FontAwesomeIcon className="h-7" icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Ufooter;
