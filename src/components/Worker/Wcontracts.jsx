

const Wcontracts = () => {
  return (
    <div className='bg-[#DFE7B4]'>
    <main className="p-6 sm:p-10 space-y-6 h-screen">
      {/* Dashboard Heading Section */}
      <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row justify-between">
        <div className="mr-6">
          <h1 className="text-4xl font-semibold mb-2">Contract Details</h1>
          <h2 className="text-gray-600 ml-0.5">Your Contracts</h2>
        </div>
        <div className="flex flex-wrap items-start justify-end -mb-3">
          <button  className={`inline-flex px-4 py-2  border border-purple-600 rounded-md mb-3 `}>
            Contracts
          </button>
          <button  className={`inline-flex px-4 py-2  border border-purple-600 rounded-md mb-3 ml-6 `}>
            Requests
          </button>
        </div>
      </div>
      {/* Statistics Section */}
      <section className="bg-white p-8 shadow rounded-lg h-full">
      
      </section>    
    </main>
  </div>
  )
}

export default Wcontracts
