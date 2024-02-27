import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";

function Uhome(){

  const [jobData, setJobData]= useState([])
  const [error, setError] = useState('')
  
  const fetchData = async () =>{
    try{
      const response =  await axios.get('http://localhost:917/user/userhome')
      setJobData(response.data.data)
    }catch(err){
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Internal server error");
      }
    }
  };
  useEffect(()=>{
    fetchData()
  },[]) 



  return (
    <div className="bg-[#fffdcb] lg:px-28 md:px-20 sm:px-10 px-4 sm:py-8 py-4 w-full">
      <div className="w-full grid lg:grid-cols-3 grid-cols-2  lg:gap-20 md:gap-15 sm:gap-8 gap-5">

      {jobData.map((work) => (
          <Link key={work._id} to={`/user/workerList/${work._id}`}>
            <div className="hover:scale-[1.02] ease-out duration-200 bg-[#17253a] hover:bg-[#121b29] text-white rounded-lg shadow-custom">
              <img
                className="sm:h-[220px]  w-full rounded-t-lg h-[150px] "
                src={work.jobImage}
                alt=""
              />
              <div className="p-4 flex justify-between items-center rounded-b-lg">
                <div>
                  <p className="font-semibold">{work.jobName}</p>
                  <p className="text-[70%] text-gray-400">
                    {work.jobDescription}
                  </p>
                </div>
                <FontAwesomeIcon className="h-6" icon={faHeart} />
              </div>
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}

export default Uhome;
