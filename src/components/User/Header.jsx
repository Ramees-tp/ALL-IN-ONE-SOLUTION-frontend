import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faLocationDot,
  faBars,
  faXmark,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import axiosInstance from "../../api/axios";
import CommonLeafMap from "../CommonLeafMap";

function Header({handleNavigation }) {

  const [showMap, setShowMap] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  // const [filteredData, setFilteredData] = useState([]);
  const [location, setLocation] = useState([]);
  const [coordinates, setCoordinates] = useState([])
  console.log( "userlocation", location);
  console.log( "userlat", coordinates);


  useEffect(()=>{
    if(location !== null){
       localStorage.setItem('location', location)
    }
  },[location])

  // const toggleSidebar = (e) => {
  //   console.log("Sidebar visibility toggled");
  //   e.preventDefault();
  //   setSidebarVisible(!sidebarVisible);
  // };

  const toggleComponent = () => {
    setShowMap(!showMap);
  };

  const showBars = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  };
  const hideSidebar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  };

  const fetchUserLocation =async ()=> {
    try{
      const res= await axiosInstance.get("/user/userlocation")
      setLocation(res.data.data)
      setCoordinates({lat:res.data.latlong.lat, lng: res.data.latlong.lng})
      console.log(res.data);
    }catch(err){
     console.log("frontend server error", err);
    }
  }

  
  useEffect(() => {
    const storedLocation = localStorage.getItem('userLocation');
    if (storedLocation) {
      const parsedLocation = JSON.parse(storedLocation);
      setLocation(parsedLocation.placeName);
      setCoordinates(parsedLocation.center);
      console.log("header:", parsedLocation.center);
    } else {
      fetchUserLocation();
    }
  }, []);
  

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
              <Link to=""  onClick={() => handleNavigation("Home")}>Home</Link>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
               <Link to="" onClick={() => handleNavigation("Contracts")}>
                  Contracts
              </Link>
            </li>
            <li>
              <Link to="" onClick={() => handleNavigation("Profile")}> 
                    Profile
              </Link>
            </li>
          </ul>

          <ul>
            <div className="md:text-3xl sm:text-2xl text-lg text-center">
              <p>ALL IN ONE</p> SOLUTION
            </div>
            <div className="break space-y-3">
              <div className="flex flex-row items-center">
                
                <li className="hideFlex">
                <Link to=""  onClick={() => handleNavigation("Home")}>Home</Link>
                </li>
                <li className="hideFlex">
                  <a href="">About</a>
                </li>
                <li className="hideFlex">
                  <a href="">contact</a>
                </li>
                <li className="hideFlex">
                <Link to="" onClick={() => handleNavigation("Contracts")}>
                  Contracts
                </Link>
                </li>
                <li className="hideFlex">
                   <Link to="" onClick={() => handleNavigation("Profile")}> 
                    Profile
                   </Link>
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
                    className=" md:w-[100%] sm:w-[180px] md:h-[100%] h-[23px] p-1 pl-8 rounded "
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
                    className=" md:w-[100%] sm:w-[180px] md:h-[100%] h-[23px] p-1 pl-8 rounded"
                    type="text"
                    // value={location}
                    defaultValue={location}
                    // onChange={handleLocationChange}
                  />
                  <button>
                    <FontAwesomeIcon
                      className="sm:h-5 h-4 absolute text-[#17253a] left-1 top-1"
                      icon={faLocationDot}
                      onClick={toggleComponent}
                    />
                  </button>
                  
                </div>
              </div>
            </div>
          </ul>
        </nav>
      </div>
      <div className="absolute h-full">
      { showMap && <CommonLeafMap  initialCenter={coordinates} userType="user"  initialPlaceName={location}/>}
      </div>
    </div>
  );
}

export default Header;

