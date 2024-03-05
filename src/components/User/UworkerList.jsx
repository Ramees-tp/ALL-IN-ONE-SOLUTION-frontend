import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import user from "../../assets/icons/account.png";
import favWorker from "../../assets/icons/heart.png";
import "./ToggleButton.css";
import axios from "axios";
import { useWorkerDetails } from "../../context/WorkerDetailsContext";


function UworkerList() {
  const navigate = useNavigate()
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const {id} = useParams()
  console.log(id);
  const { setDetails } = useWorkerDetails();



  useEffect(()=>{
    const fetchData= async ()=>{
      try{
        const response= await axios.get(`http://localhost:917/user/awailWorker/${id}`)
         setData(response.data.data)
      } catch (err) {
        if (err.response && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError("Internal server error");
        }
      }
    }
    fetchData()
    return () => {
      // Cleanup function
      setData([]); 
      setError("");
    };
  },[id])

  const handleSelect = async (workerId) =>{
    console.log(workerId);
    try{
      const response= await axios.get(`http://localhost:917/user/workerDetails/${workerId}`)
      if(response.status===200){
        // navigate(`/user/workerDetails/${workerId}`, { state: { worker: response.data.data } });
        navigate('/user/workerDetails')
        setDetails(response.data.data);
      }

    } catch (err) {
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("front: Internal server error");
      }
    }
  }

  return (
    <div className="px-28 bg-[#fffdcb] py-5 h-screen">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-5">Awailable Workers :</h1>
        <div className="flex justify-end ">
          <input type="checkbox" className="checkbox" />
        </div>
      </div>
      <div className="space-y-8 max-w-2xl">

        {data.map((worker)=>(

          <div onClick={ ()=> handleSelect(worker._id)} key={worker._id} className="bg-blue-300 p-4 rounded-xl">
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

