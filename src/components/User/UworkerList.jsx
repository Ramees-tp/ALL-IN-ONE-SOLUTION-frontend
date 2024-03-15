import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import user from "../../assets/icons/account.png";
import favWorker from "../../assets/icons/heart.png";
import "./ToggleButton.css";
// import { useWorkerDetails } from "../../context/WorkerDetailsContext";
import axiosInstance from "../../api/axios";

const locationDetail = JSON.parse(localStorage.getItem('userLocation'));
const { center } = locationDetail;
const { lat, lng } = center;


function UworkerList() {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [showHalfDayWorkers, setShowHalfDayWorkers] = useState(false);

  const {id} = useParams()
  console.log(id);
  // const { setDetails } = useWorkerDetails();


  const fetchWorker = async () => {
    try{
      
      console.log("locccc:", locationDetail);
      const response = await axiosInstance.get(`/user/fetchWorker/${id}`,{ params: {
        latitude: lat,
        longitude: lng
      }})
      if(response.status===200){
        setData(response.data.data)
      }
    }catch(err){
      console.log("frontend server error", err);
     }
  }

  useEffect(()=>{
    fetchWorker()
  },[])

  const handleCheckboxChange = () => {
    setShowHalfDayWorkers(!showHalfDayWorkers);
  };

  return (
    <div className="px-28 bg-[#fffdcb] py-5 h-screen">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-5">Awailable Workers :</h1>
        <div className="flex justify-end ">
          <input type="checkbox" className="checkbox"
           checked={showHalfDayWorkers} 
           onChange={handleCheckboxChange}
          />
        </div>
      </div>
      <div className="space-y-8 max-w-2xl">

        {data.filter(worker => (showHalfDayWorkers ? worker.isHalfDay : !worker.isHalfDay)).map((worker)=>(

         <Link to={`/user/workerDetails/${worker._id}`} key={worker._id}>
            <div className="bg-blue-300 p-4 rounded-xl">
          <div className="flex  items-center ">
            <div className="rounded-full bg-slate-400 p-2">
              <img src={user} alt="" />
            </div>
            <div className="bg-slate-300 p-5 rounded-xl ml-8 w-full flex justify-between">
              <h1 className="font-semibold text-3xl">{worker.firstName} {worker.lastName}</h1>
              <img src={favWorker} alt="" />
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

