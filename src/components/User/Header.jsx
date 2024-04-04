import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import CommonLeafMap from "../CommonLeafMap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faLocationDot,
  faBars,
  faXmark,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

function Header() {

  const [showMap, setShowMap] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [location, setLocation] = useState([]);
  const [coordinates, setCoordinates] = useState([])
  const [radius, setRadius] = useState(null)


  useEffect(() => {
    const storedRadius = JSON.parse(localStorage.getItem("radius"));
    if (storedRadius && storedRadius.radius) {
      setRadius(storedRadius.radius);
    }
  }, []);
  
  useEffect(()=>{
    localStorage.setItem('radius', JSON.stringify({radius: radius}));
  },[radius])


  // const toggleSidebar = (e) => {
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
        // setSidebarVisible(false);

  };

  const fetchUserLocation =async ()=> {
    try{
      const res= await axiosInstance.get("/user/userlocation")
      setLocation(res.data.data)
      setCoordinates({lat:res.data.latlong[1], lng: res.data.latlong[0]})
      localStorage.setItem("userLocation", JSON.stringify({ center:{lat: res.data.latlong[1], lng: res.data.latlong[0]},  placeName: res.data.data }));
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
    } else {
      fetchUserLocation();
    }
  }, []);
  

  return (
    <div>
      <div>
        <nav className="md:px-10">
          <ul className={`sidebar ${sidebarVisible ? "show" : ""}`}>
            <li onClick={hideSidebar}>
              <a className="flex items-end">
                <FontAwesomeIcon className="h-10" icon={faXmark} />
              </a>
            </li>
            <li>
              <Link to={'/user/uhome'} onClick={hideSidebar} > Home</Link>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <Link to={'/user/userContract'} onClick={hideSidebar} > Contracts</Link>
            </li>
            <li>
              <Link to={'/user/userProfiles'} onClick={hideSidebar} > Profile</Link>
            </li>
          </ul>

          <ul>
            <div className="name md:text-3xl sm:text-2xl text-lg text-center">
              <p>ALL IN ONE SOLUTION </p>
            </div>
            <div className="break space-y-3">
              <div className="flex flex-row items-center">
                
                <li className="hideFlex">
                <Link to={'/user/uhome'} > Home</Link>
                </li>
                <li className="hideFlex">
                  <a href="">About</a>
                </li>
                <li className="hideFlex">
                  <a href="">contact</a>
                </li>
                <li className="hideFlex">
                
                <Link to={'/user/userContract'} > Contracts</Link>
                </li>
                <li className="hideFlex">
                  
                   <Link to={'/user/userProfiles'} > Profile</Link>
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
                <div className="relative w-full flex gap-1">
                  <input
                    className=" md:w-[100%] sm:w-[180px] md:h-[100%] h-[23px] p-1 pl-8 rounded"
                    type="text"
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
                  <select 
                    className="md:w-14 w-9 rounded text-[80%]"
                    onChange={(e)=>setRadius(parseInt(e.target.value ))}
                    value={radius}
                  >
                    <option value='8'>08 km</option>
                    <option value='10'>10 km</option>
                    <option value='12'>12 km</option>
                    <option value='15'>15 km</option>
                  </select>
                </div>

              </div>
            </div>
          </ul>
        </nav>
      </div>
      { showMap && <CommonLeafMap  initialCenter={coordinates} userType="user"  initialPlaceName={location}/>}
    </div>
  );
}

export default Header;

