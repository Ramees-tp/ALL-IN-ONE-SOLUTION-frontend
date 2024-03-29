  import { useEffect, useState } from 'react'
  import axiosInstance from '../../api/worker/workerInstance';
  import SocketChatWorker from './SocketChatWorker';
  import OtpEnter from './OtpEnter';
  import CommonLeafMap from '../CommonLeafMap';


  const AcceptedContracts = () => {
      const [requests, setRequest] = useState([])
      const [showChat, setShowChat] = useState(false);
      const [showMap, setShowMap] = useState(false);
      const [showOtp, setShowOtp] = useState(false);
      const [selectedContract, setSelectedContract] = useState(null);
      const [center, setCenter] = useState({lat: 11.24802, 
        lng: 75.7804, });
        console.log('center', center);
    

      const workRequest = async () =>{
          try{
            const res = await axiosInstance.get('/worker/workRequest');
              if(res.status===200){
                setRequest(res.data.requests)
              }           
          } catch (error) {
            console.log(error);
          }
        }
        useEffect(()=>{
          workRequest()
        },[])

        const toggleOtp = async (requestId) =>{
          setSelectedContract(requestId);
          setShowOtp((prevShowChat) => !prevShowChat);
          setShowChat(false);
          setShowMap(false);
        }

      const toggleChat = (requestId) => {
        setSelectedContract(requestId);
        setShowChat((prevShowChat) => !prevShowChat);
        setShowMap(false);
        setShowOtp(false);
      };

      const showMapLeaf = (requestId)=>{
        setSelectedContract(requestId);
        setShowMap((prevShowChat) => !prevShowChat);
        setShowChat(false);
        setShowOtp(false);
      }

      useEffect(() => {
        const workerLocation = localStorage.getItem('workerLocation');
        if(workerLocation){
          const { center, placeName } = JSON.parse(workerLocation);
          console.log( center, placeName);
          setCenter(center);
          // setPlaceName(placeName);
        }
      }, []);

    return (
      <div>
      <div className=''>
        <h2 className="text-2xl font-semibold sm:mb-6 mb-3">Contracts</h2>
        {requests.length > 0 && requests.filter(request => request.payment).map((request) => (
          <div key={request._id} className='flex sm:flex-row flex-col gap-4 mb-5'>
            <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 md:pr-10 lg:px-8 lg:w-[70%] ">
              
              <section className="align-middle   rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-slate-100 shadow-xl md:px-12 px-4 relative">
              {request.completed && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 text-white rounded-t-lg sm:px-12">
                  <p className='text-4xl font-bold text-green-500 p-36'></p>
                </div>
              )}
                <div className='flex md:flex-row sm:items-start items-center flex-col-reverse w-full gap-y-4'>
                  <div className='grid md:grid-cols-6 grid-cols-1 sm:grid-rows-3 grid-rows-4 md:gap-5 md:w-[70%] text-gray-800'>
                    <p className='sm:col-span-6 flex items-center text-2xl font-bold'> {request.userData.firstName} {request.userData.lastName}</p>
                    <p className='lg:col-span-1 col-span-3 font-semibold'>OrderID</p>
                    <p className='sm:col-span-4 col-span-3'>{request._id}</p>
                    <p className='sm:col-span-6 flex items-center text-xl text-green-900'>{new Date(request.date).toLocaleDateString()} - {request.day}</p>
                  </div>
                  <div className='md:w-[30%]'>
                    <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
                      <img 
                        src={request.userData.userImage} 
                        alt="profile"
                        className="object-cover w-full h-full" 
                      />
                    </div>
                  </div>
                </div>
              </section>
              <section className="align-middle inline-block min-w-full shadow overflow-hidden bg-slate-100 shadow-dashboard lg:px-8 px-2 md:pt-3 rounded-bl-lg rounded-br-lg relative">
              {request.completed && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 text-white rounded-b-lg sm:px-12">
                  <p className='text-4xl font-bold text-green-500 p-36 '>Work Completed</p>
                </div>
              )}
                <p className='text-lg text-gray-700 font-bold'>Contact</p>
                <div className=" flex flex-col justify-center mt-4 work-sans bg-white shadow-xl rounded lg:p-6 p-2 mb-5">
                  <div className='grid md:grid-cols-2 md:grid-rows-3 items-center   md:w-[30%] md:gap-x-20'>
                    <p className='md:text-base sm:text-[85%] text-base   font-bold'>Call</p>
                    <p className='md:text-base sm:text-[85%] text-base '>{request.userData.phoneNumber}</p>
                    <p className='md:text-base sm:text-[85%] text-base font-bold'>EMAIL</p>
                    <p className='md:text-base sm:text-[85%] text-base '>{request.userData.email||'Not available'}</p>
                    <p className='md:text-base sm:text-[85%] text-base font-bold'>Worker ID</p>
                    <p className='md:text-base sm:text-[85%] text-base '>{request.userData.userId}</p>
                    <p className='md:text-base sm:text-[85%] text-base font-bold'>Place</p>
                    <p className='md:text-base sm:text-[85%] text-base '>{request.userData.city}</p>
                  </div>
                  <div className='md:ml-auto flex justify-center mt-5'>
                    <button
                      onClick={() => showMapLeaf(request._id)}
                      className=" lg:text-base text-[90%] inline-flex lg:px-5 px-2 md:py-2 py-1 text-purple-600 hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100 border border-purple-600 rounded-md ml-3"
                    >Map Location
                    </button>
                    <button
                      onClick={() => toggleChat(request._id)}
                      className=" lg:text-base text-[90%] inline-flex lg:px-5 px-2 md:py-2 py-1 text-red-600 hover:text-red-700 focus:text-red-700 hover:bg-red-100 focus:bg-red-100 border border-red-600 rounded-md ml-3"
                    >
                      {showChat && selectedContract._id === request._id ? 'Close Chat' : 'Live Chat'}
                    </button>
                    <button
                      onClick={()=> toggleOtp(request._id)}
                      className=" lg:text-base text-[90%] inline-flex lg:px-5 px-2 md:py-2 py-1 text-green-600 hover:text-green-700 focus:text-green-700 hover:bg-green-100 focus:bg-green-100 border border-green-600 rounded-md ml-3"
                    >Enter OTP
                    </button>
                  </div>
                </div>
              </section>
            </div>
            <div className='lg:w-[30%]'>
              {!request.completed && (
                <>
                  {showChat && selectedContract === request._id && (
                    <SocketChatWorker workerId={request.workerId} userId={request.userId} requestId={request._id}/>
                  )}
                  {showMap && selectedContract === request._id && (
                    <div className=' h-[100%]'>
                      <CommonLeafMap initialCenter={{lat: request.coordinates[1], lng: request.coordinates[0]}} initialStart={center} userType="worker" />
                    </div> 
                  )}
                  {showOtp && selectedContract === request._id && (
                    <div className=' h-[100%]'>
                      <OtpEnter workerId={request.workerId} userId={request.userId} requestId={request._id}/>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    )
  }

  export default AcceptedContracts
