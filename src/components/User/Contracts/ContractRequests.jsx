import { useEffect, useState } from 'react'
import axiosInstance from '../../../api/axios';
import RazorpayPayment from '../../RazorpayPayment'

// import useRazorpay from "react-razorpay";



const ContractRequests = () => {
  const [requests, setRequests] = useState([])
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [error, setError] = useState("");
  // const [order, setOrder] = useState('')

  // console.log("order", order);
  console.log(requests);
  // const [Razorpay] = useRazorpay();

  

  const fetchData = async () =>{
    try{
      const response = await axiosInstance.get("/user/showRequests")
      console.log(response.data);
      if(response.status===200){
        setRequests(response.data.requests);
      }
    }catch(err){
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Internal server error");
      }
    }
  }

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 15000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setRequests((prevRequests) => prevRequests.filter((request) => request.status !== 'pending'));
    }, 30 * 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  const cancel = async (requestId)=>{
    try{
      const response = await axiosInstance.delete(`/user/cancelRequest/${requestId}`)
      console.log(response.data);
      if(response.status===200){
        fetchData();
      }
    }catch(err){
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Internal server error");
      }
    }
  }

  const handlePaymentCompleted = () => {
    setPaymentCompleted(true);
  };
  

  return (
    <div>
      <div>
      <h2 className="text-2xl font-semibold md:mb-6 mb-2">Your Requests </h2>
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 md:pr-10 lg:px-8 ">
        { requests.length > 0 && requests.filter(request => !request.payment).map((request) => (
          <div key={request._id} className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg md:px-12 px-4">
            <div>
          <div   
                className="flex items-center md:p-8 p-2 bg-[#d5e6eb] shadow rounded-lg"
              >
                <div className="w-full flex sm:flex-row flex-col justify-center gap-y-3">
                  <div className='space-y-2'>
                    <span className="block text-gray-500">
                      {request.workerId.jobType}
                    </span>
                    <span className="block md:text-2xl text-xl font-bold">
                      {request.workerId.firstName} {request.workerId.lastName}
                    </span>

                    <span className="block text-gray-500">
                     {new Date(request.date).toLocaleDateString()} - {request.day}
                    </span>
                    <span className="block text-gray-500">
                      {request.workerId.workArea}
                    </span>
                    <span className="block text-green-500">
                      <p>Amount : {request.wage}</p>
                    </span>
                   
                  </div>
                  <div className="md:ml-auto flex justify-center items-center">
                  <div 
                    className={`inline-flex px-5 py-2 ${request.status === 'pending' ? 'text-red-500 border-red-500' : request.status === 'accepted' ? 'text-white bg-green-600 hover:bg-green-700 cursor-pointer' : 'text-white bg-red-700' } rounded-md ml-3 border`}
                    >
                      {request.status === 'accepted' ? (
                        <RazorpayPayment orderId={request._id} wage={request.wage} type={'user'} onPaymentCompleted={handlePaymentCompleted} />
                        ) : (
                          <span className="block">{request.status}</span>
                      )}
                  </div>
                  <button
                      onClick={() => cancel(request._id)}
                      className="inline-flex px-5 py-2 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md ml-3"
                    >
                      Cancel
                  </button>
                  </div>
                </div>
              </div>
              {paymentCompleted && <div className="font-bold text-green-500 mt-4">Payment completed successfully!</div>}
              </div>
          </div>
         ))}
        </div>
      </div>
    </div>
  )
}

export default ContractRequests
