import { useEffect, useState } from 'react'
import axiosInstance from '../../../api/axios';
import SocketChat from '../SocketChat';

const UserContracts = () => {
  const [requests, setRequests] = useState([])
  const [showChat, setShowChat] = useState(false)
  const [selectedContract, setSelectedContract] = useState(null);
  const [error, setError] = useState("");

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

  const showChatBox = (requestId) => {
      setSelectedContract(requestId);
      setShowChat((prevShowChat) => !prevShowChat);
  };

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

  return (
    <div className=''>
        <h2 className="tm:text-2xl text-xl font-semibold sm:mb-6 mb-3">Contracts</h2>
        { requests.length > 0 && requests.filter(request => request.payment).map((request) => (
        <div key={request._id} className='flex sm:flex-row flex-col gap-4 mb-5' >
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 md:pr-10 lg:px-8 lg:w-[70%]">
          <section className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-slate-100 shadow-xl sm:px-12 relative">
          {request.completed && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center  bg-gray-800 bg-opacity-75 text-white rounded-t-lg sm:px-12">
                  <p className='text-4xl font-bold text-green-500 p-36'></p>
                </div>
              )}
            <div className='flex md:flex-row flex-col sm:items-start items-center w-full'>
             <div className='md:w-[30%]'>
             <div  className="tm:w-32 w-24 tm:h-32 h-24 rounded-full overflow-hidden bg-gray-200">
                <img 
                  src={request.workerId.profileImage} 
                  alt="profile"
                  className="object-cover w-full h-full" 
                />
              </div>
             </div>
              <div className='grid sm:grid-cols-6 grid-cols-1 sm:grid-rows-2 grid-rows-5 lg:gap-5 lg:w-[70%] text-gray-800'>
                <p className='sm:col-span-2 font-semibold tm:text-base text-[80%]'>OrderID</p>
                <p className='sm:col-span-4'>{request._id}</p>
                <p className='sm:col-span-4 flex items-center text-2xl font-bold'>{request.workerId.firstName} {request.workerId.lastName}</p>
                <p className='flex items-center'>{request.workerId.jobType}</p>
                <p className='sm:col-span-4 flex items-center tm:text-xl text-[90%] text-green-900'>{new Date(request.date).toLocaleDateString()} - {request.day}</p>
                <p className='flex items-center'>{request.workerId.workArea}</p>
              </div>
            </div>
          </section>
          <section className="align-middle inline-block min-w-full shadow overflow-hidden bg-slate-100 shadow-dashboard lg:px-8 px-2 md:pt-3 rounded-bl-lg rounded-br-lg relative">
          {request.completed && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 text-white rounded-b-lg sm:px-12">
                  <p className='text-center tm:text-4xl text-2xl font-bold text-green-500 p-36'>Work Completed</p>
                </div>
              )}
           <p className='text-lg text-gray-700 font-bold'>Contact</p>
            <div className=" flex flex-col justify-center mt-4 work-sans bg-white shadow-xl rounded lg:p-6 p-2 mb-5">
             <div className='grid md:grid-cols-2 md:grid-rows-3 items-center text-gray-800  md:w-[30%] md:gap-x-20 md:text-base sm:text-[85%] text-[75%]'>
              <p className=' font-bold'>Call</p>
              <p>{request.workerId.phoneNumber}</p>
              <p className=' font-bold'>EMAIL</p>
              <p>{request.workerId.email}</p>
              <p className=' font-bold'>Worker ID</p>
              <p>{request.workerId._id}</p>
              <p className=' font-bold'>Secret Code</p>
              <p 
                className='md:text-base sm:text-[85%] text-base font-bold text-blue-700 border-2 border-blue-900 rounded px-2 w-24 text-center'
              >{request.secretcode}</p>
             </div>
             
             <div className='md:ml-auto flex justify-center mt-5'>
              <button
               onClick={() => cancel(request._id)}
                className=" inline-flex md:px-5 px-2 md:py-2 py-1 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md ml-3"
              >Cancel
             </button>
             <button
                onClick={()=>showChatBox(request._id)}
                className=" inline-flex md:px-5 px-2 md:py-2 py-1 text-green-600 hover:text-green-700 focus:text-green-700 hover:bg-green-100 focus:bg-green-100 border border-green-600 rounded-md ml-3"
              >{showChat && selectedContract._id === request._id ? 'Close Chat' : 'Live Chat'}
             </button>
             </div>
            </div>
          </section>
        </div>
        <div className='lg:w-[30%]'>
        {showChat && selectedContract === request._id && (
          <SocketChat workerId={request.workerId._id} userId={request.userId} requestId={request._id}/>
        )}
        </div>
        </div>
        ))}
    </div>
    
  )
}

export default UserContracts
