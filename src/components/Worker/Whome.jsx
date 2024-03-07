import { useEffect, useState } from "react";
import user from "../../assets/icons/account.png";
import favWorker from "../../assets/icons/heart.png";
import axiosInstance from "../../api/worker/workerInstance";

function Whome() {
  const [request, setRequest] = useState()

  const workRequest = async () =>{
    try{
      const res = await axiosInstance.get('/worker/workRequest');
      setRequest(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    workRequest()
  },[])
  return (
    <div>
      <div className="bg-[#DFE7B4] lg:px-28 md:px-16 sm:px-10 px-4 py-5">
        <div className="bg-[#FFFFFF] lg:p-10 p-2 rounded mb-5">
          <h1 className="mb-5 text-2xl font-bold">Job Requests :</h1>

          <div className="scroll-mx-60 overflow-y-scroll  h-72 py-5 px-2 flex flex-col gap-4">
            {request && request.map((req)=>(
          <div key={req._id} className="bg-[#678FB4] p-3 rounded-md ">
            <div className="flex flex-col md:flex-row items-center ">
              <div className="rounded-full bg-[#C3B6B6] p-2 mb-4 md:mb-0 md:mr-4">
               <img src={req.userId.photo || user} alt="" className="w-10 h-10" />
              </div>
              <div className="bg-[#DFE7B4] p-3 rounded-xl w-full md:w-auto flex flex-col md:flex-row gap-x-3 space-y-4 items-center">
                <h1 className="font-semibold  lg:text-2xl sm:text-xl text-sm p-2 max-w-[18rem] md:max-w-none md:mr-4">
                 {req.userId.firstName} {req.userId.lastName}
                </h1>
                  <div className="flex lg:flex-row flex-col gap-5 items-center justify-center">
                    <div className="flex flex-row items-center md:gap-y-2 gap-2 md:space-x-3">
                      <p className="bg-blue-300 p-2 rounded font-bold text-base md:text-xl md:w-36 w-28 text-center">
                        Date: 1-5-23
                      </p>
                      <p className="bg-blue-300 p-2 rounded font-bold text-base md:text-xl md:w-36 w-28 text-center">
                        Monday
                      </p>
                    </div>
                    <div className="flex flex-row items-center md:gap-y-2 gap-2 md:space-x-3">
                      <button className="bg-green-800 p-2 rounded font-bold text-base md:text-xl text-white w-24">
                        Accept
                      </button>
                      <button className="bg-red-800 p-2 rounded font-bold text-base md:text-xl text-white w-24">
                        Decline
                      </button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 md:p-10 rounded bg-[#FFFFFF] shadow-md">
            <h1 className="text-3xl font-bold mb-4">Contract History</h1>
            <div className="flex flex-col md:flex-row gap-4">
              <p className="font-bold text-lg md:text-xl border-b-2 border-red-900 cursor-pointer">
                Last week
              </p>
              <p className="font-bold text-lg md:text-xl cursor-pointer">Last Month</p>
            </div>
            <div className="bg-[#C3B6B6] text-xl font-bold p-4 rounded-lg mt-4">
              <h1>Total Contracts</h1>
            </div>
          </div>
          <div className="p-6 md:p-10 rounded bg-[#FFFFFF] shadow-md">
            <h1 className="text-3xl font-bold mb-4">Wallet</h1>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <p className="text-lg md:text-xl font-bold">Today's earnings</p>
                <p className="bg-[#C3B6B6] p-2 rounded-lg">$45</p>
              </div>
              <div className="flex-1">
                <p className="text-lg md:text-xl font-bold">Total Balance</p>
                <p className="bg-[#C3B6B6] p-2 rounded-lg">$5665</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Whome;
