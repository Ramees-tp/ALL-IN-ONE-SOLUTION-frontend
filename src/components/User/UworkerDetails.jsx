
import green from "../../assets/icons/circle.png";
import user from "../../assets/icons/account.png";
import { useWorkerDetails } from "../../context/WorkerDetailsContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function UworkerDetails() {
  const navigate = useNavigate();
  const { workerDetails } = useWorkerDetails();
  console.log(workerDetails);

  const sendRequest = async (workerId) => {
    try {
      const response = await axios.post(`http://localhost:917/user/workRequest/${workerId}`);
      if(response.status===200){
        navigate('/user/success')
      }
    } catch (err) {
      console.log(err);
    }
  }



  return (
    <div className="bg-white lg:px-28 sm:px-16 px-2 lg:py-20 md:py-10 py-4">
      <div className=" flex md:flex-row flex-col justify-center gap-5">
        
        <div className="bg-gray-400 p-3 max-w-xl space-y-5 rounded">
          <div className="bg-white p-5 space-y-5">
            <h1 className="text-center font-bold text-3xl">Available Days</h1>
            <div className="space-x-5">
              <button className="bg-purple-300 p-1 px-2 rounded-md">
                This Week
              </button>
              <button className="bg-purple-100 p-1 px-2 rounded-md">
                Next week
              </button>
            </div>
            <div className="grid grid-cols-7 gap-5">
              <div className="flex flex-col justify-center items-center gap-y-5">
                <p className="text-[80%] font-semibold bg-gray-300 p-1 rounded w-10 text-center">
                  Mon
                </p>
                <img src={green} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center gap-y-5">
                <p className="text-[80%] font-semibold bg-gray-300 p-1 rounded w-10 text-center">
                  Tue
                </p>
                <img src={green} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center gap-y-5">
                <p className="text-[80%] font-semibold bg-gray-300 p-1 rounded w-10 text-center">
                  Wed
                </p>
                <img src={green} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center gap-y-5">
                <p className="text-[80%] font-semibold bg-gray-300 p-1 rounded w-10 text-center">
                  Thu
                </p>
                <img src={green} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center gap-y-5">
                <p className="text-[80%] font-semibold bg-gray-300 p-1 rounded w-10 text-center">
                  Fri
                </p>
                <img src={green} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center gap-y-5">
                <p className="text-[80%] font-semibold bg-gray-300 p-1 rounded w-10 text-center">
                  Sat
                </p>
                <img src={green} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center gap-y-5">
                <p className="text-[80%] font-semibold bg-gray-300 p-1 rounded w-10 text-center">
                  sun
                </p>
                <img src={green} alt="" />
              </div>
            </div>
          </div>

          <div>
            <h1 className="font-bold mb-5 text-2xl">Select Day</h1>
            <select
              id="selectDay"
              name="selectDay"
              value=""
              onChange=""
              className="w-[50%] p-2 border rounded-md focus:outline-none focus:border-blue-500"
            >
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Friday">Friday</option>
              <option value="Satarday">Satarday</option>
              <option value="Sunsday">Sunday</option>
            </select>
          </div>
        </div>

        <div className="bg-gray-400 p-3 max-w-xl space-y-3 rounded">
          <h1 className="bg-white p-4 text-center font-bold text-2xl">
            Worker Details
          </h1>
          <div className="bg-white p-3 space-y-5">
            <div className=" flex justify-center items-center gap-x-5">
              <img
                className="bg-amber-900 rounded-full p-2"
                src={user}
                alt=""
              />
              <p className="text-2xl">{workerDetails[0].firstName} {workerDetails[0].lastName}</p>
            </div>
            <div className="bg-gray-300 p-3">
              <p className="font-semibold mb-5">Worker ID : {workerDetails[0]._id} </p>
              <p>experience : </p>
              <p>Place : {workerDetails[0].city} </p>
              <p>Consistency : </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-10 ">
        <button onClick={ ()=>sendRequest(workerDetails[0]._id)} className="bg-green-700 hover:bg-green-500 p-3 rounded text-white">
          Send Request
        </button>
      </div>
    </div>
  );
}

export default UworkerDetails;
