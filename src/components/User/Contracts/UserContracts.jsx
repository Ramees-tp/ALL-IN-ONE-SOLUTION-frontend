import React from 'react'

const UserContracts = () => {
  return (
    <div>
        <h2 className="text-2xl font-semibold mb-6">Contracts</h2>

        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
          <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
            {/* ... Search bar section (same as in your HTML) ... */}
          </div>
          <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
           
            <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
              {/* ... Pagination section (same as in your HTML) ... */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserContracts
