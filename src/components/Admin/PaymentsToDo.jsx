import axios from "axios";
import { useEffect, useState } from "react";


const PaymentsToDo = () => {
    const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [count, setCount] = useState(null)

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:917/master/paymentsToDo"
      );  
      console.log(response);
      setData(response.data.data);
      setCount(response.data.totalCount)
    } catch (err) {
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
    <div>
      <section className="bg-white p-8 shadow rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Pending Requests</h2>
          <div className="flex flex-col gap-y-5">
            {data.map((worker) => (
              <div
                key={worker._id}
                className="flex items-center p-8 bg-[#dae3ee] shadow rounded-lg"
              >
                <div className="w-full flex sm:flex-row flex-col justify-center">
                  <div className="">
                    <span className="block text-2xl font-bold">
                      {worker.workerId.firstName} {worker.workerId.lastName}
                    </span>

                    <span className="block text-gray-500">
                      Email: {worker.workerId.email}
                    </span>
                    <span className="block text-gray-500">
                      Phone: {worker.workerId.phoneNumber}
                    </span>
                    <span className="block text-gray-500">
                      Work Type: {worker.workerId.jobType}
                    </span>
                    <span className="block text-gray-500">
                      Amount: {worker.workerId.phoneNumber}
                    </span>
                  </div>
                  <div className="ml-auto flex justify-center items-center">
                    <button
                      onClick={() => Payment(worker._id)}
                      className="inline-flex px-5 py-2 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md "
                    >
                      Payment
                    </button>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
    </div>
  )
}

export default PaymentsToDo
