import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faLocationDot,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import CommonLeafMap from '../CommonLeafMap.jsx';
import axiosInstance from "../../api/worker/workerInstance.js";
import PropTypes from "prop-types";
import './Wheader.jsx';

function Wheader({handleNavigation}) {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [isHalfDay, setIsHalfDay] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [loading, setLoading] = useState(true);
  const [center, setCenter] = useState({lat: 11.24802, 
    lng: 75.7804, });
  const [place, setPlaceName] = useState('')
  console.log(center, place);

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


  useEffect(()=>{
    const onlineHalfday = async () =>{
      try {
        const res = await axiosInstance.get('/worker/workerProfile');
        setIsHalfDay(res.data.data.isHalfDay);
        setIsOnline(res.data.data.isOnline);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching worker data:', error);
     }
    }
    onlineHalfday()
  },[])

  const fetchWorkerData = async () => {
    try {
        const res = await axiosInstance.get('/worker/workerProfile');
        setCenter({lat: res.data.data.coordinates[1], lng: res.data.data.coordinates[0]})
        setPlaceName(res.data.data.workArea);
        
        // localStorage.setItem("workerLocation", JSON.stringify({ center, placeName }));
    } catch (error) {
        console.error('Error fetching worker data:', error);
    }
};


  useEffect(() => {
    const workerLocation = localStorage.getItem('workerLocation');
    if(workerLocation){
      const { center, placeName } = JSON.parse(workerLocation);
      console.log( center, placeName);
      setCenter(center);
      setPlaceName(placeName);
    }else{
      fetchWorkerData();
    }
  }, []);

  const handleHalfDayClick = async () =>{
     try{
      const newIsHalfDay = !isHalfDay;
      const res = await axiosInstance.put('/worker/updateIsHalfDay', { isHalfDay: newIsHalfDay });
      if (res.status === 200) {
        setIsHalfDay(newIsHalfDay);
      }
     } catch (error) {
      console.error('Error updating isHalfDay:', error);
    }
  }

  const handleOnlineOffline = async () =>{
    try{
     const newIsOnline = !isOnline;
     const res = await axiosInstance.put('/worker/updateOnline', { isOnline: newIsOnline });
     if (res.status === 200) {
      setIsOnline(newIsOnline);
     }
    } catch (error) {
     console.error('Error updating isHalfDay:', error);
   }
 }


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
            <Link to="" onClick={() => handleNavigation("WHome")} >Home</Link>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
          <Link to="" onClick={() => handleNavigation("WContracts")} >
                  My Contracts
                 </Link>
          </li>
          <li>
          <Link to="" onClick={() => handleNavigation("WProfile")} >
                  Profile
                 </Link>
          </li>
        </ul>

        <ul>
          <div className="md:text-3xl sm:text-2xl text-xl md:w-[30%] w-full">
            <h1 className="lg:text-left text-center w-full">ALL IN ONE SOLUTION</h1> 
            <p className="text-[35%] text-red-600 md:block hidden sm:mr-20 leading-4 text-center">welcome to the epitome of employment excellence!</p>
          </div>
          <div className="break space-y-3">
            <div className="flex flex-row items-center">
              
              <li className="hideFlex">
              <Link to="" onClick={() => handleNavigation("WHome")} >Home</Link>
              </li>
              <li className="hideFlex">
                <a href="">About</a>
              </li>
              <li className="hideFlex">
                <a href="">contact</a>
              </li>
              <li className="hideFlex">
              <Link to="" onClick={() => handleNavigation("WContracts")} >
                  Contracts
                 </Link>
              </li>
              <li className="hideFlex">
              <Link to="" onClick={() => handleNavigation("WProfile")}> 
                    Profile
              </Link>
              </li>
              <li className="menu-button" onClick={showBars}>
                <a href="#">
                  <FontAwesomeIcon className="h-6 " icon={faBars} />
                </a>
              </li>
            </div>
            <div className="sm:gap-x-10 gap-2 flex sm:flex-row flex-col justify-center items-center text-black sm:ml-0 ml-8">
              
              <div className="relative w-full">
                <input
                  className=" md:w-[100%] sm:w-[180px]  w-[100%] md:h-[100%] h-[23px] p-1 pl-8 rounded"
                  type="text"
                  // value={place}
                  defaultValue={place}
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
              <div className="flex space-x-2">
                <button className={`sm:w-20 w-16 sm:text-base text-[80%] sm:h-8 h-6 font-semibold ${isHalfDay ? 'bg-gray-500 text-white' : 'bg-blue-300'} rounded `} onClick={handleHalfDayClick} disabled={loading}>
                  {isHalfDay ? 'Half Day' : 'Full Day'}
                </button>
                <button className={`sm:w-20 w-16 sm:text-base text-[80%] sm:h-8 h-6 font-semibold ${isOnline ? 'bg-green-500 text-white' : 'bg-red-500 text-white'} rounded `} onClick={handleOnlineOffline} disabled={loading}>
                  {isOnline ? 'Online' : 'Offline'}
                </button>
              </div>
            </div>
          </div>
        </ul>
      </nav>
    </div >
    
    { showMap && <CommonLeafMap  initialCenter={center} userType="worker"  initialPlaceName={place}/>}
    
  </div>
  );
}

Wheader.propTypes = {
  handleNavigation: PropTypes.object.isRequired
};

export default Wheader;
