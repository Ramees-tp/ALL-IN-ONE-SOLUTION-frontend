import { useEffect, useState } from 'react'
import axiosInstance from '../../../api/axios';
import useRazorpay from "react-razorpay";



const ContractRequests = () => {
  const [requests, setRequests] = useState([])
  const [error, setError] = useState("");
  // const [order, setOrder] = useState('')

  // console.log("order", order);
  console.log(requests);
  const [Razorpay] = useRazorpay();

  

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
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setRequests((prevRequests) => prevRequests.filter((request) => request.status !== 'declined'));
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
  
  const payment = async (orderId) =>{
    
    const amount = 500;
    const currency = 'INR'
    const receipt = 'tyty'
    let order = null
    try{
      const response = await axiosInstance.post('/user/payment', { amount, currency, receipt }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      order = response.data.data;
      console.log("order2", order);
      // const { amount, receipt } = res.data;
      // await createOrder(amount, receipt);
    }catch(err){
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Internal server error");
      }
    }
    const options = {
      "key": "rzp_test_cPE3LPX2nR9LE2", 
      amount, 
      currency,
      "name": "ALL IN ONE SOLUTION",
      "description": "Test Transaction",
      // "image": "https://example.com/your_logo",
      "order_id": order.id,
      "handler": async function (response){
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature)
          const body ={
            ...response,
            orderId: orderId
          };
          const validateRes = await axiosInstance.post('/user/validatePayment', body, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
          const res = validateRes.data
          console.log('payment res', res);
      },
      "prefill": { 
          "name": "Ramees tp",
          "email": "ramees@example.com", 
          "contact": "9000090000"
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
      "theme": {
          "color": "#fffdcb"
      }
  };
  var rzp1 = new Razorpay(options);
  rzp1.on('payment.failed', function (response){
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
  });
    rzp1.open();
    e.preventDefault();
  }

  return (
    <div>
      <div>
      <h2 className="text-2xl font-semibold mb-6">Your Requests </h2>
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 ">
        { requests.length > 0 && requests.filter(request => !request.payment).map((request) => (
          <div key={request._id} className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
          <div
                
                className="flex items-center p-8 bg-[#dae3ee] shadow rounded-lg"
              >
                <div className="w-full flex sm:flex-row flex-col justify-center">
                  <div>
                    <span className="block text-gray-500">
                      {request.workerId.jobType}
                    </span>
                    <span className="block text-2xl font-bold">
                      {request.workerId.firstName} {request.workerId.lastName}
                    </span>

                    <span className="block text-gray-500">
                     {new Date(request.date).toLocaleDateString()} - {request.day}
                    </span>
                    <span className="block text-gray-500">
                      {request.workerId.workArea}
                    </span>
                   
                  </div>
                  <div className="ml-auto flex justify-center items-center">
                  <div 
                    className={`inline-flex px-5 py-2 ${request.status === 'pending' ? 'text-red-500 border-red-500' : request.status === 'accepted' ? 'text-white bg-green-600 hover:bg-green-700 cursor-pointer' : 'text-white bg-red-700' } rounded-md ml-3 border`}
                    >
                      {request.status === 'accepted' ? (
                        <span className='block' onClick={()=> payment(request._id)}>payment</span>
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
          </div>
         ))}
        </div>
      </div>
    </div>
  )
}

export default ContractRequests
