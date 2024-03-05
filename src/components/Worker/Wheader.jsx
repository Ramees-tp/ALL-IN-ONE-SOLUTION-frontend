import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faLocationDot,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import './Wheader.jsx'


function Wheader() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  

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
      <nav className="md:px-12">
        <ul className={`sidebar ${sidebarVisible ? "show" : ""}`}>
          <li onClick={hideSidebar}>
            <a className="flex items-end">
              <FontAwesomeIcon className="h-10" icon={faXmark} />
            </a>
          </li>
          <li>
            <Link to={"/worker/whome"}>Home</Link>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">My Contracts</a>
          </li>
          <li>
          <Link to={'/worker/profile'}>
                  Profile
                 </Link>
          </li>
        </ul>

        <ul>
          <div className="md:text-3xl sm:text-2xl text-lg text-center w-[25%]">
            <h1>ALL IN ONE SOLUTION</h1> 
            <p className="text-[35%] text-red-600 sm:block hidden">welcome to the epitome of employment excellence!</p>
          </div>
          <div className="break space-y-3">
            <div className="flex flex-row items-center">
              
              <li className="hideFlex">
              <Link to={"/worker/whome"}>Home</Link>
              </li>
              <li className="hideFlex">
                <a href="">About</a>
              </li>
              <li className="hideFlex">
                <a href="">contact</a>
              </li>
              <li className="hideFlex">
                <a href="">My Contracts</a>
              </li>
              <li className="hideFlex">
                 <Link to={'/worker/profile'}>
                  Profile
                 </Link>
              </li>
              <li className="menu-button" onClick={showBars}>
                <a href="#">
                  <FontAwesomeIcon className="h-6 " icon={faBars} />
                </a>
              </li>
            </div>
            <div className="sm:gap-x-10 gap-2 flex sm:flex-row flex-col justify-center items-center text-black ">
              
              <div className="relative w-full">
                <input
                  className=" md:w-[100%] sm:w-[180px] w-[100%] md:h-[100%] h-[23px] p-1 pl-8 rounded"
                  type="text"
                  // value={location}
                  // defaultValue={location}
                  // onChange={handleLocationChange}
                />
                <button>
                  <FontAwesomeIcon
                    className="sm:h-5 h-4 absolute text-[#17253a] left-1 top-1"
                    icon={faLocationDot}
                    
                  />
                  
                </button>
              </div>
              <div className="flex space-x-2">
                <button className="sm:px-5 px-2 bg-red-600 rounded">
                  fullDay
                </button>
                <button className="sm:px-5 px-2 bg-green-600 rounded">
                  Online
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

export default Wheader;
