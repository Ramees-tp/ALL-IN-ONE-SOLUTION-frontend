import React, { useState } from "react";
import search from "../../assets/icons/search.png";
import location from "../../assets/icons/location (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationPin,
  faBars,
  faXmark,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import "./Header.css";

function Header() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  // const toggleSidebar = (e) => {
  //   console.log("Sidebar visibility toggled");
  //   e.preventDefault();
  //   setSidebarVisible(!sidebarVisible);
  // };

  const showBars = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  };

  const hideSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  };

  return (
    <div>
      <div>
        <nav>
          <ul className={`sidebar ${sidebarVisible ? "show" : ""}`}>
            <li onClick={hideSidebar}>
              <a className="flex items-end">
                <FontAwesomeIcon className="h-10" icon={faXmark} />
              </a>
            </li>
            <li>
              <a href="">home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">contact</a>
            </li>
            <li>
              <a href="">Contracts</a>
            </li>
            <li>
              <a href="">Profile</a>
            </li>
          </ul>

          <ul>
            <div className="md:text-3xl sm:text-2xl text-xl text-center">
              <p>ALL IN ONE</p> SOLUTION
            </div>
            <div className="flex md:flex-col flex-row-reverse gap-y-2">
              <div className="flex flex-row items-center">
                <li className="hideFlex">
                  <a href="">home</a>
                </li>
                <li className="hideFlex">
                  <a href="">About</a>
                </li>
                <li className="hideFlex">
                  <a href="">contact</a>
                </li>
                <li className="hideFlex">
                  <a href="">Contracts</a>
                </li>
                <li className="hideFlex">
                  <a href="">Profile</a>
                </li>
                <li className="menu-button" onClick={showBars}>
                  <a href="#">
                    <FontAwesomeIcon className="h-6 " icon={faBars} />
                  </a>
                </li>
              </div>
              <div className="gap-2 flex sm:flex-row flex-col justify-center items-center text-black ">
                <div className="relative w-full">
                  <input
                    className=" md:w-[100%] md:h-[100%] h-[23px] p-1 pl-8 rounded "
                    type="text"
                  />
                  <button>
                    <FontAwesomeIcon
                      className="sm:h-5 h-4 absolute text-[#17253a] left-1 top-1"
                      icon={faSearch}
                    />
                  </button>
                </div>
                <div className="relative w-full">
                  <input
                    className=" md:w-[100%] md:h-[100%] h-[23px] p-1 pl-8 rounded"
                    type="text"
                  />
                  <button>
                    {" "}
                    <FontAwesomeIcon
                      className="sm:h-5 h-4 absolute text-[#17253a] left-1 top-1"
                      icon={faLocationPin}
                    />
                  </button>
                </div>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
