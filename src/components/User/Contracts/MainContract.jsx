import { useState } from 'react'
import ContractRequests from './ContractRequests'
import UserContracts from './UserContracts'


const MainContracts = () => {

  const [show1, setShow1] = useState(true)
  const [show2, setShow2] = useState(false)
  const [activeButton, setActiveButton] = useState(1);

  const showComponent = (index) =>{
    setShow1(false);
    setShow2(false)
    setActiveButton(index)
    switch (index) {
      case 1 :
        setShow1(true);
        break;
      case 2 :
        setShow2(true);
        break
    }
  }
  return (
    <div className='bg-[#fffdcb]'>
    <main className="p-2 sm:p-10 space-y-6 ">
      {/* Dashboard Heading Section */}
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
        <div className="mr-6">
          <h1 className="md:text-4xl text-3xl font-semibold md:mb-2">Contract Details</h1>
          <h2 className="text-gray-600 ml-0.5">Your Contracts</h2>
        </div>
        <div className="flex flex-wrap items-start md:justify-end justify-center -mb-3">
          <button onClick={()=>showComponent(1)} className={`inline-flex px-4 py-2  border border-purple-600 rounded-md mb-3 ${activeButton === 1 ? 'bg-purple-600 text-white' : 'bg-purple-200 text-purple-600'}`}>
            Contracts
          </button>
          <button onClick={()=>showComponent(2)} className={`inline-flex px-4 py-2  border border-purple-600 rounded-md mb-3 ml-6 ${activeButton === 2 ? 'bg-purple-600 text-white' : 'bg-purple-200 text-purple-600'}`}>
            Requests
          </button>
        </div>
      </div>
      {/* Statistics Section */}
      <section className="bg-white md:p-8 p-2 shadow rounded-lg h-full">
       {show1 && <UserContracts/>}
       {show2 && <ContractRequests/>}
      </section>    
    </main>
  </div>
  )
}

export default MainContracts
