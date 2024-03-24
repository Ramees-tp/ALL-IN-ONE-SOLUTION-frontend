import { useEffect, useState } from 'react'
import axios from 'axios'

const PendingWork = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  console.log(error);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:917/master/requestDetails"
      );  
      console.log(response);
      setData(response.data.data);
    } catch (err) {
        if (err.response && err.response.data.message) {
          setError(err.response.data.message);
        } else {
          setError("Internal server error");
        }
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
       <h2 className="text-2xl font-semibold mb-6">Pending Works</h2>
          <div className="flex flex-col gap-y-5">
            {data.filter(request=>request.payment && !request.completed).map((worker) => (
              <div
                key={worker._id}
                className="flex items-center p-8 bg-[#9fc3f0] shadow rounded-lg"
              >
                <div className="w-full flex sm:flex-row flex-col justify-center">
                  <div className="grid grid-cols-2 grid-row-5 gap-3">
                    <span className="col col-span-2 block text-2xl font-bold">
                      {worker.workerId.firstName} {worker.workerId.lastName}
                    </span>
                    <span className="col-span-2 block text-gray-500">
                      RequestId: {worker._id}
                    </span>
                    <span className="col-span-3 block text-gray-500">
                      Email: {worker.workerId.email}
                    </span>
                    <span className="block text-gray-500">
                      Phone: {worker.workerId.phoneNumber}
                    </span>
                    <span>
                      
                    </span>
                  </div>
                  <div className="ml-auto flex flex-col justify-between items-center">
                    <div
                      className="inline-flex px-5 py-2 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md "
                    >
                      <span>Date:</span> {new Date(worker.date).toLocaleDateString()}
                    </div>
                    <div
                      className="inline-flex px-5 py-2 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md ml-3"
                    >
                      {worker.day}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
  )
}

export default PendingWork
