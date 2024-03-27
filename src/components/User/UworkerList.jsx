import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import user from "../../assets/icons/account.png";
import favWorker from "../../assets/icons/heart.png";
import axiosInstance from "../../api/axios";
import "./ToggleButton.css";

// import { useWorkerDetails } from "../../context/WorkerDetailsContext";

// const radiusSelected =JSON.parse(localStorage.getItem('radius'))
// const { radius } = radiusSelected
// console.log('rrrrra', radius);
// const locationDetail = JSON.parse(localStorage.getItem('userLocation'));
// const { center } = locationDetail || {};
// const { lat, lng } = center || {};
// console.log(lat, lng);


function UworkerList() {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [showHalfDayWorkers, setShowHalfDayWorkers] = useState(false);
  const [lati, setLat] = useState(null);
  const [lngi, setLng] = useState(null);
  const [radius, setRadius] = useState(null);
  console.log(lati, lngi);

  // const {setDetails} = useWorkerDetails()

  const {id} = useParams()
  // useEffect(() => {
  //   setDetails(id);
  // }, [id, setDetails]);

  useEffect(() => {
    const fetchLocalStorageData = () => {
      const radiusSelected = JSON.parse(localStorage.getItem('radius'));
      setRadius(radiusSelected?.radius || null);

      const locationDetail = JSON.parse(localStorage.getItem('userLocation'));
      if (locationDetail) {
        const { center } = locationDetail;
        const { lat, lng } = center || {};
        setLat(lat);
        setLng(lng);
      } else {
        setError("Location details not found in localStorage.");
      }
    };

    fetchLocalStorageData();
  }, [lati, lngi, radius]);

  
  useEffect(()=>{
    const fetchWorker = async () => {
      try{
        if (!lati || !lngi || !radius) {
          setError("Latitude, longitude, or radius is missing.");
          return;
        }
        console.log("innnnnnn", lati, lngi, radius);
        const response = await axiosInstance.get(`/user/fetchWorker/${id}`,{ params: {
          latitude: lati,
          longitude: lngi,
          radius
        }})
        if(response.status===200){
          setData(response.data.data)
          setError('')
        }
      }catch(err){
        console.log("frontend server error", err);
        setError("Error fetching worker details.");
       }
    }
  
    fetchWorker()
  },[lati, lngi, radius, id])

  const handleCheckboxChange = () => {
    setShowHalfDayWorkers(!showHalfDayWorkers);
  };

  return (
    <div className="md:px-28 sm:px-10 rm:px-6 px-2 bg-[#fffdcb] py-5 h-screen">
      <div className="flex justify-between">
        <h1 className="sm:text-2xl text-md font-bold mb-5">Awailable Workers :</h1>
        <div className="flex justify-end ">
          <input type="checkbox" className="checkbox"
           checked={showHalfDayWorkers} 
           onChange={handleCheckboxChange}
          />
        </div>
      </div>
      <div className="md:space-y-8 space-y-4 md:max-w-2xl">

        {data.filter(worker => (showHalfDayWorkers ? worker.isHalfDay : !worker.isHalfDay))
             .filter(worker => worker.isOnline)
             .map((worker)=>(

         <Link to={`/user/workerDetails/${worker._id}/${id}`} key={worker._id}>
        <div className="bg-blue-300 rm:p-4 p-1 rounded-xl">
          <div className="flex  items-center ">
            <div className="rounded-full bg-slate-400 sm:p-2 ml-5">
              <img src={user} alt="" />
            </div>
            <div className="bg-slate-300 sm:p-5 p-3 rounded-xl sm:ml-8 ml-4 w-full flex justify-between">
              <h1 className="font-semibold sm:text-3xl text-xl">{worker.firstName} {worker.lastName}</h1>
              <img className="rm:h-auto h-6" src={favWorker} alt="" />
            </div>
          </div>
        </div>
         </Link>

        ))}

        <div>
              {error && (
                <div className="text-red-500 mb-4 text-center">{error}</div>
              )}
            </div>

      </div>
    </div>
  );
}

export default UworkerList;

